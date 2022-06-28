import React from "react";
import { SafeAreaView, Text,TextInput} from "react-native";
import styles from "./Input.style";
import Icon from 'react-native-vector-icons/FontAwesome5'


const Input=({placeholder,onChangeText,secureTextEntry,iconName})=>{
    return (
        <SafeAreaView style={styles.container}>
            <TextInput 
            onChangeText={onChangeText} 
            style={styles.input} 
            placeholder={placeholder} 
            secureTextEntry={secureTextEntry} 
            />
            <Icon style={styles.icon} 
            name={iconName} color='#00897b' size={23} />
        </SafeAreaView>
    )
}
export default Input;