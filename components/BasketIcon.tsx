import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectBasketQuantity, selectBasketTotal } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';

const BasketIcon = ({ storeId }) => {
    const basketQuantity = useSelector(state => selectBasketQuantity(state));
    const navegation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);

    const options = { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 3 }
    const formatNumber = new Intl.NumberFormat('pt-BR', options);

    if (basketQuantity === 0) {
        return null;
    }

    return (
        <View className='absolute bottom-10 w-full z-50'>
            <TouchableOpacity
                onPress={() => navegation.navigate('Basket', { storeId })}
                className='mx-5 bg-[#00ccbb] p-4 rounded-lg flex-row items-center space-x-1'
            >
                <Text className='text-white font-extrabold text-lg bg-[#02A296] py-1 px-2'>
                    {basketQuantity}
                </Text>
                <Text className='flex-1 text-white font-extrabold text-lg text-center'>Seu Carrinho</Text>
                <Text className='text-lg text-white font-extrabold'>
                    {formatNumber.format(basketTotal)}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon;