# 🤖 AskAI — AI Question Answering System

AskAI is a full-featured, Flask-based AI assistant that lets you chat
with an AI, ask questions about your PDFs, and even analyze images —
all wrapped in a clean, installable web app.

## ✨ Features

- 💬 **AI Chat** — powered by [Groq](https://groq.com)'s fast cloud AI
- 📄 **Multiple PDF Q&A** — upload several PDFs and switch between them
- 🖼️ **Image Chat** — attach a photo and ask questions about it
- 🎤 **Voice Input** — ask questions by speaking
- 🔊 **Text-to-Speech** — have answers read aloud
- 🌗 **Dark / Light theme** toggle
- 📜 **Chat history** with search and delete
- 📤 **Export answers** to PDF or Word
- 👍👎 **Rate answers** with a simple thumbs up/down
- 🔗 **Share answers** via a public link
- 🌐 **Guest mode** — anyone can try the AI without creating an account
- 📱 **Installable app (PWA)** — add it to your phone or desktop home
  screen like a native app

## 🛠️ Tech Stack

- **Backend:** Python, Flask, SQLite
- **AI:** [Groq API](https://console.groq.com) (`openai/gpt-oss-20b`
  for text, `qwen/qwen3.6-27b` for vision)
- **PDF handling:** PyPDF2, pytesseract (OCR), pdf2image
- **Document export:** reportlab (PDF), python-docx (Word)
- **Frontend:** HTML, CSS, vanilla JavaScript

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/singhaijain06/QuestionAnsweringSystem_Final_Backup.git
cd QuestionAnsweringSystem_Final_Backup
```

### 2. Install dependencies

```bash
pip install -r "requirements..txt"
```

### 3. Add your Groq API key

Get a free API key from [console.groq.com](https://console.groq.com),
then create a file named `groq_key.txt` in the project root and paste
your key inside it.

### 4. Run the app

```bash
python app.py
```

Visit `http://127.0.0.1:5000` in your browser.

## 📁 Project Structure

```
├── app.py                 # Main Flask application
├── requirements..txt      # Python dependencies
├── static/                # CSS, JS, icons, PWA files
├── templates/              # HTML pages
└── groq_key.txt           # Your API key (not committed to Git)
```

## 🔒 Notes

- `groq_key.txt`, `database.db`, and the `uploads/` folder are
  intentionally excluded from this repository (see `.gitignore`) to
  keep API keys and user data private.

## 📄 License

This project is for personal/educational use.
