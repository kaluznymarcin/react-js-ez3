import { Component } from 'react';

const colors = ['#369', '#963'];
const withBgColorChange = BaseComponent => class extends Component {
  state = {
    ix: 0
  }

  componentDidMount() {
    this.uid = setInterval(
      () => this.setState({ ix: 1 - this.state.ix }),
      this.props.time || 1 * 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.uid);
  }

  render() {
    const { time, ...rest} = this.props;
    return <BaseComponent {...rest} bgColor={colors[this.state.ix]} />
  }
}


export default withBgColorChange;
