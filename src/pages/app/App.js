import React from 'react';
import Home from "../home";
import Nbar from "../../Components/Navbar";
import Ourmassage from "../../Components navbar/Our massage";
import {BrowserRouter,Route} from "react-router-dom";
const App=()=>{
    return(
        <BrowserRouter>
          <Nbar/>
            <Route exact path='/Ourmassage' component={Ourmassage}></Route>
            <Route exact path='/' component={Home}></Route>
        </BrowserRouter>
    )
}

export default App