import CardHeader from './CardHeader';
import CardFooter from './CardFooter'
import './card.css';

const Card = ({ bgColor, title = 'LOL', time }) => (
  <div className="card" style={{ backgroundColor: bgColor || '#fff' }}>
    <CardHeader>{title}</CardHeader>
    <a href="/sections">Sekcje</a>
    <CardFooter>Ala {time}</CardFooter>
  </div>
);

export default Card;
