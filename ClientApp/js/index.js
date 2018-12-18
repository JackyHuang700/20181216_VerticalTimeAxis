import printMe from './print'
import '../scss/main.scss'
import '../css/styles.css'
import {
  cube,
  square,
} from './multiFunc'
// 在dll內的套件
var _ = require('lodash');

console.log('index');


console.log('lodashhhhh', _.defaults({ 'a': 1 }, { 'a': 3, 'b': 91 }))

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = "Hello webpack"

  btn.innerHTML = 'Click me and check the console!adsasdf';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

// document.body.appendChild(component())
console.log(cube(5))
console.log(square(5))
// console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`)

if (module.hot) {
  // module.hot.accept('./print.js', function() {
  //   console.log('Accepting the updated printMe module in index.js!');
  //   printMe();
  // })

}

// 需要加上才會啟動HMR
if (module.hot) {
  module.hot.accept()
}


function another_adder (...numbers) {
  // Create a list of numbers in the function
  const other_nums = [10, 20, 30, 40, 50, 60, 70, 80, 90]

  // here, we are using the spread operator to concatenate numbers and other_nums into the same array,
  // in the same line where it is initialized.
  const all_nums = [...numbers, ...other_nums]
  let total = 0

  all_nums.forEach((n, i) => {
      // Type check to avoid turning this thing into a string, or creating some other error.
      if (typeof n === 'number') {
          total += n
      } else {
          console.log('can\'t add item at index' + i + '.')
      }
  })

  return total
}

console.log(another_adder(1, 2, 3, 4, 5, 6, 7, 8))


let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }
[5, 6].map(n => console.log(n));


// 載入更多
const moreBtnDom = document.getElementById('moreBtn')
const infosDom = document.getElementById('infos')
const infoDomList = document.getElementsByClassName('info')

moreBtnDom.addEventListener('click', (event) => {
  infosDom.appendChild(createElementFromHTML(`
  <div class="info">
<time data-time="2017-03-10">7 個月之前</time><i class="icon-google-plus2"></i>
<div class="content">
  <img src="http://fakeimg.pl/400x300/" alt="" />
  <h3>Nintendo Switch</h3>
  <p>
    率說也站大管結機，一天獎同收，教示更候體。作排了人！經電亞保去外市策意是怎星持重最，系馬臺情制房統，的教多因合象巴離示可上收以生久。樣樣興年。腳書子，相微了士元外面成音麼外事天天樣出光人藥式兒經日的而是總開所劇和新著出大出投計我訴有變是一的同展夫回示性太……修青者分苦詩苦什就原電的實手也月度子大與原成、果電爸或的！望常百生寶自報有沒一，年眾不氣傳最識解務麼結著道然的大中富他會生是華大像著不修統兒只巴；媽及有，速的孩，條區之。男非真運到腦他灣英實路流滿布跟一愛神展經生也。心多職多，電資？
  </p>
  <button class="btn btn-link btn-sm">詳細內容</button>
</div>
</div>
  
  `))
})

// 轉換string to dom
function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild; 
}