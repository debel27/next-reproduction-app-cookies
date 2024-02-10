import { cookies } from "next/headers";
const authCookieName  = "auth";

export default function RootLayout() {
  const authCookieValue = cookies().get(authCookieName)?.value;
  return (
    <html>
      <head />
      <body>
        {authCookieValue ? (
          <form action={logout}>
            Hello, {authCookieValue}
            <button>logout</button>
          </form>
        ) : (
          <form action={login}>
            <button>login</button>
          </form>
        )}
      </body>
    </html>
  );
}

async function login() {
  "use server";
  const cookieStore = cookies();
  cookieStore.set({
    name: authCookieName,
    value: "John",
  });
}

async function logout() {
  "use server";
  const cookieStore = cookies();
  cookieStore.delete(authCookieName);
}
