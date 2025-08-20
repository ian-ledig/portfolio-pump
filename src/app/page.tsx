import Head from 'next/head';
import Image from 'next/image';
import NavigationBarComponent from './components/navigation-bar/navigation-bar';
import RandomTextComponent from './components/random-text/random-text';
import InkImageComponent from './components/ink-image/ink-image';
import CollaborationComponent from './components/collaboration/collaboration';
import ProjectCardComponent from './components/project-card/project-card';
import ContactComponent from './components/contact/contact';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './home.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ian LEDIG&apos;s Portfolio CV - FullStack Developer</title>
        <meta
          name="description"
          content="Showcasing my expertise as a FullStack Developer, including past collaborations, technical skills and completed projects. Available for work — let's bring your ideas to life together!"
        />
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
            <InkImageComponent src="/picture0.webp" alt="Sakurajima picture" />
          </div>
          <aside className="profile-card">
            <div className="profile-card-picture">
              <Image
                src="/profile.webp"
                alt="Ian LEDIG profile picture"
                width={300}
                height={0}
                priority
              />
            </div>
            <div className="profile-card-bio">
              <div className="title-1 font-black">Ian LEDIG</div>
              <div className="subtitle-1 info-text font-regular">
                Software Engineer
              </div>
              <div className="flex items-center info-text justify-center">
                <FaMapMarkerAlt
                  size={12}
                  className="mb-3.5 mr-1"
                  style={{ color: 'var(--secondary)' }}
                />
                <div className="subtitle-3 mb-3 font-regular">大阪、日本</div>
              </div>
            </div>
            <div className="profile-card-education">
              <div className="font-bold">
                Master&apos;s Degree in Computer Science
              </div>
              <div className="subtitle-3 info-text mb-3">
                University of Laval, Canada
              </div>
              <div className="font-bold">Bachelor&apos;s Degree SIGD-IOTIA</div>
              <div className="subtitle-3 info-text mb-3">
                University of Côte-d&apos;Azur, France
              </div>
              <div className="font-bold">
                Technology Diploma in Computer Science
              </div>
              <div className="subtitle-3 info-text mb-3">
                University of Strasbourg, France
              </div>
            </div>
          </aside>
        </section>
        <section id="collaboration" aria-labelledby="collaboration-title">
          <h2 className="title title-1 font-black">They trusted me_</h2>
          <CollaborationComponent />
          <div className="title-2 text-center font-thin mt-3 mb-20">
            Will you be next?
          </div>
        </section>
        <section id="skill" aria-labelledby="skill-title">
          <h2 className="title title-1 font-black">Skills_</h2>
          <div className="skill">
            <div className="skill-item">
              <h3 className="title-2 font-heavy">Web Development</h3>
              <h4 className="text-lg font-semibold">
                As a passionate web developer, I master the Angular, React
                Frameworks.
              </h4>
              <div className="skill-icons">
                <div className="skill-icon-item">
                  <Image
                    src="/skill/angular.webp"
                    alt="Angular logo"
                    loading="lazy"
                    width={50}
                    height={50}
                  />
                  <h5 className="font-heavy">Angular</h5>
                </div>
                <div className="skill-icon-item">
                  <Image
                    src="/skill/react.webp"
                    alt="React logo"
                    loading="lazy"
                    width={60}
                    height={60}
                  />
                  <h5 className="font-heavy">React</h5>
                </div>
              </div>
            </div>
            <div className="skill-item">
              <h3 className="title-2 font-heavy">Backend Development</h3>
              <h4 className="text-lg font-semibold">
                With Java and Spring for APIs, C++ for complex systems, I design
                solid backend architectures.
              </h4>
              <div className="skill-icons">
                <div className="skill-icon-item">
                  <Image
                    src="/skill/java.webp"
                    alt="Java logo"
                    loading="lazy"
                    width={50}
                    height={50}
                  />
                  <h5 className="font-heavy">Java</h5>
                </div>
                <div className="skill-icon-item">
                  <Image
                    src="/skill/spring.webp"
                    alt="Spring logo"
                    loading="lazy"
                    width={53}
                    height={53}
                  />
                  <h5 className="font-heavy">Spring</h5>
                </div>
                <div className="skill-icon-item">
                  <Image
                    src="/skill/cpp.webp"
                    alt="C++ logo"
                    loading="lazy"
                    width={50}
                    height={50}
                  />
                  <h5 className="font-heavy">C++</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="project" aria-labelledby="project-title">
          <h2 className="title title-1 font-black">Projects_</h2>
          <div className="project">
            <ProjectCardComponent
              src="/project/flighttracker.webp"
              title="Flight Tracking Application"
              description="Flight Tracker is a sleek web app that helps users quickly find upcoming flights by entering an airline code, with optional filters for flight number and long-haul routes. Perfect for travelers, airline staff, or trip planners seeking real-time flight info in a simple interface."
              technologies={['React', 'Java', 'Spring']}
              links={[
                {
                  href: 'https://ian-ledig.com/flight-tracker',
                  image: '/project/icon/link.webp',
                },
                {
                  href: 'https://github.com/ian-ledig/flight-tracker-cs',
                  image: '/project/icon/client.webp',
                },
                {
                  href: 'https://github.com/ian-ledig/flight-tracker-ss',
                  image: '/project/icon/server.webp',
                },
              ]}
            />
            <ProjectCardComponent
              src="/project/alysiaonline.webp"
              title="Alysia Online MMORPG"
              description="• Develop a modernized version of Flyff MMO game, with 3,500+ concurrent users. Design and implement server load balancing, concurrent access control and secure client-server communication protocols. Collaborate with a team to deliver new gameplay systems and ensure code quality through reviews and mentoring."
              technologies={['C++', 'SQL']}
              links={[
                {
                  href: 'http://discord.gg/alysia-online',
                  image: '/project/icon/discord.webp',
                },
              ]}
            />
            <ProjectCardComponent
              src="/project/airfrance.webp"
              title="Airport Flight Consultation"
              description="Development of a flight, passenger, baggage consultation application for airport agents. Including architecture, development, testing, deployment and production release on the cloud."
              technologies={['Angular', 'Java', 'Spring', 'SQL', 'Azure']}
              links={[]}
            />
            <ProjectCardComponent
              src="/project/moncompteretraite.webp"
              title="French Retirement Application"
              description="Development of “Mon Compte Retraite” mobile application for iOS and Android, ensured communication security, production monitoring and designed batch processes."
              technologies={['Angular', 'Ionic', 'Java', 'Spring', 'SQL']}
              links={[
                {
                  href: 'https://play.google.com/store/apps/details?id=fr.agircarrco.smartretraite',
                  image: '/project/icon/android.webp',
                },
                {
                  href: 'https://apps.apple.com/fr/app/mon-compte-retraite/id1176066236',
                  image: '/project/icon/apple.webp',
                },
              ]}
            />
            <ProjectCardComponent
              src="/project/cawe.webp"
              title="CAWE Stock Traceability"
              description="Development of a stock traceability mobile application for Android platforms."
              technologies={['C#', 'Xamarin', 'SQL']}
              links={[]}
            />
            <ProjectCardComponent
              src="/project/kanjitest.webp"
              title="日本語 Vocabulary Test"
              description="Interactive app designed to help users to learn and memorize Japanese vocabulary."
              technologies={['Electron', 'JavaScript']}
              links={[
                {
                  href: 'https://github.com/ian-ledig/kanji-test',
                  image: '/project/icon/github.webp',
                },
              ]}
            />
            <ProjectCardComponent
              src="/project/dynamx.webp"
              title="3D Model converter"
              description="Contains two programs that allow converting Toolbox .java models designed for Minecraft Flan's mod to work with the DynamX mod."
              technologies={['Python', 'Java']}
              links={[
                {
                  href: 'https://github.com/ian-ledig/FlanToDynamX',
                  image: '/project/icon/github.webp',
                },
              ]}
            />
            <ProjectCardComponent
              src="/project/portfoliopump.webp"
              title="Pump Portfolio"
              description="Portfolio website to showcase my skills and projects."
              technologies={['React', 'Next.js']}
              links={[
                {
                  href: 'https://ian-ledig.com/',
                  image: '/project/icon/link.webp',
                },
                {
                  href: 'https://github.com/ian-ledig/portfolio-pump',
                  image: '/project/icon/github.webp',
                },
              ]}
            />
            <ProjectCardComponent
              src="/project/flyffmaps.webp"
              title="Flyff maps selling website."
              description="Flyff maps selling website."
              technologies={['React', 'Next.js']}
              links={[
                {
                  href: 'https://flyff-maps.com/',
                  image: '/project/icon/link.webp',
                },
                {
                  href: 'https://github.com/ian-ledig/flyff-pump',
                  image: '/project/icon/github.webp',
                },
              ]}
            />
            <ProjectCardComponent
              src="/project/grooveai.webp"
              title="Groove AI Music recognizer"
              description="Development of a music theme recognition application using AI and machine learning."
              technologies={['Python']}
              links={[]}
            />
            <ProjectCardComponent
              src="/project/inforetraite.webp"
              title="Info Retraite Website"
              description="Improving and monitoring of the Info Retraite website, including the development of new features and the correction of bugs."
              technologies={['Angular', 'Java', 'Spring', 'SQL']}
              links={[
                {
                  href: 'https://info-retraite.fr/',
                  image: '/project/icon/link.webp',
                },
              ]}
            />
            <ProjectCardComponent
              src="/project/archeroes.webp"
              title="Serious Archeology Game"
              description="Archeroes is a serious game designed to introduce players to the basics and principles of archaeology."
              technologies={['Java', 'JavaFX']}
              links={[
                {
                  href: 'https://github.com/ian-ledig/ekip-serious-game-archeros',
                  image: '/project/icon/github.webp',
                },
              ]}
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
                className="logo object-contain self-start"
                src="/logofull.webp"
                alt="Ian LEDIG logo"
                loading="lazy"
                width={100}
                height={0}
              />
            </div>
            <div className="footer-detail-item">
              <div className="footer-detail-item-column">
                <div className="font-heavy">Social</div>
                <a
                  href="https://www.linkedin.com/in/ian-ledig/"
                  target="_blank"
                  className="font-regular"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
                <a
                  href="https://github.com/ian-ledig"
                  target="_blank"
                  className="font-regular"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href="mailto:ian.ledigfr@gmail.com"
                  target="_blank"
                  className="font-regular"
                  rel="noreferrer"
                >
                  Email
                </a>
              </div>
              <div className="footer-detail-item-column">
                <div className="font-heavy">Navigation</div>
                <a href="#home" className="font-regular">
                  Home
                </a>
                <a href="#collaboration" className="font-regular">
                  About
                </a>
                <a href="#skill" className="font-regular">
                  Skills
                </a>
                <a href="#project" className="font-regular">
                  Projects
                </a>
                <a href="#contact" className="font-regular">
                  Contact
                </a>
              </div>
              <div className="footer-detail-item-column">
                <div className="font-heavy">Usage</div>
                <a
                  href="https://github.com/ian-ledig/portfolio-pump/blob/master/LICENSE"
                  target="_blank"
                  className="font-regular"
                  rel="noreferrer"
                >
                  MIT
                </a>
              </div>
              <div className="footer-detail-item-column">
                <div className="font-heavy">Other</div>
                <a
                  href="https://github.com/ian-ledig/portfolio-pump"
                  target="_blank"
                  className="font-regular"
                  rel="noreferrer"
                >
                  Project source
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="separator mb-3"></div>
            <div className="text-end opacity-80">
              Copyright © 2025 Ian LEDIG
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
