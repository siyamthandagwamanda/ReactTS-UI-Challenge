import "./Hero.css"
import heroImage from "../../assets/images/hero.png";

function Hero(){
    return (
        <section className="hero">
            
            <div className="hero-text">
                <p className="welcome">WELCOME TO HYKROX</p>
                <h1>
                    WE ARE <span>CREATIVE</span>
                    <br />
                    DESIGNERS
                </h1>
                <p className="description">
                    We create modern, unique and professional designs that help brands stand out
                    and leave lasting impression.
                </p>
                <div className="hero-image">
                    <img src={heroImage} alt="Designer" />
                </div>
            </div>
        </section>
    )
}

export default Hero;