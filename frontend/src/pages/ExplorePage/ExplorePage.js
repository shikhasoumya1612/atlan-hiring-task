import React, { useEffect, useState } from "react";
import ModelCard from "../../components/ModelCard/ModelCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { ImTable2 } from "react-icons/im";
import { BsCreditCard2Front } from "react-icons/bs";
import styles from "./ExplorePage.module.css";
import Modal from "../../components/Modal/Modal";
import AddNewModal from "../../components/AddNewModel/AddNewModel";

const ExplorePage = ({ models }) => {
  const navigate = useNavigate();
  const [viewModels, setViewModels] = useState(models);
  const [inputValue, setInputValue] = useState("");

  const [viewType, setViewType] = useState("card");

  const filterModelsBySearch = () => {
    let filteredModels = models?.filter((model) => {
      return (
        model?.model_name?.toLowerCase().includes(inputValue.toLowerCase()) ||
        model?.model_description
          ?.toLowerCase()
          .includes(inputValue.toLowerCase()) ||
        model?.provider_name?.toLowerCase().includes(inputValue.toLowerCase())
      );
    });

    setViewModels(filteredModels);
  };

  useEffect(() => {
    setViewModels(models);
  }, [models]);

  useEffect(() => {
    filterModelsBySearch();
  }, [inputValue]);

  return (
    <div className="container-fluid">
      <div className="row mx-lg-5 px-lg-3 mt-3">
        <div className="col-md-8 col-sm-12 d-flex flex-row gap-3 ps-4">
          <button
            className={`btn btn-dark btn-sm ${styles.add_button} mt-1 `}
            data-bs-toggle="modal"
            data-bs-target="#addNewModel"
          >
            <p className="text-small m-0">+ Add LLM Model</p>
          </button>
          <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
        </div>

        <div className="col-md-4 col-sm-12 d-flex gap-4 justify-content-end pt-3 pe-5">
          <BsCreditCard2Front
            size={"22px"}
            role="button"
            onClick={() => setViewType("card")}
            data-toggle="tooltip"
            data-placement="bottom"
            title="Card View"
          />

          <ImTable2
            size={"20px"}
            role="button"
            onClick={() => setViewType("table")}
            data-toggle="tooltip"
            data-placement="bottom"
            title="Table View"
          />
        </div>
      </div>

      <div className="mx-lg-5 mt-5">
        {inputValue.length > 0 &&
          (viewModels.length > 0 ? (
            <p className="text-small text-bold ps-lg-5 ps-md-3">
              Showing {viewModels.length} results
            </p>
          ) : (
            <p className="text-small text-bold ps-lg-5 ps-md-3">
              No results found
            </p>
          ))}
        {viewType === "card" && (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {viewModels?.map((model, index) => (
              <div
                className="col d-flex flex-row justify-content-center"
                key={index}
              >
                <ModelCard model={model} />
              </div>
            ))}
          </div>
        )}

        {viewType === "table" && (
          <div class="table-responsive mx-lg-5">
            <table class="table table-hover border">
              <thead className="table-dark ">
                <tr>
                  <td className="py-3 text-small text-bold">S. No</td>
                  <td className="py-3 text-small text-bold">Name</td>
                  <td className="py-3 text-small text-bold">Provider's Name</td>
                  <td className="py-3 text-small text-bold">Description</td>
                  <td className="py-3 text-small text-bold">
                    Official Website
                  </td>
                </tr>
              </thead>
              <tbody>
                {viewModels.map((model, index) => (
                  <tr
                    onClick={() => navigate(`/model/${model.id}`)}
                    role="button"
                  >
                    <td className="py-3 text-xs">{index + 1}</td>
                    <td className="py-3 text-xs">{model.model_name}</td>
                    <td className="py-3 text-xs provider">
                      {model.provider_name}
                    </td>
                    <td className="py-3 text-xs">
                      {model.model_description.length > 200
                        ? model.model_description.substring(0, 200) + "..."
                        : model.model_description}
                    </td>

                    <td className={`py-3 text-xs ${styles.visit_link}`}>
                      <a
                        href={model.redirect_link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Go to Site
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Modal
        onSubmit={() => {}}
        id={"addNewModel"}
        hideFooter={true}
        label={"Add LLM Model"}
      >
        <AddNewModal setViewModels={setViewModels} />
      </Modal>
    </div>
  );
};

export default ExplorePage;
