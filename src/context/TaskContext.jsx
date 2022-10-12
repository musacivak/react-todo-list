import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
    const [que, setQue] = useState([]);
    const [job, setJob] = useState("");

    const data = {
        que,
        setQue,
        job,
        setJob,
    };

    return (
        <Context.Provider value={data}>{children}</Context.Provider>
    );
}

export const useTask = () => useContext(Context);
export default Provider;