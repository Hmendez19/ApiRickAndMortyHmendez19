import { useEffect, useState } from "react";
import { URL_API,MENSAJE_ERROR } from "../config/config";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoader, setIsLoader] = useState(false);
    const [characterName,setCharacterName]=useState('');

    useEffect(() => {
        fetchData(characterName);
    }, [characterName]);


    const fetchData = async (name) => {
        try {
            setIsLoader(true);
            const response = await fetch(`${URL_API}?name=${name}`);
            if (!response.ok) {
                setData([]);
            }
            const { results } = await response.json();
            setData(results);
        } catch (error) {
            alert(MENSAJE_ERROR);
            console.log(error);
        } finally {
            setIsLoader(false);
        }
    };

    return [data, isLoader,setCharacterName];
}

export default useFetch;