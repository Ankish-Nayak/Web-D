function hello(){
    return 'Hello';
}
hello();

// function wait(ms){
//     return new Promise(function(resolve,reject){
//         if(ms <= 0){
//             reject(new Error('Cannot wait zero second or less than it.'));
//             return;
//         }
//         setTimeout(function(){
//             resolve();
//         },ms);
//     });
// }

// wait(-1).then(function(){
//     console.log('We waited one sec');
// }).catch(function(error){
//     console.log(`There was an error: ${error.message}`);
// })

// function divide( a, b){
//     return new Promise(function( resolve, reject){
//         if(b === 0){
//             reject(new Error('You cannot divide by 0'));
//             return;
//         }
//         resolve(a / b);
//     });
// }

// divide( 10, 3).then(function(result){
//     console.log(`Division Success: ${result}`);
// }).catch(function(error){
//     console.log('Division failed');
//     console.log(error);
// })

// function divide( a, b){
//     return new Promise(function ( resolve, reject){
//         if(b === 0){
//             reject('you cannot divide by 0');
//             return;
//         }
//         resolve(a / b);
//     });
// }

// divide( 10, 0).then(function (result){
//     console.log(`Division Success: ${result}`);
// }).catch(function (error){
//     console.log('There was an error with the division');
//     console.log(error);
// });
