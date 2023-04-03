function Navbar() {


    return (

        <>

            <header>
                <ul className="headings">
                    <li className="headings_item hover:cursor-pointer">Home</li>
                    <li className="headings_item hover:cursor-pointer">Our Offerings</li>
                    <li className="headings_item hover:cursor-pointer">Our Team</li>
                    <li className="headings_item hover:cursor-pointer">Contact Us</li>
                    <li className="headings_item hover:cursor-pointer">Blogs</li>

                </ul>

                <button className="register text-white">Register Now</button>

            </header>

            <img src="https://i.ibb.co/fknWn7S/Screenshot-2023-04-02-211457.png" alt="Screenshot-2023-04-02-211457" className="icon hover:cursor-pointer"/>
        </>

    );
}

export default Navbar;