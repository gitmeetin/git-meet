import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Modal,
  Row,
  Spacer,
  Input,
  Text,
  useToasts,
} from '@geist-ui/react';
import { MessageSquare, User, Video, Check, X } from '@geist-ui/react-icons';
import Markdown from 'react-markdown';

import Header from '../components/Header/Header';
import SocialList from '../components/SocialList/SocialList';
import TLDR from '../components/TLDR/TLDR';
import AvatarWithProfile from '../components/AvatarWithProfile/AvatarWithProfile';
import data from './data';

import niceShark from '../assets/niceShark.png';
import { NavLink } from 'react-router-dom';

export default function Dash() {
  const socialData = {
    github: 'sauravhiremath',
    twitter: 'sauravhiremath',
    email: 'sauravhiremath@gmail.com',
    website: 'http://sauravmh.com/',
  };

  const tldrData = 'This is sample TLDR data';

  const [TldrVisible, setTldrVisible] = useState(true);
  const [SocialsModal, setSocialsModal] = useState(false);
  const [VideoModal, setVideoModal] = useState(false);
  const [InviteModal, setInviteModal] = useState(false);
  const [toast, setToast] = useToasts();
  const [userData, setUserData] = useState(data);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Header />
      <Spacer y={1} />
      <Row gap={1}>
        <Col>
          {TldrVisible ? <TLDR tldrData={tldrData} /> : null}
          <Card shadow>
            <Markdown children={userData[counter].readme} skipHtml="true" />
            <Card.Footer style={{ marginRight: '0' }} className="center-util">
              <div className="card-footer-column">
                <div className="card-footer-column-left">
                  <AvatarWithProfile
                    avatarName={userData[counter].avatarName}
                    avatarUrl={userData[counter].avatarUrl}
                    avatarLink={userData[counter].repoLink}
                  />
                </div>
                <div className="card-footer-column-right">
                  <ButtonGroup style={{ marginRight: '0' }} type="success">
                    <Button
                      style={{ display: 'flex' }}
                      onClick={() => setSocialsModal(true)}
                    >
                      <User />
                    </Button>
                    <Button
                      style={{ display: 'flex' }}
                      onClick={() => setVideoModal(true)}
                    >
                      <Video />
                    </Button>
                    <Button
                      style={{ display: 'flex' }}
                      onClick={() => setInviteModal(true)}
                    >
                      <MessageSquare />
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </Card.Footer>
          </Card>
          <Spacer y={3} />

          <Col align="middle">
            <div className="meetButton">
              <Button auto>
                <X
                  color="red"
                  size={48}
                  onClick={() => {
                    setToast({
                      text: 'You rejected the project',
                      type: 'warning',
                    });
                    setCounter((counter + 1) % 3);
                    window.location = window.location + '#impHeader';
                  }}
                />
              </Button>
              <Spacer x={3} inline />
              <Button
                style={{ alignItems: 'center' }}
                auto
                onClick={() => {
                  setToast({
                    text: 'You liked a project! Added to your list :D',
                    type: 'success',
                  });
                  setCounter((counter + 1) % 3);
                  window.location = window.location + '#impHeader';
                }}
              >
                <Check color="Green" size={48} />
              </Button>
            </div>
          </Col>
        </Col>
      </Row>

      {/* Socials Modal */}
      <Modal open={SocialsModal} onClose={() => setSocialsModal(false)}>
        <Modal.Title>Reach out!</Modal.Title>
        <Modal.Content>
          <SocialList socialData={socialData} />
        </Modal.Content>
        <Modal.Action passive onClick={() => setSocialsModal(false)}>
          Close
        </Modal.Action>
      </Modal>

      {/* Video Modal */}
      <Modal open={VideoModal} onClose={() => setVideoModal(false)}>
        <Modal.Title>Setup a Meet!</Modal.Title>
        <Modal.Content>
          <p>Choose a comfortable date and time.</p>
          <DatePicker selected={new Date()} onChange={() => {}} />
        </Modal.Content>
        <Modal.Action passive onClick={() => setVideoModal(false)}>
          Cancel
        </Modal.Action>
        <Modal.Action>Submit</Modal.Action>
      </Modal>

      {/* Invite Modal */}
      <Modal open={InviteModal} onClose={() => setInviteModal(false)}>
        <Modal.Title>Send a personalized message</Modal.Title>
        <Modal.Subtitle>
          <img src={niceShark} alt="nice shark" />
        </Modal.Subtitle>
        <Text secondary>Be nice!</Text>
        <Modal.Content>
          <Input placeholder="Hi there!" width="100%" />
        </Modal.Content>
        <Modal.Action passive onClick={() => setInviteModal(false)}>
          Cancel
        </Modal.Action>
        <Modal.Action>Send</Modal.Action>
      </Modal>
      <Spacer y={1} />
    </div>
  );
}
