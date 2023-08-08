// Write your code here.
import "./index.css"

const BannerCardItem = (props) => {
    const {bannerCardDetails} = props;
    const {headerText, description, className} = bannerCardDetails;
    return (
        <li className={`${className} banner-card-item`}>
            <div>
                <h1 className="banner-card-heading">{headerText}</h1>
                <p className="banner-card-description">{description}</p>
                <button className="banner-card-button" type="button">Show More</button>
            </div>
        </li>
    )
}

export default BannerCardItem