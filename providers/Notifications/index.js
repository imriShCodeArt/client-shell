import { useContext } from "react";
import Context from "./Context";

export { default } from "./Notifications";

export function useNotificationsContext() {
  return useContext(Context);
}
