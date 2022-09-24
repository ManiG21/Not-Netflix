import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
    faBomb,
  faBookOpen,
  faChildren,
  faCouch,
  faCrow,
  faDragon,
  faDungeon,
  faExplosion,
  faHatWizard,
  faHippo,
  faHorse,
  faLaughWink,
  faMagic,
  faMagnifyingGlass,
  faMasksTheater,
  faMusic,
  faSkull,
  faVideoCamera,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../LandingPage/LandingPage.css";
const genreData = {
  Action: {
    background: "#090446",
    icon: faExplosion,
    color: "#8AF3FF",
    fontFamily: "'Josefin Sans', sans-serif",
  },
  Adventure: {
    background: "#109648",
    icon: faDungeon,
    color: "#BCD4DE",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  },
  Animation: {
    background: "#70163C",
    color: "#95B2B8",
    icon: faWandMagicSparkles,
    fontFamily: "'Comic Neue', cursive",
  },
  Comedy: {
    background: "orange",
    color: "#7F6A93",
    icon: faLaughWink,
    fontFamily: "fantasy"
  },
  Crime: {
    background: "#000000",
    color: "#F9C22E",
    icon: faCrow,
    fontFamily: "'Caveat', cursive;"
  },
  Documentary: {
    background: "#cd853f",
    color: "#412234",
    icon: faVideoCamera,
    fontFamily: "Cambria, Cochin, Georgia, 'Times New Roman', serif"
  },
  Drama: {
    background: "#86BBD8",
    color: "#6B0504",
    icon: faMasksTheater,
    fontFamily: "'Rubik Dirt', cursive"
    
  },
  Family: {
    background: "#C9E4CA",
    color: "#55828B",
    icon: faChildren,
  },
  Fantasy: {
    background: "#35605A",
    color: "#DF2935",
    icon: faDragon,
  },
  History: {
    background: "#9F7833",
    color: "#BEE7B8",
    icon: faBookOpen,
  },
  Horror: {
    background: "#A3320B",
    color: "#23231A",
    icon: faSkull,
    fontFamily: "'Permanent Marker', cursive"
  },
  Music: {
    background: "#16F4D0",
    color: "black",
    icon: faMusic,
  },
  Mystery: {
    background: "#6A5D7B",
    color: "#F9ADA0",
    icon: faMagnifyingGlass,
  },
  Romance: {
    background: "#A30015",
    color: "#C2AFF0",
    icon: faHeart,
  },
  "Science Fiction": {
    background: "#FFF689",
    color: "#58355E",
    icon: faHatWizard,
    fontSize: "",
  },
  "TV Movie": {
    background: "grey",
    color: "white",
    icon: faCouch,
  },
  Thriller: {
    background: "#320E3B",
    color: "green",
    icon: faHippo, 
  },
  War: {
    background: "#6B0504",
    color: "#FFFBFC",
    icon: faBomb
  },
  Western: {
    background: "#FFFBFC",
    color: "#754043",
    icon: faHorse,
  },
};
export default function LandingPage(props) {
  console.log("landingPage.", props.genres);
  return (
    <div className="genreGrid">
      {props.genres?.map((genre) => (
        <Link style={genreData[genre.name]} to={`/genre/${genre.id}`}>
          <div className="container" key={genre.id}>
            {genreData[genre.name]?.icon && (
              <FontAwesomeIcon
                icon={genreData[genre.name].icon}
                className="icon"
              />
            )}
            <div>{genre.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}