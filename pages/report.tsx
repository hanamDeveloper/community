import { getPosts } from "@/api/post/api";
import Table from "@/components/Table/Table";
import { Post } from "@/types/posts.dto";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { Column } from "react-table";

const Report = () => {
  const { data, isLoading, error } = useQuery<Post[]>("posts", getPosts);

  const columns: Column<Post>[] = useMemo(
    () => [
      {
        Header: "아이디",
        accessor: "id",
      },
      {
        Header: "제목",
        accessor: "title",
      },
    ],
    []
  );

  return (
    <>
      <div>여긴 불편사항 신고 게시판</div>
      {data && <Table columns={columns} data={data}></Table>}
    </>
  );
};

export default Report;
