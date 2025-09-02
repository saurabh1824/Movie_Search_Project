# 🎬 Movie_Search_Project

A modern React application to search for movies, view popular titles, and manage your favourite movies.  
Built with **Vite**, **React**, and **React Router**.

---

## ✨ Features
- 🔍 **Search Movies**: Search for movies using the IMDb API.  
- 🎬 **Popular Movies**: View a list of trending/popular movies on the home page.  
- ❤️ **Favourites**: Add or remove movies from your favourites, stored in your browser's local storage.  
- 🧭 **Navigation**: Simple navigation between Home and Favourites.  
- ⚡ **Fast & Modern**: Built with Vite for lightning-fast development and hot module replacement.  

---

## 📸 Screenshots
(Add your own screenshots here)

---

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js (**v18 or higher recommended**)  
- npm  

### 🔧 Installation
```bash
# Clone the repository
git clone https://github.com/saurabh1824/Movie_Search_Project.git

# Navigate into the project folder
cd Movie_Search_Project/vite-project

# Install dependencies
npm install

# Start the development server
npm run dev

Open http://localhost:5173 in your browser.
vite-project/
├── src/
│   ├── components/      # Reusable UI components (NavBar, MovieCard, ErrorBoundary)
│   ├── contexts/        # React Context for managing favourites
│   ├── css/             # CSS files for styling
│   ├── pages/           # Page components (Home, Favourite)
│   ├── services/        # API calls to fetch/search movies
│   └── App.jsx          # Main app component
├── public/
├── package.json
└── ...

```
🔑 API Usage

Uses RapidAPI IMDb APIs for fetching popular and searched movies.

⚠️ Note: The free API key has a daily request limit.
If you see a 429 error, you have exceeded the limit for the day.


🎨 Customization

To use your own API key, update the key in api.js.

You can further style the app by editing the CSS files in src/css/.


🛠 Troubleshooting

API Limit: If you get a 429 Too Many Requests error, wait for the limit to reset or use your own API key.

Local Storage: Favourites are saved in your browser's local storage and persist across sessions.

📜 License

This project is for learning purposes.
⚠️ Do not expose API keys in production.



