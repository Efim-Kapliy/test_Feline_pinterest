import PropTypes from "prop-types";
import CatFavorite from "../catFavorite/CatFavorite";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const CatFavoritePage = (props) => {
  const { favoriteCatList, addCatInFavoriteList, removeCatInFavoriteList } = props;
  return (
    <>
      <ErrorBoundary>
        <CatFavorite
          favoriteCatList={favoriteCatList}
          addCatInFavoriteList={addCatInFavoriteList}
          removeCatInFavoriteList={removeCatInFavoriteList}
        />
      </ErrorBoundary>
    </>
  );
};

CatFavoritePage.propTypes = {
  favoriteCatList: PropTypes.array.isRequired,
  addCatInFavoriteList: PropTypes.func.isRequired,
  removeCatInFavoriteList: PropTypes.func.isRequired,
};

export default CatFavoritePage;
