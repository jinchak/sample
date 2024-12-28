let availableTeas = ['green tea', 'black tea', 'chai', 'oolong tea']
let selectedTea = []

for(let i=0; i<availableTeas.length; i++){
    if (availableTeas[i] == 'chai'){
        break;
    }
    selectedTea.push(availableTeas[i])
}
// console.log(selectedTea);
