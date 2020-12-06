import React from 'react';
import { Card, Spacer, Text } from '@geist-ui/react';
import Markdown from 'react-markdown';

export default function TLDR(props) {
  return (
    <>
      <Card shadow>
        <Text h3>TLDR:</Text>
        <Markdown children={props.tldrData} skipHtml="true" />
      </Card>
      <Spacer y={1} />
    </>
  );
}
