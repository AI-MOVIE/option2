const chatContainer = document.getElementById('chat-container');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const userMessage = messageInput.value;

    // Create a user message element
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('message', 'user-message');
    userMessageElement.textContent = userMessage;
    chatContainer.appendChild(userMessageElement);

    // Simulate a response (no AI)
    setTimeout(() => {
        const responseMessage = 'You typed: ' + userMessage; // Simple response

        // Create a response message element
        const responseMessageElement = document.createElement('div');
        responseMessageElement.classList.add('message', 'ai-message');
        responseMessageElement.textContent = responseMessage;
        chatContainer.appendChild(responseMessageElement);

        // Scroll to the bottom of the chat container
        chatContainer.scrollTop = chatContainer.scrollHeight;

        // Clear the input field
        messageInput.value = '';
    }, 1000); // Simulate a 1-second delay for the response
});
