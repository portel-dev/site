# GitHub Pages Deployment Guide

This guide walks through deploying the Portel.dev website to GitHub Pages with a custom domain.

## Quick Setup Steps

### 1. Create GitHub Repository
```bash
# Repository should be created at: portel-dev/site
# This repository structure keeps the website independent
```

### 2. Push Code to GitHub
```bash
cd /Users/arul/Projects/portel-site
git remote add origin git@github.com:portel-dev/site.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to repository Settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The GitHub Actions workflow will automatically deploy

### 4. Configure Custom Domain
1. In repository Settings → Pages
2. Under "Custom domain", enter: `portel.dev`
3. The CNAME file is already included in the repository
4. Wait for DNS propagation (can take up to 24 hours)

### 5. DNS Configuration
Configure your domain registrar to point to GitHub Pages:

**For Apex Domain (portel.dev):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153  
Value: 185.199.110.153
Value: 185.199.111.153
```

**Alternative CNAME approach:**
```
Type: CNAME
Name: @
Value: portel-dev.github.io
```

## Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
- Triggers on every push to `main` branch
- Builds and deploys the static site
- Updates the live website at portel.dev

## File Structure

```
portel-site/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow
├── index.html              # Main landing page
├── style.css               # Styling
├── CNAME                   # Custom domain configuration
├── README.md               # Project documentation
├── DEPLOYMENT.md           # This file
└── deploy.sh               # Alternative deployment script
```

## Verification Steps

1. **Check GitHub Actions**: Visit the "Actions" tab to see deployment status
2. **Test Custom Domain**: Visit https://portel.dev to verify the site loads
3. **SSL Certificate**: GitHub Pages automatically provides HTTPS
4. **Mobile Responsive**: Test on various devices and screen sizes

## Benefits of GitHub Pages

✅ **Free Hosting**: No cost for public repositories  
✅ **Custom Domain**: Full portel.dev branding  
✅ **SSL Certificate**: Automatic HTTPS encryption  
✅ **CDN**: Fast global content delivery  
✅ **Automatic Deployment**: Push to deploy workflow  
✅ **Version Control**: Full Git history and rollback capability  

## Troubleshooting

### Domain Not Working
- Wait 24 hours for DNS propagation
- Check DNS settings with your domain registrar
- Verify CNAME file contains exactly: `portel.dev`

### Deployment Fails
- Check GitHub Actions logs for error details
- Ensure repository has Pages enabled
- Verify workflow permissions are set correctly

### SSL Certificate Issues
- GitHub Pages automatically provisions SSL
- Can take a few hours after domain configuration
- Force refresh browser cache (Ctrl+F5)

## Future Enhancements

Consider adding:
- Google Analytics tracking
- SEO meta tags optimization
- Performance monitoring
- A/B testing for conversion optimization

## Repository Strategy

This independent website repository allows:
- **Brand Growth**: Add new Portel products easily
- **Professional Image**: Established domain for all launches
- **SEO Benefits**: Dedicated site for search optimization
- **Marketing Hub**: Central location for all social media traffic

---

The portel.dev website is now ready to provide professional authenticity for your Hacker News launch and future product announcements!