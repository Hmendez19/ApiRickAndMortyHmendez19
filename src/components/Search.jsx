import useFetch from "../hook/useFetch";

const Search = () => {
    const [data,isLoader]=useFetch();
    console.log(data,isLoader);
    return <>
        <div className="container conatainer-search">
            <div className="input-group mb-3 pt-4">
                <input type="text" className="form-control" placeholder="Buscar por nombre del personaje" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-dark" type="button" id="button-addon2">Buscar</button>
            </div>
        </div>
    </>
}

export default Search;