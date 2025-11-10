# Cinextma Streaming - Setup Guide

## 🚀 Quick Setup

### 1. Install Dependencies

```bash
cd /Users/rohithkumard/Downloads/cinextma-streaming
npm install
```

### 2. Get TMDB API Key

1. Go to [TMDB](https://www.themoviedb.org/)
2. Create a free account
3. Go to Settings → API
4. Request an API key (choose "Developer" option)
5. Copy your API key

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` and add your TMDB API key:

```
NEXT_PUBLIC_TMDB_API_KEY=your_actual_api_key_here
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎬 Features

### ✅ Implemented

- **Home Page** with featured content and multiple content rows
- **Video Player** with 4 different streaming sources (VidSrc, VidSrc Pro, 2Embed, SuperEmbed)
- **Search Functionality** - Search for any movie or TV show
- **Continue Watching** - Automatically tracks your watch history
- **Movie/TV Details** - Full information including cast, genres, ratings
- **Similar Content** - Recommendations based on what you're watching
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Multiple Servers** - Switch between streaming sources if one doesn't work

### 🎨 Design Features

- Dark theme matching Cinextma
- Smooth animations and transitions
- Glassmorphism effects
- Horizontal scrolling content rows
- Hero section with featured content
- Rating badges and metadata

## 📁 Project Structure

```
cinextma-streaming/
├── app/
│   ├── api/              # API routes for TMDB data
│   ├── watch/            # Watch page with video player
│   ├── search/           # Search page
│   ├── layout.tsx        # Root layout with header
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── HeroSection.tsx   # Featured content banner
│   ├── VideoPlayer.tsx   # Video streaming player
│   ├── ContentRow.tsx    # Horizontal content rows
│   ├── ContentCard.tsx   # Individual content cards
│   ├── MovieDetails.tsx  # Movie/TV show details
│   ├── SearchResults.tsx # Search results display
│   └── ContinueWatching.tsx # Watch history
├── lib/
│   ├── tmdb.ts          # TMDB API functions
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variable: `NEXT_PUBLIC_TMDB_API_KEY`
   - Click "Deploy"

3. **Your app will be live!**

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Add environment variables in site settings

## 🎯 Usage

### Watching Content

1. Browse the home page for trending and popular content
2. Click on any movie or TV show poster
3. The video player will load with multiple streaming sources
4. If one source doesn't work, switch to another using the server buttons
5. Your watch history is automatically saved

### Searching

1. Use the search bar in the header
2. Type any movie or TV show name
3. Results appear instantly
4. Click any result to watch

### Continue Watching

- Your watch history is saved in browser localStorage
- The "Continue Watching" section appears on the home page
- Shows your last 10 watched items

## 🔧 Customization

### Adding More Content Rows

Edit `app/page.tsx`:

```tsx
<ContentRow title="Horror Movies" endpoint="/api/movies/genre/27" />
<ContentRow title="Sci-Fi Movies" endpoint="/api/movies/genre/878" />
```

### Genre IDs

- Action: 28
- Comedy: 35
- Drama: 18
- Horror: 27
- Sci-Fi: 878
- Thriller: 53
- Romance: 10749

### Changing Streaming Sources

Edit `components/VideoPlayer.tsx` to add or modify streaming sources.

## 🐛 Troubleshooting

**Video not loading?**
- Try switching to a different server
- Check your internet connection
- Some content may not be available on all servers

**API errors?**
- Verify your TMDB API key is correct
- Check if you've exceeded API rate limits (free tier: 40 requests/10 seconds)

**Build errors?**
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Clear npm cache: `npm cache clean --force`

## 📝 Notes

- All streaming links are embedded from third-party sources
- Content availability depends on the streaming providers
- The app uses TMDB API for metadata only
- Watch history is stored locally in your browser

## 🎉 You're All Set!

Your Cinextma streaming app is ready to use. Enjoy watching movies and TV shows!
