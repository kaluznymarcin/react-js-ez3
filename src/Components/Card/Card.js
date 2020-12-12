import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import CardContent from './CardContent';
import './card.css';

const Card = ({ data: { cover_photo, title, total_photos } }) => (
  <div className="card">
    {title && <CardHeader>{title}</CardHeader>}
    <CardContent>Cover Photo</CardContent>
    <CardFooter>
      {total_photos && <div>Liczba zdjęć: {total_photos}</div>}
    </CardFooter>
  </div>
);

export default Card;
