import { NextResponse } from 'next/server';

export function middleware(req) {
  const res = NextResponse.next();
  const cookie = req.cookies.get('sessionId');

  // Check if the sessionId cookie is missing
  if (!cookie) {
    // Generate a new UUID for sessionId
    const newSessionId = crypto.randomUUID();
    
    // Set the sessionId cookie
    res.cookies.set('sessionId', newSessionId, {
    
    });
  }

  return res;
}
