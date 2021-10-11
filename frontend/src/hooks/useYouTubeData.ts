import { useContext } from "react";
import { AppContext } from "../context/AppContext/AppContext";

export const useYouTubeData = () => {
    const { fetchYouTybeData, setFetchYouTubeData } = useContext(AppContext);
    return { fetchYouTybeData, setFetchYouTubeData }
}