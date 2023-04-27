import { StyleSheet } from "react-native";

const borderRadius = 40;
const inputPaddingX = 20;

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#F3ECE8',
    },

    text: {
        fontSize: 18,
        marginVertical: "5%",
        fontWeight: 600
    },

    text1: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    endereco: {
        margin: 30,
        padding: 20,
        alignItems:"center",
        borderRadius: 15,
        backgroundColor: "#fff",
        // border: 10,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        
    },

    botao: {
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


    botaoE:{
        margin: 30,
        padding: 20,
        borderRadius: 15,
        backgroundColor: "#fff",
        border: 10,
        color:"black"
    },

    alert:{
        borderRadius: 15,
        backgroundColor: "#fff",
    },

    CO:{
        justifyContent:"space-around",

    },

    input: {
        height: 55,
        width: 320,
        margin: 15,
        paddingLeft: inputPaddingX,
        paddingRight: inputPaddingX,
        borderRadius: borderRadius,
        borderTopEndRadius: borderRadius,
        borderTopLeftRadius: borderRadius,
        backgroundColor: "white",
        color: "#BAC4BD",
        overflow: 'hidden',
        fontSize: 15,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,

    },

    botao2: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#2C2019",
        width: 300,
        

    },

    botao3: {
        margin: 20,
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: "#fff",
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        paddingLeft: inputPaddingX,
        paddingRight: inputPaddingX,
        borderRadius: borderRadius,
        borderTopEndRadius: borderRadius,
        borderTopLeftRadius: borderRadius,
        overflow: 'hidden',
    },

    check: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',
        // opacity: 40,
    },

    textOpa: {
        fontSize: 14,
        // opacity: 90, 
    },

    local:{
        alignItems:"center",
        justifyContent:"center",
        padding:30,
        marginTop: 10
    }

    

})