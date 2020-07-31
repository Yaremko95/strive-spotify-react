/// implement search as home page
//add btn to each song to add to playlist with dropdown showing all lists
//create playlist btn in the sidebar
//modal for creating new playlist

//PLAYLIST PAGE

//bottom player
//song on click appears


//like btn


//redux reducer
const constants = {
    FETCH_DATA:'FETCH_DATA',
    SET_SONGS:'SET_SONGS',
    SET_ALBUMS:'SET_ALBUMS',
    SET_ARTISTS:'SET_ARTISTS',
    ADD_PLAYLIST:'ADD_PLAYLIST',
    ADD_SONG_TO_PLAYLIST:'ADD_SONG_TO_PLAYLIST',
    LIKE_SONG:'LIKE_SONG',
    IS_LOADING:'IS_LOADING'




};






const initialState = {
    loading:false,
    songs:{
        list:[],
        liked:[]
    },
    albums:[],
    artists:[],
    playlists:[
        {
        name:"playlist1",
        description:'something',
          songs:[]
         },
    ]


}