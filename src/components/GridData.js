import React from 'react'

const GridData = ({risks, bonds, largeCap, midCap, foreign, smallCap}) => {
  return (
    <tr>
      <td class="grid-data">{risks}</td>
      <td class="grid-data">{bonds}</td>
      <td class="grid-data">{largeCap}</td>
      <td class="grid-data">{midCap}</td>
      <td class="grid-data">{foreign}</td>
      <td class="grid-data">{smallCap}</td>
    </tr>
  )
}


export default GridData