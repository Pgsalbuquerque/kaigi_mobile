import React from 'react';
import { StatusBar} from 'react-native';
import logo from '../../../public/logo.png'
import { CreateButton, CreateText,Logo ,Textt,TextButton, Container, LoginInput, PasswordInput, ButtonLogin } from './styles';

const SignIn = () => {
  return (
    <Container>
      <Logo source={logo}></Logo>
      <Textt>Faça seu login</Textt>
      <LoginInput placeholder="LOGIN" placeholderTextColor="#000"></LoginInput>
      <PasswordInput placeholder="SENHA" placeholderTextColor="#000"></PasswordInput>
      <ButtonLogin><TextButton>ENTRAR</TextButton></ButtonLogin>
      <CreateButton><CreateText>CRIAR CONTA?</CreateText></CreateButton>
      <StatusBar backgroundColor="#FF3D4E"></StatusBar>
    </Container>
    
    
    
  )
}

export default SignIn;