import { FaHeart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "./logo.png";
import "./Matching.css";


export const Matching = () => {
    
    
    return (
        <div className="App">
            <div className="card">
            <img src={logo} alt="person" className="pfp-image"/>
            <h1 className="person-name">Name</h1>
            <h2 className="about-me">About me</h2>
            <div className="tag-container">
                <span className="tag">Mentor</span>
                <span className="tag">YOE</span>
                <span className="tag">Art Type</span>
            </div>
            <div className="like-dislike-container">
                <ImCross className="like-dislike" aria-label="Dislike"/>
                <FaHeart className="like-dislike" aria-label="Love" />
            </div>
        </div>
      </div>
    );
};

