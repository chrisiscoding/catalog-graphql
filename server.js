require('graphql');
require('apollo-server');
import schema from './schema';

const resolvers = {
    Query: {
      catalog(parent, args, context, info) {
        return {catalog: "A catalog!"};
      },
    },
    Dataset: {
      datasets(catalog) {
        return {datasets: "datasets"};
      },
    },
  };

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });