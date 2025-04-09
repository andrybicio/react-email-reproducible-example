import Email from './emails/my-email.js'; // <-- ✅ Explicit .js!
import { render } from '@react-email/render';
import { writeFile } from 'fs/promises'; // <-- Node's modern file writing API

const OUTPATH = `out-emails`

const html = await render(<Email />, {
  pretty: true,
});

await writeFile(`${OUTPATH}/my-email.html`, html); // <-- write to file
console.log('✅ HTML written to output.html');
