import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { navigate } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    margin: '0 auto',
    padding: '0px 48px 48px',
    paddingTop: 24,
  },
  appBar: {
    position: 'fixed',
    top: 0,
    backgroundColor: '#20232a',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: 56,
  },
  left: {
    marginRight: 'auto',
  },
  right: {
    marginLeft: 'auto',
  },
};

const Header = ({ classes }) => (
  <AppBar className={classes.appBar} position="static">
    <Toolbar className={classes.menu}>
      <div className={classes.left}>
        <Typography variant="h6" color="inherit" className={classes.logo}>
          FLYACADEMIA
        </Typography>
      </div>
      <div className={classes.right}>
        <Button color="inherit" size="large" onClick={() => { navigate('/'); }}>首页</Button>
        <Button color="inherit" size="large" onClick={() => { navigate('/#services'); }}>咨询服务</Button>
        <Button color="inherit" size="large" onClick={() => { navigate('/#downloads'); }}>文档下载</Button>
        <Button color="inherit" size="large" onClick={() => { window.open('https://mp.weixin.qq.com/s/9Rhrvkp_6A_KefyPQe8HZw', '_blank'); }}>关于我们</Button>
      </div>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

Header.defaultProps = {
};

export default withStyles(styles)(Header);
