import { styled, useTheme } from 'styled-components'
import {
  backgrounds,
  colors,
  CssProps,
  getResponsiveStyles,
  ResponsiveComponent,
  ResponsiveMixin,
  shadows,
  WithTheme,
} from '../../../theme'
import { Box, Flex } from '../../layout'
import React from 'react'
import {
  Table as MuiTable,
  TableContainer as MuiTableContainer,
  TableBody as MuiTableBody,
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
  TableCell as MuiTableCell,
  Paper,
  Pagination as MuiPagination,
} from '@mui/material'
import {
  getComponentStyles,
  mergeStyles,
  parseVariant,
  parseVariants,
  sxToStyle,
} from '../../../utils'

// styled component shit

export type TableProps = WithTheme<ResponsiveComponent<'table'>>

export const Table = styled('table')<TableProps>`
  ${({ theme, $variant, $sx }: TableProps) => {
    const diff = mergeStyles({
      theme,
      component: 'table',
      $variant,
    })

    const responsive = getResponsiveStyles({
      ...diff,
      ...($sx ?? {}),
    })
    return responsive
  }}
`

export type TableCellProps = WithTheme<ResponsiveComponent<'td'>>

export const TableCell = styled('td')<TableCellProps>`
  ${({ theme, $variant, $sx }: TableCellProps) => {
    const diff = mergeStyles({
      theme,
      component: 'td',
      $variant,
    })
    const responsive = getResponsiveStyles({
      ...diff,
      ...($sx ?? {}),
    })
    return responsive
  }}
`

export type TableHeaderProps = WithTheme<ResponsiveComponent<'th'>>

export const TableHeader = styled('th')<TableCellProps>`
  ${({ theme, $variant, $sx }: TableCellProps) => {
    const diff = mergeStyles({
      theme,
      component: 'th',
      $variant,
    })
    const responsive = getResponsiveStyles({
      ...diff,
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

const Page = ({
  children,
  selected,
  containerSx,
}: {
  children?: React.ReactNode
  selected?: boolean
  containerSx?: CssProps
}) => {
  return (
    <Box
      $sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6px',
        color: selected ? colors.amazonBlue : 'inherit',
        border: selected ? `1px solid #333` : 'none',
        boxShadow: selected ? shadows.lichessCard : 'none',
        width: '30px',
        height: '30px',
        background: backgrounds.grey,
        cursor: 'pointer',
        ...containerSx,
      }}
    >
      {children}
    </Box>
  )
}

type PaginationProps = {
  selectedIndex: number
  pages: number[]
  withEllipsis?: boolean
  containerSx?: CssProps
  prefix?: boolean
  postfix?: boolean
  highlightedIndex?: number
}

export const Pagination = ({
  selectedIndex,
  pages,
  withEllipsis,
  containerSx,
  prefix,
  postfix,
  highlightedIndex,
}: PaginationProps) => {
  const highlighted = {
    background: colors.amazonDark,
    color: colors.gsapWhite,
  }

  return (
    <Flex row gap="4px" aic $sx={{ ...containerSx }}>
      {prefix ? (
        <>
          <Page
            containerSx={{
              ...(highlightedIndex === 0 ? highlighted : {}),
              ...containerSx,
            }}
          >
            <i className="fa-solid fa-angles-left" />
          </Page>
          <Page
            containerSx={{
              ...(highlightedIndex === 1 ? highlighted : {}),
              ...containerSx,
            }}
          >
            <i className="fa-solid fa-chevron-left" />
          </Page>
        </>
      ) : null}
      {pages.map((p, i) => {
        return (
          <React.Fragment key={p}>
            {withEllipsis && i === 5 ? (
              <Page containerSx={{ ...containerSx }}>{'...'}</Page>
            ) : null}
            <Page
              containerSx={{ ...containerSx }}
              selected={selectedIndex === i}
            >
              {p}
            </Page>
          </React.Fragment>
        )
      })}
      {postfix ? (
        <>
          <Page
            containerSx={{
              ...(highlightedIndex === 2 ? highlighted : {}),
              ...containerSx,
            }}
          >
            <i className="fa-solid fa-chevron-right" />
          </Page>
          <Page
            containerSx={{
              ...(highlightedIndex === 3 ? highlighted : {}),
              ...containerSx,
            }}
          >
            <i className="fa-solid fa-angles-right" />
          </Page>
        </>
      ) : null}
    </Flex>
  )
}

export const ChimericPagination = (
  props: PaginationProps & {
    mui?: boolean
  }
) => {
  const { mui, ...rest } = props
  if (mui) {
    return (
      <MuiPagination
        count={props.pages.length}
        defaultPage={rest.selectedIndex}
        variant="outlined"
      />
    )
  }
  return <Pagination {...rest} />
}

