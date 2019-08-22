import PropTypes from "prop-types"
import React from "react"
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoneIcon from '@material-ui/icons/Done';

const styles = theme => ({
  root: {

  },
  cards: {
    maxWidth: 1280,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    flex: '1 0 21%',
    minWidth: 200,
    margin: '24px 24px 0 24px',
  },
  title: {
    fontSize: '1.6em',
    color: 'rgb(0, 0, 0, 0.68)',
    textAlign: 'center',
  },
  pos: {
    marginBottom: 12,
  },
  list: {
    padding: 0,
    marginLeft: 24,
  },
});

const genrateList = (list, classes) => (list.map(item => (
  <ListItem className={classes.list}>
    <ListItemIcon>
      <DoneIcon />
    </ListItemIcon>
    <ListItemText primary={item} />
  </ListItem>
)));

const Services = (list, classes) => (
  list.map(s => (
    <Card className={[classes.card].join(' ')}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
          { s.name }
        </Typography>
        <Typography className={classes.pos} component="p">
        </Typography>
        <List dense="true">
          { genrateList(s.content, classes) }
        </List>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  ))
);

const Cards = ({ list, classes }) => (
  <div className={classes.cards}>
    <a className="anchor" name="services" href="#services">services</a>
    { Services(list, classes) }
  </div>
)

Cards.propTypes = {
  siteTitle: PropTypes.string,
  classes: PropTypes.object.isRequired,
}

Cards.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(Cards);
