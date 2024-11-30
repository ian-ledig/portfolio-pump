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
        
      </div>
    </div>
  );
}
