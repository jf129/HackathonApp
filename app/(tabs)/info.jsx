import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const Info = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView>
            <Text className="text-white">info</Text>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Info