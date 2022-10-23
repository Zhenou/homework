import "./css/index.css";
import $ from 'jquery';
import "./less/index.less";
import img_small from './assets/logo_small.png';
import img_run from './assets/1.gif';
import './assets/fonts/iconfont.css';



$('#myUL li:odd').css('color', 'skyblue');
$('#myUL li:even').css('color', 'red');

const img1 = document.createElement('img');
img1.src = img_small;
document.body.appendChild(img1);

const img2 = document.createElement('img');
img2.src = img_run;
document.body.appendChild(img2);

const i1 = document.createElement('i');
i1.className = 'iconfont icon-weixin';
document.body.appendChild(i1);

const i2 = document.createElement('i');
i2.className = 'iconfont icon-qq';
document.body.appendChild(i2);

console.log('1');
