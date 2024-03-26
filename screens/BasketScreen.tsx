import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectStores } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';
import { XCircleIcon } from 'react-native-heroicons/outline';
import BasketStore from '../components/BasketStore';

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
                <BasketStore
                    store={store}
                    key={store.id}
                />
            ))}
        </SafeAreaView>
    )
}

export default BasketScreen