import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

const CategoryCard = ({ imgUrl, title, index }) => {
  // create a code to select a random color to the tailwindcss class
  const colors = [
    "bg-red-400",
    "bg-yellow-400",
    "bg-green-400",
    "bg-blue-400",
    "bg-indigo-400",
    "bg-purple-400",
    "bg-orange-400",
  ];

  const indexToUse = index > colors.length - 1 ? index - colors.length : index;

  const randomColor = colors[indexToUse];

  return (
    <TouchableOpacity className={`relative mr-2 mr ${randomColor}`}>
      <Image className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
