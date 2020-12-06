import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, ButtonDropdown, Card, Text } from '@geist-ui/react';

import './Header.css';

export default function Header(props) {
  return (
    <Card shadow className="navbar" id="impHeader">
      <ul>
        <li className="nav-link">
          <Link color to="/" target="_blank">
            GitMeet
          </Link>
        </li>
        <li className="nav-link" style={{ float: 'right' }}>
          <ButtonDropdown auto>
            <ButtonDropdown.Item main>
              <Avatar src={props.avatarUrl} size="small" />
              <Text style={{ marginLeft: '10px' }}>{props.avatarName}</Text>
            </ButtonDropdown.Item>
            <ButtonDropdown.Item>Add projects</ButtonDropdown.Item>
            <ButtonDropdown.Item>Profile</ButtonDropdown.Item>
            <ButtonDropdown.Item>Settings</ButtonDropdown.Item>
            <ButtonDropdown.Item type="error">Logout</ButtonDropdown.Item>
          </ButtonDropdown>
        </li>
      </ul>
    </Card>
  );
}

Header.defaultProps = {
  avatarUrl:
    'https://user-images.githubusercontent.com/48270786/101278313-821be400-37e0-11eb-93ed-be70df7605ce.png',
  avatarName: 'Sharky',
};
