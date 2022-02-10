import React from "react";
import Header from "./components/Header";
import { Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import "./css/App.scss";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="app__container">
          <Routes>
            {/* <Route path="/shop" component={}} />
            <Route path="/profile" component={Profile} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/cart" component={Cart} /> */}
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
