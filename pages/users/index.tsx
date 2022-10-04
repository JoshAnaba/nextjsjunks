import styles from "../../styles/Users.module.scss";
// import axios from "axios";
import Link from "next/link";
export const getStaticProps = async () => {
  const data: any = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: any = await data.json();
  return {
    props: {
      users,
    },
  };
};

const Users = ({ users }: any) => {
  return (
    <div className={styles.users}>
      <h2>Users</h2>
      {users.map((e: any) => (
        <div className={styles['user-ctn']} key={e.id}>
          <Link href={`/users/${e.id}`}>
          {e.name}
        </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
