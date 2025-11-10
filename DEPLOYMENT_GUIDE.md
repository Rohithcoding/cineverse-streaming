# Deployment Guide - Cineverse Streaming App

## 🚀 Deploy to Vercel (Recommended)

### Method 1: Vercel CLI (Current Process)

The deployment is currently running. Follow the prompts:

1. **Login to Vercel** (if not already logged in)
   - The CLI will open a browser window
   - Authorize the Vercel CLI

2. **Answer the prompts:**
   - Set up and deploy? → **Yes**
   - Which scope? → Select your account
   - Link to existing project? → **No** (for first deployment)
   - What's your project's name? → **cineverse-streaming** (or your choice)
   - In which directory is your code located? → **./** (press Enter)
   - Want to override the settings? → **No** (press Enter)

3. **Wait for deployment**
   - Vercel will build and deploy your app
   - You'll get a production URL when complete

4. **Add Environment Variable**
   After deployment, add your TMDB API key:
   ```bash
   vercel env add NEXT_PUBLIC_TMDB_API_KEY
   ```
   Then paste your API key: `824517fc3eeb54a8859418c6c4b71775`
   
   Or add it via Vercel Dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add: `NEXT_PUBLIC_TMDB_API_KEY` = `824517fc3eeb54a8859418c6c4b71775`
   - Redeploy: `vercel --prod`

### Method 2: Vercel Dashboard (Alternative)

1. **Push to GitHub:**
   ```bash
   cd /Users/rohithkumard/Downloads/cinextma-streaming
   git init
   git add .
   git commit -m "Initial commit - Cineverse streaming app"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy via Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Framework Preset: **Next.js** (auto-detected)
   - Add Environment Variable:
     - Name: `NEXT_PUBLIC_TMDB_API_KEY`
     - Value: `824517fc3eeb54a8859418c6c4b71775`
   - Click "Deploy"

3. **Your app will be live!**
   - You'll get a URL like: `https://cineverse-streaming.vercel.app`

## 🔧 Post-Deployment Steps

### 1. Verify Environment Variables
```bash
vercel env ls
```

### 2. Check Deployment Status
```bash
vercel ls
```

### 3. View Logs
```bash
vercel logs
```

### 4. Redeploy (if needed)
```bash
vercel --prod
```

## 🌐 Custom Domain (Optional)

### Add Custom Domain:
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `cineverse.com`)
3. Follow DNS configuration instructions
4. Wait for DNS propagation (5-30 minutes)

### Or via CLI:
```bash
vercel domains add yourdomain.com
```

## 📊 Deployment Checklist

- ✅ Vercel CLI installed
- ✅ Project files ready
- ✅ Environment variables configured
- ✅ Build command: `npm run build`
- ✅ Framework: Next.js
- ⏳ Deployment in progress...

## 🔑 Environment Variables Required

```env
NEXT_PUBLIC_TMDB_API_KEY=824517fc3eeb54a8859418c6c4b71775
```

**Note:** This is already in your `.env` file locally. For production, add it to Vercel.

## 🐛 Troubleshooting

### Build Fails:
```bash
# Clear cache and rebuild
vercel --force
```

### Environment Variable Issues:
```bash
# List all env vars
vercel env ls

# Pull env vars locally
vercel env pull
```

### Domain Issues:
- Check DNS settings
- Wait for propagation
- Verify domain ownership

### Deployment Stuck:
```bash
# Cancel current deployment
Ctrl + C

# Try again
vercel --prod
```

## 📱 After Deployment

### Your app will be available at:
- Production: `https://your-project.vercel.app`
- Preview: Auto-generated for each git push

### Features Available:
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments from git
- ✅ Preview deployments for branches
- ✅ Analytics (optional)
- ✅ Edge functions
- ✅ Serverless functions

## 🔄 Continuous Deployment

Once connected to GitHub:
1. Push to `main` branch → Auto-deploy to production
2. Push to other branches → Auto-deploy to preview URLs
3. Pull requests → Get preview URLs automatically

## 💡 Tips

1. **Free Tier Limits:**
   - 100 GB bandwidth/month
   - Unlimited deployments
   - Automatic SSL

2. **Performance:**
   - Images optimized automatically
   - Static assets cached globally
   - Edge network for fast loading

3. **Monitoring:**
   - Check Vercel Dashboard for analytics
   - View deployment logs
   - Monitor performance metrics

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- TMDB API Docs: https://developers.themoviedb.org/3

---

## Quick Commands Reference

```bash
# Deploy to production
vercel --prod

# Deploy to preview
vercel

# Add environment variable
vercel env add VARIABLE_NAME

# List deployments
vercel ls

# View logs
vercel logs

# Remove deployment
vercel rm deployment-url

# Link to existing project
vercel link
```

---

**Your Cineverse streaming app is being deployed! 🎉**

Check the terminal for the deployment URL once it completes.
