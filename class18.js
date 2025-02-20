/*
  Synchronous codes -- Execute line by line consecutively in ansequential manner, it is code that waits for an operation to complete.

  Asynchronous codes -- Allows multiple operations to be performed without waiting, doesn't block the execution flow and allows the program allows the program to continue.(I/0 operations, network requests, fetching data, etc)
  They can be handled with callbacks, promises, Async/Await,
*/

//Callback -- is a function that is passed as an argument to another function. It can be used to make the program run synchronously. It can be used to handle http requests, interacting databases, etc.

function func1(call, x, y){
    setTimeout(() => {
        console.log(x + y);
        console.log("Task 1")
        call();
    }, 2000)
};

function func2(){
    console.log("Task 2");
    console.log("Task 3");
}
func1(func2, 4, 8);        

//Create a function that sums three numbers and takes in a callback function that displays the result of the sum of the three numbers.

function sum(call, x, y, z){
   let solution = x + y + z;
    call(solution);
}

function answer(solution){
    console.log(solution)
};

sum(answer, 5, 6, 7)

//Callback hell -- This is when callbacks are nested within other callbacks to the extent where the code becomes difficult to read.
function task1(callback){
    setTimeout(() => {
        console.log("Task 1 complete");
        callback()
    }, 2000)
}
function task2(callback){
    setTimeout(() => {
        console.log("Task 2 complete");
        callback()
    }, 1000)
}
function task3(callback){
    setTimeout(() => {
        console.log("Task 3 complete");
        callback()
    }, 3500)
}
function task4(callback){
    setTimeout(() => {
        console.log("Task 4 complete");
        callback()
    }, 2500)
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {console.log("Tasks Completed.")})
        })
    })
})

//Promises In Javascript
//Promise -- This is an object that manages asynchronous operations. We wrap a promise object around asynchronous code. A promise returns a value (resolved or rejected)
//Syntax: new Promise((resolve, reject) => {asynchronous code});

function func1(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("Task 1 complete")
    }, 2000);
    })
};
function func2(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
        //   const taskDone = false;
        //   !taskDone ? resolve("Task 2 complete") : reject("Task 2 not done");
        resolve("Task 2 complete")
    }, 1000);
    })
};
function func3(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
         resolve("Task 3 complete");
    }, 3000);
    })
};
function func4(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
         resolve("Task 4 complete")
    }, 500);
    })
};

func1().then(value => {console.log(value); return func2()})
       .then(value => {console.log(value); return func3()})
       .then(value => {console.log(value); return console.log("All tasks are completed")})
       .catch(error => console.log(error));

//Async/Await
//Async -- makes a function return a promise while Await -- makes a function wait for a promise.

async function doTasks(){
    try{
        const taskOne = await func1();
        console.log(taskOne);
        const taskTwo = await func2();
        console.log(taskTwo)
        const taskThree = await func3();
        console.log(taskThree)
        const taskFour = await func4();
        console.log(taskFour);
        console.log("You finished all your tasks")
     } catch(error){
        console.log(error);
     }
}
doTasks()