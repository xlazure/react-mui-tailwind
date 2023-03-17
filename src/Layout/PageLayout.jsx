import { Container } from "@mui/material";

export default function PageLayout({ header, body, footer }) {
  return (
    <Container maxWidth="xs" className="border" disableGutters>
      {header}
      <main className="p-4">{body}</main>
      {footer}
    </Container>
  );
}

// className="container w-100 max-w-3/10 mx-auto border"
