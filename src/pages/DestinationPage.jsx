import { NavLink, useParams, useLoaderData } from "react-router-dom";
import moonImg from '../assets/destination/image-moon.webp';
import marsImg from '../assets/destination/image-mars.webp';
import europaImg from '../assets/destination/image-europa.webp';
import titanImg from '../assets/destination/image-titan.webp';

const DestinationPage = () => {
    const { name } = useParams(); // Get the dynamic parameter of the URL, name, to identify which destination page the user is on
    const destination = useLoaderData(); // Get the data of the destination fetched by dataLoader function
    // console.log(destination.name);

    const images = {
        'Moon': moonImg,
        'Mars': marsImg,
        'Europa': europaImg,
        'Titan': titanImg,
    };

    return (
        <div className="d-flex-sm-column main-container destination-main-container">
            <div className="d-flex-sm-column page-heading text-preset-6">
                <strong className="color-light-primary">01</strong>&nbsp;Pick you destination
            </div>
            <div className="d-flex-sm-column content-container">
                <div className="d-flex-sm-column destination-img">
                    <img src={images[destination.name]} alt={`Image of ${destination.name}`} />
                </div>
                <div className="d-flex-sm-column destination-info-container">
                    <div className="d-flex tab-container text-preset-8">
                        <NavLink
                            to='/destination/Moon' 
                            className={({isActive}) => isActive ? "tab-item color-primary" : "tab-item color-secondary"}
                        >
                            Moon
                        </NavLink>
                        <NavLink 
                            to='/destination/Mars'
                            className={({isActive}) => isActive ? "tab-item color-primary" : "tab-item color-secondary"}
                        >
                            Mars
                        </NavLink>
                        <NavLink 
                            to='/destination/Europa'
                            className={({isActive}) => isActive ? "tab-item color-primary" : "tab-item color-secondary"}
                        >
                            Europa
                        </NavLink>
                        <NavLink 
                            to='/destination/Titan'
                            className={({isActive}) => isActive ? "tab-item color-primary" : "tab-item color-secondary"}
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

// Function to fetch the data of the relevant destination (based on destination name)
const dataLoader = async ({params}) => {
    const res = await fetch(`http://localhost:8000/destinations?name=${params.name}`);
    const data = await res.json();
    return data[0]; // Since the result is an array, return the first matching item (there should be only one)
};

export { DestinationPage as default, dataLoader };