import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Link from "next/link";

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
    <div>
      <h1>Pages fetch</h1>
      <p>Testing pages fetch behaviour</p>
      <div>
        <span>Time:</span> <span>{data.time}</span>
      </div>
      <Link href="/en/app-router-fetch" className="underline text-sky-500">
        app router fetch
      </Link>
    </div>
  );
}
