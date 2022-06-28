import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import Button from '../../Button/Button';
import Modal from "react-native-modal";
import styles from "./ContentInputModal.style";

const ContentInputModal = ({ visible, onClose, onSend }) => {
    const [text, setText] = useState('');

    const handleSend=()=>{
        if(!text){
            return;
        }
        onSend(text);
        setText('');
    }

    return (
        <Modal 
            style={styles.modal}
            isVisible={visible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
        >
            <SafeAreaView style={styles.container} >
                <View style={styles.input_container}>
                    <TextInput
                        placeholder="darla hadi milleti"
                        onChangeText={setText}
                        multiline
                    />
                </View>
                <Button
                    text='gonder gelsin'
                    onPress={handleSend} 
                    theme='primary'/>
            </SafeAreaView>
        </Modal>
    )
}
export default ContentInputModal;