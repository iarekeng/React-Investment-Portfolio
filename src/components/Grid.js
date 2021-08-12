import React from 'react';
import GridData from './GridData'

const Grid = () => {
  return (
    <div>
      <table class="grid">
        <tbody class="grid-body">
          <tr class="grid-row">
          <th class="grid-header">Risk</th>
          <th class="grid-header">Bonds %</th>
          <th class="grid-header">Large Cap %</th>
          <th class="grid-header">Mid Cap %</th>
          <th class="grid-header">Foreign %</th>
          <th class="grid-header">Small Cap %</th>
          </tr>
            <GridData risks="1" bonds="80" largeCap="20" midCap="0" foreign="0" smallCap="0" />
            <GridData risks="2" bonds="70" largeCap="15" midCap="15" foreign="0" smallCap="0" />
            <GridData risks="3" bonds="60" largeCap="15" midCap="15" foreign="10" smallCap="0" />
            <GridData risks="4" bonds="50" largeCap="20" midCap="20" foreign="10" smallCap="0" />
            <GridData risks="5" bonds="40" largeCap="20" midCap="20" foreign="20" smallCap="0" />
            <GridData risks="6" bonds="35" largeCap="25" midCap="5" foreign="30" smallCap="5" />
            <GridData risks="7" bonds="20" largeCap="25" midCap="25" foreign="25" smallCap="5" />
            <GridData risks="8" bonds="10" largeCap="20" midCap="40" foreign="20" smallCap="10" />
            <GridData risks="9" bonds="5" largeCap="15" midCap="40" foreign="25" smallCap="15" />
            <GridData risks="10" bonds="0" largeCap="5" midCap="25" foreign="30" smallCap="40" />
        </tbody>
      </table>
    </div>
  )
}


export default Grid