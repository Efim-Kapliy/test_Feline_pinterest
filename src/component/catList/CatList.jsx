import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./catList.scss";

import useCatsService from "../../services/CatsService";

import favoriteBorder from "../../assets/img/favorite_border.svg";
import favorite from "../../assets/img/favorite.svg";

const CatList = () => {
  const [catList, setCatList] = useState([]);
  const [offset, setOffset] = useState(24);
  const [catEnded, setCatEnded] = useState(false);

  const { loading, error, getAllCats } = useCatsService();

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
    setCatList(catList => [...catList, ...newCatList]);
    setOffset(offset => offset + 15);
    setCatEnded(newCatList.length < 15 ? true : false);
  }

  function renderItems(arr) {
    const items = arr.map(item => {
      return (
        <li key={item.id} className="cats__item" style={{ backgroundImage: `url(${item.thumbnail})` }} tabIndex="0">
          <img src={favoriteBorder} alt="cat" className="cats__like" />
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

export default CatList;
