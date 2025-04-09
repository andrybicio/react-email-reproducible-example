import * as React from 'react';
import Email from './emails/my-email';
import { render } from '@react-email/render';

const html = await render(<Email />, {
  pretty: true,
});

console.log(html);