type BasicTableProps<T extends RowType = object> = {
  data: T[]
  columns: Columns<T>
  headers?: string[]
  tableProps?: Omit<TableProps, 'theme'>
  alternateColor?: ResponsiveMixin
  sort?: {
    header: string
    direction: 'asc' | 'desc'
  }
  noColumnBorder?: boolean
}

export const BasicTable = <T extends RowType = object>({
  data,
  columns,
  headers,
  tableProps,
  alternateColor,
  sort,
  noColumnBorder
}: BasicTableProps<T>) => {
  const theme = useTheme()
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
            return (
              <TableHeader
                key={`header_${i}`}
                $sx={{
                  borderRight:
                    !noColumnBorder && i !== sortedColumns.length - 1
                      ? `1px solid ${theme.palette.copy}`
                      : 'none',
                }}
              >
                <Box
                  $sx={{
                    ...getComponentStyles('thInner', theme),
                  }}
                >
                  {header ?? null}
                  <Box
                    $sx={{
                      ...getComponentStyles('thSort', theme),
                    }}
                  >
                    <i
                      className="fa-solid fa-caret-up"
                      style={{
                        ...sxToStyle({
                          ...getComponentStyles('thSortAsc', theme),
                          color:
                            (sort?.header === header && sort?.direction === 'asc')
                              ? theme.palette.copy
                              : theme.palette.inactive
                        })
                      }}
                    />
                    <i
                      className="fa-solid fa-caret-down"
                      style={{
                        ...sxToStyle({
                          ...getComponentStyles('thSortDesc', theme),
                          color:
                            (sort?.header === header && sort?.direction === 'desc')
                              ? theme.palette.copy
                              : theme.palette.inactive
                        })
                      }}
                    />
                  </Box>
                </Box>
              </TableHeader>
            )
          })}
        </thead>
      ) : null}
      <tbody>
        {data.map((row, i) => {
          return (
            <tr>
              {sortedColumns.map(({ key, render }, j) => {
                return (
                  <TableCell
                    $sx={{
                      borderRight:
                        !noColumnBorder && j !== sortedColumns.length - 1
                          ? `1px solid ${theme.palette.copy}`
                          : 'none',
                      backgroundColor:
                        alternateColor && !(i % 2) ? alternateColor : 'initial',
                    }}
                    key={`${i}_${j}`}
                  >
                    {render(row[key], row)}
                  </TableCell>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export const ChimericTable = <T extends RowType = object>(
  props: BasicTableProps<T> & {
    mui?: boolean
  }
) => {
  const theme = useTheme()
  const sortedColumns = Object.entries(props.columns)
    .map(([k, v]) => {
      const value = v as Columns<T>[typeof k]
      return {
        key: k,
        render: value.config.render,
        order: value.order,
      }
    })
    .sort((a, b) => a.order - b.order)

  if (props.mui) {
    return (
      <MuiTableContainer component={Paper}>
        <MuiTable
          {...props.tableProps}
          style={{
            ...sxToStyle({
              ...getComponentStyles('table', theme),
              ...props.tableProps?.$sx ?? {}
            }),
            ...props.tableProps?.style,
          }}
        >
          <MuiTableHead>
            <MuiTableRow>
              {sortedColumns.map((_, i) => {
                const header = props.headers?.[i]
                return (
                  <MuiTableCell
                    style={{
                      ...sxToStyle({
                        ...getComponentStyles('th', theme),
                      })
                    }}
                  >
                    {header ?? null}
                  </MuiTableCell>
                )
              })}
            </MuiTableRow>
          </MuiTableHead>
          <MuiTableBody>
            {props.data.map((row, i) => {
              return (
                <MuiTableRow>
                  {sortedColumns.map(({ key, render }, j) => {
                    return (
                      <MuiTableCell
                        style={{
                          ...sxToStyle({
                            ...getComponentStyles('td', theme),
                          }),
                          borderRight:
                            !props.noColumnBorder && j !== sortedColumns.length - 1
                              ? `1px solid ${theme.palette.copy}`
                              : 'none',
                          backgroundColor:
                            typeof props.alternateColor === 'string' && !(i % 2)
                              ? props.alternateColor
                              : 'initial',
                        }}
                        key={`${i}_${j}`}
                      >
                        {render(row[key], row)}
                      </MuiTableCell>
                    )
                  })}
                </MuiTableRow>
              )
            })}
          </MuiTableBody>
        </MuiTable>
      </MuiTableContainer>
    )
  }
  return <BasicTable<T> {...props} />
}
