import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import CategoryCard from "./CategoryCard";
import sanityClient from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == 'category'] `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {categories.map((category, index) => (
        <CategoryCard
          key={category._id}
          title={category.title}
          index={index}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
