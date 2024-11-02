import { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "./logo.png";
import "./Matching.css";


export const Matching = () => {
    //variables for rotation 
    const [currentX, setCurrentX] = useState(0);
    const [rotation, setRotation] = useState(0);
    
    //makes cards automatically swipe right 
    const handleHeartClick = () => {
        setCurrentX(1000); // Move off-screen to the right
        setRotation(20);
        console.log("User Swiped Right");
        //
        setTimeout(() => {
            setCurrentX(0);
            setRotation(0);
          }, 500);
    };

    // Automatically swipe left
    const handleXClick = () => {
    setCurrentX(-1000); // Move off-screen to the left
    setRotation(-20);
    console.log("User Swiped Left");

    setTimeout(() => {
      setCurrentX(0);
      setRotation(0);
    }, 500);
  };

    return (
        <div className="App">
            <div className="card"
            style={{
                transform: `translateX(${currentX}px) rotate(${rotation}deg)`,
                transition: "transform 0.3s ease-out",
              }}
            >
            <img src={logo} alt="person" className="pfp-image"/>
            <h1 className="person-name">Name</h1>
            <h2 className="about-me">About me</h2>
            <div className="tag-container">
                <span className="tag">Mentor</span>
                <span className="tag">YOE</span>
                <span className="tag">Art Type</span>
            </div>
            <div className="like-dislike-container">
                <ImCross className="like-dislike" onClick={handleXClick} aria-label="Dislike"/>
                <FaHeart className="like-dislike" onClick={handleHeartClick} aria-label="Love" />
            </div>
        </div>
      </div>
    );
};

