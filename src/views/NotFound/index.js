import React from 'react';
import Button from "./components/button";
import MainContainer from '../../component/MainContainer';

const NotFound = () => {
    return (
        <MainContainer>
            <h1 className="font-mono ml-[7.7rem] uppercase">404 Not found</h1>

            <div className="mt-5 mx-2 sm:mx-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="w-full">
                    <img src={require("../../assets/img/Scarecrow.png")} alt="404-Scarecrow" className="w-full" />
                </div>
                <div className="ml-20 md:ml-0">
                    <h2 className="text-lg leading-tight md:text-xl">I have bad news for you</h2>
                    <p className="mt-6 font-mono text-sm font-normal leading-relaxed  md:text-lg">The page you are looking for might be removed or is temporarily unavailable</p>
                    <Button className="btn mt-4">Back to homepage</Button>
                </div>
            </div>
        </MainContainer>
    );
};

export default NotFound;