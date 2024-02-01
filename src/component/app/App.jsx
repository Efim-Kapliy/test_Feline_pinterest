import { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import("../pages/404Page/404Page"));
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
              path="/test_Feline_pinterest/"
              element={
                <MainPage
                  favoriteCatList={favoriteCatList}
                  addCatInFavoriteList={addCatInFavoriteList}
                  removeCatInFavoriteList={removeCatInFavoriteList}
                />
              }
            />
            <Route
              path="/test_Feline_pinterest/favorite"
              element={
                <CatFavoritePage
                  favoriteCatList={favoriteCatList}
                  addCatInFavoriteList={addCatInFavoriteList}
                  removeCatInFavoriteList={removeCatInFavoriteList}
                />
              }
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}

export default App;
