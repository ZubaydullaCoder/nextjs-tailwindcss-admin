import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import '@/css/satoshi.css';
import '@/css/style.css';

import LoadProvider from '@/providers/InitialLoadStateProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <LoadProvider>{children}</LoadProvider>
      </body>
    </html>
  );
}
