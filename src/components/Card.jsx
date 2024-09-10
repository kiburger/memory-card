export default function Card({ character, handleClick}) {
  return (
    <>
      <div 
        className="card"
        onClick={handleClick}
      >
        <img 
          id={character.id}
          src={character.src} 
          alt={character.description} 
        />
        <h2 id={character.id}>{character.name}</h2>
      </div>
    </>
  );
}