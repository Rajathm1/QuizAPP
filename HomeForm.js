/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';  
import {
  Platform, 
  StyleSheet,
   Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Keyboard

} from 'react-native';
//import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
//import { Kohana } from 'react-native-textinput-effects';
//import Start from './startquiz';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            Age:"",
            Address:"",
            phone:""
        }
    }

    validate_field=()=>{
        const{name,Age,Address,phone}=this.state
        if(name==""||Age==""||Address==""||phone==""){
            this.setState({Error:'Please fill all the details'});
            return false
        }
        return true
    }
    making_api_call=()=>{
        if(this.validate_field()){
            alert("Successfully saved data!")
        }
        
        Keyboard.dismiss();
    }






    static navigationOptions =
    {
    title:'Registration Form!',
    };
     
    render(){
        return(
            <>
            <View stye={styles.form}>

            <Text style={styles.header}>Please Fill the below form!</Text>
            
            <TextInput style={styles.fill } 
            multiline={true} placeholder="Enter your Name"
            onChangeText={(value)=>this.setState({name:value})}
            ></TextInput>

            <TextInput style={styles.fill }  keyboardType="numeric" placeholder="Enter your Age"
             onChangeText={(value)=>this.setState({Age:value})}
            ></TextInput>

            <TextInput style={styles.fill} placeholder="Enter your Address"
            onChangeText={(value)=>this.setState({Address:value})}
            ></TextInput>
            <TextInput style={styles.fill}  keyboardType="numeric" placeholder="Enter your phone"
             onChangeText={(value)=>this.setState({phone:value})}
            ></TextInput>
           
            <Button title="submit" color="#009933"  
            onPress={()=>this.making_api_call()}
            ></Button>
            <Text style={styles.error_Handle}>{this.state.Error}</Text>
            </View>

            </>
     );
    }
}




const styles=StyleSheet.create({
    form:{
        flex:1,
        color:'#A49E9D',
        justifyContent:'center',

    },
    fill:{
        margin: 10,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 2,
        borderRadius:10,

    },

    header:{
        padding:20,
        fontSize:20,
        color:'blue',

    },
    error_Handle:{
        color:'red',
        fontSize:20,
        textAlign:'center',

    },
    
    

});


