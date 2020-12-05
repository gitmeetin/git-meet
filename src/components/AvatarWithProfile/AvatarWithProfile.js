import React from 'react';
import { User, Row } from '@geist-ui/react';

export default function AvatarWithProfile(props) {
  return (
    <Row>
      <User src={props.avatarUrl} name={props.avatarName}>
        <User.Link href={props.avatarLink}>GitHub</User.Link>
      </User>
    </Row>
  );
}
