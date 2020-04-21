import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import OwnerScreen from './OwnerScreen.js';
import AccessorScreen from './AccessorScreen.js';

function StartScreen(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Dataccount test page</Card.Title>
        <Card.Text>
          <p>Try being a personal data owner:</p>
          <p>
            <Button
              onClick={() => props.setWhichScreen('owner')}
            >
              Owner
                    </Button>
          </p>
          <p>Try being a personal data accessor:</p>
          <p><Button >Accessor</Button></p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function OwnerScreenSwitcher(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Pending Access Requests</Card.Title>
        <Button variant="secondary" size="sm" onClick={() => props.setWhichScreen('start')}>
          Back
        </Button>
      </Card.Body>
      <OwnerScreen />
    </Card>
  );
}

function AccessorScreenSwitcher(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>This is the accessor page</Card.Title>
        <Button variant="secondary" size="sm" onClick={() => props.setWhichScreen('start')}>
          Back
        </Button>
      </Card.Body>
      <AccessorScreen />
    </Card>
  );
}

function ScreenSwitcher() {
  const [whichScreen, setWhichScreen] = useState('start');
  switch (whichScreen) {
    case 'start':
      return <StartScreen setWhichScreen={(whichId) => setWhichScreen(whichId)} />;
    case 'owner':
      return <OwnerScreenSwitcher setWhichScreen={(whichId) => setWhichScreen(whichId)} />;
    case 'accessor':
      return <AccessorScreenSwitcher setWhichScreen={(whichId) => setWhichScreen(whichId)} />;
    default:
      return <div>Broken!</div>;
  }
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <ScreenSwitcher />
      </header>
    </div>
  );
}

export default App;
