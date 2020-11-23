const ShowMenu = document.querySelector(".showmenu");
const NowMusic = document.querySelector(".nowmusic");
const Song = document.querySelector(".song");
const Range = document.querySelector(".range");
const Name = document.querySelector("#name");
const Artist = document.querySelector("#artist");
const Thumb = document.querySelector(".thumI");
const Body = document.querySelector("body");
//음악 정보를 위한 변수//
var SongNum = 0;
var SongS = [`music/1.mp3`, `music/2.mp3`, `music/3.mp3`, `music/4.mp3`, `music/5.mp3`,];
var ThumS = [`icon/musicThumb/1.jpg`, `icon/musicThumb/2.jpg`, `icon/musicThumb/3.jpg`, `icon/musicThumb/4.jpg`, `icon/musicThumb/5.jpg`,];
var NameS = [`ENDLESS MOTION`, `BUDDY`, `Forget Me Not`, `Life After Death`, `Goji Berry Beat`,];
var ArtistS = [`Benjamin Tissot`, `Benjamin Tissot`, `Patrick Patrikios`, `DJ Freedem`, `Nana Kwabena`,];
var ColorS = [`#F7F7F7`, `#FED45C`, `#CDCDCD`, `#D42745`, `#F0BF60`];
//음악 정보를 위한 변수//

function change() {
    if (ShowMenu.style.display == "none") {
        NowMusic.style.display = 'none';
        ShowMenu.style.display = 'flex';
    }
    else {
        NowMusic.style.display = 'block';
        ShowMenu.style.display = 'none';
    }
}

function PlayMusic() {
    Song.play();
}

function PauseMusic() {
    Song.pause();
}

function NextMusic() {
    SongNum++;
    if (SongNum > 4) {
        SongNum = 0;
    }
    Song.src = SongS[SongNum];
    Thumb.src = ThumS[SongNum];
    Artist.innerHTML = ArtistS[SongNum];
    Name.innerHTML = NameS[SongNum];
    Body.style.backgroundColor = ColorS[SongNum];
    NowMusic.style.display = 'block';
    ShowMenu.style.display = 'none';
    PlayMusic();
}

function PreMusic() {
    SongNum--;
    if (SongNum < 0) {
        SongNum = 4;
    }
    Song.src = SongS[SongNum];
    Thumb.src = ThumS[SongNum];
    Artist.innerHTML = ArtistS[SongNum];
    Name.innerHTML = NameS[SongNum];
    Body.style.backgroundColor = ColorS[SongNum];
    NowMusic.style.display = 'block';
    ShowMenu.style.display = 'none';
    PlayMusic();
}

function MenuMusic(num) {
    SongNum = num;
    Song.src = SongS[SongNum];
    Thumb.src = ThumS[SongNum];
    Artist.innerHTML = ArtistS[SongNum];
    Name.innerHTML = NameS[SongNum];
    Body.style.backgroundColor = ColorS[SongNum];
    NowMusic.style.display = 'block';
    ShowMenu.style.display = 'none';
    PlayMusic();
}

function LoadRange() {
    Range.max = Song.duration;
    Range.value = Song.currentTime;
}
function ChangeRange() {
    Song.currentTime = Range.value;
};

setInterval(LoadRange, 500);