import { ApolloServer } from "apollo-server";
import typeDefs from "./schema";
import OrganizationAPI from "./datasources/organization";
import LocationAPI from "./datasources/location";

const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    organizationAPI: new OrganizationAPI(),
    locationAPI: new LocationAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
