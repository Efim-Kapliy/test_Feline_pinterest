import "./catFavorite.scss";

import favoriteBorder from "../../assets/img/favorite_border.svg";
import favorite from "../../assets/img/favorite.svg";

const add CatFavorite component = (props) => {
  const { favoriteCatList, setFavoriteCatList } = props;

  function renderItems(arr) {
    const items = arr.map((item, i) => {
      return (
        <li key={i} className="cats-favorite__item" style={{ backgroundImage: `url(${item.thumbnail})` }} tabIndex="0">
          <img src={favorite} alt="cat" className="cats-favorite__like" />
        </li>
      );
    });
    return <ul className="cats-favorite__grid">{items}</ul>;
  }

  const items = renderItems(favoriteCatList);

  return <>{items}</>;
};

export default CatFavorite;
