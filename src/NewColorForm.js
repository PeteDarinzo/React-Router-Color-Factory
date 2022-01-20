import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './NewColorForm.css';

const ColorForm = ({ addColor }) => {

  const history = useHistory();

  const initialState = { name: "", color: "#000000" };

  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ ...formData })
    setFormData({ name: "", color: "#000000" });
    history.push('/colors');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="NewColorForm">
        <div>
          <label htmlFor="name">
            Color Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name for new color"
            required
          />
        </div>
        <div>
          <label htmlFor="color">
            New Color
          </label>
          <input
            id="color"
            type="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
          <button className="NewColorForm-button">Add New Color</button>
        </div>
      </form>
    </div>
  )
}

export default ColorForm;