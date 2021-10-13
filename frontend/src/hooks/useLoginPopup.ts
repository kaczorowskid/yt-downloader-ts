import { useContext } from "react";
import { AppContext } from "../context/AppContext/AppContext";

export const useLoginPopup = () => {
    const { loginPopupVisible, setLoginPopupVisible } = useContext(AppContext);
    return { loginPopupVisible, setLoginPopupVisible }
}