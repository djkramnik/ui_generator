import { styled } from 'styled-components'
import {
  getResponsiveStyles,
  ResponsiveComponent,
  WithTheme,
} from '../../../theme'
import { Box } from '../../layout'

// styled component shit

export type TableProps = WithTheme<ResponsiveComponent<'table'>>

export const Table = styled('table')<TableProps>`
  ${({ theme, $variant, $sx }: TableProps) => {
    const responsive = getResponsiveStyles({
      borderSpacing: '0',
      border: '1px solid #333',
      borderBottom: 'none',
      ...($sx ?? {}),
    })
    return responsive
  }}
`

export type TableCellProps = WithTheme<ResponsiveComponent<'td'>>

export const TableCell = styled('td')<TableCellProps>`
  ${({ theme, $variant, $sx }: TableCellProps) => {
    const responsive = getResponsiveStyles({
      borderBottom: '1px solid #333',
      ...($sx ?? {}),
    })
    return responsive
  }}
`

export type TableHeaderProps = WithTheme<ResponsiveComponent<'th'>>

export const TableHeader = styled('th')<TableCellProps>`
  ${({ theme, $variant, $sx }: TableCellProps) => {
    const responsive = getResponsiveStyles({
      borderBottom: '1px solid #333',
      ...($sx ?? {}),
    })
    return responsive
  }}
`

type RowType = Record<string, any>

interface Row<T = RowType, K extends keyof T = keyof T> {
  render: (value: T[K], row: T) => string
}

type Columns<T extends RowType> = {
  [K in keyof T]: {
    order: number
    config: Row<T, T[K]>
  }
}

export const getGenericColumns = <T extends RowType>(keys: Array<keyof T>) => {
  return keys.reduce((acc, k, i) => {
    return {
      ...acc,
      [k]: {
        order: i,
        config: {
          render: (item: any) => (
            <Box
              $sx={{
                padding: '4px',
                textAlign: 'center',
              }}
            >
              {String(item)}
            </Box>
          ),
        },
      },
    }
  }, {})
}

export const BasicTable = <T extends RowType = object>({
  data,
  columns,
  headers,
  tableProps,
}: {
  data: T[]
  columns: Columns<T>
  headers?: string[]
  tableProps?: Omit<TableProps, 'theme'>
}) => {
  const sortedColumns = Object.entries(columns)
    .map(([k, v]) => {
      const value = v as Columns<T>[typeof k]
      return {
        key: k,
        render: value.config.render,
        order: value.order,
      }
    })
    .sort((a, b) => a.order - b.order)
  return (
    <Table {...tableProps}>
      {headers ? (
        <thead>
          {sortedColumns.map((_, i) => {
            const header = headers[i]
            return <TableHeader key={`header_${i}`}>{header ?? null}</TableHeader>
          })}
        </thead>
      ) : null}
      <tbody>
        {data.map((row, i) => {
          return (
            <tr>
              {sortedColumns.map(({ key, render }, j) => {
                return <TableCell key={`${i}_${j}`}>{render(row[key], row)}</TableCell>
              })}
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
