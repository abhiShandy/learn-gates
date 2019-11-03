import React from 'react';
import { faArrowRight, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import xgate from './Xgate.png';
import cnotgate from './cNotgate.png';
import ccnotgate from './ccnotGate.png';
import cswapgate from './cswapgate.png';
import swapgate from './swapgate.png';
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
    <span className="Gate col-md-2">
      <FontAwesomeIcon icon={faArrowRight}/>
      <div className="btn btn-outline-info disabled">{props.value}</div>
      <FontAwesomeIcon icon={faArrowRight}/>
    </span>
  );
}

function SingleOutQubit(props) {
  return (
    <div className="col-md-2">
      <span className="bar">|</span>
      <div className="btn btn-outline-primary bit disabled">
        {props.value}
      </div>
      <FontAwesomeIcon icon={faChevronRight} size='lg'/>
    </div>
  );
}

function TwoOutQubits(props) {
  return (
    <div className="col-md-2">
      <span className="bar">|</span>
      <div className="btn btn-outline-primary bit disabled">{props.value[0]}</div>
      <div className="btn btn-outline-primary bit disabled">{props.value[1]}</div>
      <FontAwesomeIcon icon={faChevronRight} size='lg'/>
    </div>
  );
}

function OutBit(props) {
  return (
    <div className="col-md-2">
      <div className="btn btn-outline-primary bit disabled">{props.value}</div>
    </div>
  );
}

class BIT extends React.Component {
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
        <Desc value="A qubit is the basic unit of classical information. It can either be 0 or 1. You can toggle it by clicking on it."/>
        <div className="col-md-2">
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick()}>
            {this.state.value?'1':'0'}
          </button>
        </div>
      </div>
    );
  }
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
        <div className="col-md-2">
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick()}>
            {this.state.value?'1':'0'}
          </button>
        </div>
        <Gate value="NOT"/>
        <OutBit value={this.state.value?'0':'1'}/>
      </div>
    );
  }
}

class AND extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bitsIn: Array(2).fill(1),
      bitOut: 1
    };
  }

  handleClick(i) {
    const bitsIn = this.state.bitsIn.slice();
    bitsIn[i] = bitsIn[i]==1?0:1;
    this.setState({
      bitsIn: bitsIn,
      bitOut: (bitsIn[0] && bitsIn[1]),
    });
  }

  render() {
    return (
      <div className="row">
        <Desc value="AND gate produces true when both input bits are true"/>
        <div className="col-md-2">
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(0)}>{this.state.bitsIn[0]}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(1)}>{this.state.bitsIn[1]}</button>
        </div>
        <Gate value="AND"/>
        <OutBit value={this.state.bitOut}/>
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
        <div className="col-md-2">
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(1)}>{this.state.bit1}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(2)}>{this.state.bit2}</button>
        </div>
        <Gate value="XOR"/>
        <OutBit value={this.state.value}/>
      </div>
    );
  }
}

class QUBIT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qubitIn: 0,
      qubitsIn2: Array(2).fill(1),
    };
  }

  handleClick(i) {
    let qubitIn;
    if (i==2) {
      qubitIn = !this.state.qubitIn;
    }
    const qubitsIn2 = this.state.qubitsIn2.slice();
    if (i==1 || i==0) {
      qubitsIn2[i] = qubitsIn2[i]==1?0:1;
    }
    this.setState({
      qubitIn: qubitIn,
      qubitsIn2: qubitsIn2,
    });
  }

  render() {
    return (
      <div className="row">
        <Desc
          value="A qubit is the basic unit of quantum information. It can either be |0>, |1> or weighted sum of both.
          Examples of single qubit: |0>, |1>. Examples of two qubit: |00>, |11>, |01>. You can toggle them by clicking on the digits."/>
        <div className="col-md-2">
          <span className="bar">|</span>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(2)}>
            {this.state.qubitIn?'1':'0'}
          </button>
          <FontAwesomeIcon icon={faChevronRight} size="lg"/>
        </div>
        <div className="col-md-2">
          <span className="bar">|</span>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(0)}>{this.state.qubitsIn2[0]}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(1)}>{this.state.qubitsIn2[1]}</button>
        <FontAwesomeIcon icon={faChevronRight} size='lg'/>
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
        <div className="col-md-2">
          <span className="bar">|</span>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick()}>
            {this.state.qubitIn?'1':'0'}
          </button>
          <FontAwesomeIcon icon={faChevronRight} size="lg"/>
        </div>
          <Gate value="X"/>
          <SingleOutQubit value={this.state.qubitIn?'0':'1'}/>
      </div>
    );
  }
}

