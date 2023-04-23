import { Post } from "@/types/posts.dto";
import Link from "next/link";
import { Column, useTable } from "react-table";
import styled from "styled-components";

type TableProps = {
  columns: Array<Column<Post>>;
  data: Post[];
};

const Table = ({ columns, data }: TableProps) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Post>({ columns, data });

  return (
    <TableContainer {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column, index) => (
              <th {...column.getHeaderProps()} key={`${column.id}+${index}`}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={index}>
              {row.cells.map((cell, index) =>
                cell.column.id === "title" ? (
                  <>
                    <td {...cell.getCellProps()}>
                      <Link href={`/posts/${row.original.id}`}>
                        {cell.value}
                      </Link>
                    </td>
                  </>
                ) : (
                  <td {...cell.getCellProps()} key={index}>
                    {cell.render("Cell")}
                  </td>
                )
              )}
            </tr>
          );
        })}
      </tbody>
    </TableContainer>
  );
};

export default Table;

const TableContainer = styled.table`
  width: 100%;
  td {
    justify-content: center;
    text-align: center;
    padding: 20px;
    border-bottom: 0.1px solid #eeeeee;
    overflow: hidden;
  }
`;
