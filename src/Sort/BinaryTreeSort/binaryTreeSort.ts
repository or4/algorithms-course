import * as R from 'ramda';

class BinaryTreeItem {
  left: BinaryTreeItem;
  right: BinaryTreeItem;

  constructor(public parent: BinaryTreeItem | null, public item: number) {}

  public push(value: number) {
    if (value < this.item) {
      if (R.isNil(this.left)) {
        this.left = new BinaryTreeItem(this, value);
        return;
      }
      this.left.push(value);

    } else if (value > this.item) {
      if (R.isNil(this.right)) {
        this.right = new BinaryTreeItem(this, value);
        return;
      }
      this.right.push(value);

    } else {
      // skip doubles
    }
  }

  public find(value: number): BinaryTreeItem | null {
    if (value === this.item) {
      return this;
    }
    if (value < this.item) {
      if (R.isNil(this.left)) {
        return null;
      }
      return this.left.find(value);
    }
    if (value > this.item) {
      if (R.isNil(this.right)) {
        return null;
      }
      return this.right.find(value);
    }
    return null;
  }

  public getSorted() {
    let output = [] as number[];

    R.forEach(
      (item: number) => output.push(item)
    )(this.left && this.left.getSorted() || []);

    output.push(this.item);

    R.forEach(
      (item: number) => output.push(item)
    )(this.right && this.right.getSorted() || []);

    return output;
  }
}

class BinaryTree {
  root: BinaryTreeItem;

  public push(value: number) {
    if (R.isNil(this.root)) {
      this.root = new BinaryTreeItem(null, value);
      return;
    }
    this.root.push(value);
  }

  public getSorted() {
    return this.root.getSorted();
  }
}

export const binaryTreeSort = (arr: number[]) => {
  const tree = new BinaryTree();
  R.pipe(R.forEach((a: number) => tree.push(a)))(arr);
  return tree.getSorted();
};