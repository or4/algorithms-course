import * as R from 'ramda';
import { isNotNil } from 'app/ramda/helpers';

class BinaryAvlTreeItem {

  left: BinaryAvlTreeItem;
  right: BinaryAvlTreeItem;

  constructor(public parent: BinaryAvlTreeItem | null, public item: number, public height: number) {}

  public push(value: number, height: number) {

    if (R.isNil(this.left) && isNotNil(this.right)) {
      const rightNode = this.right;
      if (this.parent === null) {
        console.log('set root to tree');
        tree.root = rightNode;
      }
      rightNode.parent = this.parent;
      this.parent = rightNode;
      rightNode.left = this;
      rightNode.right = new BinaryAvlTreeItem(rightNode, value, 0);
    }
    if (R.isNil(this.right) && isNotNil(this.left)) {
      const leftNode = this.left;
      if (this.parent === null) {
        console.log('set root to tree');
        tree.root = leftNode;
      }
      leftNode.parent = this.parent;
      this.parent = leftNode;
      leftNode.right = this;
      leftNode.left = new BinaryAvlTreeItem(leftNode, value, 0);
    }

    this.pushSimple(value);

  }

  public pushSimple(value: number) {
    if (value < this.item) {
      if (R.isNil(this.left)) {
        this.left = new BinaryAvlTreeItem(this, value, 0);
        return;
      }
      this.left.push(value, 0);

    } else if (value > this.item) {
      if (R.isNil(this.right)) {
        this.right = new BinaryAvlTreeItem(this, value, 0);
        return;
      }
      this.right.push(value, 0);

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
      this.root = new BinaryAvlTreeItem(null, value, 0);
      return;
    }
    this.root.push(value, this.root.height);
  }
}



const tree = new BinaryAvlTree();



export const binaryAvlTreeSort = (arr: number[]) => {
  R.pipe(R.forEach((a: number) => tree.push(a)))(arr);
  console.log('tree', tree);
};