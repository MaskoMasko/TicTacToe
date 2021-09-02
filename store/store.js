import { types } from "mobx-state-tree";

const Store = types
  .model({
    playerOneName: "",
    playerTwoName: "",
    polja: types.array(types.string),
  })
  .actions((self) => {
    return {
      setPlayerOneName(name) {
        self.playerOneName = name;
      },
      setPlayerTwoName(name) {
        self.playerTwoName = name;
      },
      setPoljeToX(id) {
        self.polja[id] = "X";
      },
      setPoljeToO(id) {
        self.polja[id] = "O";
      },
    };
  });

export const store = Store.create({
  polja: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
});
