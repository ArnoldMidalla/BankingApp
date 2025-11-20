import { Link } from "expo-router";
import { Bell, Eye, EyeOff } from "lucide-react-native";
import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CardsLoop from "../components/cardsLoop";

const cardDetails = [
  {
    id: 1,
    card_name: "Travel Explorer Elite",
    issuer: "Global Bank",
    network: "Visa",
    card_number: 4123456789012345,
    annual_fee: 95,
    reward_rate: "3x points on travel/dining, 1x on all other",
    credit_limit: 15000,
    intro_offer_months: 12,
  },
  {
    id: 2,
    card_name: "Cash Back Everyday",
    issuer: "Local Credit Union",
    network: "Mastercard",
    card_number: 5123456789012345,
    annual_fee: 0,
    reward_rate: "1.5% cash back on all purchases",
    credit_limit: 5000,
    intro_offer_months: 15,
  },
  {
    id: 3,
    card_name: "Business Rewards Platinum",
    issuer: "National Finance Co.",
    network: "American Express",
    card_number: 341234567890123,
    annual_fee: 250,
    reward_rate: "5x points on office supplies/telecom, 1x on all other",
    credit_limit: 30000,
    intro_offer_months: 6,
  },
];

const index = () => {
  const [see, setSee] = useState(true);

  return (
    <SafeAreaView className="flex-1 px-6 bg-primary mt-12">
      
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-2xl font-dmsansExtra tracking-tight">
              Good morning, Terry
            </Text>
            <Text className="font-dmsansMedium text-black/70">
              Welcome to Neobank
            </Text>
          </View>
          {/* <View className="p-2 border border-1 rounded-lg flex items-center justify-center"> */}
          <Bell />
          {/* </View> */}
        </View>
        <View className="bg-white p-6 rounded-3xl mt-8 flex-col gap-2">
          <Text className="font-dmsansMedium opacity-80">Your balance</Text>
          <View className=" flex-row justify-between items-center">
            <Text className="font-dmsansExtra text-4xl">
              {see ? "$3,200.00" : "******"}
            </Text>
            <TouchableOpacity onPress={() => setSee(!see)}>
              {see ? (
                <EyeOff size={20} strokeWidth={1.9} className="opacity-80" />
              ) : (
                <Eye size={20} strokeWidth={1.9} className="opacity-80" />
              )}
            </TouchableOpacity>
          </View>
          <Link href={"/transfer"} asChild>
            <TouchableOpacity className="bg-black py-4 rounded-full">
              <Text className="text-white font-dmsansBold text-center text-lg">
                Add money
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
        <View>
          <View className="flex-row justify-between">
            <Text>Your cards</Text>
            <Text>+ New card</Text>
          </View>
          <FlatList
            data={cardDetails}
            renderItem={({ item }) => (
              <CardsLoop card_number={item.card_number} />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal= {true}
          />
        </View>
    </SafeAreaView>
  );
};

export default index;
