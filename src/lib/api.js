export async function getTasks() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";
  const res = await fetch(`${baseUrl}/tasks`, {
    headers: { 
        Accept: "application/json",
     },
    cache: "no-store",
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Failed to fetch tasks (${res.status}). ${body}`);
  }

  const json = await res.json();

  // Handle either plain array or { data: [...] }
  const list = Array.isArray(json) ? json : json?.data ?? json?.tasks ?? [];
  if (!Array.isArray(list)) {
    throw new Error("Unexpected response shape from API");
  }
  return list;
}
