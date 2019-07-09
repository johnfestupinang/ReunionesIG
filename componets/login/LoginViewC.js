import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight, Image, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';

export default class LoginView extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            stateValidEmail:false
        }
    };
    render(){
        return(
            //Contenedor General
            
            <View>
                <View style={styles.container}> 
                        <StatusBar backgroundColor="#f7f6f6" barStyle="dark-content" />
                
                        <View style={styles.containerTitle}>  
                            <Text style={styles.title}>IG Services S.A.S</Text>
                        </View>
                
                        
                </View>    
                <View style={styles.containerIcons}>
                    <Icon name="user-circle-o" size={36} color="#92d36e" style={styles.userIcon}/>                    
                </View>     
                        <View style={styles.containerBody}> 
                            
                            <View style={styles.containerInputs}>
                                <TextInput style={styles.inputEmail} placeholder='Email Address'/>
                            </View> 
                        </View>
                
            </View>
                
        );
    }

    Gmail(){
        alert("Gmail Button");
    }

    ValidarCorreo(){
        const regularExpressions = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(regularExpressions.test(this.setState.email)===true){
            alert("Correo Valido");
        }else{
            alert("Correo Invalido, Revise");
        }
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
        backgroundColor: 'blue',
        flexDirection: 'row'
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
        fontWeight: 'bold',
        textAlign:'center'
    },
    containerBody:{
        flex: 1,
        backgroundColor: '#870D0D',
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },    
    containerIcons:{      
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor:'#AB9191',
        width: 80
    },
    userIcon:{
        marginTop: 10,
        marginLeft:10,
        marginBottom: 10,
        marginRight: 10
    },
    containerInputs:{
        marginLeft: 80,
        position: 'absolute',
        backgroundColor : '#ffffff'
    },
   inputEmail:{
        marginLeft:5,
        marginRight:5,
        marginTop: 4,
        marginBottom: 4,
        backgroundColor: '#f7f6f6',
        borderRadius: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#d6d6d6',
        width: 314 
    },
    inputPassword:{
        paddingLeft: 10,
        marginTop: 0,
        marginLeft:10,
        marginRight:10,
        marginBottom:0,
        backgroundColor: '#f7f6f6',
        borderRadius: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#d6d6d6',
        width: 300 
    },
    buttonSignIn:{
        marginBottom: 30,
        backgroundColor:"#92d36e",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#72bb53',
        position: 'relative',
        width: 220
    },
    textSingIn:{
        color:'#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
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
    }
})