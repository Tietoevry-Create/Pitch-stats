import React, {Component} from 'react';
import RadarChart from 'radar-chart';
import {Hint} from 'index';


const DATA = [
  {
    name: 'Spider5',
    mileage: 5,
    price: 5,
    safety: 5,
    performance: 5,
    interior: 5,
    warranty: 5,
    fill: '#f8f8f8',
    stroke: '#cccccc'
  },
  {
    name: 'Spider4',
    mileage: 4,
    price: 4,
    safety: 4,
    performance: 4,
    interior: 4,
    warranty: 4,
    fill: 'white',
    stroke: '#cccccc'
  },
  {
    name: 'Spider3',
    mileage: 3,
    price: 3,
    safety: 3,
    performance: 3,
    interior: 3,
    warranty: 3,
    fill: '#f8f8f8',
    stroke: '#cccccc'
  },
  {
    name: 'Spider2',
    mileage: 2,
    price: 2,
    safety: 2,
    performance: 2,
    interior: 2,
    warranty: 2,
    fill: 'white',
    stroke: '#cccccc'
  },
  {
    name: 'Spider1',
    mileage: 1,
    price: 1,
    safety: 1,
    performance: 1,
    interior: 1,
    warranty: 1,
    fill: '#f8f8f8',
    stroke: '#cccccc'
  },
  {
    name: 'Spider0',
    mileage: 0.1,
    price: 0.1,
    safety: 0.1,
    performance: 0.1,
    interior: 0.1,
    warranty: 0.1,
    fill: '#f8f8f8',
    stroke: '#cccccc'
  },
  {
    name: 'Dagbladet',
    mileage: 3,
    price: 4,
    safety: 5,
    performance: 1.5,
    interior: 4,
    warranty: 4.5,
    fill: 'rgba(114,172,240,0.5)',
    stroke: 'rgba(114,172,240,0.2)'
  }
];

const tipStyle = {
  display: 'flex',
  color: '#fff',
  background: '#000',
  alignItems: 'center',
  padding: '5px'
};

export default class RadarChartWithTooltips extends Component {
  state = {
    hoveredCell: false
  };

  render() {
    const {hoveredCell} = this.state;

    return (
      <RadarChart
        data={DATA}
        tickFormat={t => {
          return '';
        }}
        domains={[
          {
            name: 'mileage',
            domain: [0, 5],
            tickFormat: t => {
              if (t < 5 && t > 0) {
                return Math.round(t);
              }
              return '';
            }
          },
          {
            name: 'price',
            domain: [0, 5],
            getValue: d => d.price
          },
          {name: 'safety', domain: [0, 5], getValue: d => d.safety},
          {name: 'performance', domain: [0, 5], getValue: d => d.performance},
          {name: 'interior', domain: [0, 5], getValue: d => d.interior},
          {name: 'warranty', domain: [0, 5], getValue: d => d.warranty}
        ]}
        width={300}
        height={300}
        onValueMouseOver={v => {
          this.setState({hoveredCell: v});
        }}
        onValueMouseOut={v => this.setState({hoveredCell: false})}
        style={{
          polygons: {
            strokeWidth: 1,
            strokeOpacity: 0.8,
            fillOpacity: 0.8
          },
          labels: {
            textAnchor: 'middle'
          },
          axes: {
            line: {
              fillOpacity: 0.8,
              strokeWidth: 0.5,
              strokeOpacity: 0.8
            },
            ticks: {
              fillOpacity: 0,
              strokeOpacity: 0
            },
            text: {}
          }
        }}
        colorRange={['transparent']}
        hideInnerMostValues={false}
        renderAxesOverPolygons={true}
      >
        {hoveredCell &&
          hoveredCell.dataName === 'Dagbladet' && (
            <Hint value={hoveredCell}>
              <div style={tipStyle}>
                {hoveredCell.domain}: {hoveredCell.value}
              </div>
            </Hint>
          )}
      </RadarChart>
    );
  }
}