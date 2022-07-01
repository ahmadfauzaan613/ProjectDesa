import React, { useState } from 'react'
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, usePagination } from 'react-table'

function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <input
      value={value || ''}
      onChange={(e) => {
        setValue(e.target.value)
        onChange(e.target.value)
      }}
      className="border border-[#2C3639] w-full px-2 py-2 rounded-lg"
      placeholder="Pencarian"
    />
  )
}

function DefaultColumnFilter({ column: { filterValue, preFilteredRows, setFilter } }) {
  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ''}
      onChange={(e) => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}

function Table({ columns, data }) {
  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  )

  const [isUploadFile, setUploadFile] = useState(false)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 0, pageSize: 12 },
    },
    useFilters, // useFilters!
    useGlobalFilter, // useGlobalFilter!
    usePagination
  )

  return (
    <>
      <div className="flex items-center mb-[2%] space-x-10">
        {/* <div className="w-full pt-4 px-2 rounded-lg ml-auto ">
          <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter} />
        </div> */}
        {/* <button onClick={() => setUploadFile(!isUploadFile)} className="bg-[#FF9F29] font-[700] text-[16px] text-white p-2 rounded-md">
          Upload Laporan
        </button> */}
      </div>
      {isUploadFile && (
        <div className="space-y-3 mb-3 border py-2 w-[20%] rounded-lg mx-auto">
          <p className="text-center text-[28px] font-[700] ">Upload Laporan</p>
          <form action="" className="flex justify-center ">
            <input type="file" name="" id="" className="border w-full mx-2 my-3" />
          </form>
        </div>
      )}
      <div className="border rounded-lg">
        <table {...getTableProps()} className="w-full">
          <thead className="text-left">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} className="p-2 border-b border-red-500">
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td className="p-3" {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="pagination flex justify-end mt-[2%] ">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>
        <span className="px-4">
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>
      </div>
    </>
  )
}

export default Table
