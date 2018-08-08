import * as R from 'ramda';

class BinaryTreeItem {
  left: BinaryTreeItem;
  right: BinaryTreeItem;
  item: number;

  public push(value: number) {
    if (value < this.item) {
      if (!this.left) {
        this.left = new BinaryTreeItem();
        this.left.item = value;
      } else {
        this.left.push(value);
      }
    } else if (value > this.item) {
      if (!this.right) {
        this.right = new BinaryTreeItem();
        this.right.item = value;
      } else {
        this.right.push(value);
      }
    }
  }
  public toString() {
    let output = '[';
    if (this.left) {
      output += 'left: ' + this.left.toString() + '; ';
    }
    output += ' item: ' + this.item + '; ';
    if (this.right) {
      output += 'right: ' + this.right.toString() + ';';
    }
    output += ']';

    return output;
  }
}

class BinaryTree {
  root: BinaryTreeItem;

  public push(value: number) {
    if (!this.root) {
      this.root = new BinaryTreeItem();
      this.root.item = value;
    } else {
      this.root.push(value);
    }
    // console.log('push', value, this);
  }
  public toString() {
    return this.root.toString();
  }
}

export const binaryTreeSort = (arr: number[]) => {

  const tree = new BinaryTree();

  R.pipe(
    R.forEach((a: number) => tree.push(a))
  )(arr);

  console.log('tree done', tree);
  console.log('tree done', tree.toString());

  return arr;
};