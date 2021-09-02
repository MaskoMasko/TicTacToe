import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { store } from "../store/store";
import { observer } from "mobx-react-lite";

export const Login = observer(({ navigation }) => {
  return (
    <View>
      <TextInput
        placeholder="player1 name"
        onSubmitEditing={(e) => {
          if (e.nativeEvent.text != "") {
            store.setPlayerOneName(e.nativeEvent.text);
            if (store.playerTwoName != "") {
              navigation.navigate("GameRoom");
            }
          }
        }}
      ></TextInput>
      <TextInput
        placeholder="player2 name"
        onSubmitEditing={(e) => {
          if (e.nativeEvent.text != "") {
            store.setPlayerTwoName(e.nativeEvent.text);
            if (store.playerOneName != "") {
              navigation.navigate("GameRoom");
            }
          }
        }}
      ></TextInput>
    </View>
  );
});
