import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/core';
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
  Page,
  Link,
  Divider,
  Tag,
  Avatar,
} from '@geist-ui/react';
import { MessageSquare, User, Video, Star } from '@geist-ui/react-icons';
import Markdown from 'react-markdown';

import Header from '../components/Header/Header';
import SocialList from '../components/SocialList/SocialList';
import AvatarWithProfile from '../components/AvatarWithProfile/AvatarWithProfile';

import niceShark from '../assets/niceShark.png';

const octokit = new Octokit({
  auth: `a2252117889fd47ff2081f833fb8c51ced95a42b`,
});

export default function Profile() {
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await octokit.request('GET /user/repos');
      const profile = await octokit.request('GET /users/sauravhiremath');

      console.log(profile);

      setProfile(() => ({
        login: profile.data.login,
        avatar_url: profile.data.avatar_url,
        bio: profile.data.bio,
        repos_url: profile.data.repos_url,
      }));

      setRepos(() =>
        data.map((repo) => {
          return {
            name: repo.name,
            full_name: repo.full_name,
            description: repo.description,
            forks: repo.forks,
            stargazers_count: repo.stargazers_count,
            html_url: repo.html_url,
            language: repo.language,
            tags_url: repo.tags_url,
          };
        })
      );
    })();
  }, []);

  const ReposView = () => {
    return repos.map((repo) => {
      return (
        <Col span={8} style={{ maxHeight: '35vh', height: '35vh' }}>
          <Card shadow>
            <Card.Content>
              <h4>{repo.name}</h4>
              <Text>{repo.description}</Text>
              <Divider y={0} />
              <Star size={16} /> <Spacer x={0.1} inline />{' '}
              {repo.stargazers_count}
              <Divider y={1} volume={0} />
              <Tag type="warning" invert>
                {repo.language || 'none'}
              </Tag>
            </Card.Content>
            <Card.Footer>
              <Link color target="_blank" href={repo.html_url}>
                Visit source code on GitHub.
              </Link>
            </Card.Footer>
          </Card>
        </Col>
      );
    });
  };

  return (
    <Page size="large" dotBackdrop>
      <Page.Header></Page.Header>
      <Page.Content>
        <Row
          style={{
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            marginBottom: '2em',
          }}
          align="top"
        >
          <Col span={3}>
            <Avatar src={profile.avatar_url} size="large" />
          </Col>
          <Col span={21}>
            <Text h1>Profile</Text>
            <Text type="warning" b>
              {profile.bio}
            </Text>{' '}
            <br />
            <Text em>{profile.repos_url}</Text>
          </Col>
        </Row>
        <Row
          style={{
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}
          gap={0.8}
        >
          <ReposView />
        </Row>
      </Page.Content>
    </Page>
  );
}
