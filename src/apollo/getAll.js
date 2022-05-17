import { gql } from '@apollo/client'

const GET_ALL = gql`
    {
        countries{
            code
            name
            native
            phone
            continent{
              name
            }
            capital
            currency
            languages{
              name
            }
            emoji
            emojiU
            states{
              name
            }
          }
    }
`

export default GET_ALL