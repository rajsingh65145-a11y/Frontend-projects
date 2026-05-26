const chatBox = document.getElementById("chat-box")

const messageInput = document.getElementById("message-input")

const sendBtn = document.getElementById("send-btn")

// SEND MESSAGE
function sendMessage(){

  const text = messageInput.value.trim()

  if(text === ""){
    return
  }

  // USER MESSAGE
  const messageDiv = document.createElement("div")

  messageDiv.classList.add("message")
  messageDiv.classList.add("me")

  messageDiv.innerText = text

  chatBox.appendChild(messageDiv)

  // AUTO REPLY
  setTimeout(() => {

    const replyDiv = document.createElement("div")

    replyDiv.classList.add("message")
    replyDiv.classList.add("other")

    replyDiv.innerText = "You said: " + text

    chatBox.appendChild(replyDiv)

    // AUTO SCROLL
    chatBox.scrollTop = chatBox.scrollHeight

  }, 1000)

  // CLEAR INPUT
  messageInput.value = ""

  // AUTO SCROLL
  chatBox.scrollTop = chatBox.scrollHeight

}

// BUTTON CLICK
sendBtn.addEventListener("click", sendMessage)

// ENTER KEY
messageInput.addEventListener("keypress", (e) => {

  if(e.key === "Enter"){
    sendMessage()
  }

})