import * as R from 'ramda';
import { isNotNil, objToString } from 'app/ramda/helpers';

const getMaxLength = (item: BinaryAvlTreeItem): number => {
  if (R.isNil(item)) {
    return 0;
  }
  const right = getMaxLength(item.right && item.right.node) + 1;
  const left = getMaxLength(item.left && item.left.node) + 1;
  return R.max(right, left);
};

const showLength = (item: BinaryAvlTreeItem): void => {
  let output = `Lenght, item=${item.item}, `;
  output += 'left = ' + getMaxLength(item.left && item.left.node) + ', ';
  output += 'right = ' + getMaxLength(item.right && item.right.node);
  console.log(output);
};

const getLastNodeLeft = (node: BinaryAvlTreeNode): BinaryAvlTreeNode => {
  if (R.isNil(node.node.left)) {
    console.log('getLastNodeLeft is done', objToString(node));
    return node;
  }
  return getLastNodeLeft(node.node.left);
};
const getLastNodeRight = (node: BinaryAvlTreeNode): BinaryAvlTreeNode => {
  if (R.isNil(node.node.right)) {
    return node;
  }
  return getLastNodeRight(node.node.right);
};

class BinaryAvlTreeItem {
  left: BinaryAvlTreeNode;
  right: BinaryAvlTreeNode;

  constructor(public parent: BinaryAvlTreeNode, public item: number) {}

  public push(value: number) {
    console.log('push, value', value);

    const leftLength = getMaxLength(this.left && this.left.node);
    const rightLength = getMaxLength(this.right && this.right.node);

    if (leftLength < rightLength) {
      if (this.item < value) {
        const rightNode = this.right;
        const node = getLastNodeLeft(rightNode);
        // console.log('this.parent', this.parent);
        // console.log('rightNode', rightNode);

        console.log(`change right ${this.item} with ${rightNode.node.item}`);
        this.parent.node = rightNode.node;
        rightNode.node.parent = this.parent;

        // rightNode.node.left.node = this;
        node.node.left = new BinaryAvlTreeNode(this.item);
        node.node.left.node.left = this.left;
      }
    } else if (leftLength > rightLength) {
      if (this.item > value) {
        const leftNode = this.left;
        console.log(`change left ${this.item} with ${leftNode.node.item}`);
        this.parent.node = leftNode.node;
        leftNode.node.parent = this.parent;

        const node = getLastNodeRight(leftNode);
        node.node.right = new BinaryAvlTreeNode(this.item);
        node.node.right.node.right = this.right;
        // leftNode.node.right = new BinaryAvlTreeNode(this.item);
        // leftNode.node.right.node.right = this.right;
      }
    }

    this.pushSimple(value);
  }

  public pushSimple(value: number) {
    if (value < this.item) {
      if (R.isNil(this.left)) {
        this.left = new BinaryAvlTreeNode(value);
        return;
      }
      this.left.push(value);

    } else if (value > this.item) {
      if (R.isNil(this.right)) {
        this.right = new BinaryAvlTreeNode(value);
        return;
      }
      this.right.push(value);

    } else {
      // skip doubles
    }
  }
}


class BinaryAvlTreeNode {
  node: BinaryAvlTreeItem;
  test?: string;

  constructor(item: number) {
    this.node = new BinaryAvlTreeItem(this, item);
  }
  public push(value: number) {
    this.node.push(value);
  }
}

class BinaryAvlTree {
  root: BinaryAvlTreeNode;

  public push(value: number) {
    if (R.isNil(this.root)) {
      // console.log('BinaryAvlTree set root value', value);
      console.log('BinaryAvlTree push value', value);
      this.root = new BinaryAvlTreeNode(value);
      this.root.test = 'root';
      this.root.node.parent = this.root;
      // this.root.node.parent = null;
    } else {
      console.log('BinaryAvlTree push value', value);
      this.root.push(value);
    }
  }
}



export const binaryAvlTreeSort = (arr: number[]) => {
  console.log('.');
  console.log('.');
  console.log('.');
  console.log('.');
  console.log(R.pipe(
    R.values,
    R.join(', '),
    R.concat('['),
    R.partialRight(R.concat, [']'])
  )(arr));

  const tree = new BinaryAvlTree();
  R.pipe(R.forEach((a: number) => tree.push(a)))(arr);
  console.log('DONE!DONE!DONE!DONE!');
  console.log(tree);
  console.log(tree.root);

  // console.log(getMaxLength(tree.root.node));
  // showLength(tree.root.node);
};