function Footer() {
    return (
        <>
            <div className="footer text-white">

                <img className="footer-logo hover:cursor-pointer" src="https://i.ibb.co/bFm3W7L/Screenshot-2023-04-03-115838.png" alt="-" />

                <div className="copyright">Copyright 2023. Designed by INRE Global</div>
                <div className="fs-3 useful-link">Useful Link</div>
                <div className="useful-list">
                    <div className="useful-element hover:cursor-pointer">Blogs</div>
                    <div className="useful-element hover:cursor-pointer">FAQ's</div>
                </div>

                <div className="fs-3 company">Company</div>
                <div className="company-list">
                    <div className="company-element hover:cursor-pointer">Home</div>
                    <div className="company-element hover:cursor-pointer">Our Offerings</div>
                    <div className="company-element hover:cursor-pointer">Our Team</div>
                    <div className="company-element hover:cursor-pointer">Contact Us</div>
                </div>

                <span className="material-symbols-outlined maill">mail</span>
                <span className="email">Email:</span>
                <span className="email-text hover:cursor-pointer">support@inreglobal.com</span>

                <span class="material-symbols-outlined phone">phone_in_talk</span>
                <span className="phonee">Phone:</span>
                <span className="phone-num hover:cursor-pointer">+91 | 7019305889</span>

                <img className="linkedin-logo hover:cursor-pointer" src="https://i.ibb.co/HYs2QX2/Screenshot-2023-04-03-125840.png" alt="-" />
                <img className="facebook-logo hover:cursor-pointer" src="https://i.ibb.co/rH3yp54/Screenshot-2023-04-03-130308.png" alt="-" />
                <img className="twitter-logo hover:cursor-pointer" src="https://i.ibb.co/n0DRbj6/Screenshot-2023-04-03-130554.png" alt="-" />
                <img className="instagram-logo hover:cursor-pointer" src="https://i.ibb.co/Zh6RcjW/Screenshot-2023-04-03-130633.png" alt="-" />

                <span className="linkedin hover:cursor-pointer">LinkedIn</span>
                <span className="facebook hover:cursor-pointer">Facebook</span>
                <span className="twitter hover:cursor-pointer">Twitter</span>
                <span className="instagram hover:cursor-pointer">Instagram</span>

            </div>
        </>
    );
}
export default Footer;