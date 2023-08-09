import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  time: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ time: getTime() });
}

function getTime(): string {
  const d = new Date();
  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();
  const ms = d.getMilliseconds();
  return `${padZero(h)}:${padZero(m)}:${padZero(s)}.${ms}`;
}

function padZero(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}
