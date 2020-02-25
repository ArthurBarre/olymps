import React, { useEffect, useState } from 'react'
import ToolTip from './Tooltip'
import { api_url } from '../constants'
import './tooltips.scss'

const districtsList = [
  75001,
  75002,
  75003,
  75004,
  75005,
  75006,
  75007,
  75008,
  75009,
  75010,
  75011,
  75012,
  75013,
  75014,
  75015,
  75016,
  75017,
  75018,
  75019,
  75020,
]

export default function ToolTips() {
  const [district, setDistrict] = useState(75019)
  const [districtData, setDistrictData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8000/district_info?district=${district}`, {})
      .then(res => res.json())
      .then(res => setDistrictData(res))
  }, [])

  const selectDistrict = d => {
    setDistrict(d)
    fetch(`http://localhost:8000/district_info?district=${district}`, {})
      .then(res => res.json())
      .then(res => setDistrictData(res))
  }

  return (
    <div>
      {districtsList.map(d => {
        return <button onClick={() => selectDistrict(d)}>{d}</button>
      })}
      <br />
      <div>District selected : {district}</div>
      <div className="adjust">
        {districtData &&
          districtData.map(d => {
            return (
              <ToolTip
                count={d.count}
                numberLocation={d.nbrLocation}
                moy={d.moy}
                position={d.position}
              />
            )
          })}
      </div>
    </div>
  )
}
