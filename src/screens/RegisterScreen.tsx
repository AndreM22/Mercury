import React, { useState, type PropsWithChildren } from 'react';
import { Image, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from "react-native"



export const RegisterScreen = (props: any) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [goals, setGoals] = useState('');
    const [body, setBody] = useState('');
    const [water, setWater] = useState('');

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

    const handleHeightInput = (text: React.SetStateAction<string>) => {
        setHeight(text);
        checkFormCompletion();
      };

    const handleWeightInput = (text: React.SetStateAction<string>) => {
        setWeight(text);
        checkFormCompletion();
    };

    const handleGoalsInput = (text: React.SetStateAction<string>) => {
      setGoals(text);
      checkFormCompletion();
    };

    const handleBodyInput = (text: React.SetStateAction<string>) => {
      setBody(text);
      checkFormCompletion();
    };

    const handleWaterInput = (text: React.SetStateAction<string>) => {
      setWater(text);
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
        <View style={styles.optionsContainer}>
            <View style={styles.optionsContainer2}>
                <Text style={styles.label}>Height</Text>
                <TextInput
                    style={[styles.input2, isFocused && styles.inputFocused]}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChangeText={handlePasswordInput}
                    value={height}
                    keyboardType="numeric"
                />
            </View>
            <Text style={styles.text}>cm.</Text>
            <View style={styles.optionsContainer3}>
                <Text style={styles.label}>Weight</Text>
                <TextInput
                    style={[styles.input2, isFocused && styles.inputFocused]}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChangeText={handleWeightInput}
                    value={weight}
                    keyboardType="numeric"
                />
            </View>
            <Text style={styles.text}>kg.</Text>
        </View>
        <Text style={styles.label}>Goals</Text>
        <TextInput
            style={[styles.input, isFocused && styles.inputFocused]}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleGoalsInput}
            value={goals}
            placeholder="Loss weight, gain muscle mass, etc."
            keyboardType="default"
        />
        <Text style={styles.label}>Body type</Text>
        <TextInput
            style={[styles.input, isFocused && styles.inputFocused]}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleBodyInput}
            value={body}
            placeholder="Mesomorphic, endomorph, oval, square, etc."
            keyboardType="default"
        />
          <Text style={styles.label}>Liters of water that you consume daily</Text>
          <View style={styles.optionsContainer}>
            <TextInput
                style={[styles.input2, isFocused && styles.inputFocused]}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={handleWaterInput}
                value={water}
                keyboardType="numeric"
            />
            <Text style={styles.text2}>lt.</Text>
          </View>
      </ScrollView>
      <TouchableOpacity
        onPress={goToLoginScreen} 
        disabled={!formComplete}
        style={formComplete ? styles.button : styles.buttonDisabled}>
            <Text style={styles.buttonText}>Sign up </Text>
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
    width: '94%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16,
    marginBottom: 16,
    marginLeft:20
  },
  input2 : {
    height: 40,
    width: 70,
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
  optionsContainer: {
    flexDirection: 'row',
  },
  optionsContainer2: {
    flexDirection: 'column',
  },
  optionsContainer3: {
    flexDirection: 'column',
    marginLeft:50
  },
  text: {
    color: 'black',
    marginTop: 30,
    marginLeft: 10
  },
  text2: {
    color: 'black',
    marginTop:10, 
    marginLeft: 10
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