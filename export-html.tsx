import * as React from 'react';
import { MyTemplate } from './email';
import { render } from '@react-email/render';

const html = await render(<MyTemplate />, {
  pretty: true,
});

console.log(html);