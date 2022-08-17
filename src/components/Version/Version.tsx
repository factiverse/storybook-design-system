import React from 'react';
import { version } from '../../../package.json';

export interface VersionProps {
  disabled?: boolean;
  color?: string;
  title?: string;
}

const Version = (props: VersionProps) => {
  const { color, title = version } = props;

  return (
    <a aria-label={title} color={color}>
      {title}
    </a>
  );
};

export default Version;
