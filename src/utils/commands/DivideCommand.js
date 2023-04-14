class DivideCommand {
  constructor(current, next) {
    this.current = current;
    this.next = next;
  }

  execute() {
    return this.current / this.next;
  }
}

export default DivideCommand;
