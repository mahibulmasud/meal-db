import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Header from "./Components/Header/Header";
import MealDetails from "./Components/MealDetails/MealDetails";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/MealDetails/:MealDetailsId" element={<MealDetails />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
