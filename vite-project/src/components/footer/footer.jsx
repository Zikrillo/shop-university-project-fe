export default function Footer(){
    return (
        <footer>
        <nav className="footer__footer-row">
            <div className="footer__small-data">
                <div className="footer__small-data-logo">
                    Navigation
                </div>
                <div className="footer__small-data-description">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Laptops</a></li>
                        <li><a href="">PC</a></li>
                        <li><a href="">Contact</a></li>

                    </ul>
                </div>
            </div>
            <div className="footer__small-data">
                <div className="footer__small-data-logo">
                    Modevice
                </div>
                <div className="footer__small-data-description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industrys standard dummy text ever.Since the 1500s, when an unknown printer. </div>
            </div>
            <div className="footer__small-data">
                <div className="footer__small-data-logo">
                    Follow Us
                </div>
                <div className="footer__small-data-description">
                    Since the 1500s, when an unknown printer took a galley of type and scrambled.
                </div>
                <div className="footer__small-data-description">
                    <img src="src/assets/facebook.svg" alt=""/>
                    <img src="src/assets/twitter.svg" alt=""/>
                </div>
            </div>
            <div className="footer__small-data">
                <div className="footer__small-data-logo">
                    Contact Us
                </div>
                <div className="footer__small-data-description">
                    E-Comm , 4578 Marmora Road, Glasgow D04 89GR
                </div>

            </div>

        </nav>
    </footer>
    )
}