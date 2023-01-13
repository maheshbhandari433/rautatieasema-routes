
//  const fetch = require('node-fetch')
import fetch from 'node-fetch'

export const handler = async (event) => {

    const url = process.env.DIGITRANSIT_GRAPHQL_API;
    const query = {
      query: `{
        stops(name: "rautatieasema" ) {
          gtfsId
          name
           stoptimesWithoutPatterns {
              serviceDay
              scheduledArrival
              headsign
              trip {
                route {
                  shortName
                  agency {
                    name
                  }
                }
                wheelchairAccessible
                bikesAllowed
              }
              
            } 
        }  
      }` ,
      variables : { }
    }

const response = await fetch(url, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(query)
})
try {
    const responseBody = await response.json()
    return {
        statusCode: 200,
        body: JSON.stringify(responseBody)
    }
} catch (e) {
    console.log(e)
    return {
        statusCode: 500,
        body: JSON.stringify(e)
    }
    }
}
