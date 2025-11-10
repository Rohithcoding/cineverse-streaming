# Cinextma Streaming - Free Movies & TV Shows

A modern Next.js streaming application similar to Cinextma, featuring movie and TV show streaming with a beautiful UI.

## Features

- 🎬 **Stream Movies & TV Shows** - Watch content directly in the browser
- 🔍 **Advanced Search** - Find any movie or TV show instantly
- 📺 **Multiple Sources** - Access content from various streaming providers
- 🎨 **Modern UI** - Beautiful, responsive design with dark theme
- ⚡ **Fast Performance** - Built with Next.js 14 for optimal speed
- 📱 **Mobile Responsive** - Works perfectly on all devices

## Getting Started

### Prerequisites

- Node.js 18+ installed
- TMDB API key (get it from [TMDB](https://www.themoviedb.org/settings/api))

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd /Users/rohithkumard/Downloads/cinextma-streaming
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Add your TMDB API key:
   ```
   NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
cinextma-streaming/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── watch/             # Watch page for streaming
│   ├── search/            # Search page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── HeroSection.tsx    # Hero banner
│   ├── VideoPlayer.tsx    # Video streaming player
│   ├── ContentRow.tsx     # Horizontal content rows
│   └── ...
├── lib/                   # Utility functions
│   └── tmdb.ts           # TMDB API integration
└── public/               # Static assets
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Lucide icons
- **Video Player**: React Player
- **API**: TMDB API for content metadata

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy!

## License

MIT License - feel free to use this project for learning or personal use.

## Credits

Built with ❤️ using Next.js and TMDB API
