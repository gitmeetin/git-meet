import React from 'react';
import { Button, Card, Col, Row, Spacer, Text } from '@geist-ui/react';
import Markdown from 'react-markdown';
import { Github } from '@geist-ui/react-icons';

import Header from '../components/Header/Header';

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

  return (
    <div>
      <Header />
      <Spacer y={1} />
      <Row gap={1}>
        <Col>
          <Card shadow>
            <Markdown children={mdTest} skipHtml="false" />
          </Card>
        </Col>
      </Row>
      <Spacer y={1} />
    </div>
  );
}
