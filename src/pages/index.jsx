import 'swiper/dist/css/swiper.min.css';

import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Cards from '../components/index/cards';
import Content from '../components/index/content';
import Cover from '../components/index/cover';
import Guilder from '../components/index/guider';
import Achievement from '../components/index/achievement';
import Layout from '../components/layout';
import SEO from '../components/seo';

const services = [
  {
    name: '硕士DIY',
    content: [
      '60分钟电话指导',
      '英语考试指导',
      '选校推荐',
      '答疑',
      '全套文书修改',
      '奖学金申请',
      '套磁指导',
      '模拟面试',
      'Offer选择',
    ],
  },
  {
    name: '博士DIY',
    content: [
      '60分钟电话指导',
      '英语考试指导',
      '选校推荐',
      '答疑',
      '全套文书修改',
      '奖学金申请',
      '套磁指导',
      '模拟面试',
      'Offer选择',
    ],
  },
  {
    name: '硕士DIY',
    content: [
      '60分钟电话指导',
      '英语考试指导',
      '选校推荐',
      '答疑',
      '全套文书修改',
      '奖学金申请',
      '套磁指导',
      '模拟面试',
      'Offer选择',
    ],
  },
];

const guiders = [
  {
    name: '范春',
    score: '4.80',
    taskCount: 18,
    experts: [
      '文书修改',
      '半DIY',
    ],
    tags: [
      '留学生',
      '研究生',
    ],
    universities: [
      '挪威科学与技术大学',
    ],
  },
  {
    name: '舒江鹏',
    score: '5.00',
    taskCount: 98,
    experts: [
      'VIP高端咨询',
      '专属DIY',
    ],
    tags: [
      '博士生导师',
      '副教授',
    ],
    universities: [
      '斯坦福大学',
      '瑞典皇家理工大学',
      '挪威科学与技术大学',
    ],
  },
  {
    name: '范春',
    score: '5.00',
    taskCount: 98,
    experts: [
      '文书修改',
      '半DIY',
    ],
    tags: [
      '留学生',
      '研究生',
    ],
    universities: [
      'Norwegian University of Science and Technology',
    ],
  },
];


const styles = () => ({
});

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Cover />
    <Cards list={services} />
    <Content />
    <Guilder list={guiders} />
    <Achievement />
  </Layout>
);

IndexPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(IndexPage);
