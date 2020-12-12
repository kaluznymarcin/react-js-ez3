import { withRouter } from 'react-router-dom';
import Card from './Card';
import GridList from '../GridList';
import listFactory from '../listFactory';
import withFetch from '../HOC/withFetch';


const Sections = ({ data }) => (
    <GridList>
      {listFactory(Card, data)}
    </GridList>
  );

export default withRouter(withFetch(Sections));
