import Card from "./Card";

function Offerings() {
    return (
        <>
            <div className="next">
                <div className="our-offerings">Our Offerings</div>
                <div className="rect"></div>

                <div className="textt text-muted">This whole purchase journey can be divided into three stages. For more details, <span className="textt-span font-bold">Click Here</span></div>

                <button className="contact-now">Contact Now <span className="material-symbols-outlined arrow">
                    arrow_forward
                </span></button>
            </div>

            <div className="cards">

                <div className="card1">
                    <Card type="offerings" heading="Pre-Booking" num="1" img="https://i.ibb.co/wdDfmP7/Screenshot-2023-04-03-071658.png" headingText="Background Verification" text="Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed..." price="INR 3000/Project" />
                </div>

                <div className="card2">
                    <Card type="offerings" heading="Post-Booking & Pre-Registration" num="2" img="https://i.ibb.co/p0jGZX6/Screenshot-2023-04-03-081136.png" headingText="Virtual site visit" text="It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV..." />
                </div>

                <div className="card3">
                    <Card type="offerings" heading="Post-Registration " num="3" img="https://i.ibb.co/sCKNRf5/Screenshot-2023-04-03-081609.png" headingText="Title diligence" text="Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of..." />
                </div>
            </div>
        </>
    );
}
export default Offerings;