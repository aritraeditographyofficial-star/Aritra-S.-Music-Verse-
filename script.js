const songs = [
  {
    title: "Your Song Name",
    artist: "Aritra S.",
    file: "songs/song1.mp3"
  },
  {
    title: "Your Second Song",
    artist: "Aritra S.",
    file: "songs/song2.mp3"
  }
];

const songList = document.getElementById("songList");
const audio = document.getElementById("audioPlayer");

songs.forEach((song, index) => {
  const item = document.createElement("div");
  item.className = "song-card";

  item.innerHTML = `
    <div>
      <h3>${song.title}</h3>
      <p>${song.artist}</p>
    </div>
    <button onclick="playSong(${index})">▶ Play</button>
  `;

  songList.appendChild(item);
});

function playSong(index) {
  audio.src = songs[index].file;
  audio.play();
}
