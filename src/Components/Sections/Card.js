import withLink from '../HOC/withLink';
import Card from '../Card';
import CardHeader from '../Card/CardHeader';
import CardContent from '../Card/CardContent';
import CardFooter from '../Card/CardFooter';

const SectionsCard = ({ data }) => (
  <Card>
    <CardHeader>
      <h3>{data.title}</h3>
    </CardHeader>
    <CardContent>
      <img src={data.cover_photo.urls.small} alt="" />
    </CardContent>
    <CardFooter>
      Liczba zdjęć: {data.total_photos}
    </CardFooter>
  </Card>
);

export default withLink('/section/:id')(SectionsCard);
