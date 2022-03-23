import React, {Component} from 'react';
import { View, Text, Button, NativeModules} from 'react-native';
//import ToastExample from './ToastExample';

var ToastExample = NativeModules.ToastExample;
class App extends Component {
  
    render() {
      return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FBD6D2' }}>
            <Text style={{ fontSize: 20, color: '#A63EC5' }}>
               React Native Custom Modules{"\n"} 
              </Text>
            <Button onPress={() => {
            ToastExample.show('Awesome!!', ToastExample.LONG,);
            
             }} title="Press This Button"/> 

          </View>
      );
  }

}

export default App;
