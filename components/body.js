import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Body(){
    const [aedge, setAedge] = React.useState('');
    const [bedge, setBedge] = React.useState('');
    const [cedge, setCedge] = React.useState('');
    const [volume, setVolume] = React.useState('');

    function onCalcButton(){
        let volume = aedge*bedge*cedge;
        setVolume(volume);
    }
    
    return (
        <View style={styles.container}>
        <Text style={styles.text}>A él</Text>
            <TextInput style={styles.input} value={aedge}
            onChangeText={(res)=> {setAedge(res)}}></TextInput>
        <Text style={styles.text}>B él</Text>
            <TextInput style={styles.input} value={bedge}
            onChangeText={(res)=> {setBedge(res)}}></TextInput>
        <Text style={styles.text}>C él</Text>
            <TextInput style={styles.input} value={cedge}
            onChangeText={(res)=> {setCedge(res)}}></TextInput>

        <Text style={styles.button} onPress={onCalcButton}>Számít</Text>

        <Text style={styles.text}>Térfogat</Text>
            <TextInput style={styles.input}  value={volume}
            onChangeText={(res)=> {setVolume(res)}}></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        backgroundColor: '#E8FFEE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        marginBottom:10,
        marginTop:10,
        backgroundColor:'#fff',
        width:'80%',
        height:40,
        borderRadius:20,
        borderColor:"#35E590",
        borderWidth: 2,

      },
      text:{
        textAlign:'left',
        position:'relative',
        marginRight:300,
        fontWeight:500,
      },
      button:{
        backgroundColor:"#D3F149",
        padding:10,
        width:"80%",
        borderRadius:20,
        textAlign:"center",
        fontWeight:500,
        marginBottom:10,
        marginTop:10
      },
})