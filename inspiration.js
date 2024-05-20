function randomnum(num) {
    return Math.floor(Math.random() * num);
};
const inspiration = {
    motivation: [
        "Believe you can and you're halfway there.",
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "Don't watch the clock; do what it does. Keep going."
    ],
    positivity: [
        "In the middle of every difficulty lies opportunity.",
        "The way to get started is to quit talking and begin doing.",
        "You are never too old to set another goal or to dream a new dream."
    ],
    resilience: [
        "Life is not about waiting for the storm to pass, but learning to dance in the rain.",
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "You may encounter many defeats, but you must not be defeated."
    ]
}
let inspire = [];
for (let prop in inspiration) {
    let optionalIdx = randomnum(inspiration[prop].length);
    switch (prop) {
        case 'motivation':
            inspire.push(`"${inspiration[prop][optionalIdx]}"`)
            break
        case 'positivity':
            inspire.push(`"${inspiration[prop][optionalIdx]}"`)
            break
        case 'resilience':
            inspire.push(`"${inspiration[prop][optionalIdx]}"`)
            break
        default:
            inspire.push('"There is not enough data."')
    }
}
function formatIns(ins) {
    const formatted = inspire.join('\n')
    console.log(formatted)
  } 
  formatIns(inspire);     