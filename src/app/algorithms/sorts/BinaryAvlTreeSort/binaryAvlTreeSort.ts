import * as R from 'ramda';
import { isNotNil } from 'app/ramda/helpers';

class BinaryAvlTreeNode {
  node: BinaryAvlTreeItem
}
class BinaryAvlTreeItem {

  left: BinaryAvlTreeItem;
  right: BinaryAvlTreeItem;

  constructor(public parent: BinaryAvlTreeItem | null, public item: number) {}

  public push(value: number) {

    if (R.isNil(this.left) && isNotNil(this.right)) {
      if (this.item < value) {
        const rightNode = this.right;
        console.log(`change ${this.item} with ${rightNode.item}`);
        if (this.parent === null) {
          console.log(`set root.item ${rightNode.item}`);
          tree.root = rightNode;
        }
        rightNode.parent = this.parent;
        this.parent = rightNode;
        rightNode.left = this;
        rightNode.right = new BinaryAvlTreeItem(rightNode, value);
      }
    }
    if (R.isNil(this.right) && isNotNil(this.left)) {
      if (this.item > value) {
        const leftNode = this.left;
        console.log(`change ${this.item} with ${leftNode.item}`);
        if (this.parent === null) {
          console.log(`set root.item ${leftNode.item}`);
          tree.root = leftNode;
        }
        leftNode.parent = this.parent;
        this.parent = leftNode;
        leftNode.right = this;
        leftNode.left = new BinaryAvlTreeItem(leftNode, value);
      }
    }

    this.pushSimple(value);
  }

  public pushSimple(value: number) {
    if (value < this.item) {
      if (R.isNil(this.left)) {
        this.left = new BinaryAvlTreeItem(this, value);
        return;
      }
      this.left.push(value);

    } else if (value > this.item) {
      if (R.isNil(this.right)) {
        this.right = new BinaryAvlTreeItem(this, value);
        return;
      }
      this.right.push(value);

    } else {
      // skip doubles
    }
  }
}



class BinaryAvlTree {
  root: BinaryAvlTreeItem;

  public push(value: number) {
    console.log('BinaryAvlTree push value', value);
    if (R.isNil(this.root)) {
      this.root = new BinaryAvlTreeItem(null, value);
      return;
    }
    this.root.push(value);
  }
}



const tree = new BinaryAvlTree();



export const binaryAvlTreeSort = (arr: number[]) => {
  R.pipe(R.forEach((a: number) => tree.push(a)))(arr);
  console.log('tree', tree);
};