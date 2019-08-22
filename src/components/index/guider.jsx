import './guider.css';

import { Autoplay, Pagination } from 'swiper/dist/js/swiper.esm';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import React from 'react';
import Swiper from 'react-id-swiper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Chun from '../../images/profile/Chun.jpeg';

const styles = () => ({
  root: {
  },
  topTitle: {
    marginTop: 36,
    textAlign: 'center',
    fontSize: '2.0em',
    color: 'rgba(0, 0, 0, 0.58)',
  },
  card: {
    backgroundColor: 'white',
    height: '100%',
    width: '72%',
  },
  avatar: {
    margin: '0 auto',
    width: 80,
    height: 80,
    alignItems: 'inherit',
    marginBottom: 12,
  },
  guiderContent: {
    textAlign: 'center',
    marginBottom: 12,
    fontSize: '0.8em',
  },
  university: {
    fontSize: 16,
  },
  score: {
    color: '#F44336',
  },
  cardActionButton: {
    margin: '0 auto',
    marginBottom: 16,
  },
});

const params = {
  modules: [Pagination, Autoplay],
  loop: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: true,
  shouldSwiperUpdate: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
};

const Experts = (list, classes) => (list.map(expert => (
  <Chip label={expert} className={classes.chip} />
)));

const Tags = (list, classes) => (list.map(tag => (
  <Chip label={tag} className={classes.chip} variant="outlined" />
)));

const Universities = (list, classes) => (list.map(university => (
  <Typography className={classes.university} variant="h6" component="p">
    { university }
  </Typography>
)));

const Guiders = (list, classes) => (
  list.map(({
    name, experts, tags, universities, score, taskCount,
  }) => (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Avatar alt="Remy Sharp" src={Chun} className={classes.avatar} />
          <Typography className={classes.guiderContent} variant="h5" component="p">
            { name }
          </Typography>
          <div className={classes.guiderContent}>
            { Experts(experts, classes) }
          </div>
          <div className={classes.guiderContent}>
            { Tags(tags, classes) }
          </div>
          <div className={classes.guiderContent}>
            { Universities(universities, classes) }
          </div>
          <Typography className={classes.guiderContent} variant="h6" component="p">
            评分: <span className={classes.score}>{score}</span>
          </Typography>
          <Typography className={classes.guiderContent} variant="h6" component="p">
            服务人数: <span className={classes.score}>{taskCount}</span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.cardActionButton} size="small" variant="outlined">了解详情</Button>
        </CardActions>
      </Card>
    </div>
  ))
);

const Guider = ({ list, classes }) => (
  <div>
    <Typography className={classes.topTitle} component="h2">
      优秀导师
    </Typography>
    <Swiper {...params}>
      { Guiders(list, classes) }
    </Swiper>
  </div>
);

Guider.propTypes = {
  list: PropTypes.shape([]).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

Guider.defaultProps = {
};

export default withStyles(styles)(Guider);
