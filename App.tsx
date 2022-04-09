import React, { useState } from 'react';
import { Text, TextInput, SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import translate from './translator';
import { useFonts, ComicNeue_400Regular } from '@expo-google-fonts/comic-neue';

export default function App(){
  const [text, setText] = useState('');
  const [fontsLoaded] = useFonts({ ComicNeue_400Regular });
  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading fonts...</Text>
      </SafeAreaView>
    );
  }
  return (
   <SafeAreaView style={{padding: 10, paddingTop: 30, flex:10}}>
     <StatusBar style={"auto"}/>
     <SafeAreaView>
      <Text style={styles.header}>
        {'Emoji\nTranslator'}
      </Text>
    </SafeAreaView>
    <View style = {styles.translator}>
      <ScrollView>
        <TextInput 
          style = {{ fontSize: 32}}
          onChangeText = {setText}
          defaultValue = {text}
          placeholder = {"Вы думали, что это ваш текст,но на самом деле это я, Дио!"}
          multiline = {true}
          textAlignVertical = "top"
        />
      </ScrollView>
    </View>
    <View style = {styles.translator}>
      <ScrollView>
        <Text style = {{fontSize: 42}}>
          {translate(text) || ""}
        </Text>
      </ScrollView>
    </View>
   </SafeAreaView>
  );
}


  const styles = StyleSheet.create({
   header: {
      fontFamily: 'ComicNeue_400Regular',
      fontSize: 50,
      paddingBottom: 20,
      textShadowColor: '#30d5c8',
      textShadowRadius: 10
    },
    container: {
      padding: 10,
      paddingTop: 30,
    }, 
    translator: {
      flex: 45,
      borderWidth: 3,
      borderRadius: 20,
      borderColor: '#30d5c8'
    }
  })