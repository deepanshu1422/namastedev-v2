import { redirect } from 'next/navigation';

export default function DashboardPage() {
  redirect('https://30dc.graphy.com/s/dashboard');
  
  // The following will never be rendered due to the redirect
  return null;
}
