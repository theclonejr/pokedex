import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import "../components/PokeInfoPage/styles/PokeInfoPage.css";

const PokeInfoPage = () => {
  const { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const [pokemon, getPokemon] = useFetch(url);

  const navigate = useNavigate();

  useEffect(() => {
    getPokemon();
  }, []);

  const handleBack = () => {
    navigate("/pokedex");
  };

  console.log(pokemon);

  return (
    <div>
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
      <div className="info">
        <article className="info__article">
          <header
            className={`info__header ${pokemon?.types[0].type.name}-gradient`}
          >
            <img
              className="info__img"
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </header>
          <h2 className={`info__name ${pokemon?.types[0].type.name}-color`}>
            {pokemon?.name}
          </h2>
          <ul className="info__wh">
            <li className="weight">
              <span className="weight__title">Weight</span>
              <span className="weight__value">{pokemon?.weight}</span>
            </li>
            <li className="height">
              <span className="height__title">Height</span>
              <span className="height__value">{pokemon?.height}</span>
            </li>
          </ul>
          <div className="info__tk">
            <section className="info__types">
              <h3 className="type__title">Tipo</h3>
              <div className="types">
                {pokemon?.types.map((tipo) => (
                  <h3
                    key={tipo.type.name}
                    className={`type ${tipo.type.name}-gradient`}
                  >
                    {tipo.type.name}
                  </h3>
                ))}
              </div>
            </section>
            <section className="info__skills">
              <h3 className="skill__title">Skills</h3>
              <div className="skills">
                {pokemon?.abilities.map((tipo) => (
                  <h3 className="skill">{tipo.ability.name}</h3>
                ))}
              </div>
            </section>
          </div>
          <section className="info__stats">
            <h2 className="stat__title">Stats</h2>
            <hr className="info__hr" />
            <div className="stats__container">
              {pokemon?.stats.map((tipo) => (
                <div className="stat__container--bars">
                  <div className="stat__container">
                    <label for="name" className="stat__name">{tipo.stat.name}</label>
                    <label for="total" className="stat__value">{tipo.base_stat}/150</label>
                      <progress className="bar" file="total" max="150" value={tipo.base_stat}></progress>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>
        <article className="info__movements">
          <ul className="movements">
            {pokemon?.moves.map((move) => (
              <li className="move">{move.move.name}</li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
};

export default PokeInfoPage;
