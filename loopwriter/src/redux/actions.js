export function createCard(newCard) {
  return {
    type: "ADD_CARD",
    value: newCard
  };
}
