import { createContext, useEffect, useState } from "react";
import useFetch from '../hook/useFetch';

export const MainContext = createContext([]);

const Main = ({ children }) => {
    const [data, isLoader, setCharacterName] = useFetch();
    const [context, setContext] = useState({});
    useEffect(() => {
        if (!isLoader && data.length > 0) {
            setContext({
                data,
                setCharacterName
            });
        }
    }, [data, isLoader, setCharacterName]);

    return !isLoader ?
        <>
            <MainContext.Provider value={context}>
                <div className='bg-dark'>
                    {children}
                </div>
            </MainContext.Provider>
        </> : <>
            <h1>Loading...</h1>
        </>
}

export default Main;