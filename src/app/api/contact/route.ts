import { NextResponse } from 'next/server';

type ContactSubmission = {
  name?: string;
  company?: string;
  email?: string;
  projectType?: string;
  timeline?: string;
  description?: string;
};

const tableName = process.env.SUPABASE_CONTACT_TABLE || 'contact_submissions';

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactSubmission;
  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const description = payload.description?.trim();
  const projectType = payload.projectType?.trim();

  if (!name || !email || !description || !projectType) {
    return NextResponse.json({ error: 'Missing required contact form fields.' }, { status: 400 });
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: 'Supabase contact logging is not configured.' }, { status: 500 });
  }

  const response = await fetch(`${supabaseUrl.replace(/\/$/, '')}/rest/v1/${tableName}`, {
    method: 'POST',
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      name,
      company: payload.company?.trim() || null,
      email,
      project_type: projectType,
      timeline: payload.timeline?.trim() || null,
      description,
      source: 'website_contact_page',
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return NextResponse.json({ error: 'Could not save contact submission.', details: errorText }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
