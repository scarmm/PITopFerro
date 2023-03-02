
import { StyleSheet } from "react-native";

const borderRadius = 40;
const inputPaddingX = 20;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3ECE8'
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
        fontSize: "15px",
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,

    },

    texto: {
        justifyContent: "flex-end",
        display: "flex",
        paddingLeft: "170px",
        margin: "5px"
    },

    texto1: {
        color: "#707070",
        fontWeight: "200",
        fontSize: "15px"
    },

    img: {
        width: "220px",
        height: "200px"
    },

    img1: {
        width: "250px",
        height: "250px",
        margin: "40px"
    },

    botao: {
        backgroundColor: "#FFAFCC",
        margin: 15,

    },

    botao1: {
        justifyContent: "center",
        display: "flex",
    },

    btt: {
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

    texto2: {
        display: "flex",
        paddingTop: "60px",
        fontWeight: "800"
    },


    imgE: {
        width: "160px",
        height: "32px",
    },

    textoC: {
        fontSize: "20px",
        marginBottom: "30px"
    },

    input1: {
        marginTop: "80px"
    },

    textos: {
        display: "flex",
        justifyContent: "center",
    },

    textoR: {
        fontSize: "22px",
        margin: "30px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },

    textoS: {
        fontSize: "18px",
        paddingLeft: "50px",
        paddingRight: "50px",
        marginBottom: "10px",
        marginTop: "10px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        textAlign:"center"
    },

    textoN: {
        fontSize: "15px",
        marginBottom: "60px",
        marginTop: "30px"
    },

    imgS: {
        width: "100px",
        height: "100px"
    },

    textos: {
        marginTop: "40px",
        textAlign: "center"
    },

    textosms: {
        marginTop: "30px",
        fontSize: "20px",

    },

    textosms1: {
        paddingLeft: "170px",
        color: "#707070",
        fontWeight: "200",
        fontSize: "15px"
    },

    textoemail: {
        marginBottom: "60px",
        marginTop: "30px",
        fontSize: "20px"
    },

    textosenha: {
        fontSize: "20px",
        marginBottom: "70px"
    },

    img2: {
        width: "150px",
        height: "150px"
    },

    imgicon: {
        width: "30px",
        height: "30px",
        margin: "10px",
    },

    container1: {
        flex: 1,
        backgroundColor: '#F3ECE8'
    },

    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    containerIcones: {
        paddingLeft: "350px",
    }
})

