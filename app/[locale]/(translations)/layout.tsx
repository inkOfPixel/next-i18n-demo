import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import Link from "next-intl/link";
import { classNames } from "@/helpers/style-helpers";

export default function LocaleLayout({ children, params }: any) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <div className="flex bg-gray-900 h-16 px-5  justify-end">
          <ul className="flex space-x-2 h-full items-center">
            <li className="hover:underline">
              <Link
                href="/"
                locale="en"
                className={classNames(locale === "en" && "underline")}
              >
                English
              </Link>
            </li>
            <li className="hover:underline">
              <Link
                href="/"
                locale="it"
                className={classNames(locale === "it" && "underline")}
              >
                Italian
              </Link>
            </li>
            <li className="hover:underline">
              <Link
                href="/"
                locale="de"
                className={classNames(locale === "de" && "underline")}
              >
                German
              </Link>
            </li>
          </ul>
        </div>

        {children}
      </body>
    </html>
  );
}
