import React from 'react';
import { Container, Img } from '@react-email/components';

const Header = () => {
  return (
    <Container style={styles.container}>
      <Img
        src="https://yourdomain.com/logo.png"
        alt="Company Logo"
        width="120"
        height="40"
        style={styles.logo}
      />
    </Container>
  );
}

export default Header

const styles = {
  container: {
    padding: '20px 0',
    textAlign: 'center' as const,
    borderBottom: '1px solid #e0e0e0',
  },
  logo: {
    margin: '0 auto',
  },
};