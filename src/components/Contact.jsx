import './css/Contact.css'
import React, { useEffect } from 'react';

function Contact(){
    window.onload = function() {
        const email = document.getElementById('email');
        const emailError = document.getElementById("email-invalid");
        const form = document.querySelector('form');

        // add event listener to check for input on email
        email.addEventListener('input', function(event) {
            // check if email is valid
            if (email.validity.valid) {
                // hide error message
                emailError.innerHTML = '';
                emailError.className = 'error';
            } else {
                // show error message
                emailError.innerHTML = 'Please enter a valid email address';
                emailError.className = 'error active';
            }
        });

        form.addEventListener("submit", (event) => {
            // if the email field is valid, we let the form submit
            if (!email.validity.valid) {
              // Then we prevent the form from being sent by canceling the event
              event.preventDefault();
            }
        });

    }


    return (
        <div className='contact-section' id='contact'>
            <h2>Contact Me!</h2>
            <p>Email: xchen110@gmail.com</p>
            <form>
                <input type="text" id="name" name="name" placeholder="Name" required></input>
                <label for="mail">
                    <input type="email" id="email" name="email" placeholder="Email" required></input>
                    <span id="email-invalid" className="error"></span>
                </label>
                <textarea id="subject" name="subject" placeholder="Write something... (Currently does not submit yet. Still a WIP. Will try to implement form functions soon)" required></textarea>
                <button type="submit" value="Submit">Submit</button>
            </form>
        </div>
    )
    
}

export default Contact
