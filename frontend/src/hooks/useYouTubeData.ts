import { useContext } from "react";
import { AppContext } from "../context/AppContext/AppContext";

export const useYouTubeData = () => {
    const { fetchYouTubeData, setFetchYouTubeData } = useContext(AppContext);
    return { fetchYouTubeData, setFetchYouTubeData }
}