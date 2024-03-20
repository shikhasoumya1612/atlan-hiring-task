import React, { useEffect, useState } from "react";
import ModelCard from "../../components/ModelCard/ModelCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { ImTable2 } from "react-icons/im";
import { BsCreditCard2Front } from "react-icons/bs";

const ExplorePage = ({ models }) => {
  const navigate = useNavigate();
  const [viewModels, setViewModels] = useState(models);
  const [inputValue, setInputValue] = useState("");

  const [viewType, setViewType] = useState("table");

  const filterModelsBySearch = () => {
    console.log(models);

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
        <div className="col-md-6 col-sm-12">
          <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
        </div>

        <div className="col-md-6 col-sm-12 d-flex gap-4 justify-content-end pt-3 pe-5">
          <ImTable2
            size={"22px"}
            role="button"
            onClick={() => setViewType("table")}
            data-toggle="tooltip"
            data-placement="bottom"
            title="Table View"
          />
          <BsCreditCard2Front
            size={"22px"}
            role="button"
            onClick={() => setViewType("card")}
            data-toggle="tooltip"
            data-placement="bottom"
            title="Card View"
          />
        </div>
      </div>

      <div className="mx-lg-5 mt-3">
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
            <table class="table table-hover ">
              <thead className="table-primary">
                <tr>
                  <td className="py-3 text-medium text-bold">S. No</td>
                  <td className="py-3 text-medium text-bold">Name</td>
                  <td className="py-3 text-medium text-bold">
                    Provider's Name
                  </td>
                  <td className="py-3 text-medium text-bold">Description</td>
                  <td className="py-3 text-medium text-bold">
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
                    <td className="py-3 text-small">{index + 1}</td>
                    <td className="py-3 text-small">{model.model_name}</td>
                    <td className="py-3 text-small provider">
                      {model.provider_name}
                    </td>
                    <td className="py-3 text-small">
                      {model.model_description.length > 150
                        ? model.model_description.substring(0, 150) + "..."
                        : model.model_description}
                    </td>

                    <td className="py-3 text-small">
                      <a href={model.redirect_link}>Go to Site</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
