import  {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "./HomePage"
import Category from "./Category"
import NewMeals from "./NewMeals"
import SingleView from "./SingleView"
import Incredients from "./Incredients"
import TastyFoods from "./TastyFoods"




function App() {
 

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="Category" element={<Category/>}/>
    <Route path="NewMeals" element={<NewMeals/>}/>
    <Route path="SingleView/:id" element={<SingleView/>}/>
    <Route path="Incredients" element={<Incredients/>}/>
    <Route path="TastyFoods"element={<TastyFoods/>}/>


  



   </Routes>
   
   
   
   </BrowserRouter>
   </>
  )
}

export default App;
