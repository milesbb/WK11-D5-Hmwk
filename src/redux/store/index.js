import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AlbumsReducer from "../reducers/albums";
import ArtistReducer from "../reducers/artist";
import ExtraFuncReducer from "../reducers/extrafunc";
import SongsReducer from "../reducers/songs";


const comboReducer = combineReducers({
  albums: AlbumsReducer,
  songs: SongsReducer,
  artist: ArtistReducer,
  extraFunc: ExtraFuncReducer
});

const store = configureStore({
  reducer: comboReducer,
});

export default store;