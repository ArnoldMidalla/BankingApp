import React, { useState } from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";

const maskNumber = (num: any) => {
  const last4 = num.slice(-4);
  const masked = "*".repeat(num.length - 4);
  return masked + last4;
};

const [isMasked, setIsMasked] = useState(true);
const CardsLoop = ({ card_number }: { card_number: any }) => {
  return (
    <View className="h-40 rounded-2xl">
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        className="object-cover absolute"
      />
      <TouchableOpacity onPress={() => setIsMasked(!isMasked)}>
        <Text>{isMasked ? maskNumber(card_number) : card_number}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardsLoop;
