import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import "./catList.scss";

import useCatsService from "../../services/CatsService";

import favoriteBorder from "../../assets/img/favorite_border.svg";
import favorite from "../../assets/img/favorite.svg";

const CatList = (props) => {
  const [catList, setCatList] = useState([]);
  const [offset, setOffset] = useState(24);
  const [catEnded, setCatEnded] = useState(false);

  const { loading, error, getAllCats } = useCatsService();
  const { addCatInFavoriteList, removeCatInFavoriteList } = props;

  useEffect(() => {
    return () => {
      onRequest(offset);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onRequest(offset) {
    getAllCats(offset).then(onCatListLoaded);
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

  function renderItems(arr) {
    const items = arr.map((item) => {
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
  }
  const items = renderItems(catList);

  return (
    <Container>
      {items}
      <button
        className="cats__button"
        onClick={() => onRequest(offset)}
        style={{ display: catEnded ? "none" : "block" }}
      >
        <div className="cats__button-text">Хочу ещё</div>
      </button>
    </Container>
  );
};

CatList.propTypes = {
  addCatInFavoriteList: PropTypes.func.isRequired,
  removeCatInFavoriteList: PropTypes.func.isRequired,
};

export default CatList;
