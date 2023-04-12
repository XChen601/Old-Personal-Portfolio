import './css/Homepage.css'
import pfp from '../images/linkedin_pfp.jpg'
import { Button } from '@mui/material';

function Homepage(){
    return (
        <>
            <Introduction />
            <Projects />
            <Contact />
        </>
    )
}

function Introduction(){
    return (
        <>
            <div class="introduction" id="About">
                <h1>Who Am I?</h1>
                <div class="introduction-inner">
                    <img src={pfp}  width="150" height="150" alt="Linkedin pfp" class = "pfp" />
                    <p>Hello and welcome to my personal portfolio website! 
                        My name is Xing and I am a current student at Hunter College. 
                        I am pursuing a degree in Computer Science. I'm interested in 
                        learning more about web development, automation, and new technologies.</p>
                </div>
                <Button id='contact-button' variant='outlined' style={{borderColor: 'white'}}>Get In Touch</Button>
            </div>
        </>
    )
}

function Projects(){
    return (
        <>
        <div class="Projects" id="project-list">
            <h1>Projects</h1>
            <div class="project-items">
                <button class="item" id="Eye Scream Vision">
                    <h2>Eye Scream Vision</h2>
                    <p>Utilized Material UI to create a responsive website along with react router for multiple pages. 
                    </p>
                </button>
                <button class="item" id="Fortnite-Destination">
                    <h2>Fortnite Tourist Destination</h2>
                    <p>Utilized React and React Router to create a multi-page site introducing fortnite as a tourist destination. 
                    </p>
                </button>
                <button class="item" id="TickStock">
                    <h2>TickStock</h2>
                    <p>Built an Android application with Android Studio using Kotlin that displays stock prices, news relating to finance, and account setting tab
                        by working with Polygon API to retrieve stock data.
                    </p>
                </button>
                <button class="item" id="Etch-A-Sketch">
                    <h2>Etch-a-Sketch</h2>
                    <p>Website with Etch-A-Sketch created using HTML, CSS, and JS. Features include rainbow, clear, resize, and eraser button.</p>
                </button>
                <button class="item" id="AutoTrader">
                    <h2>Auto Trader</h2>
                    <p>
                        Utilized selenium to automate buying and selling of stocks for different brokerages.
                        Worked with Tradier API to buy and sell stocks on Tradier.
                    </p>
                </button>
                <button class="item" id="OddsTracker">
                    <h2>Odds Tracker</h2>
                    <p>
                        Utilized everygame.eu API and requests to retrieve game data including game name, team names, and team odds with Beautiful Soup.
                        Detected changes to team odds for sports games and connects it with discord API to send messages, read user commands, and do calculations.
                    </p>
                </button>
                
                <button class="item" id="Rock-Paper-Scissors">
                    <h2>Rock-Paper-Scissors</h2>
                    <p>Play rock paper scissors with a computer, first to five wins!</p>
                </button>
                <button class="item" id="Calculator">
                    <h2>Calculator</h2>
                    <p>Basic calculator with vanilla javascript.</p>
                </button>
                <button class="item" id="ComingSoon">
                    <h2>Coming Soon</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, illo tempora quae voluptas minima consectetur.</p>
                </button>

            </div>
        </div>
        </>
        
    )
}

function Contact(){
    return (
        <div className='contact-section'>
        <h2>Contact Me!</h2>
        <p>Email: xchen110@gmail.com</p>
    </div>
    )
    
}

export default Homepage