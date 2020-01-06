import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    organizations: [Organization]!
    organization(id: ID!): Organization
    locations: [Location]!
    location(id: ID!): Location
  }

  type Organization {
    id: ID!
    linkInstance: LinkInstance
    name: String!
    alternateName: String
    description: String!
    email: String
    url: String
    taxStatus: String
    taxId: String
    yearIncorporated: Int # Is there an equivalent for Rails' t.date or do we need a custom scalar?
    legalStatus: String
  }

  type Location {
    id: ID!
    organization: Organization
    linkInstance: LinkInstance
    name: String
    alternateName: String
    description: String
    transportation: String
    latitude: Float
    longitude: Float
  }

  type LinkInstance {
    id: ID!
    owner: Admin
    name: String!
    subdomain: String!
    email: String!
    url: String
  }

  type Admin {
    id: ID!
    provider: String!
    uid: String!
    encryptedPassword: String!
    resetPasswordToken: String
    resetPasswordSentAt: Int # Date custom scalar?
    allowPasswordChange: Boolean
    rememberCreatedAt: Int # Date?
    signInCount: Int
    currentSignInAt: Int # Date?
    lastSignInAt: Int # Date?
    currentSignInIp: String
    lastSignInIp: String
    confirmationToken: String
    confirmedAt: Int # Date?
    confirmationSentAt: Int # Date?
    unconfirmedEmail: String
    linkInstance: LinkInstance!
    name: String!
    nickname: String
    image: String
    email: String!
    tokens: String # JSON?
  }
`;

export default typeDefs;
