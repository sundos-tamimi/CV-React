import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    tel: "",
    email: "",
    country: "Palestine",
    time: "",
    description: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.Fname || !formData.Lname || !formData.tel || !formData.email || !formData.time) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Form submitted successfully!");
    console.log(formData);
  };

  return (
    <div id="div2">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className="contact">Contact me</legend>

          <label htmlFor="Firstname">Username:</label>
          <br />
          <input
            type="text"
            id="Fistname"
            name="Fname"
            placeholder="Enter Your F-Name"
            value={formData.Fname}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="Lastname">Last name:</label>
          <br />
          <input
            type="text"
            id="Lastname"
            name="Lname"
            placeholder="Enter Your L-Name"
            value={formData.Lname}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="tel">Phone Number:</label>
          <br />
          <input
            type="text"
            id="telphone"
            name="tel"
            placeholder="Enter Your phone number"
            value={formData.tel}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <br />

          <label htmlFor="country">Choose a country:</label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="Palestine">Palestine</option>
            <option value="Turkey">Turkey</option>
            <option value="Jordan">Jordan</option>
            <option value="India">India</option>
            <option value="China">China</option>
          </select>
          <br />

          <label htmlFor="time">Available hours:</label>
          <input
            type="text"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
          <br />
          <br />

          <textarea
            name="description"
            id="description"
            placeholder="Description of what you need"
            value={formData.description}
            onChange={handleChange}
          />
          <br />
          <br />

          <input className="submit" type="submit" value="Submit" />
        </fieldset>
      </form>
    </div>
  );
}

export default App;
