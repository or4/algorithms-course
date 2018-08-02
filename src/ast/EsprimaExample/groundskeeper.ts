/**
 * A small utility to remove declared pragmas and console declarations
 * original https://github.com/Couto/groundskeeper
 */

import esprima from 'esprima';
import falafel from 'falafel';
const type = esprima.Syntax;

class Groundskeeper {
  options: any

  constructor(options?: any) {
    this.options = options || {};

    // Accept string or array. Don't break backward compatibility.
    if (typeof this.options.namespace === 'string') {
      this.options.namespace = [this.options.namespace];
    }

    if (!this.options.replace) {
      this.options.replace = '';
    }
  }

  clean(data: any) {
    // const ast = esprima.parse(data, {
    //   comment: true,
    //   tolerant: true,
    //   range: true
    // });
    // return ast;

    const result = falafel(data, (node: any) => {
      this.removeConsole(node);
      this.removeDebugger(node);
    });

    return result.toString();
  }

  /**
 * [removeDebugger description]
 *
 * @api private
 * @method
 * @param   {[type]} node [description]
 * @returns {[type]}      [description]
 */
  removeDebugger(node: any) {

    if (node.type === type.DebuggerStatement) {
      node.update('');
    }
  }


  /**
 * [removeConsole description]
 * @method
 * @param   {[type]} node [description]
 * @returns {[type]}      [description]
 * @api private
 */
  removeConsole(node: any) {

    if (node.type === type.Identifier && node.source() === 'console') {
      while (node && node.type !== type.MemberExpression) {
        node = node.parent;
      }

      if (node &&
            node.parent.type === type.MemberExpression &&
            (
              node.parent.source().indexOf('window') !== -1 ||
                node.parent.source().indexOf('global') !== -1
            )
      ) {
        node = node.parent;
      }


      if (node && node.parent.type === type.CallExpression) {
        node = node.parent;

        if (node.parent.type === type.ExpressionStatement) {
          node = node.parent;
        }

        node.update(this.options.replace);
      }
    }
  }

  /**
 * [removeNamespace description]
 * @method
 * @param   {[type]} node      [description]
 * @param   {[type]} namespace [description]
 * @returns {[type]}           [description]
 * @api private
 */
  /* Groundskeeper.prototype.removeNamespace = function (node, namespace) {

  if ([type.MemberExpression, type.Identifier].indexOf(node.type) !== -1 &&
        namespace.indexOf(node.source()) !== -1) {

    while ([type.CallExpression, type.AssignmentExpression, type.FunctionDeclaration,
      type.VariableDeclaration].indexOf(node.type) === -1) {
      node = node.parent;
    }

    // Remove the whole call expression group like `func().bFunc().cFunc()`.
    // We can recognize such structure by checking `CallExpression` and
    // `MemberExpression` occurrence (in this order),
    // where there are not two `CallExpression`s in a row.
    const TYPES = [type.CallExpression, type.MemberExpression];
    const CALL_EXPR_TYPE_INDEX = TYPES.indexOf(type.CallExpression);

    // `CallExpression` has to be recognized firstly to keep `alert()` in `alert(log())`
    let last = CALL_EXPR_TYPE_INDEX;

    while (node.parent) {
      // recognize `node.parent` type
      const index = TYPES.indexOf(node.parent.type);

      // require that index has been recognized and it's not second `CallExpression` again
      if (index === -1 || (index === CALL_EXPR_TYPE_INDEX && index === last)) break;

      // go forward
      node = node.parent;
      last = index;
    }

    if (node.parent.type === type.ExpressionStatement) {
      node = node.parent;
    }

    node.update(this.options.replace);

  }

}; */


  /**
 * [removePragmas description]
 *
 * @api private
 * @method
 * @param   {[type]} comments [description]
 * @param   {[type]} source   [description]
 * @param   {[type]} pragmas  [description]
 * @returns {[type]}          [description]
 */
  removePragmas(comments: any, source: any, pragmas: any) {

    let pragmaMatcher = /^[<][/]*([^\s]*)[>]$/;
    // find comments' ranges
    const ranges = comments
      .map(function (comment: any) {

        const matches = pragmaMatcher.exec(comment.value.trim());
        const pragmaName = matches && matches[1];

        // if the comment
        // * only contains a `pragma`
        // * that pragma is not on the pragmas keep list
        if (pragmaName && pragmas.indexOf(pragmaName) === -1) {
          return comment.range;
        }
        return null;
      })
      .filter(function (val: any) {
        return (val && val.length);
      })
      .map(function (range: any, index: number) {
        return (index % 2 === 0) ? range[0] : range[1];
      });
    // remove
    let start = 0;
    const end = 0;
    const match = '';
    let finalsource = '';

    if (ranges && ranges.length) {
      while (ranges.length) {
        finalsource += source.slice(start, ranges.shift());
        start = ranges.shift();
      }

      finalsource += source.slice(start, source.length);
      return finalsource;
    } else {
      return source;
    }
  }
}

export const groundskeeper = new Groundskeeper();


/**
 * [write description]
 * @method
 * @param   {[type]} data [description]
 * @returns {[type]}      [description]
 * @public
 */
// Groundskeeper.prototype.write = function (data) {
//   if (data && data.length) {
//     this.buffer += this.clean(data.toString());
//     this.emit('data', this.buffer);
//   }
// };

/**
 * [end description]
 * @method
 * @param   {[type]} data [description]
 * @returns {[type]}      [description]
 * @public
 */
// Groundskeeper.prototype.end = function (data) {
//   if (data && data.length) { this.write(data) }
//   this.emit('end', this.buffer);
// };
