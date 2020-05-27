import React, { useState, useEffect, Fragment } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import readIcon from './read-icon.png'
import writeIcon from './write-icon.jpg'
import { callWebApi } from './utility.js';

const indentNextStyle = {
  textIndent: '-8px',
  paddingLeft: '8px'
};

const indentNextMoreStyle = {
  textIndent: '-8px',
  paddingLeft: '32px'
};

export default function OwnerScreen(props) {
  const [pendingAccessRequests, setPendingAccessRequests] = useState([]);

  useEffect(() => callWebApi(
    'GET',
    '/api/owner/accessRequests/pending',
    wrapper => setPendingAccessRequests(wrapper.pendingAccessRequests)
  ), []);

  return (
    <Accordion>
      {pendingAccessRequests.map((pendingAccessRequest, index) => (
        <Card key={index}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={pendingAccessRequest.id} className="text-left" style={indentNextStyle}>
              {new Date(pendingAccessRequest.requested).toLocaleString()}<br />
              {pendingAccessRequest.accessor}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={pendingAccessRequest.id}>
            <Card>
              <ListGroup variant="flush">
                {pendingAccessRequest.items.map((pendingAccessRequestItem, index) => (
                  <ListGroup.Item className="text-left" style={indentNextMoreStyle} key={index}>
                    <ReadWriteIcon read={pendingAccessRequestItem.newValue == undefined} />
                    {pendingAccessRequestItem.key}<br />
                    “{pendingAccessRequestItem.purpose}”<br />
                    {pendingAccessRequestItem.value}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
}

function ReadWriteIcon(props) {
  if (props.read) {
    return (<img src={readIcon} alt="read" width="25" height="auto" />);
  }
  return (<Fragment><img src={writeIcon} alt="write" width="10" height="auto" />{' '}</Fragment>);
}