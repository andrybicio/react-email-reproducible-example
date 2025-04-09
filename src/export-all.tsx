// src/export-all.tsx
import React from 'react';
import { readdir } from 'fs/promises';
import path from 'path';
import { render } from '@react-email/render';
import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';

// ESM __dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateEmails() {
  // emails are in dist/emails relative to this file (after compilation)
  const emailsDir = path.join(__dirname, 'emails');
  const files = await readdir(emailsDir);

  for (const file of files) {
    // Process only JavaScript files (compiled from .tsx)
    if (file.endsWith('.js')) {
      const { name: basename } = path.parse(file);
      // Build the file URL for dynamic import.
      // Using import.meta.url ensures that Node can resolve the module.
      const moduleUrl = new URL(`./emails/${file}`, import.meta.url);

      try {
        const emailModule = await import(moduleUrl.href);
        const EmailComponent = emailModule.default;
        // Render the email component to HTML.
        const html = await render(<EmailComponent />, { pretty: true });
        // Write the HTML to a file with the same basename.
        const outputPath = path.join("out-emails", `${basename}.html`);
        await writeFile(outputPath, html);
        console.log(`✅ HTML written to ${outputPath}. Generated HTML for ${file}`);
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }
  }
}

await generateEmails();
