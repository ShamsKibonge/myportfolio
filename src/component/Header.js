import { FaRegListAlt, FaRegMoon, FaUserCircle } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useData } from "./Dataprovider";
import { FaMoon } from "react-icons/fa6";

export default function Header({ page }) {
    const { isLightMode, toggleMode } = useData();
    const navigate = useNavigate();
    const [opDet, setOpDet] = useState(false);
    const [showText, setShowText] = useState(false);

    const openDetail = () => {
        setOpDet(true);
        setTimeout(() => {
            setShowText(true);
        }, 300); // 500ms delay
    };

    const closeDetail = () => {
        setOpDet(false);
        setShowText(false);
    };

    const Item = ({ Ico, text, onClick }) => {
        return (
            <div className="flex items-center gap-5" onClick={onClick || (() => { navigate(`/${text}`); closeDetail() })}>
                <Ico size={25} className={`${page === text ? 'text-[#6cd9ed]' : isLightMode ? 'text-black' : 'text-white'}`} />
                {showText && opDet && <span className="text-[#6cd9ed]"> {text}</span>}
            </div >
        );
    };

    return (
        <div
            className={`absolute top-1/2 left-2 md:left-10 mt-10 md:mt-0 transform -translate-y-1/2 z-40 cursor-pointer ${isLightMode ? 'bg-white' : 'bg-[#262626]'} opacity-70 p-3 transition-all duration-500 rounded-3xl  ${opDet ? 'w-[200px]' : 'w-[50px]'}`}
            onMouseEnter={openDetail}
            onMouseLeave={closeDetail}
        >
            <div>
                <div className="flex flex-col gap-2">
                    <Item Ico={FaUserCircle} text={"About"} />
                    <Item Ico={FaRegListAlt} text={"Expertise"} />
                    <Item Ico={MdOutlineWorkOutline} text={"Projects"} />
                    <Item Ico={HiOutlineEnvelope} text={"Contact"} />
                </div>

                <div className="mt-32 flex flex-col gap-2">
                    <Item Ico={isLightMode ? FaMoon : FaRegMoon} text={"Light / Dark"} onClick={() => { toggleMode(); closeDetail() }} />
                </div>
            </div>
        </div>
    )
}
