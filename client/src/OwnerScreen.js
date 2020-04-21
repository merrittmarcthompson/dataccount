import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { callWebApi } from './utility.js';

export default function OwnerScreen(props) {
  const [requests, setRequests] = useState([]);
  const [requestedDataItems, setRequestedDataItems] = useState([]);

  useEffect(() => {
    callWebApi('GET', '/api/owner/accessRequests', wrapper => {
      setRequests(wrapper.requests);
      setRequestedDataItems(wrapper.requestedDataItems);
    });
  }, []);

  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Click me yeah!
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
  );
}
