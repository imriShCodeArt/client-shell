import { useContext } from "react";
import Context from "./Context";

export { default } from "./Messeges";

export function useMessegesContext() {
  return useContext(Context);
}
