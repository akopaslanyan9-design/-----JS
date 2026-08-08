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
    const chars = password.split('').reverse();
    return chars.join('');
}

function check(encryptedPassword, originalPassword) {
    const isCrypted = crypto(originalPassword);
    if (isCrypted === encryptedPassword) {
        return true;
    } else {
        return false;
    }
}


console.log(check('drowssap', 'password')); 

