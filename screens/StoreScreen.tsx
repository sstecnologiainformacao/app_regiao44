import React, { useLayoutEffect } from 'react';
import { ScrollView, Image, View, TouchableOpacity, Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { urlFor } from "../sanity";
import { ArrowLeftIcon, StarIcon, MapPinIcon, QuestionMarkCircleIcon, ChevronRightIcon } from 'react-native-heroicons/outline';
import ProductCard from '../components/ProductCard';

const StoreScreen = () => {
    const navigation = useNavigation();
    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            shortDescription,
            products,
            long,
            lat
        },
    } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <ScrollView>
            <View className="relative">
                <Image
                    source={{ uri: urlFor(imgUrl).url() }}
                    className="w-full h-56 bg-gray-300 p-4"
                />
                <TouchableOpacity
                    className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
                    onPress={() => navigation.goBack()}
                >
                    <ArrowLeftIcon size={20} color="#00CCBB" />
                </TouchableOpacity>
            </View>
            <View className="bg-white">
                <View className="px-4 pt-4">
                    <Text className="text-3xl font-bold">{title}</Text>
                    <View className="flex-row space-x-2 my-1">
                        <View className="flex-row items-center space-x-1">
                            <StarIcon size={22} opacity={0.5} color="#00CCBB" />
                            <Text className="text-xs text-gray-500">
                                <Text className="text-green-500">{rating}</Text> - {genre}
                            </Text>
                        </View>
                        <View className="flex-row items-center space-x-1">
                            <MapPinIcon size={22} opacity={0.4} color="gray" />
                            <Text className="text-xs text-gray-500">
                                {address}
                            </Text>
                        </View>
                    </View>

                    <Text className="text-gray-500 mt-2 pb-4">{shortDescription}</Text>
                </View>

                <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-200">
                    <QuestionMarkCircleIcon size={20} color="#00CCBB" opacity={0.6} />
                    <Text className="pl-2 flex-1 text-md font-bold">
                        Fale com o estabelecimento
                    </Text>
                    <ChevronRightIcon size={20} color="#00CCBB" />
                </TouchableOpacity>
            </View>

            <View>
                <Text className="px-4 mt-6 mb-3 font-bold text-xl">Produtos</Text>

                {products.map((product) => (
                    <ProductCard
                        key={product._id}
                        id={product._id}
                        image={product.image}
                        price={product.price}
                        description={product.short_description}
                        name={product.name}
                    />
                ))}
            </View>
        </ScrollView>
    )
}

export default StoreScreen