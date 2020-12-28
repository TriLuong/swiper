import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Swiper from "./Swiper";
const CARDS = [
  { name: "1", image: "https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif" },
  { name: "2", image: "https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif" },
  { name: "3", image: "https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif" },
  { name: "4", image: "https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif" },
  { name: "5", image: "https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif" },
  { name: "6", image: "https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif" },
  { name: "7", image: "https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif" },
  { name: "8", image: "https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif" },
  {
    name: "9",
    image: "https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif",
  },
];

// demo purposes only
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

export default function App() {
  const [cards, setCards] = useState(CARDS);
  const renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{ uri: card.image }} />
        <Text style={styles.text}>This is card {card.name}</Text>
      </View>
    );
  };

  const onSwipedLeft = (index: number) => {
    console.log("onSwipedLeft", index);
    const newCards = [...cards];
    newCards.splice(index, 1);
    console.log("onSwipedLeft newCards", newCards);

    setCards(newCards);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Swiper
        cards={cards}
        renderCard={renderCard}
        infinite
        onSwipedLeft={onSwipedLeft}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
