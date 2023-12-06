
const pageForm = document.getElementById('main-form')

pageForm.addEventListener('submit', function(e) {
e.preventDefault()
const inputField = document.getElementById('task-list')
alert('aggiunta alla lista')
const addTask = document.createElement('div')
addTask.innerHTML = `<p>${inputField.value}</p>
<button>delete</button>` 


const listSection = document.getElementById('list')
listSection.appendChild(addTask)

const complete = function(e) {
    console.log('task completata')
    console.log(e)
}

addTask.addEventListener('click', complete)
})
