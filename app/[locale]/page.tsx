import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import Image from "next/image";

type SearchParams = Record<string, string | string[] | undefined>;

const MAX_COMMENT_LENGTH = 50;

export default function IndexPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  console.log("IndexPage", { searchParams });
  const page = parsePageFromSearchParams(searchParams);
  const comment =
    typeof searchParams.comment === "string" ? searchParams.comment : "";
  const isFirstPage = page === 1;
  const t = useTranslations("IndexPage");
  return (
    <div className="max-w-3xl p-6 mx-auto">
      <h1 className="text-2xl font-semibold mb-8">{t("title")}</h1>
      <div className="divide-y divide-gray-700">
        <Section>
          <SectionHeading>Rich text</SectionHeading>
          {t.rich("rich-text", {
            b: (children) => <b>{children}</b>,
            i: (children) => <i>{children}</i>,
          })}
        </Section>

        <Section>
          <SectionHeading>String interpolation</SectionHeading>
          <p>{t("You are on page {page}!", { page })}</p>
          <div className="space-x-2">
            {isFirstPage ? (
              <span className="text-gray-400">Prev</span>
            ) : (
              <Link
                href={page === 2 ? "/" : { query: { page: page - 1 } }}
                className="underline"
              >
                Prev
              </Link>
            )}
            <Link href={{ query: { page: page + 1 } }} className="underline">
              Next
            </Link>
          </div>
        </Section>

        <Section>
          <SectionHeading>
            Bench advisor (i.e how to do pluralization)
          </SectionHeading>
          <div className="flex space-x-4">
            <div>
              <BenchImage
                src="/images/awful-bench.jpeg"
                alt="A bench in the park"
              />
              <p>
                {t("bench rating", {
                  starCount: 0,
                })}
              </p>
            </div>

            <div>
              <BenchImage
                src="/images/bench-1.jpeg"
                alt="A bench in the park"
              />
              <p>
                {t("bench rating", {
                  starCount: 1,
                })}
              </p>
            </div>

            <div>
              <BenchImage
                src="/images/big-bench.jpeg"
                alt="A bench in the park"
              />
              <p>
                {t("bench rating", {
                  starCount: 5,
                })}
              </p>
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeading>Comments</SectionHeading>
          <form action="/" method="get">
            <div className="flex flex-col">
              <label htmlFor="comment" className="mb-1">
                {t("comment label", { max: MAX_COMMENT_LENGTH })}
              </label>
              <textarea
                id="comment"
                name="comment"
                className="border border-gray-700 bg-gray-800 rounded p-2 max-w-md outline-none focus:ring-1 focus:ring-blue-300"
                defaultValue={comment}
              />
              {comment.length > MAX_COMMENT_LENGTH && (
                <p className="text-red-500 mt-2">
                  {t("comment is too long", {
                    max: MAX_COMMENT_LENGTH,
                    current: comment.length,
                  })}
                </p>
              )}
            </div>
            <button className="text-white bg-blue-500 hover:bg-blue-600 rounded px-2 py-1 mt-2">
              {t("submit comment button text")}
            </button>
          </form>
        </Section>
        <Section>
          <SectionHeading>Example with gender</SectionHeading>
          <p>{t("select", { gender: "female" })}</p>
          <p>{t("select", { gender: "male" })}</p>
          <p>{t("select", { gender: "other" })}</p>
        </Section>
      </div>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-semibold mb-2">{children}</h2>;
}

function BenchImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative">
      <Image
        priority
        src={src}
        width={300}
        height={200}
        alt={alt}
        className="h-[150px] object-cover"
      />
    </div>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <div className="py-6">{children}</div>;
}

function parsePageFromSearchParams(searchParams: SearchParams): number {
  const page = parseInt(searchParams.page as string, 10);
  return isNaN(page) ? 1 : Math.max(1, page);
}
