import { useEffect, useState } from 'react'

const Section = () => {
const [dataset, setDataset]= useState('')
    const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getDataset")
    const responseBody = await response.json()
   setDataset(
        responseBody.data.stops[0].stoptimesWithoutPatterns.concat
        (responseBody.data.stops[1].stoptimesWithoutPatterns)
            .map(element => element.trip)
        ) 
    }
      useEffect (() => {
        fetchData()
      }, [])

    

  return (
  <>
   {
    Object.values(dataset).map(function(value,key) {
      return <ul key={key} value={value}>
        {`${key} : ${Object.values(value.route.shortName)}`}
     </ul>
    }
    )
    }
  </>
  
  )


}
export default Section