import { db } from "./firebase";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export const saveChat = async (
  prompt: string,
  response: string
) => {
  await addDoc(collection(db, "chats"), {
    prompt,
    response,
    createdAt: serverTimestamp(),
  });
};