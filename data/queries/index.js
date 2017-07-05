import {
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';

import { SiteType } from '../types';
import { site } from '../models';

const queryType = new GraphQLObjectType({
  name: 'Query',
  description: 'root query',
  fields: {
    site: {
      type: new GraphQLNonNull(SiteType),
      description: 'the viewer\'s information',
      resolve: () => site,
    },
  },
});

export default queryType;
