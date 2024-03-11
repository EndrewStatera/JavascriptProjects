
function walkDog(){
    new Promise((resolve, reject) => {
        setInterval(() => {
            resolve("You walked the dog");
        }, 3000)
    }
    );
}

function cleanKitchen(){
    new Promise((resolve, reject) => {
        setInterval(() => {
            resolve("You cleaned the kitchen");
        }, 3000)
    }
    );
}

function putThrashAway(){
    new Promise((resolve, reject) => {
        setInterval(() => {
            resolve("You put the trash away");
        }, 3000)
    }
    );
}

async function chores(){
    const dogWalked = await walkDog();
    console.log(dogWalked);
    const cleanedKitchen = await walkDog();
    console.log(cleanedKitchen);
    const thrash = await walkDog();
    console.log(thrash);

    console.log("you've finished!");
}

chores();