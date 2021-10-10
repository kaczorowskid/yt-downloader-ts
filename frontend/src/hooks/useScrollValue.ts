import { useContext } from "react";
import { AppContext } from "../context/AppContext/AppContext";

export const useScrollValue = () => {
    const { scrollValue, setScrollValue } = useContext(AppContext)
    return { scrollValue, setScrollValue };
}