import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import StoreCard from "./StoreCard";

const FeatureRow = ({ title, description, id }) => {
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
        <StoreCard
          imgUrl="https://www.intotheminds.com/blog/app/uploads/pricing.jpg"
          title="Testing"
          rating={4.5}
          genre="Testing"
          address="Testing"
          shortDescription="Testing"
          products={[]}
          long={0}
          lat={0}
        />
        <StoreCard
          imgUrl="https://www.intotheminds.com/blog/app/uploads/pricing.jpg"
          title="Testing"
          rating={4.5}
          genre="Testing"
          address="Testing"
          shortDescription="Testing"
          products={[]}
          long={0}
          lat={0}
        />
        <StoreCard
          imgUrl="https://www.intotheminds.com/blog/app/uploads/pricing.jpg"
          title="Testing"
          rating={4.5}
          genre="Testing"
          address="Testing"
          shortDescription="Testing"
          products={[]}
          long={0}
          lat={0}
        />
        <StoreCard
          imgUrl="https://www.intotheminds.com/blog/app/uploads/pricing.jpg"
          title="Testing"
          rating={4.5}
          genre="Testing"
          address="Testing"
          shortDescription="Testing"
          products={[]}
          long={0}
          lat={0}
        />
        <StoreCard
          imgUrl="https://www.intotheminds.com/blog/app/uploads/pricing.jpg"
          title="Testing"
          rating={4.5}
          genre="Testing"
          address="Testing"
          shortDescription="Testing"
          products={[]}
          long={0}
          lat={0}
        />
        <StoreCard
          imgUrl="https://www.intotheminds.com/blog/app/uploads/pricing.jpg"
          title="Testing"
          rating={4.5}
          genre="Testing"
          address="Testing"
          shortDescription="Testing"
          products={[]}
          long={0}
          lat={0}
        />
        <StoreCard
          imgUrl="https://www.intotheminds.com/blog/app/uploads/pricing.jpg"
          title="Testing"
          rating={4.5}
          genre="Testing"
          address="Testing"
          shortDescription="Testing"
          products={[]}
          long={0}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
