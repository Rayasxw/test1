
// 1
const regExp = /^[0-9]+$/

const containsOnlyDigits = (str) => {
    return regExp.test(str)
}

console.log(containsOnlyDigits("12345")); // true
console.log(containsOnlyDigits("12a45")); // false

// 2
const timer = () => {
    setInterval(() => {
        console.log("Прошла секунда")
    }, 1000)
}
timer()

// 3
const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        i++;
        if (i > 10) {
            clearInterval(interval);
        }
    }, 1000);
}
count()

// 4

const block = document.querySelector('#block')

block.onclick = () => {
    if(block.classList.contains('red')) {
        block.classList.remove('red')
    }else {
        block.classList.add('red')
    }
}

// 5

const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json');

xhr.onload = () => {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.response);
        console.log('Данные :', data);
    } else {
        console.log('Ошибка при загрузке данных');
    }
};


xhr.send();