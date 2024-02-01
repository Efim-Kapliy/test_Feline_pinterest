import { useState, useEffect, useCallback } from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import "./catList.scss";

import useCatsService from "../../services/CatsService";
import Spinner from "../spinner/Spinner";
import ErrorMassage from "../error/ErrorMassage";

import favoriteBorder from "../../assets/img/favorite_border.svg";
import favorite from "../../assets/img/favorite.svg";

const CatList = (props) => {
  const [catList, setCatList] = useState([]);
  const [offset, setOffset] = useState(18);
  const [catEnded, setCatEnded] = useState(false);
  const [buttonLoadingLocked, setButtonLoadingLocked] = useState(true);

  const { loading, error, getAllCats } = useCatsService();
  const { favoriteCatList, addCatInFavoriteList, removeCatInFavoriteList } = props;

  useEffect(() => {
    onRequest(offset);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onRequest(offset) {
    console.log("test");
    setButtonLoadingLocked(true);
    getAllCats(offset).then(onCatListLoaded).finally(setButtonLoadingLocked(false));
  }

  function onCatListLoaded(newCatList) {
    setCatList((catList) => [...catList, ...newCatList]);
    setOffset((offset) => offset + 15);
    setCatEnded(newCatList.length < 15 ? true : false);
  }

  function onCatFavorite(item) {
    !item.favorite ? addCatInFavoriteList(item) : removeCatInFavoriteList(item);
    item.favorite = !item.favorite;
  }

  const renderItems = useCallback(
    (arr) => {
      const items = arr.map((item) => {
        favoriteCatList.map((favoriteItem) => favoriteItem.id === item.id && (item = favoriteItem));
        return (
          <li key={item.id} className="cats__item" style={{ backgroundImage: `url(${item.thumbnail})` }} tabIndex="0">
            <img
              src={item.favorite ? favorite : favoriteBorder}
              alt="cat"
              className="cats__like"
              onClick={() => onCatFavorite(item)}
              tabIndex="0"
            />
          </li>
        );
      });

      return <ul className="cats__grid">{items}</ul>;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [catList]
  );

  const content = renderItems(catList);
  const spinner = loading && <Spinner />;
  const errorMassage = error && <ErrorMassage />;

  return (
    <Container>
      {content}
      {spinner}
      {errorMassage}
      <button
        className="cats__button"
        disabled={buttonLoadingLocked}
        onClick={() => onRequest(offset)}
        style={{ display: catEnded ? "none" : "block" }}
      >
        <div className="cats__button-text">Хочу ещё</div>
      </button>
    </Container>
  );
};

CatList.propTypes = {
  favoriteCatList: PropTypes.array.isRequired,
  addCatInFavoriteList: PropTypes.func.isRequired,
  removeCatInFavoriteList: PropTypes.func.isRequired,
};

export default CatList;
