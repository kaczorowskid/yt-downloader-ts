import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext/CurrentUserContext";

export const useCurrentUser = () => useContext(CurrentUserContext);