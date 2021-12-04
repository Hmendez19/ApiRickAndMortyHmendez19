import { useEffect, useState } from "react";
import { URL_API } from "../config/config";

const useFetch = (name = '') => {
    const [data, setData] = useState([]);
    const [isLoader, setIsLoader] = useState(false);

    useEffect(() => {
        fetchData(name);
    }, [name]);


    const fetchData = async (name = '') => {
        try {
            setIsLoader(true);
            const response = await fetch(`${URL_API}`);
            if (!response.ok) {
                setData([]);
            }
            const { results } = await response.json();
            setData(results);
        } catch (error) {
            alert("Ocurrió algo inesperado");
            console.log(error);
        } finally {
            setIsLoader(false);
        }
    };

    return [data, isLoader];
}

export default useFetch;