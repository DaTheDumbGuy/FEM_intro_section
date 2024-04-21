const userCoding = true;
const userLearnedNothing = true;

/*
function callPromise() {
    return new Promise((resolve, reject) => {
        if (!userCoding) {
            reject({
                name: "Failure",
                message: ":<"
            })
        } else if (userLearnedNothing) {
            reject({
                name: "Failure",
                message: "You stupid"
            })
        } else {
            resolve({
                name: "Success",
                message: "Good Job"
            })
        }
    })
}
*/
async function callPromise() {
    if (!userCoding) {
        throw {
            name: "Failure",
            message: ":<"
        }
    } else if (userLearnedNothing) {
        throw {
            name: "Failure",
            message: "You Stupid"
        }
    } else {
        return {
            name: "Success",
            message: "Good Job"
        }
    }
}
async function callPromise2() {
    try {
        if (!userCoding) {
            throw {
                name: "Failure",
                message: ":<"
            }
        } else if (userLearnedNothing) {
            throw {
                name: "Failure",
                message: "You Stupid"
            }
        } else {
            return {
                name: "Success",
                message: "Good Job"
            }
        }
    } catch (error) {
        //I can use this catch to do something about the error here without using the then/catch
        throw error;
    }
}
callPromise2().then((data) => {
    console.log("This is using then and catch -> " + data.name + " -- " + data.message);
}).catch((error) => { console.log("This is using then and catch -> " + error.name + " -- " + error.message) });

(async () => {
    try {
        const result = await callPromise2();
        console.log("This is using the async function -> " + result.name + " -- " + result.message);
    } catch (error) {
        console.log("This is using the async function -> " + error.name + " -- " + error.message);
    }
})()
//Promise Chaining (According to Chatgpt)
/*
callPromise().then((data) => {
    console.log(data.name + " -- " + data.message);
}).catch((data) => {
    console.log(data.name + " -- " + data.message);
})
*/

// Immediately Invoked Function Expression (IIFE)
/*
(async () => {
    try {
        const result = await callPromise();
        console.log(result.name + " -- " + result.message);
    } catch (error) {
        console.log(error.name + " -- " + error.message);
    }
})() 
*/