import { useState } from "react";

import AppHeader from "../appHeader/AppHeader";
import CatList from "../catList/CatList";
import CatFavorite from "../catFavorite/CatFavorite";

function App() {
  const [favoriteCatList, setFavoriteCatList] = useState([]);

  const addCatInFavoriteList = (cat) => {
    setFavoriteCatList((favoriteCatList) => [...favoriteCatList, cat]);
  };
  const removeCatInFavoriteList = (cat) => {
    const filteredList = favoriteCatList.filter((item) => item.id !== cat.id);
    setFavoriteCatList(filteredList);
  };

  return (
    <>
      <AppHeader />
      <CatList addCatInFavoriteList={addCatInFavoriteList} removeCatInFavoriteList={removeCatInFavoriteList} />
      <CatFavorite
        favoriteCatList={favoriteCatList}
        addCatInFavoriteList={addCatInFavoriteList}
        removeCatInFavoriteList={removeCatInFavoriteList}
      />
    </>
  );
}

export default App;
