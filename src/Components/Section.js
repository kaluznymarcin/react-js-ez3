import { withRouter } from 'react-router-dom';
import withFetch from './HOC/withFetch';

const Section = (props) => {
  console.log('Section :: ', props);
  return (
    <div>
      Section
    </div>
  );
}

export default withRouter(
  withFetch(
    Section
  )
);
