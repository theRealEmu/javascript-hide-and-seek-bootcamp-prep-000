//1) Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

//const li2 = getFirstSelector('ul.ranked-list li');
//console.log(li2);


//2) Define a function nestedTarget() that pulls a .target out of #nested (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ). (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target');
}
//console.log(nestedTarget('nested','.target'));



//3) Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()
function increaseRankBy(n) {
  
  let nodes = document.querySelector('.ranked-list');
  
  for ( let i = 0; i < nodes.length; i += 1) {
    
    let num = nodes.children[i].innerText;
    nodes.children[i].innerText = parseInt(num + n);
  }
}
