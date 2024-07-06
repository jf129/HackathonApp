import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";

const Chat = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      {/* Allow user to scroll chats */}
        <ScrollView>
          <Text className="text-secondary-100 justify-center text-center text-xl font-pextrabold">Chat</Text>
          <Image className="justify-center align-middle" source={images.chatimg} />
        </ScrollView>
    </SafeAreaView>
  )
}

export default Chat