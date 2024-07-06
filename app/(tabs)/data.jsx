import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const Data = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView>
            <Text className="text-white">Data</Text>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Data