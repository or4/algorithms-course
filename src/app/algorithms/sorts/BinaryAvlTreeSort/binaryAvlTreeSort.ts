import * as R from 'ramda';

class BinaryAvlTreeItem {
  left: BinaryAvlTreeItem;
  right: BinaryAvlTreeItem;

  constructor(public item: number, public height: number) {}

  public push(value: number) {
    if (value < this.item) {
      if (R.isNil(this.left)) {
        this.left = new BinaryAvlTreeItem(value, this.height + 1);
        return;
      }
      this.left.push(value);

    } else if (value > this.item) {
      if (R.isNil(this.right)) {
        this.right = new BinaryAvlTreeItem(value, this.height + 1);
        return;
      }
      this.right.push(value);

    } else {
      // skip doubles
    }
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

class BinaryAvlTree {
  root: BinaryAvlTreeItem;

  public push(value: number) {
    if (R.isNil(this.root)) {
      this.root = new BinaryAvlTreeItem(value, 1);
      return;
    }
    this.root.push(value);
  }

  public getSorted() {
    return this.root.getSorted();
  }
}

export const binaryAvlTreeSort = (arr: number[]) => {
  const tree = new BinaryAvlTree();
  R.pipe(R.forEach((a: number) => tree.push(a)))(arr);
  return tree.getSorted();
};