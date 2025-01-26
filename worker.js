addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    if (request.method === 'POST') {
        const data = await request.json()
        const message = data.message
        const chatId = message.chat.id
        const text = message.text
        const geminiResponse = await queryGeminiAPI(text)
        await sendMessage(chatId, geminiResponse)

        return new Response('OK', { status: 200 })
    }

    return new Response('Not Found', { status: 404 })
}
async function queryGeminiAPI(userInput) {
    const apiKey = 'YOUR_GEMINI_API_KEY'
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents: [{
                parts: [{
                    text: userInput
                }]
            }]
        })
    })

    const data = await response.json()
    return data.candidates[0].content.parts[0].text
}

async function sendMessage(chatId, text) {
    const token = 'YOUR_TELEGRAM_BOT_TOKEN'
    const url = `https://api.telegram.org/bot${token}/sendMessage`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: text
        })
    })

    return response.json()
}