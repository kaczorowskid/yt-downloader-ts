import { useContext } from "react";
import { AppContext } from "../context/AppContext/AppContext";

export const useLeftColumn = () => useContext(AppContext);