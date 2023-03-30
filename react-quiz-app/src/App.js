import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import { Container } from "@mui/material";



function App() {
  return (
    <div className="bg-gray-900 h-screen">
      <Router>
        <Container>

          <Switch>
            <Route path="/" exact>
              <div className=" text-5xl lg:text-7xl font-bold text-center text-stone-500 py-8">
                Quiz Test
              </div>
              <Home />
            </Route>
            <Route path="/questions">
              <Questions />
            </Route>
            <Route path="/score">
              <FinalScreen />
            </Route>
          </Switch>

        </Container>
      </Router>
    </div>
  );
}

export default App;
