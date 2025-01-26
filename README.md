# TeleGem: Telegram Bot powered by Gemini API ✨

TeleGem is a simple yet powerful bot that integrates Telegram 🤖 with the Gemini API 🧠 to provide intelligent responses to user queries. This bot listens for incoming messages, processes them using the Gemini API, and sends back the generated response to the user on Telegram.


## Features

* **Telegram Integration:** Seamlessly interacts with Telegram users. 🗣️
* **Gemini API:** Utilizes the Gemini API for generating intelligent responses.  💡
* **Cloudflare Workers:** Can be deployed on Cloudflare Workers for serverless execution. ☁️


## Installation

### Normal Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/telegem.git
   cd telegem
   ```

2. **Install Dependencies:**

   Ensure you have Node.js and npm installed. Then run:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Run the Bot:**

   Start the bot using:

   ```bash
   npm start
   ```


### Cloudflare Workers Installation (Using GUI)

1. **Sign Up/Log In to Cloudflare Workers:**

   Go to Cloudflare Workers. Sign up or log in to your account.

2. **Create a New Worker:**

   Click on the "Create a Service" button. Enter a name for your Worker (e.g., telegem). Click on the "Create service" button.

3. **Add the TeleGem Code:**

   In the Worker dashboard, click on the "Quick Edit" button. Replace the default code with the TeleGem code provided.

4. **Set Up Environment Variables:**

   In the Worker dashboard, go to the "Settings" tab. Click on the "Variables" section. Add the following environment variables:

   * `TELEGRAM_BOT_TOKEN`: Your Telegram bot token.
   * `GEMINI_API_KEY`: Your Gemini API key.

5. **Deploy the Worker:**

   After adding the code and environment variables, click on the "Save and Deploy" button. 🚀

6. **Set Up Telegram Webhook:**

   Open a terminal or command prompt. Run the following command to set the webhook URL to point to your Cloudflare Worker:

   ```bash
   curl -F "url=https://your-worker.subdomain.workers.dev" https://api.telegram.org/bot<YOUR_TELEGRAM_BOT_TOKEN>/setWebhook
   ```


## Usage

Once the bot is running, you can interact with it on Telegram. Send a message to your bot, and it will respond with a generated message from the Gemini API.


## Example

**User:** `/start`

**Bot:** `Hello! How can I assist you today? 😃`

**User:** `What is the capital of France?`

**Bot:** `The capital of France is Paris. 🇫🇷`


## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes. 🙏


## Acknowledgments

* **Telegram:** For the messaging platform. ✉️
* **Gemini API:** For the intelligent response generation. 🧠
* **Cloudflare Workers:** For the serverless execution environment. 💨


## Support

For any issues or questions, please open an issue on the GitHub repository.

Enjoy using TeleGem! If you have any feedback or suggestions, feel free to reach out. 🎉

[![Built by Sobhan](https://img.shields.io/badge/Built%20by-Sobhan%20Bahrami-blue)](https://github.com/itssobhan1387)
