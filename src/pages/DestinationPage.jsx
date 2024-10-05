import { NavLink, useLoaderData } from "react-router-dom";
import moonImg from '../assets/destination/image-moon.webp';
import marsImg from '../assets/destination/image-mars.webp';
import europaImg from '../assets/destination/image-europa.webp';
import titanImg from '../assets/destination/image-titan.webp';
import { dataLoader } from "../lib/utils";

const DestinationPage = () => {
    const destination = useLoaderData(); // Get the data of the destination fetched by dataLoader function
    // console.log(destination.name);

    // Since the path in the mock api (from data.json file) is relative, we cannot access the img from this file
    // So, the imgs are imported, and the one matching the destination name will be displayed
    const images = {
        'Moon': moonImg,
        'Mars': marsImg,
        'Europa': europaImg,
        'Titan': titanImg,
    };

    return (
        <div className="d-flex-sm-column main-container main-container-wgap destination-main-container">
            <div className="d-flex page-heading text-preset-6">
                <strong className="color-primary-extra-light">01</strong>&nbsp;Pick your destination
            </div>
            <div className="d-flex-sm-column content-container">
                <div className="d-flex-sm-column destination-img">
                    <img src={images[destination.name]} alt={`Image of ${destination.name}`} />
                </div>
                <div className="d-flex-sm-column info-container">
                    <div className="d-flex tab-container text-preset-8">
                        {/* Add active classname for active tab styling */}
                        <NavLink
                            to='/destination/moon' 
                            className={({isActive}) => isActive ? "tab-item active-tab color-primary" : "tab-item color-secondary"}
                        >
                            Moon
                        </NavLink> 
                        <NavLink 
                            to='/destination/mars'
                            className={({isActive}) => isActive ? "tab-item active-tab color-primary" : "tab-item color-secondary"}
                        >
                            Mars
                        </NavLink>
                        <NavLink 
                            to='/destination/europa'
                            className={({isActive}) => isActive ? "tab-item active-tab color-primary" : "tab-item color-secondary"}
                        >
                            Europa
                        </NavLink>
                        <NavLink 
                            to='/destination/titan'
                            className={({isActive}) => isActive ? "tab-item active-tab color-primary" : "tab-item color-secondary"}
                        >
                            Titan
                        </NavLink>
                    </div>
                    <div className="d-flex-sm-column text-container">
                        <div className="title text-preset-2">{destination.name}</div>
                        <div className="description text-preset-9 color-secondary">{destination.description}</div>
                        <div className="line"></div>
                    </div>
                    <div className="d-flex-sm-column stats-container">
                        <div className="d-flex-sm-column distance-stats">
                            <div className="distance-heading text-preset-7 color-secondary">Avg. distance</div>
                            <div className="distance text-preset-10">{destination.distance}</div>
                        </div>
                        <div className="d-flex-sm-column travel-time-container">
                            <div className="travel-time-heading text-preset-7 color-secondary">Est. travel time</div>
                            <div className="travel-time text-preset-10">{destination.travel}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

// ***Function moved to utils.jsx for reusibility
// Function to fetch the data of the relevant destination (based on destination name)
// const dataLoader = async ({params}) => {
//     const res = await fetch(`http://localhost:8000/destinations?name=${params.name}`);
//     const data = await res.json();
//     return data[0]; // Since the result is an array, return the first matching item (there should be only one)
// };

// Use dataLoader utility function to fetch the data of the relevant destination (based on destination name parameter in the url)
const destinationLoader = (params) => dataLoader(params, 'http://localhost:8000/destinations');

export { DestinationPage as default, destinationLoader };