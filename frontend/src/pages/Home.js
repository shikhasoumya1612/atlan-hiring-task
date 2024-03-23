import React, { useEffect, useState } from "react";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import ModelCard from "../components/ModelCard/ModelCard";
import { AiOutlineStock } from "react-icons/ai";
import axios from "axios";
import hero from "../assets/hero.png";

const Home = () => {
  const [models, setModels] = useState([]);

  const fetchModels = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/api/v1/model/all`
      );

      setModels(response.data.models);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchModels();
  }, []);

  return (
    <div className="container-fluid">
      <div className="my-5">
        <p className="text-large text-bold text-center mt-3">
          Featured Models{" "}
          <span>
            <AiOutlineStock size={"30px"} />
          </span>
        </p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-5">
          {[...models]
            ?.sort((a, b) => b.views - a.views)
            .slice(0, 4)
            .map((model, index) => (
              <div
                className="col d-flex flex-row justify-content-center"
                key={index}
              >
                <ModelCard model={model} />
              </div>
            ))}
        </div>
      </div>
      <About />
      <Services />
    </div>
  );
};

export default Home;
