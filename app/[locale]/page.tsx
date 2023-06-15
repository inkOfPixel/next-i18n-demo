import { useTranslations } from "next-intl";

export default function IndexPage() {
  const t = useTranslations();
  let description = t.rich(
    "This is a basic example that demonstrates the usage of <code>next-intl</code> with the Next<dot/>js App Router<dot/> Try changing the locale in the top right corner and see how the content changes<dot/>",
    {
      code: (children) => <code>{children}</code>,
    }
  );
  return (
    <div>
      <h1>{t("next-intl example")}</h1>
      {typeof description === "string" ? (
        <div
          dangerouslySetInnerHTML={{
            __html: replaceDot(description),
          }}
        ></div>
      ) : (
        <div>{description}</div>
      )}
    </div>
  );
}

function replaceDot(fallback: string) {
  return fallback.replaceAll("<dot/>", ".");
}
