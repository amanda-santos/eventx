import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import { Router } from "./Router";
import { client } from "./lib/apollo";

const App = (): ReactElement => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
