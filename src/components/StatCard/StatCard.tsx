import "./StatCard.css";

interface StatCardProps{
    icon: string;
    number: string;
    title: string;
}

function StatCard( {icon, number, title} : StatCardProps){
    return (

        <div className="stat-card">
            <img src={icon} alt={title} />
            <h2>{number}</h2>
            <p>{title}</p>
        </div>
    )
}

export default StatCard;