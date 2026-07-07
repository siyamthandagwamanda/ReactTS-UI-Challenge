import "./Service.css";
import ServiceCard from "../ServiceCard/ServiceCard";

import webIcon from "../../assets/images/web.png";
import mobileIcon from "../../assets/images/mobile.png";
import uiIcon from "../../assets/images/ui.png";
import editIcon from "../../assets/images/edit.png";

function Services(){

    const services = [

        {
            icon: webIcon,
            title: "Website Design",
            description: "Modern responsive website designs."
        },

        {
            icon: mobileIcon,
            title: "Mobile App",
            description: "Creative mobile interface."
        },

        {
            icon: uiIcon,
            title: "Mobile App",
            description: "Creative mobile interface."
        },

        {
            icon: editIcon,
            title: "Graphic Editing",
            description: "Professional editing services."
        }
    ];

    return (
        <section className="services">

            <div className="services-text">

                <p className="small-title">
                    OUR SERVICES
                </p>

                <h2>
                    WHAT WE <span>DO?</span>
                </h2>

                <p>We provide modern digital solutions tailord for businesses and individuals.</p>

                <button>Explore More</button>
            </div>

            <div className="services-grid">

                {services.map((service) => (

                    <ServiceCard
                        key = {service.title}
                        icon = {service.icon}
                        title = {service.title}
                        description={service.description} 
                    />

                ))}
            </div>
        </section>
    );
}

export default Services;