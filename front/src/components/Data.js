import React, { useEffect, useState} from 'react';


export default () => {
  const [infra,setInfra] = useState([])

	useEffect(
		() => {
			fetch('http://localhost:8000/locations',{
			})
			.then(res=>res.json())
			// .then(res=>console.log(res))
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
                  </tr>
                  )
        })
      }
        </tbody>
      </table>
    </div>
  )
}