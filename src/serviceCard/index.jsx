    import React from "react";
    import "./index.css";
    const ServiceCard = ({ title, description,imgUrl }) => {
    return (
        <div className="service-card">
        <div className="icon-container">
            <img src={imgUrl} alt="image" className="icon" /> 
        </div>
        <h3 className="card-heading">{title}</h3>
        <p className="card-para">{description}</p>
        </div>
    );
    };

    export default ServiceCard;
