import React from 'react';
import axios from 'axios';
import { Button, Card, Col, Row, Spacer, Text } from '@geist-ui/react';
import { Github } from '@geist-ui/react-icons';
import Header from '../components/Header/Header';
import { loginUrl, verifyUrl } from '../env';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const [isAuthorized, authorize] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      const authorized = await isValidated();
      if (authorized) authorize(true);
    };
    fetchData();
  }, []);

  // if user already "authenticated", redirect them to the app
  if (isAuthorized) {
    return <NavLink to="/app" />;
  }

  return (
    <div>
      <Header />
      <Spacer y={2} />
      <Row gap={1} className="login-row">
        <Col>Shark illustration</Col>
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
              <a href={loginUrl}>Signup with GitHub</a>
            </Button>
            <Spacer y={1} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

const isValidated = async () => {
  const base64Enc = localStorage.getItem('gitmeet-token');
  if (!base64Enc) {
    return false;
  }

  const tokenb64 = JSON.parse(atob(base64Enc));

  const { username, auth_token } = tokenb64;

  // console.log(`${host}/auth/verify`);
  // console.log(JSON.stringify({ username: tokenb64.username, ...tokens }));

  const isAuthorized = await axios.post(verifyUrl, {
    username,
    authToken: auth_token,
  });

  return isAuthorized && isAuthorized.data.success;
};
