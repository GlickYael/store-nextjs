import { NextResponse ,NextRequest} from 'next/server';
import data from './data'; 
console.log(data);

export async function GET(request: NextRequest) {
    return new NextResponse(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' ,
            

        },
    });
}

export async function POST(request: NextRequest)
{
    const body = await request.json();
    data.push(body);
    return new NextResponse(JSON.stringify({message: 'added'}), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}
