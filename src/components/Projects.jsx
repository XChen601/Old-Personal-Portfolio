import './css/Projects.css'

import eas1 from '../images/etch-a-sketch-button.gif'
import eas2 from '../images/etch-a-sketch-buttons.png'
import eas3 from '../images/etch-a-sketch.gif'
import eas4 from '../images/etch-a-sketch4.png'
import ts1 from '../images/tickstock1.gif'
import ts2 from '../images/tickstock2.png'
import ts3 from '../images/tickstock3.png'
import ts4 from '../images/tickstock4.png'
import ob1 from '../images/Odd-bot.png'
import ob2 from '../images/odd-bot2.png'
import ob3 from '../images/odd-bot3.png'
import ob4 from '../images/odd-bot4.png'
import esv1 from '../images/esv1.png'
import esv2 from '../images/esv2.png'
import esv3 from '../images/esv3.png'
import esv4 from '../images/esv4.png'


function Projects() {
    return (
        <>
        <div className="projects">
            <div className="project-item">
                <div className="project-name">Eye Scream Vision</div>
                <div className="project-description">Utilized Material UI to create a responsive website along with react router for multiple pages.</div>
                <div className="project-images">
                    <div><img src={esv1} alt="demo-img"/></div>
                    <div><img src={esv2} alt="demo-img"/></div>
                    <div><img src={esv3} alt="demo-img"/></div>
                    <div><img src={esv4} alt="demo-img"/></div>
                </div>
            </div>
            <div className="project-item">
                <div className="project-name">TickStock</div>
                <div className="project-description">Built an Android application with Android Studio using Kotlin that displays stock prices, news relating to finance, and account setting tab
                        by working with Polygon API to retrieve stock data.</div>
                <div className="project-images">
                    <div><img src={ts1}  alt="demo-img"/></div>
                    <div><img src={ts2} alt="demo-img"/></div>
                    <div><img src={ts3} alt="demo-img"/></div>
                    <div><img src={ts4} alt="demo-img"/></div>
                </div>
            </div>
            <div className="project-item">
                <div className="project-name">Etch-A-Sketch</div>
                <div className="project-description">Website with Etch-A-Sketch created using HTML, CSS, and JS. Dynamically updates page depending on the selected inputs. Features include rainbow, clear, resize, and eraser button.</div>
                <div className="project-images">
                    <div><img src={eas1} alt="demo-img"/></div>
                    <div><img src={eas2} alt="demo-img"/></div>
                    <div><img src={eas3} alt="demo-img"/></div>
                    <div><img src={eas4} alt="demo-img"/></div>
                </div>
            </div>
            <div className="project-item">
                <div className="project-name">Odds Tracker</div>
                <div className="project-description">Utilized everygame.eu API and requests to retrieve game data including game name, team names, and team odds with Beautiful Soup.
                        Detected changes to team odds for sports games and connects it with discord API to send messages, read user commands, and do calculations.</div>
                <div className="project-images">
                    <div><img src={ob1} alt="demo-img"/></div>
                    <div><img src={ob2} alt="demo-img"/></div>
                    <div><img src={ob3} alt="demo-img"/></div>
                    <div><img src={ob4} alt="demo-img"/></div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Projects