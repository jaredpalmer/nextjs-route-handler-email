import { Email } from './email';
import { render } from '@react-email/render';

const html = render(
  <Email
    inviteFromLocation="New York, NY"
    inviteLink="https://google.com"
    username="@rauchg"
    invitedByUsername="@jaredpalmer"
  />,
  {
    pretty: true,
  }
);

export async function GET(request: Request) {
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
