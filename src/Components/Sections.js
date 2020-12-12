import { withRouter } from 'react-router-dom';
import Card from './Card';
import GridList from './GridList';
import listFactory from './listFactory';
import withFetch from './HOC/withFetch';
import withLink from './HOC/withLink'


const CardWithLink = withLink('/section/:id')(Card);

const Sections = ({ data }) => (
    <GridList>
      {listFactory(CardWithLink, data)}
    </GridList>
  );

export default withRouter(withFetch(Sections));
