import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import OlMinicart from "./views/olMinicart";
import Page2 from "./views/page2";
import PageLayout from "./Layout/PageLayout";
import CheckOutHeader from "./components/checkOutHeader/header";

function App() {
  return (
    <PageLayout
      header={<CheckOutHeader />}
      body={
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={OlMinicart} />
            <Route path="/page2" component={Page2} />
          </Switch>
        </BrowserRouter>
      }
      footer={<>1</>}
    />
  );
}

export default App;
