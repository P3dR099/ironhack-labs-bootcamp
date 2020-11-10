const data = require('./data')
movies = data.movies

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arrMovies) {
    const directors = arrMovies.map(el => el.director)
    return directors
    //console.log(typeof(directors))
}
//console.log(typeof(getAllDirectors))


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arrMovies) { 
    const arrDramaMovies = arrMovies.filter(el => el.director === 'Steven Spielberg' && el.genre.includes('Drama'))
    return arrDramaMovies.length
}

//console.log(typeof(howManyMovies(movies)))

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arrMovies){
    const arrRate = (arrMovies.reduce((accum, currenValue) =>  accum + currenValue.rate, 0))
    if (arrRate === 0){
        return 0
    }
    const rateAvg = arrRate / arrMovies.length
    const numbRate = Math.round(rateAvg * 100) / 100
    return numbRate
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arrMovies){
    const dramaMovies = arrMovies.filter(el => el.genre.includes("Drama"))
    const rateAvg = dramaMovies.reduce((accum, currentValue) => {return accum + currentValue.rate / dramaMovies.length}, 0)
    if (rateAvg === 0) return 0
    return Math.round(rateAvg * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arrMovies){
    const arrCpy = [...arrMovies]
    const orderByYear = arrCpy.sort((a, b) => a.year - b.year)
    const orderByTitle = orderByYear.sort((a, b) =>{ if (a.year === b.year) a.title.localeCompare(b)})
    return orderByTitle
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrMovies)
{
    const newArr = [...arrMovies]
    const arrTitles = newArr.map((elem) => elem.title)
    const arrFirstMovies = arrTitles.sort((a, b) => a.localeCompare(b)).slice(0, 20)
    return arrFirstMovies
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
