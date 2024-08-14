import { GraphQLClient } from 'graphql-request';
import dotenv from 'dotenv';
import { getSdk } from './generated/schema';

dotenv.config();

export const cmsClient = getSdk(new GraphQLClient(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/graphql`, {
}));
