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
  
  let nodes = document.querySelectorAll('.ranked-list li')
  
  for ( let i = 0; i < nodes.length; i += 1) {
    //console.log(nodes);
    let num = parseInt(nodes[i].innerHTML);
	  //console.log(num);
    nodes[i].innerHTML = (num + n);  //Bad: innerText instead of innerHTML causes the test to fail
  }
  
}



//4) Define a function deepestChild() that pulls out the most deeply nested child element from div#grand-node. (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them. This is challenging to implement correctly, but not beyond your ability!)
function deepestChild() {
  
  var startNode = document.querySelector('#grand-node');
  var deepestNodeList = startNode.children;
  var deepestElement = startNode;
  var depthCount = 0;
  
  function findDeepest(deepestNodeList) {
    
    //Go through the currently deepestNodeList and...
    for( let i = 0; i < deepestNodeList.length; i += 1) {
      
      //...see if the actual node has children
      if (deepestNodeList[i].childElementCount > 0) {
        
        //...if so, increase the depth, make the deepestElement the first child and set the deepesNodeList to all of the actual nodes children
        
        depthCount += 1;
        console.log('Tiefe: ' + depthCount);
        deepestElement = deepestNodeList[i].children[0];
        deepestNodeList = deepestNodeList[i].children;
        findDeepest(deepestNodeList);
        
      } else {
        
        console.log(deepestElement);
        return deepestElement;
        
      }
      
    }
    
  }
  
  findDeepest(deepestNodeList);
  
}







