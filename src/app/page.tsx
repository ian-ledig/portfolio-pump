import Head from 'next/head';
import Image from "next/image";
import NavigationBarComponent from "./components/navigation-bar/navigation-bar.tsx";
import RandomTextComponent from "./components/random-text/random-text.tsx";
import InkImageComponent from "./components/ink-image/ink-image.tsx";
import CollaborationComponent from "./components/collaboration/collaboration.tsx";
import ProjectCardComponent from "./components/project-card/project-card.tsx";
import ContactComponent from "./components/contact/contact.tsx";
import { FaMapMarkerAlt } from 'react-icons/fa';
import "./home.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Ian LEDIG's Portfolio CV - FullStack Developer</title>
        <meta name="description" content="Showcasing my expertise as a FullStack Developer, including past collaborations, technical skills and completed projects. Available for work — let's bring your ideas to life together!"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header>
        <NavigationBarComponent />
        <div className="random-text title-1 font-black">
          <RandomTextComponent />
        </div>
      </header>
      <main className="body" id="home">
        <section className="home" aria-labelledby="home-title">
          <div className="home-picture">
            <InkImageComponent src="picture0.png" alt="Sakurajima picture"/>
          </div>
          <aside className="profile-card">
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
              <div className="font-bold">Master's Degree in Computer Science</div>
              <div className="subtitle-3 info-text mb-3">University of Laval, Canada</div>
              <div className="font-bold">Bachelor's Degree SIGD-IOTIA</div>
              <div className="subtitle-3 info-text mb-3">University of Côte-d'Azure, France</div>
              <div className="font-bold">Technology Diploma in Computer Science</div>
              <div className="subtitle-3 info-text mb-3">University of Strasbourg, France</div>
            </div>
          </aside>
        </section>
        <section id="collaboration" aria-labelledby="collaboration-title">
          <h2 className="title title-1 font-black">They trusted me_</h2>
          <CollaborationComponent />
          <div className="title-2 text-center font-thin mt-3 mb-20">Will you be next?</div>
        </section>
        <section id="skill" aria-labelledby="skill-title">
          <h2 className="title title-1 font-black">Skills_</h2>
          <div className="skill">
            <div className="skill-item">
              <h3 className="title-2 font-heavy">Web Development</h3>
              <h4 className="text-lg font-semibold">As a passionate web developer, I master the Angular, React and Electron Frameworks.</h4>
              <div className="skill-icons">
                <div className="skill-icon-item">
                  <Image
                    src="/skill/angular.png"
                    alt="Angular logo"
                    width={50}
                    height={50}
                    priority
                  />
                  <h5 className="font-heavy">Angular</h5>
                </div>
                <div className="skill-icon-item">
                  <Image
                    src="/skill/react.png"
                    alt="React logo"
                    width={50}
                    height={50}
                    priority
                  />
                  <h5 className="font-heavy">React</h5>
                </div>
                <div className="skill-icon-item">
                  <Image
                    src="/skill/electron.png"
                    alt="Electron logo"
                    width={50}
                    height={50}
                    priority
                  />
                  <h5 className="font-heavy">Electron</h5>
                </div>
              </div>
            </div>
            <div className="skill-item">
              <h3 className="title-2 font-heavy">Mobile Development</h3>
              <h4 className="text-lg font-semibold">As a mobile development specialist, I combine Ionic with native environments to create tailor-made applications for each users.</h4>
              <div className="skill-icons">
                <div className="skill-icon-item">
                  <Image
                    src="/skill/ionic.png"
                    alt="Ionic logo"
                    width={50}
                    height={50}
                    priority
                  />
                  <h5 className="font-heavy">Ionic</h5>
                </div>
                <div className="skill-icon-item">
                  <Image
                    src="/skill/android.png"
                    alt="Android logo"
                    width={50}
                    height={50}
                    priority
                  />
                  <h5 className="font-heavy">Android</h5>
                </div>
                <div className="skill-icon-item">
                  <Image
                    src="/skill/apple.png"
                    alt="Apple logo"
                    width={50}
                    height={50}
                    priority
                  />
                  <h5 className="font-heavy">Apple</h5>
                </div>
              </div>
            </div>
            <div className="skill-item">
              <h3 className="title-2 font-heavy">Backend Development</h3>
              <h4 className="text-lg font-semibold">With Java and Spring for APIs, Python for speed and C++/C# for complex systems, I design solid backend architectures.</h4>
              <div className="skill-icons">
                <div className="skill-icon-item">
                  <Image
                    src="/skill/java.png"
                    alt="Java logo"
                    width={50}
                    height={50}
                    priority
                  />
                  <h5 className="font-heavy">Java</h5>
                </div>
                <div className="skill-icon-item">
                  <Image
                    src="/skill/Spring.png"
                    alt="Spring logo"
                    width={50}
                    height={50}
                    priority
                  />
                  <h5 className="font-heavy">Spring</h5>
                </div>
                <div className="skill-icon-item">
                  <Image
                    src="/skill/cpp.png"
                    alt="C++ logo"
                    width={50}
                    height={50}
                    priority
                  />
                  <h5 className="font-heavy">C++</h5>
                </div>
                <div className="skill-icon-item">
                  <Image
                    src="/skill/csharp.png"
                    alt="C# logo"
                    width={50}
                    height={50}
                    priority
                  />
                  <h5 className="font-heavy">C#</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="project" aria-labelledby="project-title">
          <h2 className="title title-1 font-black">Projects_</h2>
          <div className="project">
            <ProjectCardComponent 
              src="/project/airfrance.png"
              title="Airport Flight Consultation"
              description="Development of a flight, passenger, baggage consultation application for airport agents. Including architecture, development, testing, deployment and production release on the cloud."
              technologies={["Angular", "Java", "Spring", "SQL", "Azure"]}
              links={[]}
            />
            <ProjectCardComponent 
              src="/project/moncompteretraite.png"
              title="French Retirement Application"
              description="Development of “Mon Compte Retraite” mobile application for iOS and Android, ensured communication security, production monitoring and designed batch processes."
              technologies={["Angular", "Ionic", "Java", "Spring", "SQL"]}
              links={[
                {href:"https://play.google.com/store/apps/details?id=fr.agircarrco.smartretraite", image:"/project/icon/android.png"},
                {href:"https://apps.apple.com/fr/app/mon-compte-retraite/id1176066236", image:"/project/icon/apple.png"},
              ]}
            />
            <ProjectCardComponent 
              src="/project/cawe.png"
              title="CAWE Stock Traceability"
              description="Development of a stock traceability mobile application for Android platforms."
              technologies={["C#", "Xamarin", "SQL"]}
              links={[]}
            />
            <ProjectCardComponent 
              src="/project/kanjitest.png"
              title="日本語 Vocabulary Test"
              description="Interactive app designed to help users to learn and memorize Japanese vocabulary."
              technologies={["Electron", "JavaScript"]}
              links={[
                {href:"https://github.com/ian-ledig/kanji-test", image:"/project/icon/github.png"},
              ]}
            />
            <ProjectCardComponent 
              src="/project/dynamx.png"
              title="3D Model converter"
              description="Contains two programs that allow converting Toolbox .java models designed for Minecraft Flan's mod to work with the DynamX mod."
              technologies={["Python", "Java"]}
              links={[
                {href:"https://github.com/ian-ledig/FlanToDynamX", image:"/project/icon/github.png"},
              ]}
            />
            <ProjectCardComponent 
              src="/project/portfoliopump.png"
              title="Pump Portfolio"
              description="Portfolio website to showcase my skills and projects."
              technologies={["React", "Next.js"]}
              links={[
                {href:"https://github.com/ian-ledig/portfolio-pump", image:"/project/icon/github.png"},
              ]}
            />
            <ProjectCardComponent 
              src="/project/alysiaonline.png"
              title="Alysia Online MMORPG"
              description="Modernizing a older open-source multiplayer game by incorporating current industry gameplay standards, mechanics and optimized the codebase to align with contemporary user expectations and performance benchmarks."
              technologies={["C++", "SQL"]}
              links={[]}
            />
            <ProjectCardComponent 
              src="/project/archeroes.png"
              title="Serious Archeology Game"
              description="Archeroes is a serious game designed to introduce players to the basics and principles of archaeology."
              technologies={["Java", "JavaFX"]}
              links={[
                {href:"https://github.com/ian-ledig/ekip-serious-game-archeros", image:"/project/icon/github.png"},
              ]}
            />
            <ProjectCardComponent 
              src="/project/inforetraite.png"
              title="Info Retraite Website"
              description="Improving and monitoring of the Info Retraite website, including the development of new features and the correction of bugs."
              technologies={["Angular", "Java", "Spring", "SQL"]}
              links={[
                {href:"https://info-retraite.fr/", image:"/project/icon/link.png"},
              ]}
            />
            <ProjectCardComponent 
              src="/project/grooveai.png"
              title="Groove AI Music recognizer"
              description="Development of a music theme recognition application using AI and machine learning."
              technologies={["Python"]}
              links={[]}
            />
          </div>
        </section>
        <section id="contact" aria-labelledby="contact-title">
          <ContactComponent />
        </section>
        <footer className="footer">
            <div className="footer-detail">
              <div className="footer-detail-item">
                <Image
                  className="object-contain self-start"
                  src="/logofull.png"
                  alt="Ian LEDIG logo"
                  width={100}
                  height={0}
                  priority
                />
              </div>
              <div className="footer-detail-item">
                <div className="footer-detail-item-column">
                  <div className="font-heavy">Social</div>
                  <a href="https://www.linkedin.com/in/ian-ledig/" target="_blank" className="font-regular">Linkedin</a>
                  <a href="https://github.com/ian-ledig" target="_blank" className="font-regular">Github</a>
                  <a href="mailto:ian.ledigfr@gmail.com" target="_blank" className="font-regular">Email</a>
                </div>
                <div className="footer-detail-item-column">
                  <div className="font-heavy">Navigation</div>
                  <a href="#home" className="font-regular">Home</a>
                  <a href="#collaboration" className="font-regular">About</a>
                  <a href="#skill" className="font-regular">Skills</a>
                  <a href="#project" className="font-regular">Projects</a>
                  <a href="#contact" className="font-regular">Contact</a>
                </div>
                <div className="footer-detail-item-column">
                  <div className="font-heavy">Usage</div>
                  <a href="https://github.com/ian-ledig/portfolio-pump/blob/master/LICENSE" target="_blank" className="font-regular">MIT</a>
                </div>
                <div className="footer-detail-item-column">
                  <div className="font-heavy">Other</div>
                  <a href="https://github.com/ian-ledig/portfolio-pump" target="_blank" className="font-regular">Project source</a>
                </div>
              </div>
            </div>
            <div>
              <div className="separator mb-3"></div>
              <div className="text-end opacity-50">Copyright © 2024 Ian LEDIG</div>
            </div>
        </footer>
      </main>
    </>
  );
}
