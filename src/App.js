import React from 'react';
import './App.scss';
import './styles.css'


const machineConfig1 = [
  {
    codeAsci: 81,
    idKey: 'Q',
    id: 'Guitar-1',
    linkAudio: 'https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Guitars/480[kb]big-distorted-G.wav.mp3'
  },
  {
    codeAsci: 87,
    idKey: 'W',
    id: 'Guitar-2',
    linkAudio: 'https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Guitars/1163[kb]clean_guitar_richchord_a.wav.mp3'
  },
  {
    codeAsci: 69,
    idKey: 'E',
    id: 'VideoGame',
    linkAudio: 'https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Electro%20and%20Synthetic/2285[kb]videogame-wobble-up.wav.mp3'
  },
  {
    codeAsci: 65,
    idKey: 'A',
    id: 'Heater-4',
    linkAudio: 'https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/131%20to%20140%20bpm/948[kb]131_double-percussion-bigdrum-switched.wav.mp3'
  },
  {
    codeAsci: 83,
    idKey: 'S',
    id: 'Clap',
    linkAudio: 'https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/131%20to%20140%20bpm/162[kb]131_electro_percussion_h.wav.mp3'
  },
  {
    codeAsci: 68,
    idKey: 'D',
    id: 'Open-HH',
    linkAudio: 'https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/131%20to%20140%20bpm/948[kb]131_thinpass-techno.wav.mp3'
  },
  {
    codeAsci: 90,
    idKey: 'Z',
    id: "Kick-n'-Hat",
    linkAudio: 'https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/131%20to%20140%20bpm/161[kb]132_fastfilter_hats.wav.mp3'
  },
  {
    codeAsci: 88,
    idKey: 'X',
    id: 'Kick',
    linkAudio: 'https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/131%20to%20140%20bpm/161[kb]132_jumpy_house.wav.mp3'
  },
  {
    codeAsci: 67,
    idKey: 'C',
    id: 'Closed-HH',
    linkAudio: 'https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/131%20to%20140%20bpm/160[kb]132_telephone-beat.wav.mp3'
  }
];

const machineConfig2 = [
  {
    codeAsci: 81,
    idKey: 'Q',
    id: 'Chord-1',
    linkAudio: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    codeAsci: 87,
    idKey: 'W',
    id: 'Chord-2',
    linkAudio: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    codeAsci: 69,
    idKey: 'E',
    id: 'Chord-3',
    linkAudio: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    codeAsci: 65,
    idKey: 'A',
    id: 'Shaker',
    linkAudio: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    codeAsci: 83,
    idKey: 'S',
    id: 'Open-HH',
    linkAudio: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    codeAsci: 68,
    idKey: 'D',
    id: 'Closed-HH',
    linkAudio: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    codeAsci: 90,
    idKey: 'Z',
    id: 'Punchy-Kick',
    linkAudio: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    codeAsci: 88,
    idKey: 'X',
    id: 'Side-Stick',
    linkAudio: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    codeAsci: 67,
    idKey: 'C',
    id: 'Snare',
    linkAudio: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
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
    this.handlePressButton = this.handlePressButton.bind(this);
    this.activateButton = this.activateButton.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handlePressButton)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePressButton)
  }
  handlePressButton(event) {
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
    const sound = document.getElementById(this.props.idKey);
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
          id={this.props.idKey}
          src={this.props.audio}>
        </audio>
        {this.props.idKey}
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
            audio={padDisplayArray[i].linkAudio}
            idAudio={padDisplayArray[i].id}
            codeKey={padDisplayArray[i].codeAsci}
            idKey={padDisplayArray[i].idKey}
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
            idKey={padDisplayArray[i].idKey}
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
