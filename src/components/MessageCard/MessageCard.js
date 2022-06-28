import React from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import styles from "./MessageCard.style";
import { formatDistance, parseISO } from 'date-fns'

const MessageCard = ({ message, noCare }) => {
    const formattedData = formatDistance(parseISO(message.date), new Date(), { addSuffix: true })
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.text_username} >{message.username}</Text>
                <Text style={styles.text_date}>{formattedData}</Text>
            </View>
            <Text style={styles.text_content} >"{message.text}"</Text>


            <View style={styles.footer}>
                <TouchableOpacity onPress={noCare} style={styles.dislike_container}>
                    {
                        message.dislike !== 0 &&
                        (
                            <View style={styles.dislike_count_container}>
                                <Text style={styles.dislike_count_text} >{message.dislike}</Text>
                            </View>
                        )
                    }
                    <Text style={styles.dislike_text} >bana ne?</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
export default MessageCard;