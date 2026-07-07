import "./ServiceCard.css";


interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
}

function ServiceCard({ icon , title , description, } : ServiceCardProps){
    return(
        <div className="service-card">

            <img src={icon} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>

        </div>

    );
}

export default ServiceCard;