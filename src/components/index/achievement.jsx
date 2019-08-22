import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    maxWidth: '100%',
    position: 'relative',
  },
  card: {
    borderRadius: '0px',
    marginTop: '24px',
  },
  content: {
    height: '320px',
    backgroundColor: 'rgb(40, 44, 52, 0.28)',
    // backgroundColor: '#ebeff0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slogen: {
    display: 'flex',
  },
  slogenTop: {
    color: 'rgba(0, 0, 0, 0.58)',
    fontSize: '2.0em',
  },
  slogenMiddle: {
    color: 'rgba(0, 0, 0, 0.28)',
    fontSize: '1.6em',
  },
  slogenBottom: {
    color: 'rgba(0, 0, 0, 0.28)',
    fontSize: '1.2em',
  },
  button: {
    marginTop: 16,
    color: 'rgba(0, 0, 0, 0.58)',
  },
});

const Content = ({ classes }) => (
  <Card className={classes.card}>
    <a className="anchor" name="downloads" href="#downloads">downloads</a>
    <CardContent className={classes.content}>
      <Typography className={[classes.slogen, classes.slogenTop].join(' ')} component="h2">
        VIP高端申请
      </Typography>
      <Typography className={[classes.slogen, classes.slogenMiddle].join(' ')} component="h2">
        根据您的情况制定最适合您的整套申请方案
      </Typography>
      <Typography className={[classes.slogen, classes.slogenBottom].join(' ')} component="h2">
        并完成申请过程中的全部事宜，助您成功拿到Dream School的Offer
      </Typography>
      <Button className={classes.button} size="large" variant="outlined">了解详情</Button>
    </CardContent>
  </Card>
);

Content.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

Content.defaultProps = {
};

export default withStyles(styles)(Content);
