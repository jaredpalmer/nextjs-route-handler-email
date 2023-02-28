import { Email } from './email';
import { render } from '@react-email/render';

const html = render(<Email username="rauchg" />, {
  pretty: true,
});

export async function GET(request: Request) {
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
