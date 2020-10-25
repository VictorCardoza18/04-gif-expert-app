import React from "react";

export const GifGrid = ({ categoria }) => {
  const GetGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=Goku+and+Vegeta&limit=10&api_key=M1Jbawg51O4AXWipNcgsw1MQuI48NecD";
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    console.log(gifs);
  };

  GetGifs();

  return <h3>{categoria}</h3>;
};
