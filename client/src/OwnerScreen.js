import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { callWebApi } from './utility.js';

const indentNextStyle = {
  textIndent: '-16px',
  paddingLeft: '16px'
};

export default function OwnerScreen(props) {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    callWebApi('GET', '/api/owner/accessRequests', wrapper => setRequests(wrapper.requests));
  }, []);

  return (
    <Accordion>
      {requests.map((request, index) => (
        <Card key={index}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={request.id} className="text-left" size="sm" style={indentNextStyle}>
              {request.timeStamp} | {request.by}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={request.id}>
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
}
