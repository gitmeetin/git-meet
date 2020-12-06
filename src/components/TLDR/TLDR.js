import React from 'react';
import { Card, Spacer, Text } from '@geist-ui/react';

export default function TLDR(props) {
  return (
    <>
      <Card shadow>
        <Text h3>TLDR:</Text>
        <Text>{props.tldrData}</Text>
      </Card>
      <Spacer y={1} />
    </>
  );
}
