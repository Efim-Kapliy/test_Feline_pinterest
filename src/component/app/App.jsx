import { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

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
    <Router>
      <AppHeader />
      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route
              path="/"
              element={
                <MainPage
                  favoriteCatList={favoriteCatList}
                  addCatInFavoriteList={addCatInFavoriteList}
                  removeCatInFavoriteList={removeCatInFavoriteList}
                />
              }
            />
            <Route
              path="/favorite"
              element={
                <CatFavoritePage
                  favoriteCatList={favoriteCatList}
                  addCatInFavoriteList={addCatInFavoriteList}
                  removeCatInFavoriteList={removeCatInFavoriteList}
                />
              }
            />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}

export default App;
