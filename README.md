<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/17K00R8tdrexydYeL2zylwR4qsQvP3tH0

## Live Demo

Visit the live site: https://joe-watkins.github.io/Cascadia-Proposal-Agent/

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch. The GitHub Actions workflow handles the build and deployment process.

To enable GitHub Pages:
1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. Push changes to the `main` branch to trigger a deployment
