import { useContext } from "react";
import { MainContext } from "./Main";

const Search = () => {
    const { handlerChangeSearch } = useContext(MainContext);
    return <>
        <div className="container conatainer-search">
            <div className="input-group mb-3 pt-4">
                <input type="text" onChange={(e) => handlerChangeSearch(e)} className="form-control" placeholder="Buscar por nombre del personaje" aria-label="Search input" aria-describedby="button-addon2" />
                <i  id="button-addon2" className='icon-search'>&#128269;</i>
            </div>
        </div>
    </>
}

export default Search;