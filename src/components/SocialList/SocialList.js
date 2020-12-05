import React from 'react';
import { Link, Spacer } from '@geist-ui/react';
import { Github, Mail, Twitter, Globe } from '@geist-ui/react-icons';

export default function SocialList({ socialData }) {
  return (
    <div>
      <div>
        <Github />
        <Link href="#" icon color className="social-label">
          {socialData.github}
        </Link>
        <Spacer y={0.5} />
      </div>
      <div>
        <Mail />
        <Link href="#" icon color className="social-label">
          {socialData.twitter}
        </Link>
        <Spacer y={0.5} />
      </div>
      <div>
        <Twitter />
        <Link href="#" icon color className="social-label">
          {socialData.email}
        </Link>
        <Spacer y={0.5} />
      </div>
      <div>
        <Globe />
        <Link href="#" icon color className="social-label">
          {socialData.website}
        </Link>
        <Spacer y={0.5} />
      </div>
    </div>
  );
}
