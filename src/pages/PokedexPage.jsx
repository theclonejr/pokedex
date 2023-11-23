import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import PokeCard from "../components/PokedexPage/PokeCard";
import SelectType from "../components/PokedexPage/SelectType";
import "../components/PokedexPage/styles/PokedexPage.css";
import { useNavigate } from "react-router-dom";

const PokedexPage = () => {
  const [selectValue, setSelectValue] = useState("allPokemons");
  const [inputValue, setInputValue] = useState("");

  const trainerName = useSelector((store) => store.trainerName);

  const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
  const [pokemons, getPokemons, getTypePokemons] = useFetch(url);


  const navigate = useNavigate()

  useEffect(() => {
    if (selectValue === "allPokemons") {
      getPokemons();
    }
    getTypePokemons(selectValue);
  }, [selectValue]);

  const inputSearch = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputSearch.current.value.toLowerCase().trim());
    inputSearch.current.value = "";
  };

  const cbFilter = (poke) => {
    const nameFiltered = poke.name.includes(inputValue);
    return nameFiltered;
  };

 
  const handleBack = () => {
    navigate('/pokedex') }

    
  return (
    <div className="pokedex">
       <div className="nav__container">
        <div className="max__circle">
          <div className="low__circle"></div>
        </div>
        <nav className="nav">
          <div className="nav__red">
            <img
              onClick={handleBack}
              className="nav__img"
              src="https://camo.githubusercontent.com/7f1f1e69bef239378a28e8aca7d1d7bd0890d37a7871d01135e2d044da6e2157/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67"
              alt=""
            />
          </div>
        </nav>
        <div className="blackline"></div>
      </div>
      <div className="pokedex__text--container">
        <p className="pokedex__welcome">
          Welcome <span className="pokedex__trainer--name">{trainerName},</span>
          <p className="pokedex__text">
            here you can find your favorite pokémon. Let's go!
          </p>
        </p>
      </div>
      <div form__select>
        <form className="pokedex__form" onSubmit={handleSubmit}>
          <input
            className="pokedex__input"
            ref={inputSearch}
            type="text"
            placeholder="Search a pokémon"
          />
          <button className="pokedex__btn">Search</button>
        </form>
        <div className="select__container">
          <SelectType setSelectValue={setSelectValue} />
          <div className="card__container">
            {pokemons?.results.filter(cbFilter).map((poke) => (
              <PokeCard key={poke.url} url={poke.url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexPage;
