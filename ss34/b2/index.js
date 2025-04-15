let courses = [
    {
        id: 1,
        content: 'Learn Javascript Session 01',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Anh Bách',
    },
    {
        id: 2,
        content: 'Learn Javascript Session 2',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Lâm th',
    },
    {
        id: 3,
        content: 'Learn CSS Session 1',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Hiếu Ci Ớt Ớt',
    },
];
let check=-1
if (!localStorage.getItem("courses")) {
    localStorage.setItem("courses", JSON.stringify(courses));
} else {
    courses = JSON.parse(localStorage.getItem("courses"));
}

function updateData() {
    localStorage.setItem("courses", JSON.stringify(courses))
}

function render(){
    let list=document.getElementById("list")
    let data=``
    for(let i=0;i<courses.length;i++){
        data+=`<tr>
            
                    <th scope="row">${courses[i].id}</th>
                    <td>${courses[i].content}</td>
                    <td>${courses[i].dueDate}</td>
                    <td>${courses[i].status}</td>
                    <td>${courses[i].assignedTo}</td>
                    <td>
                        <button onclick="change(${i})" type="button" class="btn btn-success">sửa</button>
                        <button onclick="dele(${i})" type="button" class="btn btn-danger">xóa</button>
                    </td>
                </tr>`
    }
    list.innerHTML=data
}
render()
function add(e){
    e.preventDefault()
   if(check==-1){
    temp={
        id: courses[courses.length-1].id+1,
        content: e.target.content.value,
        dueDate: e.target.dueDate.value,
        status: e.target.status.value,
        assignedTo: e.target.assignedTo.value,
    }
    courses.push(temp)
   }else{
    courses[index].content=document.getElementById("content").value
    courses[index].dueDate=document.getElementById("dueDate").value
    courses[index].status=document.getElementById("status").value
    courses[index].assignedTo=document.getElementById("assignedTo").value
   }
   updateData()
    render()
}
function dele(index){
    courses.splice(index,1)
    updateData()
    render()
}
function change(index){
    document.getElementById("content").value=courses[index].content
    document.getElementById("dueDate").value=courses[index].dueDate
    document.getElementById("status").value=courses[index].status
    document.getElementById("assignedTo").value=courses[index].assignedTo
    check=index
}
