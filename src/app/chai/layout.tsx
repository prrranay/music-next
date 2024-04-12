export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <p>inner text</p>
        {children}
    </>
  );
}
