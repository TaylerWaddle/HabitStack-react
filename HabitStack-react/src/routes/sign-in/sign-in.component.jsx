import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase";

import { Link } from "react-router-dom";

import "./sign-in.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("invalid credentials");
      }
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <span className="input-title">Email</span>
          <input
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
            className="input-field"
          />
          <span className="input-title">Password</span>
          <input
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
            className="input-field"
          />
        </div>

        <div className="buttons-container">
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
          <button
            type="button"
            className="google-sign-in-button"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </button>
        </div>
      </form>
      <div className="sign-up-container">
        <span className="sign-up-prompt">Don&apos;t Have An Account?</span>
        <Link to="/sign-up">
          <button className="sign-up-button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
