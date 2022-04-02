import React, { useState } from 'react';
import { Text, TextInput, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import translate from './translator';

export default function App(){
  const [text, setText] = useState('');

  return (
   <SafeAreaView style={{padding: 10, paddingTop: 80, flex: 1}}>
     <StatusBar style={"auto"}/>
    <Text style = {{fontWeight: "bold", fontSize: 60, paddingBottom: 20}}>
      Emoji Translator
    </Text>
    <Text style = {{fontSize: 32, fontWeight: "bold"}}>Введите текст</Text>
    <TextInput 
      style = {{height: 40}}
      onChangeText = {setText}
      defaultValue = {text}
      placeholder = {"Ваш текст"}/>

    <Text style = {{fontSize: 42}}>
      {translate(text) || "..."}
    </Text>
   </SafeAreaView>
  );
}