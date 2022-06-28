import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList } from "react-native";
import styles from "./Messages.style";
import FloatingButton from "../../../components/FloatingButton/FloatingButton";
import ContentInputModal from "../../../components/modal/ContentInputModal/ContentInputModal";
import database from '@react-native-firebase/database';
import auth from "@react-native-firebase/auth";
import parseContentData from "../../../utils/parseContentData";
import MessageCard from "../../../components/MessageCard/MessageCard";

const Messages = () => {
    const [inputModalVisible, setInputModalVisible] = useState(false);
    const [contentList, setContentList] = useState([]);

    useEffect(() => {
        database()
            .ref('messages/')
            .on('value', snapshot => {
                const contentData = snapshot.val();
                const parsedData = parseContentData(contentData || {});
                setContentList(parsedData);
            });
    }, [])


    const handleInputToggle = () => {
        setInputModalVisible(!inputModalVisible);
    }
    const handleSendContent = (content) => {
        handleInputToggle();
        sendContent(content);

    }

    const sendContent = (content) => {

        const userMail = auth().currentUser.email
        const contentObj = {
            text: content,
            username: userMail.split('@')[0],
            date: (new Date().toISOString()),
            dislike:0,
            like:0,
        }
        database().ref('messages/').push(contentObj);
    }
    const handleNoCare=(item)=>{
        database().ref(`messages/${item.id}/`).update({dislike:item.dislike +1})

    }
    const renderContent = ({ item }) => 
    <MessageCard 
    noCare={()=>handleNoCare(item)} 
    message={item} 
    />

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={contentList}
                renderItem={renderContent}
            />
            <FloatingButton
                icon='plus'
                onPress={handleInputToggle}
            />
            <ContentInputModal
                visible={inputModalVisible}
                onClose={handleInputToggle}
                onSend={handleSendContent}
            />
        </SafeAreaView>
    )
}

export default Messages;