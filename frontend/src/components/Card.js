function Card(props) {

    return(

        <>

            {props.type === "offerings" ? 
                <div className="grey-heading">

                        <div className="num">
                            <span>{props.num}</span>
                        </div>

                        <div className="grey-heading-text">
                            {props.heading}
                        </div>

                </div>
            : ""
            }

            <div className="card-main">

                <div className="card-img">
                    <img src={props.img} alt="None" />
                </div>

                {props.type === "blog" ?
                
                <div className="blog">

                    <div className="card-blog-text">Real Estate, Analysis</div>

                    <span class="material-symbols-outlined">date_range</span>
                    <span class="date">09 jun 2022</span>
                    <span className="admin">By Admin</span>
                </div>

                : ""
                }

                <div className={props.type === "team" ? "heading-texttt team-head" : "heading-texttt"}>
                    {props.headingText}
                </div>

                <div className="texttt text-muted">
                    {props.text}
                </div>

                {props.type ==="team" ? "" :
                
                    <button className="contact-us">{(props.num === "1" || props.num === "2" || props.num === "3") ? "Contact us" : "View More"} <span className="material-symbols-outlined arrow">arrow_forward</span></button>
                }


                <span className="price">
                    {props.price}
                </span>

            </div>
            
        
        </>

    );
}

export default Card;