import { StyleSheet } from "react-native";

export const principas = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3ECE8',

    },

    tela: {
        backgroundColor: '#F3ECE8',
        flex: 1,
    },
    containerboxs: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        padding:"20px",

    },

    barrapesquisa: {
        backgroundColor: "white",
        borderRadius: "20px",
        marginRight: "30px",
        width: "290px",
        height: "32px",

    },

    boxs: {
        position: 'relative',
        backgroundColor: "#fff",
        width: "172px",
        height: "220px",
        padding: "10px",
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        borderRadius: 15,
        marginBottom:"18px",

        
    },

    boxstext: {
        fontSize: "15px",
        marginTop: "20px",
        fontWeight: "500",
        color: "#34271F"
    },

    boxstext1: {
        marginTop: "2px",
        fontSize: "10px",
        color: "gray"
    },

    boxstext2: {
        marginTop: "10px",
        fontSize: "17px",
        fontWeight: "500",
        color:"#A69387"
    },

    imgbox: {
        width: "100px",
        height: "100px",
        margin: "5px"

    },

    imgbox1: {
        justifyContent: "center",
        alignItems: "center",
    },

    titulotext1: {
        fontSize: "20px",
        padding: "10px",
        fontWeight: "700",
        color: "#A69387",

    },
    circulos: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: "#E7D5CA",
        flexDirection:"column"
    },

    shadowProp: {
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    circulosfora: {
        display: "flex",
        justifyContent: "space-evenly",
        alignContent: "center",
        flexDirection: "row",
        marginBottom:"40px"
    },

    minitexto:{
        paddingTop:"10px",
        fontSize:"14px",
        textAlign:"center",
        fontWeight:"600",
        color:"#A69387"
    },



    iconebotao: {
        margin: "6px"
    },
    carrosa: {
        borderRadius: "30px",
        marginBottom: "40px",
        marginTop: "20px",
        
    },
    carrosa2: {
        borderRadius: "30px",
        marginLeft: "20px",
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        borderRadius: 15,
    },
    image: {
        width: "370px",
        height: "175px",
        flex: 1,

    }

})