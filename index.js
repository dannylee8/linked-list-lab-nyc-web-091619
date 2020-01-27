
function getName(node) {
  return node.name
}

function headNode(firstNode, collection) {
  return collection[firstNode]
}

function next(node, collection) {
  let nextNode = node.next
  console.log('next: ', nextNode)
  return collection[nextNode]
}

function nodeAt(idx, head, collection) {
  let daNode= headNode(head, collection)

  for (let i = 0; i < idx; i++) {
    daNode = next(daNode, collection)
  }

  return daNode;
}

