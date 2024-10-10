import { NavLink, useLoaderData } from "react-router-dom";
import launchVehicleImgLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg';
import launchVehicleImgPortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceportImgLandscape from '../assets/technology/image-spaceport-landscape.jpg';
import spaceportImgPortrait from '../assets/technology/image-spaceport-portrait.jpg';
import spaceCapsuleImgLandscape from '../assets/technology/image-space-capsule-landscape.jpg';
import spaceCapsuleImgPortrait from '../assets/technology/image-space-capsule-portrait.jpg';
import { dataLoader } from "../lib/utils";

const TechnologyPage = () => {
    const technology = useLoaderData(); // Get the data of the technology fetched by dataLoader function

    // Since the path in the mock api (from data.json file) is relative, we cannot access the img from this file
    // So, the imgs are imported, and the one matching the tech name will be displayed
    const images = {
        'Launch vehicle': {
            'Landscape': launchVehicleImgLandscape,
            'Portrait': launchVehicleImgPortrait,
        },
        'Spaceport': {
            'Landscape': spaceportImgLandscape,
            'Portrait': spaceportImgPortrait,
        },
        'Space capsule': {
            'Landscape': spaceCapsuleImgLandscape,
            'Portrait': spaceCapsuleImgPortrait,
        },
    };

    // Turn the tech name into slug by replacing spaces with hyphens and lowercasing
    const slugName = technology.name.toLowerCase().replace(/\s+/g, '-').trim();

    return (
        <div className="d-flex-sm-column main-container main-container-wgap tech-main-container">
            <div className="d-flex page-heading text-preset-6">
                <strong className="color-primary-extra-light">03</strong>&nbsp;Space Launch 101
            </div>
            <div className="d-flex-sm-column content-container">
                {/* Add different img class for different page based on tech slug name */}
                <div className={`tech-img ${slugName}-img`}></div>
                <div className="d-flex-sm-column info-container">
                    <div className="d-flex tab-container text-preset-8">
                        {/* Add active classname for active tab styling */}
                        <NavLink
                            to='/technology/launch-vehicle' 
                            className={({isActive}) => isActive ? "tab-item active-tab" : "tab-item"}
                        >
                            <div className="circle-tab">1</div>
                        </NavLink> 
                        <NavLink 
                            to='/technology/spaceport'
                            className={({isActive}) => isActive ? "tab-item active-tab" : "tab-item"}
                        >
                            <div className="circle-tab">2</div>
                        </NavLink>
                        <NavLink 
                            to='/technology/space-capsule'
                            className={({isActive}) => isActive ? "tab-item active-tab" : "tab-item"}
                        >
                            <div className="circle-tab">3</div>
                        </NavLink>
                    </div>
                    <div className="d-flex-sm-column text-container">
                        <div className="d-flex-sm-column terminology-container">
                            <div className="text-preset-4 color-primary-light">The Terminology...</div>
                            <div className="name text-preset-3">{technology.name}</div>
                        </div>
                        <div className="tech-description text-preset-9 color-secondary">{technology.description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

// Use dataLoader utility function to fetch the data of the relevant destination (based on destination name parameter in the url)
const technologyLoader = (params) => dataLoader(params, 'http://localhost:8000/technology');

export { TechnologyPage as default, technologyLoader };