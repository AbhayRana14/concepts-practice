import React, { createContext } from 'react'
import CompB from './CompB'
import CompC from './CompC'

const BioData = createContext();
const CompA = () => {
    return (
        <div>
            <BioData.Provider value={["useContext Method to get data","ok"]}>
              <CompB/>
              <CompC/>
            </BioData.Provider>
        </div>
    )
}

export default CompA;
export { BioData };
