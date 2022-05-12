import React from 'react';
import { Card, Grid, Link, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Button from '../Button';

export interface ClaimProps {
  checkClaimClick: () => void;
  claim?: {
    domain: string;
    domainName: string;
    url?: string;
    claim: string;
    publishDate: string;
    label: string;
  };
  onLinkClicked?: () => void;
  simpleClaim?: string;
  simpleClaimTypographyStyles?: React.CSSProperties;
}

/* const defaultClaim = {claim:
      'Viral video of the moon rising in the North Pole is computer generated',
    domain: 'www.reuters.com',
    domainName: 'reuters',
    publishDate: '2022-04-27',
    label: 'Originated As Satire',
    url: 'https://topics.factiverse.no/',} */

const Claim = (props: ClaimProps) => {
  const {
    claim = {
      claim:
        'Viral video of the moon rising in the North Pole is computer generated',
      domain: 'www.reuters.com',
      domainName: 'reuters',
      publishDate: '2022-04-27',
      label: 'Originated As Satire',
      url: 'https://topics.factiverse.no/',
    },
    onLinkClicked,
    simpleClaim = 'An American was killed in Ukraine by a mine planted by Russian backed seperatists.',
    checkClaimClick,
    simpleClaimTypographyStyles,
  } = props;
  const theme = useTheme();
  const isMobileSize = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card>
      <Grid
        container
        item
        xs={12}
        py={0.5}
        px={2}
        justifyContent="space-between"
        alignItems="center"
      >
        {simpleClaim ? (
          <Typography style={simpleClaimTypographyStyles}>
            {simpleClaim}
          </Typography>
        ) : (
          claim && (
            <>
              <Grid container item xs={1} sm={2} lg={1} justifyContent="center">
                <Grid container direction="column" alignItems="center">
                  <Grid item>
                    <img
                      className={'Favicon'}
                      src={'https://' + claim.domain + '/favicon.ico'}
                      alt={'favicon ' + claim.domain}
                      onError={(i) =>
                        ((i.target as HTMLImageElement).style.display = 'none')
                      }
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant={isMobileSize ? 'subtitle2' : 'h6'}
                      sx={{ textTransform: 'capitalize' }}
                    >
                      {claim.domainName}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={9} sm={8} lg={9}>
                <Grid>
                  <Typography
                    variant={isMobileSize ? 'subtitle1' : 'h6'}
                    sx={{
                      color: 'crimson',
                      textTransform: 'capitalize',
                    }}
                  >
                    {claim.label}
                  </Typography>
                </Grid>
                <Grid>
                  <Link
                    rel="noopener noreferrer"
                    href={claim.url}
                    target="_blank"
                    color="textSecondary"
                    onClick={onLinkClicked}
                  >
                    <Typography variant={isMobileSize ? 'subtitle1' : 'h6'}>
                      {claim.claim}
                    </Typography>
                  </Link>
                </Grid>
                <Grid>
                  <Typography variant={isMobileSize ? 'subtitle2' : 'h6'}>
                    {claim.publishDate}
                  </Typography>
                </Grid>
              </Grid>
            </>
          )
        )}
        <Grid
          item
          xs={12}
          sm={2}
          container
          justifyContent="flex-end"
          mt={isMobileSize ? 2 : 0}
        >
          <Button onClick={checkClaimClick} label="Check Claim"></Button>
        </Grid>
      </Grid>
    </Card>
  );
};

/* Claim.propTypes = {
  checkClaimClick: PropTypes.func,
  claim: {
    domain: PropTypes.string,
    domainName: PropTypes.string,
    url: PropTypes.string,
    claim: PropTypes.string,
    publishDate: PropTypes.string,
    label: PropTypes.string,
  },
  onLinkClicked: PropTypes.func,
  simpleClaim: PropTypes.string,
  simpleClaimTypographyStyles: PropTypes.object,
};

Claim.defaultProps = {
  checkClaimClick: console.log('check claim'),
  claim: {
    domain: 'www.reuters.com',
    domainName: 'reuters',
    url: 'https://topics.factiverse.no/',
    claim:
      'Viral video of the moon rising in the North Pole is computer generated',
    publishDate: '2022-04-27',
    label: 'Originated As Satire',
  },
  onLinkClicked: console.log('claim link clicked'),
  simpleClaim:
    'An American was killed in Ukraine by a mine planted by Russian backed seperatists.',
  simpleClaimTypographyStyles: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
  },
}; */

export default Claim;
