import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";

export default function App() {
  function handleLoginButton() {
    Alert.alert('Email e Senha Recebidos com sucesso');    
  }

  function handleForgetButton(){
    Alert.alert('Recupere sua senha');  
  }

  function handleCreateAccount(){
    Alert.alert('Crie sua conta');  
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image
          source={require("./assets/logo.png")}
          style={styles.logo}
        ></Image>
        <Text style={styles.h1}>Sistema de Login</Text>
        <Text style={styles.h2}>Bem vindo(a)! Digite seus dados</Text>
        <Formulario label="Email" placeholder="Digite seu email" />
        <Formulario label="Senha" placeholder="******" />
        <View style={styles.aditionals}>
          <TouchableOpacity onPress={handleForgetButton} style={styles.forgotBtnArea}>
            <Text style={styles.forgotBtnText}>Esqueci minha Senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleLoginButton} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <View style={styles.signUp}>
          <Text style={styles.signUpText}>Não tem uma conta? </Text>
          <TouchableOpacity onPress={handleCreateAccount}>
            <Text style={styles.signUpBtnText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerArea}>
          <Text style={styles.footerText}>Criado por André Santos Braga</Text>
        </View>
      </View>
    </ScrollView>
  );
}

type props = {
  label: string;
  placeholder: string;
};

export const Formulario = (props: props) => {
  const [emailField, setemailField] = useState("");
  const [passwordField, setpasswordField] = useState("");

  return (
    <View style={styles.inputArea}>
      <Text style={styles.inputLabel}>{props.label}</Text>
      <TextInput
        style={styles.inputField}
        placeholder={props.placeholder}
        placeholderTextColor="#999"
        secureTextEntry={props.placeholder === "******"}
        value={
          props.placeholder === "Digite seu email" ? emailField : passwordField
        }
        onChangeText={
          props.placeholder === "Digite seu email"
            ? setemailField
            : setpasswordField
        }
        autoCapitalize={
          props.placeholder === "Digite seu email" ? "none" : "sentences"
        }
        keyboardType={
          props.placeholder === "Digite seu email" ? "email-address" : "default"
        }
      />
    </View>
  );
};
