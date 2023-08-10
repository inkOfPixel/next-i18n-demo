import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ORIGIN}/api/time`, {
    cache: "force-cache",
  });
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
        <p>
          <span>Time 1:</span>{" "}
          <span className="font-semibold text-blue-500">{data.time}</span>
        </p>
        <p>
          <span>Time 2:</span>{" "}
          <span className="font-semibold text-green-500">{data2.time}</span>
        </p>
      </div>
      <div className="rounded-md bg-blue-950 p-4 text-blue-300 text-sm space-y-2">
        <p>
          When running in production, the first request (Time 1) is cached, but
          the second (Time 2) is not.
        </p>
        <p>
          The cache does not seem to persist across deployments though, so it is
          not behaving exactly as advertised, but we are probably missing
          something.
        </p>
      </div>
      <div className="py-5">
        <a
          href="https://github.com/inkOfPixel/next-i18n-demo/blob/main/app/%5Blocale%5D/(caching)/app-router-fetch/page.tsx"
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
  );
}
