import React, { Component } from '../../node_modules/react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight, Image } from '../../node_modules/react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';

export default class LoginView extends Component {
    render(){
        return(
            //Contenedor General
            <View style={styles.container}> 
                
                <View style={styles.containerTitle}>  
                    <Text style={styles.title}>IG Services S.A.S</Text>
                </View>

                <View style={styles.containerInputs}> 
                    <Image source={require('../../icons/UserIcon.png')} style={styles.userIcon}/>
                    <TextInput style={styles.inputEmail} placeholder='Email Address'/>
                    <Image source={require('../../icons/PasswordIcon.png')} style={styles.passwordIcon}/>
                    <TextInput style={styles.inputPassword} placeholder='Password'/>
                </View>

                <View style={styles.containerButton}> 
                    <TouchableHighlight style={styles.buttonSignIn}>
                        <Text style={styles.textSingIn} onPress={this.Gmail} >Sign In</Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.containerSocialNetwork}> 
                
                    <Icon.Button name="facebook" size={40} onPress={this.Gmail}/>
                    
                    
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
        alert("Gmail Button");
    }
}

// Estilos 

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginTop: 50,
        marginLeft:10,
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
        marginRight:30,
        marginBottom:30,
        backgroundColor: '#ffffff'
    },
    containerLinks:{
        marginTop:90,
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
        marginTop:10,
        marginLeft:45,
        marginBottom: 10,
        position: 'absolute',
        borderColor: '#FF0000',
        backgroundColor: "#3b5998",
        borderWidth: 1
    },
    iconTwitter:{
        marginTop:10,
        marginLeft:140,
        marginBottom: 10,
        position: 'absolute',
        borderColor: '#FF0000',
        borderWidth: 1
    },
    iconGmail:{
        marginTop:10,
        marginLeft:230,
        marginBottom: 10,
        position: 'absolute',
        borderColor: '#FF0000',
        borderWidth: 1
    }
})