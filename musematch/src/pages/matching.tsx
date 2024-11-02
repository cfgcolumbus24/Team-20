import { useState } from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import logo from "./logo.png";
import "./matching.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface Artwork {
  title: string;
  description: string;
  imgUrl: string;
}

interface Profile {
  name: string;
  aboutMe: string;
  tags: string[];
  imgUrl: string;
  artwork: Artwork[];  // Add artwork array to each profile
}

export const Matching = () => {
  const [currentX, setCurrentX] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [showMatchPopup, setShowMatchPopup] = useState(false);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  const profiles: Profile[] = [
    {
      name: "Emily Manwaring",
      aboutMe: "Art Enthusiast! I love painting, and some of my works have been featured in galleries globally",
      tags: ["Mentee", "0-2 YOE", "Oil Painting"],
      imgUrl: "/emily3.png",
      artwork: [
        { title: "World in Our Palms, 2023,", description: "World in Our Palms, 2023,", imgUrl: "/artworks/emily1.png" },
        { title: "Suki and Saphire, 2023", description: "Acrylic on Canvas", imgUrl: "/artworks/emily2.png" },
        { title: "E Train to Jamaica Center, 2021", description: "Acrylic and mixed media on canvas", imgUrl: "/artworks/emily3.png" },
        { title: "Heels 01, 2023", description: "Cement, leather heels, ribbon, jewelry. Dimensions Variable", imgUrl: "/artworks/emily4.png" },
      ],
    },
    {
      name: "Cansu Yıldıran",
      aboutMe: "Hi! I'm a photographer from Istabul who is always looking for friends!",
      tags: ["Mentor", "6-10 YOE", "Photographer"],
      imgUrl: "./cansu.jpeg",
      artwork: [
        { title: "Cansu Photograph 1", description: "Lady holding flower with mask", imgUrl: "/artworks/cansu1.png" },
        { title: "Cansu Photograph 2", description: "Person sitting on dock", imgUrl: "/artworks/cansu2.png" },
        { title: "Cansu Photograph 3", description: "Lady sitting in chair", imgUrl: "/artworks/cansu3.png" },
        { title: "Cansu Photograph 4", description: "Mother kissing her child", imgUrl: "/artworks/cansu4.png"},
      ],
    },
    {
      name: "Bony Ramirez",
      aboutMe: "Digital artist exploring futuristic themes.",
      tags: ["Mentor", "3-5 YOE", "Painting"],
      imgUrl: "/bony.png",
      artwork: [
        { title: "Bony Artwork 1", description: "Bony's first artwork", imgUrl: "/artworks/bony1.png" },
        { title: "Bony Artwork 2", description: "Bony's second artwork", imgUrl: "/artworks/bony2.png" },
        { title: "Bony Artwork 3", description: "Bony's third artwork", imgUrl: "/artworks/bony3.png" },
        { title: "Bony Artwork 4", description: "Bony's fourth artwork", imgUrl: "/artworks/bony4.png" },
      ],
    },
  ];

  // Handle swipe right
  const handleHeartClick = () => {
    setCurrentX(1500);
    setRotation(40);
    setShowMatchPopup(true);
    setTimeout(() => setShowMatchPopup(false), 2000);
    setTimeout(() => resetCard(), 500);
  };

  // Handle swipe left
  const handleXClick = () => {
    setCurrentX(-1000);
    setRotation(-40);
    setTimeout(() => resetCard(), 500);
  };

  const resetCard = () => {
    setCurrentX(0);
    setRotation(0);
    setCurrentProfileIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  const handleImageHover = (index: number) => setHoveredIndex(index);
  const handleImageLeave = () => setHoveredIndex(null);
  const handleImageClick = (description: string) => {
    setModalText(description);
    setShowModal(true);
  };

  const currentProfile = profiles[currentProfileIndex];

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
        <img src={currentProfile.imgUrl} alt="person" className="pfp-image" />
        <h1 className="person-name">{currentProfile.name}</h1>
        <h2 className="about-me">{currentProfile.aboutMe}</h2>
        <div className="tag-container">
          {currentProfile.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="like-dislike-container">
          <RxCross2 className="like-dislike" onClick={handleXClick} aria-label="Dislike" />
          <IoMdCheckboxOutline className="like-dislike" onClick={handleHeartClick} aria-label="Love" />
        </div>
      </div>

      {/* Artwork Section */}
      <div className="artwork-section">
        <h2 className="artist-title">Artist's Artwork</h2>
        <div className="artwork-gallery">
          {currentProfile.artwork.map((artwork, index) => (
            <div
              key={index}
              className="artwork-image-container"
              onMouseEnter={() => handleImageHover(index)}
              onMouseLeave={handleImageLeave}
              onClick={() => handleImageClick(artwork.description)}
            >
              <img src={artwork.imgUrl} alt={artwork.title} className="artwork-image" />
              {hoveredIndex === index && <div className="artwork-title">{artwork.title}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for artwork details */}
      <Modal show={showModal} onHide={() => setShowModal(false)} className="custom-modal">
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
