import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 'auto'
  },
  logo: {
    width: 150,
    height: 150,
  },
  h1: {
    color: "#000",
    fontSize: 27,
    fontWeight: "bold",
    marginVertical: 10,
  },
  h2: {
    color: "#999",
    fontSize: 15,
  },
  inputArea: {
    width: "100%",
    paddingTop: 20,
  },
  inputField: {
    borderWidth: 2,
    borderRadius: 5, 
    borderColor: '#ddd',
    fontSize: 15,
    padding: 10,
    color: '#777'
  },
  inputLabel: {
    color: "#777",
    fontSize: 14,
    marginBottom: 7,
  },
  aditionals: {
    width:"100%",    
  },
  forgotBtnArea: {
    alignSelf: 'flex-end',  
    paddingVertical: 20,  
  },
  forgotBtnText: {
    fontSize: 14,
    color: '#4162b7',
    fontWeight: 'bold',    
  },
  button: {
    backgroundColor: '#4162b7',
    width: '100%',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
  },
  signUp: {
    flexDirection: 'row',
    marginTop: 30,
  },
  signUpText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#999'
  },
  signUpBtnText: {
    fontSize: 13,
    color: '#4162b7',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  footerArea: {
    marginVertical: 30
  },
  footerText: {
    fontSize: 13,
    color: '#999',
  },
});
