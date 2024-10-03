import { Link } from "react-router-dom"

const HomePage = () => {
  return (
        <div className="d-flex-sm-column main-container">
            <div className="d-flex-sm-column hero-text-wrapper">
                <div className="text-preset-6">So, you want to travel to</div>
                <div className="text-preset-1">Space</div>
                <div className="text-preset-9">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</div>
            </div>
            <div className="d-flex-sm-column btn-wrapper">
                <Link to='/destination'>
                  <button className="main-btn text-preset-4">Explore</button>
                </Link>
            </div>
        </div>
  )
}

export default HomePage