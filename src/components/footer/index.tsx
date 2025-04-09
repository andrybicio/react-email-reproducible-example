import React from 'react';
import { Container, Text } from '@react-email/components';

const Footer = () => {
  return (
    <Container style={styles.container}>
      <Text style={styles.text}>
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Text>
      <Text style={styles.text}>
        123 Your Street, City, Country
      </Text>
    </Container>
  );
}

export default Footer

const styles = {
  container: {
    padding: '20px 0',
    textAlign: 'center' as const,
    color: '#888888',
    fontSize: '12px',
    borderTop: '1px solid #e0e0e0',
    marginTop: '30px',
  },
  text: {
    margin: '4px 0',
  },
};