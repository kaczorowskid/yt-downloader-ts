import { useContext } from "react";
import { AppContext } from "../context/AppContext/AppContext";

export const useLeftColumn = () => {
    const { leftColumnVisible, setLeftColumnVisible } = useContext(AppContext);
    return { leftColumnVisible, setLeftColumnVisible }
}