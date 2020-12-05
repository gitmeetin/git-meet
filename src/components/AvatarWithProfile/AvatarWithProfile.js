import React from 'react';
import { Avatar, Row, Text } from '@geist-ui/react';

export default function AvatarWithProfile(props) {
  return (
    <a href={props.avatarLink}>
      <Row>
        <Avatar src={props.avatarUrl} />
        <Text h5 style={{ paddingLeft: '5px' }}>
          {props.avatarName}
        </Text>
      </Row>
    </a>
  );
}
