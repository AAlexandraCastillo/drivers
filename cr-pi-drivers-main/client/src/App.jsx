
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome/Welcome'
import Home from './components/Home/Home'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'

function App() {
 

  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/home' element={<Home/>}/>
       <Route path='/detail/:id' element={<Detail/>}/>
       <Route path='/form' element={<Form/>}/>
      </Routes>
    </div>
  )
}

export default App
