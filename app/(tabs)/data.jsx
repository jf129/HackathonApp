import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";

const Data = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView>
            <Text className="text-secondary-100 justify-center text-center text-xl font-pextrabold">Data</Text>
            <Text className="text-white justify-center text-center text-lg font-pbold">Geospatial</Text>
            <View className="relative mt-5">
                <Image className="justify-center align-middle" source={images.geoHot} />
            </View>
            <Text className="text-white justify-center text-center text-lg font-pbold">Biodiversity Hotspots</Text>
            <View className="relative mt-5 align-middle">
                <Image className="justify-center align-middle" source={images.bioHot} />
            </View>
            <Text className="text-white justify-center text-center text-lg font-pbold">Usage Data</Text>
            <View className="relative mt-5 align-middle">
                <Image className="justify-center align-middle" source={images.usage} />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Data