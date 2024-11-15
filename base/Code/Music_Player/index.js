const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const heading = $(".title");
const thumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const player = $(".player");
const progress = $("#progress");
// DÙNG ĐỂ RENDER RA GIAO DIỆN
const apps = {
  currentIndex: 0,
  isPlaying: false,
  songs: [
    {
      name: "Trình",
      singer: "Hiếu Thứ Hai",
      path: "./assets/music/Song02.mp3",
      image: "./assets/Images/background03.jpg",
    },
    {
      name: "Lạ Lùng",
      singer: "Vũ",
      path: "./assets/music/Song01.mp3",
      image: "./assets/Images/background01.jpg",
    },
    {
      name: "Lạ Lùng",
      singer: "Vũ",
      path: "./assets/music/Song01.mp3",
      image: "./assets/Images/background01.jpg",
    },
    {
      name: "Lạ Lùng",
      singer: "Vũ",
      path: "./assets/music/Song01.mp3",
      image: "./assets/Images/background01.jpg",
    },
    {
      name: "Lạ Lùng",
      singer: "Vũ",
      path: "./assets/music/Song01.mp3",
      image: "./assets/Images/background01.jpg",
    },
    {
      name: "Đố Em biết ",
      singer: "Vũ if Đen",
      path: "./assets/music/Song02.mp3",
      image: "./assets/Images/background02.jpg",
    },
    {
      name: "Đố Em biết ",
      singer: "Vũ if Đen",
      path: "./assets/music/Song02.mp3",
      image: "./assets/Images/background02.jpg",
    },
    {
      name: "Đố Em biết ",
      singer: "Vũ if Đen",
      path: "./assets/music/Song02.mp3",
      image: "./assets/Images/background02.jpg",
    },
    {
      name: "Đố Em biết ",
      singer: "Vũ if Đen",
      path: "./assets/music/Song02.mp3",
      image: "./assets/Images/background02.jpg",
    },
    {
      name: "Đố Em biết ",
      singer: "Vũ if Đen",
      path: "./assets/music/Song02.mp3",
      image: "./assets/Images/background02.jpg",
    },

    {
      name: "Trình",
      singer: "Hiếu Thứ Hai",
      path: "./assets/music/Song03.mp3",
      image: "./assets/Images/background03.jpg",
    },
    {
      name: "Trình",
      singer: "Hiếu Thứ Hai",
      path: "./assets/music/Song03.mp3",
      image: "./assets/Images/background03.jpg",
    },
    {
      name: "Trình",
      singer: "Hiếu Thứ Hai",
      path: "./assets/music/Song03.mp3",
      image: "./assets/Images/background03.jpg",
    },
    {
      name: "Trình",
      singer: "Hiếu Thứ Hai",
      path: "./assets/music/Song03.mp3",
      image: "./assets/Images/background03.jpg",
    },
  ],

  // hàm xử lý sự kiện
  handleEvents: function () {
    // #TASK02: Scroll
    const cd = $(".cd");
    const cdWidth = cd.offsetWidth;
    const _this = this;
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
    };

    // khi pause music
    audio.onpause = function () {
      apps.isPlaying = false;
      player.classList.remove("playing");
    };

    // cập nhật thanh progress khi music đang chạy
    audio.ontimeupdate = function () {
      if (audio.duration) {
        // cập nhật thanh tiến độ khi play music
        const percent = Math.floor((audio.currentTime / audio.duration) * 100);
        progress.value = percent;
      }
    };

    // xử lý khi tua thanh progress
    progress.onchange = function (e) {
      // console.log(e.target.value);
      const tmp = e.target.value;
      const time = (audio.duration / 100) * tmp;
      audio.currentTime = time;
    };
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
    const music = this.songs.map((song) => {
      return `
            <div class="songs">
              <div
                class="songs-thumb"
                style="background-image: url('${song.image}')"
              ></div>
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
};

apps.start();
