import Navbar from "@/components/nav-bar";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import "../../app/globals.css";

type Data = {
  time: string;
};

export const getServerSideProps: GetServerSideProps<{
  data: Data;
}> = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ORIGIN}/api/time`);
  const data = await res.json();
  return { props: { data } };
};

export default function Page({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <div className="p-5">
        <h1 className="text-2xl font-semibold">Pages fetch</h1>
        <p className="text-sm text-stone-500">Testing pages fetch behaviour</p>
        <div className="py-4">
          <p>
            <span>Time:</span>{" "}
            <span className="font-semibold text-green-500">{data.time}</span>
          </p>
        </div>
        <div className="rounded-md bg-blue-950 p-4">
          <p className="text-sm text-blue-300">
            Every time we refresh the page we get a new time, so the request
            here is not being cached
          </p>
        </div>
        <div className="py-5">
          <a
            href="https://github.com/inkOfPixel/next-i18n-demo/blob/main/pages/en/pages-fetch.tsx"
            target="_blank"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            View source
            <ArrowTopRightOnSquareIcon
              className="-mr-0.5 h-5 w-5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </Layout>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar>
        <ul className="flex space-x-2 h-full items-center">
          <li>
            <Link href="/pages-fetch" className="px-3 py-2 rounded bg-gray-700">
              pages fetch
            </Link>
          </li>
          <li>
            <Link
              href="/app-router-fetch"
              className="px-3 py-2 rounded hover:bg-gray-800"
            >
              App router fetch
            </Link>
          </li>
        </ul>
      </Navbar>
      {children}
    </>
  );
}
