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

const Claim = (props: ClaimProps) => {
  const {
    claim,
    onLinkClicked,
    simpleClaim,
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

export default Claim;
