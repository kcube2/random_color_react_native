import React, {useState} from 'react';

import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export default function App() {

const [randomColor, setRandomColor] = useState('rgb(32,0,126)');
const [resetColor, setResetColor] = useState('rgb(0,0,0)')
const changeBackground = ()=>{
  let color = "rgb(" +
  Math.floor(Math.random() * 256)+
    "," +
    Math.floor(Math.random()* 256)+
    "," +
    Math.floor(Math.random()* 256)+
    ")";

    setRandomColor(color);
}

const BlackColor = () =>{

  const color = 'rgb(0,0,0)'
  setRandomColor(color)
}
  return (
    <>
     
      <View style={[styles.container,{backgroundColor:randomColor}]}>
      <TouchableOpacity onPress={BlackColor}>
      <Text style = {styles.text}>Reset</Text>
      </TouchableOpacity>

        <TouchableOpacity onPress={changeBackground}>
        <Text style={styles.text}> Click Me</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 30,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#fff',
    borderRadius: 15,
    textTransform: 'uppercase',
  },
});






