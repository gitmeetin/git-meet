import React from 'react';
import { Button, Card, Col, Row, Spacer, Text } from '@geist-ui/react';
import { Github } from '@geist-ui/react-icons';
import Header from '../components/Header/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <Spacer y={2} />
      <Row gap={1} className="login-row">
        <Col className="login-column-left">Shark illustration</Col>
        <Col className="center-util">
          <Card>
            <Text h3>Signup for GitMeet</Text>
            <Spacer y={1} />
            <Text type="secondary" h6>
              Let's get you setup for meeting all those hot single-quote-using
              developers!
            </Text>
            <Spacer y={1} />
            {`{insert image here}`}
            <br />
            <Spacer y={1} />
            <Button icon={<Github />} type="secondary" size="large" auto>
              Signup with GitHub
            </Button>
            <Spacer y={1} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
