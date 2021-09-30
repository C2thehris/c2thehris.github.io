window.addEventListener('DOMContentLoaded', () => {
    present('academic')
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.onclick = function () {
            console.log(button.dataset.div)
            present(button.dataset.div)
        }
    })

    const title = document.querySelector('title');
    title.onclick(() => {
        present('academic')
    })
})

function present(div_name) {
    clearAll()
    document.querySelector(`#${div_name}`).style.display = 'block';
}

function clearAll() {
    const divs = document.querySelectorAll('body>div')
    divs.forEach(div => {
        div.style.display = 'none'
    })
}