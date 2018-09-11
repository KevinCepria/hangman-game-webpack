const getPuzzle = async wordCount => {
   
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if(response.status === 200){
        return  await response.json()
        
    }
    else{ 
        throw new Error('Unable to fetch data')
    }
}

export { getPuzzle as default}

//ASYNC/AWAIT WITH FETCH AND PROMISE
// const getPuzzle = async countryCode => {
   
//     const response = await fetch('http://restcountries.eu/rest/v2/all')

//     if(response.status === 200){
//         const data = await response.json()
//         const result = data.find((country)=>country.alpha2Code === countryCode)
//         return result.name
//     }
//     else{ 
//         throw new Error('Unable to fetch data')
//     }
// }

//FETCH AND PROMISE METHOD
// const getPuzzle = (countryCode) => fetch('http://restcountries.eu/rest/v2/all').then(response=>{
//     if(response.status === 200){
//         return response.json()
//     }
//     else throw new Error('Unable to fetch data')
// }).then(data =>{
//     const result = data.find((country)=>country.alpha2Code === countryCode)
//     return result.name
// })


//PROMISE ONLY METHOD
// const getPuzzle = (countryCode) =>new Promise((resolve,reject)=>{
//     const request = new XMLHttpRequest()

//     // request.open('GET','http://puzzle.mead.io/puzzle')
//     request.open('GET','http://restcountries.eu/rest/v2/all')
//     request.send()

//     request.addEventListener('readystatechange', event => {
//         if(event.target.readyState === 4 && event.target.status === 200){
//             const data = JSON.parse(event.target.responseText)
//             const result = data.find((country)=>country.alpha2Code === countryCode)
//             resolve(result.name)
//         }

//         else if(event.target.readyState === 4){
//             reject('An error has occured')
//         }
//     })
// })