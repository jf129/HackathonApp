import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const News = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      {/* Allow to user to scroll news */}
        <ScrollView>
          <Text className="text-secondary-100 justify-center text-center text-xl font-pextrabold">News</Text>
        </ScrollView>
    </SafeAreaView>
  )
}

export default News