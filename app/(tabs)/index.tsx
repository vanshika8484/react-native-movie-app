import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";
import Searchbutton from "@/components/searchbutton";
import { useRouter } from "expo-router";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import MovieCard from "@/components/MovieCard";
import { getTrendingMovies } from "@/services/appwrite";
import TrendingCard from "@/components/TrendingCard";

export default function Index() {
  const router=useRouter();
  const {
    data:trendingMovies,
    loading:trendingLoading,
    error:trendingError
  }=useFetch(()=>getTrendingMovies())
  const {data:movies,loading:moviesLoading,error:moviesError}=useFetch(()=>fetchMovies({
    query:""
  }))
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="w-full absolute z-0"/>
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10, minHeight:"100%"}}>
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        {
          trendingLoading?(
            <ActivityIndicator 
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
            />
          ):trendingError||moviesError?(
            <Text>Error:{moviesError||trendingError}</Text>
          ):(
            <View className="flex-1 mt-5">
        <Searchbutton onPress={()=>router.push("/search")}
          placeholder="Search for a movie"/>
          {
            trendingMovies &&(
              <View className="mt-10">

                <Text className="text-lg text-white font-bold mb-3">Trending Movies</Text>
                <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={()=>(
                  <View className="w-4"/>
                )}
                className="mb-4 mt-3" 
                data={trendingMovies}
                 renderItem={({item,index})=>(
<TrendingCard movie={item} index={index}/>                )}
                keyExtractor={(item)=>item.movie_id.toString()}
                />
                </View>
            )
          }
          <>
          <Text className="text-white text-2xl font-bold mt-5 mb-3">Latest Movies</Text>
          <FlatList
          data={movies}
          renderItem={({item})=>(
             <MovieCard {...item}/>
          )}
          keyExtractor={(item)=>item.id.toString()}
          numColumns={3}
          columnWrapperClassName="justify-between"
          />
          </>
     </View>
          )
        }
      
      </ScrollView>
      </View>
  );
}
