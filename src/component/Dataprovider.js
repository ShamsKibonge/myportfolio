import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [isLightMode, setIsLightMode] = useState(() => {
        const savedMode = localStorage.getItem('isLightMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    const textColor = isLightMode ? 'text-[#2e343f]' : 'text-[#7b8ca9]'

    const toggleMode = () => {
        setIsLightMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('isLightMode', JSON.stringify(newMode));
            return newMode;
        });
    };

    return (
        <DataContext.Provider value={{ isLightMode, toggleMode, textColor }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
