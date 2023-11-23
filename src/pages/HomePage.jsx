import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setTrainerName } from "../store/slices/trainerName.slice";
import { useNavigate } from "react-router-dom";
import '../components/Homepage/styles/HomePage.css'

const HomePage = () => {
  const dispatch = useDispatch();
  const inputName = useRef();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerName(inputName.current.value.trim()));
    navigate("/pokedex");
  };

  return (
    <div>
      <nav className="home__nav">
        <section className="lines__container">
          <div className="red__line"></div>
          <div className="black__line"></div>
          <div className="big__circle"></div>
          <div className="small__circle"></div>
        </section>
      </nav>
      <section className="container">
        <img
          className="home__img"
          src="https://camo.githubusercontent.com/7f1f1e69bef239378a28e8aca7d1d7bd0890d37a7871d01135e2d044da6e2157/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67"
          alt=""
        />
        <div className="text__container">
          <h2 className="home__greeting">Hi trainer!</h2>
          <p className="home__text">To start, please give me your trainer name</p>
        </div>
        <form className="home__form" onSubmit={handleSubmit}>
          <input
            className="home__input"
            ref={inputName}
            type="text"
            placeholder="Your name here"
          />
          <button className="home__btn">Catch them all!</button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;
