import { FaNodeJs, FaReact, FaWrench, FaShieldAlt, FaLock, FaChartBar, FaNetworkWired } from "react-icons/fa";
import MainConainer from "../../component/MainContainer";
import { BsDatabase } from "react-icons/bs";
import { useData } from "../../component/Dataprovider";
export default function Expertise({ page }) {
    const { textColor } = useData()

    const Item = ({ Icon, title, details }) => {
        return (
            <div className="border-4 rounded p-2">
                <div className="flex items-center gap-2 font-bold">
                    <Icon size={35} /> <div className="">{title}</div >
                </div>
                <div className={textColor}>
                    {details}
                </div>
            </div>
        )
    }
    return (
        <MainConainer page={page}>
            <div className="flex flex-col justify-center">
                {/* <div className="underline font-bold uppercase">
                    Expertise
                </div> */}
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center">
                    <Item
                        Icon={FaShieldAlt}
                        details={'Hands-on experience with security monitoring using tools like Kibana to analyze logs, build dashboards, and track suspicious activity. Familiar with alert triage, event correlation, and supporting investigation workflows for real-world environments.'}
                        title={'SOC Monitoring & Threat Detection'}
                    />
                    <Item
                        Icon={FaLock}
                        details={'Focused on integrating security into the software development lifecycle using DevSecOps practices. Experience with CI/CD pipelines, basic security scanning, and building applications with security controls in mind from development to deployment.'}
                        title={'DevSecOps & Secure SDLC'}
                    />
                    <Item
                        Icon={FaChartBar}
                        details={'Experience analyzing security logs and events to identify anomalies, suspicious behavior, and potential incidents. Comfortable working with large datasets, prioritizing alerts, and supporting ticketing and investigation processes.'}
                        title={'Log Analysis & Incident Triage'}
                    />
                    <Item
                        Icon={FaNetworkWired}
                        details={'Strong foundation in networking concepts and security fundamentals, including protocols, traffic analysis, and system behavior. Able to connect network activity to security events and support investigations with a defender’s mindset.'}
                        title={'Network & Security Fundamentals'}
                    />

                    <Item
                        Icon={FaReact}
                        details={' Enthusiastic about UI/UX design. Possessing more than a year of hands-on experience in developing with HTML, CSS, JS, ReactJS, and NextJS frameworks.'}
                        title={'Frontend Dev ReactJs'}
                    />
                    <Item
                        Icon={FaNodeJs}
                        details={'Passionate about backend development. With over a year of experience, adept in Node.js, Express.js, and other related technologies for building robust server-side applications.'}
                        title={'Backend Dev NodeJs'}
                    />
                    <Item
                        Icon={BsDatabase}
                        details={'Enthusiastic about database management. Possessing extensive experience in designing, implementing, and optimizing databases using SQL, NoSQL, and related technologies.'}
                        title={'Database Management'}
                    />
                    <Item
                        Icon={FaWrench}
                        details={'Passionate, Recent graduate in network engineering, eager to apply theoretical knowledge to real-world scenarios. Proficient in network protocols and eager to gain hands-on experience in building robust infrastructures.'}
                        title={'Network Engineer'}
                    />

                </div>

            </div>
        </MainConainer>
    )
}