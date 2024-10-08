import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };
   
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        style={styles.logo}
        source={require('@/assets/images/logo-oficial-store.png')}  
      />
      
      <Text style={styles.baseText}>Welcome RealMadrid Store </Text>
  
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
 
      <TextInput
        style={styles.inputt}
        placeholder="Mật khẩu"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      <View style={styles.loginButton}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </View>

      {/* <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text> */}
      <Text style={styles.forgotPasswordText}>Bạn chưa có tài khoản?
      <TouchableOpacity onPress={navigateToRegister}>
      <Text 
        style={styles.textRegister}> Đăng ký
        </Text>
        </TouchableOpacity>
     
        
     
      </Text>

      <View style={styles.socialButton}>
        <Ionicons name="logo-google" size={24} color="white" />
        <Text style={styles.socialButtonText}>Đăng nhập bằng Google</Text>
      </View>

      <View style={[styles.socialButton, styles.facebookButton]}>
        <Ionicons name="logo-facebook" size={24} color="white" />
        <Text style={styles.socialButtonText}>Đăng nhập bằng Facebook</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 350,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,  // Giảm khoảng cách phía trên của logo
    marginBottom: 10,  // Giảm khoảng cách giữa logo và tiêu đề
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 40,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  inputt: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 40,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 40,
    width: '100%',
    alignItems: 'center',
    marginBottom: 22,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  forgotPasswordText: {
    color: '#66FF99',
    marginBottom: 10,
    fontSize: 16,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF0000',
    padding: 8,
    borderRadius: 40,
    width: '100%',
    justifyContent: 'center',
    marginTop: 10,
  },
  facebookButton: {
    backgroundColor: '#00FFFF',
  },
  socialButtonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  baseText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20, 
  },
  textRegister: {
    color: 'red',
  },
});
