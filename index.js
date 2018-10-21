//1) Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

//const li2 = getFirstSelector('ul.ranked-list li');
//console.log(li2);


//2) Define a function nestedTarget() that pulls a .target out of #nested (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ). (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)

function nestedTarget(nested, target) {
  return document.getElementById(nested).children(target);
}
console.log(nestedTarget('nested','.target'));
