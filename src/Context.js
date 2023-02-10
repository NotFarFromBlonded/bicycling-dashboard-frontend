import React, { createContext, useContext, useEffect, useState } from 'react';
import { cycleData } from './data/cycle_data';
const Cycling = createContext();
const CyclingContext = ({children}) =>{
    const [wid, setWid] = useState(1);
    const [cdata, setcdata] = useState([cycleData[0]])
    useEffect(()=>{
        setcdata(cycleData.find((i)=>i.origin_id === wid.toString()))
    }, [wid])
    return (
        <Cycling.Provider value={{wid, setWid, cdata}}>
            {children}
        </Cycling.Provider>
    )
}

export default CyclingContext;
export const CyclingState = () =>{
    return useContext(Cycling);
}