
import React from 'react';

import {Button, Text,View} from 'react-native';
// Text,View etc..=> component




function App(): JSX.Element {
 const fruit = () =>{
   console.warn("Function Called");
   
 }
   
  return (
    // it is like a div tag
    <View >
      <Text style={{ fontSize: 40 }}>Hello My Name is Veerbahadur Sen</Text>
      <Button title=" onPress " onPress={()=>fruit()} color={"green"}></Button>
    </View>
  );
}


export default App;
