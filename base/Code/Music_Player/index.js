import data from "./database/listMusic.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const heading = $(".title");
const thumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const player = $(".player");
const progress = $("#progress");
const nextBtn = $(".btn-next");
const prevBtn = $(".btn-prev");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playList = $(".playlist");
const inputSearch = $(".input-search");
const searchSong = $(".search-music");
const volumeBtn = $(".btn-volume");
const muteBtn = $(".btn-mute");
const optionsBtn = $(".btn-ellipsis");
const options = $(".option-list");
const darkMode = $(".option-themes");
const addFavorite = $(".add-favorite");
console.log(addFavorite);

// DÙNG ĐỂ RENDER RA GIAO DIỆN
const apps = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  // import từ database
  songs: data.songs,
  // hàm xử lý sự kiện
  handleEvents: function () {
    // #TASK02: Scroll
    const cd = $(".cd");
    const cdWidth = cd.offsetWidth;
    const _this = this;

    // #TASK04: xử lý rotate cd
    const thumbAnimate = thumb.animate(
      {
        transform: "rotate(360deg",
      },
      {
        duration: 10000, // 10000ms = 10s
        iterations: Infinity, // lặp vô hạn
      }
    );
    thumbAnimate.pause(); // khi start apps -> default: pause()

    document.onscroll = function () {
      // console.log(window.scrollY);
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      // console.log(scrollTop);

      const newWidth = cdWidth - scrollTop;
      console.log(newWidth);

      // khi scroll nhanh sẻ lỗi hiển thị thumb song
      cd.style.width = newWidth > 0 ? newWidth + "px" : 0;
      // Tinh opacity
      cd.style.opacity = newWidth / cd;
    };

    // #TASK03. Play / pause / seek
    playBtn.onclick = function () {
      // _this.isPlaying = true;
      if (apps.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // khi play music
    audio.onplay = function () {
      apps.isPlaying = true;
      player.classList.add("playing");
      thumbAnimate.play();
    };

    // khi pause music
    audio.onpause = function () {
      apps.isPlaying = false;
      player.classList.remove("playing");
      thumbAnimate.pause();
    };

    // cập nhật thanh progress khi music đang chạy
    audio.ontimeupdate = function () {
      if (audio.duration) {
        // cập nhật thanh tiến độ khi play music
        const percent = Math.floor((audio.currentTime / audio.duration) * 100);
        progress.value = percent;
        progress.style.background = `linear-gradient(to right, red ${percent}%, #e0e0e0 ${percent}%)`;
      }
    };

    // xử lý khi tua thanh progress
    progress.onchange = function (e) {
      // console.log(e.target.value);
      const tmp = e.target.value;
      const time = (audio.duration / 100) * tmp;
      audio.currentTime = time;
    };

    // xử lý sự kiện next và prev bài
    nextBtn.onclick = function () {
      if (apps.isRandom) {
        apps.randomSong();
      } else {
        apps.nextSong();
      }
      audio.play();
      apps.render();
    };

    prevBtn.onclick = function () {
      if (apps.isRandom) {
        apps.randomSong();
      } else {
        apps.prevSong();
      }
      audio.play();
    };

    // xử lý sự kiện phát ngẫu nhiên bài
    randomBtn.onclick = function () {
      apps.isRandom = !apps.isRandom;
      randomBtn.classList.toggle("active", apps.isRandom);
    };

    // xử lý sự kiện next khi hết bài
    audio.onended = function () {
      if (apps.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // #TASK07: Repeat lại bài hát
    repeatBtn.onclick = function () {
      apps.isRepeat = !apps.isRepeat;
      repeatBtn.classList.toggle("active", apps.isRepeat);
    };

    // Lắng nghe sự kiện click trong playlist
    playList.onclick = function (e) {
      // Tìm phần tử .songs gần nhất mà không có lớp active
      const songTmp = e.target.closest(".songs:not(.active)");

      // Kiểm tra khi click vào một bài hát hoặc vào tùy chọn
      if (songTmp || e.target.closest(".songs-option")) {
        // Nếu là một bài hát mà không có lớp active
        if (songTmp) {
          // console.log(songTmp.getAttribute("data-index"));
          // console.log(songTmp.dataset.index);
          apps.currentIndex = Number(songTmp.dataset.index);
          apps.renderCurrentSong();
          apps.render();
          audio.play();
        }

        // Nếu là tùy chọn của bài hát
        if (e.target.closest(".songs-option")) {
          console.log("Clicked on song option");
        }
      }
    };

    // xử lý sự kiện search bài hát
    inputSearch.onclick = function (e) {
      searchSong.classList.toggle("active");
    };

    // Lắng nghe sự kiện click cho volumeBtn
    volumeBtn.addEventListener("click", function () {
      // Thay đổi trạng thái mute của audio
      audio.muted = !audio.muted;

      // Ẩn volumeBtn và hiển thị muteBtn
      volumeBtn.style.display = "none";
      muteBtn.style.display = "block";

      // Cập nhật trạng thái của volumeBtn (active) dựa trên trạng thái mute
      volumeBtn.classList.toggle("active", audio.muted);
    });

    // Lắng nghe sự kiện click cho muteBtn
    muteBtn.addEventListener("click", function () {
      // Bỏ mute audio
      audio.muted = false;

      // Ẩn muteBtn và hiển thị volumeBtn
      muteBtn.style.display = "none";
      volumeBtn.style.display = "block";

      // Loại bỏ trạng thái active của volumeBtn khi bỏ mute
      volumeBtn.classList.remove("active");
    });

    // Lắng nghe sự kiện click trên optionsBtn
    optionsBtn.addEventListener("click", function (e) {
      // Ngăn không cho sự kiện click trên optionsBtn được truyền lên phía trên
      e.stopPropagation();

      // Kiểm tra nếu options đang hiển thị hay không
      const isVisible = options.style.display === "block";

      // Nếu options đang hiển thị, đóng nó; nếu không, mở nó
      options.style.display = isVisible ? "none" : "block";
    });

    // Lắng nghe sự kiện click trên toàn bộ trang để đóng options nếu click ra ngoài
    document.addEventListener("click", function (e) {
      // Kiểm tra xem click có xảy ra ngoài optionsBtn và options không
      if (!optionsBtn.contains(e.target) && !options.contains(e.target)) {
        // Đóng options nếu click ra ngoài
        options.style.display = "none";
      }
    });
  },

  // lay ra bai hat
  // getCurrentsong() {
  //   return this.songs[this.currentIndex];
  // },

  // chạy chương trình gọi hàm start()
  start: function () {
    // định nghĩa các thuộc tính Obj
    this.defineProperties();

    // lắng nghe / xử lý sự kiện DOM
    this.handleEvents();

    // render ra giao diện
    this.render();

    // this.getCurrentsong();

    // hiển thị bài hát hiện tại
    this.renderCurrentSong();
  },

  // #TASK 01: render ra giao diện
  render: function () {
    const music = this.songs.map((song, index) => {
      return `
          <div class="songs ${
            index === this.currentIndex ? "active" : ""
          }" data-index="${index}">
            <div class="songs-thumb" style="background-image: url('${
              song.image
            }')"></div>
            <div class="songs-body">
              <h3 class="songs-title">${song.name}</h3>
              <p class="songs-author">${song.singer}</p>
            </div>
            <div class="songs-option">
              <i class="fa-regular fa-heart"></i>
            </div>
          </div>
      `;
    });
    const playList = $(".playlist");
    playList.innerHTML = music.join("");
  },

  // start apps -> render music ra giao diện
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },

  // hiển thị bài hát hiện tại
  renderCurrentSong: function () {
    // cập nhật dữ liệu
    heading.textContent = this.currentSong.name;
    thumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },

  // #TASK05: xử lý sự kiện next và prev bài hát
  nextSong: function () {
    this.currentIndex++;
    console.log(this.currentIndex, this.songs.length);

    if (this.currentIndex >= this.songs.length - 1) {
      this.currentIndex = 0;
    }
    this.renderCurrentSong();
  },

  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.renderCurrentSong();
  },

  // #TASK06: Random music
  randomSong: function () {
    let randomMusic;
    do {
      randomMusic = Math.floor(Math.random() * this.songs.length);
    } while (randomMusic === this.currentIndex);
    // console.log(randomMusic);
    this.currentIndex = randomMusic;
    this.renderCurrentSong();
  },

  scrollTopActiveSong: function () {
    setTimeout(() => {
      $(".songs.active").scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 300);
  },
};

apps.start();
