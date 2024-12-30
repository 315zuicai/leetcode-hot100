function groupAnagrams(strs: string[]): string[][] {
    if (strs.length === 0) return [];

    const stringMap: Record<string, string[]> = {};

    for (let str of strs) {
        const count = new Array(26).fill(0);
        for (let char of str) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        const key = count.join('#');
        if (!stringMap[key]) {
            stringMap[key] = [];
        }
        stringMap[key].push(str);
    }
    return Object.values(stringMap);
}

// function groupAnagrams(strs: string[]): string[][] {
//     const map: { [key: string]: string[] } = {};
//     for (const str of strs) {
//         const key = str.split('').sort().join('');
//         if (!map[key]) {
//             map[key] = [];
//         }
//         map[key].push(str);
//     }
//     return Object.values(map);
// }


// function groupAnagrams(strs: string[]): string[][] {
//     const map = _.groupBy(strs, (str: string) => str.split('').sort().join(''));
//     return Object.values(map);
// }

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));