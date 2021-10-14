import { useContext } from "react";
import { AppContext } from "../context/AppContext/AppContext";

export const useCurrentFolder = () => {
    const { currentlyFolderView, setCurentlyFolderViev } = useContext(AppContext);
    return { currentlyFolderView, setCurentlyFolderViev }
}