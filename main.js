const word = document.querySelector('.answer'),
    form = document.querySelector('form'),
    input = document.querySelector('input'),
    button = document.querySelector('.btn'),
    result = document.querySelector('.result');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    if (word.textContent[word.textContent.length - 1] === input.value[0]) {
        result.textContent = '딩동댕!👏 다음 제시어를 입력하세요';
        word.textContent = input.value;
        input.value = '';
        input.focus();
    } else {
        result.textContent = '땡~!😱 제시어를 다시 입력하세요';
        input.focus();
    }
});