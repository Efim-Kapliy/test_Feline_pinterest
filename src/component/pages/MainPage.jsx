import PropTypes from "prop-types";
import CatList from "../catList/CatList";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const MainPage = (props) => {
  const { favoriteCatList, addCatInFavoriteList, removeCatInFavoriteList } = props;
  return (
    <ErrorBoundary>
      <CatList
        favoriteCatList={favoriteCatList}
        addCatInFavoriteList={addCatInFavoriteList}
        removeCatInFavoriteList={removeCatInFavoriteList}
      />
    </ErrorBoundary>
  );
};

MainPage.propTypes = {
  favoriteCatList: PropTypes.array.isRequired,
  addCatInFavoriteList: PropTypes.func.isRequired,
  removeCatInFavoriteList: PropTypes.func.isRequired,
};

export default MainPage;
