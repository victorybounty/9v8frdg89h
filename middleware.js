import { NextResponse } from 'next/server';

const blockedCountries = [
  'US', 'CA', 'ES',
  'GB', 'FR', 'DE', 'IT', 'NL', 'SE', 'PL', 'NO', 'FI', 'DK', 'IE', 'CH',
  'BE', 'AT', 'PT', 'GR', 'CZ', 'HU', 'RO', 'SK', 'SI', 'HR', 'BG', 'LT',
  'LV', 'EE', 'LU', 'MT', 'CY', 'IS', 'LI'
];

const blockedIPs = [
  '157.230.195.44'
];

export function middleware(req) {
  const country = req.geo?.country?.toUpperCase() || 'unknown';
  const ip = req.ip || req.headers.get('x-forwarded-for') || '';

  // Block by IP
  if (blockedIPs.includes(ip)) {
    return NextResponse.redirect('https://google.com');
  }

  // Block by country
  if (blockedCountries.includes(country)) {
    return NextResponse.redirect('https://google.com');
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*'
};
