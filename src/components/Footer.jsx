
import './css/Footer.css'

function Footer() {
    return (
        <>
        <div class="footer" id="footer">
        <a href="mailto:xingc110@gmail.com" class="footer__link">xingc110@gmail.com</a>
        <ul class="social-list">
            <li class="social-list__item">
                <a class="social-list__link" href="https://www.linkedin.com/in/xing-chen-b4050b202/">
                    <i class="fab fa-linkedin"></i>
                </a>
            </li>
            
            <li class="social-list__item">
                <a class="social-list__link" href="https://twitter.com">
                    <i class="fab fa-twitter"></i>
                </a>
            </li>
            <li class="social-list__item">
                <a class="social-list__link" href="https://github.com/XChen601">
                    <i class="fab fa-github"></i>
                </a>
            </li>
        </ul>
    </div>
    </>
    )
}

export default Footer;