class AddCommand {
  constructor(current, next) {
    this.current = current;
    this.next = next;
  }

  execute() {
    return this.current + this.next;
  }
}

class SubtractCommand {
  constructor(current, next) {
    this.current = current;
    this.next = next;
  }

  execute() {
    return this.current - this.next;
  }
}

class MultiplyCommand {
  constructor(current, next) {
    this.current = current;
    this.next = next;
  }

  execute() {
    return this.current * this.next;
  }
}

class DivideCommand {
  constructor(current, next) {
    this.current = current;
    this.next = next;
  }

  execute() {
    return this.current / this.next;
  }
}

class ModCommand {
  constructor(current, next) {
    this.current = current;
    this.next = next;
  }

  execute() {
    return this.current % this.next;
  }
}

export { AddCommand, SubtractCommand, MultiplyCommand, DivideCommand, ModCommand };
