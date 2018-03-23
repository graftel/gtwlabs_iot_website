import React from 'react';
import ReactDOM from 'react-dom';

class Line extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [ {
                x: [1 ,  2,  3,  4,  5,  6,  7,  8,  9,  10],
                y: [10, 15, 13, 17, 12, 13, 31, 22, 11,  10],
                type: 'scatter'
                },
                {
                    x: [1, 2, 3, 4],
                    y: [16, 5, 11, 9],
                    type: 'scatter'
                }
            ],
            layout: {
                autosize: true,
                width: (props.pWidth.includes("%") ? (parseFloat(props.pWidth) * props.pTotalWidth / 100) : (parseFloat(props.pWidth)) ) - 50,
                height: props.pHeight - 50,
                margin: {
                    l: 30,
                    r: 0,
                    b: 30,
                    t: 20,
                    pad: 0
                    }
                },
            loaded: false,
            }
      }

    plot() {
        console.log('plot' + this.props.index.toString());
        Plotly.newPlot('plot' + this.props.index.toString(), this.state.data, this.state.layout, {displayModeBar: false});
        //console.log('plot' + this.props.index.toString());
    }
    componentDidMount () {
        this.setState({loaded: true});
        this.plot();
    }

    

  render() {
    return (
        <div>
            <div className="col NonDraggableAreaPlot" id={"plot" + this.props.index.toString()} ></div>
        </div>
    );
  }
};

export default Line;