import { useState } from "react";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addTokenToStore } from "@/reducers/user";

type Props = {};

const Login = (props: Props) => {
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");

  const dispatch = useDispatch();

  const handleLogin = () => {
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: loginEmail, password: loginPassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data from the server
        if (data) {
          console.log(data.token);
          dispatch(addTokenToStore(data.token));
        }
        setLoginEmail("");
        setLoginPassword("");
      });
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-[calc(100vh-80px)] flex flex-col justify-evenly items-center">
        <h1 className="text-2xl font-bold">Connexion</h1>
        <div className="w-[90%] lg:w-4/12 flex flex-col bg-white shadow py-10 px-6">
          <Input
            htmlFor="email"
            id="email"
            type="email"
            placeholder="Entrer une adresse mail"
            text="Adresse mail"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />

          <Input
            htmlFor="password"
            id="password"
            type="password"
            placeholder="Entrer un mot de passe"
            text="Mot de passe"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          <Button text="Me connecter" onClick={() => handleLogin()} />
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
