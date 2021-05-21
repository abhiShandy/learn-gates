import React from 'react';
import { faArrowRight, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import xgate from './Xgate.png';
import cnotgate from './cNotgate.png';
import ccnotgate from './ccnotGate.png';
import cswapgate from './cswapgate.png';
import swapgate from './swapgate.png';
import adder3 from './3qAdder.png';
import adder4 from './4qAdder.png';
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
    <span className="Gate col-sm-2">
      <FontAwesomeIcon icon={faArrowRight}/>
      <div className="btn btn-outline-info disabled">{props.value}</div>
      <FontAwesomeIcon icon={faArrowRight}/>
    </span>
  );
}

function SingleOutQubit(props) {
  return (
    <div className="col-sm-2">
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
    <div className="col-sm-2">
      <span className="bar">|</span>
      <div className="btn btn-outline-primary bit disabled">{props.value[0]}</div>
      <div className="btn btn-outline-primary bit disabled">{props.value[1]}</div>
      <FontAwesomeIcon icon={faChevronRight} size='lg'/>
    </div>
  );
}

function OutBit(props) {
  return (
    <div className="col-sm-2">
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
        <Desc value="A bit is the basic unit of classical information. It can either be 0 (false) or 1 (true). You can toggle it by clicking on it."/>
        <div className="col-sm-2">
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
        <div className="col-sm-2">
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

class OR extends React.Component {
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
      bitOut: (bitsIn[0] || bitsIn[1]),
    });
  }

  render() {
    return (
      <div className="row">
        <Desc value="OR gate produces true one either bit is true."/>
        <div className="col-sm-2">
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(0)}>{this.state.bitsIn[0]}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(1)}>{this.state.bitsIn[1]}</button>
        </div>
        <Gate value="OR"/>
        <OutBit value={this.state.bitOut}/>
      </div>
    );
  }
}

class NOR extends React.Component {
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
      bitOut: (bitsIn[0] || bitsIn[1])?0:1,
    });
  }

  render() {
    return (
      <div className="row">
        <Desc value="NOR gate produces false one either bit is true. (opposte of OR gate)"/>
        <div className="col-sm-2">
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(0)}>{this.state.bitsIn[0]}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(1)}>{this.state.bitsIn[1]}</button>
        </div>
        <Gate value="NOR"/>
        <OutBit value={this.state.bitOut}/>
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
        <div className="col-sm-2">
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(0)}>{this.state.bitsIn[0]}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(1)}>{this.state.bitsIn[1]}</button>
        </div>
        <Gate value="AND"/>
        <OutBit value={this.state.bitOut}/>
      </div>
    );
  }
}

