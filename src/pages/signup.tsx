import { useState } from "react";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";

type Props = {};

const signup = (props: Props) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [signUpEmail, setSignUpEmail] = useState<string>("");
  const [signUpPassword, setSignUpPassword] = useState<string>("");

  const handleSignUp = () => {
    fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: signUpEmail,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data from the server
        if (data) {
          console.log(data);
        }
        setFirstName("");
        setLastName("");
        setSignUpEmail("");
        setSignUpPassword("");
      });
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-[calc(100vh-80px)] flex flex-col justify-evenly items-center">
        <h1 className="text-2xl font-bold">Inscription</h1>
        <div className="w-[90%] lg:w-4/12 flex flex-col bg-white shadow py-10 px-6">
          <Input
            htmlFor="first"
            id="first"
            type="text"
            placeholder="Entrez votre prénom"
            text="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <Input
            htmlFor="last"
            id="last"
            type="text"
            placeholder="Nom"
            text="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <Input
            htmlFor="email"
            id="email"
            type="email"
            placeholder="Entrer une adresse mail"
            text="Adresse mail"
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
          />

          <Input
            htmlFor="password"
            id="password"
            type="password"
            placeholder="Entrer un mot de passe"
            text="Mot de passe"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
          />

          <Button text="Me connecter" onClick={() => handleSignUp()} />
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

export default signup;
