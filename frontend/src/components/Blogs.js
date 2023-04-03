import Card from "./Card";

function Blogs() {

    return (
        <>
            <div className="blogs">

                <div className="next">
                    <div className="our-blogs">Blogs</div>
                    <div className="rect3"></div>
                </div>

                <div className="cards">

                    <div className="card7">
                        <Card type="blog" headingText="Guide for personal property Buying" text="Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod..." img="https://i.ibb.co/6bt42KT/Screenshot-2023-04-03-093845.png" />
                    </div>

                    <div className="card8">
                        <Card type="blog" headingText="Guide for personal property Buying" text="Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod..." img="https://i.ibb.co/Lxx2CCv/Screenshot-2023-04-03-094026.png" />
                    </div>

                    <div className="card9">
                        <Card type="blog" headingText="Guide for personal property Buying" text="Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod..." img="https://i.ibb.co/ggdB0QZ/Screenshot-2023-04-03-094115.png" />
                    </div>
                </div>
            </div>
        </>
    );

}
export default Blogs;