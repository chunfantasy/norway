import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    maxWidth: '100%',
    position: 'relative',
  },
  divider: {
    width: '80%',
  },
  container: {
    marginTop: 36,
    borderRadius: 0,
  },
  content: {
    height: 300,
    backgroundColor: 'rgb(40, 44, 52, 0.08)',
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
    marginTop: 24,
    color: 'rgba(0, 0, 0, 0.58)',
  },
});

const Content = ({ classes }) => (
  <div>
    <div className={classes.container}>
      <a className="anchor" name="downloads" href="#downloads">downloads</a>
      <div className={classes.content}>
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
      </div>
    </div>
  </div>
);

Content.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

Content.defaultProps = {
};

export default withStyles(styles)(Content);
