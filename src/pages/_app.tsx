import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ChakraProvider } from "@chakra-ui/react";

import user from "@/reducers/user";

const store = configureStore({
  reducer: { user },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
