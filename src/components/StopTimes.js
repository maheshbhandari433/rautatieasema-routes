import { useEffect, useState } from 'react'
import Section from './Section.js'

const StopTimes =() => {

    const [dataset, setDataset]= useState('')
    const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getDataset")
    const responseBody = await response.json()
   setDataset(
        responseBody.data.stops[0].stoptimesWithoutPatterns.concat
        (responseBody.data.stops[1].stoptimesWithoutPatterns)
            .map(element => element.headsign)
        ) 
    }
      useEffect (() => {
        fetchData()
      }, [])

//   console.log(dataset)

//  for (const [key, value] of Object.entries(dataset)) {
//  console.log(`${key}:${value}`)
//  } 

    return (
      
        <div>
    <Section />
        </div>
    )

    }

export default StopTimes 