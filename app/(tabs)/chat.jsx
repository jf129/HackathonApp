import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const Chat = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView>
        <Text className="text-white justify-center text-center text-xl font-pextrabold">Chat</Text>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Chat