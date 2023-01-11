


let ejs = require('ejs');
let people = ['geddy', 'neil', 'alex'];
let html = ejs.render('<%= people.join(", "); %>', { people: people });

console.log(html);

// 拼接字符串的三种方式对比
let star = '周杰伦'
let desc = `歌手 ${star} 发新专辑了`
console.log(desc); 

let star2 = '周杰伦'
let desc2 = '歌手 '+ star2 +' 发新专辑了2'
console.log(desc2); 

// let star3 = '周杰伦'
// let desc3 = ejs.render('歌手 <%= star %> 发新专辑了3',{star: star3})
// console.log(desc3);


let star3 = '周杰伦'
let desc3 = require('fs').readFileSync('./demo.html');
let rst = ejs.render(desc3, { star: star3 })
console.log(rst);