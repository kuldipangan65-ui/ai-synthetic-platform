import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  
  // TODO: Implement real authentication
  return Response.json(
    { 
      success: true, 
      message: 'Login endpoint stub',
      email: body.email 
    },
    { status: 200 }
  );
}
