async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ORIGIN}/api/time`);
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await getData();
  const data2 = await getData();
  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold">App router fetch</h1>
      <p className="text-sm text-stone-500">
        Testing app router fetch behaviour
      </p>
      <div className="py-4">
        <span>Time 1:</span> <span>{data.time}</span>
        <br />
        <span>Time 2:</span> <span>{data2.time}</span>
      </div>
    </div>
  );
}
