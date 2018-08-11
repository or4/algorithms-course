import * as R from 'ramda';
import { isNotNil } from 'app/ramda/helpers';


class BinaryAvlTreeItem {
  left: BinaryAvlTreeNode;
  right: BinaryAvlTreeNode;

  constructor(public parent: BinaryAvlTreeNode, public item: number) {}

  public push(value: number) {

    if (R.isNil(this.left) && isNotNil(this.right)) {
      if (this.item < value) {
        const rightNode = this.right;
        console.log(`change ${this.item} with ${rightNode.node.item}`);
        this.parent.node = rightNode.node;
        rightNode.node.left = new BinaryAvlTreeNode(this.item);
      }
    }
    if (R.isNil(this.right) && isNotNil(this.left)) {
      if (this.item > value) {
        const leftNode = this.left;
        console.log(`change ${this.item} with ${leftNode.node.item}`);
        this.parent.node = leftNode.node;
        leftNode.node.right = new BinaryAvlTreeNode(this.item);
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
  public toString() {
    return this.item;
  }
}


class BinaryAvlTreeNode {
  node: BinaryAvlTreeItem;

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
      console.log('BinaryAvlTree set root value', value);
      this.root = new BinaryAvlTreeNode(value);
      // this.root.node.parent = null;
    } else {
      console.log('BinaryAvlTree push value', value);
      this.root.push(value);
    }
  }
}



export const binaryAvlTreeSort = (arr: number[]) => {
  const tree = new BinaryAvlTree();

  R.pipe(R.forEach((a: number) => tree.push(a)))(arr);
  console.log('tree', tree);
};