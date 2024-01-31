import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import "./catFavorite.scss";

import favoriteBorder from "../../assets/img/favorite_border.svg";
import favorite from "../../assets/img/favorite.svg";

const CatFavorite = (props) => {
  const { favoriteCatList, addCatInFavoriteList, removeCatInFavoriteList } = props;

  function onCatFavorite(item) {
    !item.favorite ? addCatInFavoriteList(item) : removeCatInFavoriteList(item);
    item.favorite = !item.favorite;
  }

  function renderItems(arr) {
    const items = arr.map((item) => {
      return (
        <li
          key={item.id}
          className="cats-favorite__item"
          style={{ backgroundImage: `url(${item.thumbnail})` }}
          tabIndex="0"
        >
          <img src={favorite} alt="cat" className="cats-favorite__like" onClick={() => onCatFavorite(item)} />
        </li>
      );
    });
    return <ul className="cats-favorite__grid">{items}</ul>;
  }

  const items = renderItems(favoriteCatList);

  return <Container>{items}</Container>;
};

CatFavorite.propTypes = {
  favoriteCatList: PropTypes.array.isRequired,
  addCatInFavoriteList: PropTypes.func.isRequired,
  removeCatInFavoriteList: PropTypes.func.isRequired,
};

export default CatFavorite;
