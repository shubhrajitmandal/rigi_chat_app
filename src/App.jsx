import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute eact path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
