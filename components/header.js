import { StyleSheet, Text, View } from "react-native";

export default function Header(){
    return (
        <View style={styles.container}>
            <Text>Feladat 0358</Text>
            <Text>Paralelepipedon térfogat</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:100,
        backgroundColor: '#DAF7A6',
        alignItems: 'center',
        justifyContent: 'center',
    }
})