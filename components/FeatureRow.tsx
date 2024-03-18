import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import StoreCard from "./StoreCard";

const FeatureRow = ({ title, description, id, stores }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        {stores.map((store) => (
          <StoreCard
            id={store._id}
            key={store._id}
            imgUrl={store.image}
            title={store.name}
            rating={store.rating}
            genre={store.genre}
            address={store.address}
            shortDescription={store.short_description}
            products={store.products}
            long={store.long}
            lat={store.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
