import { useEffect, useState } from 'react'
import { useThemeHelper } from '../../hooks'
import { sxToStyle } from '../../theme'
import { ButtonWithIcon, ChimericIcon, Copy, Heading, Icon, InputWithIcon, Maybe, Toggle } from '../atomics'
import { Box, Card, Flex } from '../layout'
import { randomPick } from '../../utils'
import { sizedArray } from '../../../util'
import {
  fakeAvatarLineOne,
  fakeAvatarLineTwo,
  getRandomWebsite,
} from '../../../data'
import { MyAvatar } from './avatar'
import { Spacer } from '../layout/spacer'

export const TaggedText = ({ text }: { text: string }) => {
  const { hookSc } = useThemeHelper()
  return <Box $sx={hookSc('taggedText')}>{text}</Box>
}

export const TwoColList = ({
  names,
  children,
}: {
  names: string[]
  children?: React.ReactNode[]
}) => {
  const { hookSc } = useThemeHelper()
  console.log('nameos', names)
  return (
    <Flex col $sx={hookSc('twoColList')}>
      {names.map((name, index) => {
        return (
          <Flex key={index} $sx={hookSc('twoColListEntry')}>
            <Box $sx={hookSc('twoColListLeft')}>{name}</Box>
            <Box $sx={hookSc('twoColListRight')}>
              {children?.[index] ?? null}
            </Box>
          </Flex>
        )
      })}
    </Flex>
  )
}

export const DashboardCard = ({
  heading,
  copy,
  withList,
  closeIcon,
  withCloseIcon = true,
  listItemN,
}: {
  heading: string
  copy: string
  withList?: boolean
  closeIcon?: React.ReactNode
  withCloseIcon?: boolean
  listItemN?: number
}) => {
  const { hookSc } = useThemeHelper()
  const [listItems, setListItems] = useState<Record<string, string> | null>(
    null
  )

  useEffect(() => {
    if (!withList || listItems !== null) {
      return
    }
    const numItems = listItemN ?? randomPick(1, 4)
    setListItems(
      sizedArray(numItems).reduce((acc, _) => {
        return {
          ...acc,
          [getRandomWebsite()]: Math.random() > 0.5 ? 'Yes' : 'No',
        }
      }, {})
    )
  }, [withList, listItems, setListItems, listItemN])
  console.log('list???', withList, listItems)
  return (
    <Card>
       <Box $sx={hookSc('dashboardCard')}>
      <Maybe condition={withCloseIcon}>
        {closeIcon ?? (
          <ChimericIcon
            icon={Icon.xMark}
            iconStyle={{
              ...sxToStyle(hookSc('dashboardCardX')),
            }}
          />
        )}
      </Maybe>
      <Heading level={3} $sx={hookSc('dashboardCardHeading')}>
        {heading}
      </Heading>
      <Copy
        $sx={hookSc('dashboardCardCopy')}
        dangerouslySetInnerHTML={{ __html: copy }}
      />
      {
        withList && listItems !== null
          ? (
            <>
              <Spacer />
              <TwoColList names={Object.keys(listItems!)}>
                {Object.values(listItems!).map((item, index) => (
                  <TaggedText key={index} text={item} />
                ))}
              </TwoColList>
            </>
          )
          : null
      }
    </Box>

    </Card>
  )
   
}

const DashboardListRow = ({
  left,
  right,
}: {
  left?: React.ReactNode
  right?: React.ReactNode
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Flex $sx={hookSc('dashboardListRow')}>
      <Box $sx={hookSc('dashboardListRowLeft')}>{left ?? null}</Box>
      <Box $sx={hookSc('dashboardListRowRight')}>{right ?? null}</Box>
    </Flex>
  )
}

