import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { addTokenToStore, addUserIdToStore } from "@/reducers/user";
import { login } from "@/api/auth";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";

type Props = {};

const Login = (props: Props) => {
  // State variables for login form inputs
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<string | null>(null);

  // Get access to Redux store dispatch function
  const dispatch = useDispatch();

  // Get access to Next.js router object for navigation
  const router = useRouter();

  // Function to handle user login
  const handleLogin = () => {
    // Reset the login error before making a new login attempt
    setLoginError(null);
    // Call the login function from the API to send user credentials and get a response
    login(loginEmail, loginPassword)
      .then((data) => {
        // Handle the response data from the server
        if (data) {
          // If login is successful, add the user token and ID to the Redux store
          dispatch(addTokenToStore(data.token));
          dispatch(addUserIdToStore(data.userId));
        }
        // Navigate to the home page after successful login
        router.push("/");
        // Reset the login form inputs after login attempt
        setLoginEmail("");
        setLoginPassword("");
      })
      .catch((error) => {
        // Handle login error (e.g., display error message)
        console.error("Error occurred during login:", error);
        // Set the login error message if login fails
        setLoginError("Adresse mail ou mot de passe incorrect");
      });
  };

  return (
    <>
      <div className="w-full h-[calc(100vh-80px)] flex flex-col justify-evenly items-center">
        {/* Page title */}
        <h1 className="text-2xl font-bold">Connexion</h1>
        {/* Login form container */}
        <div className="w-[90%] lg:w-4/12 flex flex-col bg-white shadow py-10 px-6">
          {/* Email input field */}
          <Input
            htmlFor="email"
            id="email"
            type="email"
            placeholder="Entrer une adresse mail"
            text="Adresse mail"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />

          {/* Password input field */}
          <Input
            htmlFor="password"
            id="password"
            type="password"
            placeholder="Entrer un mot de passe"
            text="Mot de passe"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          {/* Login button */}
          <Button text="Me connecter" onClick={() => handleLogin()} />

          {loginError && ( // Conditionally render the login error message if it exists
            <p className="text-red-500 mt-2 text-center">{loginError}</p>
          )}

          {/* Link to sign up page */}
          <p className="mt-3">
            Pas encore de compte ?{" "}
            <Link href="/signup" className="text-indigo-400 font-semibold">
              M'inscrire
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
