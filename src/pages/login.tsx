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
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {
    login(loginEmail, loginPassword)
      .then((data) => {
        // Handle the response data from the server
        if (data) {
          dispatch(addTokenToStore(data.token));
          dispatch(addUserIdToStore(data.userId));
        }
        router.push("/");
        setLoginEmail("");
        setLoginPassword("");
      })
      .catch((error) => {
        // Handle login error (e.g., display error message)
        console.error("Error occurred during login:", error);
      });
  };

  return (
    <>
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
