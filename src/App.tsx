import React from 'react'
import appleStock, { AppleStock } from '@visx/mock-data/lib/mocks/appleStock'
import useMeasure from 'react-use-measure'
import { scaleBand, scaleLinear } from '@visx/scale'
import {Group} from '@visx/group'

import { getValue } from '@testing-library/user-event/dist/utils'
import { AxisBottom, AxisLeft } from '@visx/axis'
import { Bar } from '@visx/shape'
import BarChart from './bar'
import AxisChart from './axis'
import PieChart from './pie'
import DounutChart from './dounut'

const data = appleStock.slice(0,10)

const margin = 32

const defaultWidth = 100

const defaultHeight = 100

const getXValue = (d: AppleStock) => new Date(d.date).toLocaleDateString()
const getYValue = (d: AppleStock) => d.close


export default ()=>{

  const [ref, bounds] = useMeasure();

  const width = bounds.width || defaultWidth
  const height = bounds.height || defaultHeight


  const innerWidth = width - margin * 2;
  const innerHeight = height - margin * 2;


  const xScale = scaleBand<string>({
    range: [margin, innerHeight],
    domain: data.map(getXValue),
    padding: 0.2
  });

  

  const yScale = scaleLinear<number>({
    range: [innerHeight, margin],
    domain: [
      Math.min(...data.map(getYValue)) - 1,
      Math.max(...data.map(getYValue)) + 1
    ]
  });

  return(
    <div >
      <div style={{marginLeft:'25%'}} >

        <h1>Bar Chart</h1>
      <BarChart/>
      <h1>Axis Chart</h1>
      <AxisChart width={500} height={500}/>
      <h1>Pie Chart</h1>
      <PieChart width={500} height={500}/>
      <h1>Donut Chart</h1>
      <DounutChart width={500} height={500}/>
      </div>
     
    </div>
    
  )
}