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
        'douglas-hurley': hurleyImg,
        'mark-shuttleworth': shuttleworthImg,
        'victor-glover': gloverImg,
        'anousheh-ansari': ansariImg,
    };

    return (
        <div className="d-flex-sm-column main-container crew-main-container">
            <div className="d-flex page-heading text-preset-6">
                <strong className="color-light-primary">01</strong>&nbsp;Meet Your Crew
            </div>
            <div className="d-flex-sm-column content-container">
                <div className="d-flex-sm-column crew-info-container">
                    <div className="d-flex-sm-column text-container">
                        <div className="title text-preset-2">{crew.name}</div>
                        <div className="description text-preset-9 color-secondary">{crew.description}</div>
                    </div>
                    <div className="d-flex tab-container text-preset-8">
                        {/* Add active classname for active tab styling */}
                        <NavLink
                            to='/destination/Moon' 
                            className={({isActive}) => isActive ? "tab-item active-tab color-primary" : "tab-item color-secondary"}
                        >
                            Moon
                        </NavLink> 
                        <NavLink 
                            to='/destination/Mars'
                            className={({isActive}) => isActive ? "tab-item active-tab color-primary" : "tab-item color-secondary"}
                        >
                            Mars
                        </NavLink>
                        <NavLink 
                            to='/destination/Europa'
                            className={({isActive}) => isActive ? "tab-item active-tab color-primary" : "tab-item color-secondary"}
                        >
                            Europa
                        </NavLink>
                        <NavLink 
                            to='/destination/Titan'
                            className={({isActive}) => isActive ? "tab-item active-tab color-primary" : "tab-item color-secondary"}
                        >
                            Titan
                        </NavLink>
                    </div>
                    <div className="d-flex-sm-column destination-img">
                        <img src={images[crew.name]} alt={`Image of ${crew.name}, ${crew.role}`} />
                    </div>
                    {/* <div className="d-flex-sm-column stats-container">
                        <div className="d-flex-sm-column distance-stats">
                            <div className="distance-heading text-preset-7 color-secondary">Avg. distance</div>
                            <div className="distance text-preset-10">{destination.distance}</div>
                        </div>
                        <div className="d-flex-sm-column travel-time-container">
                            <div className="travel-time-heading text-preset-7 color-secondary">Est. travel time</div>
                            <div className="travel-time text-preset-10">{destination.travel}</div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
};

// Use dataLoader utility function to fetch the data of the relevant destination (based on destination name parameter in the url)
const crewLoader = (params) => dataLoader(params, 'http://localhost:8000/crew');

export { CrewPage as default, crewLoader };