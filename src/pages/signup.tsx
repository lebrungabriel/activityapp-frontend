import { useState } from "react";
import { signUp } from "@/api/auth";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";

type Props = {};

const SignUp = (props: Props) => {
  // State variables for signup form inputs
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [signUpEmail, setSignUpEmail] = useState<string>("");
  const [signUpPassword, setSignUpPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  // Function to handle user signup
  const handleSignUp = () => {
    // Create an object with signup data to be sent to the server
    const signUpData = {
      firstName: firstName,
      lastName: lastName,
      email: signUpEmail,
      password: signUpPassword,
    };

    // Call the signUp function from the API to send signup data and get a response
    signUp(signUpData)
      .then((data) => {
        // Handle the response data from the server
        if (data) {
          // If signup is successful, redirect the user to the login page
          // Replace "/login" with the appropriate URL for your login page
          window.location.href = "/login";
        }
        // Reset the form inputs and clear any previous errors
        setFirstName("");
        setLastName("");
        setSignUpEmail("");
        setSignUpPassword("");
        setError(null);
      })
      .catch((error) => {
        // Handle errors from the server
        setError("Error occurred during signup. Please try again later.");
      });
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-evenly items-center">
        {/* Page title */}
        <h1 className="text-2xl font-bold">Inscription</h1>
        {/* Signup form container */}
        <div className="w-[90%] lg:w-4/12 flex flex-col bg-white shadow py-10 px-6">
          {/* First name input field */}
          <Input
            htmlFor="first"
            id="first"
            type="text"
            placeholder="Entrez votre prénom"
            text="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          {/* Last name input field */}
          <Input
            htmlFor="last"
            id="last"
            type="text"
            placeholder="Nom"
            text="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          {/* Email input field */}
          <Input
            htmlFor="email"
            id="email"
            type="email"
            placeholder="Entrer une adresse mail"
            text="Adresse mail"
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
          />

          {/* Password input field */}
          <Input
            htmlFor="password"
            id="password"
            type="password"
            placeholder="Entrer un mot de passe"
            text="Mot de passe"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
          />

          {/* Signup button */}
          <Button text="M'inscrire" onClick={() => handleSignUp()} />

          {/* Link to login page */}
          <p className="mt-3">
            Vous avez déjà un compte ?{" "}
            <Link href="/login" className="text-indigo-400 font-semibold">
              Me connecter
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
