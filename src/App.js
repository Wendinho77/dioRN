import React from 'react';
import {View, Image, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking } 
from 'react-native';

const colorGitHub ='#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';

const ImageProfileGithub ='https://avatars.githubusercontent.com/u/105667364?v=4';
const urlToMyGithub = 'https://github.com/Wendinho77';

const App = () => {
const handlePressGoToGithub = async ()=> {
  console.log('verificando link');
  const res = await Linking.canOpenURL(urlToMyGithub);
  if (res) {
    console.log('link aprovado');
    console.log('abrindo link......');
    await Linking.openURL(urlToMyGithub); 
  }
};

    return (
        <SafeAreaView style={style.container}>
          <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
          <View style={style.content}>
            <Image accessibilitylabel="Wendel na varanda"
            style= {style.avatar} 
            source={{uri: ImageProfileGithub}}
             />
             <Text accessibilitylabel='Nome: Wendel Amaro'
              style={[style.defaultText, style.name]}>Wendel Amaro </Text>
             <Text accessibilitylabel='Nickname: Wendinho77' style={[style.defaultText, style.nickname]}>Wendinho77
             </Text>
             <Text accessibilitylabel="Descrição: Olá. prazer me chamo Wendel estou em Desenvolvimento de abilidades.📲😎" style={[style.defaultText, style.description]}>Olá. prazer me chamo Wendel estou em Desenvolvimento de abilidades.📲😎 
             </Text> 

           <Pressable onPress={handlePressGoToGithub}>
             <View style={style.button}>
              <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
             </View>
             </Pressable>
         </View>       
       </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    //column
    backgroundColor: colorGitHub,
    flex: 1, // Expandir para a tela inteira
    justifyContent: 'center',
    alignItems:'center',
    // flexDirection: 'rew',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar:{
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGitHub
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGitHub
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button:{
    marginTop: 20,
    backgroundColor: colorDarkFontGitHub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
