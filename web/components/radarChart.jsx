import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'SEO',
    A: 55,
    B: 60,
    fullmark: 100,
  },
  {
    subject: 'Performance',
    A: 98,
    B: 130,
    fullmark: 100,
  },
  {
    subject: 'Accessibility',
    A: 86,
    B: 130,
    fullmark: 100,
  },
  {
    subject: 'Best practices',
    A: 99,
    B: 100,
    fullmark: 100,
  },
  {
    subject: 'Something else',
    A: 99,
    B: 100,
    fullmark: 100,
  },
  
  
  
  
];

export default class CustomRadarChart extends PureComponent {
  

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar dataKey="A" stroke="#560E62" fill="#8884d8" fillOpacity={0.5} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}