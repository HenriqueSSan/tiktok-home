import * as React from 'react';

import Link from 'next/link';

// allow this component to accept all properties of "a" tag
export interface ILinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  // we can add more properties we need from next/link in the future
}

// Forward Refs, is useful

// eslint-disable-next-line react/display-name
export const NextLink = React.forwardRef(
  ({ to, ...props }: ILinkProps, ref: any) => {
    return <Link href={to} {...props} ref={ref}></Link>;
  }
);
