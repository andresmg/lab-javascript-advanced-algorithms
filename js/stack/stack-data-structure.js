class StackDataStructure {
  constructor() {
    this.stackControl = []
    this.MAX_SIZE = 10
  }

  canPush() {
    // ... your code goes here
    if (this.stackControl.length === this.MAX_SIZE) return false
    return true
  }

  display() {
    // ... your code goes here
    return this.stackControl
  }

  isEmpty() {
    // ... your code goes here
    if (this.stackControl.length > 0) return false
    return true
  }

  push(item) {
    // ... your code goes here
    if (this.canPush()) {
      this.stackControl.push(item)
      return this.stackControl
    } else {
      return "Stack Overflow"
    }
  }

  pop() {
    // ... your code goes here
    if (this.stackControl.length === 0) {
      return "Stack Underflow"
    } else {
      return this.stackControl.pop()
    }
  }
}
