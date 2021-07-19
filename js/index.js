//获取所有对象
var spaceship = document.querySelector(".spaceship"),
    fire = document.querySelector(".fire"),
    btnLaunch = document.querySelector(".btnLaunch"),
    btnLand = document.querySelector(".btnLand"),
    btnStart = document.querySelector(".btnStart"),
    txtLaunch = document.querySelector(".btnLaunch span"),
    txtLand = document.querySelector(".btnLand span"),
    txtStart = document.querySelector(".btnStart span"),
    shadow = document.querySelector(".shadow");

//事件的添加
btnLaunch.addEventListener("click",launch);
btnLand.addEventListener("click",land);
btnStart.addEventListener("click",start);

//事件处理函数
//发射
function launch(){
    btnStart.classList.add("disable");
    fire.classList.add("burn");
    spaceship.classList.remove("land");
    spaceship.classList.add("launch");
    spaceship.removeEventListener("animationend",burn);
    shadow.style.opacity = "0";

    //按钮
    btnLaunch.classList.add("active");
    btnStart.disabled = true;
    btnStart.classList.remove("active");
    btnLand.classList.remove("active");
    btnLand.classList.remove("disable");
    btnLand.disabled = false;

    //文本
    txtLaunch.innerText = "发射";
    txtStart.innerText = "开始";
    txtLand.innerText = "着落";
}

//着陆
function land(){
    //飞船
    spaceship.classList.remove("launch");
    spaceship.classList.add("land");
    spaceship.addEventListener("animationend",burn);//熄火显示

    // 按钮
    btnLaunch.classList.remove("active");
    btnLand.classList.add("active");
    btnStart.classList.remove("disable");
    btnStart.disabled = false;

    // 按钮文本
    txtLand.innerText = "着陆";
    txtLaunch.innerText = "发射";
}

//熄火
function burn(){
    fire.classList.remove("burn");
    spaceship.classList.remove("land");
    shadow.style.opacity = "0.2";
    // buttons
    btnLand.classList.remove("active");
    btnLand.classList.add("disable");
    btnLand.disabled = true;
    // 着陆按钮文本
    txtLand.innerText = "着陆";

}

//开始
function start(){
    if(btnStart.classList.contains("active")){
        fire.classList.remove("burn");//去火
        btnStart.classList.remove("active");//改变背景样式
        txtStart.innerText = "start";//文本
    }else{
        fire.classList.add("burn");
        btnStart.classList.add("active");
        txtStart.innerText = "停止";
    }

}

//停止按钮
function stop(){
    fire.classList.remove("burn");
}