import React, { useEffect, useState } from "react";
import styles from "./ModelDetailsPage.module.css";
import Typewriter from "../../components/Typewriter";
import CodeComponent from "../../components/CodeComponent";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Error from "../Error/Error";

const ModelDetailsPage = () => {
  const navigate = useNavigate();

  const [model, setModel] = useState({});
  const [selectedExample, setSelectedExample] = useState({});

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  //Fetch Model Details
  const fetchModel = async () => {
    setLoading(true);
    setError(null);

    try {
      const id = params.id;

      const response = await axios.get(
        `${process.env.REACT_APP_URL}/api/v1/model/${id}`
      );

      setModel(response.data.model);
      setSelectedExample(response.data.model.examples[0]);
    } catch (error) {
      setError(error);
      console.log(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchModel();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader mx-auto mt-5"></div>
      ) : (
        <>
          {error ? (
            <Error status={error.response.status} />
          ) : (
            <div className="container-fluid">
              <div className="row mt-5 mx-md-3 mx-sm-1 ">
                <p className="text-large ">{model?.model_name}</p>

                <div className="col-md-6">
                  <p className="text-medium ">
                    <span className="text-bold">Provider Name :</span>{" "}
                    {model?.provider_name}
                  </p>

                  <p className="text-medium mt-3">{model?.model_description}</p>

                  {model?.tryout && (
                    <button
                      className="btn btn-md btn-dark my-2 "
                      onClick={() => navigate(`/model/${model?.id}/tryout`)}
                    >
                      <p className="text-medium my-0">Try it out !</p>
                    </button>
                  )}
                </div>
                <div className="col-md-6">
                  <div className={`${styles["model-image"]} py-auto`}>
                    <img src={model?.model_image} alt="model" />
                  </div>
                </div>
              </div>

              <div>
                <div className="d-flex flex-row gap-5 mt-5 mx-md-4 mx-sm-1">
                  {model?.examples?.map((example) => (
                    <p
                      className={`text-medium ${
                        selectedExample?.title === example.title
                          ? styles["example_title"]
                          : "text-secondary"
                      } mb-0`}
                      role="button"
                      onClick={() => {
                        setSelectedExample(example);
                      }}
                    >
                      {example.title}
                    </p>
                  ))}
                </div>

                <hr className="mt-1 mx-md-4 mx-sm-1" />
              </div>

              <div className="row mx-md-4 mx-sm-1">
                <div className="col-lg-4 col-sm-6">
                  <p className="text-small pt-3 ">
                    {selectedExample?.description}
                  </p>
                </div>
                <div className="col-lg-2 col-md-0"></div>
                <div className="col-md-6 ">
                  <div className="border border-2 me-5">
                    <div className="border-bottom border-2 p-2 ">
                      <p className="text-small text-bold">Input</p>
                      <p className="text-small pt-2">
                        {selectedExample?.input}
                      </p>
                    </div>
                    <div className="p-2">
                      <p className="text-small text-bold">Output</p>
                      <p className="text-small">
                        <Typewriter
                          text={selectedExample}
                          delay={1}
                          model={model}
                        />
                      </p>

                      {selectedExample?.output_img && (
                        <img
                          src={selectedExample?.output_img}
                          alt="output_img"
                          className={styles["output_img"]}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <hr className="my-5 " />
              </div>

              <div className="row ms-md-3 ms-sm-1">
                {model?.code_snippet && (
                  <>
                    <div className="col-md-6">
                      <p className="text-medium pt-3 text-bold">Code Snippet</p>
                      <div className="pt-3 ">
                        <CodeComponent code={model?.code_snippet} />
                      </div>
                    </div>

                    <div className="col-md-1"></div>
                  </>
                )}
                <div className="col-md-5">
                  <p className="text-medium pt-3 text-bold">
                    Wanna learn more about this ?
                  </p>
                  <div className={`pt-3 ${styles["visit_link"]} text-medium`}>
                    <a
                      href={model?.redirect_link || ""}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit here {"->"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ModelDetailsPage;
