// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false
// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

//solution


const anagram = (s, t) => {
    if (s.length !== t.length){
        return false;
    }
    let sMap = new Map();
    for (let x of s) {
        sMap.set(x, (sMap.get(x)||0)+1)
    }
    console.log('sMap after building', sMap)
    for(let y of t){
       // console.log(sMap.has(y))
        if(sMap.has(y) && sMap.get(y)!==0){
            sMap.set(y,sMap.get(y)-1);
            continue;
        }
         console.log('sMap after building now', sMap)
        return false;
    }


    return true;
}

console.log(anagram('aab','aaa'));//we can solve this by object as well



//using object
function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const map = {};

    // Step 1: Build map
    for (let char of s) {
        map[char] = (map[char] || 0) + 1;
    }

    console.log("After building map from s:", map);

    // Step 2: Reduce using t
    for (let char of t) {
        map[char]--;
        console.log(`After processing '${char}':`, map);

        if (map[char] < 0) {
            return false;
        }
    }

    console.log("Final map:", map);
    return true;
}

console.log(isAnagram("anagram", "nagaram"));

// Approach used:
// Use a HashSet to store elements while iterating

// Why:
// HashSet allows constant time lookup to check if an element already exists

// Time complexity:
// O(n) — iterate through the array once

// Space complexity:
// O(n) — store up to n unique elements in the set

// Pattern used:
// Hashing / HashSet (fast lookup for duplicates)