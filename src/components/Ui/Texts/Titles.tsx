import React, { HTMLAttributes } from 'react';

interface ITitleProps extends HTMLAttributes<HTMLTitleElement> {
  level: string | number;
}

export function Title({ level, children, ...props }: ITitleProps) {
  if (level > 6) {
    throw new Error(`Not exists title in level ${level}`);
  }

  function Component({ ..._props }: ITitleProps) {
    return React.createElement(`h${level}`, { ..._props }, children);
  }

  return (
    <Component level={level} {...props}>
      {children}
    </Component>
  );
}
