let sortBtn = document.querySelectorAll('button')[0]
let addBtn = document.querySelectorAll('button')[1]
let delete1 = document.querySelectorAll('button')[2]
let items = document.querySelector('ul')
let toDo = document.querySelectorAll('input')[0]
let check1 = document.querySelectorAll('input')[1]
let check2 = document.querySelectorAll('input')[2]
let check3 = document.querySelectorAll('input')[3]


let list = []

function addItems(id,name,date,completion) {
    this.id = id
    this.name = name
    this.date =date
    this.completion = completion
}

function addList(){

    let currentDate = new Date().getDay()

    let year =currentDate

    let item = new addItems(1, toDo.value, year,true)
    list.push(toDo.value)

    if(toDo.value.trim()!== ''){
        let array = [item.name]
        for (const arr of array) {
            
            items.innerHTML +=  `
                                <li>
                                    <input type="checkbox" class="check1"><h4>${arr}</h4><button class="del1">x</button>
                                </li>        
                                `
        }
        }    
    }

addBtn.addEventListener('click', enter)
// toDo.addEventListener('input',addList)



function enter() {
    addList()
    
}


