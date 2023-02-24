import { StyleSheet } from "react-native";

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
        padding: 20,
        borderRadius: 30,
        backgroundColor: "white",
        color: "#BAC4BD",
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


});