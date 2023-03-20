import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoObrigado: {
        backgroundColor: "#34271F",
        margin: "40px",
        width: 300,
        height: 50,
        borderRadius: 50,
        padding: '5px',
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    text:{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 36,
        color: '#7E441D'
    },
    image:{
        minHeight: 100,
        minWidth: 100
    }
})