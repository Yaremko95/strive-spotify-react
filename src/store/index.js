import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
  loading: false,
  error: null,
  singleAlbum: {},

  songs: {
    list: [],
    liked: [],
  },
  albums: [],
  artists: [],
  playlists: [
    {
      id: 1,
      name: "playlist1",
      description: "something",
      songs: [],
    },
  ],
};

export default () =>
  composeEnhancers(applyMiddleware(thunk))(createStore)(reducer, initialState);
