import { Component } from 'react'
import {
  UNSPLASH_BASE_URL,
  UNSPLASH_COMMON_HEADERS
} from '../../constants';

const map = {
  "/section/:id": '/collections/:id/photos?per_page=:perPage',
  "/photo/:id": '/photos/:id',
};

const withFetch = BaseComponent => class extends Component {
  state = {
    data: {}
  }

  componentDidMount() {
    const { params, path } = this.props.match
    fetch(`${UNSPLASH_BASE_URL}${fillPath(params, map[path])}`, {
      headers: UNSPLASH_COMMON_HEADERS
    })
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return <BaseComponent data={this.state.data} />
  }
};

export default withFetch;
