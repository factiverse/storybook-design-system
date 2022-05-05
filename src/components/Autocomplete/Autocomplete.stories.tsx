import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import Autocomplete from './Autocomplete';


export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  argTypes: {
    fullWidth: {
        control: { type: 'boolean' },
    },
  },
} as Meta;


export const Default = () => {
//   const [value, setValue] = useState('');

  return (
    <Autocomplete data={data} id={"icon-test"} fullWidth
      // width='400px'
    //   value={value}
    //   onChange={e => setValue(e.currentTarget.value)}
    />
  );
}

const data = [
    // { title: 'The Shawshank Redemption', year: 1994 },
    // { title: 'The Godfather', year: 1972 },
    // { title: 'The Godfather: Part II', year: 1974 },
    // { title: 'The Dark Knight', year: 2008 },

    {title:'Russia has no plans to occupy Ukraine.', year: 2022},
    {title:'There are U.S. biolabs in Ukraine funded by the U.S. government.', year: 2022},
    {title:'Putin beheaded bioweapons engineers in Ukraine', year: 2022},
    {title:'Will Smith slapped Chris Rock to take focus away from Ukraine', year: 2022},
    {title:'Ethnic Russians face genocide perpetrated by the Kyiv regime.', year: 2022},
    {title:'Actor Steven Seagal spotted among Russian special forces in Ukraine.', year: 2022},
    {title:'NATO is violating an agreement to not expand eastwards.', year: 2022},
    {title:'An American was killed in Ukraine by a mine planted by Russian backed seperatists.', year: 2022},
    {title:'Putin warned India to not interfere in Ukraine.', year: 2022},
    {title:'13 border guards stationed on Snake Island have been killed.', year: 2022},
    {title:'Ukraine is not a legitimate nation', year: 2022},
    {title:'Russia and Ukraine have a common heritage.', year: 2022},
    // 'Civilian deaths in Ukraine have plummeted since 2014.',
    {title:'Ukraine possesses weapons of mass destruction.', year: 2022},
    {title:'The Ghost of Kyiv has shot down 10 Russian fighter jets.', year: 2022},
    {title:'The Ukrainian army is pushing back the Russians.', year: 2022},
    // { title: 'The Matrix', year: 1999 },
    // { title: 'Seven Samurai', year: 1954 },
    // {
    //   title: 'Star Wars: Episode IV - A New Hope',
    //   year: 1977,
    // },
    // { title: 'City of God', year: 2002 },
    // { title: 'Se7en', year: 1995 },
    // { title: 'The Silence of the Lambs', year: 1991 },
    // { title: "It's a Wonderful Life", year: 1946 },
    // { title: 'Life Is Beautiful', year: 1997 },
    // { title: 'The Usual Suspects', year: 1995 },
    // { title: 'Léon: The Professional', year: 1994 },
    // { title: 'Spirited Away', year: 2001 },
    // { title: 'Saving Private Ryan', year: 1998 },
    // { title: 'Once Upon a Time in the West', year: 1968 },
    // { title: 'American History X', year: 1998 },
    // { title: 'Interstellar', year: 2014 },
    // { title: 'Casablanca', year: 1942 },
    // { title: 'City Lights', year: 1931 },
    // { title: 'Psycho', year: 1960 },
    // { title: 'The Green Mile', year: 1999 },
    // { title: 'The Intouchables', year: 2011 },
    // { title: 'Modern Times', year: 1936 },
    // { title: 'Raiders of the Lost Ark', year: 1981 },
    // { title: 'Rear Window', year: 1954 },
    // { title: 'The Pianist', year: 2002 },
    // { title: 'The Departed', year: 2006 },
    // { title: 'Terminator 2: Judgment Day', year: 1991 },
    // { title: 'Back to the Future', year: 1985 },
    // { title: 'Whiplash', year: 2014 },
    // { title: 'Gladiator', year: 2000 },
    // { title: 'Memento', year: 2000 },
    // { title: 'The Prestige', year: 2006 },
    // { title: 'The Lion King', year: 1994 },
    // { title: 'Apocalypse Now', year: 1979 },
    // { title: 'Alien', year: 1979 },
    // { title: 'Sunset Boulevard', year: 1950 },
    // {
    //   title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    //   year: 1964,
    // },
    // { title: 'The Great Dictator', year: 1940 },
    // { title: 'Cinema Paradiso', year: 1988 },
    // { title: 'The Lives of Others', year: 2006 },
    // { title: 'Grave of the Fireflies', year: 1988 },
    // { title: 'Paths of Glory', year: 1957 },
    // { title: 'Django Unchained', year: 2012 },
    // { title: 'The Shining', year: 1980 },
    // { title: 'WALL·E', year: 2008 },
    // { title: 'American Beauty', year: 1999 },
    // { title: 'The Dark Knight Rises', year: 2012 },
    // { title: 'Princess Mononoke', year: 1997 },
    // { title: 'Aliens', year: 1986 },
    // { title: 'Oldboy', year: 2003 },
    // { title: 'Once Upon a Time in America', year: 1984 },
    // { title: 'Witness for the Prosecution', year: 1957 },
    // { title: 'Das Boot', year: 1981 },
    // { title: 'Citizen Kane', year: 1941 },
    // { title: 'North by Northwest', year: 1959 },
    // { title: 'Vertigo', year: 1958 },
    // {
    //   title: 'Star Wars: Episode VI - Return of the Jedi',
    //   year: 1983,
    // },
    // { title: 'Reservoir Dogs', year: 1992 },
    // { title: 'Braveheart', year: 1995 },
    // { title: 'M', year: 1931 },
    // { title: 'Requiem for a Dream', year: 2000 },
    // { title: 'Amélie', year: 2001 },
    // { title: 'A Clockwork Orange', year: 1971 },
    // { title: 'Like Stars on Earth', year: 2007 },
    // { title: 'Taxi Driver', year: 1976 },
    // { title: 'Lawrence of Arabia', year: 1962 },
    // { title: 'Double Indemnity', year: 1944 },
    // {
    //   title: 'Eternal Sunshine of the Spotless Mind',
    //   year: 2004,
    // },
    // { title: 'Amadeus', year: 1984 },
    // { title: 'To Kill a Mockingbird', year: 1962 },
    // { title: 'Toy Story 3', year: 2010 },
    // { title: 'Logan', year: 2017 },
    // { title: 'Full Metal Jacket', year: 1987 },
    // { title: 'Dangal', year: 2016 },
    // { title: 'The Sting', year: 1973 },
    // { title: '2001: A Space Odyssey', year: 1968 },
    // { title: "Singin' in the Rain", year: 1952 },
    // { title: 'Toy Story', year: 1995 },
    // { title: 'Bicycle Thieves', year: 1948 },
    // { title: 'The Kid', year: 1921 },
    // { title: 'Inglourious Basterds', year: 2009 },
    // { title: 'Snatch', year: 2000 },
    // { title: '3 Idiots', year: 2009 },
    // { title: 'Monty Python and the Holy Grail', year: 1975 },
  ];