import {
  SortingState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { FC, useState } from 'react'
import SortUp from '../../assets/sort_up.svg?react'
import SortDown from '../../assets/sort_down.svg?react'
import SortDefault from '../../assets/sort_default.svg?react'

import styles from './Table.module.css'

type Person = {
  name: string
  shifts: number
  revenue: number
  checks: number
  averageRevenue: number
  averageBill: number
  NumberOfChecksBonus: number
  userConversionBonusPlus: number
}

const defaultData: Person[] = [
  {
    name: 'tanner',
    shifts: 24,
    revenue: 12,
    checks: 180,
    averageRevenue: 1239,
    averageBill: 1233,
    NumberOfChecksBonus: 123,
    userConversionBonusPlus: 94,

  },
  {
    name: 'tandy',
    shifts: 40,
    revenue: 22,
    checks: 180,
    averageRevenue: 1239,
    averageBill: 1233,
    NumberOfChecksBonus: 123,
    userConversionBonusPlus: 94,

  },
  {
    name: 'joe',
    shifts: 45,
    revenue: 13,
    checks: 180,
    averageRevenue: 1239,
    averageBill: 1233,
    NumberOfChecksBonus: 123,
    userConversionBonusPlus: 94,

  },
]

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('name', {
    header: () => <span>Менеджер</span>,
  }),
  columnHelper.accessor('shifts', {
    header: () => 'Кол-во смен',
  }),
  columnHelper.accessor('revenue', {
    header: () => <span>Выручка</span>,
  }),
  columnHelper.accessor('checks', {
    header: () => 'Кол-во чеков',
  }),
  columnHelper.accessor('averageRevenue', {
    header: () => 'Средняя выручка за день',
  }),
  columnHelper.accessor('averageBill', {
    header: 'Средний чек',
  }),
  columnHelper.accessor('NumberOfChecksBonus', {
    header: 'Кол-во чеков по бонус+',
  }),
  columnHelper.accessor('userConversionBonusPlus', {
    header: 'Конверсия пользователей бонус+',
  }),
]

export const Table: FC = () => {
  const [data] = useState(() => [...defaultData])

  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  })

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th className={styles.tableTitle} key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        className={header.column.getCanSort() ? styles.sorable : ''}
                        onClick={header.column.getToggleSortingHandler()}
                        title={
                          header.column.getCanSort()
                            ? header.column.getNextSortingOrder() === 'asc'
                              ? 'Sort ascending'
                              : header.column.getNextSortingOrder() === 'desc'
                                ? 'Sort descending'
                                : 'Clear sort'
                            : undefined
                        }
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: <SortUp />,
                          desc: <SortDown />,
                        }[header.column.getIsSorted() as string] ?? <SortDefault />}
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows
            .map(row => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => {
                    return (
                      <td className={styles.tableItem} key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}