// one flavour of this.  Can customize it in various ways
export const DashboardListWithOptions = ({
  icon,
  rightIcon,
  genRandomAvatarLineOne,
  genRandomAvatarLineTwo,
  genRandomTag,
  randomN,
}: {
  icon: Icon
  rightIcon: Icon
  genRandomAvatarLineOne?: () => string
  genRandomAvatarLineTwo?: () => string
  genRandomTag?: () => string
  randomN?: number
}) => {
  const { hookSc } = useThemeHelper()
  const [avatars, setAvatars] = useState<Array<
    [string, string, string]
  > | null>(null)

  useEffect(() => {
    if (avatars !== null) {
      return
    }
    const numItems =
      typeof randomN === 'number' ? Math.max(randomN, 2) : randomPick(2, 8)
    setAvatars(
      sizedArray(numItems).map(() => {
        return [
          (genRandomAvatarLineOne ?? fakeAvatarLineOne)(),
          (genRandomAvatarLineTwo ?? fakeAvatarLineTwo)(),
          (genRandomTag ?? (() => (Math.random() > 0.5 ? 'Yes' : 'No')))(),
        ]
      })
    )
  }, [
    setAvatars,
    avatars,
    genRandomAvatarLineOne,
    genRandomAvatarLineTwo,
    genRandomTag,
  ])

  if (avatars === null) {
    return null
  }

  return (
    <Flex $sx={hookSc('dashboardList')}>
      {
        avatars.map(([
          lineOne,
          lineTwo,
          tag
        ]) => {
          return (
            <DashboardListRow
              left={
                <MyAvatar icon={icon}
                  name={lineOne}
                  position={lineTwo}
                  avatarSx={hookSc('dashboardListAvatar')}
                  headingSx={hookSc('dashboardListAvatarHeading')}
                  copySx={hookSc('dashboardListAvatarCopy')}
                />
              }
              right={
                <Flex $sx={hookSc('dashboardListRight')}>
                  <TaggedText text={tag} />
                  <ChimericIcon
                    icon={rightIcon}
                    iconStyle={{
                      ...sxToStyle(hookSc('dashboardListRightIcon'))
                    }}
                  />
                </Flex>
              }
            />
          )
        })
      }
    </Flex>
  )
}

export const DashboardSectionHeader = ({
  heading,
  toggleOptions,
}: {
  heading?: string
  toggleOptions?: string[]
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Flex $sx={hookSc('dashboardSectionHeader')}>
      <Maybe condition={heading}>
        <Heading level={2} $sx={hookSc('dashboardHeading')}>
          {heading}
        </Heading>
      </Maybe>
      <Maybe condition={toggleOptions}>
        {
          <Toggle options={toggleOptions!} />
        }
      </Maybe>
    </Flex>
  )
}

export const DashboardSearch = ({
  icon,
  placeholder,
}: {
  icon: Icon
  placeholder: string
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <InputWithIcon
      rev
      icon={icon}
      inputProps={{
        placeholder,
        $variant: ['fullwidth', 'pill', 'border'],
        $sx: hookSc('dashboardSearch')
      }}
    />
  )
}

export const DashboardSearchHeader = ({
  placeholder = 'Search',
  searchIcon = Icon.search,
  filterLabel = 'Filter',
  filterIcon = Icon.filter,
  toggleOptions,
}: {
  placeholder?: string
  searchIcon?: Icon
  filterLabel?: string
  filterIcon?: Icon
  toggleOptions?: string[]
}) => {
  const { hookSc } = useThemeHelper()
  const [iconPos, setIconPos] = useState<'start' | 'end' | null>(null)
  useEffect(() => {
    if (iconPos !== null) {
      return
    }
    setIconPos(
      Math.random() > 0.5
        ? 'end'
        : 'start'
    )
  }, [iconPos, setIconPos])
  if (!iconPos) {
    return null
  }
  return (
    <Flex $sx={hookSc('dashboardSearchHeader')}>
      <Flex aic $sx={hookSc('dashboardSearchLeft')}>
        <DashboardSearch placeholder={placeholder} icon={searchIcon} />
        <ButtonWithIcon
          text={filterLabel}
          icon={filterIcon}
          $sx={hookSc('dashboardSearchFilter')}
          iconPos={iconPos}
          iconStyle={{
            ...sxToStyle(hookSc('dashboardSearchFilterIcon'))
          }}
        />
      </Flex>
      <Maybe condition={toggleOptions}>
        {
          <Toggle options={toggleOptions!} />
        }
      </Maybe>
    </Flex>
  )
}
