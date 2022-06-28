import { StyleSheet, Dimensions} from "react-native";

const deviceSize=Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        padding:20,
        marginHorizontal:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height:deviceSize.height/3,
    },
    modal:{
        justifyContent:'flex-end',
        margin:0,
    },
    input_container: {
        flex:1,
    }

})
export default styles;