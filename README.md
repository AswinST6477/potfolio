# Aswin S. Thampalakad — Portfolio

## Run locally
```bash
npm install
npm run dev
```

## Build for production
```bash
npm run build
```
Output goes to `dist/`. Deploy `dist/` to Netlify, Vercel, GitHub Pages, etc.

## Contact form -> Google Sheet (Apps Script)
1. Create a new Google Sheet.
2. Extensions > Apps Script, paste the contents of `AppsScript.gs`.
3. Deploy > New deployment > Web app
   - Execute as: Me
   - Who has access: Anyone
4. Copy the `/exec` URL.
5. In `src/App.jsx`, find `SCRIPT_URL` and replace the placeholder with your URL.
6. Rebuild/redeploy the site.

Submissions will appear as rows (Timestamp, Name, Email, Message) in a sheet
tab named "Contacts" (auto-created).

## Notes
- Mobile menu (hamburger) opens a sidebar that slides in from the left.
- Profile photo is at `src/profile.png` — replace this file to update the image.
- Edit project links, skills, and copy directly in `src/App.jsx`.
