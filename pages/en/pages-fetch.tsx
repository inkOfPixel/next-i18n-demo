import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Link from "next/link";
import "../../app/globals.css";
import Navbar from "@/components/nav-bar";

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
          <span>Time:</span> <span>{data.time}</span>
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
