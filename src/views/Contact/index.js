import { FiMail } from "react-icons/fi";
import MainContainer from "../../component/MainContainer";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import ReactLg from "../../assets/logo/react.png"
import NodeLg from "../../assets/logo/nodejs.png"
import SqlLg from "../../assets/logo/sql.png"
import HtmlLg from "../../assets/logo/html.png"
import CssLg from "../../assets/logo/css.png"
import TailwindLg from "../../assets/logo/tailwind.png"
import KibanaLg from "../../assets/logo/kibana.png"
import LinuxLg from "../../assets/logo/linux.png"
import DockerLg from "../../assets/logo/docker.png"
import GitHubLg from "../../assets/logo/github.png"
import WiresharkLg from "../../assets/logo/wireshark.png"
import { useData } from "../../component/Dataprovider";

export default function Contact({ page }) {
    const { textColor } = useData()
    const Item = ({ Ico, text, link }) => {
        return (
            <a href={link} target="_blank" rel="noreferrer">
                <div className="flex items-center gap-2 underline">
                    <Ico size={25} /> <span>{text}</span>
                </div>
            </a>
        )
    }

    const Foot = ({ Img, text }) => {
        return (
            <div className="flex flex-col items-center justify-center gap-2 w-28 h-16">
                <img src={Img} alt="React" className="h-1/2 md:h-full w-1/2 md:w-fit hover:animate-spin cursor-pointer" />
                <span className={textColor}>{text}</span>
            </div>
        )
    }


    return (
        <MainContainer page={page}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="flex flex-col">
                    <span className="text-2xl font-extrabold"> Available for projects and works opportunities</span>
                    <span className={`text-sm ${textColor}`}>Have an exciting project or want to hire a web/mobile developer? Email me or contact me</span>
                </div>
                <div>
                    <Item Ico={FiMail} text={'shams.kibonge@gmail.com'} link={'mailto:shams.kibonge@gmail.com'} />
                    <Item Ico={FaLinkedin} text={'shams kibonge'} link={'https://www.linkedin.com/in/shamskibonge'} />
                    <Item Ico={FaWhatsapp} text={'+1 786 691 7594'} link={'whatsapp://send?phone=+17866917594'} />
                    <Item Ico={FaInstagram} text={'mr_shamskibonge'} link={'https://www.instagram.com/mr_shamskibonge/'} />
                </div>
            </div>

            <div className="flex flex-col gap-5 mt-20">
                <span className="text-2xl font-extrabold">Tech Stack & Security Tools</span>
                <div className="flex flex-wrap gap-5 md:gap-10 items-center">
                    <Foot Img={KibanaLg} text={'Kibana'} />
                    <Foot Img={LinuxLg} text={'Linux'} />
                    <Foot Img={DockerLg} text={'Docker'} />
                    <Foot Img={GitHubLg} text={'GitHub'} />
                    <Foot Img={WiresharkLg} text={'Wireshark'} />
                    <Foot Img={ReactLg} text={'ReactJs'} />
                    <Foot Img={NodeLg} text={'NodeJs'} />
                    <Foot Img={SqlLg} text={'MySql'} />
                    <Foot Img={HtmlLg} text={'Html'} />
                    <Foot Img={CssLg} text={'Css'} />
                    <Foot Img={TailwindLg} text={'Tailwind'} />
                </div>
            </div>
        </MainContainer>
    )
} 