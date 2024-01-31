import { Container } from "react-bootstrap";
import "./catList.scss";
import imgCat from "../../assets/img/green-forest-road.jpg";
import favoriteBorder from "../../assets/img/favorite_border.svg";
import favorite from "../../assets/img/favorite.svg";

const CatList = () => {
  function renderItems() {
    return (
      <ul className="cats__grid">
        <li className="cats__item" style={{ backgroundImage: `url(${imgCat})` }}>
          <img src={favoriteBorder} alt="cat" className="cats__like" />
        </li>
        <li className="cats__item" style={{ backgroundImage: `url(${imgCat})` }}>
          {/* <img src="" alt="cat" className="cats__like" /> */}
        </li>
        <li className="cats__item" style={{ backgroundImage: `url(${imgCat})` }}>
          {/* <img src="" alt="cat" className="cats__like" /> */}
        </li>
        <li className="cats__item" style={{ backgroundImage: `url(${imgCat})` }}>
          {/* <img src="" alt="cat" className="cats__like" /> */}
        </li>
        <li className="cats__item" style={{ backgroundImage: `url(${imgCat})` }}>
          {/* <img src="" alt="cat" className="cats__like" /> */}
        </li>
        <li className="cats__item" style={{ backgroundImage: `url(${imgCat})` }}>
          {/* <img src="" alt="cat" className="cats__like" /> */}
        </li>
        <li className="cats__item" style={{ backgroundImage: `url(${imgCat})` }}>
          {/* <img src="" alt="cat" className="cats__like" /> */}
        </li>
        <li className="cats__item" style={{ backgroundImage: `url(${imgCat})` }}>
          {/* <img src="" alt="cat" className="cats__like" /> */}
        </li>
        <li className="cats__item" style={{ backgroundImage: `url(${imgCat})` }}>
          {/* <img src="" alt="cat" className="cats__like" /> */}
        </li>
        <li className="cats__item" style={{ backgroundImage: `url(${imgCat})` }}>
          {/* <img src="" alt="cat" className="cats__like" /> */}
        </li>
        <li className="cats__item" style={{ backgroundImage: `url(${imgCat})` }}>
          {/* <img src="" alt="cat" className="cats__like" /> */}
        </li>
      </ul>
    );
  }
  const items = renderItems();

  return (
    <Container>
      {items}
      <button className="cats__button">
        <div className="cats__button-text">Хочу ещё</div>
      </button>
    </Container>
  );
};

export default CatList;
