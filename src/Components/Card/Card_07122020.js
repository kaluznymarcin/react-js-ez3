import React, { Component, useState } from 'react';

const url = 'http://api.nbp.pl/api/exchangerates/rates/a/gbp/2020-01-01/2020-01-31/';

class CardC extends Component {
  state = {
    num: 0,
    disabled: false,
    data: undefined,
  }

  /* constructor() {
    super();
    this.handlerMinus = this.handlerMinus.bind(this);
    this.handlerPlus = this.handlerPlus.bind(this);
  } */

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  createRows(list) {
    return Array.isArray(list) && list.map(
      ({ no, effectiveDate, mid }, index) => (
        <tr key={`${no}-${index}`}>
          <td>{effectiveDate}</td>
          <td>{mid}</td>
        </tr>
      )
    )
  }

  render() {
    const { data = {} } = this.state;
    return (
      <div>
        <header>
          {data.code ? <h3>{data.code}</h3> : <div>Loading...</div>}
        </header>
        <table>
          <thead>
            <tr><th>data</th><th>cena</th></tr>
          </thead>
          <tbody>
            {this.createRows(data.rates)}
          </tbody>
        </table>
      </div>
    );
  }
}

const CardF = () => {
  const [num, setNum] = useState(0);

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

export default [CardF, CardC][Number(true)];
