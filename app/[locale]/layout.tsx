import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import Link from "next-intl/link";

export default function LocaleLayout({ children, params }: any) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <ul className="flex space-x-2 bg-gray-900 h-16 px-5 items-center justify-end">
          <li className="hover:underline">
            <Link href="/" locale="en">
              English
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="/" locale="it">
              Italian
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="/" locale="de">
              German
            </Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
