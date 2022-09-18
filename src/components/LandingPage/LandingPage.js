import { faDragon, faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../LandingPage/LandingPage.css";
const genreData = {
  Action: {
    background: "blue",
    icon: faSkullCrossbones,
    color: "white",
  },
  Adventure: {
    background: "orange",
    icon: faDragon,
    color: "black",
    
  }
};

export default function LandingPage(props) {
  console.log("landingPage.", props.genres);
  return (
    <div className="genreGrid">
      {props.genres?.map((genre) => (
        <Link style= {genreData[genre.name]} to={`/genre/${genre.id}`}>
          <div key={genre.id}>
            {genreData[genre.name]?.icon && (
              <FontAwesomeIcon  icon={genreData[genre.name].icon} />
            )}
            {genre.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
