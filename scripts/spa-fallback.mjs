// GitHub Pages and most static hosts serve 404.html for unknown paths.
// Copying index.html there lets deep links like /services load the app.
import { copyFileSync } from 'node:fs'
copyFileSync('dist/index.html', 'dist/404.html')
