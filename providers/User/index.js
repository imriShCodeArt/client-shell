import { useContext } from "react";
import Context from "./Context";

export { default } from "./User";

export function useUserContext() {
  return useContext(Context);
}
