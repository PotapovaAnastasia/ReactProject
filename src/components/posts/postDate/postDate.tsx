import { PostDateStyled } from './postDate.styled'

export const PostDate = (props: any) => {
  const date = new Date(props.date)
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()]

  const monthes: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  
  return <PostDateStyled>{`${monthes[month]} ${day}, ${year}`}</PostDateStyled>
}
