import React from "react";
import Navbar from "./components/navbar";
import Routes from './routes'


class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    );
  }
}
export default App;
