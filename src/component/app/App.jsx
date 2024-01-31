import { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";

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
        <Suspense fallback={<h1>Hello!</h1>}>
          <Routes>
            <Route
              path="/"
              element={
                <MainPage
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
