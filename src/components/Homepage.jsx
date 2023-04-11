


function Homepage(){
    return (
        <>
            <Introduction />
            <Projects />
        </>
    )
}

function Introduction(){
    return (
        <h1>test</h1>

    )
}

function Projects(){
    return (
        <>
        <div class="Projects" id="project-list">
            <h1>Projects</h1>
            <p>click the project items!</p>
            <div class="project-items">
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
                <button class="item" id="ComingSoon">
                    <h2>Coming Soon</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, illo tempora quae voluptas minima consectetur.</p>
                </button> 
            </div>
        </div>
        </>
        
    )
}

export default Homepage