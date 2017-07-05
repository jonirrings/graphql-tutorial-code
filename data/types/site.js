import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

const SiteType = new GraphQLObjectType({
  name: 'Site',
  description: 'created and updated time',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'site name',
    },
  },
});

export default SiteType;
