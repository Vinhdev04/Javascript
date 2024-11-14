const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// DÙNG ĐỂ RENDER RA GIAO DIỆN

const apps = {
  songs: [
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
  },

  // chạy chương trình gọi hàm start()
  start: function () {
    this.handleEvents();
    this.render();
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
                <i class="fa-solid fa-ellipsis"></i>
              </div>
            </div>
      `;
    });
    const playList = $(".playlist");
    playList.innerHTML = music.join("");
  },
};

apps.start();
