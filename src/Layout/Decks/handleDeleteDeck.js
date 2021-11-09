import { deleteDeck } from "../../utils/api";

export default function handleDeleteDeck(id) {
    let result = window.confirm(
    "Delete this deck? You will not be able to recover it"
  );
  if (result) {
    deleteDeck(id);
  }
}