class SWAP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qubitsIn:  Array(2).fill(0),
      qubitsOut: Array(2).fill(0),
    };
  }

  handleClick(i) {
    const qubitsIn  = this.state.qubitsIn.slice();
    qubitsIn[i] = qubitsIn[i]==1?0:1;

    const qubitsOut = this.state.qubitsOut.slice();
    qubitsOut[0] = qubitsIn[1];
    qubitsOut[1] = qubitsIn[0];
    this.setState({
      qubitsIn:  qubitsIn,
      qubitsOut: qubitsOut,
    });
  }

  render() {
    return (
      <div className="row">
        <Desc value="SWAP quantum gate swaps two qubits"/>
        <div className="col-md-2">
          <span className="bar">|</span>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(0)}>{this.state.qubitsIn[0]}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(1)}>{this.state.qubitsIn[1]}</button>
          <FontAwesomeIcon icon={faChevronRight} size='lg'/>
        </div>
        <Gate value="SWAP"/>
        <TwoOutQubits value={this.state.qubitsOut}/>
      </div>
    );
  }
}

class CNOT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qubitsIn:  Array(2).fill(0),
      qubitsOut: Array(2).fill(0),
    };
  }

  handleClick(i) {
    const qubitsIn  = this.state.qubitsIn.slice();
    qubitsIn[i] = qubitsIn[i]==1?0:1;

    const qubitsOut = this.state.qubitsOut.slice();
    qubitsOut[0] = qubitsIn[0];
    if (qubitsIn[0]==1) {
      qubitsOut[1] = qubitsIn[1]==1?0:1;
    } else {
      qubitsOut[1] = qubitsIn[1];      
    }
    this.setState({
      qubitsIn:  qubitsIn,
      qubitsOut: qubitsOut,
    });
  }

  render() {
    return (
      <div className="row">
        <Desc value="CNOT quantum gate flips the second qubit if first qubit is |1>"/>
        <div className="col-md-2">
          <span className="bar">|</span>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(0)}>{this.state.qubitsIn[0]}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(1)}>{this.state.qubitsIn[1]}</button>
          <FontAwesomeIcon icon={faChevronRight} size='lg'/>
        </div>
        <Gate value="CNOT"/>
        <TwoOutQubits value={this.state.qubitsOut}/>
      </div>
    );
  }
}

class CCNOT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qubitsIn:  Array(3).fill(0),
      qubitsOut:  Array(3).fill(0),
    };
  }

  handleClick(i) {
    const qubitsIn  = this.state.qubitsIn.slice();
    qubitsIn[i] = qubitsIn[i]==1?0:1;

    const qubitsOut = this.state.qubitsOut.slice();
    if (qubitsIn[0]==1 && qubitsIn[1]==1) {
      qubitsOut[2] = qubitsIn[2]==1?0:1;
    } else {
      qubitsOut[2] = qubitsIn[2];
    }
    qubitsOut[0] = qubitsIn[0];
    qubitsOut[1] = qubitsIn[1];
    this.setState({
      qubitsIn:  qubitsIn,
      qubitsOut: qubitsOut,
    });
  }


  render() {
    return (
      <div className="row">
        <Desc value="CCNOT quantum gate (also called Toffoli gate)"/>
        <div className="col-md-2">
          <span className="bar">|</span>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(0)}>{this.state.qubitsIn[0]?'1':'0'}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(1)}>{this.state.qubitsIn[1]?'1':'0'}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(2)}>{this.state.qubitsIn[2]?'1':'0'}</button>
          <FontAwesomeIcon icon={faChevronRight} size='lg'/>
        </div>
          <Gate value="CCNOT"/>
        <div className="col-md-2">
          <span className="bar">|</span>
          <div className="btn btn-outline-primary bit disabled">{this.state.qubitsOut[0]?'1':'0'}</div>
          <div className="btn btn-outline-primary bit disabled">{this.state.qubitsOut[1]?'1':'0'}</div>
          <div className="btn btn-outline-primary bit disabled">{this.state.qubitsOut[2]?'1':'0'}</div>
          <FontAwesomeIcon icon={faChevronRight} size='lg'/>
        </div>
      </div>
    );
  }
}

