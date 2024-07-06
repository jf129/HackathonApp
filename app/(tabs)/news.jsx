import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";

const News = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      {/* Allow to user to scroll news */}
        <ScrollView>
        <Text className="text-secondary-100 justify-center text-center text-xl font-pextrabold">News</Text>
            <View className="relative mt-5">
                <Image className="justify-center align-middle" source={images.news1} />
                <Text className="text-white justify-center text-center text-lg font-pbold">Acteon to create Kilcardine digital twin</Text>
                <Text className="text-white justify-center text-left text-sm font-pregular ">Acteon has been commissioned to create a digital twin of the 50MW Kiincardine offshore wind farm that will help optimise future imspection and surcey activities</Text>
            </View>
            <View className="relative mt-5 align-middle">
                <Image className="justify-center align-middle" source={images.news2} />
                <Text className="text-white justify-center text-center text-lg font-pbold">Moray West offshore wind farm delivers first power</Text>
                <Text className="text-white justify-center text-left text-sm font-pregular ">Ocean Winds has delivered first power from its 882MW Moray West offshore wind farm</Text>
            </View>
            <View className="relative mt-5 align-middle">
                <Image className="justify-center align-middle" source={images.news3} />
                <Text className="text-white justify-center text-center text-lg font-pbold">The Scottish tech firm developiing fully automated offshore search and rescue</Text>
                <Text className="text-white justify-center text-left text-sm font-pregular ">Scottish Technology firm Zelim has a simple mission statement at its heart, to "make unmanned search and rescue the  industry standard".</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default News