import React from "react";
import styles from "./ModelCard.module.css";
import { useNavigate } from "react-router-dom";

const ModelCard = ({ model }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/model/${model.id}`);
  };

  return (
    <div
      className={`card ${styles["model-card"]} `}
      onClick={handleNavigate}
      role="button"
    >
      <img className="card-img-top" src={model.model_image} alt="model" />
      <div className="card-body">
        <h5 className="card-title text-medium">{model.model_name}</h5>

        <div className={`${styles.description}`}>
          <p className="card-text text-xs ">{model.model_description}</p>
        </div>

        <p className="card-text text-xs mt-3">
          <span className="text-bold">Provider Name : </span>
          {model.provider_name}
        </p>
      </div>
    </div>
  );
};

export default ModelCard;
