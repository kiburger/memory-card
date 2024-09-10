import Card from "./Card";
import { people } from './people.js';
import { useState } from "react";

let characters = people;
console.log('Initialization');

export default function CardCollection() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [record, setRecord] = useState([]);

  function handleClick(e) {
    if(record.some(item => item === e.target.id)) {
      if(currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
      setRecord([]);
    } else {
      record.push(e.target.id);
      setCurrentScore(currentScore + 1);
      //console.log('Start randomize people');
      characters = randomizePeople();
    }
  }

  function randomizePeople () {
    const arr = [];
    const arr2 = [];//help to remove the repetitive index
    let index;
    
    // index = random();
    // arr.push(people[index]);
    // arr2.push(index);
    // while (arr.length < people.length) {
    //   do {
    //     index = random(); 
    //   } while(arr2.includes(index));   
    //   arr.push(people[index]);
    //   arr2.push(index);
    // }

    do {
      do {
        index = random(); 
      } while(arr2.includes(index));
      
      arr.push(people[index]);
      arr2.push(index);

    } while (arr.length < people.length);
    
    //console.log(arr2);
    return arr;
  }

  function random() {
    return Math.floor(Math.random() * 12);
  }

  return (
   <>
    <header>
      <h1>Memory Card 🫧</h1>
      <div className="score-board">
        <div>Score: 
          <span className="current-score"> {currentScore}</span>
        </div>
        <div>Best scores: 
          <span className="best-score"> {bestScore}</span>
        </div>
      </div>
    </header> 
    <main>
      <Card 
        character = {characters[0]}
        handleClick= {handleClick}
      />
       
      <Card 
        character = {characters[1]}
        handleClick= {handleClick}
      />
      <Card 
        character = {characters[2]}
        handleClick= {handleClick}
      />
      <Card 
        character = {characters[3]}
        handleClick= {handleClick}
      />
      <Card 
        character = {characters[4]}
        handleClick= {handleClick}
      />
      <Card 
        character = {characters[5]}
        handleClick= {handleClick}
      />
      <Card 
        character = {characters[6]}
        handleClick= {handleClick}
      />
      <Card 
        character = {characters[7]}
        handleClick= {handleClick}
      />
      <Card 
       character = {characters[8]}
       handleClick= {handleClick}
      />
      <Card 
        character = {characters[9]}
        handleClick= {handleClick}
      />
      <Card 
        character = {characters[10]}
        handleClick= {handleClick}
      />
      <Card 
        character = {characters[11]}
        handleClick= {handleClick}
      /> 
    </main>
   </>
  );
}