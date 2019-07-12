import React, { Component } from '../../node_modules/react';
import { Text, View, TextInput, TouchableHighlight, Image, StatusBar, Alert } from '../../node_modules/react-native';
import  styles  from './LoginStylesCss';
import { email, password, stateValidateEmail, stateValidatePassword, signInButton, validateEmail } from './LoginFunctions';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoginView extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            stateValidateEmail:true,
            password:'',
            stateValidatePassword:true,
        }

    };

    render(){
        return(
            //General Container           
              
                <View style={styles.container}> 
                    <StatusBar backgroundColor="#f7f6f6" barStyle="dark-content" />
                    <View style={styles.containerTitle}>  
                        <Text style={styles.title}>IG Services S.A.S</Text>
                    </View>

                    <View style={styles.containerInputs}> 
                        <Image source={require('../../icons/UserIcon.png')} style={styles.userIcon}/>
                        <TextInput style={[styles.inputEmail, !this.state.stateValidateEmail ? styles.error : null ]} placeholder='Email Address' onChangeText={(emaill) => this.validateEmail(emaill,'Email')} value={this.setState.email} autoCapitalize = "none"/>
                        <Image source={require('../../icons/PasswordIcon.png')} style={styles.passwordIcon}/>
                        <TextInput style={[styles.inputPassword,!this.state.stateValidatePassword ? styles.error : null ]} placeholder='Password' secureTextEntry={true} onChangeText={(pass) => this.validatePassword(pass,'Password')} value={this.setState.password}/>
                    </View>

                    <View style={styles.containerButton}> 
                        <TouchableHighlight style={styles.buttonSignIn}>
                            <Text style={styles.textSingIn} onPress={this.signInButton.bind(this)} >Sign In</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.containerSocialNetwork}> 

                        <TouchableHighlight style={styles.iconFacebook} >
                            <Icon name="facebook" size={36} color="#ffffff" onPress={this.Gmail}/>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.iconTwitter} >
                            <Icon name="twitter" size={36} color="#ffffff" onPress={this.Gmail}/>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.iconGmail} >
                                <Icon name="google" size={36} color="#ffffff" onPress={this.Gmail}/>                                                       
                        </TouchableHighlight>
                        
                        
                        
                    </View>

                    <View style={styles.containerLinks}>                     
                        <Text style={styles.labelLinks}>Forgot Password?</Text>
                        <Text style={styles.labelNoLink}>New here?</Text>
                        <Text style={styles.labelSignUp}>Sing Up?</Text>
                    </View>
                    
                </View> 
        );
    }

    signInButton(){
        if(this.state.stateValidateEmail && this.state.stateValidatePassword){
            Alert.alert('IG Meetings','Welcome to IG Meetings');            
        }else{
            Alert.alert('IG Meetings','Check your email or password, they are incorrect');
        }
        
    }

    validateEmail (emailSend,type){
        const regularExpressions = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;        
        
        if(type=='Email'){
            if(regularExpressions.test(emailSend) && emailSend != ''){
                this.setState({
                    email: emailSend,
                    stateValidateEmail:true
                }) 
            }else{
                this.setState({
                    stateValidateEmail:false
                }) 
            }
        }
    }

    validatePassword (passwordSend,type){
        const regularExpressionsPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

        if(type=='Password'){
            if(regularExpressionsPassword.test(passwordSend) && passwordSend != ''){
                this.setState({
                    password: passwordSend,
                    stateValidatePassword:true
                })
            }else{
                this.setState({
                    stateValidatePassword:false

                })
            }
        }
    }
}