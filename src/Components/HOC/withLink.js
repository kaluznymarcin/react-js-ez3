import { Link } from 'react-router-dom';
import fillPath from '../../utils/fillPath';

const withLink = path => BaseComponent => props => {
  const { data} = props;

  return (
    <Link to={`${fillPath(path, { id: data.id })}`}>
      <BaseComponent data={data} />
    </Link>
  )
}

export default withLink;
