import { useState, lazy, createContext } from "react";

import AppHeader from "../appHeader/AppHeader";
import CatList from "../catList/CatList";
import CatFavorite from "../catFavorite/CatFavorite";
const MainPage = lazy(() => import("../pages/MainPage"));
const CatFavoritePage = lazy(() => import("../pages/CatFavoritePage"));

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
      <MainPage addCatInFavoriteList={addCatInFavoriteList} removeCatInFavoriteList={removeCatInFavoriteList} />
      <CatFavoritePage
        favoriteCatList={favoriteCatList}
        addCatInFavoriteList={addCatInFavoriteList}
        removeCatInFavoriteList={removeCatInFavoriteList}
      />
    </>
  );
}

export default App;
