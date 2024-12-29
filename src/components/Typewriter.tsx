import { useEffect, useRef, useState } from "react";
import { Typewriter as TW, useTypewriter } from "react-simple-typewriter";

interface TypewriterProps {
  onClick: (movie: string) => void;
}

export const Typewriter = ({ onClick }: TypewriterProps) => {
  const randomStartIndex = useRef(Math.floor(Math.random() * movies.length));
  const slicedMovies = movies.slice(randomStartIndex.current);
  const [movie, setMovie] = useState(slicedMovies[0]);
  const [text, { isDelay }] = useTypewriter({
    words: slicedMovies,
    loop: slicedMovies.length,
    typeSpeed: 50,
    delaySpeed: 2500,
  });

  useEffect(() => {
    if (isDelay) {
      setMovie(text);
    }
  }, [isDelay, text]);

  const handleClick = () => {
    onClick(movie);
  };

  return (
    <p
      className={`text-3xl ${isDelay && "hover:cursor-pointer"}`}
      onClick={handleClick}
    >
      {text}
      <TW
        words={[]}
        loop={0}
        cursor
        cursorStyle="_"
        typeSpeed={50}
        delaySpeed={2000}
      />
    </p>
  );
};

const movies = [
  "Conclave",
  "Barbie",
  "The Super Mario Bros. Movie",
  "Oppenheimer",
  "Spider-Man: Across the Spider-Verse",
  "Guardians of the Galaxy Vol. 3",
  "The Little Mermaid",
  "Fast X",
  "Mission: Impossible - Dead Reckoning Part One",
  "Elemental",
  "John Wick: Chapter 4",
  "Ant-Man and the Wasp: Quantumania",
  "Sound of Freedom",
  "Transformers: Rise of the Beasts",
  "Wonka",
  "The Hunger Games: The Ballad of Songbirds & Snakes",
  "Indiana Jones and the Dial of Destiny",
  "Five Nights at Freddy's",
  "Creed III",
  "The Flash",
  "Meg 2: The Trench",
  "Blue Beetle",
  "Trolls Band Together",
  "The Equalizer 3",
  "Killers of the Flower Moon",
  "Cocaine Bear",
  "Shazam! Fury of the Gods",
  "Gran Turismo",
  "PAW Patrol: The Mighty Movie",
  "The Marvels",
  "No Hard Feelings",
  "Wish",
  "The Nun II",
  "Scream VI",
  "Napoleon",
  "The Boy and the Heron",
  "My Big Fat Greek Wedding 3",
  "A Haunting in Venice",
  "Air",
  "Dumb Money",
  "The Exorcist: Believer",
  "Ruby Gillman, Teenage Kraken",
  "Migration",
  "Strays",
  "The Color Purple",
  "Thanksgiving",
  "Anyone But You",
  "The Creator",
  "The Machine",
  "Renfield",
  "Inside Out 2",
  "Deadpool & Wolverine",
  "Despicable Me 4",
  "Wicked",
  "Moana 2",
  "Dune: Part Two",
  "Gladiator II",
  "Beetlejuice Beetlejuice",
  "Twisters",
  "Godzilla x Kong: The New Empire",
  "Kung Fu Panda 4",
  "Venom: The Last Dance",
  "Bad Boys: Ride or Die",
  "Kingdom of the Planet of the Apes",
  "A Quiet Place: Day One",
  "Civil War",
  "Ghostbusters: Frozen Empire",
  "The Garfield Movie",
  "IF",
  "The Fall Guy",
  "Challengers",
  "Furiosa: A Mad Max Saga",
  "Longlegs",
  "Kraven the Hunter",
  "The Lord of the Rings: The War of the Rohirrim",
  "Mufasa: The Lion King",
  "Sonic the Hedgehog 3",
  "Paddington in Peru",
  "Heretic",
  "The Best Christmas Pageant Ever",
  "Anora",
  "Alien: Romulus",
  "It Ends with Us",
  "The Brutalist",
  "The Substance",
  "The Zone of Interest",
  "The Criminals",
  "Priscilla",
  "Origin",
  "Back to Black",
  "Wicked Little Letters",
  "The Iron Claw",
  "Poor Things",
  "American Fiction",
  "The Holdovers",
  "Saltburn",
  "Past Lives",
  "The Color Purple",
  "Anyone But You",
];
