function fun1() {
    var rng=document.getElementById('r1'); //rng - это Input
    var p=document.getElementById('one'); // p - абзац
    p.innerHTML=rng.value + ' %';
}
fun1();
function countFile () {
    let inputs = document.querySelectorAll('.input__file');
    Array.prototype.forEach.call(inputs, function (input) {
        let label = input.nextElementSibling,
            labelVal = label.querySelector('.input__file-button-text').innerText;

        input.addEventListener('change', function (e) {
            let countFiles = '';
            if (this.files && this.files.length >= 1)
                countFiles = this.files.length;

            if (countFiles)
                label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
            else
                label.querySelector('.input__file-button-text').innerText = labelVal;
        });
    });
}
countFile();

function styleOrderSelect () {

    let select = document.querySelector('.js-order-select');

    function customSelect () {
        let select_block = document.querySelector('.order-form-box__select-block');
        select_block.classList.add("select_arrow");
        select.classList.add("select_style");
    }

    select.addEventListener('click', customSelect);

    select.addEventListener('mousedown', customSelect);

}

styleOrderSelect();

