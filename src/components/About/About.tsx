import "./About.css"
import FeatureCard from "../FeatureCard/FeatureCard";
import aboutImage from "../../assets/images/about.png";
import cleanIcon from "../../assets/images/clean.png";
import modernIcon from "../../assets/images/modern.png";

function About(){
    const features = [
        {
            icon: cleanIcon,
            title: "Clean Code",
            description: "Well-structured and readable code for every project."
        },

        {
            icon: modernIcon,
            title: "Modern Design",
            description: "Creative layouts that match today's design trends."
        }
    ];

    return (
        <section className="about">

            <div className="about-image">
                <img src={aboutImage} alt="About"/>
            </div>

            <div className="about-text">

                <p className="about-label">ABOUT US</p>

                <h2>WHO ARE <span>WE?</span></h2>
                <br></br>
                <p>We are <span>passionate developers</span> who
                    build modern digital experiences for businesses.
                </p>
                <br></br>
                <br></br>
                <div className="feature-list">
                    {features.map((feature) => (

                        <FeatureCard
                           key={feature.title}
                           icon={feature.icon}
                           title={feature.title}
                           description={feature.description} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
