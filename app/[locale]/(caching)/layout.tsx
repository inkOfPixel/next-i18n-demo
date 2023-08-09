import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import Link from "next-intl/link";
import Navbar from "@/components/nav-bar";

export default function LocaleLayout({ children, params }: any) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <Navbar>
          <ul className="flex space-x-2 h-full items-center">
            <li>
              <Link
                href="/pages-fetch"
                className="px-3 py-2 rounded hover:bg-gray-800"
              >
                Pages fetch
              </Link>
            </li>
            <li>
              <Link
                href="/app-router-fetch"
                className="px-3 py-2 rounded bg-gray-700"
              >
                App router fetch
              </Link>
            </li>
          </ul>
        </Navbar>

        {children}
      </body>
    </html>
  );
}
