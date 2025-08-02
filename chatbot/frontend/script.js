async function sendMessage() {
  const input = document.getElementById("userInput");
  const chatWindow = document.getElementById("chatWindow");
  const message = input.value;
  if (!message) return;

  chatWindow.innerHTML += `<div><b>You:</b> ${message}</div>`;
  input.value = "";

  const res = await fetch("http://localhost:8000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await res.json();
  const reply = data.reply || "Sorry, there was an error.";
  chatWindow.innerHTML += `<div><b>Bot:</b> ${reply}</div>`;
  chatWindow.scrollTop = chatWindow.scrollHeight;
}