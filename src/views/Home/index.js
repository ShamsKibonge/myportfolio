import { useData } from "../../component/Dataprovider";
import { saveAs } from 'file-saver';
import MainConainer from "../../component/MainContainer";
import Resume from "../../assets/doc/RESUME.pdf"

export default function Home({ page }) {
    const { textColor, isLightMode } = useData()

    const handleDownload = () => {
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

        if (isSafari) {
            window.open(Resume, '_blank');
        } else {
            saveAs(Resume, 'RESUME.pdf');
        }
    };

    return (
        <MainConainer page={page}>
            <div className="flex flex-col gap-5 justify-between h-full pb-10">

                <div className={`text-sm lg:text-md items-center ${textColor}`} >
                    <p>Hi, I’m Shams Kibonge, a cybersecurity-focused engineer with a background in full-stack development and a strong interest in SOC operations, DevSecOps, and incident response. I work hands-on with monitoring and log analysis using tools like Kibana, building dashboards, investigating alerts, and supporting ticketing workflows for public infrastructure in Washington.</p>
                    <br />
                    <p>I’m currently working toward my SOC Analyst certification and spend most of my time analyzing security events, improving detection visibility, and understanding how incidents move from alert to investigation. On the engineering side, I focus on secure SDLC and DevSecOps pipelines, making sure security is built into applications from development to deployment.</p>
                    <br />
                    <p>I also have exposure to digital forensics and incident investigation workflows, which helps me think like both a builder and a defender. My goal is to work at the intersection of security operations and engineering—protecting systems, understanding attacks, and building more secure software by design.</p>
                </div>

                <div className={`${isLightMode ? 'text-green-700' : 'text-green-400'} text-xs hover:underline cursor-pointer`} onClick={handleDownload}>
                    Click here to download my RESUME.pdf
                </div>
            </div>
        </MainConainer>
    )
}