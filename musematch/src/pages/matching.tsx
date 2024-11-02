import { useState } from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import logo from "./logo.png";
import "./matching.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface Artwork {
  title: string;
  description: string;
  imgUrl: string;
}

export const Matching = () => {
  //variables for rotation
  const [currentX, setCurrentX] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [showMatchPopup, setShowMatchPopup] = useState(false);

  //Load in artwork Data
  const artworkData: Artwork[] = [
    {
      title: "Artwork 1",
      description: "Description for artwork 1",
      imgUrl: logo,
    },
    {
      title: "Artwork 2",
      description: "Description for artwork 2",
      imgUrl: logo,
    },
    {
      title: "Artwork 3",
      description: "Description for artwork 3",
      imgUrl: logo,
    },
    {
      title: "Artwork 4",
      description: "Description for artwork 4",
      imgUrl: logo,
    },
    // { title: "Artwork 5", description: "Description for artwork 5", imgUrl: logo },
    // { title: "Artwork 6", description: "Description for artwork 6", imgUrl: logo }
  ];

  //makes cards automatically swipe right
  const handleHeartClick = () => {
    setCurrentX(1500); // Move off-screen to the right
    setRotation(40);
    console.log("User Swiped Right");

    setShowMatchPopup(true);
    setTimeout(() => setShowMatchPopup(false), 2000);

    setTimeout(() => {
      setCurrentX(0);
      setRotation(0);
    }, 500);
  };

  // Automatically swipe left
  const handleXClick = () => {
    setCurrentX(-1000); // Move off-screen to the left
    setRotation(-40);
    console.log("User Swiped Left");

    setTimeout(() => {
      setCurrentX(0);
      setRotation(0);
    }, 500);
  };
  const handleImageHover = (index: number) => {
    setHoveredIndex(index);
  };

  const handleImageLeave = () => {
    setHoveredIndex(null);
  };

  const handleImageClick = (description: string) => {
    setModalText(description);
    setShowModal(true);
  };

  return (
    <div className="App">
      {showMatchPopup && <div className="match-popup">You matched!</div>}
      <div
        className="card"
        style={{
          transform: `translateX(${currentX}px) rotate(${rotation}deg)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <img src={logo} alt="person" className="pfp-image" />
        <h1 className="person-name">Name</h1>
        <h2 className="about-me">About me</h2>
        <div className="tag-container">
          <span className="tag">Mentor</span>
          <span className="tag">YOE</span>
          <span className="tag">Art Type</span>
        </div>
        <div className="like-dislike-container">
          <RxCross2
            className="like-dislike"
            onClick={handleXClick}
            aria-label="Dislike"
          />
          <IoMdCheckboxOutline
            className="like-dislike"
            onClick={handleHeartClick}
            aria-label="Love"
          />
        </div>
      </div>
      {/* Artwork Section */}
      <div className="artwork-section">
        <h2 className="artist-title">Artist's Artwork</h2>
        <div className="artwork-gallery">
          {artworkData.map((artwork, index) => (
            <div
              key={index}
              className="artwork-image-container"
              onMouseEnter={() => handleImageHover(index)}
              onMouseLeave={handleImageLeave}
              onClick={() => handleImageClick(artwork.description)}
            >
              <img
                src={artwork.imgUrl}
                alt={artwork.title}
                className="artwork-image"
              />
              {hoveredIndex === index && (
                <div className="artwork-title">{artwork.title}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for artwork details */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        className="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Artwork Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalText}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
