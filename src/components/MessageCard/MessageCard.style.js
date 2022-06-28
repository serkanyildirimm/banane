import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00897b',
        margin: 10,
        color: 'white',
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    inner_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    text_content: {
        color: 'white',
        paddingLeft: 10,
        paddingBottom: 10,
        fontStyle: 'italic',
    },
    text_username: {
        color: 'white',
        fontSize: 15,
    },
    text_date: {
        color: 'white',
        fontStyle: 'italic',
    },
    footer:{
        alignItems:'flex-end',
        marginRight:5,
        marginBottom:8,
    },
    dislike_container:{
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'space-between',
        padding:3,
        paddingHorizontal:10,
        borderRadius:20,
        alignItems:'center',
    },
    dislike_count_container: {
        marginRight:3,
        backgroundColor:'#00897b',
        borderRadius:20,
        padding:3,
    },
    dislike_count_text: {
        fontWeight:'bold',
        color:'white',
    },
    dislike_text: {
        fontWeight:'bold',
        color:'#00897b'
    }


})
export default styles;