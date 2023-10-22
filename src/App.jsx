import { useRef } from 'react';
// import { useState, useEffect, useRef } from 'react';
import { AiFillDownCircle } from 'react-icons/ai';

// import components
import Footer from './Components/footer/footer';
// import Back from './Components/background/background';
import MyButton from './Components/button/button.jsx';
import HacktoMarquee from './Components/marquee/marquee';
import DashedSeperator from './Components/seperator/dashed-seperator';
import PixelSeperator from './Components/seperator/pixel-seperator';
// import PixelKeyframe from './Components/background/pixelkeyframe';

// import CSS
import 'animate.css';
import './App.css';

// import images
import pc from './Assets/pc.png';
import Repo from './Components/repo-card/repo';
import contribute from './Assets/contribute.png';
import branch from './Assets/branch.png';
import flower from './Assets/flower.png';
import jio from './Assets/sponsors/jio.png';
import git from './Assets/sponsors/Git.png';
import mlh from './Assets/sponsors/MLH.png';
import postman from './Assets/sponsors/Postman.png';
import polygon from './Assets/sponsors/polygon.png';
import redbull from './Assets/sponsors/redbull.png';
import hackLogo from './Assets/hacktoberfest-logo.png';
import owaspLogo from './Assets/logo-owasp.png';

function App() {
	// const [binaryStream, setBinaryStream] = useState(
	// 	generateRandomBinaryStream()
	// );

	// Function to generate a random binary stream
	// function generateRandomBinaryStream() {
	// 	return Array.from({ length: window.innerWidth }, () =>
	// 		Math.random() <= 0.5 ? '0' : '1'
	// 	).join('');
	// }

	// useEffect(() => {
	// 	const intervalId = setInterval(() => {
	// 		setBinaryStream(generateRandomBinaryStream());
	// 	}, 150);

	// 	return () => {
	// 		clearInterval(intervalId);
	// 	};
	// }, []);

	const ref = useRef(null);

	const handleClick = () => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};

	const jiostyle = {
		position: 'relative',
		padding: '0rem',
	};
	return (
		<>
			{/* <Back /> */}
			{/* <PixelKeyframe /> */}
			<section className="hero">
				{/* <div className='binStream'>
        {binaryStream}
      </div> */}

				<div className="logos">
					<img src={hackLogo} alt="Hacktoberfest logo" />
					<div className="multiply animate__animated animate__rotateIn">
						{' '}
						✖{' '}
					</div>
					<img src={owaspLogo} alt="OWASP logo" />
				</div>
				<div className="recruit">
					<a href="/" className="discoButton">
						<span>
							Register for
							<br />
							Recruitments!
						</span>
					</a>
				</div>
				<div className="scroll" onClick={handleClick}>
					<AiFillDownCircle />
				</div>
			</section>

			<PixelSeperator />

			<section className="about" ref={ref}>
				<div className="about-box">
					<div className="head">
						<h3 className="about-heading">About Hacktoberfest</h3>
					</div>
					<MyButton>
						<p className="about-content">
							Hacktoberfest&apos;23 marks the 10th edition of Hacktoberfest,
							organized by DigitalOcean, a month-long celebration of open-source
							coding and software Team OWASP provides five open source projects
							to which you can display and contribute - Web-Dev Tasks, Tech
							Think Tank, Algorithm Visualiser, Tab Saver Extension and
							Backend-automation NPM. These projects are widely available for
							contribution by people from various tech stacks. Hack out four
							pristine pull/merge requests and win exciting goodies and swags!
						</p>
					</MyButton>
				</div>
				<a href="/pen/" className="discoButton RegistHacto">
					<span>Register for HacktoberFest</span>
				</a>
			</section>

			<DashedSeperator />

			<section className="projects">
				<h3 className="about-heading openSrc">Our Open Source Projects</h3>
				<div className="repos">
					<Repo src={branch} alt="AI Quizmaker" title="AI Quizmaker" link="https://github.com/OWASP-STUDENT-CHAPTER/Quiz-Craft">
						Discover the world of interactive and engaging quizzes with this open-source masterpiece. Upload PDFs for summaries and quizzes.
						<p><strong>Tech-Stack: AI/ML,Python</strong></p>
					</Repo>
					<Repo src={contribute} alt="Ad-Protect" title="Ad-Protect" link="https://github.com/OWASP-STUDENT-CHAPTER/Ad-Protect">
						Ad-free surfing is every Internet user&apos;s dream. We present to you the idea that cuts out the ads and brings to you what actually matters.
						<p><strong>Tech-Stack: Javascript/Typescript </strong></p>
					</Repo>
					<Repo src={pc} alt="Golang PoW Blockchain" title="Golang PoW Blockchain" link="https://github.com/OWASP-STUDENT-CHAPTER/POW-Blockchain">
						Open-source blockchain in Go language, focusing on PoW, a foundation for cryptocurrencies.
						<p><strong>Tech-Stack: Golang, Block-chain</strong></p>
					</Repo>
					<Repo src={flower} alt="Space Invaders Arcade Game" title="Space Invaders Arcade Game" link="https://github.com/OWASP-STUDENT-CHAPTER/Space-Invaders">
						🚀🕹️ Blast off to the retro gaming galaxy with the Space Invaders Arcade Game!
						Get ready to defend our planet from the pixelated alien invasion in this open-source classic. Relive the nostalgia and join us in celebrating the fusion of old-school gaming and cutting-edge tech at OWASP Hacktoberfest
						<p><strong>Tech-Stack: Python/Javascript/C++</strong></p>
					</Repo>
					<Repo src={branch} alt="Dev Co-pilot" title="Dev Co-pilot" link="https://github.com/OWASP-STUDENT-CHAPTER/AI-Copilot">
						The AI powered software development system is an advanced tool that employs artificial intelligence to automate various aspects of software development
						<p><strong>Tech-Stack: Python,LLM,NLP</strong></p>
					</Repo>
					{/* <Repo src={contribute} alt="repo1" title="lorem ipsum" link="/">
						this web-app is aimed at frontend developers who wish to improve
						their skills by practicing coding UI elements like buttons, forms,
						etc., and figuring out the different ways these elements can be
						created by using various libraries and frameworks.
					</Repo> */}
				</div>
			</section>

			<DashedSeperator />

			<section className="sponsors">
				<div className="sponsorsDiv">
					<div className="about-heading">Our Past Sponsors</div>
					<div className="cards">
						<figure className="card2">
							<img src={jio} style={jiostyle}></img>
						</figure>
						<figure className="card2">
							<img src={git} />
						</figure>
						<figure className="card2">
							<img src={mlh} />
						</figure>
						<figure className="card2">
							<img src={postman} />
						</figure>
						<figure className="card2">
							<img src={polygon} />
						</figure>
						<figure className="card2">
							<img src={redbull} />
						</figure>
					</div>
				</div>
			</section>

			<PixelSeperator />
			<HacktoMarquee />
			<PixelSeperator />
			<Footer />
		</>
	);
}

export default App;
