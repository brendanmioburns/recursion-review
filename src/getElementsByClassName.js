// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, node) {
  // your code here
  var result = []; 
  var selectedNode = node || document.body;
  var selectedNodeChildren = selectedNode.childNodes;

  if (selectedNode.classList && selectedNode.classList.contains(className)) {
    result.push(selectedNode);
  }
  
  if (selectedNodeChildren) {
    selectedNodeChildren.forEach(function(selectedNodeChild) {
      result = result.concat(getElementsByClassName(className, selectedNodeChild));
    });
  }
  return result;
};