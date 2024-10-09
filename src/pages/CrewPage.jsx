import { NavLink, useLoaderData } from "react-router-dom";
import hurleyImg from '../assets/crew/image-douglas-hurley.webp';
import shuttleworthImg from '../assets/crew/image-mark-shuttleworth.webp';
import gloverImg from '../assets/crew/image-victor-glover.webp';
import ansariImg from '../assets/crew/image-anousheh-ansari.webp';
import { dataLoader } from "../lib/utils";

const CrewPage = () => {
    const crew = useLoaderData(); // Get the data of the crew fetched by dataLoader function

    // Since the path in the mock api (from data.json file) is relative, we cannot access the img from this file
    // So, the imgs are imported, and the one matching the destination name will be displayed
    const images = {
        'Douglas Hurley': hurleyImg,
        'Mark Shuttleworth': shuttleworthImg,
        'Victor Glover': gloverImg,
        'Anousheh Ansari': ansariImg,
    };

    return (
        <div className="d-flex-sm-column main-container main-container-wgap crew-main-container">
            <div className="d-flex page-heading text-preset-6">
                <strong className="color-primary-extra-light">02</strong>&nbsp;Meet Your Crew
            </div>
            <div className="d-flex-sm-column content-container">
                <div className="d-flex-sm-column info-container">
                    <div className="d-flex-sm-column text-container">
                        <div className="d-flex-sm-column role-name-container">
                            <div className="role text-preset-4 color-primary-light">{crew.role}</div>
                            <div className="name text-preset-3">{crew.name}</div>
                        </div>
                        <div className="bio text-preset-9 color-secondary">{crew.bio}</div>
                    </div>
                    <div className="d-flex tab-container text-preset-8">
                        {/* Add active classname for active tab styling */}
                        <NavLink
                            to='/crew/douglas-hurley' 
                            className={({isActive}) => isActive ? "tab-item active-tab" : "tab-item"}
                        >
                            <div className="dot-tab"></div>
                        </NavLink> 
                        <NavLink 
                            to='/crew/mark-shuttleworth'
                            className={({isActive}) => isActive ? "tab-item active-tab" : "tab-item"}
                        >
                            <div className="dot-tab"></div>
                        </NavLink>
                        <NavLink 
                            to='/crew/victor-glover'
                            className={({isActive}) => isActive ? "tab-item active-tab" : "tab-item"}
                        >
                            <div className="dot-tab"></div>
                        </NavLink>
                        <NavLink 
                            to='/crew/anousheh-ansari'
                            className={({isActive}) => isActive ? "tab-item active-tab" : "tab-item"}
                        >
                            <div className="dot-tab"></div>
                        </NavLink>
                    </div>
                </div>
                <div className="d-flex-sm-column crew-img">
                    <img src={images[crew.name]} alt={`Image of ${crew.name}, ${crew.role}`} />
                </div>
            </div>
        </div>
    )
};

// Use dataLoader utility function to fetch the data of the relevant destination (based on destination name parameter in the url)
const crewLoader = (params) => dataLoader(params, 'http://localhost:8000/crew');

export { CrewPage as default, crewLoader };