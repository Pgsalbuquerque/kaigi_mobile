import styled from 'styled-components/native'
import {BaseButton} from 'react-native-gesture-handler'

export const Container = styled.View`
    width: 100%;
    height: 100%;
    
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    margin-top: 60px;
    width: 80%;
    height: 40px;
    resize-mode: stretch;
`;

export const ButtonLogin = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: #000;
    width: 80%;
    height: 40px;
    margin-top: 20px;
    border-radius: 5px;
`

export const TextButton = styled.Text`
    font-size: 18px;
    color: #fff;
`;
    
export const LoginInput = styled.TextInput`
    height: 40px;
    width: 80%;
    border-color: #fff;
    border-width: 1.5px;
    border-radius: 5px;   
    margin-top: 20px;
    padding-horizontal: 40px;
    color: #000;
    background-color: #fff;
    font-size: 12px;
`;

export const PasswordInput = styled.TextInput`
    height: 40px;
    width: 80%;
    border-color: #fff;
    border-width: 1.5px;
    border-radius: 5px;
    margin-top: 20px;  
    padding-horizontal: 40px;
    color: #000;
    background-color: #fff;
    font-size: 12px;
`;

export const CreateText = styled.Text`
    margin-top: 15px;
    font-size: 16px;
    color: #fff;
`;

export const CreateButton = styled.TouchableOpacity`
    height: 28px;
`;

export const Textt = styled.Text`
    margin-top: 50px;
    font-size: 25px;
    color: #fff;
`;

