// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

// 1. 复制提醒
document.addEventListener("copy", function () {
    debounce(function () {
        new Vue({
            data: function () {
                this.$notify({
                    title: "哎嘿！复制成功🍬",
                    message: "若要转载最好保留原文链接哦，给你一个大大的赞！",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success",
                    duration: 3000
                });
            }
        })
    }, 300);
})

// 2. 节日弹窗
// 本质就是用的sessionStorage这个本地存储对象去确定是不是同一个会话，如果是同一个的话，就弹窗一次，如果下次进来了就不是同一个会话了，又会弹窗一次

// if (sessionStorage.getItem("isPopupWindow") != "1") {
//     Swal.fire("欢迎光临小站，玩的愉快🎉");
//     sessionStorage.setItem("isPopupWindow", "1");
// }

// var d = new Date();
// m = d.getMonth() + 1;
// dd = d.getDate();
// y = d.getFullYear();
// if (m == 10 && dd <= 3) {               //国庆节
//     if (sessionStorage.getItem("isPopupWindow") != "1") {
//         Swal.fire("祝祖国" + (y - 1949).toString() + "岁生日快乐！");
//         sessionStorage.setItem("isPopupWindow", "1");
//     }
// }
