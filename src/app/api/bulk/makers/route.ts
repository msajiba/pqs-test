/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import fetch from "node-fetch";

export async function GET() {
  const URL = `${process?.env?.API_BASE_URL}/api/vehicle/getBulkStockCount`;

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res: any = await response?.json();
    return NextResponse.json(
      res?.data?.MakerList?.map((ele: any) => ({
        label: ele?.Name,
        value: ele?.Id,
        count: ele?.TotalCount,
      }))
    );
  } catch (e: any) {
    return NextResponse.json({
      message: e?.message,
      url: URL,
    });
  }
}
