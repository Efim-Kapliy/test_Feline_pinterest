import PropTypes from "prop-types";
import CatList from "../catList/CatList";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const MainPage = (props) => {
  const { addCatInFavoriteList, removeCatInFavoriteList } = props;
  return (
    <ErrorBoundary>
      <CatList addCatInFavoriteList={addCatInFavoriteList} removeCatInFavoriteList={removeCatInFavoriteList} />
    </ErrorBoundary>
  );
};

MainPage.propTypes = {
  addCatInFavoriteList: PropTypes.func.isRequired,
  removeCatInFavoriteList: PropTypes.func.isRequired,
};

export default MainPage;
