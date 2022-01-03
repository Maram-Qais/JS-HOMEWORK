function mix(lit, num) {
    let list = [];
    for (let i = 0; i < lit.length; ++i) {
        list.push(lit[i]);
        list.push(num[i]);
    }
    return list;
}
console.log(mix(['a', 'b', 'c'], [1, 2, 3]));