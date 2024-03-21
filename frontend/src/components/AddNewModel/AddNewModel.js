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

  const handleChangeExample = (index, event) => {
    const { name, value } = event.target;

    const newExamples = [...formData.examples];
    newExamples[index][name] = value;
    setFormData((prevState) => ({ ...prevState, examples: newExamples }));
  };

  const handleAddExample = () => {
    setFormData((prevState) => ({
      ...prevState,
      examples: [
        ...prevState.examples,
        { title: "", description: "", input: "", output: "" },
      ],
    }));
  };

  const handleRemoveExample = (index) => {
    const newExamples = [...formData.examples];
    newExamples.splice(index, 1);
    setFormData((prevState) => ({ ...prevState, examples: newExamples }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitted:", formData);
    // Add your submission logic here

    try {
      const response = await axios.patch(
        "http://localhost:5000/api/v1/model/add",
        formData
      );

      setViewModels((prevState) => [...prevState, response.data.newModel]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name, Redirect Link, Image URL */}
      <div className="row row-cols-2">
        <div className="mb-3">
          <label htmlFor="model_name" className="form-label text-small">
            Name
          </label>
          <input
            type="text"
            id="model_name"
            name="model_name"
            className="form-control"
            value={formData.model_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="redirect_link" className="form-label text-small">
            Redirect Link
          </label>
          <input
            type="text"
            id="redirect_link"
            name="redirect_link"
            className="form-control"
            value={formData.redirect_link}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row row-cols-2">
        <div className="mb-3">
          <label htmlFor="model_image" className="form-label text-small">
            Image URL
          </label>
          <input
            type="text"
            id="model_image"
            name="model_image"
            className="form-control"
            value={formData.model_image}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="provider_name" className="form-label text-small">
            Provider Name
          </label>
          <input
            type="text"
            id="provider_name"
            name="provider_name"
            className="form-control"
            onChange={handleInputChange}
            value={formData.provider_name}
          />
        </div>
      </div>

      {/* Description */}
      <div className="mb-3">
        <label htmlFor="model_description" className="form-label text-small">
          Description
        </label>
        <textarea
          style={{ fontSize: "12px" }}
          id="model_description"
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
              id={`title${index}`}
              name="title"
              label="Title"
              value={example.title}
              onChange={(e) => handleChangeExample(index, e)}
            />
            <InputField
              id={`description${index}`}
              name="description"
              label="Description"
              value={example.description}
              onChange={(e) => handleChangeExample(index, e)}
            />
            <InputField
              id={`input${index}`}
              name="input"
              label="Input"
              value={example.input}
              onChange={(e) => handleChangeExample(index, e)}
            />
            <InputField
              id={`output${index}`}
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
const InputField = ({ id, name, label, value, onChange }) => (
  <div className="col">
    <label htmlFor={id} className="form-label text-small">
      {label}
    </label>
    <input
      type="text"
      id={id}
      name={name}
      className="form-control"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default AddNewModal;
