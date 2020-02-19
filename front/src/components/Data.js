import React, { useEffect, useState} from 'react';
import {api_url} from './constants'

export default () => {
  const [infra,setInfra] = useState([])

	useEffect(
		() => {
			fetch(`${api_url}/locations`,{
			})
			.then(res=>res.json())
			.then(res=>setInfra(res))
		},[]
	)
  return(
    <div>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">lat</th>
            <th scope="col">lng</th>
            <th scope="col">types</th>
            <th scope="col">district</th>
          </tr>
        </thead>
        <tbody>
        {
        infra && infra.map(i=>{
          return(
                  <tr>
                    <td>{i.id}</td>
                    <td>{i.lat}</td>
                    <td>{i.lng}</td>
                    <td>{i.types}</td>
                    <td>{i.district}</td>
                  </tr>
                  )
        })
      }
        </tbody>
      </table>
    </div>
  )
}