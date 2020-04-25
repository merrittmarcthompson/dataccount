import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { callWebApi } from './utility.js';

const indentNextStyle = {
  textIndent: '-16px',
  paddingLeft: '16px'
};

export default function OwnerScreen(props) {
  const [requests, setRequests] = useState([]);

  useEffect(() => callWebApi('GET', '/api/owner/accessRequests', wrapper => setRequests(wrapper.requests)), []);

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
            <Form>
              <RequestItems requestId={request.id} />
            </Form>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
}

function RequestItems(props) {
  const [requestItems, setRequestItems] = useState([]);

  useEffect(() =>
    callWebApi('GET', `/api/owner/accessRequestItems/${props.requestId}`, wrapper => setRequestItems(wrapper.requestItems)), [props.requestId]);

  return (
    requestItems.map((requestItem, index) => (
      <React.Fragment key={index}>
        <Row>
          <Col>
            <Form.Label>Key</Form.Label>
          </Col>
          <Col>
            <Form.Control type="text" placeholder={requestItem.key} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label size="sm">Purpose</Form.Label>
          </Col>
          <Col>
            <Form.Control type="text" placeholder={requestItem.purpose} />
          </Col>
        </Row>
        {/*
        <Form.Label size="sm">Current Value</Form.Label>
        <Form.Control type="text" placeholder={requestItem.currentValue} />
        <Form.Label size="sm">New Value</Form.Label>
        <Form.Control type="text" placeholder={requestItem.newValue} />
        */}
      </React.Fragment>
    ))
  );
}

