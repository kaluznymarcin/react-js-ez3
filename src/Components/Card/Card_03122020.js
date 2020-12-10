import React, { Component, useState, useEffect } from 'react';

class CardC extends Component {
  state = {
    num: 0,
    disabled: false,
  }

  /* constructor() {
    super();
    this.handlerMinus = this.handlerMinus.bind(this);
    this.handlerPlus = this.handlerPlus.bind(this);
  } */

  componentDidMount() {
    this.tout = setInterval(() => {
      this.setState({ num: this.state.num + 1 });
    }, 5 * 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.num % 2 === 0) {
      console.log(this.state.num);
    }
  }

  componentWillUnmount() {
    clearInterval(this.tout);
  }

  changeNum(delta = 1) {
    return (e) => {
      this.setState({ num: this.state.num + delta})
    };
  }

  handlerPlus = e => {
    this.setState({ num: this.state.num + 1})
    this.h()
  }

  handlerMinus = () => {
    this.setState({ num: this.state.num - 1})
  }

  h = () => { console.log() }

  render() {
    return (
      <div>
        <header>Card</header>
        <div>{this.state.num}</div>
        <footer>
          <button type="button" onClick={this.handlerMinus}>-</button>
          <button type="button" onClick={this.handlerPlus}>+</button>
        </footer>
      </div>
    );
  }
}

const CardF = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    let tout = undefined;

    if (!tout) {
      tout = setInterval(() => {
        setNum(num + 1);
      }, 5 * 1000);
    }

    return () => {
      clearInterval(tout);
    }
  }, [num])

  return (
    <div>
      <header></header>
      <div>{num}</div>
      <footer>
      <button type="button" onClick={() => setNum(num - 1)}>-</button>
      <button type="button" onClick={() => setNum(num + 1)}>+</button>
      </footer>
    </div>
  );
}

export default [CardF, CardC][Number(false)];
