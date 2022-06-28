import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import { Router } from "./Router";
import { client } from "./lib/apollo";
import { SidebarProvider } from "./contexts/SidebarContext";

const App = (): ReactElement => {
  return (
    <ApolloProvider client={client}>
      <SidebarProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SidebarProvider>
    </ApolloProvider>
  );
};

export default App;
