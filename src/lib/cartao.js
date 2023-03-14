import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:30,
        backgroundColor: '#F3ECE8',
    },

    text: {
        fontSize: 18,
        marginVertical: "5%",
        fontWeight: 600,
    },

    text2:{
        fontSize: 16,
        fontWeight: 600,
        marginTop: 10,
    },
 
    botao3: {
        margin: 20,
        borderRadius: 20,
        backgroundColor: "#fff",
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        paddingLeft: 'inputPaddingX',
        paddingRight: 'inputPaddingX',
        borderRadius: 'borderRadius',
        borderTopEndRadius: 'borderRadius',
        borderTopLeftRadius: 'borderRadius',
        overflow: 'hidden',
    },

    lateral: {
       justifyContent: 'center',
       alignItems: 'center',
       flexDirection: 'row',

    }
})