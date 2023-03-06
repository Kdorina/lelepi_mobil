import { StyleSheet, Text, View } from "react-native";

export default function Footer(){
    return (
        <View style={styles.container}>
            <Text>&copy Kovács Dorina</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:50,
        backgroundColor: '#1DA563',
        alignItems: 'center',
        justifyContent: 'center',
    },
})