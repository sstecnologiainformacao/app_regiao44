import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectStores } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';
import { XCircleIcon } from 'react-native-heroicons/outline';

const BasketScreen = () => {
    const stores = useSelector(state => selectStores(state));
    const navegation = useNavigation();

    return (
        <SafeAreaView className='top-16 flex-1 bg-white'>
            <View className="flex-row items-center space-x-2 p-4 border-b border-[#00CCBB] bg-white shadow-xs">
                <Text className='text-lg font-bold pl-2 flex-1'>Carrinho</Text>
                <TouchableOpacity
                    onPress={() => navegation.goBack()}
                    className='rounded-full bg-white'
                >
                    <XCircleIcon size={50} width={50} color="#00CCBB" />
                </TouchableOpacity>
            </View>
            {stores.map(store => (
                <View className='flex-1 bg-gray-100'>
                    <View className='p-5 border-t border-[#00CCBB] bg-white shadow-xs'>
                        <View>
                            <Text className='text-center text-gray-400'> {store.name}</Text>
                        </View>
                    </View>
                </View>
            ))}
        </SafeAreaView>
    )
}

export default BasketScreen