document.getElementById('btn').addEventListener('click', tabuada)

function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('selTab')
    if (num.value.length == 0) {
        window.alert('Favor digiar algum número!')
    } else {
        tab.innerHTML = ''
        let n = Number(num.value)
        for (let i = 1; i < 11; i++) {
            let item = document.createElement('option')
            tab.appendChild(item)
            item.text = `${n} x ${i} = ${n*i}`
        }
    }
}