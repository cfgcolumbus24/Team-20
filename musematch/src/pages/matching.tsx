import { FaHeart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "./logo.png";

export const Matching = () => {
  return (
    <div className="App">
      <div className="card">
        <img src={logo} alt="person" className="pfp-image" />
        <h1 className="person-name">Name</h1>
        <h2 className="about-me">About me</h2>
        <div className="tag-container">
          <span className="tag">Type</span>
          <span className="tag">$$$</span>
          <span className="tag">Distance</span>
          <span className="tag">Hours</span>
        </div>
        <div className="like-dislike-container">
          <div>
            <ImCross />
            <img
              src="/path/to/your/heart-icon.png"
              alt="Love this"
              className="like-dislike"
            />
          </div>
          <ImCross className="like-dislike" aria-label="Dislike" />
          <FaHeart className="like-dislike" aria-label="Love" />
        </div>
      </div>
    </div>
  );
};
