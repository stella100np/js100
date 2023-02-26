function toCamlCase(str) {
    return str.replace(/[-_]\w/g,match => match.substring(1).toUpperCase())
}
console.log(toCamlCase('has_node'))