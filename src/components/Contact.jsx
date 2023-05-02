import './css/Contact.css'

function Contact(){
    return (
        <div className='contact-section' id='contact'>
            <h2>Contact Me!</h2>
            <p>Email: xchen110@gmail.com</p>
            <form>
                <input type="text" id="name" name="name" placeholder="Name"></input>
                <input type="text" id="email" name="email" placeholder="Email"></input>
                <textarea id="subject" name="subject" placeholder="Write something... (Currently does not submit yet. Still a WIP. Will try to implement form functions soon)"></textarea>
                <button type="submit" value="Submit">Submit</button>
            </form>
        </div>
    )
    
}

export default Contact