class NAND extends React.Component {
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
      bitOut: (bitsIn[0] && bitsIn[1])?0:1,
    });
  }

  render() {
    return (
      <div className="row">
        <Desc value="NAND gate does the opposite of AND gate."/>
        <div className="col-sm-2">
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(0)}>{this.state.bitsIn[0]}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(1)}>{this.state.bitsIn[1]}</button>
        </div>
        <Gate value="NAND"/>
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
        <div className="col-sm-2">
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
      qubitsIn3: Array(3).fill(1),
    };
  }

  handleClick(i) {
    let qubitIn;
    if (i==2) {
      qubitIn = !this.state.qubitIn;
    }
    const qubitsIn2 = this.state.qubitsIn2.slice();
    const qubitsIn3 = this.state.qubitsIn3.slice();
    if (i==1 || i==0) {
      qubitsIn2[i] = qubitsIn2[i]==1?0:1;
    }
    if (i>=2) {
      qubitsIn3[i-2] = qubitsIn3[i-2]==1?0:1;
    }
    this.setState({
      qubitIn: qubitIn,
      qubitsIn2: qubitsIn2,
      qubitsIn3: qubitsIn3,
    });
  }

  render() {
    return (
      <div className="row">
        <Desc
          value="Qubit is the basic unit of quantum information. It can either be |0>, |1> or both but with some probability in each.
          Examples of single qubit: |0>, |1>. Examples of two qubit: |00>, |11>, |01>. You can toggle them by clicking on the digits."/>
        <div className="col-sm-2">
          <span className="bar">|</span>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(2)}>
            {this.state.qubitIn?'1':'0'}
          </button>
          <FontAwesomeIcon icon={faChevronRight} size="lg"/>
        </div>
        <div className="col-sm-2">
          <span className="bar">|</span>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(0)}>{this.state.qubitsIn2[0]}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(1)}>{this.state.qubitsIn2[1]}</button>
        <FontAwesomeIcon icon={faChevronRight} size='lg'/>
        </div>
        <div className="col-sm-2">
          <span className="bar">|</span>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(2)}>{this.state.qubitsIn3[0]}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(3)}>{this.state.qubitsIn3[1]}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(4)}>{this.state.qubitsIn3[2]}</button>
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
        <Desc value="X quantum gate flips the qubit, similar to NOT classical gate."/>
        <div className="col-sm-2">
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
        <Desc value="SWAP quantum gate swaps the two qubits."/>
        <div className="col-sm-2">
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
        <Desc value="CNOT quantum gate flips the second qubit if the first qubit is |1>."/>
        <div className="col-sm-2">
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
        <Desc value="CCNOT quantum gate (also called Toffoli gate) flips the third qubit if the first two qubits are |1>."/>
        <div className="col-sm-2">
          <span className="bar">|</span>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(0)}>{this.state.qubitsIn[0]?'1':'0'}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(1)}>{this.state.qubitsIn[1]?'1':'0'}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(2)}>{this.state.qubitsIn[2]?'1':'0'}</button>
          <FontAwesomeIcon icon={faChevronRight} size='lg'/>
        </div>
          <Gate value="CCNOT"/>
        <div className="col-sm-2">
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
        <Desc value="CSWAP quantum gate (also called Fredkin gate) swaps the last two qubits if the first qubit is |1>."/>
        <div className="col-sm-2">
          <span className="bar">|</span>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(0)}>{this.state.qubitsIn[0]?'1':'0'}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(1)}>{this.state.qubitsIn[1]?'1':'0'}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(2)}>{this.state.qubitsIn[2]?'1':'0'}</button>
          <FontAwesomeIcon icon={faChevronRight} size='lg'/>
        </div>
          <Gate value="CSWAP"/>
        <div className="col-sm-2">
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
        <div className="p-3 bg-dark text-white">
          <h2 className="text-left">Classical bit</h2>
          <BIT />
          <h2 className="text-left">1-bit gates</h2>
          <NOT />
          <h2 className="text-left">2-bit gates</h2>
          <OR />
          <AND />
          <XOR />
          <NOR />
          <NAND />
        </div>
        <h2 className="text-left">What's a qubit?</h2>
        <QUBIT />
        <h2 className="text-left">1-qubit gates</h2>
        <X />
        <div className="row">
          <p className="col-md-6">Quantum circuit diagram of X gate looks like:</p>
          <img src={xgate} alt="xgate" />
        </div>
        <h2 className="text-left">2-qubit gates</h2>
        <SWAP />
        <div className="row">
          <p className="col-md-6">Quantum circuit diagram of SWAP gate looks like:</p>
          <img src={swapgate} alt="swapgate" />
        </div>
        <CNOT />
        <div className="row">
          <p className="col-md-6">Quantum circuit diagram of CNOT gate looks like:</p>
          <img src={cnotgate} alt="cNotgate" />
        </div>
        <h2 className="text-left">3-qubit gates</h2>
        <CCNOT />
        <div className="row">
          <p className="col-md-6">Quantum circuit diagram of CCNOT gate looks like:</p>
          <img src={ccnotgate} alt="ccnotgate" />
        </div>
        <CSWAP />
        <div className="row">
          <p className="col-md-6">Quantum circuit diagram of CSWAP gate looks like:</p>
          <img src={cswapgate} alt="cswapgate" />
        </div>
        <h2 className="text-left">Adder circuits</h2>
        <Adder3 />
        <div className="row">
          <p className="col-md-6">Quantum circuit diagram of half adder using 3-qubit:</p>
          <img src={adder3} alt="adder3" />
        </div>
        <Adder4 />
        <div className="row">
          <p className="col-md-6">Quantum circuit diagram of half adder using 4-qubit:</p>
          <img src={adder4} alt="Adder4" />
        </div>
      </div>
    );
  }
}

class Adder3 extends React.Component {
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
    if (qubitsIn[0]==1) {
      qubitsOut[0] = qubitsIn[1]==1?0:1;
    } else {
      qubitsOut[0] = qubitsIn[1];
    }
    qubitsOut[1] = (qubitsIn[0] && qubitsIn[1])?1:0;
    this.setState({
      qubitsIn:  qubitsIn,
      qubitsOut: qubitsOut,
    });
  }

  render() {
    return (
      <div className="row">
        <Desc value="This circuit performs addition by overwriting the second the qubit."/>
        <div className="col-sm-2">
          <span className="bar">|</span>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(0)}>{this.state.qubitsIn[0]}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(1)}>{this.state.qubitsIn[1]}</button>
          <FontAwesomeIcon icon={faChevronRight} size='lg'/>
        </div>
        <Gate value="Adder3"/>
        <TwoOutQubits value={this.state.qubitsOut}/>
      </div>
    );
  }
}

class Adder4 extends React.Component {
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
    if (qubitsIn[0]==1) {
      qubitsOut[0] = qubitsIn[1]==1?0:1;
    } else {
      qubitsOut[0] = qubitsIn[1];
    }
    qubitsOut[1] = (qubitsIn[0] && qubitsIn[1])?1:0;
    this.setState({
      qubitsIn:  qubitsIn,
      qubitsOut: qubitsOut,
    });
  }

  render() {
    return (
      <div className="row">
        <Desc value="This circuit performs addition without overwriting any input qubit."/>
        <div className="col-sm-2">
          <span className="bar">|</span>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(0)}>{this.state.qubitsIn[0]}</button>
          <button className="btn btn-outline-primary bit" onClick={() => this.handleClick(1)}>{this.state.qubitsIn[1]}</button>
          <FontAwesomeIcon icon={faChevronRight} size='lg'/>
        </div>
        <Gate value="Adder4"/>
        <TwoOutQubits value={this.state.qubitsOut}/>
      </div>
    );
  }
}

export default App;
