//Action creator
export const selectSong = song => {
  //returns an 'action',  requires type:"", payload:{"";""}
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
