import React from 'react';
import { Card, Grid, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Button from '../Button';
import Typography from '../Typography';
import { Variant } from '@mui/material/styles/createTypography';

export interface ClaimProps {
  checkClaimClick: () => void;
  claim?: {
    domain: string;
    domainName: string;
    claim: string;
    publishDate: string;
    label: string;
    url?: string;
  };
  onLinkClicked?: () => void;
  simpleClaim?: string;
  simpleClaimFontFamily?: 'DM Mono' | 'Arizona Serif';
  simpleClaimVariant?: Variant;
  simpleClaimStyles?: React.CSSProperties;
}

export const defaultClaim = {
  claim:
    'Viral video of the moon rising in the North Pole is computer generated',
  domain: 'www.reuters.com',
  domainName: 'reuters',
  publishDate: '2022-04-27',
  label: 'Originated As Satire',
  url: 'https://topics.factiverse.no/',
};

const Claim = (props: ClaimProps) => {
  const {
    claim = defaultClaim,
    onLinkClicked,
    simpleClaim = false,
    checkClaimClick,
    simpleClaimStyles,
    simpleClaimVariant = 'caption',
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
          <Grid item xs={10}>
            <Typography variant={simpleClaimVariant} sx={simpleClaimStyles}>
              {simpleClaim}
            </Typography>
          </Grid>
        ) : (
          claim && (
            <>
              <Grid
                container
                item
                xs={12}
                sm={2}
                lg={1}
                justifyContent="center"
              >
                <Grid container direction="column" alignItems="center">
                  <Grid item>
                    <img
                      style={{ width: 25, height: 25 }}
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
              <Grid item xs={12} sm={8} lg={9}>
                <Grid>
                  <Typography
                    variant={isMobileSize ? 'subtitle1' : 'h6'}
                    sx={{
                      color: 'crimson',
                      textTransform: 'capitalize',
                    }}
                  >
                    {claim.label}:
                  </Typography>
                </Grid>
                <Grid>
                  <Link
                    rel="noopener noreferrer"
                    href={claim.url}
                    target="_blank"
                    color="textPrimary"
                    onClick={onLinkClicked}
                  >
                    <Typography variant={isMobileSize ? 'subtitle1' : 'h6'}>
                      {claim.claim}
                    </Typography>
                  </Link>
                </Grid>
                <Grid>
                  <Typography
                    fontFamily="DM Mono"
                    variant={isMobileSize ? 'subtitle2' : 'subtitle1'}
                  >
                    {claim.publishDate}
                  </Typography>
                </Grid>
              </Grid>
            </>
          )
        )}
        <Grid
          item
          xs={simpleClaim ? 2 : 12}
          sm={2}
          container
          justifyContent={isMobileSize ? 'center' : 'flex-end'}
          my={isMobileSize && !simpleClaim ? 1 : 0}
        >
          <Button onClick={checkClaimClick} label="Check Claim"></Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Claim;
