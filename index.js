let saveBtn = document.getElementById("saveBtn");
let task = document.querySelector("[placeholder = 'put your text here']");
let list = document.getElementById("list");
let todo = [];
let tbody = document.getElementById("tbody");
let updateBtn = document.getElementById("update");

saveBtn.onclick = function (e) {
    e.preventDefault();
    if (task.value !== "") {
        todo.push(task.value);
        task.value = "";
        veiw();
    }
}




function veiw() {
    let result = '';
    for (let i = 0; i < todo.length; i++) {
        result += `
    <tr>
    <td>${todo[i]}</td>
    <td><button onclick = destroy(${i})>delete</button></td>
    <td><button onclick = update(${i})>edite</button></td>
    </tr>`;
    }
    tbody.innerHTML = result;
}

function destroy(x) {
    todo.splice(x, 1);
    veiw();
}


let index;

function update(z) {
    index = z;
    task.value = todo[z];
    saveBtn.style.display = 'none';
    updateBtn.style.display = 'inline';
}


updateBtn.onclick = function (e) {
    e.preventDefault();
    todo[index] = task.value;
    veiw();
    task.value = "";
    updateBtn.style.display = 'none';
    saveBtn.style.display = 'inline';
}