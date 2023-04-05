import { useEffect, useState } from 'react'

import { getBuildings } from '../services/api.ts'

const Buildings = () => {
  const [buildings, setBuildings] = useState([])

  useEffect(() => {
    const fetchBuildings = async () => {
      const { data } = await getBuildings()

      setBuildings(data?.buildings)
    }

    fetchBuildings()

  }, [])

  console.log('buildings', buildings)

  if (!buildings.length) return <p>Sem resultados</p>

  return (
    <div>
      <ul>
        {buildings.map((build) => (
          <li>{build?.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Buildings
