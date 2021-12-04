import { createContext, useEffect, useState } from "react";
import useFetch from '../hook/useFetch';

export const MainContext = createContext([]);

const Main = ({ children }) => {
    const [data, isLoader, setCharacterName] = useFetch();
    const [context, setContext] = useState({
        data: [],
        setCharacterName: ''
    });

    const [globalTimeOut, setGlobalTimeOut] = useState(null);

    useEffect(() => {
        if (!isLoader && data.length > 0) {
            setContext((prev) => ({
                ...prev,
                data
            }));
        }
    }, [data, isLoader]);

    useEffect(() => {
        if (setCharacterName.length > 0) {
            setContext((prev) => ({
                ...prev,
                setCharacterName
            }));
        }
    }, [setCharacterName]);


    const handlerChangeSearch = (e) => {
        e.preventDefault();
        let valueSearch = e.target.value;
        if (valueSearch.length > 2) {
            let lastValueSearch = valueSearch;
            if (globalTimeOut !== null) clearTimeout(globalTimeOut);

            let _global_time_out = setTimeout(function () {
                setGlobalTimeOut(null);
                if (valueSearch === lastValueSearch) {
                    console.log(valueSearch);
                    setCharacterName(prev=>valueSearch);
                }
            }, 500);

            setGlobalTimeOut(prev => _global_time_out);
        }
    }

    return !isLoader ?
        <>
            <MainContext.Provider value={{...context,handlerChangeSearch}}>
                <main className='bg-dark'>
                    {children}
                </main>
            </MainContext.Provider>
        </> : <>
            <h1>Loading...</h1>
        </>
}

export default Main;