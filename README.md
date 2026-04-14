# ⚡ Advanced Calculator v2.0

A sleek, cyberpunk-themed calculator web app built with pure HTML, CSS, and JavaScript — deployed and live on Render.

🔗 **Live Demo:** [https://calculator-app-dw4t.onrender.com](https://calculator-app-dw4t.onrender.com)

---

## 📸 Preview

> A fully animated, tech-aesthetic calculator with real-time computation, keyboard support, and a glowing UI — right in your browser.

---

## ✨ Features

- **Real-time Computing** — Instant results as you type
- **Precision Arithmetic** — Handles decimals and chained operations accurately
- **Error Handling** — Gracefully catches invalid expressions and displays `Error`
- **Full Keyboard Support** — No mouse? No problem
- **Animated UI** — Smooth card entrance, glowing display effects, and floating code elements
- **Responsive Design** — Works cleanly across screen sizes

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0–9` | Input digits |
| `+`, `-`, `*`, `/` | Arithmetic operators |
| `.` | Decimal point |
| `Enter` or `=` | Calculate result |
| `Backspace` | Delete last character |
| `Esc` | Clear display |

---

## 🗂️ Project Structure

```
Calculator/
├── index.html        # Main HTML layout
├── style.css         # Full UI styling & animations
├── script.js         # Calculator logic & keyboard support
├── Procfile          # Render deployment config
├── requirements.txt  # Python dependencies
└── README.md
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | CSS3 (custom animations, CSS variables) |
| Logic | Vanilla JavaScript (ES6+) |
| Server | Gunicorn (via Python) |
| Hosting | [Render](https://render.com) |

---

## 🚀 Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/calculator-app.git
   cd calculator-app
   ```

2. **Open directly in browser** *(no build step needed)*
   ```bash
   open index.html
   ```
   Or simply double-click `index.html` in your file explorer.

---

## ☁️ Deployment (Render)

This project is deployed as a **Web Service** on [Render](https://render.com) using Gunicorn.

The `Procfile` tells Render how to start the server:
```
web: gunicorn config.wsgi:application
```

To deploy your own copy:
1. Fork this repository
2. Go to [render.com](https://render.com) → **New Web Service**
3. Connect your GitHub repo
4. Set the build & start command from the `Procfile`
5. Hit **Deploy** 🎉

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Built with ❤️ and deployed on Render</p>
