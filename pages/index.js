import Head from "next/head";
import { getAllUsers } from "../prisma/user";

export const getServerSideProps = async ({ req }) => {
    const users = await getAllUsers();
    const updatedUsers = users.map((user) => ({
        ...user,
        updatedAt: user.updatedAt.toString(),
        createdAt: user.createdAt.toString(),
    }));

    return { props: { users: updatedUsers } };
};

export default function Home({ users }) {
    return (
        <>
            <Head>
                <title>מילון עריב</title>
            </Head>
            <h1>מילון עריב</h1>
            <h1 lang="ar">قاموس عريب</h1>
            <div>
                {users.map((user) => (
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <p>תאריך הצטרפות לעריב: {new Date(user.createdAt).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
