import Sidebar from "./components/sidebar/sidebar";
import Dashboard from "./components/Main/Dashboard";
import Searchbar from "./components/Main/searchbar";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Searchbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
