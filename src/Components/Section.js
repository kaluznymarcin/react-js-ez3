import { withRouter } from 'react-router-dom';
import Card from './Card'
import GridList from './GridList';
import listFactory from './listFactory';
import withFetch from './HOC/withFetch';
import withLink from './HOC/withLink'


const CardWithLink = withLink('/photos/:id')(Card);

const Sections = ({ data }) => {
  console.log(' SECTION :: ', data);
  return (
    <GridList>
      {listFactory(CardWithLink, data)}
    </GridList>
  );
}

export default withRouter(withFetch(Sections));
