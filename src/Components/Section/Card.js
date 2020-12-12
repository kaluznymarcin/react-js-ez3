import withLink from '../HOC/withLink';
import Card from '../Card';
import CardContent from '../Card/CardContent';
import CardFooter from '../Card/CardFooter';

import selector from './selector';

const SectionsCard = ({ data }) => {
  const { img, description } = selector(data);

  return (
    <Card>
      <CardContent>
        <img src={img.src} alt={img.alt} />
      </CardContent>
      {description && <CardFooter>
        {description}
      </CardFooter>}
    </Card>
  )
};

export default withLink('/photo/:id')(SectionsCard);
