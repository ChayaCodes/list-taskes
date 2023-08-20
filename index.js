const inputEl = document.querySelector(".input")
const formEl = document.querySelector(".form")
const ulEl = document.querySelector(".list")
const searchEl = document.querySelector(".search")
let list = JSON.parse(localStorage.getItem("local")) || [];

const drawList = () => {
    ulEl.innerHTML = ""
    let duplicateList = [...list]
    if (searchEl.value.length > 0) {
        duplicateList = duplicateList.filter(el => {
            return el.name.indexOf(searchEl.value) >= 0

        })
    }
    duplicateList.forEach(task => {
        const liEl = document.createElement("li")
        liEl.innerText = task.name
        const checkBtnEl = document.createElement("div")
        checkBtnEl.innerHTML = `<i class="fas fa-check-square"></i>`
        liEl.append(checkBtnEl)
        const trashBtnEl = document.createElement("div")
        trashBtnEl.innerHTML = `<i class="fas fa-trash"></i>`
        liEl.append(trashBtnEl)
        if (task.complete) {
            liEl.classList.add("checked")
        }
        ulEl.append(liEl)
        checkBtnEl.addEventListener("click", () => toogleCheck(task.id))
        trashBtnEl.addEventListener("click", () =>
            removeItem(task.id))
    })
    saveList()
}

const removeItem = (id) => {
    list = list.filter(task => task.id != id)
    drawList()
}
const toogleCheck = (id) => {
    list = list.map(task => {
        if (task.id === id) {
            task.complete = !task.complete
        }
        return task
    })
    drawList();
}

const saveList = () => {
    localStorage.setItem("local", JSON.stringify(list))
}
searchEl.addEventListener("keyup", () => {
    drawList()


    duplicateList = duplicateList.filter(el => {
        el.name.indexOf(searchEl.value) >= 0
        return el
    })
    duplicateList.forEach()
})