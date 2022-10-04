import Head from "next/head";
export const getStaticPaths = async () => {
  const res: any = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: any = await res.json();

  const paths = data.map((user: any) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id: string = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const User = ({ data }: any) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>
      <div>
        <h1>{data.name}</h1>
        <p>{data.email}</p>
        <p>{data.address.street}</p>
      </div>
    </>
  );
};

export default User;
