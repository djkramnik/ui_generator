import { useTheme } from 'styled-components'
import { getSuperComponentStyles, Theme } from '../../theme'
import { BasicTable, BasicTableProps, ChimericPagination, PaginationProps, RowType } from '../atomics/table'
import { Flex } from '../layout'
import { Button, ChimericCheckbox, ChimericDropdown, ChimericInput, Heading, LabelizeIt } from '../atomics'
import React from 'react'

type Filter = {
  type: 'input' | 'dropdown' | 'checkbox' | 'radio'
  placeholder?: string
  value?: string
  mui?: boolean
  label?: string
}

const TableFilter = ({
  type,
  placeholder,
  value,
  label,
  mui,
}: Filter) => {
  switch(type) {
    case 'input':
      return (
        <ChimericInput mui={mui === true} 
          value={value}
          placeholder={placeholder}
        />
      )
    case 'dropdown':
      return (
        <ChimericDropdown
          mui={mui === true}
          options={[]}
        />
      )
    case 'checkbox':
    case 'radio':
      return (
        <ChimericCheckbox label={label ?? ''}
          checked={value !== ''}
          radio={type === 'radio'}
        />
      )
  }
}

const TableFilters = ({
  theme,
  filters,
  buttonsInline = false,
}: {
  theme: Theme
  filters: Filter[]
  buttonsInline?: boolean
}) => {
  return (
    <Flex col $sx={{
      ...getSuperComponentStyles('dashboardTableFiltersContainer', theme)
    }}>
      <Flex $sx={{
        ...getSuperComponentStyles('dashboardTableFilters', theme)
      }}>
        <>
        {
          filters.map((filter, index) => {
            return (
              <React.Fragment key={index}>
                {
                  filter.label && filter.type !== 'checkbox' && filter.type !== 'radio'
                    ? (
                      <LabelizeIt label={filter.label}>
                        <TableFilter {...filter} />
                      </LabelizeIt>
                    )
                    : <TableFilter {...filter} />
                }
              </React.Fragment>
            )
          })
        }
        {
          buttonsInline
            ? (
              <>
                <Button>Submit</Button>
                <Button $variant="bgc:secondary">Clear</Button>
              </>
            )
            : null
        }
        </>
      </Flex>
      {
        !buttonsInline
          ? (
            <Flex $sx={{
              ...getSuperComponentStyles('dashboardTableFilters', theme)
            }} >
              <Button>Submit</Button>
              <Button $variant="bgc:secondary">Clear</Button>
            </Flex>
          )
          : (
            null
          )
      }
    </Flex>
  )
}


export const DashboardTable = <T extends RowType = object>({
  filters,
  paginationProps,
  tableProps,
  mui,
  heading,
  buttonsInline,
}: {
  filters?: Filter[]
  paginationProps?: Partial<PaginationProps>
  tableProps: BasicTableProps<T>
  heading?: string
  mui?: boolean
  buttonsInline?: boolean
}) => {
  const theme = useTheme()
  return (
    <Flex col $sx={{
      ...getSuperComponentStyles('dashboardTable', theme)
    }}>
      {heading ? (
        <Heading level={3}>
          {heading}
        </Heading>
      ): null}
      {
        filters
          ? <TableFilters
              filters={filters}
              theme={theme}
              buttonsInline={buttonsInline}
            />
          : null
      }
      {paginationProps ? (
        <ChimericPagination
          mui={mui === true}
          pages={[1, 2, 3, 4, 5, 6, 7, 8]}
          selectedIndex={0}
          {...{
            ...paginationProps,
            $sx: {
              ...getSuperComponentStyles('dashboardTablePagination', theme),
              ...paginationProps?.containerSx ?? {},
            }
          }}
        />
      ) : null}
      <BasicTable<T> {...tableProps} />
    </Flex>
  )
}
