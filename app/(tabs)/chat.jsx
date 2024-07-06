import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const Chat = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView>
            <Text>Chat</Text>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Chat