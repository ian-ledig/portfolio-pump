import Image from "next/image";
import InkImageComponent from "./components/ink-image/ink-image.tsx";
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
              <div className="subtitle-1">Fullstack Developer</div>
              <div>Yokohama, Japan</div>
            </div>
            <div className="profile-card-education">
              <div>Master's Degree in Computer Science</div>
              <div>University of Laval, Canada</div>
              <div>Bachelor's Degree SIGD-IOTIA</div>
              <div>University of Côte-d'Azure, France</div>
              <div>Technology Diploma in Computer Science</div>
              <div>University of Strasbourg, France</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
