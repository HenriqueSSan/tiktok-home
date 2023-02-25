import React, { HTMLAttributes } from 'react';

export interface IParagraphProps extends HTMLAttributes<HTMLAllCollection> {
  as?: 'p' | 'span' | 'div' | 'strong' | string;
  classException?: string;
  highlight?: boolean | false | true | '';
}

function Component({ as, children, ..._props }: IParagraphProps) {
  return React.createElement(`${as}`, { ..._props }, children);
}

export function Paragraph({
  as = 'p',
  children,
  className,
  highlight = '',
  classException = '',
}: IParagraphProps) {
  const highlightStyles = 'text-primary-@100';

  return (
    <Component
      as={as}
      className={`${className} ${
        highlight && highlightStyles
      } ${classException}`}
    >
      {children}
    </Component>
  );
}
