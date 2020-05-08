namespace InterpreterPattern {
  export class Context {
  }
  export interface AbstractExpression {
    interpret(context: Context): void
  }

  export class TerminalExpression implements AbstractExpression {
    public interpret(context: Context): void {
      console.log("TerminalExpression")
    }
  }

  export class NonterminalExpression implements AbstractExpression {
    public interpret(context: Context): void {
      console.log("NonterminalExpression")
    }
  }
}