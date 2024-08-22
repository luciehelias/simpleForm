import { useState } from "react";
// import Result from "./Result";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [showNewPage, setShowNewPage] = useState(false);

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePassword1Change = (event) => {
    const value = event.target.value;
    setPassword1(value);
  };

  const handlePassword2Change = (event) => {
    const value = event.target.value;
    setPassword2(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password1 !== password2) {
      setErrorMessage("Vos deux mots de passe ne sont pas identiques");
    } else {
      setErrorMessage("");
      setShowNewPage(true);
    }
  };

  const handleOnClick = () => {
    setShowNewPage(false);
  };

  return (
    <>
      <section className={showNewPage ? "hidden" : ""}>
        <div className="containerForm">
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit}>
            <h2>Name</h2>
            <input
              type="text"
              placeholder="Jean Dupont"
              name="name"
              value={username}
              onChange={handleUsernameChange}
            />
            <h2>Email</h2>
            <input
              type="email"
              placeholder="jeandupont@lereacteur.io "
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
            <h2>Password</h2>
            <input
              type="password"
              placeholder="lErEaCtEuR2020"
              name="password"
              value={password1}
              onChange={handlePassword1Change}
              style={{ borderColor: errorMessage ? "red" : "initial" }}
            />
            <h2>Confirm your password</h2>
            <input
              type="password"
              placeholder="lErEaCtEuR2020"
              name="password"
              value={password2}
              onChange={handlePassword2Change}
              style={{ borderColor: errorMessage ? "red" : "initial" }}
            />
            {errorMessage && <p className="error">{errorMessage}</p>}
            <button>Register </button>
          </form>
        </div>
      </section>
      <section className={!showNewPage ? "hidden" : ""}>
        {/* <Result /> */}
        <div className="containerResults">
          <h1>Results</h1>
          <div className="results">
            <p>Name: {username} </p>
            <p>Email : {email}</p>
            <p>Password : {password1}</p>
          </div>
          <button onClick={handleOnClick}>Edit your information</button>
        </div>
      </section>
    </>
  );
};

export default Form;
