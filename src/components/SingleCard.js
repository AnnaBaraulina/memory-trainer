import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if(!disabled) {
        handleChoice(card)
    }
    
  }

  return (
    <div className="card" key={card.id}>
      <div className={flipped ? 'flipped' : ''}>
        <img
          width="150"
          height="150"
          className="front"
          src={card.src}
          alt="card front"
        />
        <img
          width="150"
          height="150"
          className="back"
          alt="card back"
          src="../images/cover.jpeg"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}


