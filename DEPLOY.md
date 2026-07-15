# Netlify Deployment Guide for Health Genie

## Step-by-Step Deployment Instructions

### 1. Create Netlify Account & Site
1. Go to https://netlify.com and sign up (use GitHub login for convenience)
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub" 
4. Find and select your repository: `M-Atif-Latif/project`
5. Use these build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Base directory**: (leave empty)
6. Click "Deploy site"

### 2. Get Your Site Information
After deployment completes:
- **Site URL**: Will be something like `https://amazing-name-123456.netlify.app`
- **Site ID**: Found in Site settings → Site information → App ID

### 3. Generate Netlify API Token
1. Go to Netlify User settings → Applications
2. Click "New access token" under Personal access tokens
3. Name it "GitHub Actions Deploy"
4. Copy the token (save it securely)

### 4. Add Secrets to GitHub Repository
1. Go to your GitHub repo: https://github.com/M-Atif-Latif/project
2. Go to Settings → Secrets and variables → Actions
3. Click "New repository secret" and add:
   - Name: `NETLIFY_AUTH_TOKEN`
   - Value: (paste the token from step 3)
4. Add another secret:
   - Name: `NETLIFY_SITE_ID` 
   - Value: (the Site ID from step 2)

### 5. Enable Automatic Deployments
Once secrets are added, every push to the `main` branch will:
1. Build your project automatically
2. Run lint and type checks
3. Deploy to Netlify
4. Update your live site

### 6. Manual Deploy (Alternative)
If you prefer manual control:
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --build --prod
```

## Your Site Will Be Live At:
After following steps 1-4, your app will be publicly accessible at the Netlify URL from step 2.

## Need Help?
- Check GitHub Actions tab for build status
- Check Netlify dashboard for deployment logs
- Ensure all files are committed and pushed to GitHub
