import React from "react";
import Navbar from "./components/navbar";
import Routes from './routes';
import Articles from './components/article';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
        <Articles />
      </div>
    );
  }
}
export default App;
