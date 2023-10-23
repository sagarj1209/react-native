import React from "react";

import {
  ScrollView,
  View,
 
} from 'react-native';
import FlatCards from "./components/FlatCards";
import ElevatedCards from "./components/ElevatedCards";
import FancyCards from "./components/FancyCards";
import ActionCard from "./components/ActionCard";

const App = ():JSX.Element =>{
 
  return(
    <ScrollView>
      <FlatCards />
      <ElevatedCards />
      <FancyCards />
      <ActionCard/>
    </ScrollView>
      
  
  )
}

export default App;