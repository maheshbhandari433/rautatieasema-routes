import { useEffect, useState } from 'react'
import './App.css'
import Section from './components/Section.js'
import StopTimes from './components/StopTimes.js'
import StoptimesValue from './components/StoptimesValue.js'

const App =() => {

  const [dataset, setDataset]= useState('')
    const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getDataset")
    const responseBody = await response.json()
    setDataset(responseBody.data.stops)

    }
      useEffect (() => {
        fetchData()
      }, [])

    console.log(dataset)
    
    
  for (let i=0; i < dataset.length; i++) {
      console.log(dataset[i].gtfsId)
      
    const stoptimesArray=dataset[i].stoptimesWithoutPatterns
    for (let n=0; n < stoptimesArray.length; n++) {

    console.log(stoptimesArray[n].headsign)
    console.log(stoptimesArray[n].trip.route.shortName)

        }
    }
    
    
    // for (const [key, value] of Object.entries(dataset)) {
    // console.log(`${key} : 
    // ${Object.values(value)}`) }

  return (
    <div className="App">
  
   <StoptimesValue />

    </div>
  
  )    
}

export default App
