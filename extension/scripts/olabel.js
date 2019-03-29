/**
 * OLabel
 * Image source classification browser extension to improve web accessibility
 *
 * STEP 1: Get all the img tags without an alt attribute from the webpage
 * STEP 2: Use TensorFlow classifiy the altless image sources
 * STEP 3: Add the description as a value to the altless images
 */


// STEP 1: Obtaining
// arr[obj]: Hold every img object in the webpage
const imgList = document.getElementsByTagName('img');
// arr[[num: index, str: source]]: Hold all img sources without an alt attribute
const noAltList = [];

for (let i = 0; i < imgList.length; i++) {
  console.log(`DEBUG: \ni: ${i} \nsrc: ${imgList[i]['src']}`);

  // If no alt attribute or alt value, log no alt
  if (imgList[i]['alt'] === '') {
    console.log('❌ There is NO alt attribute');
    noAltList.push([i, imgList[i]['src']]);
  } else {
    console.log('alt:', imgList[i]['alt']);
  }
}


// STEP 2: TensorFlow
// console.log('noAltList:', noAltList);


// STEP 3: Append
// For every element in noAltList, add the image classification with
// imgList[index]['alt'] = 'Image Description from TensorFlow Classification';
