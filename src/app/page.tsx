import Image from "next/image";
import RandomTextComponent from "./components/random-text/random-text.tsx";
import InkImageComponent from "./components/ink-image/ink-image.tsx";
import CollaborationComponent from "./components/collaboration/collaboration.tsx";
import { FaMapMarkerAlt } from 'react-icons/fa';
import "./home.css"

export default function Home() {
  return (
    <div>
      <div className="navigation-bar">
        <div className="navigation-bar-links">
          <Image
            src="/logofull.png"
            alt="Ian LEDIG logo"
            width={100}
            height={0}
            priority
          />
          <div className="navigation-separator">|</div>
          <a href="" className="navigation-item font-heavy">Home</a>
          <div className="navigation-separator">|</div>
          <a href="" className="navigation-item font-heavy">About</a>
          <div className="navigation-separator">|</div>
          <a href="" className="navigation-item font-heavy">Skills</a>
          <div className="navigation-separator">|</div>
          <a href="" className="navigation-item font-heavy">Projects</a>
          <div className="navigation-separator">|</div>
        </div>
        <div className="navigation-bar-links">
          <a href="https://github.com/ian-ledig" target="_blank" className="self-center">
            <Image
              src="/github.png"
              alt="Github logo"
              width={25}
              height={0}
              priority
            />
          </a>
          <a href="https://www.linkedin.com/in/ian-ledig/" target="_blank" className="self-center mr-3">
            <Image
              src="/linkedin.png"
              alt="Linkedin logo"
              width={25}
              height={0}
              priority
            />
          </a>
          <a href="" className="navigation-item button-1 font-heavy">Contact</a>
        </div>
      </div>
      <div className="body">
        <div className="title title-1 font-black">
          <div>Need a</div>
          <RandomTextComponent />
          <div>_</div>
        </div>
        <div className="home">
          <div className="home-picture">
            <InkImageComponent src="picture0.png" alt="Sakurajima picture"/>
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
              <div className="title-1 font-black">Ian LEDIG</div>
              <div className="subtitle-1 info-text font-regular">Fullstack Developer</div>
              <div className="flex items-center info-text justify-center">
                <FaMapMarkerAlt 
                  size={12} 
                  className="mb-3.5 mr-1"
                  style={{ color: "var(--secondary)" }}
                />
                <div className="subtitle-3 mb-3 font-thin">Yokohama, Japan</div>
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
        <div className="title title-1 font-black">They trusted me_</div>
        <div className="collaboration">
          <CollaborationComponent />
        </div>
        <div className="title-2 text-center font-thin mt-3">Will you be next?</div>
        <div className="title title-1 font-black">Skills_</div>
        <div className="skill">
          <div className="skill-item">
            <div className="title-2 font-heavy">Web Development</div>
            <div className="text-lg font-semibold">As a passionate web developer, I master the Angular, React and Electron Frameworks.</div>
            <div className="skill-icons">
              <div className="skill-icon-item">
                <Image
                  src="/skill/angular.png"
                  alt="Angular logo"
                  width={50}
                  height={50}
                  priority
                />
                <div className="font-heavy">Angular</div>
              </div>
              <div className="skill-icon-item">
                <Image
                  src="/skill/react.png"
                  alt="React logo"
                  width={50}
                  height={50}
                  priority
                />
                <div className="font-heavy">React</div>
              </div>
              <div className="skill-icon-item">
                <Image
                  src="/skill/electron.png"
                  alt="Electron logo"
                  width={50}
                  height={50}
                  priority
                />
                <div className="font-heavy">Electron</div>
              </div>
            </div>
          </div>
          <div className="skill-item">
            <div className="title-2 font-heavy">Mobile Development</div>
            <div className="text-lg font-semibold">As a mobile development specialist, I combine Ionic with native environments to create tailor-made applications for each users.</div>
            <div className="skill-icons">
              <div className="skill-icon-item">
                <Image
                  src="/skill/ionic.png"
                  alt="Ionic logo"
                  width={50}
                  height={50}
                  priority
                />
                <div className="font-heavy">Ionic</div>
              </div>
              <div className="skill-icon-item">
                <Image
                  src="/skill/android.png"
                  alt="Android logo"
                  width={50}
                  height={50}
                  priority
                />
                <div className="font-heavy">Android</div>
              </div>
              <div className="skill-icon-item">
                <Image
                  src="/skill/apple.png"
                  alt="Apple logo"
                  width={50}
                  height={50}
                  priority
                />
                <div className="font-heavy">Apple</div>
              </div>
            </div>
          </div>
          <div className="skill-item">
            <div className="title-2 font-heavy">Backend Development</div>
            <div className="text-lg font-semibold">With Java and Spring for APIs, Python for speed and C++/C# for complex systems, I design solid backend architectures.</div>
            <div className="skill-icons">
              <div className="skill-icon-item">
                <Image
                  src="/skill/java.png"
                  alt="Java logo"
                  width={50}
                  height={50}
                  priority
                />
                <div className="font-heavy">Java</div>
              </div>
              <div className="skill-icon-item">
                <Image
                  src="/skill/Spring.png"
                  alt="Spring logo"
                  width={50}
                  height={50}
                  priority
                />
                <div className="font-heavy">Spring</div>
              </div>
              <div className="skill-icon-item">
                <Image
                  src="/skill/cpp.png"
                  alt="C++ logo"
                  width={50}
                  height={50}
                  priority
                />
                <div className="font-heavy">C++</div>
              </div>
              <div className="skill-icon-item">
                <Image
                  src="/skill/csharp.png"
                  alt="C# logo"
                  width={50}
                  height={50}
                  priority
                />
                <div className="font-heavy">C#</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
