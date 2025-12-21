export async function fetchChatHistory(user1, user2) {
  const res = await fetch(
    `http://localhost:8082/APITEST/messages?user1=${user1}&user2=${user2}`
  );

  const data = await res.json();

  return data.map((m) => ({
    from: m.sender,
    to: m.receiver,
    text: m.text,
  }));
}
