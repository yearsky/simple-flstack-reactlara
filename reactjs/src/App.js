import "bootstrap/dist/css/bootstrap.min.css";
import AuthUser from "./components/AuthUser";
import Guest from "./path/guest";
import Auth from "./path/auth";

function App() {
  const { getToken } = AuthUser();
  if (!getToken()) {
    return <Guest />;
  }
  return <Auth />;
}

export default App;
