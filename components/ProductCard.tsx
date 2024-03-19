import { useState }  from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { urlFor } from '../sanity';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, selectBasketItemsById, removeFromBasket } from '../features/basketSlice';

const ProductCard = ({ id, name, description, price, image }) => {
    const [isPressed, setIsPressed] = useState(false);
    const dispatch = useDispatch();
    const items = useSelector(state => selectBasketItemsById(state, id));

    const options = { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 3 }
    const formatNumber = new Intl.NumberFormat('pt-BR', options);

    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, description, price, image }))
    }

    const removeItemToBasket = () => {
        dispatch(removeFromBasket({ id }))
    }

    return (
        <>
            <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-200 ${isPressed && 'border-b-0'}`}>
                <View className="flex-row">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className="text-gray-400">{description}</Text>
                        <Text className="text-gray-400 mt-2">
                            {formatNumber.format(price)}
                        </Text>
                    </View>
                    <View>
                        <Image
                            source={{ uri: urlFor(image).url() }}
                            className="h-20 w-20 bg-gray-300 p-4"
                        />
                    </View>
                </View>
            </TouchableOpacity>
            {isPressed && (
                <View className='bg-white px-4'>
                    <View className='flex-row items-center space-x-2 pb-3'>
                        <TouchableOpacity onPress={removeItemToBasket} disabled={!items || !items?.quantity}>
                            <MinusCircleIcon 
                                color={items && items.quantity > 0 ? '#00ccbb' : 'gray'}
                                size={40}
                            />
                        </TouchableOpacity>
                        <Text>{items ? items.quantity : 0}</Text>
                        <TouchableOpacity onPress={addItemToBasket}>
                            <PlusCircleIcon
                                color={'#00ccbb'}
                                size={40}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>

    )
};

export default ProductCard;