/* eslint-disable new-cap */
import { Paper } from '@mui/material';
import React from 'react';
export interface FaviconProps {
  /**
   * Ideally only root domains should be given but most URLs will work.
   *
   * @example google.com
   */
  rootDomain: string;
}

/**
 * Displays the favicon for a given website.
 *
 * @return {React.FC}
 */
const Favicon: React.FC<FaviconProps> = ({ rootDomain }) => {
  /**
   * Removes the protocol, subdomain and folders (if any) from a given URL to get only the root domain.
   *
   * @example
   * https://topics.factiverse.no/home gets turned into factiverse.no
   *
   * @param {string} url
   * @return {string} The root domain
   */
  const getRootDomain = (url: string) => {
    // TODO: This function fails if there are multiple domain names but no subdomain, is there a better way than including common exceptions?
    // Special cases
    if (url.includes('bbc.co.uk')) return 'bbc.co.uk';

    // Remove folders and protocol
    const splitUrl = url.split('/');
    let domain = '';
    for (let i = 0; i < splitUrl.length; i++) {
      if (splitUrl[i].includes('.')) {
        domain = splitUrl[i];
        break;
      }
    }
    // Remove subdomain
    const splitDomain = domain.split('.');
    const length = splitDomain.length;
    // If there is no subdomain it simply returns, otherwise it removes the subdomain
    return length == 2 ? splitDomain.join('.') : splitDomain.slice(1).join('.');
  };

  return (
    <Paper sx={{ height: 34, width: 34 }} variant="outlined" elevation={3}>
      <img
        width={32}
        // DuckDuckGo scrapes favicons and catches all different ways of adding them to a website
        src={
          'https://icons.duckduckgo.com/ip2/www.' +
          getRootDomain(rootDomain) +
          '.ico'
        }
        alt={'favicon ' + getRootDomain(rootDomain)}
      />
    </Paper>
  );
};

export default Favicon;
