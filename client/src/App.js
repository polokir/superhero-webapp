import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { AddHero } from "./pages/AddHero/AddHero";
import { HeroPage } from "./pages/HeroPage/HeroPage";
import Header from "./components/Header/Header";





function App() {
  
  return (
    <>
    <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hero/add-edit/:id" element={<AddHero/>}/>
      <Route path="/hero/:id" element={<HeroPage/>}/>
      <Route path="/hero/add" element={<AddHero/>}/>
    </Routes>
    </>
   
  );
}

export default App;
