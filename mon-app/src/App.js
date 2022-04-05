import "./App.css";
import React, { useState } from "react";
import MovieList from "./compo/MovieList";
import MovieAdd from "./compo/MovieAdd";

const App = () => {
  const [films, setFilms] = useState([
    {
      title: "Joker",
      description:
        "Joker est un thriller psychologique américain, coécrit et réalisé par Todd Phillips, sorti en 2019. ... Il raconte, dans une histoire originale, la transformation d'Arthur Fleck en Joker, un dangereux tueur psychopathe qui deviendra, par la suite, le plus grand ennemi de Batman.",
      posterURL:
        "https://fr.web.img6.acsta.net/pictures/19/09/03/12/02/4765874.jpg",
      rate: 4,
      pathtrail:"https://www.youtube.com/embed/zAGVQLHvwOY",
    },
    {
      title: "The Dark Knight",
      description:
        "A billionaire socialite who, after witnessing his parents' death in a mugging at age 8, travels the world for seven years before returning home to operate as a bat-masked vigilante hailed as Gotham City's Dark Knight, using fear against the city's criminal underworld at night.",
      posterURL:
        "https://images-na.ssl-images-amazon.com/images/I/91KkWf50SoL._AC_SL1500_.jpg",
      rate: 2,
      pathtrail:"https://www.youtube.com/embed/IJ0l_tN6KN0",
    },
    {
      title: "The Revenant",
      description:
        "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team. While exploring uncharted wilderness in 1823, legendary frontiersman Hugh Glass sustains injuries from a brutal bear attack.",
      posterURL:
        "https://resize-elle.ladmedia.fr/r/625,,forcex/crop/625,804,center-middle,forcex,ffffff/img/var/plain_site/storage/images/loisirs/cinema/news/j-y-vais-j-y-vais-pas/the-revenant-la-vengeance-animale-de-leonardo-dicaprio-3047311/61177183-1-fre-FR/The-Revenant-la-vengeance-animale-de-Leonardo-DiCaprio.jpg",
      rate: 3,
      pathtrail:"https://www.youtube.com/embed/QRfj1VCg16Y",

    },
  ]);
  //  fonction aspiratoire du child vers parent : tetb3ath en tq props lel child elle va apporter les donnees qu'elle a besoin et rend lel parent

  const add = (newMovie) => {
    setFilms([...films, newMovie]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <MovieList films={films} />
        <MovieAdd add={add} />
      </header>
    </div>
  );
};

export default App;
