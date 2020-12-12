import { withRouter } from 'react-router-dom';
import withFetch from './HOC/withFetch';
const Photo = ({ data }) => {
  console.log(' PHOTO :: ', data);

  return (
    <div>
      <img src={data?.urls?.regular} alt={data?.alt_description} />
    </div>
  )
};

export default withRouter(withFetch(Photo));
