#!/bin/bash

# Simple deployment script for portel.dev website
# This script helps deploy the website to various hosting platforms

echo "🚀 Portel.dev Deployment Helper"
echo "==============================="

# Check if we're in the website directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Run this script from the website directory"
    exit 1
fi

echo "✅ Found index.html - ready to deploy"

# Option 1: Local testing
echo ""
echo "Option 1: Test locally"
echo "Run: python3 -m http.server 8000"
echo "Visit: http://localhost:8000"

# Option 2: Deploy to Netlify (if netlify CLI is available)
if command -v netlify &> /dev/null; then
    echo ""
    echo "Option 2: Deploy to Netlify"
    echo "Run: netlify deploy --dir . --prod"
    echo "Then set custom domain to portel.dev in Netlify dashboard"
fi

# Option 3: Deploy to Vercel (if vercel CLI is available)  
if command -v vercel &> /dev/null; then
    echo ""
    echo "Option 3: Deploy to Vercel"
    echo "Run: vercel --prod"
    echo "Then set custom domain to portel.dev in Vercel dashboard"
fi

# Option 4: GitHub Pages
echo ""
echo "Option 4: GitHub Pages"
echo "1. Create a new repository: portel-dev/portel.dev"
echo "2. Push this website directory to main branch"
echo "3. Enable GitHub Pages in repository settings"
echo "4. Set custom domain to portel.dev"

# Option 5: Manual upload
echo ""
echo "Option 5: Manual upload to hosting provider"
echo "Upload these files to your web host:"
echo "- index.html"
echo "- style.css"
echo "- Point portel.dev domain to the hosting"

echo ""
echo "🎯 Recommended for quick launch: Netlify or Vercel with drag-and-drop deployment"
echo "💡 Remember to set portel.dev as custom domain after deployment"