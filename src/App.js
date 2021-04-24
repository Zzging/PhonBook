import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListSbshop_userComponent from "./components/ListSbshop_userComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateSbshop_userComponent from "./components/CreateSbshop_userComponent";
import UpdateSbshop_userComponent from "./components/UpdateSbshop_userComponent";
import ViewSbshop_userComponent from "./components/ViewSbshop_userComponent";
function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
        <div className="container2">
          <Switch>
            <Route
              path="/sbshop_user"
              component={ListSbshop_userComponent}
            ></Route>
            <Route
              path="/add-sbshop_user/:user_id"
              component={CreateSbshop_userComponent}
            ></Route>
            <Route
              path="/view-sbshop_user/:user_id"
              component={ViewSbshop_userComponent}
            ></Route>
            <Route path="/" exact component={ListSbshop_userComponent}></Route>
            {/* <Route
              path="/update-sbshop_user/:user_id"
              component={UpdateSbshop_userComponent}
            ></Route> */}
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
