let randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

let randomTable = () => {
    let arr = [];

    for (let i = 0; i < 20; i++)
    {
        arr.push(randomNumber(5, 20))
    }
    
    console.log(arr)
}

randomTable()