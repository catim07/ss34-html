let list=[
    {
        name: "học js"
    },
    {
        name: "học css"
    },
];
if(!localStorage.getItem("list")){
    localStorage.setItem("list",JSON.stringify(list))
}else{
    list=JSON.parse(localStorage.getItem("list"))
}
function updateData(){
    localStorage.setItem("list",JSON.stringify(list))
}
function render(){
    let links=document.getElementById("links")
    let data=``
    for(let i=0;i<list.length;i++){
        data+=`<div style="display: flex;width: 350px; justify-content: space-between; align-items: center;margin-top: 20px;">
                <div style="font-size: 30px;">${list[i].name}</div>
                <div>
                    <button onclick="dele(${i})" type="button" class="btn btn-danger">Xóa</button>
                </div>
            </div>
            <hr>`
    }
    links.innerHTML=data
}
render()
function add(e){
    e.preventDefault()
    let temp={
        name: e.target.name.value
    }
    list.push(temp)
    updateData()
    render()
}
function dele(index){
    list.splice(index,1)
    updateData()
    render()
}