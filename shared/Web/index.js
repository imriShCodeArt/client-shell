import { useContext } from "react";
import Context from "./Context";

export { default } from "./WebLayout";

export function useThemeContext() {
  return useContext(Context);
}
