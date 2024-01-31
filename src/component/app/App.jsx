import { useState, useEffect } from "react";

import AppHeader from "../appHeader/AppHeader";
import CatList from "../catList/CatList";
import CatFavorite from "../catFavorite/CatFavorite";

function App() {
  const [favoriteCatList, setFavoriteCatList] = useState([]);
  useEffect(() => {
    console.log(favoriteCatList);
  }, [favoriteCatList]);

  return (
    <>
      <AppHeader />
      {/* <CatList favoriteCatList={favoriteCatList} setFavoriteCatList={setFavoriteCatList}/> */}
      <CatFavorite favoriteCatList={favoriteCatList} setFavoriteCatList={setFavoriteCatList} />
    </>
  );
}

export default App;
