import React from "react"
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles'
import test from '../images/test.png'

let cv;

const main = () => {
    const src = cv.imread('testImg');
    console.log('image width: ' + src.cols + '\n' +
            'image height: ' + src.rows + '\n' +
            'image size: ' + src.size().width + '*' + src.size().height + '\n' +
            'image depth: ' + src.depth() + '\n' +
            'image channels ' + src.channels() + '\n' +
            'image type: ' + src.type() + '\n');

    cv.imshow('canvasOutput', src);
    src.delete();
};

const loadOpenCV = () => {
    const script = document.createElement("script");
    script.src = "/opencv.js";
    script.async = true;
    document.body.appendChild(script);
}

const styles = () => ({});

class OpenCVPage extends React.Component {
  componentWillMount() {
  }
  componentDidMount(){
    loadOpenCV();
    window.Module = {
      onRuntimeInitialized: function() {
          console.log('initialiezed');
          cv = window.cv;
          main();
      },
    };
  }
  render() {
    return (
      <div>
        <img id="testImg" src={test} alt=""></img>
        <canvas id="canvasOutput"></canvas>
      </div>
    )
  }
}

OpenCVPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OpenCVPage);
