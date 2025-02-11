import { FC, ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

type Props = {
  children: ReactNode
  category: Questions.QuestionCategory
}

const QuestionContainer: FC<Props> = ({ children, category }) => {
  return (
    <Box backgroundColor={`${category}.200`} height="100vh">
      {children}
    </Box>
  )
}

export default QuestionContainer
