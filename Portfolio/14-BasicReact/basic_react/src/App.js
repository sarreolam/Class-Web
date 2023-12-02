
import { useState } from 'react';
import './App.css';
import Poster from './components/poster';
import thePhanthoMenace from './resourses/SW1-The_phantom_menace.jpg'
import attackOfTheClones from './resourses/SW2-Attack_of_the_Clones.jpg'
import revengeOfTheSith from './resourses/SW3-Revenge_of_the_sith.jpg'
import aNewHope from './resourses/SW4-A_new_hope.jpg'
import theEmpireStrikes from './resourses/SW5-The_empire_strikes_back.jpg'
import theReturn from './resourses/SW6-The_return_of_the_jedi.jpg'
import Info from './components/info';
import Qui_Gon_Jinn from './resourses/Qui-Gon_Jinn.png'
import Obi_wan_Kenobi from './resourses/Obi-wan_Kenobi.jpg'
import anakin from './resourses/Anakin_Skywalker.png'
import leia from './resourses/Leia_Organa.jpeg'
import dark from './resourses/Darth_Vader.jpeg'
import luke from './resourses/Luke_Skywalker.jpeg'

function App() {
  const [info, setInfo]= useState()

  const sw = [
    {
      episode: "1",
      title: "The phantom menace",
      year: 1999,
      poster: thePhanthoMenace,
      best_character: {
        name: "Qui-Gon Jinn",
        affiliation: "Jedi",
        image: Qui_Gon_Jinn,
        bio: "Qui-Gon Jinn, a Force-sensitive human male, was a venerable if maverick Jedi Master who lived during the last years of the Republic Era. He was a wise and well-respected member of the Jedi Order, and was offered a seat on the Jedi Council, but chose to reject and follow his own path. Adhering to a philosophy centered around the Living Force, Jinn strove to follow the will of the Force even when his actions conflicted with the wishes of the High Council. After encountering Anakin Skywalker, Jinn brought him to the Jedi Temple on Coruscant, convinced he had found the Chosen One. His dying wish was for Skywalker to become a Jedi and ultimately restore balance to the Force.",
      },
    },
    {
      episode: "2",
      title: "Attack of the clones",
      year: 2002,
      poster: attackOfTheClones,
      best_character: {
        name: "Obi-wan Kenobi",
        affiliation: "Jedi",
        image: Obi_wan_Kenobi,
        bio: "Obi-Wan Kenobi was a legendary Force-sensitive human male Jedi Master who served on the Jedi High Council during the final years of the Republic Era. As a Jedi General, Kenobi served in the Grand Army of the Republic that fought against the Separatist Droid Army during the Clone Wars. Kenobi, however, was forced into exile as a result of the Great Jedi Purge. As a mentor, Kenobi was responsible for training two members of the Skywalker family, Anakin and Luke Skywalker, both of whom served in turn as his Padawan in the ways of the Force.",
      },
    },
    {
      episode: "3",
      title: "Revenge of the Sith",
      year: 2005,
      poster: revengeOfTheSith,
      best_character: {
        name: "Anakin Skywalker",
        affiliation: "Sith",
        image: anakin,
        bio: "Anakin Skywalker was a legendary Force-sensitive human male who was a Jedi Knight of the Galactic Republic and the prophesied Chosen One of the Jedi Order, destined to bring balance to the Force. Also known as 'Ani' during his childhood, Skywalker earned the moniker 'Hero With No Fear' from his accomplishments in the Clone Wars. His alter ego, Darth Vader, the Dark Lord of the Sith, was created when Skywalker turned to the dark side of the Force, pledging his allegiance to the Sith Lord Darth Sidious at the end of the Republic Era.",
      },
    },
    {
      episode: "4",
      title: "A new hope",
      year: 1977,
      poster: aNewHope,
      best_character: {
        name: "Leia Organa",
        affiliation: "Rebellion",
        image: leia,
        bio: "Leia Skywalker Organa Solo was a Force-sensitive human Alderaanian female politician, Jedi, and military leader who served in the Alliance to Restore the Republic during the Imperial Era and the New Republic and Resistance in the subsequent New Republic Era. Shortly after birth, she was adopted into the House of Organa—the Alderaanian royal family—and was raised as Princess Leia Organa of Alderaan, a planet in the Core Worlds known for its dedication to pacifism. The princess was raised as the daughter of Senator Bail Prestor Organa and his wife, Queen Breha Organa, making her the heir to the Alderaanian monarchy. Instilled with the values of her adopted homeworld, Organa devoted her life to the restoration of democracy by opposing authoritarian regimes, such as the Galactic Empire and the First Order.",
      },
    },
    {
      episode: "5",
      title: "The empire strikes back",
      year: 1980,
      poster: theEmpireStrikes,
      best_character: {
        name: "Darth Vader",
        affiliation: "Empire",
        image: dark,
        bio: "Once the heroic Jedi Knight named Anakin Skywalker, Darth Vader was seduced by the dark side of the Force. Forever scarred by his defeat on Mustafar, Vader was transformed into a cybernetically-enhanced Sith Lord. At the dawn of the Empire, Vader led the Empire's eradication of the Jedi Order and the search for survivors. He remained in service of the Emperor -- the evil Darth Sidious -- for decades, enforcing his Master's will and seeking to crush the Rebel Alliance and other detractors. But there was still good in him…",
      },
    },
    {
      episode: "6",
      title: "The return of the Jedi",
      year: 1983,
      poster: theReturn,
      best_character: {
        name: "Luke Skywalker",
        affiliation: "Jedi",
        image: luke,
        bio: "Luke Skywalker, a Force-sensitive human male, was a legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire. Along with his companions, Princess Leia Organa and General Han Solo, Skywalker served as a revolutionary on the side of the Alliance to Restore the Republic—an organization committed to the downfall of the Galactic Empire and the restoration of democracy. Following the war, Skywalker became a living legend, and was remembered as one of the greatest Jedi in galactic history.",
      },
    },
  ];
  
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          {sw.map((t)=>{
            return(
              <Poster general={t} setInfo={setInfo}/>
            )
          })}
        </div>
        {info &&
          <Info info={info}/>
        }
      </div>
    </div>
  );
}

export default App;
