import { useEffect, useState } from 'react'

const StoptimesValue = () => {

    const [dataset, setDataset]= useState('')
    const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getDataset")
    const responseBody = await response.json()
    setDataset(responseBody.data.stops)
    }
    
      useEffect (() => {
        fetchData()
      }, [])


    const headsignValues=[]
    const shortNameValues=[]
    for (let i=0; i < dataset.length; i++) {

    const stoptimesArray=dataset[i].stoptimesWithoutPatterns
    for (let n=0; n < stoptimesArray.length; n++) {

    headsignValues.push(stoptimesArray[n].headsign)
    shortNameValues.push(stoptimesArray[n].trip.route.shortName)
    }
    } 
    return (
        <>
        <h1>Rautatieasema Travel Routes</h1>
       {headsignValues.map((headsign,index)=>
        <li key={shortNameValues[index]}>
      <i> Route number :</i> <b>{shortNameValues[index]}</b>
       <p><i>Head-sign :</i> <b>{headsign}</b></p></li>)}
        </>
       )
       
}

export default StoptimesValue
