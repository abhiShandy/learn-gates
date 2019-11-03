import React from 'react';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from './logo.svg';
import './App.css';

function Desc(props) {
  return (
    <p className="col-md-6 text-left">
      {props.value}
    </p>
  );
}

function Gate(props) {
  return (
    <span>
      <FontAwesomeIcon icon={faArrowRight}/>
      <div className="btn btn-outline-info">{props.value}</div>
      <FontAwesomeIcon icon={faArrowRight}/>
    </span>
  );
}

class NOT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleClick() {
    const value = !this.state.value;
    this.setState({
      value: value,
    });
  }

  render() {
    return (
      <div className="row">
        <Desc value="NOT gate flips the bit"/>
        <div className="col-md-4">
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick()}>
            {this.state.value?'1':'0'}
          </button>
          <Gate value="NOT"/>
          <div className="btn btn-outline-primary bit">{this.state.value?'0':'1'}</div>
        </div>
      </div>
    );
  }
}

class AND extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bit1: 0,
      bit2: 1,
      value: 0
    };
  }

  handleClick(i) {
    let bit1 = this.state.bit1;
    let bit2 = this.state.bit2;
    if (i==1) {
      bit1 = bit1==1?0:1;
    } else {
      bit2 = bit2==1?0:1;
    }
    const value = bit1 && bit2?'1':'0';
    this.setState({
      bit1: bit1,
      bit2: bit2,
      value: value,
    });
  }

  render() {
    return (
      <div className="row">
        <Desc value="AND gate produces true when both input bits are true"/>
        <div className="col-md-4">
            <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(1)}>{this.state.bit1}</button>
            <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(2)}>{this.state.bit2}</button>
            <Gate value="AND"/>
            <div className="btn btn-outline-primary bit">{this.state.value}</div>
        </div>
      </div>
    );
  }
}

class XOR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bit1: 0,
      bit2: 1,
      value: 1
    };
  }

  handleClick(i) {
    let bit1 = this.state.bit1;
    let bit2 = this.state.bit2;
    if (i==1) {
      bit1 = bit1==1?0:1;
    } else {
      bit2 = bit2==1?0:1;
    }
    const value = bit1 != bit2?'1':'0';
    this.setState({
      bit1: bit1,
      bit2: bit2,
      value: value,
    });
  }

  render() {
    return (
      <div className="row">
        <Desc value="XOR gate produces true when both input bits are different"/>
        <div className="col-md-4">
            <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(1)}>{this.state.bit1}</button>
            <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(2)}>{this.state.bit2}</button>
            <Gate value="XOR"/>
            <div className="btn btn-outline-primary bit">{this.state.value}</div>
        </div>
      </div>
    );
  }
}

class X extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qubitIn: 0
    };
  }

  handleClick() {
    const qubitIn = !this.state.qubitIn;
    this.setState({
      qubitIn: qubitIn,
    });
  }

  render() {
    return (
      <div className="row">
        <Desc value="X quantum gate flips the qubit"/>
        <div className="col-md-4">
          |<button className="btn btn-outline-primary bit" onClick={() => this.handleClick()}>{this.state.qubitIn?'1':'0'}</button>&gt;
          <Gate value="X"/>
          |<div className="btn btn-outline-primary bit">{this.state.qubitIn?'0':'1'}</div>&gt;
        </div>
      </div>
    );
  }
}

class SWAP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qubit1: 0,
      qubit2: 0,
    };
  }

  handleClick(i) {
    let qubit1 = this.state.qubit1;
    let qubit2 = this.state.qubit2;
    if (i==1) {
      qubit1 = !qubit1;
    } else {
      qubit2 = !qubit2;
    }
    this.setState({
      qubit1: qubit1,
      qubit2: qubit2,
    });
  }

  render() {
    return (
      <div className="row">
        <Desc value="SWAP quantum gate swaps two qubits"/>
        <div className="col-md-4">
          |<button className="btn btn-outline-primary bit" onClick={() => this.handleClick(1)}>{this.state.qubit1?'1':'0'}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(2)}>{this.state.qubit2?'1':'0'}</button>&gt;
          <Gate value="SWAP"/>
          |<div className="btn btn-outline-primary bit">{this.state.qubit2?'1':'0'}</div>
          <div className="btn btn-outline-primary bit">{this.state.qubit1?'1':'0'}</div>&gt;
        </div>
      </div>
    );
  }
}

class CNOT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qubit1: 0,
      qubit2: 0,
    };
  }

  handleClick(i) {
    let qubit1 = this.state.qubit1;
    let qubit2 = this.state.qubit2;
    if (i==1) {
      qubit1 = !qubit1;
    } else {
      qubit2 = !qubit2;
    }
    this.setState({
      qubit1: qubit1,
      qubit2: qubit2,
      qubit3: (qubit1? !qubit2 : qubit2),
    });
  }

  render() {
    return (
      <div className="row">
        <Desc value="CNOT quantum gate flips the second qubit if first qubit is |1>"/>
        <div className="col-md-4">
          |<button className="btn btn-outline-primary bit" onClick={() => this.handleClick(1)}>{this.state.qubit1?'1':'0'}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(2)}>{this.state.qubit2?'1':'0'}</button>&gt;
          <Gate value="CNOT"/>
          |<div className="btn btn-outline-primary bit disabled">{this.state.qubit1?'1':'0'}</div>
          <div className="btn btn-outline-primary bit">{this.state.qubit3?'1':'0'}</div>&gt;
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h2 className="text-left">Single bit gates</h2>
        <NOT />
        <h2 className="text-left">Two bit gates</h2>
        <AND />
        <XOR />
        <h2 className="text-left">Single qubit gates</h2>
        <X />
        <h2 className="text-left">Two qubit gates</h2>
        <SWAP />
        <CNOT />
      </div>
    );
  }
}

export default App;
