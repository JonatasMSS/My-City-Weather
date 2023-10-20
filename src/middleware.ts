import { NextRequest, NextResponse } from "next/server";



export function middleware(request:NextRequest){

    const url = new URL('/search',request.url)

    return NextResponse.redirect(url)

}


export const config = {
    matcher:['/']
}