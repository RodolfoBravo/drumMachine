import React from 'react';
import './App.scss';
import './styles.css'


const machineConfig1 = [
  {
    codeAsci: 81,
    triggerKey: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    codeAsci: 87,
    triggerKey: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    codeAsci: 69,
    triggerKey: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    codeAsci: 65,
    triggerKey: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    codeAsci: 83,
    triggerKey: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    codeAsci: 68,
    triggerKey: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    codeAsci: 90,
    triggerKey: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    codeAsci: 88,
    triggerKey: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    codeAsci: 67,
    triggerKey: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const machineConfig2 = [
  {
    codeAsci: 81,
    triggerKey: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    codeAsci: 87,
    triggerKey: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    codeAsci: 69,
    triggerKey: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    codeAsci: 65,
    triggerKey: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    codeAsci: 83,
    triggerKey: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    codeAsci: 68,
    triggerKey: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    codeAsci: 90,
    triggerKey: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    codeAsci: 88,
    triggerKey: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    codeAsci: 67,
    triggerKey: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];



const stylesActives = {
  backgroundColor: 'orange',
  boxShadow: '0 3px 5px red',
  marginTop: 10,
  marginLeft: 10
}

const styleInactive = {
  backgroundColor: 'grey',
  boxShadow: '3px 3px 5px blue',
  marginTop: 10
}

class PadButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stylePad: styleInactive
    };
    this.playSound = this.playSound.bind(this);
    this.handlePressKey = this.handlePressKey.bind(this);
    this.activateButton = this.activateButton.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handlePressKey)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePressKey)
  }
  handlePressKey(event) {
    if (event.keyCode === this.props.codeKey) {
      this.playSound();
    }
  }
  activateButton() {
    if (this.props.power) {
      if (this.state.stylePad.backgroundColor === 'orange') {
        this.setState({
          stylePad: styleInactive
        });
      } else {
        this.setState({
          stylePad: stylesActives
        })
      }
    } else if (this.stylePad.marginTop === 10) {
      this.setState({
        stylePad: styleInactive
      });
    } else {
      this.setState({
        stylePad: {
          marginTop: 10,
          backgroundColor: 'grey',
          boxShadow: '0 3px grey'
        }
      })
    }
  }
  playSound() {
    const sound = document.getElementById(this.props.triggerKey);
    sound.currentTime = 0;
    sound.play();
    this.activateButton();
    setTimeout(() => this.activateButton(), 250);
    this.props.refresh(this.props.idAudio.replace(/-/g, ' '));
  }
  render() {
    return (
      <div autoPlay
        className='drum-pad'
        id={this.props.idAudio}
        onClick={this.playSound}
        style={this.state.stylePad}>
        <audio className='clip'
          id={this.props.triggerKey}
          src={this.props.audio}>
        </audio>
        {this.props.triggerKey}
      </div>
    );
  }
}

class PadDisplay extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let padDisplay;
    if (this.props.power) {
      padDisplay = this.props.currentPadDisplay.map((ObjTemp, i, padDisplayArray) => {
        return (
          <PadButtons
            audio={padDisplayArray[i].url}
            idAudio={padDisplayArray[i].id}
            codeKey={padDisplayArray[i].codeAsci}
            triggerKey={padDisplayArray[i].triggerKey}
            power={this.props.power}
            refresh={this.props.refresh}

          />
        );
      });
    } else {
      padDisplay = this.props.currentPadDisplay.map((drumTemp, i, padDisplayArray) => {
        return (
          <PadButtons
            audio='#'
            idAudio={padDisplayArray[i].id}
            triggerKey={padDisplayArray[i].triggerKey}
            power={this.props.power}
            refresh={this.props.refresh}
          />
        );
      });
    }
    return <div className='pad-display'>{padDisplay}</div>;
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display_status: String.fromCharCode(160),
      currentDisplay: machineConfig1,
      currentDisplayId: 'Mode One',
      sliderValue: 0.5
    }
    this.powerControl = this.powerControl.bind(this);
    this.modeSelect = this.modeSelect.bind(this);
    this.displayNameClip = this.displayNameClip.bind(this);
    this.adjustVolume = this.adjustVolume.bind(this);
    this.displayClear = this.displayClear.bind(this);
  }
  powerControl() {
    var powerStatus = '';
    if (this.state.power) {
      powerStatus = 'Machine OFF';
    } else {
      powerStatus = 'Machine ON';
    }
    this.setState({
      power: !this.state.power,
      display_status: powerStatus
    });
  }
  modeSelect() {
    if (this.state.power) {
      if (this.state.currentDisplayId === 'Mode One') {
        this.setState({
          currentDisplay: machineConfig2,
          currentDisplayId: 'Mode Two',
          display_status: 'Mode Two',
        });
      } else {
        this.setState({
          currentDisplay: machineConfig1,
          currentDisplayId: 'Mode One',
          display_status: 'Mode One',
        });
      }
    }
  }
  displayNameClip(name) {
    this.setState({
      display_status: name
    })
  }
  adjustVolume(event) {
    if (this.state.power) {
      this.setState({
        sliderValue: event.target.value,
        display_status: 'Nivel of Vol:  ' + Math.round(event.target.value * 100)
      });
      setTimeout(() => this.displayClear(), 3000);
    }
  }
  displayClear() {
    this.setState({
      display_status: 'Ready to play'
    });
  }
  render() {
    let selectPower;
    let selectMode;
    if (this.state.power) {
      selectPower = { float: 'left' }
    } else {
      selectPower = { float: 'right' }
    }

    if (this.state.currentDisplayId === 'Mode One') {
      selectMode = { float: 'left' }
    } else {
      selectMode = { float: 'right' }
    }

    {
      const sounds = [].slice.call(document.getElementsByClassName('clip'));
      sounds.forEach(sound => {
        sound.volumen = this.state.sliderValue
      });
    }
    return (
      <div className="container" id="drum-machine">
        <div className='row'>
          <PadDisplay
            clipVolume={this.state.sliderValue}
            currentPadDisplay={this.state.currentDisplay}
            power={this.state.power}
            refresh={this.displayNameClip}
          />
        </div>
        <div className='row'>
          <div className='container-controls'>
            <div className='control'>
              <p>Power</p>
              <div className='select' onClick={this.powerControl}>
               <div className='inner' style={selectPower} />
                {/*<div class='toggle-switch'>
                  <label>
                    <input type='checkbox' />
                    <span class='slider'></span>
                  </label>

                </div>*/}
              </div>
            </div>
            <p id='display'>{this.state.display_status}</p>
            <div className='volumen-slider'>

              <input
                max='1'
                min='0'
                onChange={this.adjustVolume}
                step='0.01'
                type='range'
                value={this.state.sliderValue}
              />
            </div>
            <div className='control'>
              <p>Bank</p>
              <div className='select' onClick={this.modeSelect}>
                <div className='inner' style={selectMode} />
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
