
//a. Get all the countries from Asia continent /region using Filter function
// const url = 'https://restcountries.com/v3.1/all'
// async function getData(){
//     const response = await fetch(url);
//     const data = await response.json();
//     // console.log(data)
//     var asiaCountries=data.filter(coun=>coun.region =="Asia") 
//     console.log(asiaCountries)

// }
// getData();

// b. Get all the countries with a population of less than 2 lakhs using Filter function
// const url = 'https://restcountries.com/v3.1/all'
// async function getData(){
//     const response = await fetch(url);
//     const data = await response.json();
//     var popLessThan2=data.filter(coun=>coun.population > 200000) 
//     console.log(popLessThan2);

// }
// getData();

// C.Print the following details name, capital, flag using forEach function

// const url = 'https://restcountries.com/v3.1/all'
// async function getData(){
//     const response = await fetch(url);
//     const data = await response.json();   
//     let value = data.forEach(element => {
//         console.log(element.name, element.capital, element.flag);

//     });
//     console.log(value);

// }
// getData();

// Print the country which uses US Dollars as currency.

const url = 'https://restcountries.com/v3.1/all'
async function getData(){
    const response = await fetch(url);
    const data = await response.json();   
    let countriesWithUSD = data.filter(e=> e.currencies ==="USD")
    console.log(countriesWithUSD)

}
getData();
