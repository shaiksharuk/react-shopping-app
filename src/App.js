import Home from "./routes/home/home";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<h1>This is Shop</h1>}></Route>
        <Route path="cart" element={<h1>This is your Cart</h1>}></Route>
        <Route path="sign-in" element={<SignIn/>}></Route>
      </Route>
    </Routes>
  );
};

export default App;