import { View, Text, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { images } from '@/constants/images'
import MaskedView from '@react-native-masked-view/masked-view' // 1. Import this

const TrendingCard = ({movie:{movie_id,title,poster_url},index}:TrendingCardProps) => {
  return (
    <Link href={`/movies/${movie_id}`} asChild>
        <TouchableOpacity className='w-32 relative pl-5'>
            <Image source={{uri:poster_url}} className='w-32 h-44 rounded-2xl'
            resizeMode='cover'/>
            <View className='absolute bottom-9 -left-3.5 px-2 py-1 eounded-full'>
<MaskedView maskElement={
    <Text className='font-bold text-white text-6xl'>{index+1}</Text>
} >
<Image source={images.rankingGradient} className='w-32 h-44 rounded-2xl'
            resizeMode='cover'/>
</MaskedView>
          </View>
          <Text className='text-sm font-bold text-light-200 mt-2'>
            {title}
          </Text>
        </TouchableOpacity>
    </Link>
  )
}

export default TrendingCard