import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/time");
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await getData();
  return (
    <div>
      <h1>Pages fetch</h1>
      <p>Testing pages fetch behaviour</p>
      <div>
        <span>Time:</span> <span>{data.time}</span>
      </div>
      <Link href="/en/pages-fetch" className="underline text-sky-500">
        pages fetch
      </Link>
    </div>
  );
}
