import { NextResponse } from "next/server";

export async function GET() {
    const req = await fetch("https://api-pour-apprendre.fr/api/v1/users?page=1&nopaginate=false");
    const resp = await req.json();
    return NextResponse.json({datas: resp});
}