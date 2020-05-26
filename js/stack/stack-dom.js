const stackList = document.getElementById("stack-list")
const stackInput = document.getElementById("stack-input")
const container = document.getElementById("container")
const warningTopStack = document.querySelector("#stack-container .warning-top")
const warningBottomStack = document.querySelector(
  "#stack-container .warning-bottom"
)
const addStackBtn = document.getElementById("add-stack")
const takeStackBtn = document.getElementById("take-stack")

const newStack = new StackDataStructure()

const clearStackInput = () => {
  // ... your code goes here
  stackInput.value = ""
  warningTopStack.removeAttribute("style")
  warningBottomStack.removeAttribute("style")
}

const renderListStack = () => {
  // ... your code goes here
  for (i = 1; i <= newStack.MAX_SIZE; i++) {
    const newLi = document.createElement("li")
    newLi.classList.add("inactive")
    stackList.appendChild(newLi)
  }
}

renderListStack()

const generateWarningStack = (type) => {
  if (type === "underflow") {
    // ... your code goes here
    warningBottomStack.setAttribute("style", "display:block")
    return (warningBottomStack.innerText = "Stack Underflow")
  } else if (type === "overflow") {
    // ... your code goes here
    warningBottomStack.setAttribute("style", "display:block")
    return (warningBottomStack.innerText = "Stack Overflow")
  }
}

const addToStack = () => {
  // ... your code goes here
  if (stackInput.value !== "") {
    newStack.push(stackInput.value)
    const newItem = document.querySelector(".list-stack .inactive")
    newItem.innerText = stackInput.value
    newItem.className = "active"
    clearStackInput()
  } else {
    warningTopStack.innerText = "Please insert some value"
    warningTopStack.setAttribute("style", "display:block")
  }

  if (newStack.canPush() === false) {
    generateWarningStack("overflow")
  }
}

const removeFromStack = () => {
  // ... your code goes here
  const lastItems = document.querySelectorAll(".list-stack .active")
  if (lastItems.length >= 1) {
    lastItems[lastItems.length - 1].innerText = ""
    lastItems[lastItems.length - 1].classList.remove("active")
    lastItems[lastItems.length - 1].classList.add("inactive")

    newStack.dequeue()
    clearStackInput()
  } else {
    generateWarningStack("underflow")
  }
}

addStackBtn.addEventListener("click", addToStack)
takeStackBtn.addEventListener("click", removeFromStack)
