import  {gql} from "apollo-server-express"

const typeDefs = gql`
    type Query{
        note: Note
    }
    type Note {
        text: String
    }
`;

export default typeDefs