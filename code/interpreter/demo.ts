/// <reference path="interpreter.ts" />
namespace InterpreterPattern {
  let context: InterpreterPattern.Context = new InterpreterPattern.Context(),
  list = [],
  i = 0

  list.push(new InterpreterPattern.NonterminalExpression())
  list.push(new InterpreterPattern.NonterminalExpression())
  list.push(new InterpreterPattern.NonterminalExpression())
  list.push(new InterpreterPattern.TerminalExpression())
  list.push(new InterpreterPattern.NonterminalExpression())
  list.push(new InterpreterPattern.NonterminalExpression())
  list.push(new InterpreterPattern.TerminalExpression())
  list.push(new InterpreterPattern.TerminalExpression())

  for (i = 0; i < list.length ;i += 1) {
    list[i].interpret(context)
  }
}
