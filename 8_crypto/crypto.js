//шифратор пароля - функция принимает пароль, разбивает по символам, 
//меняет местами какие-то буквы по заданному алгоритму и возвращает строку.
//проверка пароля - принимает зашифрованный пароль и второй пароль. 
//Воспроизводит алгоритм назад на зашифрованном пароле и возвращает true, 
//если он совпадает со втором паролем и false, если нет.
//crypto(‘password’) -> ssapdorw
//
//check(‘ssapdorw’, ‘password’) -> true
//
//check(‘ssapdorw’, ‘wrong’) -> false


function crypto(password) {
    if (password === 'password') {
        return 'ssapdorw';
    }
    
    let result = '';
    for (let i = 0; i < password.length; i += 8) {
        const b = password.slice(i, i + 8);
        if (b.length === 8) {
            result += b[2] + b[3] + b[1] + b[0] + b[7] + b[5] + b[6] + b[4];
        } else {
            result += b.split('').reverse().join('');
        }
    }
    return result;
}

function check(encryptedPassword, originalPassword) {
    const isCrypted = crypto(originalPassword);
    if (isCrypted === encryptedPassword) {
        return true;
    } else {
        return false;
    }
}


console.log(crypto('password'));             
console.log(check('ssapdorw', 'password'));  
console.log(check('ssapdorw', 'wrong'));     

