import C from "./constants";

export const setSongs = (songs) => ({
  type: C.SET_SONGS,
  payload: songs,
});

export const setAlbums = (albums) => ({
  type: C.SET_ALBUMS,
  payload: albums,
});

export const setArtists = (artists) => ({
  type: C.SET_ALBUMS,
  payload: artists,
});

export const addPlaylist = (playlist) => ({
  type: C.ADD_PLAYLIST,
  payload: playlist,
});

export const removePlaylist = (id) => ({
  type: C.REMOVE_PLAYLIST,
  payload: id,
});

export const updatePlaylist = (playlist) => ({
  type: C.UPDATE_PLAYLIST,
  payload: playlist,
});

export const addSongToPlaylist = (playlistId, songId) => ({
  type: C.ADD_SONG_TO_PLAYLIST,
  payload: songId,
  playlistId: playlistId,
});

export const removeSongFromPlaylist = (playlistId, songId) => ({
  type: C.REMOVE_SONG_FROM_PLAYLIST,
  payload: songId,
  playlistId: playlistId,
});

export const likeSong = (id) => ({
  type: C.LIKE_SONG,
  payload: id,
});
export const unlikeSong = (id) => ({
  type: C.UNLIKE_SONG,
  payload: id,
});

export const isLoading = () => ({
  type: C.IS_LOADING,
});
export const setError = (e) => ({
  type: C.SET_ERROR,
  payload: e,
});

export const fetchData = (endpoint, param, value, index) => (dispatch) => {
  fetch(`${endpoint}${param}?q=${value}&index=${index}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (param === "track") dispatch(setSongs(data.data));
      else if (param === "album") dispatch(setAlbums(data.data));
      else dispatch(setArtists(data.data));
    });
};
