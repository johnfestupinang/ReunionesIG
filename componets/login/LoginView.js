import React, { Component } from '../../node_modules/react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight, Image, StatusBar, Alert } from '../../node_modules/react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';

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

    render(){
        return(
            //Contenedor General
            
              
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

    Gmail(){
        const {email} = this.state;
        alert("mail: "+email);
    }

    signInButton(){
        if(this.state.stateValidateEmail && this.state.stateValidatePassword){
            Alert.alert('IG Meetings','Welcome to IG Meetings');            
        }else{
            Alert.alert('IG Meetings','Check your email or password, they are incorrect');
        }
        //Alert.alert('IG Meetings','Email:'+this.state.email+' Password: '+this.state.password);
    }
}

// Estilos 

const styles = StyleSheet.create({

    container: {
        marginTop: 10,
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        borderColor: '#ccc',
        backgroundColor: '#f7f6f6'
    },
    containerTitle: {
        marginTop: 80,
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        justifyContent: 'center',
        alignItems: 'center'      
    },
    title:{
        fontWeight: 'bold',
        fontSize: 32,
        color: '#629c44',
        fontWeight: 'bold'
    },
    containerInputs:{
        marginTop: 53,
        marginLeft:10,
        marginRight:10,
        marginBottom:10
    },
    userIcon:{
        marginTop: 10,
        marginLeft:10,
        position: 'absolute'
    },
   inputEmail:{
        marginTop: 10,
        marginLeft:70,
        marginRight:10,
        marginBottom:10,
        backgroundColor: '#f7f6f6',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#d6d6d6',
        width: 300 
    },
    passwordIcon:{
        marginTop: 70,
        marginLeft:10,
        position: 'absolute'
    },
    inputPassword:{
        marginTop: 0,
        marginLeft:70,
        marginRight:10,
        marginBottom:10,
        backgroundColor: '#f7f6f6',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#d6d6d6',
        width: 300 
    },
    containerButton:{
        marginTop: 40,
        marginLeft:20,
        marginRight:10,
        marginBottom:10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonSignIn:{
        backgroundColor:"#92d36e",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#72bb53',
        width: 220
    },
    textSingIn:{
        color:'#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    containerSocialNetwork:{
        marginTop:30,
        marginLeft:30,
        marginRight:30
    },
    containerLinks:{
        marginTop:25,
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    labelLinks:{
        textAlign: 'center',
        marginLeft: 40,
        textDecorationLine: 'underline',
        position:'absolute'
    },
    labelNoLink:{   
        textAlign: 'center', 
        marginLeft: 180,    
        fontWeight: 'bold',
        position: 'absolute'
    },
    labelSignUp:{
        textAlign: 'center',
        marginLeft: 280,
        textDecorationLine: 'underline',
        position:'absolute'
    },
    iconFacebook:{
        marginBottom: 10,
        marginTop:10,
        marginLeft: 50,
        backgroundColor:'#4064AD',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60
    },
    iconTwitter:{
        marginBottom: 10,
        marginTop:10,
        marginLeft: 150,
        backgroundColor:'#00ACEE',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60
    },
    iconGmail:{
        marginBottom: 10,
        marginTop:10,
        marginLeft: 250,
        backgroundColor:'#EE4734',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60   
    },
    error:{
        
       borderColor: '#FF6464',
       borderWidth: 1 
    }

})