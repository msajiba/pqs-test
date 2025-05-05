/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import fetch from "node-fetch";

export async function GET() {
  const URL = `${process?.env?.API_BASE_URL}/api/bfbd/getbodytypecount`;

  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, max-age=0, no-cache",
        Pragma: "no-cache",
        ETag: "false",
      },
    });
    const res: any = await response?.json();

    return NextResponse.json(
      res?.map((ele: any) => ({
        label: ele?.bodytype_name,
        value: ele?.ID,
      }))
    );
  } catch (e: any) {
    return NextResponse.json({
      message: e?.message,
      url: URL,
    });
  }
}