class CSWAP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qubitsIn:  Array(3).fill(0),
      qubitsOut:  Array(3).fill(0),
    };
  }

  handleClick(i) {
    const qubitsIn  = this.state.qubitsIn.slice();
    qubitsIn[i] = qubitsIn[i]==1?0:1;

    const qubitsOut = this.state.qubitsOut.slice();
    if (qubitsIn[0]==1) {
      qubitsOut[1] = qubitsIn[2];
      qubitsOut[2] = qubitsIn[1];
    } else {
      qubitsOut[1] = qubitsIn[1];
      qubitsOut[2] = qubitsIn[2];
    }
    qubitsOut[0] = qubitsIn[0];
    this.setState({
      qubitsIn:  qubitsIn,
      qubitsOut: qubitsOut,
    });
  }

  render() {
    return (
      <div className="row">
        <Desc value="CSWAP quantum gate  (also called Fredkin gate)"/>
        <div className="col-md-2">
          <span className="bar">|</span>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(0)}>{this.state.qubitsIn[0]?'1':'0'}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(1)}>{this.state.qubitsIn[1]?'1':'0'}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(2)}>{this.state.qubitsIn[2]?'1':'0'}</button>
          <FontAwesomeIcon icon={faChevronRight} size='lg'/>
        </div>
          <Gate value="CSWAP"/>
        <div className="col-md-2">
          <span className="bar">|</span>
          <div className="btn btn-outline-primary bit disabled">{this.state.qubitsOut[0]?'1':'0'}</div>
          <div className="btn btn-outline-primary bit disabled">{this.state.qubitsOut[1]?'1':'0'}</div>
          <div className="btn btn-outline-primary bit disabled">{this.state.qubitsOut[2]?'1':'0'}</div>
          <FontAwesomeIcon icon={faChevronRight} size='lg'/>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h2 className="text-left">Classical bit</h2>
        <BIT />
        <h2 className="text-left">Single bit gates</h2>
        <NOT />
        <h2 className="text-left">Two bit gates</h2>
        <AND />
        <XOR />
        <h2 className="text-left">What's a qubit?</h2>
        <QUBIT />
        <h2 className="text-left">Single qubit gates</h2>
        <X />
        <div className="row">
          <p className="col-md-6">Quantum circuit diagram of X gate looks like:</p>
          <img src={xgate}/>
        </div>
        <h2 className="text-left">Two qubit gates</h2>
        <SWAP />
        <div className="row">
          <p className="col-md-6">Quantum circuit diagram of SWAP gate looks like:</p>
          <img src={swapgate}/>
        </div>
        <CNOT />
        <div className="row">
          <p className="col-md-6">Quantum circuit diagram of CNOT gate looks like:</p>
          <img src={cnotgate}/>
        </div>
        <h2 className="text-left">Three qubit gates</h2>
        <CCNOT />
        <div className="row">
          <p className="col-md-6">Quantum circuit diagram of CCNOT gate looks like:</p>
          <img src={ccnotgate}/>
        </div>
        <CSWAP />
        <div className="row">
          <p className="col-md-6">Quantum circuit diagram of CSWAP gate looks like:</p>
          <img src={cswapgate}/>
        </div>
      </div>
    );
  }
}

export default App;
