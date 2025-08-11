const queueUL = document.querySelector(".list-queue")
const queueInput = document.querySelector(".queue-input")
const warningTopQueue = document.querySelector("#queue-container .warning-top")
const warningBottomQueue = document.querySelector(
  "#queue-container .warning-bottom"
)
const addQueue = document.querySelector(".btn-add-queue")
const dequeue = document.querySelector(".btn-take-dequeue")

const queue = new QueueDataStructure()

const clearQueueInput = () => {
  // ... your code goes here
  queueInput.value = ""
  warningTopQueue.removeAttribute("style")
  warningBottomQueue.removeAttribute("style")
}

const generateListQueue = () => {
  // Create placeholders for the maximum number of items the
  // queue can handle. The original implementation attempted
  // to access `newStack.MAX_SIZE`, which doesn't exist in this
  // context and resulted in a runtime error when rendering the
  // queue. Use the queue instance's `MAX_SIZE` instead.
  for (let i = 1; i <= queue.MAX_SIZE; i++) {
    const newLi = document.createElement("li")
    newLi.classList.add("inactive")
    queueUL.appendChild(newLi)
  }
}

generateListQueue()

const generateWarningQueue = (type) => {
  if (type === "underflow") {
    // ... your code goes here
    warningBottomQueue.setAttribute("style", "display:block")
    return (warningBottomQueue.innerText = "Queue Underflow")
  } else if (type === "overflow") {
    // ... your code goes here
    warningBottomQueue.setAttribute("style", "display:block")
    return (warningBottomQueue.innerText = "Queue Overflow")
  }
}

const addToQueue = () => {
  // ... your code goes here
  if (queueInput.value !== "") {
    queue.enqueue(queueInput.value)
    const newItem = document.querySelector(".list-queue .inactive")
    newItem.innerText = queueInput.value
    newItem.className = "active"
    clearQueueInput()
  } else {
    warningTopQueue.innerText = "Please insert some value"
    warningTopQueue.setAttribute("style", "display:block")
  }

  if (queue.canEnqueue() === false) {
    generateWarningQueue("overflow")
  }
}

const removeFromQueue = () => {
  // ... your code goes here
  const lastItems = document.querySelectorAll(".list-queue .active")
  if (lastItems.length >= 1) {
    lastItems[0].remove()
    let newLi = document.createElement("li")
    newLi.className = "inactive"
    // Append the placeholder element at the end of the list to keep
    // the visual representation aligned with the queue's capacity.
    queueUL.appendChild(newLi)

    queue.dequeue()

    clearQueueInput()
  } else {
    generateWarningQueue("underflow")
  }
}

addQueue.addEventListener("click", addToQueue)
dequeue.addEventListener("click", removeFromQueue)
