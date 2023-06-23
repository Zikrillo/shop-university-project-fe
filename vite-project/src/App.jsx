import './App.css'
import MainPage from './pages/MainPage/MainPage';
import BasketPage from './pages/BasketPage/BasketPage';
import {BrowserRouter, Route, Routes} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/basket' element={<BasketPage></BasketPage>}/>
      </Routes>
      
      {/* <Dropdown options={options} onChangeFunc={func} width={"150px"}/> */}
    </BrowserRouter>
  )
}

export default App
