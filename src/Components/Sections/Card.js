import withLink from '../HOC/withLink';
import Card from '../Card';
import CardHeader from '../Card/CardHeader';
import CardContent from '../Card/CardContent';
import CardFooter from '../Card/CardFooter';

import selector from './selector';

const SectionsCard = ({ data }) => {
  const { img, title, total_photos } = selector(data);
  return (
    <Card>
      <CardHeader>
        <h3>{title}</h3>
      </CardHeader>
      <CardContent>
        <img src={img.src} alt="" />
      </CardContent>
      <CardFooter>
        Liczba zdjęć: {total_photos}
      </CardFooter>
    </Card>
  );
};

export default withLink('/section/:id')(SectionsCard);
