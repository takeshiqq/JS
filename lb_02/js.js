//1

// let number = +prompt('Enter the number from 0 to 9 -> ', '')

// switch(number){
//     case 1: alert('!'); break;
//     case 2: alert('@'); break;
//     case 3: alert('#'); break;
//     case 4: alert('$'); break;
//     case 5: alert('%'); break;
//     case 6: alert('^'); break;
//     case 7: alert('&'); break;
//     case 8: alert('*'); break;
//     case 9: alert('('); break;
//     case 0: alert(')'); break;
//     default: alert('U havent wrotten in the right range'); break;
// }

//2

// let year = +prompt('Enter the year -> ', '')

// alert(year % 400 == 0 || year % 4 == 0 && year % 100 != 0 ? 'Leap': 'Not the leap')

//3


//4

// let n = +prompt('Enter the range of numbers -> ', '')
// let range = []
// let sum = 0

// for (let i = 0; i < n; i++){
//     range[i] = +prompt(`Enter ${i} number -> `, '')
//     sum = sum + range[i]
// }

// alert(`Sum of numbers range -> ${sum}`)

//5
// let range = prompt('Enter the range of numbers -> ', '')
// range.split('')
// let array = []
// let deleteArray = []

// for (element of range){
//     element == '-' || element == '+' ? deleteArray.push(element) : array.push(element)
// }

// alert(array.length)

//6

// let range = []
// let positive = 0
// let even = 0
// let odd = 0
// let zero = 0
// let negative = 0

// for (let i = 0; i < 4; i++){
//     range[i] = +prompt(`Enter ${i} number -> `, '')

//     range[i] < 0 ? negative++ : range[i] == 0 ? zero++ : positive++
//     range[i] % 2 == 0 ? even++ : odd++
// }

// console.log('negative -> ', negative, '\npositive -> ', positive, '\nzero -> ', zero, '\neven -> ', even, '\nodd -> ', odd)

//7

// let date = new Date()
// let currentDay = date.getDay()
// let check = true
// let counter = 0
// let hah 
// let nextWeek = 0
// let nextDay = 0

// do{
//     currentDay = date.getDay()

//     hah = currentDay + counter

//     if (hah == currentDay){
//         check = confirm(`Today -> ${hah == 0 ? 'Sunday' : hah == 1 ? 'Monday' : hah == 2 ? 'Tuesday' 
//         : hah == 3 ? 'Wednesday' : hah == 4 ? 'Thursday' : hah == 5 ? 'Friday' : 'Saturday'
//         }\nDo you want to see next day?`)
//     }else{
//         check = confirm(`${hah == 0 ? 'Sunday' : hah == 1 ? 'Monday' : hah == 2 ? 'Tuesday' 
//         : hah == 3 ? 'Wednesday' : hah == 4 ? 'Thursday' : hah == 5 ? 'Friday' : 'Saturday'
//         }\nDo you want to see next day?`)
//     }
    
//     counter++

//     if (hah == 6){
//         hah = 0
//         counter = 0

//         do {
//             hah = nextDay + counter
//             check = confirm(`${hah == 0 ? 'Sunday' : hah == 1 ? 'Monday' : hah == 2 ? 'Tuesday' 
//             : hah == 3 ? 'Wednesday' : hah == 4 ? 'Thursday' : hah == 5 ? 'Friday' : 'Saturday'
//             }\nDo you want to see next day?`)

//             counter++
//         }while(hah < currentDay)
//     }

// }while(check == false)