import { StyleSheet } from 'react-native'
import { Color, Styles } from '@common'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.background,
        backgroundColor: '#fff',
        padding: 15
    },
    centerInfoBox: {
        padding: 20
    },
    noImg: {
        fontSize: 15,
        paddingTop: 150,
        paddingBottom: 150
    },
    pickButton: {
        backgroundColor: '#4e9e4f',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveButton: {
        backgroundColor: '#db4a3e',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    butText: {
        color: '#fff'
    },
});