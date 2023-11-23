import { useEffect, useRef } from "react"
import useFetch from "../../hooks/useFetch"
import './styles/PokedexPage.css'

const SelectType = ({ setSelectValue }) => {

    const url = 'https://pokeapi.co/api/v2/type'

    const [types, getTypes, getTypesA] = useFetch(url)

    useEffect(() => {
        getTypes('https://pokeapi.co/api/v2/type')
    }, [])

    const selectElement = useRef()

    const handleChange = () => {
        setSelectValue(selectElement.current.value)
    }

  return (
    <select className="select" ref={selectElement} onChange={handleChange}>
        <option className="select__options" value="allPokemons">All Pokemons</option>
        {
            types?.results.map(type => (
                <option className="select__option" key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelectType