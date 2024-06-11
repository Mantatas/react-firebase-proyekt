import { useState } from "react";
import * as service from "../../services/WorksCrudServices";
import { useNavigate } from "react-router-dom";
const AddWork = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    company: "",
    service: "",
    description: "",
    from: "",
    to: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    service.addWork(formData);
    navigate("/");
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Prideti atlikta darba</h2>
      </div>
      <div className="card-body">
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="date">Pasirinkite data: </label>
            <input
              type="date"
              name="date"
              className="form-control"
              onChange={handleChange}
              value={formData.date}
            />
          </div>
          <div className="mb-3">
            <select
              name="company"
              className="form-control"
              onChange={handleChange}
              value={formData.company}
            >
              <option value="" disabled>
                ---Pasirinkite klienta---
              </option>
              <option value="kb">Kilobaitas</option>
              <option value="it">IT sfera</option>
            </select>
          </div>
          <div className="mb-3">
            <select
              name="service"
              className="form-control"
              onChange={handleChange}
              value={formData.service}
            >
              <option value="" disabled>
                ---Pasirinkite paslauga---
              </option>
              <option value="dev">Development</option>
              <option value="ux">UX research</option>
            </select>
          </div>
          <div className="mb-3">
            <textarea
              name="description"
              className="form-control"
              placeholder="Darbo aprasymas"
              onChange={handleChange}
              value={formData.description}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="from">Nuo:</label>
            <input
              type="time"
              name="from"
              className="form-control"
              onChange={handleChange}
              value={formData.from}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="to">To:</label>
            <input
              type="time"
              name="to"
              className="form-control"
              onChange={handleChange}
              value={formData.to}
            />
          </div>
          <div className="mb-3">
            <button type="submit">Saugoti</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWork;
