import { Component } from 'react'
import {
  UNSPLASH_BASE_URL,
  UNSPLASH_COMMON_HEADERS
} from '../../constants';

const map = {
  "/sctions": "/collections",
  "/section/:id": "/collections/:id",
  "/photo/:id": "/photos/:id",
};

const fillPath = (path, params) => path.replace(
  /[:*](\w+)/g,
  ($0, $1) => {
    return params[$1]
  }
);

const _fillPath = (path, params) => Object.entries(params).reduce(
  (acc, [key, value]) => acc.replace(`:${key}`, value),
  path
);

const withFetch = BaseComponent => class extends Component {
  state = {
    data: {}
  }

  componentDidMount() {
    const { params, path } = this.props.match;
    const url = fillPath(map[path], params);
    console.log(url);
    fetch(`${UNSPLASH_BASE_URL}${url}`, {
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
