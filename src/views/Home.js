import React from 'react';
import axios from 'axios';
import { Button, ButtonGroup, Card, Link } from '@geist-ui/react';
import { Github } from '@geist-ui/react-icons';
import Header from '../components/Header/Header';
import { loginUrl, verifyUrl } from '../env';
import { NavLink } from 'react-router-dom';

import landingShark from '../assets/landingSharkOne.png';
import footerShark from '../assets/landingSharkTwo.png';
import sharkWorking from '../assets/sharkWorking.png';
import sharkLaptop from '../assets/sharkLaptop.png';
import sharkReading from '../assets/sharkReading.png';
import sharkWine from '../assets/sharkWine.png';
import sharkTeam from '../assets/sharkTeamMeeting.png';

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
    return <NavLink to="/dash" />;
  }

  return (
    <>
      <Header />
      <div className="hero">
        <div className="login">
          <img className="shark-one" src={landingShark} alt="shark" />
          <Card hoverable>
            <div className="card-login">
              <h3>Signup for GitMeet</h3>
              <p>
                Let's get you setup for meeting all those hot single-quote-using
                developers!
              </p>
              <Button icon={<Github />} type="success" size="large">
                <Link href={loginUrl}>Signup With GitHub</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <div className="features-container">
        <div className="features slide">
          <div className="text-container">
            <div className="intro-text">
              <h1>Find other amazing developers in your city!</h1>
              <p>
                GitMeet finds all the cool projects from other awesome devs near
                you.
              </p>
              <p>
                Meeting like-minded developers can be difficult especially with
                the pandemic restricting our beloved meetups.
              </p>
              <p>
                With GitMeet, you could build a great project along with a new
                friendship!
              </p>
            </div>
          </div>
          <div className="gif-card">
            <img src={sharkWorking} alt="Shark working" />
          </div>
        </div>

        <div className="features slide">
          <div className="text-container">
            <div className="intro-text">
              <h1>Need contributors or struggling with finding projects?</h1>
              <p>
                Put up your projects for others to find and we'll share it with
                the right people.
              </p>
              <p>
                Looking for mentors or a cool project from a local? We'll share
                the most interesting projects in your feed!
              </p>
            </div>
          </div>
          <div className="gif-card">
            <img src={sharkLaptop} alt="Laptop Shark" />
          </div>
        </div>

        <div className="features slide">
          <div className="text-container">
            <div className="intro-text">
              <h1>Alright, I found a project, now what?</h1>
              <p>
                GitMeet has you covered friendo, you can do so much more than
                just finding great work!
              </p>
              <ul>
                <li className="square-list">
                  Reach out to the developer with a list of all their public
                  handles.
                </li>
                <li className="square-list">
                  Send a personalized message introducing yourself to them.
                </li>
                <li className="square-list">
                  Schedule a call to discuss about your interests, collaborating
                  and making a friend!
                </li>
              </ul>
            </div>
          </div>
          <div className="gif-card">
            <img src={sharkWine} alt="Shark Chilling" />
          </div>
        </div>

        <div className="features slide">
          <div className="text-container">
            <div className="intro-text">
              <h1>But reading long docs is boring...</h1>
              <p>
                We understand your pain, so we save your time by parsing all
                readmes, adding relevant tags and generating a TLDR for those
                super descriptive docs!
              </p>
            </div>
          </div>
          <div className="gif-card">
            <img src={sharkReading} alt="Shark Reading" />
          </div>
        </div>
      </div>

      <div className="about slide">
        <div className="text-container">
          <div className="intro-text">
            <h1>Why we built GitMeet?</h1>
            <ul>
              <li className="square-list">
                Having personal experiences struggling with finding great Open
                Source developers with similar interests, we decided to build
                our own platform to connect and help the OS community{' '}
              </li>
              <li className="square-list">
                Finding good mentors with projects to collaborate on can be
                difficult but it doesn't have to be when you can meetup and also
                be friends with them!
              </li>
              <li className="square-list">
                It let&#39;s you take your utility tools, a step further.
                Designed specifically to enhance your Fellowship experience.
              </li>
            </ul>
          </div>
        </div>
        <div className="gif-card">
          <img
            style={{ height: '300px', width: '400px' }}
            src={sharkTeam}
            alt="Shark team working hard"
          />
        </div>
      </div>

      <footer className="footer">
        <div className="contribute slide">
          <div className="img-container">
            <h2>Let's Git Meeting!</h2>
          </div>
          <div className="btn-container">
            <Button type="secondary">
              <Link href={loginUrl}>Signup With GitHub</Link>
            </Button>
            <Button style={{ marginLeft: '10px' }} type="secondary" ghost>
              <Link href="https://github.com/gitmeetin">
                Contribute to development
              </Link>
            </Button>
          </div>
        </div>
        <img src={footerShark} alt="Shark" className="shark-two" />
        <div className="copyright">Copyright &copy; 2020 GitMeet</div>
      </footer>
    </>
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
