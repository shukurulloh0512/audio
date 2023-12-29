const musics = [
  {
    nomi: "Billie Eilish - Bellyache",
    manzil: function () {
      return `./music/${this.nomi}.mp3`;
    },
    rasm: function () {
      return `./images/${this.nomi}.jpg`;
    },
  },
  {
    nomi: "Charlie Puth - Light Switch",
    manzil: function () {
      return `./music/${this.nomi}.mp3`;
    },
    rasm: function () {
      return `./images/${this.nomi}.jpg`;
    },
  },
  {
    nomi: "Coldplay X Selena Gomez - Let Somebody Go",
    manzil: function () {
      return `./music/${this.nomi}.mp3`;
    },
    rasm: function () {
      return `./images/${this.nomi}.jpg`;
    },
  },
  {
    nomi: "Pharrell Williams - Happy",
    manzil: function () {
      return `./music/${this.nomi}.mp3`;
    },
    rasm: function () {
      return `./images/${this.nomi}.jpg`;
    },
  },
  {
    nomi: "Taylor Swift ft. Kendrick Lamar - Bad Blood",
    manzil: function () {
      return `./music/${this.nomi}.mp3`;
    },
    rasm: function () {
      return `./images/${this.nomi}.jpg`;
    },
  },
  {
    nomi: "Billie Eilish - Bellyache",
    manzil: function () {
      return `./music/${this.nomi}.mp3`;
    },
    rasm: function () {
      return `./images/${this.nomi}.jpg`;
    },
  },
  {
    nomi: "Charlie Puth - Light Switch",
    manzil: function () {
      return `./music/${this.nomi}.mp3`;
    },
    rasm: function () {
      return `./images/${this.nomi}.jpg`;
    },
  },
  {
    nomi: "Coldplay X Selena Gomez - Let Somebody Go",
    manzil: function () {
      return `./music/${this.nomi}.mp3`;
    },
    rasm: function () {
      return `./images/${this.nomi}.jpg`;
    },
  },
  {
    nomi: "Pharrell Williams - Happy",
    manzil: function () {
      return `./music/${this.nomi}.mp3`;
    },
    rasm: function () {
      return `./images/${this.nomi}.jpg`;
    },
  },
  {
    nomi: "Taylor Swift ft. Kendrick Lamar - Bad Blood",
    manzil: function () {
      return `./music/${this.nomi}.mp3`;
    },
    rasm: function () {
      return `./images/${this.nomi}.jpg`;
    },
  },
];
console.log(musics[1].nomi);

let music_index = 0;
let main_fon = document.getElementById("main_fon");
let music_img = document.getElementById("music_img");
let marqueeid = document.getElementById("marqueeid");
let audioo = document.getElementById("audioo");
let play = document.getElementById("play");
let play_going = document.getElementById("play_going");
let volume = document.getElementById("volume");
let currant = document.getElementById("currant");
let duration = document.getElementById("duration");
let lenth = document.getElementById("lenth");
let music_list = document.getElementById("music_list");
let takrorlash = document.getElementById("takrorlash");
let isPlaying = false;
let myinterval;

music_info();
function volume_func() {
  audioo.volume = volume.value / 100;
}

function play_going_func() {
  audioo.currentTime = (audioo.duration * play_going.value) / 100;
  console;
}

function music_info() {
  play_going.value = 0;
  audioo.volume = volume.value / 100;
  main_fon.src = musics[music_index].rasm();
  music_img.src = musics[music_index].rasm();
  marqueeid.innerHTML = musics[music_index].nomi;
  audioo.src = musics[music_index].manzil();
  console.log("music_info");
}
audioo.addEventListener("canplaythrough", () => {
  duration.innerHTML =
    String(Math.trunc(Math.round(audioo.duration) / 60)).padStart(2, "0") +
    ":" +
    String(Math.round(audioo.duration) % 60).padStart(2, "0");
});

function audioo_going() {
  play_going.value = Math.round((audioo.currentTime * 100) / audioo.duration);
  currant.innerHTML =
    String(Math.trunc(Math.round(audioo.currentTime) / 60)).padStart(2, "0") +
    ":" +
    String(Math.round(audioo.currentTime) % 60).padStart(2, "0");

  if (Math.floor(audioo.currentTime) == Math.floor(audioo.duration)) {
    clearInterval(myinterval);
    next();
  }
}
function play_func() {
  clearInterval(myinterval);
  myinterval = setInterval(audioo_going, 1000);
  if (isPlaying) {
    isPlaying = false;
    play.innerHTML = "not_started";
    audioo.pause();
    console.log("");
    clearInterval(myinterval);
  } else {
    isPlaying = true;
    play.innerHTML = "pause_circle";
    audioo.play();
    console.log("play");
  }
}

function next() {
  if (music_index < musics.length - 1) {
    music_index += 1;
  } else {
    music_index = 0;
  }
  isPlaying = false;
  music_info();
  play_func();
}
function prav() {
  if (music_index == 0) {
    music_index += musics.length - 1;
  } else {
    music_index -= 1;
  }
  isPlaying = false;
  music_info();
  play_func();
}
function funcc() {
  if (musics == audioo.length) {
    audioo.play();
    musics = 0;
  } else if (musics < 0) {
    audioo.play();
    musics = audioo.length - 1;
  }
}
window.addEventListener("click", (event) => {
  if (event.target != music_list && event.target != lenth) {
    music_list.style.display = "none";
    console.log(event.target);
  }
});
function funcc() {
  music_list.style.display = "block";
}

function tak() {
  musics = manzil[0];
}

//////////////////////

for (let i = 0; i < musics.length; i++) {
  let music_itm = document.createElement("div");
  let music_itm_img = document.createElement("img");
  let music_itm_name = document.createElement("p");
  let music_itm_play = document.createElement("span");
  music_list.appendChild(music_itm);
  music_itm.appendChild(music_itm_img);
  music_itm.appendChild(music_itm_name);
  music_itm.appendChild(music_itm_play);
  music_itm.classList.add("music_itm");
  music_itm_img.classList.add("music_itm_img");
  music_itm_name.classList.add("music_itm_name");
  music_itm_play.classList.add("material-symbols-outlined");
  music_itm_play.innerHTML = "play_circle";
  music_itm_name.innerHTML = musics[i].nomi;
  music_itm_img.src = musics[i].rasm();
  music_itm.addEventListener("click", () => {
    music_list.querySelectorAll("span").forEach((element) => {
      element.innerHTML = "play_circle";
    });
    music_list.querySelectorAll("span").forEach((element) => {
      element.innerHTML = "play_circle";
    });
    if (music_index == i) {
      play_func();
    } else {
      music_index = i;
      music_info();
      isPlaying = false;
      play_func();
    }
  });
}
