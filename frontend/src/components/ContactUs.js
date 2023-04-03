function ContactUs() {

    return (
        <>
            <div className="container" id="contact-form">

                <div className="contact-heading">Get In Touch With Us To Connect</div>
                <div className="contact-contact-us">Contact Us</div>

                <input type="text" className="allInputs" id="fullName" />
                <input type="text" className="allInputs" id="email" placeholder="lorem@gmail.com" />
                <input type="text" className="allInputs" id="phone" placeholder="+91 9876543210" />
                <input type="text" className="allInputs" id="country" placeholder="Bangalore" />
                <input type="text" className="allInputs" id="stages" placeholder="I have booked but registration is not done" />

                <span className="fullName-span text-muted">Full name</span>
                <span className="email-span text-muted">Email address</span>
                <span className="country-span text-muted">Country</span>
                <span className="phone-span text-muted">Mobile Number</span>
                <span className="stages-span text-muted">Stages</span>
                <img className="india-img" src="https://i.ibb.co/f8b3DjQ/Screenshot-2023-04-03-112628.png" alt="-" />
                <span class="material-symbols-outlined stages-arrow">arrow_drop_down</span>
                <span class="material-symbols-outlined country-arrow">arrow_drop_down</span>

                <button className="contact-submit">Submit</button>

                <img className="last-img" src="https://i.ibb.co/mvTX8rT/Screenshot-2023-04-03-114052.png" alt="-" />
            </div>
        </>
    );

}
export default ContactUs;