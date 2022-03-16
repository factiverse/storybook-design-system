export interface StyledLinkProps {
  containsIcon?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  nochrome?: boolean;
  inverse?: boolean;
  newTab?: boolean;
}

/**
 * Links can contains text and/or icons. Be careful using only icons, you must provide a text alternative via aria-label for accessibility.
 */
export type LinkProps = React.ComponentProps<typeof StyledLink> & {
  withArrow?: boolean;
  isButton?: boolean;
  LinkWrapper?: React.ComponentType<any>;
};

export const Link: forwardRef<HTMLAnchorElement | HTMLButtonElement, LinkProps>;
