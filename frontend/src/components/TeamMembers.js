import Card from "./Card";

function TeamMembers() {
    return (
        <>
            <div className="next">
                <div className="our-team-members">Our Team Members</div>
                <div className="rect2"></div>
            </div>

            <div className="cards">
                <div className="card4">
                    <Card type="team" headingText="Brajesh Pathak" text="A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been..." img="https://i.ibb.co/bK2Gf6y/Screenshot-2023-04-03-090602.png" price="View More" />
                </div>

                <div className="card5">
                    <Card type="team" headingText="Deepak Shukla" text="Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall experience..." img="https://i.ibb.co/zN6g0Dj/Screenshot-2023-04-03-091612.png" price="View More" />
                </div>

                <div className="card6">
                    <Card type="team" headingText="Alok Kumar Singh" text="Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. Co-Founded Azure Capital, a Rea." img="https://i.ibb.co/BC94yPy/Screenshot-2023-04-03-092531.png" price="View More" />
                </div>
            </div>
        </>
    );
}
export default TeamMembers;