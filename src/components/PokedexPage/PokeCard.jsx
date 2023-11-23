import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import './styles/PokeCard.css'

const PokeCard = ({ url }) => {
  const [infoPoke, getInfoPoke] = useFetch(url);

  useEffect(() => {
    getInfoPoke();
  }, []);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/pokedex/${infoPoke.id}`);
  };


  return (
    <section className={`pokecard ${infoPoke?.types[0].type.name}-border`} onClick={handleNavigate}>
      <header className={`pokecard__header ${infoPoke?.types[0].type.name}-gradient`}>
        <img
          className="pokecard__img"
          src={infoPoke?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </header>
      <section className="pokecard__body">
        <h3 className={`pokecard__name ${infoPoke?.types[0].type.name}-color`}>{infoPoke?.name}</h3>
        <ul className="pokecard__types">
          {infoPoke?.types.map((infoType) => (
            <li className="pokecard__typename" key={infoType.type.url}>
              {infoType.type.name}
            </li>
          ))}
        </ul>
        <hr className="pokecard__hr" />
        <ul className="pokecard__stats">
          {infoPoke?.stats.map((infoStat) => (
            <li className="pokecard__stat" key={infoStat.stat.url}>
              <span className="pokecard__stat--name">{infoStat.stat.name}</span>
              <span className={`pokecard__stat--value ${infoPoke?.types[0].type.name}-color`}>
                {infoStat.base_stat}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default PokeCard;
