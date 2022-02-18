import React from "react";
import {useRoutes} from 'react-router-dom'
import Home from "./pages/Home";
import Bmi from "./pomponents/Bmi";
import Calc from "./pomponents/Calc";
import Counter from "./pomponents/Counter";
import Grade from "./pomponents/Grade";
import Login from "./pomponents/Login";

export default function App (){
return useRoutes([
        
            { path:"/", element:<Home/>},
            { path:"/bmi", element:<Bmi/>},
            { path:"/calc", element:<Calc/>},
            { path:"/grade", element:<Grade/>},
            { path:"/login", element:<Login/>},
            { path:"/counter", element:<Counter/>}
]);
}

