import React, { useState, type PropsWithChildren } from 'react';
import { Image, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from "react-native"
import { ExerciseContext } from '../context/exerciseContext';

export const RegisterScreen = (props: any) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {navigation} = props;
    const [isFocused, setIsFocused] = useState(false);
    const [formComplete, setFormComplete] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    const goToLoginScreen  = () => {
      navigation.navigate('LoginScreen');
    }

    const handlefirstNameInput = (text: React.SetStateAction<string>) => {
        setFirstName(text);
        checkFormCompletion();
    };

    const handlelastNameInput = (text: React.SetStateAction<string>) => {
        setLastName(text);
        checkFormCompletion();
    };

    const handlePhoneInput = (text: React.SetStateAction<string>) => {
        setPhone(text);
        checkFormCompletion();
    };

    const handleEmailInput = (text: React.SetStateAction<string>) => {
      setEmail(text);
      checkFormCompletion();
    };
  
    const handlePasswordInput = (text: React.SetStateAction<string>) => {
      setPassword(text);
      checkFormCompletion();
    };
  
    const checkFormCompletion = () => {
      if (email !== '' && password !== '' && firstName !=='' && lastName !=='' && phone !=='') {
        setFormComplete(true);
      } else {
        setFormComplete(false);
      }
    };

    return (
    <View style={styles.container}>
      <Image
            source={require("../assets/registerImage.png")}
        />
      <Text style={styles.title}>Sign up </Text>
      <Text style={styles.subTitle}>Start your healthy life today!</Text>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.label}>First name</Text>
        <TextInput
            style={[styles.input, isFocused && styles.inputFocused]}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handlefirstNameInput}
            value={firstName}
            placeholder="Please enter your first name"
            keyboardType="default"
        />
        <Text style={styles.label}>Last name</Text>
        <TextInput
            style={[styles.input, isFocused && styles.inputFocused]}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handlelastNameInput}
            value={lastName}
            placeholder="Please enter your last name"
            keyboardType="default"
        />
        <Text style={styles.label}>Phone number</Text>
        <TextInput
            style={[styles.input, isFocused && styles.inputFocused]}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handlePhoneInput}
            value={phone}
            placeholder="Please enter your phone number"
            keyboardType="numeric"
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
            style={[styles.input, isFocused && styles.inputFocused]}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleEmailInput}
            value={email}
            placeholder="Please enter your email"
            keyboardType="email-address"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
            style={[styles.input, isFocused && styles.inputFocused]}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handlePasswordInput}
            value={password}
            placeholder="Please enter your password"
            secureTextEntry
        />
      </ScrollView>
      <TouchableOpacity
        onPress={goToLoginScreen} 
        disabled={!formComplete}
        style={formComplete ? styles.button : styles.buttonDisabled}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.newAccountContainer}>
            <Text style={styles.account}>Already have an account ? </Text>
            <Text style={styles.register} onPress={goToLoginScreen}>Login</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontFamily: 'Manrope-Regular'
  },
  title: {
    fontSize: 24,
    color: '#351A96',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop:16
  },
  subTitle:{
    color: '#999EA1',
    fontSize: 14,
    marginLeft: 20,
    marginRight: 20,
    marginBottom:15
  },
  scrollContainer: {
    flexGrow: 1
  },
  label: {
    marginLeft: 20,
    marginBottom: 5,
    fontSize: 14,
    color: '#351A96'
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16,
    marginBottom: 16,
    marginLeft:20
  },
  inputFocused: {
    borderColor: '#351A96',
    borderWidth: 1,
    backgroundColor: '#F8F0FF'
  },
  button: {
    height:40,
    width: '90%',
    backgroundColor: '#351A96',
    borderRadius: 5,
    paddingLeft: 20,
    paddingVertical: 7,
    marginLeft: 20
  },
  buttonDisabled: {
    height:40,
    width: '90%',
    backgroundColor: '#B6AED2',
    borderRadius: 5,
    paddingLeft: 10,
    paddingVertical: 7,
    marginLeft: 20
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  newAccountContainer: {
    flexDirection: 'row',
    marginLeft:90,
    marginTop:30,
    marginBottom: 20
  },
  account:{
    color: '#999EA1',
    fontSize: 14,
  },
  register:{
    color: '#351A96',
    fontSize: 14, 
  }
});