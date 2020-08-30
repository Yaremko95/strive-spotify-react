import C from "./constants";
import axios from "axios";
import authAxios from "./authAxios";
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

export const addSongToPlaylist = (playlistId, song) => ({
  type: C.ADD_SONG_TO_PLAYLIST,
  payload: song,
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

export const isLoading = (value) => ({
  type: C.IS_LOADING,
  payload: value,
});
export const isLoggedIn = () => ({
  type: C.SET_LOGGED_IN,
});
export const setError = (e) => ({
  type: C.SET_ERROR,
  payload: e,
});
export const setSingleAlbum = (album) => ({
  type: C.SET_SINGLE_ALBUM,
  payload: album,
});
export const setUser = (user) => ({
  type: C.SET_USER,
  payload: user,
});
export const fetchData = (endpoint, param, search = true, value, index, id) => (
  dispatch
) => {
  let str = search
    ? `${endpoint}search/${param}?q=${value}&index=${index}`
    : `${endpoint + param}/${id}`;
  console.log("str,", str);
  fetch(str, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
      if (search) {
        if (param === "track/title") dispatch(setSongs(data.data));
        else if (param === "album") {
          let filteredAlbums = data.data.filter((album) =>
            album.title.toLowerCase().includes(`${value}`)
          );
          dispatch(setAlbums(filteredAlbums));
        } else dispatch(setArtists(data.data));
      } else {
        dispatch(setSingleAlbum(data));
        dispatch(setSongs(data.tracks.data));
      }
    });
};

export const authenticate = (endpoint, param, body) => async (dispatch) => {
  dispatch(isLoading(true));
  const res = await axios(`${endpoint}/${param}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    data: body,
    withCredentials: true,
  });
  console.log(res);
  if (res.status === 200) {
    // display an error
    alert("f");
    dispatch(isLoggedIn());
    dispatch(isLoading(false));
    // dispatch(setUser(user));
    // if (param === "signup") {
    //   console.log(res);
    // } else window.location = process.env.REACT_APP_API_URL;
  }
};

export const authorize = () => async (dispatch) => {
  try {
    alert("h");
    dispatch(isLoading(true));
    const res = await authAxios.get("/users/me", { withCredentials: true });
    let user = {};
    if (!res) {
      const secondRes = await axios.get("/users/me", {
        withCredentials: true,
      });
      user = secondRes.data;
    } else {
      user = res.data;
    }
    console.log(user);
    dispatch(isLoggedIn());
    dispatch(setUser(user));
    dispatch(isLoading(false));
    alert("w");
  } catch (error) {
    console.log(error);
    dispatch(isLoading(false));
  }
};
