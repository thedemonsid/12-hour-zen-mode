import { auth, signOut } from "@/auth";

const Settings = async () => {
  const session = await auth();
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <div>{JSON.stringify(session)}</div>
      <button type="submit">Sign out</button>
    </form>
  );
};

export default Settings;
