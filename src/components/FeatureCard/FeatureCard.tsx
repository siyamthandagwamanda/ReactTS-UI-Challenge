import "./FeatureCard.css"

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

function FeatureCard( { icon, title, description, } : FeatureCardProps){
    return (
        <div className="feature-card">
            <img src={icon} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default FeatureCard;