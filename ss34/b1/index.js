
let accMain=[
    {
        email:"cuong@gmail.com",
        password:"123456"
    },
]
// localStorage.listUser=JSON.stringify(accMain)
function check(e){
    e.preventDefault()
    temp={
        email: e.target.email.value,
        password: e.target.password.value,
    }
    let confirmPassword= e.target.confirmPassword.value
    if(!temp.email){
        alert("mời bạn nhập email")
        return
    }else if(!temp.password){
        alert("mời bạn nhập mật khẩu")
        return
    }else if(!confirmPassword){
        alert("mời bạn nhập mật khẩu lại")
        return
    }else if(temp.password!==confirmPassword){
        alert("vui lòng nhập mật khẩu giống nhau")
        return
    }
    let checklist=JSON.parse(localStorage.listUser)
    if(checklist.filter(s=>s.email.toUpperCase()===temp.email.toUpperCase()).length>0){
        alert("tài khoảng đã tồn tại")
        return
    }
    checklist.push(temp)
    localStorage.setItem("listUser",JSON.stringify(checklist))
    alert("thêm thành công")
    e.target.reset()
}