import MainContainer from "../../component/MainContainer";
import Sofkam from '../../assets/img/sofkam.png';
import Acrfi from '../../assets/img/acrfi.png';
import PortalHubImage from '../../assets/img/portal.png'; // Assuming img/portal.png exists in assets/img
import { FaArrowUp } from "react-icons/fa";
import { useData } from "../../component/Dataprovider";

export default function Project({ page }) {
    const { textColor } = useData()

    const Item = ({ Icon, title, details, tech, link }) => {
        return (
            <a href={link} target="_blank" rel="noreferrer">
                <div className="flex flex-col md:flex-row gap-4 hover:bg-white hover:bg-opacity-10 hover:shadow-2xl cursor-pointer rounded p-2 mt-2">
                    <div className="flex  gap-2 font-bold ">
                        <img src={Icon} alt={title} className="min-w-36 w-36 h-20 rounded" /> {/* Adjust the size as needed */}
                    </div>
                    <div>
                        <div className={`font-bold flex `}>{title} <FaArrowUp size={10} className="rotate-45 ml-2 text-white" /></div>
                        <div className={`text-sm ${textColor}`}>
                            <p>{details}</p>
                            <div className="flex gap-2 mt-5">
                                {tech?.length > 0 && tech.map((e, i) => {
                                    return (
                                        <div key={i} className="bg-[#152a3c] text-[#61c5c6] w-fit p-1 rounded-full">{e}</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>


                </div>
            </a>
        );
    };

    return (
        <MainContainer page={page}>
            <Item
                Icon={PortalHubImage}
                details={'Internal web portal built for Sofkam to manage users, files, and communications through a centralized platform. The application is accessible via portal.sofkam.com and focuses on real-world workflows, including authentication, role-based access, and secure data handling. Built with a React.js frontend and a Node.js backend, with SQL for data storage and an emphasis on secure application design and deployment.'}
                title={'PortalHub (sofkam.com / portal.sofkam.com)'}
                tech={['ReactJS', 'NodeJS', 'SQL', 'Security', 'Auth']}
                link={'https://portal.sofkam.com'}
            />
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 justify-center h-96 overflow-auto"> */}
            <Item
                Icon={Sofkam}
                details={'Web application showcasing the company Sofkam Sarlu. Built with React.js and Tailwind CSS for styling, and using Node.js for the backend with SQL for the database. You can navigate through the sections of the app easily. Enjoy it!'}
                title={'Sofkam'}
                tech={['ReactJS', 'NodeJs', 'Sql']}
                link={"https://sofkam.com"}
            />
            <Item
                Icon={Acrfi}
                details={'Welcome to ACRFI, a web application designed to support charitable causes. Built with React.js and Tailwind CSS for a polished frontend, and powered by Node.js with SQL for robust backend functionality. Navigate effortlessly through sections and immerse yourself in captivating video backgrounds. Explore the charitable initiatives showcased on ACRFI and witness the impact firsthand. Enjoy your experience!'}
                title={'Acrfi'}
                tech={['ReactJS', 'NodeJs', 'Sql']}
                link={'http://acrfi.sofkam.com'}
            />
        </MainContainer>
    );
}
