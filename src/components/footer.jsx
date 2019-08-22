import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
  },
  siteMap: {
    maxWidth: '100%',
    minHeight: 200,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 0,
    backgroundColor: 'rgb(40, 44, 52)',
  },
  siteMapContent: {
    maxWidth: 280,
    margin: '0 auto',
    flex: '1 0 21%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  part: {
    minWidth: 200,
    margin: '12px 24px 0 24px',
  },
  link: {
    color: '#EEE',
  },
  footer: {
    maxWidth: '100%',
    position: 'relative',
    borderRadius: '0px',
  },
  footerContent: {
    width: '100%',
    minHeight: 24,
    backgroundColor: '#20232a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:last-child': {
      paddingBottom: 12,
    },
  },
  footerText: {
    color: '#DDDDDD',
  },
});

const Footer = ({ classes }) => (
  <div>
    <Card className={classes.siteMap}>
      <CardContent className={classes.siteMapContent}>
        <Typography className={classes.part} component="p">
          <a className={classes.link} href="/">
            Fly Academia 首页
          </a>
        </Typography>
        <Typography className={classes.part} component="p">
          <a className={classes.link} href="/#services">
            咨询服务
          </a>
        </Typography>
        <Typography className={classes.part} component="p">
          <a className={classes.link} href="/#downloads">
            文档下载
          </a>
        </Typography>
        <Typography className={classes.part} component="p">
          <a className={classes.link} href="https://mp.weixin.qq.com/s/9Rhrvkp_6A_KefyPQe8HZw" target="_blank" rel="noopener noreferrer">
            关于我们
          </a>
        </Typography>
      </CardContent>
      <CardContent className={classes.siteMapContent}>
        <Typography className={classes.part} component="p">
          <a className={classes.link} href="/">
            这里可以放一些学校
          </a>
        </Typography>
      </CardContent>
      <CardContent className={classes.siteMapContent}>
        <Typography className={classes.part} component="p">
          <a className={classes.link} href="/">
            这里可以放一些备案信息
          </a>
        </Typography>
      </CardContent>
    </Card>
    <Card className={classes.footer}>
      <CardContent className={classes.footerContent}>
        <Typography className={classes.footerText} component="p">
          {`©${new Date().getFullYear()} FLY ACADEMIA`}
        </Typography>
        <Typography className={classes.pos} component="p" />
      </CardContent>
    </Card>
  </div>
);


Footer.propTypes = {
  classes: PropTypes.shape().isRequired,
};

Footer.defaultProps = {
};

export default withStyles(styles)(Footer);
