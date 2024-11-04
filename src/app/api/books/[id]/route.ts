import { NextRequest, NextResponse } from 'next/server';
export async function PUT(request: NextRequest){
    const body = await request.json();
    
    return new NextResponse(JSON.stringify({message: 'updated'}), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function DELETE(request: NextRequest){
    console.log('ddd');
    
    return new NextResponse(JSON.stringify({message: 'deleted'}), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}
