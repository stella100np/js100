/**
 * 
 * @param {Date} date 
 */
function formatDate(date) {
    let year = date.getFullYear();
    const m = (date.getMonth()+1).toString().padStart(2,'0')
    const day = date.getDate().toString().padStart(2,'0')
    return `${year}-${m}-${day}`
}

console.log(formatDate(new Date()))