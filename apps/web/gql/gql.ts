/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "#graphql\n mutation CreateCredentialsToken($email: String!, $password: String!, $name: String!) {\n  createCredentialsToken(email: $email, password: $password, name: $name)\n}\n": typeof types.CreateCredentialsTokenDocument,
    "#graphql\n mutation CreateRoom($slug: String!, $password: String!) {\n  createRoom(slug: $slug, password: $password) {\n    slug\n    updatedAt\n    password\n    id\n    adminId\n    createdAt\n  }\n}\n": typeof types.CreateRoomDocument,
    "#graphql\n mutation VerifyGoogleToken($token: String!) {\n  verifyGoogleToken(token: $token)\n}\n": typeof types.VerifyGoogleTokenDocument,
    "#graphql\n query GetAllChats($room: String!) {\n  getAllChats(room: $room) {\n    message\n    user {\n      name\n      profilePhotoURL\n    }\n    createdAt\n  }\n}\n": typeof types.GetAllChatsDocument,
    "#graphql\nquery Query($email: String!, $password: String!) {\n  verifyCredentialsToken(email: $email, password: $password)\n}\n": typeof types.QueryDocument,
    "#graphql\n query GetCurrentUser {\n  getCurrentUser {\n    name\n    profilePhotoURL\n    email\n    id\n  }\n}\n": typeof types.GetCurrentUserDocument,
};
const documents: Documents = {
    "#graphql\n mutation CreateCredentialsToken($email: String!, $password: String!, $name: String!) {\n  createCredentialsToken(email: $email, password: $password, name: $name)\n}\n": types.CreateCredentialsTokenDocument,
    "#graphql\n mutation CreateRoom($slug: String!, $password: String!) {\n  createRoom(slug: $slug, password: $password) {\n    slug\n    updatedAt\n    password\n    id\n    adminId\n    createdAt\n  }\n}\n": types.CreateRoomDocument,
    "#graphql\n mutation VerifyGoogleToken($token: String!) {\n  verifyGoogleToken(token: $token)\n}\n": types.VerifyGoogleTokenDocument,
    "#graphql\n query GetAllChats($room: String!) {\n  getAllChats(room: $room) {\n    message\n    user {\n      name\n      profilePhotoURL\n    }\n    createdAt\n  }\n}\n": types.GetAllChatsDocument,
    "#graphql\nquery Query($email: String!, $password: String!) {\n  verifyCredentialsToken(email: $email, password: $password)\n}\n": types.QueryDocument,
    "#graphql\n query GetCurrentUser {\n  getCurrentUser {\n    name\n    profilePhotoURL\n    email\n    id\n  }\n}\n": types.GetCurrentUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n mutation CreateCredentialsToken($email: String!, $password: String!, $name: String!) {\n  createCredentialsToken(email: $email, password: $password, name: $name)\n}\n"): (typeof documents)["#graphql\n mutation CreateCredentialsToken($email: String!, $password: String!, $name: String!) {\n  createCredentialsToken(email: $email, password: $password, name: $name)\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n mutation CreateRoom($slug: String!, $password: String!) {\n  createRoom(slug: $slug, password: $password) {\n    slug\n    updatedAt\n    password\n    id\n    adminId\n    createdAt\n  }\n}\n"): (typeof documents)["#graphql\n mutation CreateRoom($slug: String!, $password: String!) {\n  createRoom(slug: $slug, password: $password) {\n    slug\n    updatedAt\n    password\n    id\n    adminId\n    createdAt\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n mutation VerifyGoogleToken($token: String!) {\n  verifyGoogleToken(token: $token)\n}\n"): (typeof documents)["#graphql\n mutation VerifyGoogleToken($token: String!) {\n  verifyGoogleToken(token: $token)\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n query GetAllChats($room: String!) {\n  getAllChats(room: $room) {\n    message\n    user {\n      name\n      profilePhotoURL\n    }\n    createdAt\n  }\n}\n"): (typeof documents)["#graphql\n query GetAllChats($room: String!) {\n  getAllChats(room: $room) {\n    message\n    user {\n      name\n      profilePhotoURL\n    }\n    createdAt\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\nquery Query($email: String!, $password: String!) {\n  verifyCredentialsToken(email: $email, password: $password)\n}\n"): (typeof documents)["#graphql\nquery Query($email: String!, $password: String!) {\n  verifyCredentialsToken(email: $email, password: $password)\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n query GetCurrentUser {\n  getCurrentUser {\n    name\n    profilePhotoURL\n    email\n    id\n  }\n}\n"): (typeof documents)["#graphql\n query GetCurrentUser {\n  getCurrentUser {\n    name\n    profilePhotoURL\n    email\n    id\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;