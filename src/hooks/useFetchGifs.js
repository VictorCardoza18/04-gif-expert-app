import { useState, useEffect } from "react";
import { GetGifs } from "../helpers/GetGifs";

export const useFetchGifs = (categoria) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    GetGifs(categoria).then((gifs) => {
      setstate({ data: gifs, loading: false });
    });
  }, [categoria]);

  return state; // { data[], loading: true }
};
