var playlist = {
  "Kendrick Lamar": "DNA"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}
