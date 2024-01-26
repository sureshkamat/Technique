import "./App.css";

import { AllRoutes } from "./components/AllRoutes";

function App() {
  return (
    <div>
      <div className="nav"><img src="https://interviews.tacnique.com/static/media/tacnique-logo.c6deea82bd6eb016aa3f7bda24de498b.svg" alt="logo" />
      <h1>Users Dashboard</h1></div>
      <AllRoutes />
    </div>
  );
}

export default App;
