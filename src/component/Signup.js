import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      return alert("plese enter name");
    } else if (password === "") {
      return alert("plese enter password");
    } else if (email === "") {
      return alert("plese enter  email address");
    } else if (!email.includes("@")) {
      return alert("plese enter valid email address");
    } else if (phone === "") {
      return alert("please enter phone number");
    } else if (phone.length > 10 || phone.length < 10) {
      return alert("phone number should be 10 digit");
    } else if (profession === "") {
      return alert("plese profession");
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("password", password);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone);
      localStorage.setItem("profession", profession);
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };
  return (
    <div>
      <form onSubmit={formSubmit} className="signup_form">
        <p>Signup</p>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Enter Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Enter Email Address"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Phone Number"
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <select
          placeholder="Profession"
          name="profession"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        >
          <option value="">Profession</option>
          <option value="FDeveloper">Front-end Developer</option>
          <option value="BDeveloper">Backend-end Developer</option>
          <option value="FullStack Developer">FullStack Developer</option>
        </select>
        <div className="signup_btn_container">
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
