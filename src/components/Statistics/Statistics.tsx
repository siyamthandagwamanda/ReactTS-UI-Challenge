import "./Statistics.css";
import StatCard from "../StatCard/StatCard";
import projectIcon from "../../assets/images/project.png";
import customerIcon from "../../assets/images/customer.png";
import awardIcon from "../../assets/images/award.png";
import teamIcon from "../../assets/images/team.png";

function Statistics(){
    const statistics = [
        {
            icon: projectIcon,
            number: "230+",
            title: "Projects"
        },

        {
            icon: customerIcon,
            number: "120+",
            title: "Clients"
        },

        {
            icon: awardIcon,
            number: "15+",
            title: "Team Members"
        },

        {
            icon: teamIcon,
            number: "46+",
            title: "Team Members"
        }
    ];

    return (
        <section className="statistics">
            {statistics.map( (stat) => (
                <StatCard
                   key={stat.title}
                   icon={stat.icon}
                   number={stat.number}
                   title={stat.title} 
                />
            ))}
        </section>
    );
}

export default Statistics;