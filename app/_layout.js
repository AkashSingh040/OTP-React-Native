import { Stack } from 'expo-router';
import { FormProvider } from '../context/FormContext';

export default function Layout() {
  return (
    <FormProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </FormProvider>
  );
}
