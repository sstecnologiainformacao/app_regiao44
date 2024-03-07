import React from "react";
import { ScrollView, View } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <CategoryCard
        imgUrl="https://www.intotheminds.com/blog/app/uploads/pricing.jpg"
        title="Category"
      />
      <CategoryCard
        imgUrl="https://www.intotheminds.com/blog/app/uploads/pricing.jpg"
        title="Category"
      />
      <CategoryCard
        imgUrl="https://www.intotheminds.com/blog/app/uploads/pricing.jpg"
        title="Category"
      />
      <CategoryCard
        imgUrl="https://www.intotheminds.com/blog/app/uploads/pricing.jpg"
        title="Category"
      />
      <CategoryCard
        imgUrl="https://www.intotheminds.com/blog/app/uploads/pricing.jpg"
        title="Category"
      />
      <CategoryCard
        imgUrl="https://www.intotheminds.com/blog/app/uploads/pricing.jpg"
        title="Category"
      />
      <CategoryCard
        imgUrl="https://www.intotheminds.com/blog/app/uploads/pricing.jpg"
        title="Category"
      />
    </ScrollView>
  );
};

export default Categories;
