import Image from "next/image";
import RandomTextComponent from "./components/random-text/random-text.tsx";
import InkImageComponent from "./components/ink-image/ink-image.tsx";
import { FaMapMarkerAlt } from 'react-icons/fa';
import "./home.css"

export default function Home() {
  return (
    <div>
      <div className="navigation-bar">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Ian LEDIG logo"
          width={100}
          height={0}
          priority
        />
        <a href="" className="navigation-item">Home</a>
        <a href="" className="navigation-item">About</a>
        <a href="" className="navigation-item">Skills</a>
        <a href="" className="navigation-item">Projects</a>
      </div>
      <div className="body">
        <div className="title title-1">
          <div>Need a</div>
          <RandomTextComponent />
          <div>?</div>
        </div>
        <div className="home">
          <div className="home-picture">
            <InkImageComponent src="background.png" alt="Sakurajima picture"/>
          </div>
          <div className="profile-card">
            <div className="profile-card-picture">
              <Image
                src="/profile.png"
                alt="Ian LEDIG profile picture"
                width={300}
                height={0}
                priority
              />
            </div>
            <div className="profile-card-bio">
              <div className="title-1">Ian LEDIG</div>
              <div className="subtitle-1 info-text">Fullstack Developer</div>
              <div className="flex items-center info-text justify-center">
                <FaMapMarkerAlt 
                  size={12} 
                  className="mb-3.5 mr-1"
                  style={{ color: "var(--secondary)" }}
                />
                <div className="subtitle-3 mb-3">Yokohama, Japan</div>
              </div>
            </div>
            <div className="profile-card-education">
              <div className="subtitle-2">Master's Degree in Computer Science</div>
              <div className="subtitle-3 info-text mb-3">University of Laval, Canada</div>
              <div className="subtitle-2">Bachelor's Degree SIGD-IOTIA</div>
              <div className="subtitle-3 info-text mb-3">University of Côte-d'Azure, France</div>
              <div className="subtitle-2">Technology Diploma in Computer Science</div>
              <div className="subtitle-3 info-text mb-3">University of Strasbourg, France</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
