import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Switch, Image } from 'react-native';

export const LoginScreen = (props: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const {navigation} = props;
    const [isFocused, setIsFocused] = useState(false);
    const [formComplete, setFormComplete] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    const goToHomeScreen = () => {
      navigation.navigate('HomeScreen');
    }

    const goToRegisterScreen  = () => {
      navigation.navigate('RegisterScreen');
    }

    const handleEmailInput = (text: React.SetStateAction<string>) => {
      setEmail(text);
      checkFormCompletion();
    };
  
    const handlePasswordInput = (text: React.SetStateAction<string>) => {
      setPassword(text);
      checkFormCompletion();
    };
  
    const checkFormCompletion = () => {
      if (email !== '' && password !== '') {
        setFormComplete(true);
      } else {
        setFormComplete(false);
      }
    };

    return (
    <View style={styles.container}>
      <Image
            source={require("../assets/loginImage.png")}
        />
      <Text style={styles.title}>Hi, Wecome to Mercury!</Text>
      <Text style={styles.subTitle}>The best way to stay healthy is to maintain an active life</Text>
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
      <View style={styles.optionsContainer}>
        <View style={styles.checkboxContainer}>
          <Switch 
            trackColor={{ false: '#999EA1', true: '#351A96' }}
            thumbColor={rememberMe? '#351A96' : '#351A96'}
            value={rememberMe}
            onValueChange={(newValue: boolean | ((prevState: boolean) => boolean)) => setRememberMe(newValue)}
          />
          <Text style={styles.rememberme}>Remember me</Text>
        </View>
        <Text style={styles.forgotPass}>Forgot password </Text>
      </View>
      <TouchableOpacity
       onPress={goToHomeScreen} 
       disabled={!formComplete}
       style={formComplete ? styles.button : styles.buttonDisabled}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.newAccountContainer}>
        <Text style={styles.account}>Don't have an account? </Text>
        <Text style={styles.register} onPress={goToRegisterScreen}>Sign up </Text>
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
  label: {
    marginLeft: 20,
    marginBottom: 5,
    fontSize: 14,
    color: '#351A96'
  },
  input: {
    height: 40,
    width: '90%',
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
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 16
  },
  rememberme: {
   marginLeft:5,
   color: '#000C14',
   fontSize: 14
  },
  optionsContainer: {
    flexDirection: 'row',
    marginLeft:20
  },
  forgotPass:{
    color: '#FB344F',
    fontSize: 14,
    marginLeft:90
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