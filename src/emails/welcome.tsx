import { Container, Text } from '@react-email/components';
import DefaultLayout from '../components/default-layout/index.js';

const WelcomeEmail = () => {
  return (
    <DefaultLayout>
      <Container style={{ padding: '20px' }}>
        <Text style={{ fontSize: '16px' }}>
          Welcome to our platform! We're excited to have you.
        </Text>
      </Container>
    </DefaultLayout>
  );
}

export default WelcomeEmail