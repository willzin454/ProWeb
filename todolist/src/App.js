import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import FormTodo from "./pages/formtodo/FormTodo";

function App() {
  return (
    <div>
      <Header nome="William" sobrenome="Carvalho"/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component = {Home}/>
          <Route path="/form-todo" Component={FormTodo}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}
export default App;