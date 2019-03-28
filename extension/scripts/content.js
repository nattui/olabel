// content.js

// alert("Hello from your Chrome extension!");

const imgList = document.getElementsByTagName('img');
// console.log('Hello, Jasmine and Nhat!', imgList);

const noAltList = [];
for (let i = 0; i < imgList.length; i++) {

  console.log('src:', i, imgList[i]['src']);

  // If no alt attribute or alt value, log no alt
  if (imgList[i]['alt'] === '') {
    console.log('There is NO alt attribute');
    noAltList.push([i, imgList[i]['src']]);
  } else {
    console.log('alt:', imgList[i]['alt']);
  }
}

console.log('noAltList:', noAltList);

// Step 2: TensorFlow

// Step 4: Back description back
imgList[3]['alt'] = 'Web Graph';