import React, { useState } from 'react';
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
} from '@geist-ui/react';
import { MessageSquare, User, Video, Check, X } from '@geist-ui/react-icons';
import Markdown from 'react-markdown';

import Header from '../components/Header/Header';
import SocialList from '../components/SocialList/SocialList';
import TLDR from '../components/TLDR/TLDR';
import AvatarWithProfile from '../components/AvatarWithProfile/AvatarWithProfile';

import niceShark from '../assets/niceShark.png';

export default function Dash() {
  const mdTest = `<p align="center">
    <img height="200" src="https://user-images.githubusercontent.com/48270786/86530947-d68e0100-beda-11ea-9b17-af91633aec9e.png">
  </p>
  
  #### [Repository](https://github.com/kartik918/Ya-Like-Jazz)&nbsp;&nbsp;|&nbsp;&nbsp;[Issues](https://github.com/kartik918/Ya-Like-Jazz/issues)&nbsp;&nbsp;|&nbsp;&nbsp;[Author](https://github.com/kartik918)&nbsp;&nbsp;
  
  ## What it does
  
  Insert a line/para from the Bee Movie script to replace using the boring old Lorem Ipsum text for placeholder texts.
  
  ## Usage
  
  Open your command palette (press F1), type <code><i>jazz</i></code> and choose to insert a line or para.
  
  ![yalikejazz](https://user-images.githubusercontent.com/48270786/86530232-99267500-bed4-11ea-989e-a4577d0307e0.gif)
  ## Why I made it
  
  The world needs less lorem ipsum and more bees!
  
  ## Support
  
  This isn't exactly worth a cup of coffee but you can show support by using the extension, opening PRs, issues and dropping a star ⭐:)
  
  If you wish to donate, help out your local bee conservation organization! 🐝
  `;
  const avatarName = 'Saurav Hiremath';
  const avatarLink = 'https://github.com/sauravhiremath';
  const url =
    'https://avatars2.githubusercontent.com/u/28642011?s=400&u=410fa98db67e3e52030423c0450ea5583c79506d&v=4';

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

  return (
    <div>
      <Header />
      <Spacer y={1} />
      <Row gap={1}>
        <Col>
          {TldrVisible ? <TLDR tldrData={tldrData} /> : null}
          <Card shadow>
            <Markdown children={mdTest} skipHtml="true" />
            <Card.Footer style={{ marginRight: '0' }} className="center-util">
              <div className="card-footer-column">
                <div className="card-footer-column-left">
                  <AvatarWithProfile
                    avatarName={avatarName}
                    avatarUrl={url}
                    avatarLink={avatarLink}
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
                <X color="red" size={48} />
              </Button>
              <Spacer x={3} inline />
              <Button style={{ alignItems: 'center' }} auto>
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
