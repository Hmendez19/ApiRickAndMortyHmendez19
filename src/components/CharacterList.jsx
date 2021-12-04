import { useContext } from "react";
import CharacterItem from "./CharacterItem";
import { MainContext } from "./Main";


const CharacterList = () => {
    const { data } = useContext(MainContext);
    return (typeof data !== 'undefined') ? <div className='character-list'>{data.map(item => <CharacterItem item={item}/>)}</div> : <></>;
}

export default CharacterList;