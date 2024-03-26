import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

import { removeFromBasket, selectBasketByStore } from '../features/basketSlice';
import { useSelector, useDispatch } from 'react-redux';
import { urlFor } from '../sanity';

const BasketStore = ({ store }) => {
    const items = useSelector(state => selectBasketByStore(state, store.id));
    const dispatch = useDispatch();

    const options = { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 3 }
    const formatNumber = new Intl.NumberFormat('pt-BR', options);

    return (
        <>
            <View className='flex-1 bg-gray-100' key={store.id}>
                <View className='p-5 border-t border-[#00CCBB] bg-white shadow-xs'>
                    <View>
                        <Text className='text-center text-gray-400'>{store.name}</Text>
                    </View>
                </View>
                <ScrollView className='divide-y divide-gray-200'>
                    {items.map(item => (
                        <View key={item.id} className='flex-row items-center space-x-6 py-2 bg-white px-5'>
                            <Text className='text-[#00CCBB]'>{item.quantity}X</Text>
                            <Image
                                source={{ uri: urlFor(item.image).url() }}
                                className="h-12 w-12 rounded-full"
                            />
                            <Text className="text-gray-600">
                                {formatNumber.format(item.price)}
                            </Text>
                            <TouchableOpacity>
                                <Text
                                    className="text-[#00CCBB] text-xs"
                                    onPress={() => { dispatch(removeFromBasket({ id: item.id, storeId: item.storeId })) }}
                                >
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>

        </>
    )
};

export default BasketStore;
