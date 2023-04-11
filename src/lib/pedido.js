import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3ECE8'
    },

    container2: {
        width: 300,
        padding: 20,
        borderRadius: 35,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },

    text: {
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },

    item: {
        alignItems: 'flex-end',
        marginBottom: 12,
    },
    text2: {
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    item2: {
        alignItems: 'flex-end',
    },

    bott: {
        backgroundColor: "#34271F",
        margin: "40px",
        width: 190,
        height: 50,
        borderRadius: 50,
        padding: '5px',
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }

});