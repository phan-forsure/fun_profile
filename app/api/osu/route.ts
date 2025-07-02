export async function GET() {
  const client_id = process.env.OSU_CLIENT_ID;
  const client_secret = process.env.OSU_CLIENT_SECRET;

  const tokenRes = await fetch("https://osu.ppy.sh/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id,
      client_secret,
      grant_type: "client_credentials",
      scope: "public",
    }),
  });

  const { access_token } = await tokenRes.json();

  const userId = "34406127";
  const userRes = await fetch(`https://osu.ppy.sh/api/v2/users/${userId}/osu`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const userData = await userRes.json();

  return Response.json(userData);
}
