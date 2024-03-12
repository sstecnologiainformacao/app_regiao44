import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient.fetch(`
    *[_type == 'featured'] {
      ...,
      stores[]->{
        ...,
        array[]->{
          ...
        }
      }
    }`).then((data) => {
      setFeaturedCategories(data);
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-14">
      <View>
        <View className="flex-row pb-3 items-center mx-2 space-x-2">
          <Image
            source={require("./../assets/icon.png")}
            className="h-7 w-7 bg-gray-300 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Região 44</Text>
            <Text className="font-bold text-xl">
              Seja bem-vindo
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>

        <View className="flex-row items-center space-x-2 pb-2 mx-2">
          <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon color="gray" size={20} />
            <TextInput
              placeholder="O que você gostaria de encontrar?"
              keyboardType="default"
              className="flex-1 text-gray-500"
            />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>
        <ScrollView
          className="bg-gray-100"
          contentContainerStyle={{
            paddingBottom: 250,
          }}
        >
          <Categories />

          {featuredCategories?.map((category) => (
            <FeatureRow
              title={category.name}
              description={category.short_description}
              id={category._id}
              key={category._id}
              stores={category.stores}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
