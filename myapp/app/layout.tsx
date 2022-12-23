/* eslint-disable @next/next/no-head-element */

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                <main>
                    <nav>
                        <link href="/">
                            Home
                        </link>
                        <link href="/notes">
                            Notes
                        </link>
                    </nav>
                    {children}
                </main>
            </body>
        </html>
    );
}