import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RootPage from "./pages/RootPage";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Purchases from "./pages/Purchases";
import NavBar from "./components/NavBar";
import LoadinScreen from "./components/LoadinScreen";
import {useSelector} from 'react-redux'

function App() {
  const isLoadingScreen = useSelector(state => state.isLoadinScreen)
  return (
    <HashRouter>
      <NavBar />
      {isLoadingScreen && <LoadinScreen />}      
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
