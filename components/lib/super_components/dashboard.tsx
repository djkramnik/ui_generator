import { useEffect, useState } from 'react'
import { useThemeHelper } from '../../hooks'
import { sxToStyle } from '../../theme'
import { ChimericIcon, Copy, Heading, Icon, Maybe } from '../atomics'
import { Box, Flex } from '../layout'
import { randomPick } from '../../utils'
import { sizedArray } from '../../../util'
import {
  fakeAvatarLineOne,
  fakeAvatarLineTwo,
  getRandomWebsite,
} from '../../../data'
import { MyAvatar } from './avatar'

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

  return (
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
      <Maybe condition={withList && listItems !== null}>
        <TwoColList names={Object.keys(listItems!)}>
          {Object.values(listItems!).map((item, index) => (
            <TaggedText key={index} text={item} />
          ))}
        </TwoColList>
      </Maybe>
    </Box>
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
                null
              }
            />
          )
        })
      }
    </Flex>
  )
}
