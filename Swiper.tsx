import React, { Component } from "react";
import Swiper from "react-native-deck-swiper";
import { Button, StyleSheet, Text, View } from "react-native";

// demo purposes only
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

export default class Exemple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [...range(1, 50)],
      swipedAllCards: false,
      swipeDirection: "",
      cardIndex: 0,
    };
  }

  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>
          {card} - {index}
        </Text>
      </View>
    );
  };

  onSwiped = (type) => {
    console.log(`on swiped ${type}`);
    if (type === "left") {
    }
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true,
    });
  };

  swipeLeft = () => {
    this.swiper.swipeLeft();
  };

  onSwipedLeft = (index: number) => {
    let newCards = [...this.state.cards];
    newCards.splice(index, 1);
    this.setState({ cards: newCards });
  };

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          ref={(swiper) => {
            this.swiper = swiper;
          }}
          containerStyle={styles.containerSwipe}
          onSwiped={() => this.onSwiped("general")}
          onSwipedLeft={onSwipedLeft}
          onSwipedRight={() => this.onSwiped("right")}
          onSwipedTop={() => this.onSwiped("top")}
          onSwipedBottom={() => this.onSwiped("bottom")}
          onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={80}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          stackSeparation={15}
          overlayLabels={{
            bottom: {
              title: "BLEAH",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                },
              },
            },
            left: {
              title: "NOPE",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginTop: 30,
                  marginLeft: -30,
                },
              },
            },
            right: {
              title: "LIKE",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 30,
                  marginLeft: 30,
                },
              },
            },
            top: {
              title: "SUPER LIKE",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                },
              },
            },
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
        >
          <Button onPress={() => this.swiper.swipeBack()} title="Swipe Back" />
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  containerSwipe: {
    backgroundColor: "transparent",
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
    width: 300,
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent",
  },
  done: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    backgroundColor: "transparent",
  },
});
