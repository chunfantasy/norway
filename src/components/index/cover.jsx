import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  root: {
    maxWidth: '100%',
    position: 'relative',
  },
  card: {
    borderRadius: '0px',
  },
  content: {
    height: '320px',
    backgroundColor: 'rgb(40, 44, 52)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slogen: {
    display: 'flex',
  },
  slogenTop: {
    color: 'rgb(97, 218, 251)',
    fontSize: '2.4em',
  },
  slogenMiddle: {
    color: '#EEEEEE',
    fontSize: '2.0em',
  },
  slogenBottom: {
    color: 'rgb(97, 218, 251)',
    fontSize: '1.6em',
  },
});

const Cover = ({ classes }) => (
  <Card className={classes.card}>
    <CardContent
      className={classes.content}
    >
      <Typography className={[classes.slogen, classes.slogenTop].join(' ')} component="h2">
        FLY ACADEMIA
      </Typography>
      <Typography className={[classes.slogen, classes.slogenMiddle].join(' ')} component="h2">
        最学术的留学咨询服务机构
      </Typography>
      <Typography className={[classes.slogen, classes.slogenBottom].join(' ')} component="h2">
        Lead to world-class education with excellent academia expertise
      </Typography>
    </CardContent>
  </Card>
);

Cover.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

Cover.defaultProps = {
};

export default withStyles(styles)(Cover);
