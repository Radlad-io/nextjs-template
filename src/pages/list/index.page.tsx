import { FC } from "react";

// Type definitions provided by next
import { GetServerSideProps } from "next";

// Components
import Container from "@components/atoms/Container/Container";

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  // https://dummyjson.com/
  const res = await fetch(`https://dummyjson.com/posts`);
  const data = await res.json();
  // Pass data to the page via props
  return {
    props: { data },
  };
};

interface Properties {
  [key: string]: any;
  id?: number;
  title?: string;
  body?: string;
  userId?: number;
  tags?: number;
  reactions?: number;
}

const ListPage: FC<Properties> = (props) => {
  const { posts } = props.data;
  return (
    <Container>
      <h1>Post List</h1>
      <ul>
        {posts.map(({ title, id }: { title: string; id: number }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </Container>
  );
};

export default ListPage;
