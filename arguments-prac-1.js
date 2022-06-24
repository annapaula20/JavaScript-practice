// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false
//

//Solution option 1

function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }
    if (password.includes(' ') !== -1) {
        return false;
    }
    if (password.includes(username) !== -1) {
        return false;
    }
    return true;
}

// Rewriting to join false returns

function isValidPassword(password, username) {
    if (password.length < 8 ||
        password.includes(' ') !== -1 ||
        password.includes(username) !== -1
    ) {
        return false;
    }
    return true;
}

//Rewriting option 3

function isValidPassword(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.includes(' ') !== -1;
    const tooSimilar = password.includes(username) !== -1;
    if (tooShort || hasSpace || tooShort) return false;
    return true;
}

//Option 4

function isValidPassword(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.includes(' ') !== -1;
    const tooSimilar = password.includes(username) !== -1;
    if (!tooShort && !hasSpace && !tooShort) return true;
    return false;
}

//Option number 4.5
function isValidPassword(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.includes(' ') !== -1;
    const tooSimilar = password.includes(username) !== -1;
    return !tooShort && !hasSpace && !tooShort;
}
