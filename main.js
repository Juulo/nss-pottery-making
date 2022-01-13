const buyClay = () => {
    clayObject = {};
    
    return clayObject;
}

const makePottery = (clayObject) => {
    clayObject.shape = "Bowl";

    return clayObject;
}

const bisqueFire = (clayObject) => {
    clayObject.readyForGlazing = true;

    return clayObject;
}

const glazePottery = (clayObject) => {
    if (clayObject.readyForGlazing === true) {
        clayObject.glaze = "Midnight Blue";
    } else {
        console.log("Make sured you bisque fire the pottery before you glaze it.");
    }

    return clayObject;
}

const finalFiring = (clayObject, temperature) => {
    if (temperature > 1200) {
        clayObject.cracked = true;
    } else {
        clayObject.cracked = false;
    }

    return clayObject;
}

let clay = buyClay();
let makingPottery = makePottery(clay);
let fire = bisqueFire(clay);
let glaze = glazePottery(clay);
let lastFire = finalFiring(clay, 2200);

console.log(clay)