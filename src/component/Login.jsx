import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_PATH } from "../utils/cosntant";

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const loginSubmitForm = (e) => {
    e.preventDefault();

    if (name === "") {
      return alert("plese enter name");
    } else if (password === "") {
      return alert("plese enter password");
    }

    const gett_local_storage_name = localStorage.getItem("name");
    const get_local_storage_password = localStorage.getItem("password");

    if (name === gett_local_storage_name && password === get_local_storage_password) {
      setTimeout(() => {
        navigate(PAGE_PATH.MOVIEPAGE);
        setName("");
        setPassword("");
        setErrorMsg("");
      }, 2000);
    } else {
      alert("user credentials wrong");
    }
  };
  return (
    <div className="signup">
      <form className="signup_form" onSubmit={loginSubmitForm}>
        <p>Login</p>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="signup_btn_container">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
