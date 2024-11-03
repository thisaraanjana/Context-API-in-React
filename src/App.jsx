import Checkout from "./Checkout";
import Loging from "./Loging";
import Logout from "./Logout";
import { UserProvider } from "./context/userContext";
function App() {
  return (
    <div className="App">
      <UserProvider>
        <Loging />
        <Checkout />
        <Logout />
      </UserProvider>
    </div>
  );
}

export default App;
