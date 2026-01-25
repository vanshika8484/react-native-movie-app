import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, Text, View } from "react-native";
import Searchbutton from "@/components/searchbutton";
import { useRouter } from "expo-router";

export default function Index() {
  const router=useRouter();
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="w-full absolute z-0"/>
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10, minHeight:"100%"}}>
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
      <View className="flex-1 mt-5">
        <Searchbutton onPress={()=>router.push("/search")}
          placeholder="Search for a movie"/>
\      </View>
      </ScrollView>
      </View>
  );
}
