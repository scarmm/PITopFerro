import { StyleSheet } from "react-native";

const borderRadius = 40;
const inputPaddingX = 20;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:30,
        backgroundColor: '#F3ECE8',
        marginTop: 150
    },

    text: {
        fontSize: 24,
        marginVertical: "5%",
        fontWeight: 600,
        alignSelf: "center",
    },

    text2:{
        fontSize: 16,
        fontWeight: 600,
        marginTop: 40,
        marginBottom:15,
        paddingLeft: 15,
    },
 
    botao3: {
        margin: 20,
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

    lateral: {
        alignItems:"center",
        justifyContent:"space-around",
       flexDirection: 'row',

    },
    caixas:{
        height: 50, 
        width: 140,
        margin: 10,
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
    caixasfora:{
   
    },

    botao:{
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },

    botaozinho: {
        backgroundColor: "#34271F",
        margin: "40px",
        width: 160,
        height: 50,
        borderRadius: 50,
        padding: '5px',
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
})