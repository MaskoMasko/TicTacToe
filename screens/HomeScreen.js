import React, { useState } from "react";
import { store } from "../store/store";
import { View, Text, Modal, TextInput, TouchableOpacity } from "react-native";

export function HomeScreen() {
  const [movesCoutner, setMovesCoutner] = useState(0);
  let playerOneMoves = 5;
  let playerTwoMoves = 4;
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>
        {store.playerOneName}
      </Text>
      <Text style={{ fontSize: 38, fontWeight: "bold" }}>VS</Text>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>
        {store.playerTwoName}
      </Text>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {store.polja.map((polje, id) => {
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                if (movesCoutner < 9) {
                  setMovesCoutner((oldCoutner) => (oldCoutner += 1));
                  if (movesCoutner % 2 == 0) {
                    store.setPoljeToX(id);
                  } else {
                    store.setPoljeToO(id);
                  }
                }
                //ovo dela samo moran nap global state a ne tako
                console.log(store.polja);
              }}
              key={id}
              style={{
                backgroundColor: "red",
                width: 120,
                height: 120,
                margin: 5,
              }}
            >
              <Text>{polje}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
