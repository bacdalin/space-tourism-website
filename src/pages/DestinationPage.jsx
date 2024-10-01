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
        <div className="d-flex main-container">
            <div className="d-flex page-heading text-preset-6"><strong className="color-light-primary">01</strong>&nbsp;Pick you destination</div>
            <div className="d-flex content-container">
                <div className="d-flex destination-img">
                    <img src={images[destination.name]} alt={`Image of ${destination.name}`} />
                </div>
                <div className="d-flex destination-info-container">
                    <div className="d-flex tab-container">
                        <NavLink to='/destination/Moon' className="tab-item">Moon</NavLink>
                        <NavLink to='/destination/Mars' className="tab-item">Mars</NavLink>
                        <NavLink to='/destination/Europa' className="tab-item">Europa</NavLink>
                        <NavLink to='/destination/Titan' className="tab-item">Titan</NavLink>
                    </div>
                    <div className="text-container">
                        <div className="title">{destination.name}</div>
                        <div className="description">{destination.description}</div>
                        <div className="line"></div>
                    </div>
                    <div className="stats-container">
                        <div className="distance-stats">
                            <div className="distance-heading">Avg. distance</div>
                            <div className="distance">{destination.distance}</div>
                        </div>
                        <div className="travel-time-container">
                            <div className="travel-time-heading">Est. travel time</div>
                            <div className="travel-time">{destination.travel}</div>
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