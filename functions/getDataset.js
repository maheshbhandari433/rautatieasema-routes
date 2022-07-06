const fetch = require('node-fetch')
exports.handler = async function (event) {

    // const limit=JSON.parse(event.body)
    const url = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
    const query = `{
        stop(id: "HSL:1020453") {
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
      }`;

const response = await fetch(url, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({query})
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
        body: JSON.stingify(e)
    }
    }
}