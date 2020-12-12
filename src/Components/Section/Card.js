import withLink from '../HOC/withLink';
import Card from '../Card';
import CardContent from '../Card/CardContent';
import CardFooter from '../Card/CardFooter';

import { defaultTo, path } from '../../utils'

const SectionsCard = ({ data }) => (
  <Card>
    <CardContent>
      <img src={defaultTo('', path('urls.small', data))} alt={data.alt_description} />
    </CardContent>
    {data.description && <CardFooter>
      {data.description}
    </CardFooter>}
  </Card>
);

export default withLink('/photo/:id')(SectionsCard);
