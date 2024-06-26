import axios from "axios";
import React, { useState } from "react";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import "./AddNewModel.css";

const AddNewModal = ({ setViewModels }) => {
  const initialFormData = {
    model_name: "",
    model_description: "",
    redirect_link: "",
    model_image: "",
    provider_name: "",
    examples: [{ title: "", description: "", input: "", output: "" }],
    tryout: false,
  };

  const [formData, setFormData] = useState(initialFormData);

  //Set Name, Redirect Link, Image URL Provider Name entered
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (
      name === "model_name" ||
      name === "model_description" ||
      name === "redirect_link" ||
      name === "model_image" ||
      name === "provider_name"
    ) {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };
  //Set Examples
  const handleChangeExample = (index, event) => {
    const { name, value } = event.target;

    const newExamples = [...formData.examples];
    newExamples[index][name] = value;
    setFormData((prevState) => ({ ...prevState, examples: newExamples }));
  };
  //Adds New Use Cases(Example)
  const handleAddExample = () => {
    setFormData((prevState) => ({
      ...prevState,
      examples: [
        ...prevState.examples,
        { title: "", description: "", input: "", output: "" },
      ],
    }));
  };
  //Removes Example
  const handleRemoveExample = (index) => {
    const newExamples = [...formData.examples];

    newExamples.splice(index, 1);
    setFormData((prevState) => ({ ...prevState, examples: newExamples }));
  };
  //Handles Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/model/add`,
        formData
      );

      setViewModels((prevState) => [...prevState, response.data.newModel]);
    } catch (error) {
      console.log(error);
    }
    setFormData(initialFormData);
  };
  //Cancels
  const handleCancel = () => {
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name, Redirect Link, Image URL Provider Name */}
      <div className="row row-cols-2">
        <div className="mb-3">
          <label className="form-label text-small">Name</label>
          <input
            type="text"
            name="model_name"
            className="form-control"
            value={formData.model_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-small">Redirect Link</label>
          <input
            type="text"
            name="redirect_link"
            className="form-control"
            value={formData.redirect_link}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row row-cols-2">
        <div className="mb-3">
          <label className="form-label text-small">Image URL</label>
          <input
            type="text"
            name="model_image"
            className="form-control"
            value={formData.model_image}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-small">Provider Name</label>
          <input
            type="text"
            name="provider_name"
            className="form-control"
            onChange={handleInputChange}
            value={formData.provider_name}
          />
        </div>
      </div>

      {/* Description */}
      <div className="mb-3">
        <label className="form-label text-small">Description</label>
        <textarea
          style={{ fontSize: "12px" }}
          name="model_description"
          className="form-control"
          onChange={handleInputChange}
          value={formData.model_description}
        />
      </div>

      {/* Use Cases */}
      <div className="d-flex flex-row justify-content-between align-items-center mb-3">
        <p className="text-bold mt-4 text-medium text-bold text-decoration-underline">
          Use Cases
        </p>
        <CiSquarePlus size={"24px"} role="button" onClick={handleAddExample} />
      </div>

      {/* Examples */}
      {formData.examples.map((example, index) => (
        <div key={index} className="my-3 mb-5">
          <p className="text-small text-bold">
            Example - {index + 1}{" "}
            {formData.examples.length > 1 && (
              <span>
                <CiSquareMinus
                  size={"24px"}
                  role="button"
                  onClick={() => handleRemoveExample(index)}
                  className="text-danger"
                />
              </span>
            )}
          </p>
          <div className="row row-cols-4">
            <InputField
              name="title"
              label="Title"
              value={example.title}
              onChange={(e) => handleChangeExample(index, e)}
            />
            <InputField
              name="description"
              label="Description"
              value={example.description}
              onChange={(e) => handleChangeExample(index, e)}
            />
            <InputField
              name="input"
              label="Input"
              value={example.input}
              onChange={(e) => handleChangeExample(index, e)}
            />
            <InputField
              name="output"
              label="Output"
              value={example.output}
              onChange={(e) => handleChangeExample(index, e)}
            />
          </div>
        </div>
      ))}

      <hr className="my-3" />

      {/* Buttons: Cancel and Submit */}
      <div className="d-flex flex-row justify-content-end gap-3 my-2">
        <button
          type="button"
          className="btn btn-light btn-sm"
          data-bs-dismiss="modal"
          onClick={handleCancel}
        >
          <p className="text-small m-0 px-3">Cancel</p>
        </button>
        <button
          type="submit"
          className="btn btn-dark btn-sm"
          data-bs-dismiss="modal"
        >
          <p className="text-small m-0 px-3">Submit</p>
        </button>
      </div>
    </form>
  );
};

// Reusable Input Field Component
const InputField = ({ name, label, value, onChange }) => (
  <div className="col">
    <label className="form-label text-small">{label}</label>
    <input
      type="text"
      name={name}
      className="form-control"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default AddNewModal;
