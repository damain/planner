import  {gql} from "apollo-server-express"

const typeDefs = gql`
    type Query{
        schedule(id:String, date: String): Schedule
    }
    type Schedule{
        id: String
        date: String
        scheduleItems: [scheduleItem]
        todoItems: [todoItem]
        gratitudeListItems: [GratitudeListItem]
        notes: String
    }
    type GratitudeListItem{
            id: String
            text: String
    }
    type todoItem{
        id: String
        text: String
        isComplete: Boolean
    }
    type scheduleItem{
        text:String
    }
`;

export default typeDefs