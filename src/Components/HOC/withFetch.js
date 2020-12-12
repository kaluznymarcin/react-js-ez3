import { Component } from 'react'
import * as fetchApi from '../../api';

const map = {
  "/": fetchApi.fetchCollections,
  "/section/:id": fetchApi.fetchCollection,
  "/photo/:id": fetchApi.fetchPhoto,
};

const withFetch = BaseComponent => class extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    const { params, path } = this.props.match;

    map[path](params, (data => this.setState({ data })));
  }

  render() {
    return <BaseComponent data={this.state.data} />
  }
};

export default withFetch;
