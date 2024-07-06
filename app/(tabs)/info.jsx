import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const Info = () => {
  return (
    <SafeAreaView className="bg-primary h-full"> 
    {/* Allow the user to scroll information */}
        <ScrollView>
          {/* Title of page */}
            <Text className="text-secondary-100 justify-center text-center text-xl font-pextrabold">Info</Text>
            <View className="bg-secondary rounded-lg top-5">
              {/* Title of section */}
              <Text className="text-white justify-center text-center text-lg font-pbold">Developments</Text>
              {/* Information about developments*/}
              <Text className="text-white justify-center text-left text-sm font-pregular ">Offshore wind farms are becoming a crucial part of renewable energy strategies. These wind farms are located in oceans or seas, where winds are stronger and more consistent than on land. New technology has led to stronger and more efficient wind turbines, which can generate large amounts of electricity. Some turbines are now designed to float, allowing them to be placed in deeper waters, further from shore. Improved subsea cabling and better grid connections mean electricity from these wind farms can be reliably transmitted to where it's needed. Efforts are also being made to ensure these developments are environmentally friendly and sustainable. As a result, offshore wind farms are set to significantly contribute to reducing carbon emissions and meeting energy demands.</Text>
            </View>
            <View className="bg-secondary rounded-lg ">
              {/* Title of section */}
              <Text className="text-white justify-center text-center text-lg font-pbold">Environmental Impact</Text>
              {/* Information aboutenvironmental impact */}
              <Text className="text-white justify-center text-center text-sm font-pregular">Offshore wind farms have a range of environmental impacts. On the positive side, they produce clean, renewable energy, significantly reducing carbon emissions compared to fossil fuels. However, their construction and operation can affect marine life. The installation of turbines, especially if piled into the seabed, can disturb habitats and create noise that impacts marine mammals and fish. There is also potential for bird and bat collisions with turbine blades. However, careful site selection and ongoing monitoring can mitigate these risks. Artificial reef effects can sometimes occur, where marine life benefits from the structures.</Text>
            </View>

            <View className="bg-secondary rounded-lg">
              {/* Title of section */}
              <Text className="text-white justify-center text-center text-lg font-pbold">Location Based</Text>
              {/* Information specifific to where the user lives */}
              {/* In future we would get location data from the user to be able to feed them data specifically relvant to where they live*/}
              <Text className="text-white justify-center text-center text-sm font-pregular">In Scotland, offshore wind farms are strategically placed in areas with strong winds, like the North Sea. Technological advances, including floating turbines, have expanded their reach to deeper waters. Enhanced subsea cabling ensures efficient power transmission to the grid. Environmentally, these wind farms significantly cut carbon emissions, offering a clean energy source. However, their construction can disturb marine habitats and create noise affecting marine life. Bird collisions with turbines are also a concern. Careful site selection and monitoring help mitigate these impacts. Despite some environmental challenges, the benefits of reducing fossil fuel reliance and lowering greenhouse gas emissions are substantial for Scotland.</Text>
            </View>

        </ScrollView>
    </SafeAreaView>
  )
}

export default Info