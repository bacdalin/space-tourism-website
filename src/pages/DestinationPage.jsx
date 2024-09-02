import { NavLink } from "react-router-dom"

const DestinationPage = () => {
  return (
        <div className="d-flex main-container">
            <div className="d-flex page-heading text-preset-6"><strong>01</strong> Pick you destination</div>
            <div className="d-flex content-container">
                <div className="d-flex destination-img">
                    {/* <img src="" alt="" /> */}
                </div>
                <div className="d-flex destination-info-container">
                    <div className="d-flex tab-container">
                        <NavLink to='#' className="tab-item">$Moon</NavLink>
                        <NavLink to='#' className="tab-item">$Mars</NavLink>
                        <NavLink to='#' className="tab-item">$Europa</NavLink>
                        <NavLink to='#' className="tab-item">$Titan</NavLink>
                    </div>
                    <div className="text-container">
                        <div className="title">$Moon</div>
                        <div className="description">$See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</div>
                        <div className="line"></div>
                    </div>
                    <div className="stats-container">
                        <div className="distance-stats">
                            <div className="distance-heading">Avg. distance</div>
                            <div className="distance">$384,400KM</div>
                        </div>
                        <div className="travel-time-container">
                            <div className="travel-time-heading">Est. travel time</div>
                            <div className="travel-time">$3 days</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default DestinationPage