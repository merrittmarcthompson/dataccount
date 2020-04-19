import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'

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

function OwnerScreen(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Pending Access Requests</Card.Title>
        <Button variant="secondary" size="sm" onClick={() => props.setWhichScreen('start')}>
          Back
        </Button>
      </Card.Body>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Card>
  );
}

function AccessorScreen(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>This is the accessor page</Card.Title>
        <Card.Text>
          <p>Hello</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function ScreenSwitcher() {
  const [whichScreen, setWhichScreen] = useState('start');
  switch (whichScreen) {
    case 'start':
      return <StartScreen setWhichScreen={(whichId) => setWhichScreen(whichId)} />;
    case 'owner':
      return <OwnerScreen setWhichScreen={(whichId) => setWhichScreen(whichId)} />;
    case 'accessor':
      return <AccessorScreen setWhichScreen={(whichId) => setWhichScreen(whichId)} />;
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
