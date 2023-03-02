import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal: "5%",
        marginVertical: "5%"
    },

    text:{
        fontSize: 18,
        marginVertical: "5%",
        fontWeight: 600
    },

    text1:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    endereco:{
        margin: 30,
        padding: 20,
        borderRadius: 15,
        backgroundColor: "#fff",
        border: 10,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },

    botao:{
        margin: 30,
        padding: 20,
        borderRadius: 15,
        backgroundColor: "#fff",
        border: 10,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }

})