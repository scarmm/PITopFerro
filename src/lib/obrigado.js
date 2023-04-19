import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3ECE8'
    },
    container2:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoObrigado: {
        backgroundColor: "#34271F",
        width: 300,
        height: 50,
        borderRadius: 50,
        padding: 5,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    text:{
        textAlign: "center",
        fontSize: 36,
        color: '#7E441D'
    },
    text2:{
        textAlign:'center',
        fontSize: 36,
        color: '#7E441D'
    },
    image:{
        minHeight: 400,
        minWidth: 400
    }
})