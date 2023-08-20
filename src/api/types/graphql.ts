export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Time: { input: any; output: any; }
};

export enum AggregationFunctionType_ {
  AnyValue_ = 'ANY_VALUE',
  Avg_ = 'AVG',
  Count_ = 'COUNT',
  GroupConcat_ = 'GROUP_CONCAT',
  Max_ = 'MAX',
  Min_ = 'MIN',
  StddevPop_ = 'STDDEV_POP',
  StddevSamp_ = 'STDDEV_SAMP',
  Sum_ = 'SUM',
  VarPop_ = 'VAR_POP',
  VarSamp_ = 'VAR_SAMP'
}

export type ApiToken_ = {
  __typename?: 'ApiToken';
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User_>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<RoleListResponse_>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ApiTokenRolesArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort_>>;
};

/** ApiTokens create input */
export type ApiTokenCreateInput_ = {
  name: Scalars['String']['input'];
  roles?: InputMaybe<ApiTokensRolesRelationInput_>;
};

/** ApiTokens delete input */
export type ApiTokenDeleteInput_ = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ApiTokenFilter_ = {
  AND?: InputMaybe<Array<ApiTokenFilter_>>;
  OR?: InputMaybe<Array<ApiTokenFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<UserFilter_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  id?: InputMaybe<IdPredicate_>;
  name?: InputMaybe<StringPredicate_>;
  roles?: InputMaybe<RoleRelationFilter_>;
  token?: InputMaybe<StringPredicate_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
};

export type ApiTokenGroupBy_ = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: ApiTokenGroupByQuery_;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort_>>;
};

export type ApiTokenGroupByQuery_ = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField_>>;
  createdAt?: InputMaybe<Array<GroupByField_>>;
  createdBy?: InputMaybe<UserGroupByQuery_>;
  id?: InputMaybe<Array<GroupByField_>>;
  name?: InputMaybe<Array<GroupByField_>>;
  roles?: InputMaybe<RoleGroupByQuery_>;
  updatedAt?: InputMaybe<Array<GroupByField_>>;
};

export type ApiTokenKeyFilter_ = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** ApiTokenListResponse output */
export type ApiTokenListResponse_ = {
  __typename?: 'ApiTokenListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse_>;
  /** List items */
  items: Array<ApiToken_>;
};

/** ApiTokenManyResponse output */
export type ApiTokenManyResponse_ = {
  __typename?: 'ApiTokenManyResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<ApiToken_>;
};

/** No longer supported. Use `sort` instead. */
export enum ApiTokenOrderBy_ {
  CreatedAtAsc_ = 'createdAt_ASC',
  CreatedAtDesc_ = 'createdAt_DESC',
  DeletedAtAsc_ = 'deletedAt_ASC',
  DeletedAtDesc_ = 'deletedAt_DESC',
  IdAsc_ = 'id_ASC',
  IdDesc_ = 'id_DESC',
  NameAsc_ = 'name_ASC',
  NameDesc_ = 'name_DESC',
  TokenAsc_ = 'token_ASC',
  TokenDesc_ = 'token_DESC',
  UpdatedAtAsc_ = 'updatedAt_ASC',
  UpdatedAtDesc_ = 'updatedAt_DESC'
}

/** ApiTokens subscription payload */
export type ApiTokenPayload_ = {
  __typename?: 'ApiTokenPayload';
  mutation: MutationType_;
  node?: Maybe<ApiToken_>;
  previousValues?: Maybe<ApiToken_>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ApiTokenRelationFilter_ = {
  every?: InputMaybe<ApiTokenFilter_>;
  none?: InputMaybe<ApiTokenFilter_>;
  some?: InputMaybe<ApiTokenFilter_>;
};

/** API Token Response */
export type ApiTokenResponse_ = {
  __typename?: 'ApiTokenResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User_>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<RoleListResponse_>;
  token: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** API Token Response */
export type ApiTokenResponseRolesArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort_>>;
};

export type ApiTokenSort_ = {
  createdAt?: InputMaybe<SortOrder_>;
  createdBy?: InputMaybe<UserSort_>;
  deletedAt?: InputMaybe<SortOrder_>;
  id?: InputMaybe<SortOrder_>;
  name?: InputMaybe<SortOrder_>;
  updatedAt?: InputMaybe<SortOrder_>;
};

/** ApiTokens subscription filter */
export type ApiTokenSubscriptionFilter_ = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType_>>>;
  node?: InputMaybe<ApiTokenFilter_>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter_>;
};

/** ApiTokens update input */
export type ApiTokenUpdateByFilterInput_ = {
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
  token?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
};

/** ApiTokens update input */
export type ApiTokenUpdateInput_ = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<ApiTokensRolesUpdateRelationInput_>;
};

export type ApiToken_PermissionFilter_ = {
  AND?: InputMaybe<Array<ApiToken_PermissionFilter_>>;
  OR?: InputMaybe<Array<ApiToken_PermissionFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<User_PermissionFilter_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  id?: InputMaybe<IdPredicate_>;
  name?: InputMaybe<StringPredicate_>;
  roles?: InputMaybe<Role_PermissionRelationFilter_>;
  token?: InputMaybe<StringPredicate_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
};

export type ApiToken_PermissionRelationFilter_ = {
  every?: InputMaybe<ApiToken_PermissionFilter_>;
  none?: InputMaybe<ApiToken_PermissionFilter_>;
  some?: InputMaybe<ApiToken_PermissionFilter_>;
};

/** ApiTokens relation input */
export type ApiTokensRolesRelationInput_ = {
  connect?: InputMaybe<Array<RoleKeyFilter_>>;
  create?: InputMaybe<Array<InputMaybe<ApiTokens_RoleCreateInput_>>>;
};

/** ApiTokens relation input */
export type ApiTokensRolesUpdateRelationInput_ = {
  connect?: InputMaybe<Array<RoleKeyFilter_>>;
  create?: InputMaybe<Array<InputMaybe<ApiTokens_RoleCreateInput_>>>;
  disconnect?: InputMaybe<Array<RoleKeyFilter_>>;
  reconnect?: InputMaybe<Array<RoleKeyFilter_>>;
  update?: InputMaybe<Array<InputMaybe<ApiTokens_RoleUpdateInput_>>>;
};

/** Roles create input from apiTokens */
export type ApiTokens_RoleCreateInput_ = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput_>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput_>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionsInput_>;
  users?: InputMaybe<RolesUsersRelationInput_>;
};

/** Roles update input from apiTokens */
export type ApiTokens_RoleUpdateInput_ = {
  data: RoleUpdateInput_;
  filter?: InputMaybe<RoleKeyFilter_>;
};

/** Application */
export type Application_ = {
  __typename?: 'Application';
  appType: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status: ApplicationStatusEnum_;
};

/** ApplicationDeleteMutationInput */
export type ApplicationDeleteMutationInput_ = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

/** Application install input */
export type ApplicationInstallInput_ = {
  appType: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  status?: InputMaybe<ApplicationStatusEnum_>;
};

/** ApplicationListResponse output */
export type ApplicationListResponse_ = {
  __typename?: 'ApplicationListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Application_>;
};

/** Application Status Enum */
export enum ApplicationStatusEnum_ {
  Active_ = 'ACTIVE',
  Inactive_ = 'INACTIVE'
}

/** Application update input */
export type ApplicationUpdateInput_ = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ApplicationStatusEnum_>;
};

/** Async Session */
export type AsyncSession_ = {
  __typename?: 'AsyncSession';
  sessionId: Scalars['String']['output'];
};

export type AsyncSessionStatusResponse_ = {
  __typename?: 'AsyncSessionStatusResponse';
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

/** Auth response */
export type Auth_ = {
  __typename?: 'Auth';
  accessToken?: Maybe<Scalars['String']['output']>;
  accessTokenExpiresAt?: Maybe<Scalars['Int']['output']>;
  idToken?: Maybe<Scalars['String']['output']>;
  idTokenExpiresAt?: Maybe<Scalars['Int']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
};

export type AuthenticationProfile_ = {
  __typename?: 'AuthenticationProfile';
  _description?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<AuthenticationProfileAttributes_>;
  audiences?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  clientId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User_>;
  databaseName?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  managementDomain?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<RoleListResponse_>;
  secret?: Maybe<Scalars['String']['output']>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  selfSignUpEnabled?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AuthenticationProfileRolesArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort_>>;
};

/** Authentication Profile Attributes */
export type AuthenticationProfileAttributes_ = CognitoAuthProfileAttributes_;

/** Authentication profile connection options */
export type AuthenticationProfileConnectionOptions_ = {
  __typename?: 'AuthenticationProfileConnectionOptions';
  facebook?: Maybe<FacebookOptions_>;
  github?: Maybe<GithubOptions_>;
  google?: Maybe<GoogleOptions_>;
};

/** Authentication profile connection options input */
export type AuthenticationProfileConnectionsOptionsInput_ = {
  facebook?: InputMaybe<FacebookOptionsInput_>;
  github?: InputMaybe<GithubOptionsInput_>;
  google?: InputMaybe<GoogleOptionsInput_>;
};

/** AuthenticationProfiles create input */
export type AuthenticationProfileCreateInput_ = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  managementDomain?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  roles?: InputMaybe<AuthenticationProfilesRolesRelationInput_>;
  secret?: InputMaybe<Scalars['String']['input']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** AuthenticationProfiles create many input */
export type AuthenticationProfileCreateManyInput_ = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  managementDomain?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  roles?: InputMaybe<AuthenticationProfilesRolesManyRelationInput_>;
  secret?: InputMaybe<Scalars['String']['input']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** AuthenticationProfiles delete input */
export type AuthenticationProfileDeleteInput_ = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AuthenticationProfileFilter_ = {
  AND?: InputMaybe<Array<AuthenticationProfileFilter_>>;
  OR?: InputMaybe<Array<AuthenticationProfileFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<StringPredicate_>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<UserFilter_>;
  databaseName?: InputMaybe<StringPredicate_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  domain?: InputMaybe<StringPredicate_>;
  id?: InputMaybe<IdPredicate_>;
  managementDomain?: InputMaybe<StringPredicate_>;
  name?: InputMaybe<StringPredicate_>;
  roles?: InputMaybe<RoleRelationFilter_>;
  secret?: InputMaybe<StringPredicate_>;
  selfSignUpEnabled?: InputMaybe<BoolPredicate_>;
  type?: InputMaybe<StringPredicate_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
};

export type AuthenticationProfileGroupBy_ = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: AuthenticationProfileGroupByQuery_;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort_>>;
};

export type AuthenticationProfileGroupByQuery_ = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField_>>;
  audiences?: InputMaybe<Array<GroupByField_>>;
  clientId?: InputMaybe<Array<GroupByField_>>;
  createdAt?: InputMaybe<Array<GroupByField_>>;
  createdBy?: InputMaybe<UserGroupByQuery_>;
  databaseName?: InputMaybe<Array<GroupByField_>>;
  domain?: InputMaybe<Array<GroupByField_>>;
  id?: InputMaybe<Array<GroupByField_>>;
  managementDomain?: InputMaybe<Array<GroupByField_>>;
  name?: InputMaybe<Array<GroupByField_>>;
  roles?: InputMaybe<RoleGroupByQuery_>;
  secret?: InputMaybe<Array<GroupByField_>>;
  selfSignUpEmailDomains?: InputMaybe<Array<GroupByField_>>;
  selfSignUpEnabled?: InputMaybe<Array<GroupByField_>>;
  type?: InputMaybe<Array<GroupByField_>>;
  updatedAt?: InputMaybe<Array<GroupByField_>>;
};

export type AuthenticationProfileKeyFilter_ = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** AuthenticationProfileListResponse output */
export type AuthenticationProfileListResponse_ = {
  __typename?: 'AuthenticationProfileListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse_>;
  /** List items */
  items: Array<AuthenticationProfile_>;
};

/** AuthenticationProfileManyResponse output */
export type AuthenticationProfileManyResponse_ = {
  __typename?: 'AuthenticationProfileManyResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<AuthenticationProfile_>;
};

/** No longer supported. Use `sort` instead. */
export enum AuthenticationProfileOrderBy_ {
  ClientIdAsc_ = 'clientId_ASC',
  ClientIdDesc_ = 'clientId_DESC',
  CreatedAtAsc_ = 'createdAt_ASC',
  CreatedAtDesc_ = 'createdAt_DESC',
  DatabaseNameAsc_ = 'databaseName_ASC',
  DatabaseNameDesc_ = 'databaseName_DESC',
  DeletedAtAsc_ = 'deletedAt_ASC',
  DeletedAtDesc_ = 'deletedAt_DESC',
  DomainAsc_ = 'domain_ASC',
  DomainDesc_ = 'domain_DESC',
  IdAsc_ = 'id_ASC',
  IdDesc_ = 'id_DESC',
  ManagementDomainAsc_ = 'managementDomain_ASC',
  ManagementDomainDesc_ = 'managementDomain_DESC',
  NameAsc_ = 'name_ASC',
  NameDesc_ = 'name_DESC',
  SecretAsc_ = 'secret_ASC',
  SecretDesc_ = 'secret_DESC',
  SelfSignUpEnabledAsc_ = 'selfSignUpEnabled_ASC',
  SelfSignUpEnabledDesc_ = 'selfSignUpEnabled_DESC',
  TypeAsc_ = 'type_ASC',
  TypeDesc_ = 'type_DESC',
  UpdatedAtAsc_ = 'updatedAt_ASC',
  UpdatedAtDesc_ = 'updatedAt_DESC'
}

/** AuthenticationProfiles subscription payload */
export type AuthenticationProfilePayload_ = {
  __typename?: 'AuthenticationProfilePayload';
  mutation: MutationType_;
  node?: Maybe<AuthenticationProfile_>;
  previousValues?: Maybe<AuthenticationProfile_>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type AuthenticationProfileRelationFilter_ = {
  every?: InputMaybe<AuthenticationProfileFilter_>;
  none?: InputMaybe<AuthenticationProfileFilter_>;
  some?: InputMaybe<AuthenticationProfileFilter_>;
};

export type AuthenticationProfileSort_ = {
  clientId?: InputMaybe<SortOrder_>;
  createdAt?: InputMaybe<SortOrder_>;
  createdBy?: InputMaybe<UserSort_>;
  databaseName?: InputMaybe<SortOrder_>;
  deletedAt?: InputMaybe<SortOrder_>;
  domain?: InputMaybe<SortOrder_>;
  id?: InputMaybe<SortOrder_>;
  managementDomain?: InputMaybe<SortOrder_>;
  name?: InputMaybe<SortOrder_>;
  secret?: InputMaybe<SortOrder_>;
  selfSignUpEnabled?: InputMaybe<SortOrder_>;
  type?: InputMaybe<SortOrder_>;
  updatedAt?: InputMaybe<SortOrder_>;
};

/** AuthenticationProfiles subscription filter */
export type AuthenticationProfileSubscriptionFilter_ = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType_>>>;
  node?: InputMaybe<AuthenticationProfileFilter_>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter_>;
};

/** AuthenticationProfiles update input */
export type AuthenticationProfileUpdateByFilterInput_ = {
  audiences?: InputMaybe<Array<InputMaybe<UpdateByFilterListStringInput_>>>;
  clientId?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
  databaseName?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
  domain?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
  managementDomain?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
  secret?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<UpdateByFilterListStringInput_>>>;
  selfSignUpEnabled?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput_>>>;
  type?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
};

/** AuthenticationProfiles update input */
export type AuthenticationProfileUpdateInput_ = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  managementDomain?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<AuthenticationProfilesRolesUpdateRelationInput_>;
  secret?: InputMaybe<Scalars['String']['input']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type AuthenticationProfile_PermissionFilter_ = {
  AND?: InputMaybe<Array<AuthenticationProfile_PermissionFilter_>>;
  OR?: InputMaybe<Array<AuthenticationProfile_PermissionFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<StringPredicate_>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<User_PermissionFilter_>;
  databaseName?: InputMaybe<StringPredicate_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  domain?: InputMaybe<StringPredicate_>;
  id?: InputMaybe<IdPredicate_>;
  managementDomain?: InputMaybe<StringPredicate_>;
  name?: InputMaybe<StringPredicate_>;
  roles?: InputMaybe<Role_PermissionRelationFilter_>;
  secret?: InputMaybe<StringPredicate_>;
  selfSignUpEnabled?: InputMaybe<BoolPredicate_>;
  type?: InputMaybe<StringPredicate_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
};

export type AuthenticationProfile_PermissionRelationFilter_ = {
  every?: InputMaybe<AuthenticationProfile_PermissionFilter_>;
  none?: InputMaybe<AuthenticationProfile_PermissionFilter_>;
  some?: InputMaybe<AuthenticationProfile_PermissionFilter_>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesManyRelationInput_ = {
  connect?: InputMaybe<Array<RoleKeyFilter_>>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesRelationInput_ = {
  connect?: InputMaybe<Array<RoleKeyFilter_>>;
  create?: InputMaybe<Array<InputMaybe<AuthenticationProfiles_RoleCreateInput_>>>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesUpdateRelationInput_ = {
  connect?: InputMaybe<Array<RoleKeyFilter_>>;
  create?: InputMaybe<Array<InputMaybe<AuthenticationProfiles_RoleCreateInput_>>>;
  disconnect?: InputMaybe<Array<RoleKeyFilter_>>;
  reconnect?: InputMaybe<Array<RoleKeyFilter_>>;
  update?: InputMaybe<Array<InputMaybe<AuthenticationProfiles_RoleUpdateInput_>>>;
};

/** Roles create input from authenticationProfiles */
export type AuthenticationProfiles_RoleCreateInput_ = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput_>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput_>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionsInput_>;
  users?: InputMaybe<RolesUsersRelationInput_>;
};

/** Roles update input from authenticationProfiles */
export type AuthenticationProfiles_RoleUpdateInput_ = {
  data: RoleUpdateInput_;
  filter?: InputMaybe<RoleKeyFilter_>;
};

export type AuthenticationSetting_ = {
  __typename?: 'AuthenticationSetting';
  _description?: Maybe<Scalars['String']['output']>;
  allowedCallbacks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  allowedLogouts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  allowedWebOrigins?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  connections?: Maybe<AuthenticationProfileConnectionOptions_>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User_>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AuthenticationSettingFilter_ = {
  AND?: InputMaybe<Array<AuthenticationSettingFilter_>>;
  OR?: InputMaybe<Array<AuthenticationSettingFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<UserFilter_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
};

/** AuthenticationSettings subscription payload */
export type AuthenticationSettingPayload_ = {
  __typename?: 'AuthenticationSettingPayload';
  mutation: MutationType_;
  node?: Maybe<AuthenticationSetting_>;
  previousValues?: Maybe<AuthenticationSetting_>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** AuthenticationSettings subscription filter */
export type AuthenticationSettingSubscriptionFilter_ = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType_>>>;
  node?: InputMaybe<AuthenticationSettingFilter_>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter_>;
};

/** AuthenticationSettings update input */
export type AuthenticationSettingUpdateInput_ = {
  allowedCallbacks?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  allowedLogouts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  allowedWebOrigins?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  connections?: InputMaybe<AuthenticationProfileConnectionsOptionsInput_>;
};

/** Users create input from avatar */
export type Avatar_UserCreateInput_ = {
  avatar?: InputMaybe<UsersAvatarRelationInput_>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  generatedText?: InputMaybe<UsersGeneratedTextRelationInput_>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  openApiKey?: InputMaybe<Scalars['String']['input']>;
  promts?: InputMaybe<UsersPromtsRelationInput_>;
  roles?: InputMaybe<UsersRolesRelationInput_>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users update input from avatar */
export type Avatar_UserUpdateInput_ = {
  data: UserUpdateInput_;
  filter?: InputMaybe<UserKeyFilter_>;
};

export type AwsSignInfoResponse_ = {
  __typename?: 'AwsSignInfoResponse';
  fields: Scalars['JSON']['output'];
  path: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type BigIntPredicateHaving_ = {
  AND?: InputMaybe<Array<BigIntPredicateHaving_>>;
  OR?: InputMaybe<Array<BigIntPredicateHaving_>>;
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not_equals?: InputMaybe<Scalars['BigInt']['input']>;
  not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type BillingCurrentPlanResponse_ = {
  __typename?: 'BillingCurrentPlanResponse';
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nextPlan?: Maybe<BillingNextPlanResponse_>;
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<WorkspaceStatus_>;
  trialEnd?: Maybe<Scalars['DateTime']['output']>;
};

export enum BillingDetailsOrigin_ {
  Member_ = 'member',
  Organization_ = 'organization',
  Workspace_ = 'workspace'
}

export type BillingDetailsResponse_ = {
  __typename?: 'BillingDetailsResponse';
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  origin: BillingDetailsOrigin_;
};

export type BillingInvoiceItem_ = {
  __typename?: 'BillingInvoiceItem';
  amountDue?: Maybe<Scalars['Float']['output']>;
  amountPaid?: Maybe<Scalars['Float']['output']>;
  amountRemaining?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endingBalance?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  invoicePdf?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<BillingInvoiceItemOrganizationInfo_>;
  paid?: Maybe<Scalars['Boolean']['output']>;
  periodEnd?: Maybe<Scalars['DateTime']['output']>;
  periodStart?: Maybe<Scalars['DateTime']['output']>;
  plan?: Maybe<BillingInvoiceItemPlanInfo_>;
  project?: Maybe<BillingInvoiceItemProjectInfo_>;
  status?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type BillingInvoiceItemOrganizationInfo_ = {
  __typename?: 'BillingInvoiceItemOrganizationInfo';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BillingInvoiceItemPlanInfo_ = {
  __typename?: 'BillingInvoiceItemPlanInfo';
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BillingInvoiceItemProjectInfo_ = {
  __typename?: 'BillingInvoiceItemProjectInfo';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum BillingInvoicesListFilterType_ {
  Customer_ = 'CUSTOMER',
  Project_ = 'PROJECT'
}

/** BillingInvoicesListResponse output */
export type BillingInvoicesListResponse_ = {
  __typename?: 'BillingInvoicesListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<BillingInvoiceItem_>;
};

export type BillingLimitMetricItem_ = {
  __typename?: 'BillingLimitMetricItem';
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  showPriority?: Maybe<Scalars['Int']['output']>;
  tooltip?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

export type BillingMetricOverageItem_ = {
  __typename?: 'BillingMetricOverageItem';
  value?: Maybe<Scalars['Float']['output']>;
  warning?: Maybe<Scalars['String']['output']>;
};

export type BillingMetricUsageItem_ = {
  __typename?: 'BillingMetricUsageItem';
  limitMetric?: Maybe<BillingLimitMetricItem_>;
  overage?: Maybe<BillingMetricOverageItem_>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type BillingMetricUsageQuotaItem_ = {
  __typename?: 'BillingMetricUsageQuotaItem';
  limitMetric?: Maybe<BillingLimitMetricItem_>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** BillingMetricUsageQuotasListResponse output */
export type BillingMetricUsageQuotasListResponse_ = {
  __typename?: 'BillingMetricUsageQuotasListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<BillingMetricUsageQuotaItem_>;
};

export type BillingMetricUsagesListFilter_ = {
  entryDate: DateTimePredicate_;
};

/** BillingMetricUsagesListResponse output */
export type BillingMetricUsagesListResponse_ = {
  __typename?: 'BillingMetricUsagesListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<BillingMetricUsageItem_>;
};

export type BillingNextPlanResponse_ = {
  __typename?: 'BillingNextPlanResponse';
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type BillingPlanBaseInfo_ = {
  __typename?: 'BillingPlanBaseInfo';
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isCustom?: Maybe<Scalars['Boolean']['output']>;
  isLegacy?: Maybe<Scalars['Boolean']['output']>;
  limitMetrics?: Maybe<Array<Maybe<BillingPlanLimitMetricItem_>>>;
  name?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type BillingPlanLimitMetricItem_ = {
  __typename?: 'BillingPlanLimitMetricItem';
  displayName?: Maybe<Scalars['String']['output']>;
  hardLimit?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overagePrice?: Maybe<Scalars['Int']['output']>;
  softLimit?: Maybe<Scalars['Float']['output']>;
};

/** BillingPlanUpdateMutationInput */
export type BillingPlanUpdateMutationInput_ = {
  planId: Scalars['ID']['input'];
  projectID: Scalars['ID']['input'];
};

export type BoolPredicate_ = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolPredicateHaving_ = {
  AND?: InputMaybe<Array<BoolPredicateHaving_>>;
  OR?: InputMaybe<Array<BoolPredicateHaving_>>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

/** ChangePasswordInput */
export type ChangePasswordInput_ = {
  authProfileId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
  refreshToken: Scalars['String']['input'];
};

/** Authentication Profile Attributes for Cognito */
export type CognitoAuthProfileAttributes_ = {
  __typename?: 'CognitoAuthProfileAttributes';
  clientAuthDomain?: Maybe<Scalars['String']['output']>;
};

/** Computed field mode */
export enum ComputedFieldMode_ {
  Stored_ = 'STORED',
  Virtual_ = 'VIRTUAL'
}

export type Content_ = {
  __typename?: 'Content';
  _description?: Maybe<Scalars['String']['output']>;
  contentText?: Maybe<ContentTextListResponse_>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User_>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UserListResponse_>;
};


export type ContentContentTextArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ContentTextFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ContentTextGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentTextOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ContentTextSort_>>;
};


export type ContentUserArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<UserGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort_>>;
};

/** Content relation input */
export type ContentContentTextManyRelationInput_ = {
  connect?: InputMaybe<Array<ContentTextKeyFilter_>>;
};

/** Content relation input */
export type ContentContentTextRelationInput_ = {
  connect?: InputMaybe<Array<ContentTextKeyFilter_>>;
  create?: InputMaybe<Array<InputMaybe<Content_ContentTextCreateInput_>>>;
};

/** Content relation input */
export type ContentContentTextUpdateRelationInput_ = {
  connect?: InputMaybe<Array<ContentTextKeyFilter_>>;
  create?: InputMaybe<Array<InputMaybe<Content_ContentTextCreateInput_>>>;
  disconnect?: InputMaybe<Array<ContentTextKeyFilter_>>;
  reconnect?: InputMaybe<Array<ContentTextKeyFilter_>>;
  update?: InputMaybe<Array<InputMaybe<Content_ContentTextUpdateInput_>>>;
};

/** Content create input */
export type ContentCreateInput_ = {
  contentText?: InputMaybe<ContentContentTextRelationInput_>;
  title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<ContentUserRelationInput_>;
};

/** Content create many input */
export type ContentCreateManyInput_ = {
  contentText?: InputMaybe<ContentContentTextManyRelationInput_>;
  title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<ContentUserManyRelationInput_>;
};

/** Content delete input */
export type ContentDeleteInput_ = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** ContentFieldsPermissions create input */
export type ContentFieldsPermissions_ = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentFilter_ = {
  AND?: InputMaybe<Array<ContentFilter_>>;
  OR?: InputMaybe<Array<ContentFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  contentText?: InputMaybe<ContentTextRelationFilter_>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<UserFilter_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  id?: InputMaybe<IdPredicate_>;
  title?: InputMaybe<StringPredicate_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
  user?: InputMaybe<UserRelationFilter_>;
};

export type ContentGroupBy_ = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: ContentGroupByQuery_;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort_>>;
};

export type ContentGroupByQuery_ = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField_>>;
  contentText?: InputMaybe<ContentTextGroupByQuery_>;
  createdAt?: InputMaybe<Array<GroupByField_>>;
  createdBy?: InputMaybe<UserGroupByQuery_>;
  id?: InputMaybe<Array<GroupByField_>>;
  title?: InputMaybe<Array<GroupByField_>>;
  updatedAt?: InputMaybe<Array<GroupByField_>>;
  user?: InputMaybe<UserGroupByQuery_>;
};

export type ContentKeyFilter_ = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** ContentListResponse output */
export type ContentListResponse_ = {
  __typename?: 'ContentListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse_>;
  /** List items */
  items: Array<Content_>;
};

/** ContentManyResponse output */
export type ContentManyResponse_ = {
  __typename?: 'ContentManyResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Content_>;
};

/** No longer supported. Use `sort` instead. */
export enum ContentOrderBy_ {
  CreatedAtAsc_ = 'createdAt_ASC',
  CreatedAtDesc_ = 'createdAt_DESC',
  DeletedAtAsc_ = 'deletedAt_ASC',
  DeletedAtDesc_ = 'deletedAt_DESC',
  IdAsc_ = 'id_ASC',
  IdDesc_ = 'id_DESC',
  TitleAsc_ = 'title_ASC',
  TitleDesc_ = 'title_DESC',
  UpdatedAtAsc_ = 'updatedAt_ASC',
  UpdatedAtDesc_ = 'updatedAt_DESC'
}

/** Content subscription payload */
export type ContentPayload_ = {
  __typename?: 'ContentPayload';
  mutation: MutationType_;
  node?: Maybe<Content_>;
  previousValues?: Maybe<Content_>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ContentRelationFilter_ = {
  every?: InputMaybe<ContentFilter_>;
  none?: InputMaybe<ContentFilter_>;
  some?: InputMaybe<ContentFilter_>;
};

export type ContentSort_ = {
  createdAt?: InputMaybe<SortOrder_>;
  createdBy?: InputMaybe<UserSort_>;
  deletedAt?: InputMaybe<SortOrder_>;
  id?: InputMaybe<SortOrder_>;
  title?: InputMaybe<SortOrder_>;
  updatedAt?: InputMaybe<SortOrder_>;
};

/** Content subscription filter */
export type ContentSubscriptionFilter_ = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType_>>>;
  node?: InputMaybe<ContentFilter_>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter_>;
};

export type ContentText_ = {
  __typename?: 'ContentText';
  _description?: Maybe<Scalars['String']['output']>;
  content?: Maybe<ContentListResponse_>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User_>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ContentTextContentArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ContentFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ContentGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ContentSort_>>;
};

/** ContentText relation input */
export type ContentTextContentManyRelationInput_ = {
  connect?: InputMaybe<Array<ContentKeyFilter_>>;
};

/** ContentText relation input */
export type ContentTextContentRelationInput_ = {
  connect?: InputMaybe<Array<ContentKeyFilter_>>;
  create?: InputMaybe<Array<InputMaybe<ContentText_ContentCreateInput_>>>;
};

/** ContentText relation input */
export type ContentTextContentUpdateRelationInput_ = {
  connect?: InputMaybe<Array<ContentKeyFilter_>>;
  create?: InputMaybe<Array<InputMaybe<ContentText_ContentCreateInput_>>>;
  disconnect?: InputMaybe<Array<ContentKeyFilter_>>;
  reconnect?: InputMaybe<Array<ContentKeyFilter_>>;
  update?: InputMaybe<Array<InputMaybe<ContentText_ContentUpdateInput_>>>;
};

/** ContentText create input */
export type ContentTextCreateInput_ = {
  content?: InputMaybe<ContentTextContentRelationInput_>;
  text: Scalars['String']['input'];
};

/** ContentText create many input */
export type ContentTextCreateManyInput_ = {
  content?: InputMaybe<ContentTextContentManyRelationInput_>;
  text: Scalars['String']['input'];
};

/** ContentText delete input */
export type ContentTextDeleteInput_ = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** ContentTextFieldsPermissions create input */
export type ContentTextFieldsPermissions_ = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentTextFilter_ = {
  AND?: InputMaybe<Array<ContentTextFilter_>>;
  OR?: InputMaybe<Array<ContentTextFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<ContentRelationFilter_>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<UserFilter_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  id?: InputMaybe<IdPredicate_>;
  text?: InputMaybe<StringPredicate_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
};

export type ContentTextGroupBy_ = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: ContentTextGroupByQuery_;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort_>>;
};

export type ContentTextGroupByQuery_ = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField_>>;
  content?: InputMaybe<ContentGroupByQuery_>;
  createdAt?: InputMaybe<Array<GroupByField_>>;
  createdBy?: InputMaybe<UserGroupByQuery_>;
  id?: InputMaybe<Array<GroupByField_>>;
  text?: InputMaybe<Array<GroupByField_>>;
  updatedAt?: InputMaybe<Array<GroupByField_>>;
};

export type ContentTextKeyFilter_ = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** ContentTextListResponse output */
export type ContentTextListResponse_ = {
  __typename?: 'ContentTextListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse_>;
  /** List items */
  items: Array<ContentText_>;
};

/** ContentTextManyResponse output */
export type ContentTextManyResponse_ = {
  __typename?: 'ContentTextManyResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<ContentText_>;
};

/** No longer supported. Use `sort` instead. */
export enum ContentTextOrderBy_ {
  CreatedAtAsc_ = 'createdAt_ASC',
  CreatedAtDesc_ = 'createdAt_DESC',
  DeletedAtAsc_ = 'deletedAt_ASC',
  DeletedAtDesc_ = 'deletedAt_DESC',
  IdAsc_ = 'id_ASC',
  IdDesc_ = 'id_DESC',
  TextAsc_ = 'text_ASC',
  TextDesc_ = 'text_DESC',
  UpdatedAtAsc_ = 'updatedAt_ASC',
  UpdatedAtDesc_ = 'updatedAt_DESC'
}

/** ContentText subscription payload */
export type ContentTextPayload_ = {
  __typename?: 'ContentTextPayload';
  mutation: MutationType_;
  node?: Maybe<ContentText_>;
  previousValues?: Maybe<ContentText_>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ContentTextRelationFilter_ = {
  every?: InputMaybe<ContentTextFilter_>;
  none?: InputMaybe<ContentTextFilter_>;
  some?: InputMaybe<ContentTextFilter_>;
};

export type ContentTextSort_ = {
  createdAt?: InputMaybe<SortOrder_>;
  createdBy?: InputMaybe<UserSort_>;
  deletedAt?: InputMaybe<SortOrder_>;
  id?: InputMaybe<SortOrder_>;
  text?: InputMaybe<SortOrder_>;
  updatedAt?: InputMaybe<SortOrder_>;
};

/** ContentText subscription filter */
export type ContentTextSubscriptionFilter_ = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType_>>>;
  node?: InputMaybe<ContentTextFilter_>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter_>;
};

/** ContentText update input */
export type ContentTextUpdateByFilterInput_ = {
  text?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
};

/** ContentText update input */
export type ContentTextUpdateInput_ = {
  content?: InputMaybe<ContentTextContentUpdateRelationInput_>;
  id?: InputMaybe<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

/** Content create input from contentText */
export type ContentText_ContentCreateInput_ = {
  contentText?: InputMaybe<ContentContentTextRelationInput_>;
  title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<ContentUserRelationInput_>;
};

/** Content update input from contentText */
export type ContentText_ContentUpdateInput_ = {
  data: ContentUpdateInput_;
  filter?: InputMaybe<ContentKeyFilter_>;
};

export type ContentText_PermissionFilter_ = {
  AND?: InputMaybe<Array<ContentText_PermissionFilter_>>;
  OR?: InputMaybe<Array<ContentText_PermissionFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Content_PermissionRelationFilter_>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<User_PermissionFilter_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  id?: InputMaybe<IdPredicate_>;
  text?: InputMaybe<StringPredicate_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
};

export type ContentText_PermissionRelationFilter_ = {
  every?: InputMaybe<ContentText_PermissionFilter_>;
  none?: InputMaybe<ContentText_PermissionFilter_>;
  some?: InputMaybe<ContentText_PermissionFilter_>;
};

/** Content update input */
export type ContentUpdateByFilterInput_ = {
  title?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
};

/** Content update input */
export type ContentUpdateInput_ = {
  contentText?: InputMaybe<ContentContentTextUpdateRelationInput_>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<ContentUserUpdateRelationInput_>;
};

/** Content relation input */
export type ContentUserManyRelationInput_ = {
  connect?: InputMaybe<Array<UserKeyFilter_>>;
};

/** Content relation input */
export type ContentUserRelationInput_ = {
  connect?: InputMaybe<Array<UserKeyFilter_>>;
  create?: InputMaybe<Array<InputMaybe<GeneratedText_UserCreateInput_>>>;
};

/** Content relation input */
export type ContentUserUpdateRelationInput_ = {
  connect?: InputMaybe<Array<UserKeyFilter_>>;
  create?: InputMaybe<Array<InputMaybe<GeneratedText_UserCreateInput_>>>;
  disconnect?: InputMaybe<Array<UserKeyFilter_>>;
  reconnect?: InputMaybe<Array<UserKeyFilter_>>;
  update?: InputMaybe<Array<InputMaybe<GeneratedText_UserUpdateInput_>>>;
};

/** ContentText create input from content */
export type Content_ContentTextCreateInput_ = {
  content?: InputMaybe<ContentTextContentRelationInput_>;
  text: Scalars['String']['input'];
};

/** ContentText update input from content */
export type Content_ContentTextUpdateInput_ = {
  data: ContentTextUpdateInput_;
  filter?: InputMaybe<ContentTextKeyFilter_>;
};

export type Content_PermissionFilter_ = {
  AND?: InputMaybe<Array<Content_PermissionFilter_>>;
  OR?: InputMaybe<Array<Content_PermissionFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  contentText?: InputMaybe<ContentText_PermissionRelationFilter_>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<User_PermissionFilter_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  id?: InputMaybe<IdPredicate_>;
  title?: InputMaybe<StringPredicate_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
  user?: InputMaybe<User_PermissionRelationFilter_>;
};

export type Content_PermissionRelationFilter_ = {
  every?: InputMaybe<Content_PermissionFilter_>;
  none?: InputMaybe<Content_PermissionFilter_>;
  some?: InputMaybe<Content_PermissionFilter_>;
};

/** Custom Table Field Type */
export type CustomTableField_ = {
  __typename?: 'CustomTableField';
  computedMode?: Maybe<ComputedFieldMode_>;
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['String']['output']>;
  fieldType?: Maybe<FieldType_>;
  fieldTypeAttributes?: Maybe<FieldTypeAttributes_>;
  isList: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Date Field Attributes */
export type DateFieldTypeAttributes_ = {
  __typename?: 'DateFieldTypeAttributes';
  format: Scalars['String']['output'];
};

export enum DatePartFunctionType_ {
  Date_ = 'DATE',
  Day_ = 'DAY',
  DayName_ = 'DAY_NAME',
  DayOfMonth_ = 'DAY_OF_MONTH',
  DayOfWeek_ = 'DAY_OF_WEEK',
  DayOfYear_ = 'DAY_OF_YEAR',
  Hour_ = 'HOUR',
  LastDay_ = 'LAST_DAY',
  Microsecond_ = 'MICROSECOND',
  Minute_ = 'MINUTE',
  Month_ = 'MONTH',
  MonthName_ = 'MONTH_NAME',
  Quarter_ = 'QUARTER',
  Second_ = 'SECOND',
  Time_ = 'TIME',
  Week_ = 'WEEK',
  WeekDay_ = 'WEEK_DAY',
  WeekOfYear_ = 'WEEK_OF_YEAR',
  Year_ = 'YEAR',
  YearWeek_ = 'YEAR_WEEK'
}

export type DatePredicateHaving_ = {
  AND?: InputMaybe<Array<DatePredicateHaving_>>;
  OR?: InputMaybe<Array<DatePredicateHaving_>>;
  equals?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  not_equals?: InputMaybe<Scalars['Date']['input']>;
  not_in?: InputMaybe<Array<Scalars['Date']['input']>>;
};

export type DateRelativePredicateType_ = {
  op?: InputMaybe<RelativePredicateOpEnum_>;
  unit?: InputMaybe<RelativePredicateUnitEnum_>;
  value: Scalars['String']['input'];
};

export type DateRelativePredicates_ = {
  gt?: InputMaybe<DateRelativePredicateType_>;
  gte?: InputMaybe<DateRelativePredicateType_>;
  lt?: InputMaybe<DateRelativePredicateType_>;
  lte?: InputMaybe<DateRelativePredicateType_>;
};

export type DateTimePredicate_ = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  relative?: InputMaybe<DateRelativePredicates_>;
};

export type DateTimePredicateHaving_ = {
  AND?: InputMaybe<Array<DateTimePredicateHaving_>>;
  OR?: InputMaybe<Array<DateTimePredicateHaving_>>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Date Type Format Enum */
export enum DateTypeFormatEnum_ {
  Date_ = 'DATE',
  Datetime_ = 'DATETIME'
}

/** DeployDataResponse */
export type DeployDataResponse_ = {
  __typename?: 'DeployDataResponse';
  buildName: Scalars['String']['output'];
  uploadBuildUrl: Scalars['String']['output'];
  uploadMetaDataUrl: Scalars['String']['output'];
};

export enum DeployModeEnum_ {
  Full_ = 'FULL',
  Functions_ = 'FUNCTIONS',
  Migrations_ = 'MIGRATIONS',
  OnlyPlugins_ = 'ONLY_PLUGINS',
  OnlyProject_ = 'ONLY_PROJECT'
}

/** DeployOptions */
export type DeployOptions_ = {
  extensionNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode?: InputMaybe<DeployModeEnum_>;
  pluginNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum DeployStatusEnum_ {
  Compiling_ = 'compiling',
  CompleteError_ = 'complete_error',
  CompleteSuccess_ = 'complete_success',
  Deploying_ = 'deploying',
  Initialize_ = 'initialize',
  Preparing_ = 'preparing'
}

/** DeployStatusResult */
export type DeployStatusResult_ = {
  __typename?: 'DeployStatusResult';
  message?: Maybe<Scalars['String']['output']>;
  status: DeployStatusEnum_;
};

/** DeployingBuildInput */
export type DeployingBuildInput_ = {
  buildName: Scalars['String']['input'];
  options?: InputMaybe<DeployOptions_>;
};

export type DeploymentAbItemResponse_ = {
  __typename?: 'DeploymentABItemResponse';
  dateDeploy?: Maybe<Scalars['DateTime']['output']>;
  statusDeploy?: Maybe<Scalars['String']['output']>;
  urlDeploy?: Maybe<Scalars['String']['output']>;
  userDeploy?: Maybe<SystemMemberAccountInfo_>;
  versionDeploy?: Maybe<Scalars['String']['output']>;
  versionFrontEnd?: Maybe<Scalars['String']['output']>;
};

export type EnvironmentBackupItem_ = {
  __typename?: 'EnvironmentBackupItem';
  name: Scalars['String']['output'];
  size: Scalars['Float']['output'];
};

export type EnvironmentItem_ = {
  __typename?: 'EnvironmentItem';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** EnvironmentSetupInput */
export type EnvironmentSetupInput_ = {
  deleteLock?: InputMaybe<Scalars['Boolean']['input']>;
  introspection?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnvironmentVariable_ = {
  __typename?: 'EnvironmentVariable';
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User_>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** EnvironmentVariables create input */
export type EnvironmentVariableCreateInput_ = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

/** EnvironmentVariables create many input */
export type EnvironmentVariableCreateManyInput_ = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

/** EnvironmentVariables delete input */
export type EnvironmentVariableDeleteInput_ = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type EnvironmentVariableFilter_ = {
  AND?: InputMaybe<Array<EnvironmentVariableFilter_>>;
  OR?: InputMaybe<Array<EnvironmentVariableFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<UserFilter_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  id?: InputMaybe<IdPredicate_>;
  name?: InputMaybe<StringPredicate_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
  value?: InputMaybe<StringPredicate_>;
};

export type EnvironmentVariableGroupBy_ = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: EnvironmentVariableGroupByQuery_;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort_>>;
};

export type EnvironmentVariableGroupByQuery_ = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField_>>;
  createdAt?: InputMaybe<Array<GroupByField_>>;
  createdBy?: InputMaybe<UserGroupByQuery_>;
  id?: InputMaybe<Array<GroupByField_>>;
  name?: InputMaybe<Array<GroupByField_>>;
  updatedAt?: InputMaybe<Array<GroupByField_>>;
  value?: InputMaybe<Array<GroupByField_>>;
};

export type EnvironmentVariableKeyFilter_ = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** EnvironmentVariableListResponse output */
export type EnvironmentVariableListResponse_ = {
  __typename?: 'EnvironmentVariableListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse_>;
  /** List items */
  items: Array<EnvironmentVariable_>;
};

/** EnvironmentVariableManyResponse output */
export type EnvironmentVariableManyResponse_ = {
  __typename?: 'EnvironmentVariableManyResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<EnvironmentVariable_>;
};

/** No longer supported. Use `sort` instead. */
export enum EnvironmentVariableOrderBy_ {
  CreatedAtAsc_ = 'createdAt_ASC',
  CreatedAtDesc_ = 'createdAt_DESC',
  DeletedAtAsc_ = 'deletedAt_ASC',
  DeletedAtDesc_ = 'deletedAt_DESC',
  IdAsc_ = 'id_ASC',
  IdDesc_ = 'id_DESC',
  NameAsc_ = 'name_ASC',
  NameDesc_ = 'name_DESC',
  UpdatedAtAsc_ = 'updatedAt_ASC',
  UpdatedAtDesc_ = 'updatedAt_DESC',
  ValueAsc_ = 'value_ASC',
  ValueDesc_ = 'value_DESC'
}

/** EnvironmentVariables subscription payload */
export type EnvironmentVariablePayload_ = {
  __typename?: 'EnvironmentVariablePayload';
  mutation: MutationType_;
  node?: Maybe<EnvironmentVariable_>;
  previousValues?: Maybe<EnvironmentVariable_>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type EnvironmentVariableSort_ = {
  createdAt?: InputMaybe<SortOrder_>;
  createdBy?: InputMaybe<UserSort_>;
  deletedAt?: InputMaybe<SortOrder_>;
  id?: InputMaybe<SortOrder_>;
  name?: InputMaybe<SortOrder_>;
  updatedAt?: InputMaybe<SortOrder_>;
  value?: InputMaybe<SortOrder_>;
};

/** EnvironmentVariables subscription filter */
export type EnvironmentVariableSubscriptionFilter_ = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType_>>>;
  node?: InputMaybe<EnvironmentVariableFilter_>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter_>;
};

/** EnvironmentVariables update input */
export type EnvironmentVariableUpdateByFilterInput_ = {
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
  value?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
};

/** EnvironmentVariables update input */
export type EnvironmentVariableUpdateInput_ = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Facebook connection params */
export type FacebookOptions_ = {
  __typename?: 'FacebookOptions';
  app_id: Scalars['String']['output'];
  app_secret: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
};

/** Facebook connection params input */
export type FacebookOptionsInput_ = {
  app_id: Scalars['String']['input'];
  app_secret: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
};

/** Field Data Features */
export type FieldDataFeatures_ = {
  __typename?: 'FieldDataFeatures';
  create: Scalars['Boolean']['output'];
  sort: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Field Schema Features */
export type FieldSchemaFeatures_ = {
  __typename?: 'FieldSchemaFeatures';
  delete: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Field types */
export enum FieldType_ {
  Date_ = 'DATE',
  File_ = 'FILE',
  Geo_ = 'GEO',
  Id_ = 'ID',
  Json_ = 'JSON',
  MissingRelation_ = 'MISSING_RELATION',
  Number_ = 'NUMBER',
  OneWayRelation_ = 'ONE_WAY_RELATION',
  Relation_ = 'RELATION',
  Smart_ = 'SMART',
  Switch_ = 'SWITCH',
  Text_ = 'TEXT',
  Uuid_ = 'UUID'
}

/** Field Type Attributes */
export type FieldTypeAttributes_ = DateFieldTypeAttributes_ | FileFieldTypeAttributes_ | GeoFieldTypeAttributes_ | MissingRelationFieldTypeAttributes_ | NumberFieldTypeAttributes_ | SmartFieldTypeAttributes_ | SwitchFieldTypeAttributes_ | TextFieldTypeAttributes_ | UuidFieldTypeAttributes_;

/** Field Type Attributes Input */
export type FieldTypeAttributesInput_ = {
  autoIncrement?: InputMaybe<Scalars['Boolean']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  expiration?: InputMaybe<Scalars['Int']['input']>;
  fieldSize?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  isBigInt?: InputMaybe<Scalars['Boolean']['input']>;
  listOptions?: InputMaybe<Array<Scalars['String']['input']>>;
  maxSize?: InputMaybe<Scalars['Int']['input']>;
  maxValue?: InputMaybe<Scalars['Float']['input']>;
  minValue?: InputMaybe<Scalars['Float']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  srid?: InputMaybe<Scalars['Int']['input']>;
  typeRestrictions?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type File_ = {
  __typename?: 'File';
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User_>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  /** No longer supported. Use `downloadUrl` instead. */
  downloadStorageUrl?: Maybe<Scalars['String']['output']>;
  downloadUrl?: Maybe<Scalars['String']['output']>;
  /** No longer supported. Use `system.fileUploadSignInfo.AwsSignInfoResponse.fields` instead. */
  fields?: Maybe<Scalars['JSON']['output']>;
  fileId?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  meta?: Maybe<Scalars['JSON']['output']>;
  mods?: Maybe<Scalars['JSON']['output']>;
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  public?: Maybe<Scalars['Boolean']['output']>;
  settings_landingPageImage?: Maybe<SettingListResponse_>;
  settings_menuBarLogo?: Maybe<SettingListResponse_>;
  shareUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** No longer supported */
  uploadUrl?: Maybe<Scalars['String']['output']>;
  /** No longer supported */
  uploaded?: Maybe<Scalars['Boolean']['output']>;
  users_avatar?: Maybe<UserListResponse_>;
};


export type FileSettings_LandingPageImageArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SettingFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<SettingGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<SettingOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SettingSort_>>;
};


export type FileSettings_MenuBarLogoArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SettingFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<SettingGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<SettingOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SettingSort_>>;
};


export type FileUsers_AvatarArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<UserGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort_>>;
};

/** Files create input */
export type FileCreateInput_ = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarRelationInput_>;
};

/** Files create many input */
export type FileCreateManyInput_ = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarManyRelationInput_>;
};

/** Files delete input */
export type FileDeleteInput_ = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** File Field Attributes */
export type FileFieldTypeAttributes_ = {
  __typename?: 'FileFieldTypeAttributes';
  expiration?: Maybe<Scalars['Int']['output']>;
  format: Scalars['String']['output'];
  maxSize?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Field is deprecated */
  showTitle?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Field is deprecated */
  showUrl?: Maybe<Scalars['Boolean']['output']>;
  typeRestrictions?: Maybe<Array<Scalars['String']['output']>>;
};

/** FileFieldsPermissions create input */
export type FileFieldsPermissions_ = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  downloadUrl?: InputMaybe<Scalars['Boolean']['input']>;
  fields?: InputMaybe<Scalars['Boolean']['input']>;
  fileId?: InputMaybe<Scalars['Boolean']['input']>;
  filename?: InputMaybe<Scalars['Boolean']['input']>;
  meta?: InputMaybe<Scalars['Boolean']['input']>;
  mods?: InputMaybe<Scalars['Boolean']['input']>;
  provider?: InputMaybe<Scalars['Boolean']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  shareUrl?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  uploadUrl?: InputMaybe<Scalars['Boolean']['input']>;
  uploaded?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FileFilter_ = {
  AND?: InputMaybe<Array<FileFilter_>>;
  OR?: InputMaybe<Array<FileFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<UserFilter_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  downloadUrl?: InputMaybe<StringPredicate_>;
  fileId?: InputMaybe<StringPredicate_>;
  filename?: InputMaybe<StringPredicate_>;
  id?: InputMaybe<IdPredicate_>;
  provider?: InputMaybe<StringPredicate_>;
  public?: InputMaybe<BoolPredicate_>;
  settings_landingPageImage?: InputMaybe<SettingRelationFilter_>;
  settings_menuBarLogo?: InputMaybe<SettingRelationFilter_>;
  shareUrl?: InputMaybe<StringPredicate_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
  uploadUrl?: InputMaybe<StringPredicate_>;
  uploaded?: InputMaybe<BoolPredicate_>;
  users_avatar?: InputMaybe<UserRelationFilter_>;
};

export type FileGroupBy_ = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: FileGroupByQuery_;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort_>>;
};

export type FileGroupByQuery_ = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField_>>;
  createdAt?: InputMaybe<Array<GroupByField_>>;
  createdBy?: InputMaybe<UserGroupByQuery_>;
  downloadUrl?: InputMaybe<Array<GroupByField_>>;
  fields?: InputMaybe<Array<GroupByField_>>;
  fileId?: InputMaybe<Array<GroupByField_>>;
  filename?: InputMaybe<Array<GroupByField_>>;
  id?: InputMaybe<Array<GroupByField_>>;
  meta?: InputMaybe<Array<GroupByField_>>;
  mods?: InputMaybe<Array<GroupByField_>>;
  provider?: InputMaybe<Array<GroupByField_>>;
  public?: InputMaybe<Array<GroupByField_>>;
  settings_landingPageImage?: InputMaybe<SettingGroupByQuery_>;
  settings_menuBarLogo?: InputMaybe<SettingGroupByQuery_>;
  shareUrl?: InputMaybe<Array<GroupByField_>>;
  updatedAt?: InputMaybe<Array<GroupByField_>>;
  uploadUrl?: InputMaybe<Array<GroupByField_>>;
  uploaded?: InputMaybe<Array<GroupByField_>>;
  users_avatar?: InputMaybe<UserGroupByQuery_>;
};

export type FileKeyFilter_ = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** FileListResponse output */
export type FileListResponse_ = {
  __typename?: 'FileListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse_>;
  /** List items */
  items: Array<File_>;
};

/** FileManyResponse output */
export type FileManyResponse_ = {
  __typename?: 'FileManyResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<File_>;
};

/** No longer supported. Use `sort` instead. */
export enum FileOrderBy_ {
  CreatedAtAsc_ = 'createdAt_ASC',
  CreatedAtDesc_ = 'createdAt_DESC',
  DeletedAtAsc_ = 'deletedAt_ASC',
  DeletedAtDesc_ = 'deletedAt_DESC',
  DownloadUrlAsc_ = 'downloadUrl_ASC',
  DownloadUrlDesc_ = 'downloadUrl_DESC',
  FieldsAsc_ = 'fields_ASC',
  FieldsDesc_ = 'fields_DESC',
  FileIdAsc_ = 'fileId_ASC',
  FileIdDesc_ = 'fileId_DESC',
  FilenameAsc_ = 'filename_ASC',
  FilenameDesc_ = 'filename_DESC',
  IdAsc_ = 'id_ASC',
  IdDesc_ = 'id_DESC',
  MetaAsc_ = 'meta_ASC',
  MetaDesc_ = 'meta_DESC',
  ModsAsc_ = 'mods_ASC',
  ModsDesc_ = 'mods_DESC',
  ProviderAsc_ = 'provider_ASC',
  ProviderDesc_ = 'provider_DESC',
  PublicAsc_ = 'public_ASC',
  PublicDesc_ = 'public_DESC',
  ShareUrlAsc_ = 'shareUrl_ASC',
  ShareUrlDesc_ = 'shareUrl_DESC',
  UpdatedAtAsc_ = 'updatedAt_ASC',
  UpdatedAtDesc_ = 'updatedAt_DESC',
  UploadUrlAsc_ = 'uploadUrl_ASC',
  UploadUrlDesc_ = 'uploadUrl_DESC',
  UploadedAsc_ = 'uploaded_ASC',
  UploadedDesc_ = 'uploaded_DESC'
}

/** Files subscription payload */
export type FilePayload_ = {
  __typename?: 'FilePayload';
  mutation: MutationType_;
  node?: Maybe<File_>;
  previousValues?: Maybe<File_>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type FileSort_ = {
  createdAt?: InputMaybe<SortOrder_>;
  createdBy?: InputMaybe<UserSort_>;
  deletedAt?: InputMaybe<SortOrder_>;
  downloadUrl?: InputMaybe<SortOrder_>;
  fileId?: InputMaybe<SortOrder_>;
  filename?: InputMaybe<SortOrder_>;
  id?: InputMaybe<SortOrder_>;
  provider?: InputMaybe<SortOrder_>;
  public?: InputMaybe<SortOrder_>;
  shareUrl?: InputMaybe<SortOrder_>;
  updatedAt?: InputMaybe<SortOrder_>;
  uploadUrl?: InputMaybe<SortOrder_>;
  uploaded?: InputMaybe<SortOrder_>;
};

export type FileStackSignInfoResponse_ = {
  __typename?: 'FileStackSignInfoResponse';
  apiKey: Scalars['String']['output'];
  path: Scalars['String']['output'];
  policy: Scalars['String']['output'];
  signature: Scalars['String']['output'];
};

/** Files subscription filter */
export type FileSubscriptionFilter_ = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType_>>>;
  node?: InputMaybe<FileFilter_>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter_>;
};

/** File Type Format Enum */
export enum FileTypeFormatEnum_ {
  File_ = 'FILE',
  Image_ = 'IMAGE'
}

/** Files update input */
export type FileUpdateByFilterInput_ = {
  downloadUrl?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
  fields?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput_>>>;
  fileId?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
  filename?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
  meta?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput_>>>;
  mods?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput_>>>;
  provider?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
  public?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput_>>>;
  shareUrl?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
  uploadUrl?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
  uploaded?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput_>>>;
};

/** Files update input */
export type FileUpdateInput_ = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarUpdateRelationInput_>;
};

export type FileUploadInfoResponse_ = {
  __typename?: 'FileUploadInfoResponse';
  apiKey: Scalars['String']['output'];
  path: Scalars['String']['output'];
  policy: Scalars['String']['output'];
  signature: Scalars['String']['output'];
};

export type File_PermissionFilter_ = {
  AND?: InputMaybe<Array<File_PermissionFilter_>>;
  OR?: InputMaybe<Array<File_PermissionFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<User_PermissionFilter_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  downloadUrl?: InputMaybe<StringPredicate_>;
  fileId?: InputMaybe<StringPredicate_>;
  filename?: InputMaybe<StringPredicate_>;
  id?: InputMaybe<IdPredicate_>;
  provider?: InputMaybe<StringPredicate_>;
  public?: InputMaybe<BoolPredicate_>;
  settings_landingPageImage?: InputMaybe<Setting_PermissionRelationFilter_>;
  settings_menuBarLogo?: InputMaybe<Setting_PermissionRelationFilter_>;
  shareUrl?: InputMaybe<StringPredicate_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
  uploadUrl?: InputMaybe<StringPredicate_>;
  uploaded?: InputMaybe<BoolPredicate_>;
  users_avatar?: InputMaybe<User_PermissionRelationFilter_>;
};

/** Files relation input */
export type FilesUsers_AvatarManyRelationInput_ = {
  connect?: InputMaybe<Array<UserKeyFilter_>>;
};

/** Files relation input */
export type FilesUsers_AvatarRelationInput_ = {
  connect?: InputMaybe<Array<UserKeyFilter_>>;
  create?: InputMaybe<Array<InputMaybe<Avatar_UserCreateInput_>>>;
};

/** Files relation input */
export type FilesUsers_AvatarUpdateRelationInput_ = {
  connect?: InputMaybe<Array<UserKeyFilter_>>;
  create?: InputMaybe<Array<InputMaybe<Avatar_UserCreateInput_>>>;
  disconnect?: InputMaybe<Array<UserKeyFilter_>>;
  reconnect?: InputMaybe<Array<UserKeyFilter_>>;
  update?: InputMaybe<Array<InputMaybe<Avatar_UserUpdateInput_>>>;
};

export type FloatPredicateHaving_ = {
  AND?: InputMaybe<Array<FloatPredicateHaving_>>;
  OR?: InputMaybe<Array<FloatPredicateHaving_>>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  not_in?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FrontendUtilizationAbResponse_ = {
  __typename?: 'FrontendUtilizationABResponse';
  CDN?: Maybe<Scalars['Boolean']['output']>;
  assets?: Maybe<Scalars['Int']['output']>;
  customStates?: Maybe<Scalars['Int']['output']>;
  functions?: Maybe<Scalars['Int']['output']>;
  layouts?: Maybe<Scalars['Int']['output']>;
  libraries?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  requests?: Maybe<Scalars['Int']['output']>;
  resources?: Maybe<Scalars['Int']['output']>;
};

/** FunctionInfo */
export type FunctionInfo_ = {
  application?: Maybe<Application_>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType_;
  name: Scalars['String']['output'];
};

/** FunctionInfoFilter */
export type FunctionInfoFilter_ = {
  description?: InputMaybe<Scalars['String']['input']>;
  functionType?: InputMaybe<FunctionType_>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** FunctionInfoOrderBy */
export enum FunctionInfoOrderBy_ {
  DescriptionAsc_ = 'description_ASC',
  DescriptionDesc_ = 'description_DESC',
  FunctionTypeAsc_ = 'functionType_ASC',
  FunctionTypeDesc_ = 'functionType_DESC',
  NameAsc_ = 'name_ASC',
  NameDesc_ = 'name_DESC'
}

/** FunctionListResponse output */
export type FunctionListResponse_ = {
  __typename?: 'FunctionListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<FunctionInfo_>;
};

/** FunctionResolverInfo */
export type FunctionResolverInfo_ = FunctionInfo_ & {
  __typename?: 'FunctionResolverInfo';
  application?: Maybe<Application_>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType_;
  gqlType: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** FunctionTaskInfo */
export type FunctionTaskInfo_ = FunctionInfo_ & {
  __typename?: 'FunctionTaskInfo';
  application?: Maybe<Application_>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType_;
  name: Scalars['String']['output'];
  scheduleExpression?: Maybe<Scalars['String']['output']>;
};

/** FunctionTriggerInfo */
export type FunctionTriggerInfo_ = FunctionInfo_ & {
  __typename?: 'FunctionTriggerInfo';
  application?: Maybe<Application_>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType_;
  name: Scalars['String']['output'];
  operation: Scalars['String']['output'];
  tableName: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/** FunctionType */
export enum FunctionType_ {
  Resolver_ = 'resolver',
  Schedule_ = 'schedule',
  Task_ = 'task',
  Trigger_ = 'trigger',
  Webhook_ = 'webhook'
}

/** FunctionWebhookInfo */
export type FunctionWebhookInfo_ = FunctionInfo_ & {
  __typename?: 'FunctionWebhookInfo';
  application?: Maybe<Application_>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType_;
  httpMethod: Scalars['String']['output'];
  name: Scalars['String']['output'];
  workspaceFullPath: Scalars['String']['output'];
  workspaceRelativePath: Scalars['String']['output'];
};

/** Users create input from generatedText */
export type GeneratedText_UserCreateInput_ = {
  avatar?: InputMaybe<UsersAvatarRelationInput_>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  generatedText?: InputMaybe<UsersGeneratedTextRelationInput_>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  openApiKey?: InputMaybe<Scalars['String']['input']>;
  promts?: InputMaybe<UsersPromtsRelationInput_>;
  roles?: InputMaybe<UsersRolesRelationInput_>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users update input from generatedText */
export type GeneratedText_UserUpdateInput_ = {
  data: UserUpdateInput_;
  filter?: InputMaybe<UserKeyFilter_>;
};

/** Geo Field Attributes */
export type GeoFieldTypeAttributes_ = {
  __typename?: 'GeoFieldTypeAttributes';
  format: Scalars['String']['output'];
  srid?: Maybe<Scalars['Int']['output']>;
};

/** Github connection params */
export type GithubOptions_ = {
  __typename?: 'GithubOptions';
  client_id: Scalars['String']['output'];
  client_secret: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
};

/** Github connection params input */
export type GithubOptionsInput_ = {
  client_id: Scalars['String']['input'];
  client_secret: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
};

/** Google connection params */
export type GoogleOptions_ = {
  __typename?: 'GoogleOptions';
  client_id: Scalars['String']['output'];
  client_secret: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
};

/** Google connection params input */
export type GoogleOptionsInput_ = {
  client_id: Scalars['String']['input'];
  client_secret: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
};

/** GraphQLCreateFileCustomInput */
export type GraphQlCreateFileCustomInput_ = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
};

/** GraphQLCreateFileItemInput */
export type GraphQlCreateFileItemInput_ = {
  create?: InputMaybe<GraphQlCreateFileCustomInput_>;
};

/** GraphQLFileItemResponse */
export type GraphQlFileItemResponse_ = {
  __typename?: 'GraphQLFileItemResponse';
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type GroupByField_ = {
  as?: InputMaybe<Scalars['String']['input']>;
  fn?: InputMaybe<Array<InputMaybe<GroupByFieldFunction_>>>;
};

export type GroupByFieldFunction_ = {
  abs?: InputMaybe<Scalars['Boolean']['input']>;
  aggregate?: InputMaybe<AggregationFunctionType_>;
  ascii?: InputMaybe<Scalars['Boolean']['input']>;
  bitLength?: InputMaybe<Scalars['Boolean']['input']>;
  ceil?: InputMaybe<Scalars['Boolean']['input']>;
  charLength?: InputMaybe<Scalars['Boolean']['input']>;
  crc32?: InputMaybe<Scalars['Boolean']['input']>;
  datePart?: InputMaybe<DatePartFunctionType_>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  floor?: InputMaybe<Scalars['Boolean']['input']>;
  hex?: InputMaybe<Scalars['Boolean']['input']>;
  ifNull?: InputMaybe<Scalars['String']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  left?: InputMaybe<Scalars['Int']['input']>;
  length?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<PatternFunctionArguments_>;
  locate?: InputMaybe<LocateFunctionArguments_>;
  lower?: InputMaybe<Scalars['Boolean']['input']>;
  lpad?: InputMaybe<StringPadFunctionArguments_>;
  ltrim?: InputMaybe<Scalars['Boolean']['input']>;
  mod?: InputMaybe<Scalars['Int']['input']>;
  notLike?: InputMaybe<PatternFunctionArguments_>;
  nullIf?: InputMaybe<Scalars['String']['input']>;
  replace?: InputMaybe<ReplaceFunctionArguments_>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  right?: InputMaybe<Scalars['Int']['input']>;
  round?: InputMaybe<Scalars['Int']['input']>;
  rpad?: InputMaybe<StringPadFunctionArguments_>;
  rtrim?: InputMaybe<Scalars['Boolean']['input']>;
  sign?: InputMaybe<Scalars['Boolean']['input']>;
  substring?: InputMaybe<SubstringFunctionArguments_>;
  trim?: InputMaybe<TrimFunctionArguments_>;
  truncate?: InputMaybe<Scalars['Int']['input']>;
  upper?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GroupByResponse_ = {
  __typename?: 'GroupByResponse';
  ApiTokenGroup: ApiTokenListResponse_;
  AuthenticationProfileGroup: AuthenticationProfileListResponse_;
  BigInt?: Maybe<Scalars['BigInt']['output']>;
  Boolean?: Maybe<Scalars['Boolean']['output']>;
  ContentGroup: ContentListResponse_;
  ContentTextGroup: ContentTextListResponse_;
  Date?: Maybe<Scalars['Date']['output']>;
  DateTime?: Maybe<Scalars['DateTime']['output']>;
  EnvironmentVariableGroup: EnvironmentVariableListResponse_;
  FileGroup: FileListResponse_;
  Float?: Maybe<Scalars['Float']['output']>;
  GroupIds?: Maybe<Array<Scalars['ID']['output']>>;
  ID?: Maybe<Scalars['ID']['output']>;
  Int?: Maybe<Scalars['Int']['output']>;
  JSON?: Maybe<Scalars['JSON']['output']>;
  PromptGroup: PromptListResponse_;
  RoleGroup: RoleListResponse_;
  String?: Maybe<Scalars['String']['output']>;
  UserGroup: UserListResponse_;
};


export type GroupByResponseApiTokenGroupArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ApiTokenFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ApiTokenGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ApiTokenOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ApiTokenSort_>>;
};


export type GroupByResponseAuthenticationProfileGroupArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthenticationProfileFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<AuthenticationProfileGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthenticationProfileOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AuthenticationProfileSort_>>;
};


export type GroupByResponseContentGroupArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ContentFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ContentGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ContentSort_>>;
};


export type GroupByResponseContentTextGroupArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ContentTextFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ContentTextGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentTextOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ContentTextSort_>>;
};


export type GroupByResponseEnvironmentVariableGroupArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EnvironmentVariableFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<EnvironmentVariableGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<EnvironmentVariableOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EnvironmentVariableSort_>>;
};


export type GroupByResponseFileGroupArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FileFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<FileGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<FileOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FileSort_>>;
};


export type GroupByResponsePromptGroupArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PromptFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<PromptGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<PromptOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PromptSort_>>;
};


export type GroupByResponseRoleGroupArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort_>>;
};


export type GroupByResponseUserGroupArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<UserGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort_>>;
};

export type GroupBySort_ = {
  alias: Scalars['String']['input'];
  direction: SortOrder_;
};

export type GroupIdentifiersGroupByField_ = {
  as: Scalars['String']['input'];
};

export type Having_ = {
  AND?: InputMaybe<Array<Having_>>;
  OR?: InputMaybe<Array<Having_>>;
  alias?: InputMaybe<Scalars['String']['input']>;
  bigint?: InputMaybe<BigIntPredicateHaving_>;
  bool?: InputMaybe<BoolPredicateHaving_>;
  date?: InputMaybe<DatePredicateHaving_>;
  datetime?: InputMaybe<DateTimePredicateHaving_>;
  float?: InputMaybe<FloatPredicateHaving_>;
  id?: InputMaybe<IdPredicateHaving_>;
  int?: InputMaybe<IntPredicateHaving_>;
  string?: InputMaybe<StringPredicateHaving_>;
};

export type IdPredicate_ = {
  contains?: InputMaybe<Scalars['ID']['input']>;
  ends_with?: InputMaybe<Scalars['ID']['input']>;
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not_contains?: InputMaybe<Scalars['ID']['input']>;
  not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  not_equals?: InputMaybe<Scalars['ID']['input']>;
  not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export type IdPredicateHaving_ = {
  AND?: InputMaybe<Array<IdPredicateHaving_>>;
  OR?: InputMaybe<Array<IdPredicateHaving_>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  ends_with?: InputMaybe<Scalars['ID']['input']>;
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not_contains?: InputMaybe<Scalars['ID']['input']>;
  not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  not_equals?: InputMaybe<Scalars['ID']['input']>;
  not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** ImportedTable */
export type ImportedTable_ = {
  __typename?: 'ImportedTable';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** Inbox Events List Filter */
export type InboxEventsListFilter_ = {
  isCompleted?: InputMaybe<IntPredicate_>;
};

/** Table Create Index Input */
export type IndexCreateInput_ = {
  columns: Array<TableIndexColumnInput_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tableId: Scalars['ID']['input'];
  type: TableIndexType_;
};

/** Table Delete Index Input */
export type IndexDeleteInput_ = {
  id: Scalars['ID']['input'];
};

/** Table Update Index Input */
export type IndexUpdateInput_ = {
  columns?: InputMaybe<Array<TableIndexColumnInput_>>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TableIndexType_>;
};

export type IntPredicate_ = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntPredicateHaving_ = {
  AND?: InputMaybe<Array<IntPredicateHaving_>>;
  OR?: InputMaybe<Array<IntPredicateHaving_>>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntrospectionQueryResponse_ = {
  __typename?: 'IntrospectionQueryResponse';
  url: Scalars['String']['output'];
};

/** Invited By Name */
export type InvitedByName_ = {
  __typename?: 'InvitedByName';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  projectName?: Maybe<Scalars['String']['output']>;
  workspaceName?: Maybe<Scalars['String']['output']>;
};

/** InvokeData */
export type InvokeData_ = {
  functionName: Scalars['String']['input'];
  inputArgs?: InputMaybe<Scalars['String']['input']>;
};

/** InvokeFunctionResponse */
export type InvokeFunctionResponse_ = {
  __typename?: 'InvokeFunctionResponse';
  responseData: Scalars['String']['output'];
};

export type LocateFunctionArguments_ = {
  pos?: InputMaybe<Scalars['Int']['input']>;
  str: Scalars['String']['input'];
};

/** LoginResponse */
export type LoginResponse_ = {
  __typename?: 'LoginResponse';
  auth?: Maybe<Auth_>;
  success?: Maybe<Scalars['Boolean']['output']>;
  workspaces?: Maybe<Array<WorkspaceInfo_>>;
};

/** MissingRelation */
export type MissingRelation_ = {
  __typename?: 'MissingRelation';
  table: Scalars['String']['output'];
};

/** MissingRelation Field Attributes */
export type MissingRelationFieldTypeAttributes_ = {
  __typename?: 'MissingRelationFieldTypeAttributes';
  missingTable: Scalars['String']['output'];
};

export type Mutation_ = {
  __typename?: 'Mutation';
  apiTokenCreate: ApiTokenResponse_;
  apiTokenDelete?: Maybe<SuccessResponse_>;
  apiTokenDeleteByFilter?: Maybe<SuccessResponse_>;
  apiTokenDestroy?: Maybe<SuccessResponse_>;
  apiTokenDestroyByFilter?: Maybe<SuccessResponse_>;
  apiTokenRestore: ApiToken_;
  apiTokenUpdate: ApiToken_;
  apiTokenUpdateByFilter: ApiTokenManyResponse_;
  /** @deprecated No longer supported. Use `system.applicationDelete` instead. */
  applicationDelete?: Maybe<SuccessResponse_>;
  /** @deprecated No longer supported. Use `system.applicationInstall` instead. */
  applicationInstall?: Maybe<Application_>;
  /** @deprecated No longer supported. Use `system.applicationUpdate` instead. */
  applicationUpdate?: Maybe<Application_>;
  authenticationProfileCreate: AuthenticationProfile_;
  authenticationProfileCreateMany: AuthenticationProfileManyResponse_;
  authenticationProfileDelete?: Maybe<SuccessResponse_>;
  authenticationProfileDeleteByFilter?: Maybe<SuccessResponse_>;
  authenticationProfileDestroy?: Maybe<SuccessResponse_>;
  authenticationProfileDestroyByFilter?: Maybe<SuccessResponse_>;
  authenticationProfileRestore: AuthenticationProfile_;
  authenticationProfileUpdate: AuthenticationProfile_;
  authenticationProfileUpdateByFilter: AuthenticationProfileManyResponse_;
  authenticationSettingsUpdate: AuthenticationSetting_;
  /** @deprecated No longer supported. Use `system.billingPlanUpdate` instead. */
  billingPlanUpdate?: Maybe<BillingCurrentPlanResponse_>;
  contentCreate: Content_;
  contentCreateMany: ContentManyResponse_;
  contentDelete?: Maybe<SuccessResponse_>;
  contentDeleteByFilter?: Maybe<SuccessResponse_>;
  contentDestroy?: Maybe<SuccessResponse_>;
  contentDestroyByFilter?: Maybe<SuccessResponse_>;
  contentRestore: Content_;
  contentTextCreate: ContentText_;
  contentTextCreateMany: ContentTextManyResponse_;
  contentTextDelete?: Maybe<SuccessResponse_>;
  contentTextDeleteByFilter?: Maybe<SuccessResponse_>;
  contentTextDestroy?: Maybe<SuccessResponse_>;
  contentTextDestroyByFilter?: Maybe<SuccessResponse_>;
  contentTextRestore: ContentText_;
  contentTextUpdate: ContentText_;
  contentTextUpdateByFilter: ContentTextManyResponse_;
  contentUpdate: Content_;
  contentUpdateByFilter: ContentManyResponse_;
  /** @deprecated No longer supported. Use `system.deploy` instead. */
  deploy?: Maybe<Scalars['Boolean']['output']>;
  environmentVariableCreate: EnvironmentVariable_;
  environmentVariableCreateMany: EnvironmentVariableManyResponse_;
  environmentVariableDelete?: Maybe<SuccessResponse_>;
  environmentVariableDeleteByFilter?: Maybe<SuccessResponse_>;
  environmentVariableDestroy?: Maybe<SuccessResponse_>;
  environmentVariableDestroyByFilter?: Maybe<SuccessResponse_>;
  environmentVariableRestore: EnvironmentVariable_;
  environmentVariableUpdate: EnvironmentVariable_;
  environmentVariableUpdateByFilter: EnvironmentVariableManyResponse_;
  /** @deprecated No longer supported. Use `system.fieldCreate` instead. */
  fieldCreate: TableField_;
  /** @deprecated No longer supported. Use `system.fieldDelete` instead. */
  fieldDelete: SuccessResponse_;
  /** @deprecated No longer supported. Use `system.fieldUpdate` instead. */
  fieldUpdate: TableField_;
  /** @deprecated No longer supported. Use `system.fieldUpdatePosition` instead. */
  fieldUpdatePosition: SuccessResponse_;
  fileCreate: File_;
  fileCreateMany: FileManyResponse_;
  fileDelete?: Maybe<SuccessResponse_>;
  fileDeleteByFilter?: Maybe<SuccessResponse_>;
  fileDestroy?: Maybe<SuccessResponse_>;
  fileDestroyByFilter?: Maybe<SuccessResponse_>;
  fileRestore: File_;
  fileUpdate: File_;
  fileUpdateByFilter: FileManyResponse_;
  indexCreate: TableIndex_;
  indexDelete?: Maybe<SuccessResponse_>;
  indexUpdate: TableIndex_;
  /** @deprecated No longer supported. Use `system.invoke` instead. */
  invoke?: Maybe<InvokeFunctionResponse_>;
  /** @deprecated No longer supported. Use `system.prepareDeploy` instead. */
  prepareDeploy: DeployDataResponse_;
  promptCreate: Prompt_;
  promptCreateMany: PromptManyResponse_;
  promptDelete?: Maybe<SuccessResponse_>;
  promptDeleteByFilter?: Maybe<SuccessResponse_>;
  promptDestroy?: Maybe<SuccessResponse_>;
  promptDestroyByFilter?: Maybe<SuccessResponse_>;
  promptRestore: Prompt_;
  promptUpdate: Prompt_;
  promptUpdateByFilter: PromptManyResponse_;
  roleCreate: Role_;
  roleCreateMany: RoleManyResponse_;
  roleDelete?: Maybe<SuccessResponse_>;
  roleDeleteByFilter?: Maybe<SuccessResponse_>;
  roleDestroy?: Maybe<SuccessResponse_>;
  roleDestroyByFilter?: Maybe<SuccessResponse_>;
  roleRestore: Role_;
  roleUpdate: Role_;
  roleUpdateByFilter: RoleManyResponse_;
  sendInvitationTo8base?: Maybe<SuccessResponse_>;
  settingsUpdate: Setting_;
  system?: Maybe<SystemMutation_>;
  /** @deprecated No longer supported. Use `system.tableCreate` instead. */
  tableCreate: Table_;
  /** @deprecated No longer supported. Use `system.tableDelete` instead. */
  tableDelete: SuccessResponse_;
  /** @deprecated No longer supported. Use `system.tableUpdate` instead. */
  tableUpdate: Table_;
  userChangePassword?: Maybe<SuccessResponse_>;
  userCreate: User_;
  userCreateMany: UserManyResponse_;
  userDelete?: Maybe<SuccessResponse_>;
  userDeleteByFilter?: Maybe<SuccessResponse_>;
  userDestroy?: Maybe<SuccessResponse_>;
  userDestroyByFilter?: Maybe<SuccessResponse_>;
  userLogin?: Maybe<LoginResponse_>;
  userPasswordForgot?: Maybe<SuccessResponse_>;
  userPasswordForgotConfirm?: Maybe<SuccessResponse_>;
  userRefreshToken?: Maybe<Auth_>;
  userRestore: User_;
  /** @deprecated No longer supported. Use `userSignUpWithToken` instead. */
  userSignUp: User_;
  /** @deprecated No longer supported. Use `userVerificationEmailResend` instead. */
  userSignUpResend?: Maybe<SuccessResponse_>;
  userSignUpWithPassword: User_;
  userSignUpWithToken: User_;
  userUpdate: User_;
  userUpdateByFilter: UserManyResponse_;
  userVerificationEmailResend?: Maybe<SuccessResponse_>;
  /** @deprecated No longer supported. Use `system.viewCreate` instead. */
  viewCreate: Table_;
  viewUpdate: Table_;
  /** @deprecated No longer supported. Use `system.workspaceCreate` instead. */
  workspaceCreate?: Maybe<WorkspaceCreateResponse_>;
  /** @deprecated No longer supported. Use `system.workspaceCreateAsync` instead. */
  workspaceCreateAsync?: Maybe<WorkspaceCreateResponse_>;
  workspaceDelete?: Maybe<SuccessResponse_>;
  /** @deprecated No longer supported. Use `system.workspaceLeave` instead. */
  workspaceLeave?: Maybe<SuccessResponse_>;
  /** @deprecated No longer supported. Use `system.workspaceUpdate` instead. */
  workspaceUpdate?: Maybe<WorkspaceUpdateResponse_>;
};


export type MutationApiTokenCreateArgs_ = {
  data: ApiTokenCreateInput_;
};


export type MutationApiTokenDeleteArgs_ = {
  data?: InputMaybe<ApiTokenDeleteInput_>;
  filter?: InputMaybe<ApiTokenKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenDeleteByFilterArgs_ = {
  filter: ApiTokenFilter_;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenDestroyArgs_ = {
  filter?: InputMaybe<ApiTokenKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenDestroyByFilterArgs_ = {
  filter: ApiTokenFilter_;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenRestoreArgs_ = {
  id: Scalars['String']['input'];
};


export type MutationApiTokenUpdateArgs_ = {
  data: ApiTokenUpdateInput_;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ApiTokenKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenUpdateByFilterArgs_ = {
  data: ApiTokenUpdateByFilterInput_;
  filter?: InputMaybe<ApiTokenFilter_>;
};


export type MutationApplicationDeleteArgs_ = {
  data: ApplicationDeleteMutationInput_;
};


export type MutationApplicationInstallArgs_ = {
  data: ApplicationInstallInput_;
};


export type MutationApplicationUpdateArgs_ = {
  data: ApplicationUpdateInput_;
};


export type MutationAuthenticationProfileCreateArgs_ = {
  data: AuthenticationProfileCreateInput_;
};


export type MutationAuthenticationProfileCreateManyArgs_ = {
  data: Array<InputMaybe<AuthenticationProfileCreateManyInput_>>;
};


export type MutationAuthenticationProfileDeleteArgs_ = {
  data?: InputMaybe<AuthenticationProfileDeleteInput_>;
  filter?: InputMaybe<AuthenticationProfileKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileDeleteByFilterArgs_ = {
  filter: AuthenticationProfileFilter_;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileDestroyArgs_ = {
  filter?: InputMaybe<AuthenticationProfileKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileDestroyByFilterArgs_ = {
  filter: AuthenticationProfileFilter_;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileRestoreArgs_ = {
  id: Scalars['String']['input'];
};


export type MutationAuthenticationProfileUpdateArgs_ = {
  data: AuthenticationProfileUpdateInput_;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthenticationProfileKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileUpdateByFilterArgs_ = {
  data: AuthenticationProfileUpdateByFilterInput_;
  filter?: InputMaybe<AuthenticationProfileFilter_>;
};


export type MutationAuthenticationSettingsUpdateArgs_ = {
  data: AuthenticationSettingUpdateInput_;
};


export type MutationBillingPlanUpdateArgs_ = {
  data: BillingPlanUpdateMutationInput_;
};


export type MutationContentCreateArgs_ = {
  data: ContentCreateInput_;
};


export type MutationContentCreateManyArgs_ = {
  data: Array<InputMaybe<ContentCreateManyInput_>>;
};


export type MutationContentDeleteArgs_ = {
  data?: InputMaybe<ContentDeleteInput_>;
  filter?: InputMaybe<ContentKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationContentDeleteByFilterArgs_ = {
  filter: ContentFilter_;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationContentDestroyArgs_ = {
  filter?: InputMaybe<ContentKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationContentDestroyByFilterArgs_ = {
  filter: ContentFilter_;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationContentRestoreArgs_ = {
  id: Scalars['String']['input'];
};


export type MutationContentTextCreateArgs_ = {
  data: ContentTextCreateInput_;
};


export type MutationContentTextCreateManyArgs_ = {
  data: Array<InputMaybe<ContentTextCreateManyInput_>>;
};


export type MutationContentTextDeleteArgs_ = {
  data?: InputMaybe<ContentTextDeleteInput_>;
  filter?: InputMaybe<ContentTextKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationContentTextDeleteByFilterArgs_ = {
  filter: ContentTextFilter_;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationContentTextDestroyArgs_ = {
  filter?: InputMaybe<ContentTextKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationContentTextDestroyByFilterArgs_ = {
  filter: ContentTextFilter_;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationContentTextRestoreArgs_ = {
  id: Scalars['String']['input'];
};


export type MutationContentTextUpdateArgs_ = {
  data: ContentTextUpdateInput_;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContentTextKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationContentTextUpdateByFilterArgs_ = {
  data: ContentTextUpdateByFilterInput_;
  filter?: InputMaybe<ContentTextFilter_>;
};


export type MutationContentUpdateArgs_ = {
  data: ContentUpdateInput_;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContentKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationContentUpdateByFilterArgs_ = {
  data: ContentUpdateByFilterInput_;
  filter?: InputMaybe<ContentFilter_>;
};


export type MutationDeployArgs_ = {
  data?: InputMaybe<DeployingBuildInput_>;
};


export type MutationEnvironmentVariableCreateArgs_ = {
  data: EnvironmentVariableCreateInput_;
};


export type MutationEnvironmentVariableCreateManyArgs_ = {
  data: Array<InputMaybe<EnvironmentVariableCreateManyInput_>>;
};


export type MutationEnvironmentVariableDeleteArgs_ = {
  data?: InputMaybe<EnvironmentVariableDeleteInput_>;
  filter?: InputMaybe<EnvironmentVariableKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableDeleteByFilterArgs_ = {
  filter: EnvironmentVariableFilter_;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableDestroyArgs_ = {
  filter?: InputMaybe<EnvironmentVariableKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableDestroyByFilterArgs_ = {
  filter: EnvironmentVariableFilter_;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableRestoreArgs_ = {
  id: Scalars['String']['input'];
};


export type MutationEnvironmentVariableUpdateArgs_ = {
  data: EnvironmentVariableUpdateInput_;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<EnvironmentVariableKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableUpdateByFilterArgs_ = {
  data: EnvironmentVariableUpdateByFilterInput_;
  filter?: InputMaybe<EnvironmentVariableFilter_>;
};


export type MutationFieldCreateArgs_ = {
  data: TableFieldCreateInput_;
};


export type MutationFieldDeleteArgs_ = {
  data: TableFieldDeleteInput_;
};


export type MutationFieldUpdateArgs_ = {
  data: TableFieldUpdateInput_;
};


export type MutationFieldUpdatePositionArgs_ = {
  data: TableFieldPositionUpdateInput_;
};


export type MutationFileCreateArgs_ = {
  data: FileCreateInput_;
};


export type MutationFileCreateManyArgs_ = {
  data: Array<InputMaybe<FileCreateManyInput_>>;
};


export type MutationFileDeleteArgs_ = {
  data?: InputMaybe<FileDeleteInput_>;
  filter?: InputMaybe<FileKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileDeleteByFilterArgs_ = {
  filter: FileFilter_;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileDestroyArgs_ = {
  filter?: InputMaybe<FileKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileDestroyByFilterArgs_ = {
  filter: FileFilter_;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileRestoreArgs_ = {
  id: Scalars['String']['input'];
};


export type MutationFileUpdateArgs_ = {
  data: FileUpdateInput_;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<FileKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileUpdateByFilterArgs_ = {
  data: FileUpdateByFilterInput_;
  filter?: InputMaybe<FileFilter_>;
};


export type MutationIndexCreateArgs_ = {
  data: IndexCreateInput_;
};


export type MutationIndexDeleteArgs_ = {
  data: IndexDeleteInput_;
};


export type MutationIndexUpdateArgs_ = {
  data: IndexUpdateInput_;
};


export type MutationInvokeArgs_ = {
  data?: InputMaybe<InvokeData_>;
};


export type MutationPromptCreateArgs_ = {
  data: PromptCreateInput_;
};


export type MutationPromptCreateManyArgs_ = {
  data: Array<InputMaybe<PromptCreateManyInput_>>;
};


export type MutationPromptDeleteArgs_ = {
  data?: InputMaybe<PromptDeleteInput_>;
  filter?: InputMaybe<PromptKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPromptDeleteByFilterArgs_ = {
  filter: PromptFilter_;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPromptDestroyArgs_ = {
  filter?: InputMaybe<PromptKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPromptDestroyByFilterArgs_ = {
  filter: PromptFilter_;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPromptRestoreArgs_ = {
  id: Scalars['String']['input'];
};


export type MutationPromptUpdateArgs_ = {
  data: PromptUpdateInput_;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PromptKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPromptUpdateByFilterArgs_ = {
  data: PromptUpdateByFilterInput_;
  filter?: InputMaybe<PromptFilter_>;
};


export type MutationRoleCreateArgs_ = {
  data: RoleCreateInput_;
};


export type MutationRoleCreateManyArgs_ = {
  data: Array<InputMaybe<RoleCreateManyInput_>>;
};


export type MutationRoleDeleteArgs_ = {
  data?: InputMaybe<RoleDeleteInput_>;
  filter?: InputMaybe<RoleKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleDeleteByFilterArgs_ = {
  filter: RoleFilter_;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleDestroyArgs_ = {
  filter?: InputMaybe<RoleKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleDestroyByFilterArgs_ = {
  filter: RoleFilter_;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleRestoreArgs_ = {
  id: Scalars['String']['input'];
};


export type MutationRoleUpdateArgs_ = {
  data: RoleUpdateInput_;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<RoleKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleUpdateByFilterArgs_ = {
  data: RoleUpdateByFilterInput_;
  filter?: InputMaybe<RoleFilter_>;
};


export type MutationSendInvitationTo8baseArgs_ = {
  inviteEmail: Scalars['String']['input'];
};


export type MutationSettingsUpdateArgs_ = {
  data: SettingUpdateInput_;
};


export type MutationTableCreateArgs_ = {
  data: TableCreateInput_;
};


export type MutationTableDeleteArgs_ = {
  data: TableDeleteInput_;
};


export type MutationTableUpdateArgs_ = {
  data: TableUpdateInput_;
};


export type MutationUserChangePasswordArgs_ = {
  data: ChangePasswordInput_;
};


export type MutationUserCreateArgs_ = {
  data: UserCreateInput_;
};


export type MutationUserCreateManyArgs_ = {
  data: Array<InputMaybe<UserCreateManyInput_>>;
};


export type MutationUserDeleteArgs_ = {
  data?: InputMaybe<UserDeleteInput_>;
  filter?: InputMaybe<UserKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserDeleteByFilterArgs_ = {
  filter: UserFilter_;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserDestroyArgs_ = {
  filter?: InputMaybe<UserKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserDestroyByFilterArgs_ = {
  filter: UserFilter_;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserLoginArgs_ = {
  data: UserLoginInput_;
};


export type MutationUserPasswordForgotArgs_ = {
  data: PasswordForgotInput_;
};


export type MutationUserPasswordForgotConfirmArgs_ = {
  data: PasswordForgotConfirmInput_;
};


export type MutationUserRefreshTokenArgs_ = {
  data: RefreshTokenInput_;
};


export type MutationUserRestoreArgs_ = {
  id: Scalars['String']['input'];
};


export type MutationUserSignUpArgs_ = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  user: UserCreateInput_;
};


export type MutationUserSignUpResendArgs_ = {
  data: SignUpResendInput_;
};


export type MutationUserSignUpWithPasswordArgs_ = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  password: Scalars['String']['input'];
  user: UserCreateInput_;
};


export type MutationUserSignUpWithTokenArgs_ = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  user: UserCreateInput_;
};


export type MutationUserUpdateArgs_ = {
  data: UserUpdateInput_;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserKeyFilter_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserUpdateByFilterArgs_ = {
  data: UserUpdateByFilterInput_;
  filter?: InputMaybe<UserFilter_>;
};


export type MutationUserVerificationEmailResendArgs_ = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  data: VerificationEmailResendInput_;
};


export type MutationViewCreateArgs_ = {
  data: ViewCreateInput_;
};


export type MutationViewUpdateArgs_ = {
  data: ViewUpdateInput_;
};


export type MutationWorkspaceCreateArgs_ = {
  data: WorkspaceCreateMutationInput_;
};


export type MutationWorkspaceCreateAsyncArgs_ = {
  data: WorkspaceCreateMutationInput_;
};


export type MutationWorkspaceDeleteArgs_ = {
  data: WorkspaceDeleteMutationInput_;
};


export type MutationWorkspaceLeaveArgs_ = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationWorkspaceUpdateArgs_ = {
  data: WorkspaceUpdateMutationInput_;
};

export enum MutationType_ {
  Create_ = 'create',
  Delete_ = 'delete',
  Destroy_ = 'destroy',
  Update_ = 'update'
}

export enum NotificationStatusType_ {
  Done_ = 'done'
}

/** Number Field Attributes */
export type NumberFieldTypeAttributes_ = {
  __typename?: 'NumberFieldTypeAttributes';
  autoIncrement?: Maybe<Scalars['Boolean']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  format: Scalars['String']['output'];
  isBigInt?: Maybe<Scalars['Boolean']['output']>;
  maxValue?: Maybe<Scalars['Float']['output']>;
  minValue?: Maybe<Scalars['Float']['output']>;
  precision?: Maybe<Scalars['Int']['output']>;
};

/** Number Type Format Enum */
export enum NumberTypeFormatEnum_ {
  Currency_ = 'CURRENCY',
  Fraction_ = 'FRACTION',
  Number_ = 'NUMBER',
  Percentage_ = 'PERCENTAGE',
  Scientific_ = 'SCIENTIFIC'
}

export type OrganizationUserInvitationResponse_ = {
  __typename?: 'OrganizationUserInvitationResponse';
  invitationId: Scalars['String']['output'];
};

/** PasswordForgotConfirmInput */
export type PasswordForgotConfirmInput_ = {
  authProfileId: Scalars['ID']['input'];
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

/** PasswordForgotInput */
export type PasswordForgotInput_ = {
  authProfileId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
};

export type PatternFunctionArguments_ = {
  escape?: InputMaybe<Scalars['String']['input']>;
  pattern: Scalars['String']['input'];
};

export type Permission_ = {
  __typename?: 'Permission';
  _description?: Maybe<Scalars['String']['output']>;
  appId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User_>;
  permission?: Maybe<Scalars['JSON']['output']>;
  resource?: Maybe<Scalars['String']['output']>;
  resourceType?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role_>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PermissionFilter_ = {
  AND?: InputMaybe<Array<PermissionFilter_>>;
  OR?: InputMaybe<Array<PermissionFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  appId?: InputMaybe<StringPredicate_>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<UserFilter_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  resource?: InputMaybe<StringPredicate_>;
  resourceType?: InputMaybe<StringPredicate_>;
  role?: InputMaybe<RoleFilter_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
};

export type PermissionGroupByQuery_ = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField_>>;
  appId?: InputMaybe<Array<GroupByField_>>;
  createdAt?: InputMaybe<Array<GroupByField_>>;
  createdBy?: InputMaybe<UserGroupByQuery_>;
  permission?: InputMaybe<Array<GroupByField_>>;
  resource?: InputMaybe<Array<GroupByField_>>;
  resourceType?: InputMaybe<Array<GroupByField_>>;
  role?: InputMaybe<RoleGroupByQuery_>;
  updatedAt?: InputMaybe<Array<GroupByField_>>;
};

/** Permission Filter */
export type PermissionInputFilter_ = {
  action?: InputMaybe<Scalars['String']['input']>;
  applicationName?: InputMaybe<Scalars['String']['input']>;
  resource?: InputMaybe<Scalars['String']['input']>;
  resourceType?: InputMaybe<PermissionResourceTypeEnum_>;
};

/** PermissionListResponse output */
export type PermissionListResponse_ = {
  __typename?: 'PermissionListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse_>;
  /** List items */
  items: Array<Permission_>;
};

/** Permissions subscription payload */
export type PermissionPayload_ = {
  __typename?: 'PermissionPayload';
  mutation: MutationType_;
  node?: Maybe<Permission_>;
  previousValues?: Maybe<Permission_>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PermissionRelationFilter_ = {
  every?: InputMaybe<PermissionFilter_>;
  none?: InputMaybe<PermissionFilter_>;
  some?: InputMaybe<PermissionFilter_>;
};

export enum PermissionResourceTypeEnum_ {
  Custom_ = 'custom',
  Data_ = 'data'
}

/** Permissions subscription filter */
export type PermissionSubscriptionFilter_ = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType_>>>;
  node?: InputMaybe<PermissionFilter_>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter_>;
};

export type Permission_PermissionFilter_ = {
  AND?: InputMaybe<Array<Permission_PermissionFilter_>>;
  OR?: InputMaybe<Array<Permission_PermissionFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  appId?: InputMaybe<StringPredicate_>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<User_PermissionFilter_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  resource?: InputMaybe<StringPredicate_>;
  resourceType?: InputMaybe<StringPredicate_>;
  role?: InputMaybe<Role_PermissionFilter_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
};

export type Permission_PermissionRelationFilter_ = {
  every?: InputMaybe<Permission_PermissionFilter_>;
  none?: InputMaybe<Permission_PermissionFilter_>;
  some?: InputMaybe<Permission_PermissionFilter_>;
};

/** custom permissions input */
export type PermissionsCustom_ = {
  data?: InputMaybe<PermissionsCustomData_>;
  logic?: InputMaybe<PermissionsCustomLogic_>;
  settings?: InputMaybe<PermissionsCustomSettings_>;
  users?: InputMaybe<PermissionsCustomUsers_>;
};

export type PermissionsCustomData_ = {
  schemaManagement?: InputMaybe<PermissionsCustomDataSchemaManagement_>;
  viewerAccess?: InputMaybe<PermissionsCustomDataViewerAccess_>;
};

export type PermissionsCustomDataSchemaManagement_ = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomDataViewerAccess_ = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomLogic_ = {
  deploy?: InputMaybe<PermissionsCustomLogicDeploy_>;
  invoke?: InputMaybe<PermissionsCustomLogicInvoke_>;
  logs?: InputMaybe<PermissionsCustomLogicLogs_>;
  view?: InputMaybe<PermissionsCustomLogicView_>;
};

export type PermissionsCustomLogicDeploy_ = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomLogicInvoke_ = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomLogicLogs_ = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomLogicView_ = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomSettings_ = {
  workspaceAdministration?: InputMaybe<PermissionsCustomSettingsWorkspaceAdministration_>;
};

export type PermissionsCustomSettingsWorkspaceAdministration_ = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomUsers_ = {
  teamAdministration?: InputMaybe<PermissionsCustomUsersTeamAdministration_>;
};

export type PermissionsCustomUsersTeamAdministration_ = {
  allow: Scalars['Boolean']['input'];
};

/** Schema tables permissions input */
export type PermissionsData_ = {
  Content?: InputMaybe<PermissionsDataContent_>;
  ContentText?: InputMaybe<PermissionsDataContentText_>;
  Files?: InputMaybe<PermissionsDataFiles_>;
  Prompts?: InputMaybe<PermissionsDataPrompts_>;
  Roles?: InputMaybe<PermissionsDataRoles_>;
  Users?: InputMaybe<PermissionsDataUsers_>;
};

export type PermissionsDataContent_ = {
  create?: InputMaybe<PermissionsDataContentCreate_>;
  delete?: InputMaybe<PermissionsDataContentDelete_>;
  destroy?: InputMaybe<PermissionsDataContentDestroy_>;
  read?: InputMaybe<PermissionsDataContentRead_>;
  update?: InputMaybe<PermissionsDataContentUpdate_>;
};

export type PermissionsDataContentCreate_ = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataContentDelete_ = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataContentDestroy_ = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataContentRead_ = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<ContentFieldsPermissions_>;
  filter?: InputMaybe<Content_PermissionFilter_>;
};

export type PermissionsDataContentText_ = {
  create?: InputMaybe<PermissionsDataContentTextCreate_>;
  delete?: InputMaybe<PermissionsDataContentTextDelete_>;
  destroy?: InputMaybe<PermissionsDataContentTextDestroy_>;
  read?: InputMaybe<PermissionsDataContentTextRead_>;
  update?: InputMaybe<PermissionsDataContentTextUpdate_>;
};

export type PermissionsDataContentTextCreate_ = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataContentTextDelete_ = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataContentTextDestroy_ = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataContentTextRead_ = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<ContentTextFieldsPermissions_>;
  filter?: InputMaybe<ContentText_PermissionFilter_>;
};

export type PermissionsDataContentTextUpdate_ = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<ContentTextFieldsPermissions_>;
  filter?: InputMaybe<ContentText_PermissionFilter_>;
};

export type PermissionsDataContentUpdate_ = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<ContentFieldsPermissions_>;
  filter?: InputMaybe<Content_PermissionFilter_>;
};

export type PermissionsDataFiles_ = {
  create?: InputMaybe<PermissionsDataFilesCreate_>;
  delete?: InputMaybe<PermissionsDataFilesDelete_>;
  destroy?: InputMaybe<PermissionsDataFilesDestroy_>;
  read?: InputMaybe<PermissionsDataFilesRead_>;
  update?: InputMaybe<PermissionsDataFilesUpdate_>;
};

export type PermissionsDataFilesCreate_ = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataFilesDelete_ = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataFilesDestroy_ = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataFilesRead_ = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<FileFieldsPermissions_>;
  filter?: InputMaybe<File_PermissionFilter_>;
};

export type PermissionsDataFilesUpdate_ = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<FileFieldsPermissions_>;
  filter?: InputMaybe<File_PermissionFilter_>;
};

export type PermissionsDataPrompts_ = {
  create?: InputMaybe<PermissionsDataPromptsCreate_>;
  delete?: InputMaybe<PermissionsDataPromptsDelete_>;
  destroy?: InputMaybe<PermissionsDataPromptsDestroy_>;
  read?: InputMaybe<PermissionsDataPromptsRead_>;
  update?: InputMaybe<PermissionsDataPromptsUpdate_>;
};

export type PermissionsDataPromptsCreate_ = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataPromptsDelete_ = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataPromptsDestroy_ = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataPromptsRead_ = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<PromptFieldsPermissions_>;
  filter?: InputMaybe<Prompt_PermissionFilter_>;
};

export type PermissionsDataPromptsUpdate_ = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<PromptFieldsPermissions_>;
  filter?: InputMaybe<Prompt_PermissionFilter_>;
};

export type PermissionsDataRoles_ = {
  create?: InputMaybe<PermissionsDataRolesCreate_>;
  delete?: InputMaybe<PermissionsDataRolesDelete_>;
  destroy?: InputMaybe<PermissionsDataRolesDestroy_>;
  read?: InputMaybe<PermissionsDataRolesRead_>;
  update?: InputMaybe<PermissionsDataRolesUpdate_>;
};

export type PermissionsDataRolesCreate_ = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataRolesDelete_ = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataRolesDestroy_ = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataRolesRead_ = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<RoleFieldsPermissions_>;
  filter?: InputMaybe<Role_PermissionFilter_>;
};

export type PermissionsDataRolesUpdate_ = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<RoleFieldsPermissions_>;
  filter?: InputMaybe<Role_PermissionFilter_>;
};

export type PermissionsDataUsers_ = {
  create?: InputMaybe<PermissionsDataUsersCreate_>;
  delete?: InputMaybe<PermissionsDataUsersDelete_>;
  destroy?: InputMaybe<PermissionsDataUsersDestroy_>;
  read?: InputMaybe<PermissionsDataUsersRead_>;
  update?: InputMaybe<PermissionsDataUsersUpdate_>;
};

export type PermissionsDataUsersCreate_ = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataUsersDelete_ = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataUsersDestroy_ = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataUsersRead_ = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<UserFieldsPermissions_>;
  filter?: InputMaybe<User_PermissionFilter_>;
};

export type PermissionsDataUsersUpdate_ = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<UserFieldsPermissions_>;
  filter?: InputMaybe<User_PermissionFilter_>;
};

/** PermissionsInput create input */
export type PermissionsInput_ = {
  custom?: InputMaybe<PermissionsCustom_>;
  data?: InputMaybe<PermissionsData_>;
};

export type ProjectItemWs_ = {
  __typename?: 'ProjectItemWS';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<WorkspaceImage_>;
  name: Scalars['String']['output'];
  region?: Maybe<Scalars['String']['output']>;
};

export type Prompt_ = {
  __typename?: 'Prompt';
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User_>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  prompt?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User_>;
};

/** Prompts create input */
export type PromptCreateInput_ = {
  prompt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PromptsUserRelationInput_>;
};

/** Prompts create many input */
export type PromptCreateManyInput_ = {
  prompt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PromptsUserManyRelationInput_>;
};

/** Prompts delete input */
export type PromptDeleteInput_ = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** PromptFieldsPermissions create input */
export type PromptFieldsPermissions_ = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  prompt?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PromptFilter_ = {
  AND?: InputMaybe<Array<PromptFilter_>>;
  OR?: InputMaybe<Array<PromptFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<UserFilter_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  id?: InputMaybe<IdPredicate_>;
  prompt?: InputMaybe<StringPredicate_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
  user?: InputMaybe<UserFilter_>;
};

export type PromptGroupBy_ = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: PromptGroupByQuery_;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort_>>;
};

export type PromptGroupByQuery_ = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField_>>;
  createdAt?: InputMaybe<Array<GroupByField_>>;
  createdBy?: InputMaybe<UserGroupByQuery_>;
  id?: InputMaybe<Array<GroupByField_>>;
  prompt?: InputMaybe<Array<GroupByField_>>;
  updatedAt?: InputMaybe<Array<GroupByField_>>;
  user?: InputMaybe<UserGroupByQuery_>;
};

export type PromptKeyFilter_ = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** PromptListResponse output */
export type PromptListResponse_ = {
  __typename?: 'PromptListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse_>;
  /** List items */
  items: Array<Prompt_>;
};

/** PromptManyResponse output */
export type PromptManyResponse_ = {
  __typename?: 'PromptManyResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Prompt_>;
};

/** No longer supported. Use `sort` instead. */
export enum PromptOrderBy_ {
  CreatedAtAsc_ = 'createdAt_ASC',
  CreatedAtDesc_ = 'createdAt_DESC',
  DeletedAtAsc_ = 'deletedAt_ASC',
  DeletedAtDesc_ = 'deletedAt_DESC',
  IdAsc_ = 'id_ASC',
  IdDesc_ = 'id_DESC',
  PromptAsc_ = 'prompt_ASC',
  PromptDesc_ = 'prompt_DESC',
  UpdatedAtAsc_ = 'updatedAt_ASC',
  UpdatedAtDesc_ = 'updatedAt_DESC'
}

/** Prompts subscription payload */
export type PromptPayload_ = {
  __typename?: 'PromptPayload';
  mutation: MutationType_;
  node?: Maybe<Prompt_>;
  previousValues?: Maybe<Prompt_>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PromptSort_ = {
  createdAt?: InputMaybe<SortOrder_>;
  createdBy?: InputMaybe<UserSort_>;
  deletedAt?: InputMaybe<SortOrder_>;
  id?: InputMaybe<SortOrder_>;
  prompt?: InputMaybe<SortOrder_>;
  updatedAt?: InputMaybe<SortOrder_>;
  user?: InputMaybe<UserSort_>;
};

/** Prompts subscription filter */
export type PromptSubscriptionFilter_ = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType_>>>;
  node?: InputMaybe<PromptFilter_>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter_>;
};

/** Prompts update input */
export type PromptUpdateByFilterInput_ = {
  prompt?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
};

/** Prompts update input */
export type PromptUpdateInput_ = {
  id?: InputMaybe<Scalars['ID']['input']>;
  prompt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PromptsUserUpdateRelationInput_>;
};

export type Prompt_PermissionFilter_ = {
  AND?: InputMaybe<Array<Prompt_PermissionFilter_>>;
  OR?: InputMaybe<Array<Prompt_PermissionFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<User_PermissionFilter_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  id?: InputMaybe<IdPredicate_>;
  prompt?: InputMaybe<StringPredicate_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
  user?: InputMaybe<User_PermissionFilter_>;
};

/** Prompts relation input */
export type PromptsUserManyRelationInput_ = {
  connect?: InputMaybe<UserKeyFilter_>;
};

/** Prompts relation input */
export type PromptsUserRelationInput_ = {
  connect?: InputMaybe<UserKeyFilter_>;
  create?: InputMaybe<Promts_UserCreateInput_>;
};

/** Prompts relation input */
export type PromptsUserUpdateRelationInput_ = {
  connect?: InputMaybe<UserKeyFilter_>;
  create?: InputMaybe<Promts_UserCreateInput_>;
  disconnect?: InputMaybe<UserKeyFilter_>;
  reconnect?: InputMaybe<UserKeyFilter_>;
  update?: InputMaybe<Promts_UserUpdateInput_>;
};

/** Users create input from promts */
export type Promts_UserCreateInput_ = {
  avatar?: InputMaybe<UsersAvatarRelationInput_>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  generatedText?: InputMaybe<UsersGeneratedTextRelationInput_>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  openApiKey?: InputMaybe<Scalars['String']['input']>;
  promts?: InputMaybe<UsersPromtsRelationInput_>;
  roles?: InputMaybe<UsersRolesRelationInput_>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users update input from promts */
export type Promts_UserUpdateInput_ = {
  avatar?: InputMaybe<UsersAvatarUpdateRelationInput_>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  generatedText?: InputMaybe<UsersGeneratedTextUpdateRelationInput_>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  openApiKey?: InputMaybe<Scalars['String']['input']>;
  promts?: InputMaybe<UsersPromtsUpdateRelationInput_>;
  roles?: InputMaybe<UsersRolesUpdateRelationInput_>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type Query_ = {
  __typename?: 'Query';
  apiToken?: Maybe<ApiToken_>;
  apiTokensList: ApiTokenListResponse_;
  /** @deprecated No longer supported. Use `system.application` instead. */
  application?: Maybe<Application_>;
  /** @deprecated No longer supported. Use `system.applicationsList` instead. */
  applicationsList?: Maybe<ApplicationListResponse_>;
  /** @deprecated No longer supported. Use `system.asyncSessionStatus` instead. */
  asyncSessionStatus?: Maybe<AsyncSessionStatusResponse_>;
  authenticationProfile?: Maybe<AuthenticationProfile_>;
  authenticationProfilesList: AuthenticationProfileListResponse_;
  authenticationSettings?: Maybe<AuthenticationSetting_>;
  /** @deprecated No longer supported. Use `system.billingCurrentPlan` instead. */
  billingCurrentPlan?: Maybe<BillingCurrentPlanResponse_>;
  /** @deprecated No longer supported. Use `system.memberPaymentDetails, system.organizationPaymentDetails or system.workspacePaymentDetails` instead. */
  billingDetails?: Maybe<BillingDetailsResponse_>;
  /** @deprecated No longer supported. Use `system.memberBillingHistory, system.organizationBillingHistory or system.workspaceBillingHistory` instead. */
  billingInvoicesList: BillingInvoicesListResponse_;
  /** @deprecated No longer supported. Use `system.billingMetricUsageQuotasList` instead. */
  billingMetricUsageQuotasList: BillingMetricUsageQuotasListResponse_;
  /** @deprecated No longer supported. Use `system.billingMetricUsagesList` instead. */
  billingMetricUsagesList: BillingMetricUsagesListResponse_;
  companyName?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Content_>;
  contentText?: Maybe<ContentText_>;
  contentTextsList: ContentTextListResponse_;
  contentsList: ContentListResponse_;
  /** @deprecated No longer supported. Use `system.deployStatus` instead. */
  deployStatus: DeployStatusResult_;
  environmentVariable?: Maybe<EnvironmentVariable_>;
  environmentVariablesList: EnvironmentVariableListResponse_;
  file?: Maybe<File_>;
  /** @deprecated No longer supported. Use `fileUploadSignInfo` instead. */
  fileUploadInfo?: Maybe<FileUploadInfoResponse_>;
  filesList: FileListResponse_;
  /** @deprecated No longer supported. Use `system.functionsList` instead. */
  functionsList?: Maybe<FunctionListResponse_>;
  isAllowedCallbackURL?: Maybe<IsAllowedCallbackUrlQueryResponse_>;
  /** @deprecated No longer supported. Use `system.logsList` instead. */
  logs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  prompt?: Maybe<Prompt_>;
  promptsList: PromptListResponse_;
  role?: Maybe<Role_>;
  rolesList: RoleListResponse_;
  settings?: Maybe<Setting_>;
  system?: Maybe<SystemQuery_>;
  /** @deprecated No longer supported. Use `system.table` instead. */
  table?: Maybe<Table_>;
  /** @deprecated No longer supported. Use `system.tableField` instead. */
  tableField?: Maybe<TableField_>;
  /** @deprecated No longer supported. Use `system.tablesList` instead. */
  tablesList: TableListResponse_;
  user?: Maybe<User_>;
  userBillingConfiguration: UserBillingConfigurationResponse_;
  /** @deprecated No longer supported. Use `system.userInvitationsList` instead. */
  userInvitationsList?: Maybe<UserInvitationList_>;
  usersList: UserListResponse_;
  viewDryRun?: Maybe<ViewDryRunOutput_>;
  /** @deprecated No longer supported. Use `system.workspacesList` instead. */
  workspacesList?: Maybe<WorkspaceListResponse_>;
};


export type QueryApiTokenArgs_ = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryApiTokensListArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ApiTokenFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ApiTokenGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ApiTokenOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ApiTokenSort_>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryApplicationArgs_ = {
  id: Scalars['String']['input'];
};


export type QueryAsyncSessionStatusArgs_ = {
  sessionId: Scalars['String']['input'];
};


export type QueryAuthenticationProfileArgs_ = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAuthenticationProfilesListArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthenticationProfileFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<AuthenticationProfileGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthenticationProfileOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AuthenticationProfileSort_>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBillingCurrentPlanArgs_ = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBillingInvoicesListArgs_ = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  by?: InputMaybe<BillingInvoicesListFilterType_>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBillingMetricUsageQuotasListArgs_ = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBillingMetricUsagesListArgs_ = {
  filter?: InputMaybe<BillingMetricUsagesListFilter_>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContentArgs_ = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContentTextArgs_ = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContentTextsListArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ContentTextFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ContentTextGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentTextOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ContentTextSort_>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContentsListArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ContentFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ContentGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ContentSort_>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDeployStatusArgs_ = {
  buildName: Scalars['String']['input'];
};


export type QueryEnvironmentVariableArgs_ = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEnvironmentVariablesListArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EnvironmentVariableFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<EnvironmentVariableGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<EnvironmentVariableOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EnvironmentVariableSort_>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFileArgs_ = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFilesListArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FileFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<FileGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<FileOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FileSort_>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFunctionsListArgs_ = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FunctionInfoFilter_>;
  orderBy?: InputMaybe<Array<InputMaybe<FunctionInfoOrderBy_>>>;
};


export type QueryIsAllowedCallbackUrlArgs_ = {
  callbackURL: Scalars['String']['input'];
};


export type QueryLogsArgs_ = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  functionName: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryPromptArgs_ = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPromptsListArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PromptFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<PromptGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<PromptOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PromptSort_>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRoleArgs_ = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRolesListArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort_>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTableArgs_ = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTableFieldArgs_ = {
  id: Scalars['ID']['input'];
};


export type QueryTablesListArgs_ = {
  filter?: InputMaybe<TableListFilter_>;
};


export type QueryUserArgs_ = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  openApiKey?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUserBillingConfigurationArgs_ = {
  filterPlanProjects?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUsersListArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<UserGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort_>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryViewDryRunArgs_ = {
  sql: Scalars['String']['input'];
};

/** RefreshTokenInput */
export type RefreshTokenInput_ = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  refreshToken: Scalars['String']['input'];
};

/** Relation */
export type Relation_ = {
  __typename?: 'Relation';
  refField?: Maybe<TableField_>;
  refFieldDisplayName?: Maybe<Scalars['String']['output']>;
  refFieldIsList?: Maybe<Scalars['Boolean']['output']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']['output']>;
  refFieldName?: Maybe<Scalars['String']['output']>;
  refTable: Table_;
  relationFieldName?: Maybe<Scalars['String']['output']>;
  relationTableName?: Maybe<Scalars['String']['output']>;
};

/** Relation Create Input */
export type RelationCreateInput_ = {
  refFieldDisplayName?: InputMaybe<Scalars['String']['input']>;
  refFieldIsList: Scalars['Boolean']['input'];
  refFieldIsRequired: Scalars['Boolean']['input'];
  refFieldName?: InputMaybe<Scalars['String']['input']>;
  refTableId: Scalars['ID']['input'];
};

/** Relation Update Input */
export type RelationUpdateInput_ = {
  refFieldDisplayName?: InputMaybe<Scalars['String']['input']>;
  refFieldIsList?: InputMaybe<Scalars['Boolean']['input']>;
  refFieldIsRequired?: InputMaybe<Scalars['Boolean']['input']>;
  refFieldName?: InputMaybe<Scalars['String']['input']>;
  refTableId?: InputMaybe<Scalars['ID']['input']>;
};

/** Relative Date Predicate Operation Enum */
export enum RelativePredicateOpEnum_ {
  Add_ = 'ADD',
  Sub_ = 'SUB'
}

/** Relative Date Predicate Unit Enum */
export enum RelativePredicateUnitEnum_ {
  Day_ = 'DAY',
  DayHour_ = 'DAY_HOUR',
  DayMicrosecond_ = 'DAY_MICROSECOND',
  DayMinute_ = 'DAY_MINUTE',
  DaySecond_ = 'DAY_SECOND',
  Hour_ = 'HOUR',
  HourMicrosecond_ = 'HOUR_MICROSECOND',
  HourMinute_ = 'HOUR_MINUTE',
  HourSecond_ = 'HOUR_SECOND',
  Microsecond_ = 'MICROSECOND',
  Minute_ = 'MINUTE',
  MinuteMicrosecond_ = 'MINUTE_MICROSECOND',
  MinuteSecond_ = 'MINUTE_SECOND',
  Month_ = 'MONTH',
  Quarter_ = 'QUARTER',
  Second_ = 'SECOND',
  SecondMicrosecond_ = 'SECOND_MICROSECOND',
  Week_ = 'WEEK',
  Year_ = 'YEAR',
  YearMonth_ = 'YEAR_MONTH'
}

export type ReplaceFunctionArguments_ = {
  from: Scalars['String']['input'];
  to: Scalars['String']['input'];
};

export type ResizeImageDirectiveCropOptions_ = {
  height: Scalars['Int']['input'];
  offsetX?: InputMaybe<Scalars['Int']['input']>;
  offsetY?: InputMaybe<Scalars['Int']['input']>;
  width: Scalars['Int']['input'];
};

export type ResizeImageDirectiveFlipOptions_ = {
  horizontally?: InputMaybe<Scalars['Boolean']['input']>;
  vertically?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ResizeImageDirectiveResizeOptions_ = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type Role_ = {
  __typename?: 'Role';
  _description?: Maybe<Scalars['String']['output']>;
  apiTokens?: Maybe<ApiTokenListResponse_>;
  authenticationProfiles?: Maybe<AuthenticationProfileListResponse_>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User_>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  membersCount: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<PermissionListResponse_>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UserListResponse_>;
};


export type RoleApiTokensArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ApiTokenFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ApiTokenGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ApiTokenOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ApiTokenSort_>>;
};


export type RoleAuthenticationProfilesArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthenticationProfileFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<AuthenticationProfileGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthenticationProfileOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AuthenticationProfileSort_>>;
};


export type RolePermissionsArgs_ = {
  filter?: InputMaybe<PermissionInputFilter_>;
};


export type RoleUsersArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<UserGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort_>>;
};

/** Roles create input */
export type RoleCreateInput_ = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput_>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput_>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionsInput_>;
  users?: InputMaybe<RolesUsersRelationInput_>;
};

/** Roles create many input */
export type RoleCreateManyInput_ = {
  apiTokens?: InputMaybe<RolesApiTokensManyRelationInput_>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesManyRelationInput_>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  users?: InputMaybe<RolesUsersManyRelationInput_>;
};

/** Roles delete input */
export type RoleDeleteInput_ = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** RoleFieldsPermissions create input */
export type RoleFieldsPermissions_ = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RoleFilter_ = {
  AND?: InputMaybe<Array<RoleFilter_>>;
  OR?: InputMaybe<Array<RoleFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  apiTokens?: InputMaybe<ApiTokenRelationFilter_>;
  authenticationProfiles?: InputMaybe<AuthenticationProfileRelationFilter_>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<UserFilter_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  description?: InputMaybe<StringPredicate_>;
  id?: InputMaybe<IdPredicate_>;
  name?: InputMaybe<StringPredicate_>;
  permissions?: InputMaybe<PermissionRelationFilter_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
  users?: InputMaybe<UserRelationFilter_>;
};

export type RoleGroupBy_ = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: RoleGroupByQuery_;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort_>>;
};

export type RoleGroupByQuery_ = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField_>>;
  apiTokens?: InputMaybe<ApiTokenGroupByQuery_>;
  authenticationProfiles?: InputMaybe<AuthenticationProfileGroupByQuery_>;
  createdAt?: InputMaybe<Array<GroupByField_>>;
  createdBy?: InputMaybe<UserGroupByQuery_>;
  description?: InputMaybe<Array<GroupByField_>>;
  id?: InputMaybe<Array<GroupByField_>>;
  name?: InputMaybe<Array<GroupByField_>>;
  permissions?: InputMaybe<PermissionGroupByQuery_>;
  updatedAt?: InputMaybe<Array<GroupByField_>>;
  users?: InputMaybe<UserGroupByQuery_>;
};

export type RoleKeyFilter_ = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** RoleListResponse output */
export type RoleListResponse_ = {
  __typename?: 'RoleListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse_>;
  /** List items */
  items: Array<Role_>;
};

/** RoleManyResponse output */
export type RoleManyResponse_ = {
  __typename?: 'RoleManyResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Role_>;
};

/** No longer supported. Use `sort` instead. */
export enum RoleOrderBy_ {
  CreatedAtAsc_ = 'createdAt_ASC',
  CreatedAtDesc_ = 'createdAt_DESC',
  DeletedAtAsc_ = 'deletedAt_ASC',
  DeletedAtDesc_ = 'deletedAt_DESC',
  DescriptionAsc_ = 'description_ASC',
  DescriptionDesc_ = 'description_DESC',
  IdAsc_ = 'id_ASC',
  IdDesc_ = 'id_DESC',
  NameAsc_ = 'name_ASC',
  NameDesc_ = 'name_DESC',
  SystemTypeAsc_ = 'systemType_ASC',
  SystemTypeDesc_ = 'systemType_DESC',
  UpdatedAtAsc_ = 'updatedAt_ASC',
  UpdatedAtDesc_ = 'updatedAt_DESC'
}

/** Roles subscription payload */
export type RolePayload_ = {
  __typename?: 'RolePayload';
  mutation: MutationType_;
  node?: Maybe<Role_>;
  previousValues?: Maybe<Role_>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type RoleRelationFilter_ = {
  every?: InputMaybe<RoleFilter_>;
  none?: InputMaybe<RoleFilter_>;
  some?: InputMaybe<RoleFilter_>;
};

export type RoleSort_ = {
  createdAt?: InputMaybe<SortOrder_>;
  createdBy?: InputMaybe<UserSort_>;
  deletedAt?: InputMaybe<SortOrder_>;
  description?: InputMaybe<SortOrder_>;
  id?: InputMaybe<SortOrder_>;
  name?: InputMaybe<SortOrder_>;
  updatedAt?: InputMaybe<SortOrder_>;
};

/** Roles subscription filter */
export type RoleSubscriptionFilter_ = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType_>>>;
  node?: InputMaybe<RoleFilter_>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter_>;
};

/** Roles update input */
export type RoleUpdateByFilterInput_ = {
  description?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
  systemType?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
};

/** Roles update input */
export type RoleUpdateInput_ = {
  apiTokens?: InputMaybe<RolesApiTokensUpdateRelationInput_>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesUpdateRelationInput_>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<PermissionsInput_>;
  users?: InputMaybe<RolesUsersUpdateRelationInput_>;
};

export type Role_PermissionFilter_ = {
  AND?: InputMaybe<Array<Role_PermissionFilter_>>;
  OR?: InputMaybe<Array<Role_PermissionFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  apiTokens?: InputMaybe<ApiToken_PermissionRelationFilter_>;
  authenticationProfiles?: InputMaybe<AuthenticationProfile_PermissionRelationFilter_>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<User_PermissionFilter_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  description?: InputMaybe<StringPredicate_>;
  id?: InputMaybe<IdPredicate_>;
  name?: InputMaybe<StringPredicate_>;
  permissions?: InputMaybe<Permission_PermissionRelationFilter_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
  users?: InputMaybe<User_PermissionRelationFilter_>;
};

export type Role_PermissionRelationFilter_ = {
  every?: InputMaybe<Role_PermissionFilter_>;
  none?: InputMaybe<Role_PermissionFilter_>;
  some?: InputMaybe<Role_PermissionFilter_>;
};

/** Roles relation input */
export type RolesApiTokensManyRelationInput_ = {
  connect?: InputMaybe<Array<ApiTokenKeyFilter_>>;
};

/** Roles relation input */
export type RolesApiTokensRelationInput_ = {
  connect?: InputMaybe<Array<ApiTokenKeyFilter_>>;
};

/** Roles relation input */
export type RolesApiTokensUpdateRelationInput_ = {
  connect?: InputMaybe<Array<ApiTokenKeyFilter_>>;
  disconnect?: InputMaybe<Array<ApiTokenKeyFilter_>>;
  reconnect?: InputMaybe<Array<ApiTokenKeyFilter_>>;
  update?: InputMaybe<Array<InputMaybe<Roles_ApiTokenUpdateInput_>>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesManyRelationInput_ = {
  connect?: InputMaybe<Array<AuthenticationProfileKeyFilter_>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesRelationInput_ = {
  connect?: InputMaybe<Array<AuthenticationProfileKeyFilter_>>;
  create?: InputMaybe<Array<InputMaybe<Roles_AuthenticationProfileCreateInput_>>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesUpdateRelationInput_ = {
  connect?: InputMaybe<Array<AuthenticationProfileKeyFilter_>>;
  create?: InputMaybe<Array<InputMaybe<Roles_AuthenticationProfileCreateInput_>>>;
  disconnect?: InputMaybe<Array<AuthenticationProfileKeyFilter_>>;
  reconnect?: InputMaybe<Array<AuthenticationProfileKeyFilter_>>;
  update?: InputMaybe<Array<InputMaybe<Roles_AuthenticationProfileUpdateInput_>>>;
};

/** Roles relation input */
export type RolesUsersManyRelationInput_ = {
  connect?: InputMaybe<Array<UserKeyFilter_>>;
};

/** Roles relation input */
export type RolesUsersRelationInput_ = {
  connect?: InputMaybe<Array<UserKeyFilter_>>;
  create?: InputMaybe<Array<InputMaybe<Roles_UserCreateInput_>>>;
};

/** Roles relation input */
export type RolesUsersUpdateRelationInput_ = {
  connect?: InputMaybe<Array<UserKeyFilter_>>;
  create?: InputMaybe<Array<InputMaybe<Roles_UserCreateInput_>>>;
  disconnect?: InputMaybe<Array<UserKeyFilter_>>;
  reconnect?: InputMaybe<Array<UserKeyFilter_>>;
  update?: InputMaybe<Array<InputMaybe<Roles_UserUpdateInput_>>>;
};

/** ApiTokens update input from roles */
export type Roles_ApiTokenUpdateInput_ = {
  data: ApiTokenUpdateInput_;
  filter?: InputMaybe<ApiTokenKeyFilter_>;
};

/** AuthenticationProfiles create input from roles */
export type Roles_AuthenticationProfileCreateInput_ = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  managementDomain?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  roles?: InputMaybe<AuthenticationProfilesRolesRelationInput_>;
  secret?: InputMaybe<Scalars['String']['input']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** AuthenticationProfiles update input from roles */
export type Roles_AuthenticationProfileUpdateInput_ = {
  data: AuthenticationProfileUpdateInput_;
  filter?: InputMaybe<AuthenticationProfileKeyFilter_>;
};

/** Users create input from roles */
export type Roles_UserCreateInput_ = {
  avatar?: InputMaybe<UsersAvatarRelationInput_>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  generatedText?: InputMaybe<UsersGeneratedTextRelationInput_>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  openApiKey?: InputMaybe<Scalars['String']['input']>;
  promts?: InputMaybe<UsersPromtsRelationInput_>;
  roles?: InputMaybe<UsersRolesRelationInput_>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users update input from roles */
export type Roles_UserUpdateInput_ = {
  data: UserUpdateInput_;
  filter?: InputMaybe<UserKeyFilter_>;
};

/** Schema Origin */
export type SchemaOrigin_ = {
  __typename?: 'SchemaOrigin';
  provider?: Maybe<Scalars['String']['output']>;
  type: SchemaOriginType_;
};

/** Schema Origin Type Enum */
export enum SchemaOriginType_ {
  Local_ = 'LOCAL',
  Remote_ = 'REMOTE',
  View_ = 'VIEW'
}

export type Setting_ = {
  __typename?: 'Setting';
  _description?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  buttonLinkColor?: Maybe<Scalars['String']['output']>;
  containerColor?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User_>;
  currency?: Maybe<Scalars['String']['output']>;
  dateFormat?: Maybe<Scalars['String']['output']>;
  landingPageImage?: Maybe<File_>;
  language?: Maybe<Scalars['String']['output']>;
  leftNavColor?: Maybe<Scalars['String']['output']>;
  menuBarBGColor?: Maybe<Scalars['String']['output']>;
  menuBarIconsColor?: Maybe<Scalars['String']['output']>;
  menuBarLogo?: Maybe<File_>;
  passwordMinLength?: Maybe<Scalars['Int']['output']>;
  passwordRequireLowercase?: Maybe<Scalars['Boolean']['output']>;
  passwordRequireNumbers?: Maybe<Scalars['Boolean']['output']>;
  passwordRequireSpecial?: Maybe<Scalars['Boolean']['output']>;
  passwordRequireUppercase?: Maybe<Scalars['Boolean']['output']>;
  passwordUpdateInterval?: Maybe<Scalars['Int']['output']>;
  rememberDevice?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userInterfaceStyle?: Maybe<Scalars['String']['output']>;
  vanityUrl?: Maybe<Scalars['String']['output']>;
};

export type SettingFilter_ = {
  AND?: InputMaybe<Array<SettingFilter_>>;
  OR?: InputMaybe<Array<SettingFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  bgColor?: InputMaybe<StringPredicate_>;
  buttonLinkColor?: InputMaybe<StringPredicate_>;
  containerColor?: InputMaybe<StringPredicate_>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<UserFilter_>;
  currency?: InputMaybe<StringPredicate_>;
  dateFormat?: InputMaybe<StringPredicate_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  landingPageImage?: InputMaybe<FileFilter_>;
  language?: InputMaybe<StringPredicate_>;
  leftNavColor?: InputMaybe<StringPredicate_>;
  menuBarBGColor?: InputMaybe<StringPredicate_>;
  menuBarIconsColor?: InputMaybe<StringPredicate_>;
  menuBarLogo?: InputMaybe<FileFilter_>;
  passwordMinLength?: InputMaybe<IntPredicate_>;
  passwordRequireLowercase?: InputMaybe<BoolPredicate_>;
  passwordRequireNumbers?: InputMaybe<BoolPredicate_>;
  passwordRequireSpecial?: InputMaybe<BoolPredicate_>;
  passwordRequireUppercase?: InputMaybe<BoolPredicate_>;
  passwordUpdateInterval?: InputMaybe<IntPredicate_>;
  rememberDevice?: InputMaybe<StringPredicate_>;
  timezone?: InputMaybe<StringPredicate_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
  userInterfaceStyle?: InputMaybe<StringPredicate_>;
  vanityUrl?: InputMaybe<StringPredicate_>;
};

export type SettingGroupBy_ = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: SettingGroupByQuery_;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort_>>;
};

export type SettingGroupByQuery_ = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField_>>;
  bgColor?: InputMaybe<Array<GroupByField_>>;
  buttonLinkColor?: InputMaybe<Array<GroupByField_>>;
  containerColor?: InputMaybe<Array<GroupByField_>>;
  createdAt?: InputMaybe<Array<GroupByField_>>;
  createdBy?: InputMaybe<UserGroupByQuery_>;
  currency?: InputMaybe<Array<GroupByField_>>;
  dateFormat?: InputMaybe<Array<GroupByField_>>;
  landingPageImage?: InputMaybe<FileGroupByQuery_>;
  language?: InputMaybe<Array<GroupByField_>>;
  leftNavColor?: InputMaybe<Array<GroupByField_>>;
  menuBarBGColor?: InputMaybe<Array<GroupByField_>>;
  menuBarIconsColor?: InputMaybe<Array<GroupByField_>>;
  menuBarLogo?: InputMaybe<FileGroupByQuery_>;
  passwordMinLength?: InputMaybe<Array<GroupByField_>>;
  passwordRequireLowercase?: InputMaybe<Array<GroupByField_>>;
  passwordRequireNumbers?: InputMaybe<Array<GroupByField_>>;
  passwordRequireSpecial?: InputMaybe<Array<GroupByField_>>;
  passwordRequireUppercase?: InputMaybe<Array<GroupByField_>>;
  passwordUpdateInterval?: InputMaybe<Array<GroupByField_>>;
  rememberDevice?: InputMaybe<Array<GroupByField_>>;
  timezone?: InputMaybe<Array<GroupByField_>>;
  updatedAt?: InputMaybe<Array<GroupByField_>>;
  userInterfaceStyle?: InputMaybe<Array<GroupByField_>>;
  vanityUrl?: InputMaybe<Array<GroupByField_>>;
};

/** SettingListResponse output */
export type SettingListResponse_ = {
  __typename?: 'SettingListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse_>;
  /** List items */
  items: Array<Setting_>;
};

/** No longer supported. Use `sort` instead. */
export enum SettingOrderBy_ {
  BgColorAsc_ = 'bgColor_ASC',
  BgColorDesc_ = 'bgColor_DESC',
  ButtonLinkColorAsc_ = 'buttonLinkColor_ASC',
  ButtonLinkColorDesc_ = 'buttonLinkColor_DESC',
  ContainerColorAsc_ = 'containerColor_ASC',
  ContainerColorDesc_ = 'containerColor_DESC',
  CreatedAtAsc_ = 'createdAt_ASC',
  CreatedAtDesc_ = 'createdAt_DESC',
  CurrencyAsc_ = 'currency_ASC',
  CurrencyDesc_ = 'currency_DESC',
  DateFormatAsc_ = 'dateFormat_ASC',
  DateFormatDesc_ = 'dateFormat_DESC',
  DeletedAtAsc_ = 'deletedAt_ASC',
  DeletedAtDesc_ = 'deletedAt_DESC',
  IdAsc_ = 'id_ASC',
  IdDesc_ = 'id_DESC',
  LanguageAsc_ = 'language_ASC',
  LanguageDesc_ = 'language_DESC',
  LeftNavColorAsc_ = 'leftNavColor_ASC',
  LeftNavColorDesc_ = 'leftNavColor_DESC',
  MenuBarBgColorAsc_ = 'menuBarBGColor_ASC',
  MenuBarBgColorDesc_ = 'menuBarBGColor_DESC',
  MenuBarIconsColorAsc_ = 'menuBarIconsColor_ASC',
  MenuBarIconsColorDesc_ = 'menuBarIconsColor_DESC',
  PasswordMinLengthAsc_ = 'passwordMinLength_ASC',
  PasswordMinLengthDesc_ = 'passwordMinLength_DESC',
  PasswordRequireLowercaseAsc_ = 'passwordRequireLowercase_ASC',
  PasswordRequireLowercaseDesc_ = 'passwordRequireLowercase_DESC',
  PasswordRequireNumbersAsc_ = 'passwordRequireNumbers_ASC',
  PasswordRequireNumbersDesc_ = 'passwordRequireNumbers_DESC',
  PasswordRequireSpecialAsc_ = 'passwordRequireSpecial_ASC',
  PasswordRequireSpecialDesc_ = 'passwordRequireSpecial_DESC',
  PasswordRequireUppercaseAsc_ = 'passwordRequireUppercase_ASC',
  PasswordRequireUppercaseDesc_ = 'passwordRequireUppercase_DESC',
  PasswordUpdateIntervalAsc_ = 'passwordUpdateInterval_ASC',
  PasswordUpdateIntervalDesc_ = 'passwordUpdateInterval_DESC',
  RememberDeviceAsc_ = 'rememberDevice_ASC',
  RememberDeviceDesc_ = 'rememberDevice_DESC',
  TimezoneAsc_ = 'timezone_ASC',
  TimezoneDesc_ = 'timezone_DESC',
  UpdatedAtAsc_ = 'updatedAt_ASC',
  UpdatedAtDesc_ = 'updatedAt_DESC',
  UserInterfaceStyleAsc_ = 'userInterfaceStyle_ASC',
  UserInterfaceStyleDesc_ = 'userInterfaceStyle_DESC',
  VanityUrlAsc_ = 'vanityUrl_ASC',
  VanityUrlDesc_ = 'vanityUrl_DESC'
}

/** Settings subscription payload */
export type SettingPayload_ = {
  __typename?: 'SettingPayload';
  mutation: MutationType_;
  node?: Maybe<Setting_>;
  previousValues?: Maybe<Setting_>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type SettingRelationFilter_ = {
  every?: InputMaybe<SettingFilter_>;
  none?: InputMaybe<SettingFilter_>;
  some?: InputMaybe<SettingFilter_>;
};

export type SettingSort_ = {
  bgColor?: InputMaybe<SortOrder_>;
  buttonLinkColor?: InputMaybe<SortOrder_>;
  containerColor?: InputMaybe<SortOrder_>;
  createdAt?: InputMaybe<SortOrder_>;
  createdBy?: InputMaybe<UserSort_>;
  currency?: InputMaybe<SortOrder_>;
  dateFormat?: InputMaybe<SortOrder_>;
  deletedAt?: InputMaybe<SortOrder_>;
  landingPageImage?: InputMaybe<FileSort_>;
  language?: InputMaybe<SortOrder_>;
  leftNavColor?: InputMaybe<SortOrder_>;
  menuBarBGColor?: InputMaybe<SortOrder_>;
  menuBarIconsColor?: InputMaybe<SortOrder_>;
  menuBarLogo?: InputMaybe<FileSort_>;
  passwordMinLength?: InputMaybe<SortOrder_>;
  passwordRequireLowercase?: InputMaybe<SortOrder_>;
  passwordRequireNumbers?: InputMaybe<SortOrder_>;
  passwordRequireSpecial?: InputMaybe<SortOrder_>;
  passwordRequireUppercase?: InputMaybe<SortOrder_>;
  passwordUpdateInterval?: InputMaybe<SortOrder_>;
  rememberDevice?: InputMaybe<SortOrder_>;
  timezone?: InputMaybe<SortOrder_>;
  updatedAt?: InputMaybe<SortOrder_>;
  userInterfaceStyle?: InputMaybe<SortOrder_>;
  vanityUrl?: InputMaybe<SortOrder_>;
};

/** Settings subscription filter */
export type SettingSubscriptionFilter_ = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType_>>>;
  node?: InputMaybe<SettingFilter_>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter_>;
};

/** Settings update input */
export type SettingUpdateInput_ = {
  bgColor?: InputMaybe<Scalars['String']['input']>;
  buttonLinkColor?: InputMaybe<Scalars['String']['input']>;
  containerColor?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  dateFormat?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  leftNavColor?: InputMaybe<Scalars['String']['input']>;
  menuBarBGColor?: InputMaybe<Scalars['String']['input']>;
  menuBarIconsColor?: InputMaybe<Scalars['String']['input']>;
  passwordMinLength?: InputMaybe<Scalars['Int']['input']>;
  passwordRequireLowercase?: InputMaybe<Scalars['Boolean']['input']>;
  passwordRequireNumbers?: InputMaybe<Scalars['Boolean']['input']>;
  passwordRequireSpecial?: InputMaybe<Scalars['Boolean']['input']>;
  passwordRequireUppercase?: InputMaybe<Scalars['Boolean']['input']>;
  passwordUpdateInterval?: InputMaybe<Scalars['Int']['input']>;
  rememberDevice?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  userInterfaceStyle?: InputMaybe<Scalars['String']['input']>;
  vanityUrl?: InputMaybe<Scalars['String']['input']>;
};

export type Setting_PermissionFilter_ = {
  AND?: InputMaybe<Array<Setting_PermissionFilter_>>;
  OR?: InputMaybe<Array<Setting_PermissionFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  bgColor?: InputMaybe<StringPredicate_>;
  buttonLinkColor?: InputMaybe<StringPredicate_>;
  containerColor?: InputMaybe<StringPredicate_>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<User_PermissionFilter_>;
  currency?: InputMaybe<StringPredicate_>;
  dateFormat?: InputMaybe<StringPredicate_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  landingPageImage?: InputMaybe<File_PermissionFilter_>;
  language?: InputMaybe<StringPredicate_>;
  leftNavColor?: InputMaybe<StringPredicate_>;
  menuBarBGColor?: InputMaybe<StringPredicate_>;
  menuBarIconsColor?: InputMaybe<StringPredicate_>;
  menuBarLogo?: InputMaybe<File_PermissionFilter_>;
  passwordMinLength?: InputMaybe<IntPredicate_>;
  passwordRequireLowercase?: InputMaybe<BoolPredicate_>;
  passwordRequireNumbers?: InputMaybe<BoolPredicate_>;
  passwordRequireSpecial?: InputMaybe<BoolPredicate_>;
  passwordRequireUppercase?: InputMaybe<BoolPredicate_>;
  passwordUpdateInterval?: InputMaybe<IntPredicate_>;
  rememberDevice?: InputMaybe<StringPredicate_>;
  timezone?: InputMaybe<StringPredicate_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
  userInterfaceStyle?: InputMaybe<StringPredicate_>;
  vanityUrl?: InputMaybe<StringPredicate_>;
};

export type Setting_PermissionRelationFilter_ = {
  every?: InputMaybe<Setting_PermissionFilter_>;
  none?: InputMaybe<Setting_PermissionFilter_>;
  some?: InputMaybe<Setting_PermissionFilter_>;
};

/** SignUpResendInput */
export type SignUpResendInput_ = {
  email: Scalars['String']['input'];
};

/** Smart Field Attributes */
export type SmartFieldTypeAttributes_ = {
  __typename?: 'SmartFieldTypeAttributes';
  format: Scalars['String']['output'];
  innerFields?: Maybe<Array<Maybe<CustomTableField_>>>;
};

/** Smart Type Format Enum */
export enum SmartTypeFormatEnum_ {
  Address_ = 'ADDRESS',
  Phone_ = 'PHONE'
}

/** SortOrder */
export enum SortOrder_ {
  Asc_ = 'ASC',
  Desc_ = 'DESC'
}

export type StringPadFunctionArguments_ = {
  len: Scalars['Int']['input'];
  str: Scalars['String']['input'];
};

export type StringPredicate_ = {
  contains?: InputMaybe<Scalars['String']['input']>;
  ends_with?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  not_contains?: InputMaybe<Scalars['String']['input']>;
  not_ends_with?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  not_starts_with?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type StringPredicateHaving_ = {
  AND?: InputMaybe<Array<StringPredicateHaving_>>;
  OR?: InputMaybe<Array<StringPredicateHaving_>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  ends_with?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  not_contains?: InputMaybe<Scalars['String']['input']>;
  not_ends_with?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  not_starts_with?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum StringTrimMode_ {
  Both_ = 'BOTH',
  Leading_ = 'LEADING',
  Trailing_ = 'TRAILING'
}

export type Subscription_ = {
  __typename?: 'Subscription';
  ApiTokens?: Maybe<ApiTokenPayload_>;
  AuthenticationProfiles?: Maybe<AuthenticationProfilePayload_>;
  AuthenticationSettings?: Maybe<AuthenticationSettingPayload_>;
  Content?: Maybe<ContentPayload_>;
  ContentText?: Maybe<ContentTextPayload_>;
  EnvironmentVariables?: Maybe<EnvironmentVariablePayload_>;
  Files?: Maybe<FilePayload_>;
  Permissions?: Maybe<PermissionPayload_>;
  Prompts?: Maybe<PromptPayload_>;
  Roles?: Maybe<RolePayload_>;
  Settings?: Maybe<SettingPayload_>;
  Users?: Maybe<UserPayload_>;
};


export type SubscriptionApiTokensArgs_ = {
  filter?: InputMaybe<ApiTokenSubscriptionFilter_>;
};


export type SubscriptionAuthenticationProfilesArgs_ = {
  filter?: InputMaybe<AuthenticationProfileSubscriptionFilter_>;
};


export type SubscriptionAuthenticationSettingsArgs_ = {
  filter?: InputMaybe<AuthenticationSettingSubscriptionFilter_>;
};


export type SubscriptionContentArgs_ = {
  filter?: InputMaybe<ContentSubscriptionFilter_>;
};


export type SubscriptionContentTextArgs_ = {
  filter?: InputMaybe<ContentTextSubscriptionFilter_>;
};


export type SubscriptionEnvironmentVariablesArgs_ = {
  filter?: InputMaybe<EnvironmentVariableSubscriptionFilter_>;
};


export type SubscriptionFilesArgs_ = {
  filter?: InputMaybe<FileSubscriptionFilter_>;
};


export type SubscriptionPermissionsArgs_ = {
  filter?: InputMaybe<PermissionSubscriptionFilter_>;
};


export type SubscriptionPromptsArgs_ = {
  filter?: InputMaybe<PromptSubscriptionFilter_>;
};


export type SubscriptionRolesArgs_ = {
  filter?: InputMaybe<RoleSubscriptionFilter_>;
};


export type SubscriptionSettingsArgs_ = {
  filter?: InputMaybe<SettingSubscriptionFilter_>;
};


export type SubscriptionUsersArgs_ = {
  filter?: InputMaybe<UserSubscriptionFilter_>;
};

export type SubstringFunctionArguments_ = {
  len?: InputMaybe<Scalars['Int']['input']>;
  pos: Scalars['Int']['input'];
};

export type SuccessResponse_ = {
  __typename?: 'SuccessResponse';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SuccessWithMessageResponse_ = {
  __typename?: 'SuccessWithMessageResponse';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Switch Field Attributes */
export type SwitchFieldTypeAttributes_ = {
  __typename?: 'SwitchFieldTypeAttributes';
  format: Scalars['String']['output'];
  listOptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Switch Type Format Enum */
export enum SwitchTypeFormatEnum_ {
  ActiveInactive_ = 'ACTIVE_INACTIVE',
  Custom_ = 'CUSTOM',
  HighLow_ = 'HIGH_LOW',
  OnOff_ = 'ON_OFF',
  TrueFalse_ = 'TRUE_FALSE',
  YesNo_ = 'YES_NO'
}

/** Application */
export type SystemApplication_ = {
  __typename?: 'SystemApplication';
  appType: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status: SystemApplicationStatusEnum_;
};

/** ApplicationDeleteMutationInput */
export type SystemApplicationDeleteMutationInput_ = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

/** Application install input */
export type SystemApplicationInstallInput_ = {
  appType: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  status?: InputMaybe<SystemApplicationStatusEnum_>;
};

/** SystemApplicationListResponse output */
export type SystemApplicationListResponse_ = {
  __typename?: 'SystemApplicationListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemApplication_>;
};

/** Application Status Enum */
export enum SystemApplicationStatusEnum_ {
  Active_ = 'ACTIVE',
  Inactive_ = 'INACTIVE'
}

/** Application update input */
export type SystemApplicationUpdateInput_ = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SystemApplicationStatusEnum_>;
};

export type SystemAsyncSessionStatusResponse_ = {
  __typename?: 'SystemAsyncSessionStatusResponse';
  result?: Maybe<Scalars['JSON']['output']>;
  status: Scalars['String']['output'];
};

export type SystemAuthProfile_ = {
  __typename?: 'SystemAuthProfile';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SystemAuthenticationInfo_ = {
  __typename?: 'SystemAuthenticationInfo';
  authProfile?: Maybe<Array<Maybe<SystemAuthProfile_>>>;
  environmentId?: Maybe<Scalars['String']['output']>;
  environmentName?: Maybe<Scalars['String']['output']>;
};

export type SystemBackendUtilizationResponse_ = {
  __typename?: 'SystemBackendUtilizationResponse';
  authProfiles?: Maybe<Scalars['Int']['output']>;
  databaseRows?: Maybe<Scalars['Int']['output']>;
  field?: Maybe<Scalars['Int']['output']>;
  fileStorageSize?: Maybe<Scalars['Int']['output']>;
  functions?: Maybe<Scalars['Int']['output']>;
  roles?: Maybe<Scalars['Int']['output']>;
  tables?: Maybe<Scalars['Int']['output']>;
};

export type SystemBillingCurrentPlanResponse_ = {
  __typename?: 'SystemBillingCurrentPlanResponse';
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nextPlan?: Maybe<SystemBillingNextPlanResponse_>;
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<SystemWorkspaceStatus_>;
  trialEnd?: Maybe<Scalars['DateTime']['output']>;
};

export enum SystemBillingDetailsOrigin_ {
  Member_ = 'member',
  Organization_ = 'organization',
  Workspace_ = 'workspace'
}

export type SystemBillingDetailsResponse_ = {
  __typename?: 'SystemBillingDetailsResponse';
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  origin: SystemBillingDetailsOrigin_;
};

export type SystemBillingInvoiceItem_ = {
  __typename?: 'SystemBillingInvoiceItem';
  amountDue?: Maybe<Scalars['Float']['output']>;
  amountPaid?: Maybe<Scalars['Float']['output']>;
  amountRemaining?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endingBalance?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  invoicePdf?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<SystemBillingInvoiceItemOrganizationInfo_>;
  paid?: Maybe<Scalars['Boolean']['output']>;
  periodEnd?: Maybe<Scalars['DateTime']['output']>;
  periodStart?: Maybe<Scalars['DateTime']['output']>;
  plan?: Maybe<SystemBillingInvoiceItemPlanInfo_>;
  project?: Maybe<SystemBillingInvoiceItemProjectInfo_>;
  status?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type SystemBillingInvoiceItemOrganizationInfo_ = {
  __typename?: 'SystemBillingInvoiceItemOrganizationInfo';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingInvoiceItemPlanInfo_ = {
  __typename?: 'SystemBillingInvoiceItemPlanInfo';
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingInvoiceItemProjectInfo_ = {
  __typename?: 'SystemBillingInvoiceItemProjectInfo';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum SystemBillingInvoicesListFilterType_ {
  Customer_ = 'CUSTOMER',
  Project_ = 'PROJECT'
}

/** SystemBillingInvoicesListResponse output */
export type SystemBillingInvoicesListResponse_ = {
  __typename?: 'SystemBillingInvoicesListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemBillingInvoiceItem_>;
};

export type SystemBillingLimitMetricItem_ = {
  __typename?: 'SystemBillingLimitMetricItem';
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  showPriority?: Maybe<Scalars['Int']['output']>;
  tooltip?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingMetricOverageItem_ = {
  __typename?: 'SystemBillingMetricOverageItem';
  value?: Maybe<Scalars['Float']['output']>;
  warning?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingMetricUsageItem_ = {
  __typename?: 'SystemBillingMetricUsageItem';
  limitMetric?: Maybe<SystemBillingLimitMetricItem_>;
  overage?: Maybe<SystemBillingMetricOverageItem_>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type SystemBillingMetricUsageQuotaItem_ = {
  __typename?: 'SystemBillingMetricUsageQuotaItem';
  limitMetric?: Maybe<SystemBillingLimitMetricItem_>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** SystemBillingMetricUsageQuotasListResponse output */
export type SystemBillingMetricUsageQuotasListResponse_ = {
  __typename?: 'SystemBillingMetricUsageQuotasListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemBillingMetricUsageQuotaItem_>;
};

export type SystemBillingMetricUsagesListFilter_ = {
  entryDate: DateTimePredicate_;
};

/** SystemBillingMetricUsagesListResponse output */
export type SystemBillingMetricUsagesListResponse_ = {
  __typename?: 'SystemBillingMetricUsagesListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemBillingMetricUsageItem_>;
};

export type SystemBillingNextPlanResponse_ = {
  __typename?: 'SystemBillingNextPlanResponse';
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type SystemBillingPlanBaseInfo_ = {
  __typename?: 'SystemBillingPlanBaseInfo';
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isCustom?: Maybe<Scalars['Boolean']['output']>;
  isLegacy?: Maybe<Scalars['Boolean']['output']>;
  limitMetrics?: Maybe<Array<Maybe<SystemBillingPlanLimitMetricItem_>>>;
  name?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type SystemBillingPlanLimitMetricItem_ = {
  __typename?: 'SystemBillingPlanLimitMetricItem';
  displayName?: Maybe<Scalars['String']['output']>;
  hardLimit?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overagePrice?: Maybe<Scalars['Int']['output']>;
  softLimit?: Maybe<Scalars['Float']['output']>;
};

/** BillingPlanUpdateMutationInput */
export type SystemBillingPlanUpdateMutationInput_ = {
  planId: Scalars['ID']['input'];
  projectID: Scalars['ID']['input'];
};

export enum SystemBranchEnvironmentMode_ {
  Full_ = 'FULL',
  System_ = 'SYSTEM'
}

export type SystemCacheEvictResponse_ = {
  __typename?: 'SystemCacheEvictResponse';
  evicted: Array<Maybe<Scalars['String']['output']>>;
};

/** Ci Commit Mode */
export enum SystemCiCommitMode_ {
  Full_ = 'FULL',
  OnlyMigrations_ = 'ONLY_MIGRATIONS',
  OnlyProject_ = 'ONLY_PROJECT'
}

/** Ci Status */
export type SystemCiStatusOutput_ = {
  __typename?: 'SystemCiStatusOutput';
  migrations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status: Scalars['String']['output'];
};

/** CloudLogs Entry */
export type SystemCloudLogsEntry_ = {
  __typename?: 'SystemCloudLogsEntry';
  message?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
};

/** Computed field mode */
export enum SystemComputedFieldMode_ {
  Stored_ = 'STORED',
  Virtual_ = 'VIRTUAL'
}

/** Custom Table Field Type */
export type SystemCustomTableField_ = {
  __typename?: 'SystemCustomTableField';
  computedMode?: Maybe<SystemComputedFieldMode_>;
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['String']['output']>;
  fieldType?: Maybe<SystemFieldType_>;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributes_>;
  isList: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Date Field Attributes */
export type SystemDateFieldTypeAttributes_ = {
  __typename?: 'SystemDateFieldTypeAttributes';
  format: Scalars['String']['output'];
};

/** Date Type Format Enum */
export enum SystemDateTypeFormatEnum_ {
  Date_ = 'DATE',
  Datetime_ = 'DATETIME'
}

/** DeployDataResponse */
export type SystemDeployDataResponse_ = {
  __typename?: 'SystemDeployDataResponse';
  buildName: Scalars['String']['output'];
  uploadBuildUrl: Scalars['String']['output'];
  uploadMetaDataUrl: Scalars['String']['output'];
};

export enum SystemDeployModeEnum_ {
  Full_ = 'FULL',
  Functions_ = 'FUNCTIONS',
  Migrations_ = 'MIGRATIONS',
  OnlyPlugins_ = 'ONLY_PLUGINS',
  OnlyProject_ = 'ONLY_PROJECT'
}

/** DeployOptions */
export type SystemDeployOptions_ = {
  extensionNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode?: InputMaybe<SystemDeployModeEnum_>;
  pluginNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum SystemDeployStatusEnum_ {
  Compiling_ = 'compiling',
  CompleteError_ = 'complete_error',
  CompleteSuccess_ = 'complete_success',
  Deploying_ = 'deploying',
  Initialize_ = 'initialize',
  Preparing_ = 'preparing'
}

/** SystemDeployStatusResult */
export type SystemDeployStatusResult_ = {
  __typename?: 'SystemDeployStatusResult';
  message?: Maybe<Scalars['String']['output']>;
  status: SystemDeployStatusEnum_;
};

/** DeployingBuildInput */
export type SystemDeployingBuildInput_ = {
  buildName: Scalars['String']['input'];
  options?: InputMaybe<SystemDeployOptions_>;
};

export type SystemDeploymentAbItemResponse_ = {
  __typename?: 'SystemDeploymentABItemResponse';
  dateDeploy?: Maybe<Scalars['DateTime']['output']>;
  statusDeploy?: Maybe<Scalars['String']['output']>;
  urlDeploy?: Maybe<Scalars['String']['output']>;
  userDeploy?: Maybe<SystemMemberAccountInfo_>;
  versionDeploy?: Maybe<Scalars['String']['output']>;
  versionFrontEnd?: Maybe<Scalars['String']['output']>;
};

export type SystemDeploymentProjectItemResponse_ = {
  __typename?: 'SystemDeploymentProjectItemResponse';
  dateDeploy?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  statusDeploy?: Maybe<Scalars['String']['output']>;
  urlDeploy?: Maybe<Scalars['String']['output']>;
  versionDeploy?: Maybe<Scalars['String']['output']>;
  versionFrontEnd?: Maybe<Scalars['String']['output']>;
  workspaceId?: Maybe<Scalars['ID']['output']>;
};

/** SystemDeploymentProjectListResponse output */
export type SystemDeploymentProjectListResponse_ = {
  __typename?: 'SystemDeploymentProjectListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemDeploymentProjectItemResponse_>;
};

/** SystemEnvironmentBackupListResponse output */
export type SystemEnvironmentBackupListResponse_ = {
  __typename?: 'SystemEnvironmentBackupListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<EnvironmentBackupItem_>;
};

export type SystemEnvironmentMember_ = {
  __typename?: 'SystemEnvironmentMember';
  avatar?: Maybe<SystemEnvironmentMemberAvatar_>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<SystemEnvironmentMemberPermissionsList_>;
  registeredAt?: Maybe<Scalars['DateTime']['output']>;
  roles?: Maybe<SystemEnvironmentMemberRolesList_>;
  status: Scalars['String']['output'];
};

export type SystemEnvironmentMemberAvatar_ = {
  __typename?: 'SystemEnvironmentMemberAvatar';
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type SystemEnvironmentMemberFilter_ = {
  email?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};

export type SystemEnvironmentMemberPermission_ = {
  __typename?: 'SystemEnvironmentMemberPermission';
  permission?: Maybe<Scalars['JSON']['output']>;
  resource?: Maybe<Scalars['String']['output']>;
  resourceType?: Maybe<Scalars['String']['output']>;
};

export type SystemEnvironmentMemberPermissionsList_ = {
  __typename?: 'SystemEnvironmentMemberPermissionsList';
  count: Scalars['Int']['output'];
  items?: Maybe<Array<SystemEnvironmentMemberPermission_>>;
};

export type SystemEnvironmentMemberRole_ = {
  __typename?: 'SystemEnvironmentMemberRole';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type SystemEnvironmentMemberRoleIdFilterPredicate_ = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  not_equals?: InputMaybe<Scalars['ID']['input']>;
};

export type SystemEnvironmentMemberRolesList_ = {
  __typename?: 'SystemEnvironmentMemberRolesList';
  count: Scalars['Int']['output'];
  items?: Maybe<Array<SystemEnvironmentMemberRole_>>;
};

export type SystemEnvironmentMemberStatusFilterPredicate_ = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type SystemEnvironmentMemberUpdateData_ = {
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemEnvironmentMembersFilter_ = {
  email: Scalars['String']['input'];
};

export type SystemEnvironmentMembersListFilter_ = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<SystemEnvironmentMemberRoleIdFilterPredicate_>;
  status?: InputMaybe<SystemEnvironmentMemberStatusFilterPredicate_>;
  workspaceId?: InputMaybe<Scalars['ID']['input']>;
};

/** SystemEnvironmentMembersListResponse output */
export type SystemEnvironmentMembersListResponse_ = {
  __typename?: 'SystemEnvironmentMembersListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemEnvironmentMember_>;
};

export type SystemEnvironmentMembersListSort_ = {
  email?: InputMaybe<SortOrder_>;
  firstName?: InputMaybe<SortOrder_>;
  isOwner?: InputMaybe<SortOrder_>;
  lastName?: InputMaybe<SortOrder_>;
  status?: InputMaybe<SortOrder_>;
};

export type SystemEnvironmentProjectItem_ = {
  __typename?: 'SystemEnvironmentProjectItem';
  fields?: Maybe<Scalars['String']['output']>;
  functions?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  tables?: Maybe<Scalars['String']['output']>;
  worksApiHost?: Maybe<Scalars['String']['output']>;
  workspaceId: Scalars['ID']['output'];
  workspaceName: Scalars['String']['output'];
};

export type SystemEnvironmentRoleBaseInfo_ = {
  __typename?: 'SystemEnvironmentRoleBaseInfo';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type SystemEnvironmentRoleList_ = {
  __typename?: 'SystemEnvironmentRoleList';
  assignedRoles?: Maybe<Array<Maybe<SystemEnvironmentRoleBaseInfo_>>>;
  environmentId: Scalars['String']['output'];
  environmentName: Scalars['String']['output'];
  exists?: Maybe<Scalars['Boolean']['output']>;
  roles?: Maybe<Array<Maybe<SystemEnvironmentRoleBaseInfo_>>>;
};

export type SystemEnvironmentSettings_ = {
  __typename?: 'SystemEnvironmentSettings';
  deleteLock?: Maybe<Scalars['Boolean']['output']>;
  fileManagementProvider?: Maybe<SystemFileManagerProviderTypeEnum_>;
  introspection?: Maybe<Scalars['Boolean']['output']>;
};

/** SystemEnvironmentsListResponse output */
export type SystemEnvironmentsListResponse_ = {
  __typename?: 'SystemEnvironmentsListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<EnvironmentItem_>;
};

/** SystemEnvironmentsProjectListResponse output */
export type SystemEnvironmentsProjectListResponse_ = {
  __typename?: 'SystemEnvironmentsProjectListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemEnvironmentProjectItem_>;
};

/** Field Data Features */
export type SystemFieldDataFeatures_ = {
  __typename?: 'SystemFieldDataFeatures';
  create: Scalars['Boolean']['output'];
  sort: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Field Schema Features */
export type SystemFieldSchemaFeatures_ = {
  __typename?: 'SystemFieldSchemaFeatures';
  delete: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Field types */
export enum SystemFieldType_ {
  Date_ = 'DATE',
  File_ = 'FILE',
  Geo_ = 'GEO',
  Id_ = 'ID',
  Json_ = 'JSON',
  MissingRelation_ = 'MISSING_RELATION',
  Number_ = 'NUMBER',
  OneWayRelation_ = 'ONE_WAY_RELATION',
  Relation_ = 'RELATION',
  Smart_ = 'SMART',
  Switch_ = 'SWITCH',
  Text_ = 'TEXT',
  Uuid_ = 'UUID'
}

/** Field Type Attributes */
export type SystemFieldTypeAttributes_ = SystemDateFieldTypeAttributes_ | SystemFileFieldTypeAttributes_ | SystemGeoFieldTypeAttributes_ | SystemMissingRelationFieldTypeAttributes_ | SystemNumberFieldTypeAttributes_ | SystemSmartFieldTypeAttributes_ | SystemSwitchFieldTypeAttributes_ | SystemTextFieldTypeAttributes_ | SystemUuidFieldTypeAttributes_;

/** Field Type Attributes Input */
export type SystemFieldTypeAttributesInput_ = {
  autoIncrement?: InputMaybe<Scalars['Boolean']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  expiration?: InputMaybe<Scalars['Int']['input']>;
  fieldSize?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  isBigInt?: InputMaybe<Scalars['Boolean']['input']>;
  listOptions?: InputMaybe<Array<Scalars['String']['input']>>;
  maxSize?: InputMaybe<Scalars['Int']['input']>;
  maxValue?: InputMaybe<Scalars['Float']['input']>;
  minValue?: InputMaybe<Scalars['Float']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  srid?: InputMaybe<Scalars['Int']['input']>;
  typeRestrictions?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type SystemFileBaseInfo_ = {
  __typename?: 'SystemFileBaseInfo';
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** File Field Attributes */
export type SystemFileFieldTypeAttributes_ = {
  __typename?: 'SystemFileFieldTypeAttributes';
  expiration?: Maybe<Scalars['Int']['output']>;
  format: Scalars['String']['output'];
  maxSize?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Field is deprecated */
  showTitle?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Field is deprecated */
  showUrl?: Maybe<Scalars['Boolean']['output']>;
  typeRestrictions?: Maybe<Array<Scalars['String']['output']>>;
};

export enum SystemFileManagerProviderTypeEnum_ {
  Aws_ = 'aws',
  Filestack_ = 'filestack',
  Uploadcare_ = 'uploadcare'
}

/** File Type Format Enum */
export enum SystemFileTypeFormatEnum_ {
  File_ = 'FILE',
  Image_ = 'IMAGE'
}

/** FileUploadByUrlInput */
export type SystemFileUploadByUrlInput_ = {
  url: Scalars['String']['input'];
};

/** FileUploadByUrlResponse */
export type SystemFileUploadByUrlResponse_ = {
  __typename?: 'SystemFileUploadByUrlResponse';
  fileId: Scalars['String']['output'];
  meta: Scalars['JSON']['output'];
};

export type SystemFileUploadSignInfo_ = AwsSignInfoResponse_ | FileStackSignInfoResponse_ | UploadcareSignInfoResponse_;

export type SystemFrontendUtilizationAbResponse_ = {
  __typename?: 'SystemFrontendUtilizationABResponse';
  CDN?: Maybe<Scalars['Boolean']['output']>;
  assets?: Maybe<Scalars['Int']['output']>;
  customStates?: Maybe<Scalars['Int']['output']>;
  functions?: Maybe<Scalars['Int']['output']>;
  layouts?: Maybe<Scalars['Int']['output']>;
  libraries?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  requests?: Maybe<Scalars['Int']['output']>;
  resources?: Maybe<Scalars['Int']['output']>;
};

export type SystemFrontendUtilizationResponse_ = {
  __typename?: 'SystemFrontendUtilizationResponse';
  assets?: Maybe<Scalars['Int']['output']>;
  customStates?: Maybe<Scalars['Int']['output']>;
  functions?: Maybe<Scalars['Int']['output']>;
  layouts?: Maybe<Scalars['Int']['output']>;
  libraries?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  requests?: Maybe<Scalars['Int']['output']>;
  resources?: Maybe<Scalars['Int']['output']>;
};

/** FunctionInfo */
export type SystemFunctionInfo_ = {
  application?: Maybe<SystemApplication_>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType_;
  name: Scalars['String']['output'];
};

/** FunctionInfoFilter */
export type SystemFunctionInfoFilter_ = {
  description?: InputMaybe<Scalars['String']['input']>;
  functionType?: InputMaybe<SystemFunctionType_>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** FunctionInfoOrderBy */
export enum SystemFunctionInfoOrderBy_ {
  DescriptionAsc_ = 'description_ASC',
  DescriptionDesc_ = 'description_DESC',
  FunctionTypeAsc_ = 'functionType_ASC',
  FunctionTypeDesc_ = 'functionType_DESC',
  NameAsc_ = 'name_ASC',
  NameDesc_ = 'name_DESC'
}

/** SystemFunctionListResponse output */
export type SystemFunctionListResponse_ = {
  __typename?: 'SystemFunctionListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemFunctionInfo_>;
};

/** FunctionResolverInfo */
export type SystemFunctionResolverInfo_ = SystemFunctionInfo_ & {
  __typename?: 'SystemFunctionResolverInfo';
  application?: Maybe<SystemApplication_>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType_;
  gqlType: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** FunctionTaskInfo */
export type SystemFunctionTaskInfo_ = SystemFunctionInfo_ & {
  __typename?: 'SystemFunctionTaskInfo';
  application?: Maybe<SystemApplication_>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType_;
  name: Scalars['String']['output'];
  scheduleExpression?: Maybe<Scalars['String']['output']>;
};

/** FunctionTriggerInfo */
export type SystemFunctionTriggerInfo_ = SystemFunctionInfo_ & {
  __typename?: 'SystemFunctionTriggerInfo';
  application?: Maybe<SystemApplication_>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType_;
  name: Scalars['String']['output'];
  operation: Scalars['String']['output'];
  tableName: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/** FunctionType */
export enum SystemFunctionType_ {
  Resolver_ = 'resolver',
  Schedule_ = 'schedule',
  Task_ = 'task',
  Trigger_ = 'trigger',
  Webhook_ = 'webhook'
}

/** FunctionWebhookInfo */
export type SystemFunctionWebhookInfo_ = SystemFunctionInfo_ & {
  __typename?: 'SystemFunctionWebhookInfo';
  application?: Maybe<SystemApplication_>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType_;
  httpMethod: Scalars['String']['output'];
  name: Scalars['String']['output'];
  workspaceFullPath: Scalars['String']['output'];
  workspaceRelativePath: Scalars['String']['output'];
};

/** Diff Environment Input */
export type SystemGenerateEnvironmentOutput_ = {
  __typename?: 'SystemGenerateEnvironmentOutput';
  url?: Maybe<Scalars['String']['output']>;
};

/** Geo Field Attributes */
export type SystemGeoFieldTypeAttributes_ = {
  __typename?: 'SystemGeoFieldTypeAttributes';
  format: Scalars['String']['output'];
  srid?: Maybe<Scalars['Int']['output']>;
};

export type SystemInboxEventDetailsUnion_ = SystemInboxEventEnvironmentInvitationDetails_ | SystemInboxEventNotificationDetailsType_ | SystemInboxEventOrganizationInvitationDetails_;

export type SystemInboxEventEnvironmentInvitationDetails_ = {
  __typename?: 'SystemInboxEventEnvironmentInvitationDetails';
  environmentName?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<SystemInboxEventInvitedBy_>;
  project?: Maybe<SystemInboxEventProject_>;
  status?: Maybe<SystemInboxEventStatusEnum_>;
  uuid?: Maybe<Scalars['String']['output']>;
  workspace?: Maybe<SystemInboxEventWorkspace_>;
};

export type SystemInboxEventInvitedBy_ = {
  __typename?: 'SystemInboxEventInvitedBy';
  avatar?: Maybe<GraphQlFileItemResponse_>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type SystemInboxEventItem_ = {
  __typename?: 'SystemInboxEventItem';
  createdAt: Scalars['DateTime']['output'];
  details?: Maybe<SystemInboxEventDetailsUnion_>;
  id: Scalars['ID']['output'];
  isCompleted?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<SystemInboxEventTypeEnum_>;
};

export type SystemInboxEventNotificationDetailsType_ = {
  __typename?: 'SystemInboxEventNotificationDetailsType';
  details?: Maybe<Scalars['JSON']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
};

export type SystemInboxEventOrganization_ = {
  __typename?: 'SystemInboxEventOrganization';
  avatar?: Maybe<GraphQlFileItemResponse_>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemInboxEventOrganizationInvitationDetails_ = {
  __typename?: 'SystemInboxEventOrganizationInvitationDetails';
  invitedBy?: Maybe<SystemInboxEventInvitedBy_>;
  organization?: Maybe<SystemInboxEventOrganization_>;
  status?: Maybe<SystemInboxEventStatusEnum_>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type SystemInboxEventProject_ = {
  __typename?: 'SystemInboxEventProject';
  apiHost?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<GraphQlFileItemResponse_>;
  id: Scalars['ID']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum SystemInboxEventStatusEnum_ {
  Accepted_ = 'accepted',
  Declined_ = 'declined',
  Sent_ = 'sent'
}

export enum SystemInboxEventTypeEnum_ {
  EnvironmentInvitation_ = 'EnvironmentInvitation',
  Notification_ = 'Notification',
  OrganizationInvitation_ = 'OrganizationInvitation'
}

export type SystemInboxEventWorkspace_ = {
  __typename?: 'SystemInboxEventWorkspace';
  apiHost?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<GraphQlFileItemResponse_>;
  id: Scalars['ID']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** SystemInboxEventsListResponse output */
export type SystemInboxEventsListResponse_ = {
  __typename?: 'SystemInboxEventsListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemInboxEventItem_>;
};

/** Table Create Index Input */
export type SystemIndexCreateInput_ = {
  columns: Array<SystemTableIndexColumnInput_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tableId: Scalars['ID']['input'];
  type: TableIndexType_;
};

/** Table Delete Index Input */
export type SystemIndexDeleteInput_ = {
  id: Scalars['ID']['input'];
};

/** Table Update Index Input */
export type SystemIndexUpdateInput_ = {
  columns?: InputMaybe<Array<SystemTableIndexColumnInput_>>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TableIndexType_>;
};

/** Invite members input */
export type SystemInviteMembersInput_ = {
  recipients: Array<SystemInviteRecipientInput_>;
};

/** Invite recipient input */
export type SystemInviteRecipientInput_ = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Invited By Name */
export type SystemInvitedByName_ = {
  __typename?: 'SystemInvitedByName';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  projectName?: Maybe<Scalars['String']['output']>;
  workspaceName?: Maybe<Scalars['String']['output']>;
};

/** InvokeData */
export type SystemInvokeData_ = {
  functionName: Scalars['String']['input'];
  inputArgs?: InputMaybe<Scalars['String']['input']>;
};

/** InvokeFunctionResponse */
export type SystemInvokeFunctionResponse_ = {
  __typename?: 'SystemInvokeFunctionResponse';
  responseData: Scalars['String']['output'];
};

/** LogsListFiltered Response */
export type SystemLogsListFilteredResponse_ = {
  __typename?: 'SystemLogsListFilteredResponse';
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemCloudLogsEntry_>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

/**
 * Member - list of workspaces you are member of
 * Owner - list of workspaces you are owner of
 * OrganizationUser - list of organizations you are part of
 */
export type SystemMemberAccountDeleteDetails_ = {
  __typename?: 'SystemMemberAccountDeleteDetails';
  member?: Maybe<Array<Maybe<SystemOrganizationWorkspaceItem_>>>;
  organizationUser?: Maybe<Array<Maybe<SystemOrganizationBaseItem_>>>;
  owner?: Maybe<Array<Maybe<SystemOrganizationWorkspaceItem_>>>;
};

export type SystemMemberAccountDeleteResponse_ = {
  __typename?: 'SystemMemberAccountDeleteResponse';
  details?: Maybe<SystemMemberAccountDeleteDetails_>;
  success: Scalars['Boolean']['output'];
};

export type SystemMemberAccountInfo_ = {
  __typename?: 'SystemMemberAccountInfo';
  aboutMe?: Maybe<Scalars['String']['output']>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<GraphQlFileItemResponse_>;
  city?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  githubUsername?: Maybe<Scalars['String']['output']>;
  intendedUse?: Maybe<Scalars['String']['output']>;
  isDeveloper?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  learningMode?: Maybe<Scalars['Boolean']['output']>;
  linkedInUsername?: Maybe<Scalars['String']['output']>;
  projectDescription?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  twitterUsername?: Maybe<Scalars['String']['output']>;
  type?: Maybe<SystemUserType_>;
  website?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type SystemMemberAccountUpsertDataInput_ = {
  aboutMe?: InputMaybe<Scalars['String']['input']>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<GraphQlCreateFileItemInput_>;
  city?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  githubUsername?: InputMaybe<Scalars['String']['input']>;
  intendedUse?: InputMaybe<Scalars['String']['input']>;
  isDeveloper?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  learningMode?: InputMaybe<Scalars['Boolean']['input']>;
  linkedInUsername?: InputMaybe<Scalars['String']['input']>;
  projectDescription?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  twitterUsername?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SystemUserType_>;
  website?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

/** Member Invitation */
export type SystemMemberInvitation_ = {
  __typename?: 'SystemMemberInvitation';
  accepted?: Maybe<Scalars['Boolean']['output']>;
  acceptedOn?: Maybe<Scalars['DateTime']['output']>;
  apiHost?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<SystemInvitedByName_>;
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  resentOn?: Maybe<Scalars['DateTime']['output']>;
};

/** Member invitation accept input */
export type SystemMemberInvitationAcceptInput_ = {
  accepted: Scalars['Boolean']['input'];
  id: Scalars['String']['input'];
};

/** Member Invitation Accept Response */
export type SystemMemberInvitationAcceptResponse_ = {
  __typename?: 'SystemMemberInvitationAcceptResponse';
  success: Scalars['Boolean']['output'];
};

/** Cancel members invitations input */
export type SystemMemberInvitationCancelInput_ = {
  email: Scalars['String']['input'];
};

/** Resend member invitation input */
export type SystemMemberInvitationResendInput_ = {
  email: Scalars['ID']['input'];
};

export type SystemMemberInvitationsList_ = {
  __typename?: 'SystemMemberInvitationsList';
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemMemberInvitation_>>>;
};

/** MemberPaymentDetailsUpdateMutationInput */
export type SystemMemberPaymentDetailsUpdateMutationInput_ = {
  cardToken?: InputMaybe<Scalars['String']['input']>;
};

/** MissingRelation Field Attributes */
export type SystemMissingRelationFieldTypeAttributes_ = {
  __typename?: 'SystemMissingRelationFieldTypeAttributes';
  missingTable: Scalars['String']['output'];
};

export type SystemMutation_ = {
  __typename?: 'SystemMutation';
  applicationDelete?: Maybe<SuccessResponse_>;
  applicationInstall?: Maybe<SystemApplication_>;
  applicationUpdate?: Maybe<SystemApplication_>;
  billingContextCacheEvict?: Maybe<SystemCacheEvictResponse_>;
  billingPlanUpdate?: Maybe<SystemBillingCurrentPlanResponse_>;
  ciCommit?: Maybe<AsyncSession_>;
  ciInstall?: Maybe<SuccessResponse_>;
  deploy?: Maybe<Scalars['Boolean']['output']>;
  environmentBackup?: Maybe<AsyncSession_>;
  environmentBranch?: Maybe<AsyncSession_>;
  environmentDelete?: Maybe<SuccessResponse_>;
  environmentDeleteAsync?: Maybe<AsyncSession_>;
  environmentMemberDelete: SuccessResponse_;
  environmentMemberUpdate?: Maybe<SystemEnvironmentMember_>;
  environmentRestore?: Maybe<AsyncSession_>;
  environmentSetup?: Maybe<SuccessResponse_>;
  fieldCreate: SystemTableField_;
  fieldDelete: SuccessResponse_;
  fieldUpdate: SystemTableField_;
  fieldUpdatePosition: SuccessResponse_;
  fileUploadByUrl: SystemFileUploadByUrlResponse_;
  indexCreate: SystemTableIndex_;
  indexDelete?: Maybe<SuccessResponse_>;
  indexUpdate: SystemTableIndex_;
  inviteMembers: Array<Maybe<SystemTeamInvitationDetails_>>;
  invoke?: Maybe<SystemInvokeFunctionResponse_>;
  memberAccountDelete?: Maybe<SystemMemberAccountDeleteResponse_>;
  memberAccountUpsert?: Maybe<SystemMemberAccountInfo_>;
  memberInvitationAccept: SystemMemberInvitationAcceptResponse_;
  memberInvitationCancel?: Maybe<SuccessResponse_>;
  memberInvitationResend?: Maybe<SuccessResponse_>;
  memberPaymentDetailsUpdate?: Maybe<SystemPaymentDetailsResponse_>;
  notificationUpdate?: Maybe<SuccessResponse_>;
  organizationInviteUser?: Maybe<OrganizationUserInvitationResponse_>;
  organizationInviteUserAccept?: Maybe<SuccessResponse_>;
  organizationInviteUserCancel?: Maybe<SuccessResponse_>;
  organizationPaymentDetailsUpdate?: Maybe<SystemPaymentDetailsResponse_>;
  organizationProjectUserRemove?: Maybe<SuccessResponse_>;
  organizationProjectUserShare?: Maybe<SuccessResponse_>;
  organizationUpdate?: Maybe<SystemOrganizationItem_>;
  organizationUserRemove?: Maybe<SuccessResponse_>;
  organizationUserUpdate?: Maybe<SystemOrganizationUserInfo_>;
  prepareDeploy: SystemDeployDataResponse_;
  projectCreate?: Maybe<AsyncSession_>;
  projectDelete?: Maybe<AsyncSession_>;
  projectLeave?: Maybe<SuccessResponse_>;
  projectUpdate?: Maybe<SystemProjectUpdateResponse_>;
  rolePermissionsCacheEvict?: Maybe<SystemCacheEvictResponse_>;
  tableCreate: SystemTable_;
  tableDelete: SuccessResponse_;
  tableUpdate: SystemTable_;
  viewCreate: SystemTable_;
  viewUpdate: SystemTable_;
  workspaceCreate?: Maybe<SystemWorkspaceCreateResponse_>;
  workspaceCreateAsync?: Maybe<SystemWorkspaceCreateResponse_>;
  workspaceDelete?: Maybe<SuccessResponse_>;
  workspaceLeave?: Maybe<SuccessResponse_>;
  workspaceUpdate?: Maybe<SystemWorkspaceUpdateResponse_>;
};


export type SystemMutationApplicationDeleteArgs_ = {
  data: SystemApplicationDeleteMutationInput_;
};


export type SystemMutationApplicationInstallArgs_ = {
  data: SystemApplicationInstallInput_;
};


export type SystemMutationApplicationUpdateArgs_ = {
  data: SystemApplicationUpdateInput_;
};


export type SystemMutationBillingContextCacheEvictArgs_ = {
  keys: Array<Scalars['String']['input']>;
  projectKeys: Array<Scalars['String']['input']>;
};


export type SystemMutationBillingPlanUpdateArgs_ = {
  data: SystemBillingPlanUpdateMutationInput_;
};


export type SystemMutationCiCommitArgs_ = {
  build?: InputMaybe<Scalars['String']['input']>;
  migrationNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode?: InputMaybe<SystemCiCommitMode_>;
};


export type SystemMutationDeployArgs_ = {
  data?: InputMaybe<SystemDeployingBuildInput_>;
};


export type SystemMutationEnvironmentBackupArgs_ = {
  environmentName: Scalars['String']['input'];
};


export type SystemMutationEnvironmentBranchArgs_ = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  mode?: InputMaybe<SystemBranchEnvironmentMode_>;
  name: Scalars['String']['input'];
};


export type SystemMutationEnvironmentDeleteArgs_ = {
  environmentName: Scalars['String']['input'];
};


export type SystemMutationEnvironmentDeleteAsyncArgs_ = {
  environmentName: Scalars['String']['input'];
};


export type SystemMutationEnvironmentMemberDeleteArgs_ = {
  filter?: InputMaybe<SystemEnvironmentMembersFilter_>;
};


export type SystemMutationEnvironmentMemberUpdateArgs_ = {
  data?: InputMaybe<SystemEnvironmentMemberUpdateData_>;
  filter?: InputMaybe<SystemEnvironmentMembersFilter_>;
};


export type SystemMutationEnvironmentRestoreArgs_ = {
  backup: Scalars['String']['input'];
  environmentName: Scalars['String']['input'];
};


export type SystemMutationEnvironmentSetupArgs_ = {
  data?: InputMaybe<EnvironmentSetupInput_>;
};


export type SystemMutationFieldCreateArgs_ = {
  data: SystemTableFieldCreateInput_;
};


export type SystemMutationFieldDeleteArgs_ = {
  data: SystemTableFieldDeleteInput_;
};


export type SystemMutationFieldUpdateArgs_ = {
  data: SystemTableFieldUpdateInput_;
};


export type SystemMutationFieldUpdatePositionArgs_ = {
  data: SystemTableFieldPositionUpdateInput_;
};


export type SystemMutationFileUploadByUrlArgs_ = {
  data: SystemFileUploadByUrlInput_;
};


export type SystemMutationIndexCreateArgs_ = {
  data: SystemIndexCreateInput_;
};


export type SystemMutationIndexDeleteArgs_ = {
  data: SystemIndexDeleteInput_;
};


export type SystemMutationIndexUpdateArgs_ = {
  data: SystemIndexUpdateInput_;
};


export type SystemMutationInviteMembersArgs_ = {
  data: SystemInviteMembersInput_;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SystemMutationInvokeArgs_ = {
  data?: InputMaybe<SystemInvokeData_>;
};


export type SystemMutationMemberAccountUpsertArgs_ = {
  data?: InputMaybe<SystemMemberAccountUpsertDataInput_>;
};


export type SystemMutationMemberInvitationAcceptArgs_ = {
  data: SystemMemberInvitationAcceptInput_;
};


export type SystemMutationMemberInvitationCancelArgs_ = {
  data: SystemMemberInvitationCancelInput_;
};


export type SystemMutationMemberInvitationResendArgs_ = {
  data: SystemMemberInvitationResendInput_;
};


export type SystemMutationMemberPaymentDetailsUpdateArgs_ = {
  data: SystemMemberPaymentDetailsUpdateMutationInput_;
};


export type SystemMutationNotificationUpdateArgs_ = {
  id: Scalars['String']['input'];
  status: NotificationStatusType_;
};


export type SystemMutationOrganizationInviteUserArgs_ = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['ID']['input'];
  projectRoles?: InputMaybe<Array<InputMaybe<SystemOrganizationProjectWithEnvironmentRolesInput_>>>;
  role: Scalars['String']['input'];
};


export type SystemMutationOrganizationInviteUserAcceptArgs_ = {
  invitationId: Scalars['String']['input'];
};


export type SystemMutationOrganizationInviteUserCancelArgs_ = {
  invitationId: Scalars['String']['input'];
};


export type SystemMutationOrganizationPaymentDetailsUpdateArgs_ = {
  data: SystemOrganizationPaymentDetailsUpdateMutationInput_;
};


export type SystemMutationOrganizationProjectUserRemoveArgs_ = {
  email: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
};


export type SystemMutationOrganizationProjectUserShareArgs_ = {
  email: Scalars['String']['input'];
  environmentRoles?: InputMaybe<Array<InputMaybe<SystemOrganizationProjectEnvironmentRolesInput_>>>;
  projectId: Scalars['ID']['input'];
};


export type SystemMutationOrganizationUpdateArgs_ = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  image?: InputMaybe<GraphQlCreateFileItemInput_>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SystemOrganizationTypeEnum_>;
};


export type SystemMutationOrganizationUserRemoveArgs_ = {
  email: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};


export type SystemMutationOrganizationUserUpdateArgs_ = {
  email: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  role: Scalars['String']['input'];
};


export type SystemMutationProjectCreateArgs_ = {
  data: SystemProjectCreateMutationInput_;
};


export type SystemMutationProjectDeleteArgs_ = {
  projectId: Scalars['ID']['input'];
};


export type SystemMutationProjectLeaveArgs_ = {
  projectId: Scalars['ID']['input'];
};


export type SystemMutationProjectUpdateArgs_ = {
  data: SystemProjectUpdateMutationInput_;
};


export type SystemMutationRolePermissionsCacheEvictArgs_ = {
  keys: Array<Scalars['String']['input']>;
};


export type SystemMutationTableCreateArgs_ = {
  data: SystemTableCreateInput_;
};


export type SystemMutationTableDeleteArgs_ = {
  data: SystemTableDeleteInput_;
};


export type SystemMutationTableUpdateArgs_ = {
  data: SystemTableUpdateInput_;
};


export type SystemMutationViewCreateArgs_ = {
  data: SystemViewCreateInput_;
};


export type SystemMutationViewUpdateArgs_ = {
  data: SystemViewUpdateInput_;
};


export type SystemMutationWorkspaceCreateArgs_ = {
  data: SystemWorkspaceCreateMutationInput_;
};


export type SystemMutationWorkspaceCreateAsyncArgs_ = {
  data: SystemWorkspaceCreateMutationInput_;
};


export type SystemMutationWorkspaceDeleteArgs_ = {
  data: SystemWorkspaceDeleteMutationInput_;
};


export type SystemMutationWorkspaceLeaveArgs_ = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SystemMutationWorkspaceUpdateArgs_ = {
  data: SystemWorkspaceUpdateMutationInput_;
};

/** Number Field Attributes */
export type SystemNumberFieldTypeAttributes_ = {
  __typename?: 'SystemNumberFieldTypeAttributes';
  autoIncrement?: Maybe<Scalars['Boolean']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  format: Scalars['String']['output'];
  isBigInt?: Maybe<Scalars['Boolean']['output']>;
  maxValue?: Maybe<Scalars['Float']['output']>;
  minValue?: Maybe<Scalars['Float']['output']>;
  precision?: Maybe<Scalars['Int']['output']>;
};

/** Number Type Format Enum */
export enum SystemNumberTypeFormatEnum_ {
  Currency_ = 'CURRENCY',
  Fraction_ = 'FRACTION',
  Number_ = 'NUMBER',
  Percentage_ = 'PERCENTAGE',
  Scientific_ = 'SCIENTIFIC'
}

export type SystemOrganizationBaseItem_ = {
  __typename?: 'SystemOrganizationBaseItem';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemFileBaseInfo_>;
  name: Scalars['String']['output'];
  type?: Maybe<SystemOrganizationTypeEnum_>;
};

export type SystemOrganizationInvitation_ = {
  __typename?: 'SystemOrganizationInvitation';
  accepted?: Maybe<Scalars['Boolean']['output']>;
  email: Scalars['String']['output'];
  emailFrom: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  firstNameFrom?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  lastNameFrom?: Maybe<Scalars['String']['output']>;
  organization: SystemOrganizationBaseItem_;
  role: Scalars['String']['output'];
};

export type SystemOrganizationItem_ = {
  __typename?: 'SystemOrganizationItem';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemOrganizationItemImage_>;
  name: Scalars['String']['output'];
  type?: Maybe<SystemOrganizationTypeEnum_>;
  users?: Maybe<Array<Maybe<SystemOrganizationUserInfo_>>>;
};

export type SystemOrganizationItemImage_ = {
  __typename?: 'SystemOrganizationItemImage';
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** OrganizationPaymentDetailsUpdateMutationInput */
export type SystemOrganizationPaymentDetailsUpdateMutationInput_ = {
  cardToken: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
};

/** environmentId to add to with roles (array of ids). */
export type SystemOrganizationProjectEnvironmentRolesInput_ = {
  environmentId: Scalars['String']['input'];
  roles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type SystemOrganizationProjectItem_ = {
  __typename?: 'SystemOrganizationProjectItem';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemFileBaseInfo_>;
  kind: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organization?: Maybe<SystemOrganizationBaseItem_>;
};

export type SystemOrganizationProjectWithEnvironmentRolesInput_ = {
  environmentRoles?: InputMaybe<Array<InputMaybe<SystemOrganizationProjectEnvironmentRolesInput_>>>;
  projectId: Scalars['ID']['input'];
};

export enum SystemOrganizationTypeEnum_ {
  Agency_ = 'agency',
  Community_ = 'community',
  Company_ = 'company',
  Individual_ = 'individual'
}

export type SystemOrganizationUserInfo_ = {
  __typename?: 'SystemOrganizationUserInfo';
  avatar?: Maybe<GraphQlFileItemResponse_>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  projects?: Maybe<Array<Maybe<SystemOrganizationProjectItem_>>>;
  role: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type SystemOrganizationWorkspaceItem_ = {
  __typename?: 'SystemOrganizationWorkspaceItem';
  apiHost?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemFileBaseInfo_>;
  kind: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organization?: Maybe<SystemOrganizationBaseItem_>;
};

/** SystemOrganizationsListResponse output */
export type SystemOrganizationsListResponse_ = {
  __typename?: 'SystemOrganizationsListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemOrganizationBaseItem_>;
};

export enum SystemPaymentDetailsOrigin_ {
  Member_ = 'member',
  Organization_ = 'organization',
  Workspace_ = 'workspace'
}

export enum SystemPaymentDetailsOriginProject_ {
  Member_ = 'member',
  Organization_ = 'organization',
  Workspace_ = 'workspace'
}

export type SystemPaymentDetailsProjectResponse_ = {
  __typename?: 'SystemPaymentDetailsProjectResponse';
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  origin?: Maybe<SystemPaymentDetailsOriginProject_>;
};

export type SystemPaymentDetailsResponse_ = {
  __typename?: 'SystemPaymentDetailsResponse';
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  origin: SystemPaymentDetailsOrigin_;
};

/** Diff Environment Input */
export type SystemPlanEnvironmentOutput_ = {
  __typename?: 'SystemPlanEnvironmentOutput';
  url?: Maybe<Scalars['String']['output']>;
};

/** ProjectCreateMutationInput */
export type SystemProjectCreateMutationInput_ = {
  authType?: InputMaybe<Scalars['String']['input']>;
  billingPlanId?: InputMaybe<Scalars['ID']['input']>;
  cardToken?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<GraphQlCreateFileItemInput_>;
  kind?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};

export type SystemProjectImage_ = {
  __typename?: 'SystemProjectImage';
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type SystemProjectItemRespSingle_ = {
  __typename?: 'SystemProjectItemRespSingle';
  apiHost?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemProjectImage_>;
  kind?: Maybe<Scalars['String']['output']>;
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  nextPlan?: Maybe<SystemBillingNextPlanResponse_>;
  organization?: Maybe<SystemOrganizationBaseItem_>;
  owner?: Maybe<SystemMemberAccountInfo_>;
  plan?: Maybe<SystemBillingCurrentPlanResponse_>;
  region?: Maybe<Scalars['String']['output']>;
  usersCount?: Maybe<Scalars['Int']['output']>;
};

/** SystemProjectItemResponse output */
export type SystemProjectItemResponse_ = {
  __typename?: 'SystemProjectItemResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemProjectItemRespSingle_>;
};

export type SystemProjectItemWs_ = {
  __typename?: 'SystemProjectItemWS';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemWorkspaceImage_>;
  name: Scalars['String']['output'];
  region?: Maybe<Scalars['String']['output']>;
};

export type SystemProjectPlanResponse_ = {
  __typename?: 'SystemProjectPlanResponse';
  overagesPrice?: Maybe<Scalars['Float']['output']>;
  paymentDetail?: Maybe<SystemPaymentDetailsProjectResponse_>;
  plan?: Maybe<SystemBillingCurrentPlanResponse_>;
};

export type SystemProjectQuotasResponse_ = {
  __typename?: 'SystemProjectQuotasResponse';
  metricUsages?: Maybe<SystemBillingMetricUsagesListResponse_>;
  metricUsagesQuotas?: Maybe<SystemBillingMetricUsageQuotasListResponse_>;
};

/** ProjectUpdateMutationInput */
export type SystemProjectUpdateMutationInput_ = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<GraphQlCreateFileItemInput_>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SystemProjectUpdateResponse_ = {
  __typename?: 'SystemProjectUpdateResponse';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<GraphQlFileItemResponse_>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemProjectUserDetailsResponse_ = {
  __typename?: 'SystemProjectUserDetailsResponse';
  apiHost: Scalars['String']['output'];
  authenticationInfo?: Maybe<Array<Maybe<SystemAuthenticationInfo_>>>;
  backendUtilization?: Maybe<SystemBackendUtilizationResponse_>;
  backendWorkspaces?: Maybe<SystemWorkspaceListResponse_>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deploymentsProject?: Maybe<SystemDeploymentProjectListResponse_>;
  description?: Maybe<Scalars['String']['output']>;
  environmentsProject?: Maybe<SystemEnvironmentsProjectListResponse_>;
  frontendUtilization?: Maybe<SystemFrontendUtilizationResponse_>;
  frontendWorkspaces?: Maybe<SystemWorkspaceListResponse_>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemProjectImage_>;
  kind: Scalars['String']['output'];
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  metricUsages?: Maybe<SystemBillingMetricUsagesListResponse_>;
  metricUsagesQuotas?: Maybe<SystemBillingMetricUsageQuotasListResponse_>;
  name: Scalars['String']['output'];
  nextPlan?: Maybe<SystemBillingNextPlanResponse_>;
  organization?: Maybe<SystemOrganizationBaseItem_>;
  overagesPrice?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<SystemMemberAccountInfo_>;
  paymentDetail?: Maybe<SystemPaymentDetailsProjectResponse_>;
  plan?: Maybe<SystemBillingCurrentPlanResponse_>;
  region?: Maybe<Scalars['String']['output']>;
  teamMemberCount?: Maybe<Scalars['Int']['output']>;
};

export type SystemProjectUserResponse_ = {
  __typename?: 'SystemProjectUserResponse';
  myProjects: SystemProjectItemResponse_;
  sharedProjects: SystemProjectItemResponse_;
};

export type SystemQuery_ = {
  __typename?: 'SystemQuery';
  application?: Maybe<SystemApplication_>;
  applicationsList?: Maybe<SystemApplicationListResponse_>;
  asyncSessionStatus?: Maybe<SystemAsyncSessionStatusResponse_>;
  billingCurrentPlan?: Maybe<SystemBillingCurrentPlanResponse_>;
  /** @deprecated No longer supported. Use `system.memberPaymentDetails, system.organizationPaymentDetails or system.workspacePaymentDetails` instead. */
  billingDetails?: Maybe<SystemBillingDetailsResponse_>;
  /** @deprecated No longer supported. Use `system.memberBillingHistory, system.organizationBillingHistory or system.workspaceBillingHistory` instead. */
  billingInvoicesList: SystemBillingInvoicesListResponse_;
  billingMetricUsageQuotasList: SystemBillingMetricUsageQuotasListResponse_;
  billingMetricUsagesList: SystemBillingMetricUsagesListResponse_;
  ciGenerate?: Maybe<SystemGenerateEnvironmentOutput_>;
  ciGenerateAsync?: Maybe<AsyncSession_>;
  /** @deprecated No longer supported. Use `ciGenerate` instead. */
  ciPlan?: Maybe<SystemPlanEnvironmentOutput_>;
  ciStatus?: Maybe<SystemCiStatusOutput_>;
  deployStatus: SystemDeployStatusResult_;
  environmentBackupsList?: Maybe<SystemEnvironmentBackupListResponse_>;
  environmentMember?: Maybe<SystemEnvironmentMember_>;
  environmentMembersList?: Maybe<SystemEnvironmentMembersListResponse_>;
  environmentSettings?: Maybe<SystemEnvironmentSettings_>;
  environmentsList?: Maybe<SystemEnvironmentsListResponse_>;
  fileUploadSignInfo?: Maybe<SystemFileUploadSignInfo_>;
  functionsList?: Maybe<SystemFunctionListResponse_>;
  getEnvironmentRoles?: Maybe<Array<Maybe<SystemEnvironmentRoleList_>>>;
  inboxEventsList?: Maybe<SystemInboxEventsListResponse_>;
  introspection?: Maybe<IntrospectionQueryResponse_>;
  /** @deprecated No longer supported. Use `system.logsList` instead. */
  logs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated No longer supported. Use `system.logsListFiltered` instead. */
  logsList?: Maybe<Array<Maybe<SystemCloudLogsEntry_>>>;
  logsListFiltered?: Maybe<SystemLogsListFilteredResponse_>;
  memberAccount?: Maybe<SystemMemberAccountInfo_>;
  memberBillingHistory: SystemBillingInvoicesListResponse_;
  memberInvitation?: Maybe<SystemMemberInvitation_>;
  memberInvitationsList?: Maybe<SystemMemberInvitationsList_>;
  memberPaymentDetails?: Maybe<SystemPaymentDetailsResponse_>;
  organizationBillingHistory: SystemBillingInvoicesListResponse_;
  organizationById?: Maybe<SystemOrganizationItem_>;
  organizationInvitationById?: Maybe<SystemOrganizationInvitation_>;
  organizationPaymentDetails?: Maybe<SystemPaymentDetailsResponse_>;
  organizationsListByUser?: Maybe<SystemOrganizationsListResponse_>;
  projectInfoDetails?: Maybe<SystemProjectUserDetailsResponse_>;
  projectPlan?: Maybe<SystemProjectPlanResponse_>;
  projectQuotas?: Maybe<SystemProjectQuotasResponse_>;
  projectsUserListQuery?: Maybe<SystemProjectUserResponse_>;
  table?: Maybe<SystemTable_>;
  tableField?: Maybe<SystemTableField_>;
  tablesList: SystemTableListResponse_;
  userBillingConfiguration: SystemUserBillingConfigurationResponse_;
  userInvitationsList?: Maybe<SystemUserInvitationList_>;
  viewDryRun?: Maybe<SystemViewDryRunOutput_>;
  workspacePaymentDetails?: Maybe<SystemPaymentDetailsResponse_>;
  workspacesFrontendList?: Maybe<SystemWorkspaceListResponse_>;
  workspacesList?: Maybe<SystemWorkspaceListResponse_>;
};


export type SystemQueryApplicationArgs_ = {
  id: Scalars['String']['input'];
};


export type SystemQueryAsyncSessionStatusArgs_ = {
  sessionId: Scalars['String']['input'];
};


export type SystemQueryBillingCurrentPlanArgs_ = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryBillingInvoicesListArgs_ = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  by?: InputMaybe<SystemBillingInvoicesListFilterType_>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryBillingMetricUsageQuotasListArgs_ = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryBillingMetricUsagesListArgs_ = {
  filter?: InputMaybe<SystemBillingMetricUsagesListFilter_>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryCiGenerateArgs_ = {
  sourceEnvironmentId?: InputMaybe<Scalars['String']['input']>;
  tables?: InputMaybe<Array<Scalars['String']['input']>>;
  targetEnvironmentId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryCiGenerateAsyncArgs_ = {
  sourceEnvironmentId?: InputMaybe<Scalars['String']['input']>;
  tables?: InputMaybe<Array<Scalars['String']['input']>>;
  targetEnvironmentId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryCiPlanArgs_ = {
  sourceEnvironmentId?: InputMaybe<Scalars['String']['input']>;
  tables?: InputMaybe<Array<Scalars['String']['input']>>;
  targetEnvironmentId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryDeployStatusArgs_ = {
  buildName: Scalars['String']['input'];
};


export type SystemQueryEnvironmentBackupsListArgs_ = {
  environmentName?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryEnvironmentMemberArgs_ = {
  filter?: InputMaybe<SystemEnvironmentMemberFilter_>;
};


export type SystemQueryEnvironmentMembersListArgs_ = {
  environmentIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<SystemEnvironmentMembersListFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SystemEnvironmentMembersListSort_>>;
};


export type SystemQueryEnvironmentsListArgs_ = {
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryFunctionsListArgs_ = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SystemFunctionInfoFilter_>;
  orderBy?: InputMaybe<Array<InputMaybe<SystemFunctionInfoOrderBy_>>>;
};


export type SystemQueryGetEnvironmentRolesArgs_ = {
  email?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryInboxEventsListArgs_ = {
  filter?: InputMaybe<InboxEventsListFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SystemQueryLogsArgs_ = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  functionName: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type SystemQueryLogsListArgs_ = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  functionName: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type SystemQueryLogsListFilteredArgs_ = {
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  resource?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  startToken?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryMemberBillingHistoryArgs_ = {
  first?: InputMaybe<Scalars['Int']['input']>;
  hideOrganizationInvoices?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SystemQueryMemberInvitationArgs_ = {
  id: Scalars['String']['input'];
};


export type SystemQueryOrganizationBillingHistoryArgs_ = {
  first?: InputMaybe<Scalars['Int']['input']>;
  hideWorkspaceInvoices?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId: Scalars['ID']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SystemQueryOrganizationByIdArgs_ = {
  organizationId: Scalars['String']['input'];
};


export type SystemQueryOrganizationInvitationByIdArgs_ = {
  invitationId: Scalars['String']['input'];
};


export type SystemQueryOrganizationPaymentDetailsArgs_ = {
  organizationId: Scalars['ID']['input'];
};


export type SystemQueryProjectInfoDetailsArgs_ = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectPlanArgs_ = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectQuotasArgs_ = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectsUserListQueryArgs_ = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryTableArgs_ = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryTableFieldArgs_ = {
  id: Scalars['ID']['input'];
};


export type SystemQueryTablesListArgs_ = {
  filter?: InputMaybe<SystemTableListFilter_>;
};


export type SystemQueryUserBillingConfigurationArgs_ = {
  filterPlanProjects?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryViewDryRunArgs_ = {
  sql: Scalars['String']['input'];
};


export type SystemQueryWorkspacePaymentDetailsArgs_ = {
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

/** Relation */
export type SystemRelation_ = {
  __typename?: 'SystemRelation';
  refField?: Maybe<SystemTableField_>;
  refFieldDisplayName?: Maybe<Scalars['String']['output']>;
  refFieldIsList?: Maybe<Scalars['Boolean']['output']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']['output']>;
  refFieldName?: Maybe<Scalars['String']['output']>;
  refTable: SystemTable_;
  relationFieldName?: Maybe<Scalars['String']['output']>;
  relationTableName?: Maybe<Scalars['String']['output']>;
};

/** Relation Create Input */
export type SystemRelationCreateInput_ = {
  refFieldDisplayName?: InputMaybe<Scalars['String']['input']>;
  refFieldIsList: Scalars['Boolean']['input'];
  refFieldIsRequired: Scalars['Boolean']['input'];
  refFieldName?: InputMaybe<Scalars['String']['input']>;
  refTableId: Scalars['ID']['input'];
};

/** Relation Update Input */
export type SystemRelationUpdateInput_ = {
  refFieldDisplayName?: InputMaybe<Scalars['String']['input']>;
  refFieldIsList?: InputMaybe<Scalars['Boolean']['input']>;
  refFieldIsRequired?: InputMaybe<Scalars['Boolean']['input']>;
  refFieldName?: InputMaybe<Scalars['String']['input']>;
  refTableId?: InputMaybe<Scalars['ID']['input']>;
};

/** Schema Origin */
export type SystemSchemaOrigin_ = {
  __typename?: 'SystemSchemaOrigin';
  provider?: Maybe<Scalars['String']['output']>;
  type: SystemSchemaOriginType_;
};

/** Schema Origin Type Enum */
export enum SystemSchemaOriginType_ {
  Local_ = 'LOCAL',
  Remote_ = 'REMOTE',
  View_ = 'VIEW'
}

/** Smart Field Attributes */
export type SystemSmartFieldTypeAttributes_ = {
  __typename?: 'SystemSmartFieldTypeAttributes';
  format: Scalars['String']['output'];
  innerFields?: Maybe<Array<Maybe<SystemCustomTableField_>>>;
};

/** Smart Type Format Enum */
export enum SystemSmartTypeFormatEnum_ {
  Address_ = 'ADDRESS',
  Phone_ = 'PHONE'
}

/** Switch Field Attributes */
export type SystemSwitchFieldTypeAttributes_ = {
  __typename?: 'SystemSwitchFieldTypeAttributes';
  format: Scalars['String']['output'];
  listOptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Switch Type Format Enum */
export enum SystemSwitchTypeFormatEnum_ {
  ActiveInactive_ = 'ACTIVE_INACTIVE',
  Custom_ = 'CUSTOM',
  HighLow_ = 'HIGH_LOW',
  OnOff_ = 'ON_OFF',
  TrueFalse_ = 'TRUE_FALSE',
  YesNo_ = 'YES_NO'
}

/** Table */
export type SystemTable_ = {
  __typename?: 'SystemTable';
  application?: Maybe<SystemApplication_>;
  attributes?: Maybe<SystemTableAttributes_>;
  dataFeatures: SystemTableDataFeatures_;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<SystemTableField_>>;
  fieldsForIndexing?: Maybe<Array<Maybe<SystemTableField_>>>;
  id: Scalars['ID']['output'];
  indexes?: Maybe<Array<SystemTableIndex_>>;
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  origin: SystemSchemaOrigin_;
  schemaFeatures: SystemTableSchemaFeatures_;
};

/** Table Attributes */
export type SystemTableAttributes_ = SystemViewAttributes_;

/** Table Create Input */
export type SystemTableCreateInput_ = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** Table Data Features */
export type SystemTableDataFeatures_ = {
  __typename?: 'SystemTableDataFeatures';
  create: Scalars['Boolean']['output'];
  delete: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Table Delete Input */
export type SystemTableDeleteInput_ = {
  id: Scalars['ID']['input'];
};

/** TableField */
export type SystemTableField_ = {
  __typename?: 'SystemTableField';
  computedMode?: Maybe<SystemComputedFieldMode_>;
  dataFeatures: SystemFieldDataFeatures_;
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['String']['output']>;
  fieldType: SystemFieldType_;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributes_>;
  id: Scalars['ID']['output'];
  isList: Scalars['Boolean']['output'];
  isMeta: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  origin: SystemSchemaOrigin_;
  relation?: Maybe<SystemRelation_>;
  schemaFeatures: SystemFieldSchemaFeatures_;
  table: SystemTable_;
};

/** Table Field Create Input */
export type SystemTableFieldCreateInput_ = {
  computedMode?: InputMaybe<SystemComputedFieldMode_>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  fieldType: SystemFieldType_;
  fieldTypeAttributes?: InputMaybe<SystemFieldTypeAttributesInput_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  initialValue?: InputMaybe<Scalars['String']['input']>;
  isList: Scalars['Boolean']['input'];
  isRequired: Scalars['Boolean']['input'];
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<SystemRelationCreateInput_>;
  tableId: Scalars['ID']['input'];
};

/** Table Field Delete Input */
export type SystemTableFieldDeleteInput_ = {
  id: Scalars['ID']['input'];
};

/** Table Field Position Update Input */
export type SystemTableFieldPositionUpdateInput_ = {
  id: Scalars['ID']['input'];
  newPosition: Scalars['Int']['input'];
};

/** Table Field Update Input */
export type SystemTableFieldUpdateInput_ = {
  computedMode?: InputMaybe<SystemComputedFieldMode_>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  fieldType?: InputMaybe<SystemFieldType_>;
  fieldTypeAttributes?: InputMaybe<SystemFieldTypeAttributesInput_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  initialValue?: InputMaybe<Scalars['String']['input']>;
  isList?: InputMaybe<Scalars['Boolean']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<SystemRelationUpdateInput_>;
};

/** Table Index */
export type SystemTableIndex_ = {
  __typename?: 'SystemTableIndex';
  columns?: Maybe<Array<SystemTableIndexColumn_>>;
  id: Scalars['ID']['output'];
  isSystem: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  table: SystemTable_;
  type: Scalars['String']['output'];
};

/** Table Index Column */
export type SystemTableIndexColumn_ = {
  __typename?: 'SystemTableIndexColumn';
  name: Scalars['String']['output'];
};

/** Table Index Column Input */
export type SystemTableIndexColumnInput_ = {
  name: Scalars['String']['input'];
};

/** Table List Application Filter */
export type SystemTableListApplicationFilter_ = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Table List Filter */
export type SystemTableListFilter_ = {
  applications?: InputMaybe<Array<InputMaybe<SystemTableListApplicationFilter_>>>;
  onlyUserTables?: InputMaybe<Scalars['Boolean']['input']>;
  tableNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Table List Response */
export type SystemTableListResponse_ = {
  __typename?: 'SystemTableListResponse';
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemTable_>>>;
};

/** Table Schema Create Features */
export type SystemTableSchemaCreateFeatures_ = {
  __typename?: 'SystemTableSchemaCreateFeatures';
  DATE: Scalars['Boolean']['output'];
  FILE: Scalars['Boolean']['output'];
  GEO: Scalars['Boolean']['output'];
  ID: Scalars['Boolean']['output'];
  JSON: Scalars['Boolean']['output'];
  MISSING_RELATION: Scalars['Boolean']['output'];
  NUMBER: Scalars['Boolean']['output'];
  ONE_WAY_RELATION: Scalars['Boolean']['output'];
  RELATION: Scalars['Boolean']['output'];
  SMART: Scalars['Boolean']['output'];
  SWITCH: Scalars['Boolean']['output'];
  TEXT: Scalars['Boolean']['output'];
  UUID: Scalars['Boolean']['output'];
};

/** Table Schema Features */
export type SystemTableSchemaFeatures_ = {
  __typename?: 'SystemTableSchemaFeatures';
  computedFields: Scalars['Boolean']['output'];
  create: SystemTableSchemaCreateFeatures_;
  update?: Maybe<SystemTableSchemaMetaFieldFeatures_>;
};

/** Table Schema Meta Field Features */
export type SystemTableSchemaMetaFieldFeatures_ = {
  __typename?: 'SystemTableSchemaMetaFieldFeatures';
  displayName: Scalars['Boolean']['output'];
  name: Scalars['Boolean']['output'];
};

/** Table Update Input */
export type SystemTableUpdateInput_ = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Team Invitation Details */
export type SystemTeamInvitationDetails_ = {
  __typename?: 'SystemTeamInvitationDetails';
  accepted?: Maybe<Scalars['Boolean']['output']>;
  acceptedOn?: Maybe<Scalars['DateTime']['output']>;
  apiHost?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<SystemInvitedByName_>;
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  resentOn?: Maybe<Scalars['DateTime']['output']>;
};

/** Text Field Attributes */
export type SystemTextFieldTypeAttributes_ = {
  __typename?: 'SystemTextFieldTypeAttributes';
  fieldSize?: Maybe<Scalars['Int']['output']>;
  format: Scalars['String']['output'];
};

/** Text Type Format Enum */
export enum SystemTextTypeFormatEnum_ {
  Ein_ = 'EIN',
  Email_ = 'EMAIL',
  Html_ = 'HTML',
  Markdown_ = 'MARKDOWN',
  Name_ = 'NAME',
  Unformatted_ = 'UNFORMATTED'
}

/** UUID Field Attributes */
export type SystemUuidFieldTypeAttributes_ = {
  __typename?: 'SystemUUIDFieldTypeAttributes';
  fieldSize?: Maybe<Scalars['Int']['output']>;
};

export type SystemUserBillingConfigurationResponse_ = {
  __typename?: 'SystemUserBillingConfigurationResponse';
  availablePlans: Array<SystemBillingPlanBaseInfo_>;
  /** @deprecated Flag is deprecated */
  isCancelSubscriptionAvailable: Scalars['Boolean']['output'];
  /** @deprecated Flag is deprecated */
  isFreePlanAvailable: Scalars['Boolean']['output'];
};

/** User Invitation Details */
export type SystemUserInvitationDetails_ = {
  __typename?: 'SystemUserInvitationDetails';
  accepted?: Maybe<Scalars['Boolean']['output']>;
  acceptedOn?: Maybe<Scalars['DateTime']['output']>;
  apiHost?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<SystemInvitedByName_>;
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  resentOn?: Maybe<Scalars['DateTime']['output']>;
};

/** User Invitation List */
export type SystemUserInvitationList_ = {
  __typename?: 'SystemUserInvitationList';
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemUserInvitationDetails_>>>;
};

/** User Type */
export enum SystemUserType_ {
  Agency_ = 'Agency',
  Corporation_ = 'Corporation',
  MyOwn_ = 'MyOwn',
  Team_ = 'Team'
}

/** View Attributes */
export type SystemViewAttributes_ = {
  __typename?: 'SystemViewAttributes';
  query?: Maybe<Scalars['String']['output']>;
};

/** View Create Input */
export type SystemViewCreateInput_ = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  query: Scalars['String']['input'];
};

/** Dry Run Response for previewing SQL Views */
export type SystemViewDryRunOutput_ = {
  __typename?: 'SystemViewDryRunOutput';
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Scalars['JSON']['output']>;
  timeMs?: Maybe<Scalars['Int']['output']>;
};

/** View Update Input */
export type SystemViewUpdateInput_ = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

/** WorkspaceCreateMutationInput */
export type SystemWorkspaceCreateMutationInput_ = {
  authType?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<GraphQlCreateFileItemInput_>;
  kind?: InputMaybe<SystemWorkspaceKind_>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  profileId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

export type SystemWorkspaceCreateResponse_ = {
  __typename?: 'SystemWorkspaceCreateResponse';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** WorkspaceDeleteMutationInput */
export type SystemWorkspaceDeleteMutationInput_ = {
  workspaceId: Scalars['ID']['input'];
};

export type SystemWorkspaceImage_ = {
  __typename?: 'SystemWorkspaceImage';
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type SystemWorkspaceItem_ = {
  __typename?: 'SystemWorkspaceItem';
  apiHost?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemWorkspaceImage_>;
  is8BaseAuthEnabled?: Maybe<Scalars['Boolean']['output']>;
  isCiCdEnabled?: Maybe<Scalars['Boolean']['output']>;
  isOwner: Scalars['Boolean']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  lastDeployABInfo?: Maybe<SystemDeploymentAbItemResponse_>;
  name: Scalars['String']['output'];
  nextPlan?: Maybe<SystemBillingNextPlanResponse_>;
  organization?: Maybe<SystemOrganizationBaseItem_>;
  owner?: Maybe<SystemMemberAccountInfo_>;
  plan?: Maybe<SystemBillingCurrentPlanResponse_>;
  project?: Maybe<SystemProjectItemWs_>;
  region?: Maybe<Scalars['String']['output']>;
  summaryABInfo?: Maybe<SystemFrontendUtilizationAbResponse_>;
  teamMemberCount?: Maybe<Scalars['Int']['output']>;
  webSocket?: Maybe<Scalars['String']['output']>;
};

/** Workspace Kind */
export enum SystemWorkspaceKind_ {
  Frontend_ = 'frontend',
  General_ = 'general'
}

/** SystemWorkspaceListResponse output */
export type SystemWorkspaceListResponse_ = {
  __typename?: 'SystemWorkspaceListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemWorkspaceItem_>;
};

export enum SystemWorkspaceStatus_ {
  Active_ = 'active',
  Blocked_ = 'blocked',
  Canceled_ = 'canceled',
  Canceling_ = 'canceling',
  Pending_ = 'pending',
  Suspended_ = 'suspended'
}

/** WorkspaceUpdateMutationInput */
export type SystemWorkspaceUpdateMutationInput_ = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<GraphQlCreateFileItemInput_>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SystemWorkspaceUpdateResponse_ = {
  __typename?: 'SystemWorkspaceUpdateResponse';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<GraphQlFileItemResponse_>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Table */
export type Table_ = {
  __typename?: 'Table';
  application?: Maybe<Application_>;
  attributes?: Maybe<TableAttributes_>;
  dataFeatures: TableDataFeatures_;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<TableField_>>;
  fieldsForIndexing?: Maybe<Array<Maybe<TableField_>>>;
  id: Scalars['ID']['output'];
  indexes?: Maybe<Array<TableIndex_>>;
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  origin: SchemaOrigin_;
  schemaFeatures: TableSchemaFeatures_;
};

/** Table Attributes */
export type TableAttributes_ = ViewAttributes_;

/** Table Create Input */
export type TableCreateInput_ = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** Table Data Features */
export type TableDataFeatures_ = {
  __typename?: 'TableDataFeatures';
  create: Scalars['Boolean']['output'];
  delete: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Table Delete Input */
export type TableDeleteInput_ = {
  id: Scalars['ID']['input'];
};

/** TableField */
export type TableField_ = {
  __typename?: 'TableField';
  computedMode?: Maybe<ComputedFieldMode_>;
  dataFeatures: FieldDataFeatures_;
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['String']['output']>;
  fieldType: FieldType_;
  fieldTypeAttributes?: Maybe<FieldTypeAttributes_>;
  id: Scalars['ID']['output'];
  isList: Scalars['Boolean']['output'];
  isMeta: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  origin: SchemaOrigin_;
  relation?: Maybe<Relation_>;
  schemaFeatures: FieldSchemaFeatures_;
  table: Table_;
};

/** Table Field Create Input */
export type TableFieldCreateInput_ = {
  computedMode?: InputMaybe<ComputedFieldMode_>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  fieldType: FieldType_;
  fieldTypeAttributes?: InputMaybe<FieldTypeAttributesInput_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  initialValue?: InputMaybe<Scalars['String']['input']>;
  isList: Scalars['Boolean']['input'];
  isRequired: Scalars['Boolean']['input'];
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<RelationCreateInput_>;
  tableId: Scalars['ID']['input'];
};

/** Table Field Delete Input */
export type TableFieldDeleteInput_ = {
  id: Scalars['ID']['input'];
};

/** Table Field Position Update Input */
export type TableFieldPositionUpdateInput_ = {
  id: Scalars['ID']['input'];
  newPosition: Scalars['Int']['input'];
};

/** Table Field Update Input */
export type TableFieldUpdateInput_ = {
  computedMode?: InputMaybe<ComputedFieldMode_>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  fieldType?: InputMaybe<FieldType_>;
  fieldTypeAttributes?: InputMaybe<FieldTypeAttributesInput_>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  initialValue?: InputMaybe<Scalars['String']['input']>;
  isList?: InputMaybe<Scalars['Boolean']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<RelationUpdateInput_>;
};

/** Table Index */
export type TableIndex_ = {
  __typename?: 'TableIndex';
  columns?: Maybe<Array<TableIndexColumn_>>;
  id: Scalars['ID']['output'];
  isSystem: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  table: Table_;
  type: Scalars['String']['output'];
};

/** Table Index Column */
export type TableIndexColumn_ = {
  __typename?: 'TableIndexColumn';
  name: Scalars['String']['output'];
};

/** Table Index Column Input */
export type TableIndexColumnInput_ = {
  name: Scalars['String']['input'];
};

export enum TableIndexType_ {
  Index_ = 'INDEX',
  Unique_ = 'UNIQUE'
}

/** Table List Application Filter */
export type TableListApplicationFilter_ = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Table List Filter */
export type TableListFilter_ = {
  applications?: InputMaybe<Array<InputMaybe<TableListApplicationFilter_>>>;
  onlyUserTables?: InputMaybe<Scalars['Boolean']['input']>;
  tableNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Table List Response */
export type TableListResponse_ = {
  __typename?: 'TableListResponse';
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<Table_>>>;
};

/** Table Schema Create Features */
export type TableSchemaCreateFeatures_ = {
  __typename?: 'TableSchemaCreateFeatures';
  DATE: Scalars['Boolean']['output'];
  FILE: Scalars['Boolean']['output'];
  GEO: Scalars['Boolean']['output'];
  ID: Scalars['Boolean']['output'];
  JSON: Scalars['Boolean']['output'];
  MISSING_RELATION: Scalars['Boolean']['output'];
  NUMBER: Scalars['Boolean']['output'];
  ONE_WAY_RELATION: Scalars['Boolean']['output'];
  RELATION: Scalars['Boolean']['output'];
  SMART: Scalars['Boolean']['output'];
  SWITCH: Scalars['Boolean']['output'];
  TEXT: Scalars['Boolean']['output'];
  UUID: Scalars['Boolean']['output'];
};

/** Table Schema Features */
export type TableSchemaFeatures_ = {
  __typename?: 'TableSchemaFeatures';
  computedFields: Scalars['Boolean']['output'];
  create: TableSchemaCreateFeatures_;
  update?: Maybe<TableSchemaMetaFieldFeatures_>;
};

/** Table Schema Meta Field Features */
export type TableSchemaMetaFieldFeatures_ = {
  __typename?: 'TableSchemaMetaFieldFeatures';
  displayName: Scalars['Boolean']['output'];
  name: Scalars['Boolean']['output'];
};

/** Table Update Input */
export type TableUpdateInput_ = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Text Field Attributes */
export type TextFieldTypeAttributes_ = {
  __typename?: 'TextFieldTypeAttributes';
  fieldSize?: Maybe<Scalars['Int']['output']>;
  format: Scalars['String']['output'];
};

/** Text Type Format Enum */
export enum TextTypeFormatEnum_ {
  Ein_ = 'EIN',
  Email_ = 'EMAIL',
  Html_ = 'HTML',
  Markdown_ = 'MARKDOWN',
  Name_ = 'NAME',
  Unformatted_ = 'UNFORMATTED'
}

export type TrimFunctionArguments_ = {
  mode?: InputMaybe<StringTrimMode_>;
  str: Scalars['String']['input'];
};

/** UUID Field Attributes */
export type UuidFieldTypeAttributes_ = {
  __typename?: 'UUIDFieldTypeAttributes';
  fieldSize?: Maybe<Scalars['Int']['output']>;
};

export type UpdateByFilterBooleanSwitchInput_ = {
  invert?: InputMaybe<Scalars['Boolean']['input']>;
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByFilterJsonInput_ = {
  set?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateByFilterListStringInput_ = {
  insert?: InputMaybe<UpdateByFilterListStringInsertOperationInput_>;
  push?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  remove?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  removeValue?: InputMaybe<Scalars['String']['input']>;
  set?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  swap?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  unshift?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateByFilterListStringInsertOperationInput_ = {
  start: Scalars['Int']['input'];
  values: Array<Scalars['String']['input']>;
};

export type UpdateByFilterStringInput_ = {
  postfix?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  set?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByFilterStringSwitchInput_ = {
  set?: InputMaybe<Scalars['String']['input']>;
};

/** UpdatedFieldsFilter */
export type UpdatedFieldsFilter_ = {
  contains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  every?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadcareSignInfoResponse_ = {
  __typename?: 'UploadcareSignInfoResponse';
  expire: Scalars['String']['output'];
  publicKey: Scalars['String']['output'];
  signature: Scalars['String']['output'];
};

export type User_ = {
  __typename?: 'User';
  _description?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<File_>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User_>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  generatedText?: Maybe<ContentListResponse_>;
  id?: Maybe<Scalars['ID']['output']>;
  is8base?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  openApiKey?: Maybe<Scalars['String']['output']>;
  origin?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<UserPermissionList_>;
  promts?: Maybe<Prompt_>;
  roles?: Maybe<RoleListResponse_>;
  status?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UserGeneratedTextArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ContentFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ContentGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ContentSort_>>;
};


export type UserPermissionsArgs_ = {
  filter?: InputMaybe<PermissionInputFilter_>;
};


export type UserRolesArgs_ = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter_>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy_>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort_>>;
};

export type UserBillingConfigurationResponse_ = {
  __typename?: 'UserBillingConfigurationResponse';
  availablePlans: Array<BillingPlanBaseInfo_>;
  /** @deprecated Flag is deprecated */
  isCancelSubscriptionAvailable: Scalars['Boolean']['output'];
  /** @deprecated Flag is deprecated */
  isFreePlanAvailable: Scalars['Boolean']['output'];
};

/** Users create input */
export type UserCreateInput_ = {
  avatar?: InputMaybe<UsersAvatarRelationInput_>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  generatedText?: InputMaybe<UsersGeneratedTextRelationInput_>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  openApiKey?: InputMaybe<Scalars['String']['input']>;
  promts?: InputMaybe<UsersPromtsRelationInput_>;
  roles?: InputMaybe<UsersRolesRelationInput_>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users create many input */
export type UserCreateManyInput_ = {
  avatar?: InputMaybe<UsersAvatarManyRelationInput_>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  generatedText?: InputMaybe<UsersGeneratedTextManyRelationInput_>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  openApiKey?: InputMaybe<Scalars['String']['input']>;
  promts?: InputMaybe<UsersPromtsManyRelationInput_>;
  roles?: InputMaybe<UsersRolesManyRelationInput_>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users delete input */
export type UserDeleteInput_ = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** UserFieldsPermissions create input */
export type UserFieldsPermissions_ = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['Boolean']['input']>;
  is8base?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['Boolean']['input']>;
  openApiKey?: InputMaybe<Scalars['Boolean']['input']>;
  origin?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  timezone?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserFilter_ = {
  AND?: InputMaybe<Array<UserFilter_>>;
  OR?: InputMaybe<Array<UserFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<FileFilter_>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<UserFilter_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  email?: InputMaybe<StringPredicate_>;
  firstName?: InputMaybe<StringPredicate_>;
  generatedText?: InputMaybe<ContentRelationFilter_>;
  id?: InputMaybe<IdPredicate_>;
  is8base?: InputMaybe<BoolPredicate_>;
  is_self?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<StringPredicate_>;
  not_self?: InputMaybe<Scalars['Boolean']['input']>;
  openApiKey?: InputMaybe<StringPredicate_>;
  origin?: InputMaybe<StringPredicate_>;
  promts?: InputMaybe<PromptFilter_>;
  roles?: InputMaybe<RoleRelationFilter_>;
  status?: InputMaybe<StringPredicate_>;
  timezone?: InputMaybe<StringPredicate_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
};

export type UserGroupBy_ = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having_>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: UserGroupByQuery_;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort_>>;
};

export type UserGroupByQuery_ = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField_>>;
  avatar?: InputMaybe<FileGroupByQuery_>;
  createdAt?: InputMaybe<Array<GroupByField_>>;
  createdBy?: InputMaybe<UserGroupByQuery_>;
  email?: InputMaybe<Array<GroupByField_>>;
  firstName?: InputMaybe<Array<GroupByField_>>;
  generatedText?: InputMaybe<ContentGroupByQuery_>;
  id?: InputMaybe<Array<GroupByField_>>;
  is8base?: InputMaybe<Array<GroupByField_>>;
  lastName?: InputMaybe<Array<GroupByField_>>;
  openApiKey?: InputMaybe<Array<GroupByField_>>;
  origin?: InputMaybe<Array<GroupByField_>>;
  promts?: InputMaybe<PromptGroupByQuery_>;
  roles?: InputMaybe<RoleGroupByQuery_>;
  status?: InputMaybe<Array<GroupByField_>>;
  timezone?: InputMaybe<Array<GroupByField_>>;
  updatedAt?: InputMaybe<Array<GroupByField_>>;
};

/** User Invitation Details */
export type UserInvitationDetails_ = {
  __typename?: 'UserInvitationDetails';
  accepted?: Maybe<Scalars['Boolean']['output']>;
  acceptedOn?: Maybe<Scalars['DateTime']['output']>;
  apiHost?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<InvitedByName_>;
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  resentOn?: Maybe<Scalars['DateTime']['output']>;
};

/** User Invitation List */
export type UserInvitationList_ = {
  __typename?: 'UserInvitationList';
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<UserInvitationDetails_>>>;
};

export type UserKeyFilter_ = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  openApiKey?: InputMaybe<Scalars['String']['input']>;
};

/** UserListResponse output */
export type UserListResponse_ = {
  __typename?: 'UserListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse_>;
  /** List items */
  items: Array<User_>;
};

/** UserLoginInput */
export type UserLoginInput_ = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
  fromInvitation?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

/** UserManyResponse output */
export type UserManyResponse_ = {
  __typename?: 'UserManyResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<User_>;
};

/** No longer supported. Use `sort` instead. */
export enum UserOrderBy_ {
  CreatedAtAsc_ = 'createdAt_ASC',
  CreatedAtDesc_ = 'createdAt_DESC',
  DeletedAtAsc_ = 'deletedAt_ASC',
  DeletedAtDesc_ = 'deletedAt_DESC',
  EmailAsc_ = 'email_ASC',
  EmailDesc_ = 'email_DESC',
  FirstNameAsc_ = 'firstName_ASC',
  FirstNameDesc_ = 'firstName_DESC',
  IdAsc_ = 'id_ASC',
  IdDesc_ = 'id_DESC',
  Is8baseAsc_ = 'is8base_ASC',
  Is8baseDesc_ = 'is8base_DESC',
  IsOwnerAsc_ = 'isOwner_ASC',
  IsOwnerDesc_ = 'isOwner_DESC',
  LastNameAsc_ = 'lastName_ASC',
  LastNameDesc_ = 'lastName_DESC',
  OpenApiKeyAsc_ = 'openApiKey_ASC',
  OpenApiKeyDesc_ = 'openApiKey_DESC',
  OriginAsc_ = 'origin_ASC',
  OriginDesc_ = 'origin_DESC',
  StatusAsc_ = 'status_ASC',
  StatusDesc_ = 'status_DESC',
  TimezoneAsc_ = 'timezone_ASC',
  TimezoneDesc_ = 'timezone_DESC',
  UpdatedAtAsc_ = 'updatedAt_ASC',
  UpdatedAtDesc_ = 'updatedAt_DESC'
}

/** Users subscription payload */
export type UserPayload_ = {
  __typename?: 'UserPayload';
  mutation: MutationType_;
  node?: Maybe<User_>;
  previousValues?: Maybe<User_>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** User Permission */
export type UserPermission_ = {
  __typename?: 'UserPermission';
  permission?: Maybe<Scalars['JSON']['output']>;
  resource?: Maybe<Scalars['String']['output']>;
  resourceType?: Maybe<Scalars['String']['output']>;
};

/** User Permission List */
export type UserPermissionList_ = {
  __typename?: 'UserPermissionList';
  count: Scalars['Int']['output'];
  items?: Maybe<Array<UserPermission_>>;
};

export type UserRelationFilter_ = {
  every?: InputMaybe<UserFilter_>;
  none?: InputMaybe<UserFilter_>;
  some?: InputMaybe<UserFilter_>;
};

export type UserSort_ = {
  avatar?: InputMaybe<FileSort_>;
  createdAt?: InputMaybe<SortOrder_>;
  createdBy?: InputMaybe<UserSort_>;
  deletedAt?: InputMaybe<SortOrder_>;
  email?: InputMaybe<SortOrder_>;
  firstName?: InputMaybe<SortOrder_>;
  id?: InputMaybe<SortOrder_>;
  is8base?: InputMaybe<SortOrder_>;
  lastName?: InputMaybe<SortOrder_>;
  openApiKey?: InputMaybe<SortOrder_>;
  origin?: InputMaybe<SortOrder_>;
  promts?: InputMaybe<PromptSort_>;
  status?: InputMaybe<SortOrder_>;
  timezone?: InputMaybe<SortOrder_>;
  updatedAt?: InputMaybe<SortOrder_>;
};

/** Users subscription filter */
export type UserSubscriptionFilter_ = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType_>>>;
  node?: InputMaybe<UserFilter_>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter_>;
};

/** Users update input */
export type UserUpdateByFilterInput_ = {
  email?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
  firstName?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
  is8base?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput_>>>;
  isOwner?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput_>>>;
  lastName?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
  openApiKey?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
  origin?: InputMaybe<Array<InputMaybe<UpdateByFilterStringSwitchInput_>>>;
  status?: InputMaybe<Array<InputMaybe<UpdateByFilterStringSwitchInput_>>>;
  timezone?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput_>>>;
};

/** Users update input */
export type UserUpdateInput_ = {
  avatar?: InputMaybe<UsersAvatarUpdateRelationInput_>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  generatedText?: InputMaybe<UsersGeneratedTextUpdateRelationInput_>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  openApiKey?: InputMaybe<Scalars['String']['input']>;
  promts?: InputMaybe<UsersPromtsUpdateRelationInput_>;
  roles?: InputMaybe<UsersRolesUpdateRelationInput_>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Content create input from user */
export type User_ContentCreateInput_ = {
  contentText?: InputMaybe<ContentContentTextRelationInput_>;
  title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<ContentUserRelationInput_>;
};

/** Content update input from user */
export type User_ContentUpdateInput_ = {
  data: ContentUpdateInput_;
  filter?: InputMaybe<ContentKeyFilter_>;
};

export type User_PermissionFilter_ = {
  AND?: InputMaybe<Array<User_PermissionFilter_>>;
  OR?: InputMaybe<Array<User_PermissionFilter_>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<File_PermissionFilter_>;
  createdAt?: InputMaybe<DateTimePredicate_>;
  createdBy?: InputMaybe<User_PermissionFilter_>;
  deletedAt?: InputMaybe<IntPredicate_>;
  email?: InputMaybe<StringPredicate_>;
  firstName?: InputMaybe<StringPredicate_>;
  generatedText?: InputMaybe<Content_PermissionRelationFilter_>;
  id?: InputMaybe<IdPredicate_>;
  is8base?: InputMaybe<BoolPredicate_>;
  is_self?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<StringPredicate_>;
  not_self?: InputMaybe<Scalars['Boolean']['input']>;
  openApiKey?: InputMaybe<StringPredicate_>;
  origin?: InputMaybe<StringPredicate_>;
  promts?: InputMaybe<Prompt_PermissionFilter_>;
  roles?: InputMaybe<Role_PermissionRelationFilter_>;
  status?: InputMaybe<StringPredicate_>;
  timezone?: InputMaybe<StringPredicate_>;
  updatedAt?: InputMaybe<DateTimePredicate_>;
};

export type User_PermissionRelationFilter_ = {
  every?: InputMaybe<User_PermissionFilter_>;
  none?: InputMaybe<User_PermissionFilter_>;
  some?: InputMaybe<User_PermissionFilter_>;
};

/** Prompts create input from user */
export type User_PromptCreateInput_ = {
  prompt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PromptsUserRelationInput_>;
};

/** Prompts update input from user */
export type User_PromptUpdateInput_ = {
  prompt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PromptsUserUpdateRelationInput_>;
};

/** Users relation input */
export type UsersAvatarManyRelationInput_ = {
  connect?: InputMaybe<FileKeyFilter_>;
};

/** Users relation input */
export type UsersAvatarRelationInput_ = {
  connect?: InputMaybe<FileKeyFilter_>;
  create?: InputMaybe<Users_Avatar_FileCreateInput_>;
};

/** Users relation input */
export type UsersAvatarUpdateRelationInput_ = {
  connect?: InputMaybe<FileKeyFilter_>;
  create?: InputMaybe<Users_Avatar_FileCreateInput_>;
  disconnect?: InputMaybe<FileKeyFilter_>;
  reconnect?: InputMaybe<FileKeyFilter_>;
  update?: InputMaybe<Users_Avatar_FileUpdateInput_>;
};

/** Users relation input */
export type UsersGeneratedTextManyRelationInput_ = {
  connect?: InputMaybe<Array<ContentKeyFilter_>>;
};

/** Users relation input */
export type UsersGeneratedTextRelationInput_ = {
  connect?: InputMaybe<Array<ContentKeyFilter_>>;
  create?: InputMaybe<Array<InputMaybe<User_ContentCreateInput_>>>;
};

/** Users relation input */
export type UsersGeneratedTextUpdateRelationInput_ = {
  connect?: InputMaybe<Array<ContentKeyFilter_>>;
  create?: InputMaybe<Array<InputMaybe<User_ContentCreateInput_>>>;
  disconnect?: InputMaybe<Array<ContentKeyFilter_>>;
  reconnect?: InputMaybe<Array<ContentKeyFilter_>>;
  update?: InputMaybe<Array<InputMaybe<User_ContentUpdateInput_>>>;
};

/** Users relation input */
export type UsersPromtsManyRelationInput_ = {
  connect?: InputMaybe<PromptKeyFilter_>;
};

/** Users relation input */
export type UsersPromtsRelationInput_ = {
  connect?: InputMaybe<PromptKeyFilter_>;
  create?: InputMaybe<User_PromptCreateInput_>;
};

/** Users relation input */
export type UsersPromtsUpdateRelationInput_ = {
  connect?: InputMaybe<PromptKeyFilter_>;
  create?: InputMaybe<User_PromptCreateInput_>;
  disconnect?: InputMaybe<PromptKeyFilter_>;
  reconnect?: InputMaybe<PromptKeyFilter_>;
  update?: InputMaybe<User_PromptUpdateInput_>;
};

/** Users relation input */
export type UsersRolesManyRelationInput_ = {
  connect?: InputMaybe<Array<RoleKeyFilter_>>;
};

/** Users relation input */
export type UsersRolesRelationInput_ = {
  connect?: InputMaybe<Array<RoleKeyFilter_>>;
  create?: InputMaybe<Array<InputMaybe<Users_RoleCreateInput_>>>;
};

/** Users relation input */
export type UsersRolesUpdateRelationInput_ = {
  connect?: InputMaybe<Array<RoleKeyFilter_>>;
  create?: InputMaybe<Array<InputMaybe<Users_RoleCreateInput_>>>;
  disconnect?: InputMaybe<Array<RoleKeyFilter_>>;
  reconnect?: InputMaybe<Array<RoleKeyFilter_>>;
  update?: InputMaybe<Array<InputMaybe<Users_RoleUpdateInput_>>>;
};

/** Roles create input from users */
export type Users_RoleCreateInput_ = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput_>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput_>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionsInput_>;
  users?: InputMaybe<RolesUsersRelationInput_>;
};

/** Roles update input from users */
export type Users_RoleUpdateInput_ = {
  data: RoleUpdateInput_;
  filter?: InputMaybe<RoleKeyFilter_>;
};

/** Files create input from users_avatar */
export type Users_Avatar_FileCreateInput_ = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarRelationInput_>;
};

/** Files update input from users_avatar */
export type Users_Avatar_FileUpdateInput_ = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarUpdateRelationInput_>;
};

/** VerificationEmailResendInput */
export type VerificationEmailResendInput_ = {
  email: Scalars['String']['input'];
};

/** View Attributes */
export type ViewAttributes_ = {
  __typename?: 'ViewAttributes';
  query?: Maybe<Scalars['String']['output']>;
};

/** View Create Input */
export type ViewCreateInput_ = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  query: Scalars['String']['input'];
};

/** Dry Run Response for previewing SQL Views */
export type ViewDryRunOutput_ = {
  __typename?: 'ViewDryRunOutput';
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Scalars['JSON']['output']>;
  timeMs?: Maybe<Scalars['Int']['output']>;
};

/** View Update Input */
export type ViewUpdateInput_ = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

/** WorkspaceCreateMutationInput */
export type WorkspaceCreateMutationInput_ = {
  authType?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<GraphQlCreateFileItemInput_>;
  kind?: InputMaybe<WorkspaceKind_>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  profileId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

export type WorkspaceCreateResponse_ = {
  __typename?: 'WorkspaceCreateResponse';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** WorkspaceDeleteMutationInput */
export type WorkspaceDeleteMutationInput_ = {
  workspaceId: Scalars['ID']['input'];
};

export type WorkspaceImage_ = {
  __typename?: 'WorkspaceImage';
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** LoginResponseWorkspace name and id */
export type WorkspaceInfo_ = {
  __typename?: 'WorkspaceInfo';
  name?: Maybe<Scalars['String']['output']>;
  workspace?: Maybe<Scalars['ID']['output']>;
};

export type WorkspaceItem_ = {
  __typename?: 'WorkspaceItem';
  apiHost?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<WorkspaceImage_>;
  is8BaseAuthEnabled?: Maybe<Scalars['Boolean']['output']>;
  isCiCdEnabled?: Maybe<Scalars['Boolean']['output']>;
  isOwner: Scalars['Boolean']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  lastDeployABInfo?: Maybe<DeploymentAbItemResponse_>;
  name: Scalars['String']['output'];
  nextPlan?: Maybe<BillingNextPlanResponse_>;
  organization?: Maybe<SystemOrganizationBaseItem_>;
  owner?: Maybe<SystemMemberAccountInfo_>;
  plan?: Maybe<BillingCurrentPlanResponse_>;
  project?: Maybe<ProjectItemWs_>;
  region?: Maybe<Scalars['String']['output']>;
  summaryABInfo?: Maybe<FrontendUtilizationAbResponse_>;
  teamMemberCount?: Maybe<Scalars['Int']['output']>;
  webSocket?: Maybe<Scalars['String']['output']>;
};

/** Workspace Kind */
export enum WorkspaceKind_ {
  Frontend_ = 'frontend',
  General_ = 'general'
}

/** WorkspaceListResponse output */
export type WorkspaceListResponse_ = {
  __typename?: 'WorkspaceListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<WorkspaceItem_>;
};

export enum WorkspaceStatus_ {
  Active_ = 'active',
  Blocked_ = 'blocked',
  Canceled_ = 'canceled',
  Canceling_ = 'canceling',
  Pending_ = 'pending',
  Suspended_ = 'suspended'
}

/** WorkspaceUpdateMutationInput */
export type WorkspaceUpdateMutationInput_ = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<GraphQlCreateFileItemInput_>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type WorkspaceUpdateResponse_ = {
  __typename?: 'WorkspaceUpdateResponse';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<GraphQlFileItemResponse_>;
  name?: Maybe<Scalars['String']['output']>;
};

export type IsAllowedCallbackUrlQueryResponse_ = {
  __typename?: 'isAllowedCallbackURLQueryResponse';
  isEnabled: Scalars['Boolean']['output'];
};

"""Apply transformations to file with image type"""
directive @resizeImage(crop: ResizeImageDirectiveCropOptions, flip: ResizeImageDirectiveFlipOptions, progressive: Boolean, resize: ResizeImageDirectiveResizeOptions, rotate: Int) on FIELD

enum AggregationFunctionType {
  ANY_VALUE
  AVG
  COUNT
  GROUP_CONCAT
  MAX
  MIN
  STDDEV_POP
  STDDEV_SAMP
  SUM
  VAR_POP
  VAR_SAMP
}

type ApiToken {
  _description: String
  createdAt: DateTime
  createdBy: User
  deletedAt: Int
  id: ID
  name: String
  roles(after: String, before: String, filter: RoleFilter, first: Int, groupBy: RoleGroupBy, last: Int, orderBy: [RoleOrderBy], skip: Int, sort: [RoleSort!]): RoleListResponse
  updatedAt: DateTime
}

"""ApiTokens create input"""
input ApiTokenCreateInput {
  name: String!
  roles: ApiTokensRolesRelationInput
}

"""ApiTokens delete input"""
input ApiTokenDeleteInput {
  force: Boolean
  id: ID
}

input ApiTokenFilter {
  AND: [ApiTokenFilter!]
  OR: [ApiTokenFilter!]
  _fullText: String
  createdAt: DateTimePredicate
  createdBy: UserFilter
  deletedAt: IntPredicate
  id: IDPredicate
  name: StringPredicate
  roles: RoleRelationFilter
  token: StringPredicate
  updatedAt: DateTimePredicate
}

input ApiTokenGroupBy {
  first: Int
  having: Having
  last: Int
  query: ApiTokenGroupByQuery!
  skip: Int
  sort: [GroupBySort!]
}

input ApiTokenGroupByQuery {
  _group: [GroupIdentifiersGroupByField!]
  createdAt: [GroupByField!]
  createdBy: UserGroupByQuery
  id: [GroupByField!]
  name: [GroupByField!]
  roles: RoleGroupByQuery
  updatedAt: [GroupByField!]
}

input ApiTokenKeyFilter {
  id: ID
  name: String
}

"""ApiTokenListResponse output"""
type ApiTokenListResponse {
  """List items count"""
  count: Int!

  """Aggregated items"""
  groups: [GroupByResponse!]!

  """List items"""
  items: [ApiToken!]!
}

"""ApiTokenManyResponse output"""
type ApiTokenManyResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [ApiToken!]!
}

"""No longer supported. Use `sort` instead."""
enum ApiTokenOrderBy {
  createdAt_ASC
  createdAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  token_ASC
  token_DESC
  updatedAt_ASC
  updatedAt_DESC
}

"""ApiTokens subscription payload"""
type ApiTokenPayload {
  mutation: MutationType!
  node: ApiToken
  previousValues: ApiToken
  updatedFields: [String]
}

input ApiTokenRelationFilter {
  every: ApiTokenFilter
  none: ApiTokenFilter
  some: ApiTokenFilter
}

"""API Token Response"""
type ApiTokenResponse {
  createdAt: DateTime
  createdBy: User
  deletedAt: Int
  id: ID
  name: String
  roles(after: String, before: String, filter: RoleFilter, first: Int, groupBy: RoleGroupBy, last: Int, orderBy: [RoleOrderBy], skip: Int, sort: [RoleSort!]): RoleListResponse
  token: String!
  updatedAt: DateTime
}

input ApiTokenSort {
  createdAt: SortOrder
  createdBy: UserSort
  deletedAt: SortOrder
  id: SortOrder
  name: SortOrder
  updatedAt: SortOrder
}

"""ApiTokens subscription filter"""
input ApiTokenSubscriptionFilter {
  mutation_in: [MutationType]
  node: ApiTokenFilter
  updatedFields: UpdatedFieldsFilter
}

"""ApiTokens update input"""
input ApiTokenUpdateByFilterInput {
  name: [UpdateByFilterStringInput]
  token: [UpdateByFilterStringInput]
}

"""ApiTokens update input"""
input ApiTokenUpdateInput {
  id: ID
  name: String
  roles: ApiTokensRolesUpdateRelationInput
}

input ApiToken_PermissionFilter {
  AND: [ApiToken_PermissionFilter!]
  OR: [ApiToken_PermissionFilter!]
  _fullText: String
  createdAt: DateTimePredicate
  createdBy: User_PermissionFilter
  deletedAt: IntPredicate
  id: IDPredicate
  name: StringPredicate
  roles: Role_PermissionRelationFilter
  token: StringPredicate
  updatedAt: DateTimePredicate
}

input ApiToken_PermissionRelationFilter {
  every: ApiToken_PermissionFilter
  none: ApiToken_PermissionFilter
  some: ApiToken_PermissionFilter
}

"""ApiTokens relation input"""
input ApiTokensRolesRelationInput {
  connect: [RoleKeyFilter!]
  create: [ApiTokens_RoleCreateInput]
}

"""ApiTokens relation input"""
input ApiTokensRolesUpdateRelationInput {
  connect: [RoleKeyFilter!]
  create: [ApiTokens_RoleCreateInput]
  disconnect: [RoleKeyFilter!]
  reconnect: [RoleKeyFilter!]
  update: [ApiTokens_RoleUpdateInput]
}

"""Roles create input from apiTokens"""
input ApiTokens_RoleCreateInput {
  apiTokens: RolesApiTokensRelationInput
  authenticationProfiles: RolesAuthenticationProfilesRelationInput
  description: String
  name: String!
  permissions: PermissionsInput
  users: RolesUsersRelationInput
}

"""Roles update input from apiTokens"""
input ApiTokens_RoleUpdateInput {
  data: RoleUpdateInput!
  filter: RoleKeyFilter
}

"""Application"""
type Application {
  appType: String!
  createdAt: DateTime!
  description: String
  displayName: String
  id: ID!
  name: String!
  status: ApplicationStatusEnum!
}

"""ApplicationDeleteMutationInput"""
input ApplicationDeleteMutationInput {
  force: Boolean
  id: String!
}

"""Application install input"""
input ApplicationInstallInput {
  appType: String!
  description: String
  displayName: String
  name: String!
  status: ApplicationStatusEnum = INACTIVE
}

"""ApplicationListResponse output"""
type ApplicationListResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [Application!]!
}

"""Application Status Enum"""
enum ApplicationStatusEnum {
  ACTIVE
  INACTIVE
}

"""Application update input"""
input ApplicationUpdateInput {
  description: String
  displayName: String
  id: String!
  name: String
  status: ApplicationStatusEnum
}

"""Async Session"""
type AsyncSession {
  sessionId: String!
}

type AsyncSessionStatusResponse {
  message: String
  status: String!
}

"""Auth response"""
type Auth {
  accessToken: String
  accessTokenExpiresAt: Int
  idToken: String
  idTokenExpiresAt: Int
  refreshToken: String
}

type AuthenticationProfile {
  _description: String
  attributes: AuthenticationProfileAttributes
  audiences: [String]
  clientId: String
  createdAt: DateTime
  createdBy: User
  databaseName: String
  deletedAt: Int
  domain: String
  id: ID
  managementDomain: String
  name: String
  roles(after: String, before: String, filter: RoleFilter, first: Int, groupBy: RoleGroupBy, last: Int, orderBy: [RoleOrderBy], skip: Int, sort: [RoleSort!]): RoleListResponse
  secret: String
  selfSignUpEmailDomains: [String]
  selfSignUpEnabled: Boolean
  type: String
  updatedAt: DateTime
}

"""Authentication Profile Attributes"""
union AuthenticationProfileAttributes = CognitoAuthProfileAttributes

"""Authentication profile connection options"""
type AuthenticationProfileConnectionOptions {
  facebook: FacebookOptions
  github: GithubOptions
  google: GoogleOptions
}

"""Authentication profile connection options input"""
input AuthenticationProfileConnectionsOptionsInput {
  facebook: FacebookOptionsInput
  github: GithubOptionsInput
  google: GoogleOptionsInput
}

"""AuthenticationProfiles create input"""
input AuthenticationProfileCreateInput {
  audiences: [String]
  clientId: String
  databaseName: String
  domain: String
  managementDomain: String
  name: String!
  roles: AuthenticationProfilesRolesRelationInput
  secret: String
  selfSignUpEmailDomains: [String]
  selfSignUpEnabled: Boolean = false
  type: String = "8BASE"
}

"""AuthenticationProfiles create many input"""
input AuthenticationProfileCreateManyInput {
  audiences: [String]
  clientId: String
  databaseName: String
  domain: String
  managementDomain: String
  name: String!
  roles: AuthenticationProfilesRolesManyRelationInput
  secret: String
  selfSignUpEmailDomains: [String]
  selfSignUpEnabled: Boolean = false
  type: String = "8BASE"
}

"""AuthenticationProfiles delete input"""
input AuthenticationProfileDeleteInput {
  force: Boolean
  id: ID
}

input AuthenticationProfileFilter {
  AND: [AuthenticationProfileFilter!]
  OR: [AuthenticationProfileFilter!]
  _fullText: String
  clientId: StringPredicate
  createdAt: DateTimePredicate
  createdBy: UserFilter
  databaseName: StringPredicate
  deletedAt: IntPredicate
  domain: StringPredicate
  id: IDPredicate
  managementDomain: StringPredicate
  name: StringPredicate
  roles: RoleRelationFilter
  secret: StringPredicate
  selfSignUpEnabled: BoolPredicate
  type: StringPredicate
  updatedAt: DateTimePredicate
}

input AuthenticationProfileGroupBy {
  first: Int
  having: Having
  last: Int
  query: AuthenticationProfileGroupByQuery!
  skip: Int
  sort: [GroupBySort!]
}

input AuthenticationProfileGroupByQuery {
  _group: [GroupIdentifiersGroupByField!]
  audiences: [GroupByField!]
  clientId: [GroupByField!]
  createdAt: [GroupByField!]
  createdBy: UserGroupByQuery
  databaseName: [GroupByField!]
  domain: [GroupByField!]
  id: [GroupByField!]
  managementDomain: [GroupByField!]
  name: [GroupByField!]
  roles: RoleGroupByQuery
  secret: [GroupByField!]
  selfSignUpEmailDomains: [GroupByField!]
  selfSignUpEnabled: [GroupByField!]
  type: [GroupByField!]
  updatedAt: [GroupByField!]
}

input AuthenticationProfileKeyFilter {
  id: ID
  name: String
}

"""AuthenticationProfileListResponse output"""
type AuthenticationProfileListResponse {
  """List items count"""
  count: Int!

  """Aggregated items"""
  groups: [GroupByResponse!]!

  """List items"""
  items: [AuthenticationProfile!]!
}

"""AuthenticationProfileManyResponse output"""
type AuthenticationProfileManyResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [AuthenticationProfile!]!
}

"""No longer supported. Use `sort` instead."""
enum AuthenticationProfileOrderBy {
  clientId_ASC
  clientId_DESC
  createdAt_ASC
  createdAt_DESC
  databaseName_ASC
  databaseName_DESC
  deletedAt_ASC
  deletedAt_DESC
  domain_ASC
  domain_DESC
  id_ASC
  id_DESC
  managementDomain_ASC
  managementDomain_DESC
  name_ASC
  name_DESC
  secret_ASC
  secret_DESC
  selfSignUpEnabled_ASC
  selfSignUpEnabled_DESC
  type_ASC
  type_DESC
  updatedAt_ASC
  updatedAt_DESC
}

"""AuthenticationProfiles subscription payload"""
type AuthenticationProfilePayload {
  mutation: MutationType!
  node: AuthenticationProfile
  previousValues: AuthenticationProfile
  updatedFields: [String]
}

input AuthenticationProfileRelationFilter {
  every: AuthenticationProfileFilter
  none: AuthenticationProfileFilter
  some: AuthenticationProfileFilter
}

input AuthenticationProfileSort {
  clientId: SortOrder
  createdAt: SortOrder
  createdBy: UserSort
  databaseName: SortOrder
  deletedAt: SortOrder
  domain: SortOrder
  id: SortOrder
  managementDomain: SortOrder
  name: SortOrder
  secret: SortOrder
  selfSignUpEnabled: SortOrder
  type: SortOrder
  updatedAt: SortOrder
}

"""AuthenticationProfiles subscription filter"""
input AuthenticationProfileSubscriptionFilter {
  mutation_in: [MutationType]
  node: AuthenticationProfileFilter
  updatedFields: UpdatedFieldsFilter
}

"""AuthenticationProfiles update input"""
input AuthenticationProfileUpdateByFilterInput {
  audiences: [UpdateByFilterListStringInput]
  clientId: [UpdateByFilterStringInput]
  databaseName: [UpdateByFilterStringInput]
  domain: [UpdateByFilterStringInput]
  managementDomain: [UpdateByFilterStringInput]
  name: [UpdateByFilterStringInput]
  secret: [UpdateByFilterStringInput]
  selfSignUpEmailDomains: [UpdateByFilterListStringInput]
  selfSignUpEnabled: [UpdateByFilterBooleanSwitchInput]
  type: [UpdateByFilterStringInput]
}

"""AuthenticationProfiles update input"""
input AuthenticationProfileUpdateInput {
  audiences: [String]
  clientId: String
  databaseName: String
  domain: String
  id: ID
  managementDomain: String
  name: String
  roles: AuthenticationProfilesRolesUpdateRelationInput
  secret: String
  selfSignUpEmailDomains: [String]
  selfSignUpEnabled: Boolean
  type: String
}

input AuthenticationProfile_PermissionFilter {
  AND: [AuthenticationProfile_PermissionFilter!]
  OR: [AuthenticationProfile_PermissionFilter!]
  _fullText: String
  clientId: StringPredicate
  createdAt: DateTimePredicate
  createdBy: User_PermissionFilter
  databaseName: StringPredicate
  deletedAt: IntPredicate
  domain: StringPredicate
  id: IDPredicate
  managementDomain: StringPredicate
  name: StringPredicate
  roles: Role_PermissionRelationFilter
  secret: StringPredicate
  selfSignUpEnabled: BoolPredicate
  type: StringPredicate
  updatedAt: DateTimePredicate
}

input AuthenticationProfile_PermissionRelationFilter {
  every: AuthenticationProfile_PermissionFilter
  none: AuthenticationProfile_PermissionFilter
  some: AuthenticationProfile_PermissionFilter
}

"""AuthenticationProfiles relation input"""
input AuthenticationProfilesRolesManyRelationInput {
  connect: [RoleKeyFilter!]
}

"""AuthenticationProfiles relation input"""
input AuthenticationProfilesRolesRelationInput {
  connect: [RoleKeyFilter!]
  create: [AuthenticationProfiles_RoleCreateInput]
}

"""AuthenticationProfiles relation input"""
input AuthenticationProfilesRolesUpdateRelationInput {
  connect: [RoleKeyFilter!]
  create: [AuthenticationProfiles_RoleCreateInput]
  disconnect: [RoleKeyFilter!]
  reconnect: [RoleKeyFilter!]
  update: [AuthenticationProfiles_RoleUpdateInput]
}

"""Roles create input from authenticationProfiles"""
input AuthenticationProfiles_RoleCreateInput {
  apiTokens: RolesApiTokensRelationInput
  authenticationProfiles: RolesAuthenticationProfilesRelationInput
  description: String
  name: String!
  permissions: PermissionsInput
  users: RolesUsersRelationInput
}

"""Roles update input from authenticationProfiles"""
input AuthenticationProfiles_RoleUpdateInput {
  data: RoleUpdateInput!
  filter: RoleKeyFilter
}

type AuthenticationSetting {
  _description: String
  allowedCallbacks: [String]
  allowedLogouts: [String]
  allowedWebOrigins: [String]
  connections: AuthenticationProfileConnectionOptions
  createdAt: DateTime
  createdBy: User
  updatedAt: DateTime
}

input AuthenticationSettingFilter {
  AND: [AuthenticationSettingFilter!]
  OR: [AuthenticationSettingFilter!]
  _fullText: String
  createdAt: DateTimePredicate
  createdBy: UserFilter
  deletedAt: IntPredicate
  updatedAt: DateTimePredicate
}

"""AuthenticationSettings subscription payload"""
type AuthenticationSettingPayload {
  mutation: MutationType!
  node: AuthenticationSetting
  previousValues: AuthenticationSetting
  updatedFields: [String]
}

"""AuthenticationSettings subscription filter"""
input AuthenticationSettingSubscriptionFilter {
  mutation_in: [MutationType]
  node: AuthenticationSettingFilter
  updatedFields: UpdatedFieldsFilter
}

"""AuthenticationSettings update input"""
input AuthenticationSettingUpdateInput {
  allowedCallbacks: [String]
  allowedLogouts: [String]
  allowedWebOrigins: [String]
  connections: AuthenticationProfileConnectionsOptionsInput
}

"""Users create input from avatar"""
input Avatar_UserCreateInput {
  avatar: UsersAvatarRelationInput
  email: String!
  firstName: String
  generatedText: UsersGeneratedTextRelationInput
  lastName: String
  openApiKey: String
  promts: UsersPromtsRelationInput
  roles: UsersRolesRelationInput
  status: String = "inactive"
  timezone: String
}

"""Users update input from avatar"""
input Avatar_UserUpdateInput {
  data: UserUpdateInput!
  filter: UserKeyFilter
}

type AwsSignInfoResponse {
  fields: JSON!
  path: String!
  url: String!
}

"""The `BigInt` scalar type represents whole numeric values."""
scalar BigInt

input BigIntPredicateHaving {
  AND: [BigIntPredicateHaving!]
  OR: [BigIntPredicateHaving!]
  equals: BigInt
  gt: BigInt
  gte: BigInt
  in: [BigInt!]
  is_empty: Boolean
  is_not_empty: Boolean
  lt: BigInt
  lte: BigInt
  not_equals: BigInt
  not_in: [BigInt!]
}

type BillingCurrentPlanResponse {
  displayName: String
  id: ID
  name: String
  nextPlan: BillingNextPlanResponse
  paymentDate: DateTime
  pdf: String
  price: Int
  status: WorkspaceStatus
  trialEnd: DateTime
}

enum BillingDetailsOrigin {
  member
  organization
  workspace
}

type BillingDetailsResponse {
  brand: String
  expMonth: Int
  expYear: Int
  last4: String
  origin: BillingDetailsOrigin!
}

type BillingInvoiceItem {
  amountDue: Float
  amountPaid: Float
  amountRemaining: Float
  description: String
  endingBalance: Float
  id: ID!
  invoicePdf: String
  number: String
  organization: BillingInvoiceItemOrganizationInfo
  paid: Boolean
  periodEnd: DateTime
  periodStart: DateTime
  plan: BillingInvoiceItemPlanInfo
  project: BillingInvoiceItemProjectInfo
  status: String
  total: Float
}

type BillingInvoiceItemOrganizationInfo {
  id: ID
  name: String
}

type BillingInvoiceItemPlanInfo {
  displayName: String
  id: ID
  name: String
}

type BillingInvoiceItemProjectInfo {
  id: ID
  name: String
}

enum BillingInvoicesListFilterType {
  CUSTOMER
  PROJECT
}

"""BillingInvoicesListResponse output"""
type BillingInvoicesListResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [BillingInvoiceItem!]!
}

type BillingLimitMetricItem {
  description: String
  displayName: String
  name: String
  showPriority: Int
  tooltip: String
  unit: String
}

type BillingMetricOverageItem {
  value: Float
  warning: String
}

type BillingMetricUsageItem {
  limitMetric: BillingLimitMetricItem
  overage: BillingMetricOverageItem
  value: Float
}

type BillingMetricUsageQuotaItem {
  limitMetric: BillingLimitMetricItem
  value: Float
}

"""BillingMetricUsageQuotasListResponse output"""
type BillingMetricUsageQuotasListResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [BillingMetricUsageQuotaItem!]!
}

input BillingMetricUsagesListFilter {
  entryDate: DateTimePredicate!
}

"""BillingMetricUsagesListResponse output"""
type BillingMetricUsagesListResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [BillingMetricUsageItem!]!
}

type BillingNextPlanResponse {
  displayName: String
  id: ID
  name: String
  pdf: String
  price: Int
}

type BillingPlanBaseInfo {
  description: String
  displayName: String
  id: ID
  isCustom: Boolean
  isLegacy: Boolean
  limitMetrics: [BillingPlanLimitMetricItem]
  name: String
  pdf: String
  price: Int
}

type BillingPlanLimitMetricItem {
  displayName: String
  hardLimit: Float
  name: String
  overagePrice: Int
  softLimit: Float
}

"""BillingPlanUpdateMutationInput"""
input BillingPlanUpdateMutationInput {
  planId: ID!
  projectID: ID!
}

input BoolPredicate {
  equals: Boolean
  is_empty: Boolean
  is_not_empty: Boolean
  not_equals: Boolean
}

input BoolPredicateHaving {
  AND: [BoolPredicateHaving!]
  OR: [BoolPredicateHaving!]
  equals: Boolean
  is_empty: Boolean
  is_not_empty: Boolean
  not_equals: Boolean
}

"""ChangePasswordInput"""
input ChangePasswordInput {
  authProfileId: ID!
  email: String!
  newPassword: String!
  oldPassword: String!
  refreshToken: String!
}

"""Authentication Profile Attributes for Cognito"""
type CognitoAuthProfileAttributes {
  clientAuthDomain: String
}

"""Computed field mode"""
enum ComputedFieldMode {
  STORED
  VIRTUAL
}

type Content {
  _description: String
  contentText(after: String, before: String, filter: ContentTextFilter, first: Int, groupBy: ContentTextGroupBy, last: Int, orderBy: [ContentTextOrderBy], skip: Int, sort: [ContentTextSort!]): ContentTextListResponse
  createdAt: DateTime
  createdBy: User
  deletedAt: Int
  id: ID
  title: String
  updatedAt: DateTime
  user(after: String, before: String, filter: UserFilter, first: Int, groupBy: UserGroupBy, last: Int, orderBy: [UserOrderBy], skip: Int, sort: [UserSort!]): UserListResponse
}

"""Content relation input"""
input ContentContentTextManyRelationInput {
  connect: [ContentTextKeyFilter!]
}

"""Content relation input"""
input ContentContentTextRelationInput {
  connect: [ContentTextKeyFilter!]
  create: [Content_ContentTextCreateInput]
}

"""Content relation input"""
input ContentContentTextUpdateRelationInput {
  connect: [ContentTextKeyFilter!]
  create: [Content_ContentTextCreateInput]
  disconnect: [ContentTextKeyFilter!]
  reconnect: [ContentTextKeyFilter!]
  update: [Content_ContentTextUpdateInput]
}

"""Content create input"""
input ContentCreateInput {
  contentText: ContentContentTextRelationInput
  title: String = "Untitled"
  user: ContentUserRelationInput
}

"""Content create many input"""
input ContentCreateManyInput {
  contentText: ContentContentTextManyRelationInput
  title: String = "Untitled"
  user: ContentUserManyRelationInput
}

"""Content delete input"""
input ContentDeleteInput {
  force: Boolean
  id: ID
}

"""ContentFieldsPermissions create input"""
input ContentFieldsPermissions {
  createdAt: Boolean
  title: Boolean
  updatedAt: Boolean
}

input ContentFilter {
  AND: [ContentFilter!]
  OR: [ContentFilter!]
  _fullText: String
  contentText: ContentTextRelationFilter
  createdAt: DateTimePredicate
  createdBy: UserFilter
  deletedAt: IntPredicate
  id: IDPredicate
  title: StringPredicate
  updatedAt: DateTimePredicate
  user: UserRelationFilter
}

input ContentGroupBy {
  first: Int
  having: Having
  last: Int
  query: ContentGroupByQuery!
  skip: Int
  sort: [GroupBySort!]
}

input ContentGroupByQuery {
  _group: [GroupIdentifiersGroupByField!]
  contentText: ContentTextGroupByQuery
  createdAt: [GroupByField!]
  createdBy: UserGroupByQuery
  id: [GroupByField!]
  title: [GroupByField!]
  updatedAt: [GroupByField!]
  user: UserGroupByQuery
}

input ContentKeyFilter {
  id: ID
}

"""ContentListResponse output"""
type ContentListResponse {
  """List items count"""
  count: Int!

  """Aggregated items"""
  groups: [GroupByResponse!]!

  """List items"""
  items: [Content!]!
}

"""ContentManyResponse output"""
type ContentManyResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [Content!]!
}

"""No longer supported. Use `sort` instead."""
enum ContentOrderBy {
  createdAt_ASC
  createdAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  updatedAt_ASC
  updatedAt_DESC
}

"""Content subscription payload"""
type ContentPayload {
  mutation: MutationType!
  node: Content
  previousValues: Content
  updatedFields: [String]
}

input ContentRelationFilter {
  every: ContentFilter
  none: ContentFilter
  some: ContentFilter
}

input ContentSort {
  createdAt: SortOrder
  createdBy: UserSort
  deletedAt: SortOrder
  id: SortOrder
  title: SortOrder
  updatedAt: SortOrder
}

"""Content subscription filter"""
input ContentSubscriptionFilter {
  mutation_in: [MutationType]
  node: ContentFilter
  updatedFields: UpdatedFieldsFilter
}

type ContentText {
  _description: String
  content(after: String, before: String, filter: ContentFilter, first: Int, groupBy: ContentGroupBy, last: Int, orderBy: [ContentOrderBy], skip: Int, sort: [ContentSort!]): ContentListResponse
  createdAt: DateTime
  createdBy: User
  deletedAt: Int
  id: ID
  text: String
  updatedAt: DateTime
}

"""ContentText relation input"""
input ContentTextContentManyRelationInput {
  connect: [ContentKeyFilter!]
}

"""ContentText relation input"""
input ContentTextContentRelationInput {
  connect: [ContentKeyFilter!]
  create: [ContentText_ContentCreateInput]
}

"""ContentText relation input"""
input ContentTextContentUpdateRelationInput {
  connect: [ContentKeyFilter!]
  create: [ContentText_ContentCreateInput]
  disconnect: [ContentKeyFilter!]
  reconnect: [ContentKeyFilter!]
  update: [ContentText_ContentUpdateInput]
}

"""ContentText create input"""
input ContentTextCreateInput {
  content: ContentTextContentRelationInput
  text: String!
}

"""ContentText create many input"""
input ContentTextCreateManyInput {
  content: ContentTextContentManyRelationInput
  text: String!
}

"""ContentText delete input"""
input ContentTextDeleteInput {
  force: Boolean
  id: ID
}

"""ContentTextFieldsPermissions create input"""
input ContentTextFieldsPermissions {
  createdAt: Boolean
  text: Boolean
  updatedAt: Boolean
}

input ContentTextFilter {
  AND: [ContentTextFilter!]
  OR: [ContentTextFilter!]
  _fullText: String
  content: ContentRelationFilter
  createdAt: DateTimePredicate
  createdBy: UserFilter
  deletedAt: IntPredicate
  id: IDPredicate
  text: StringPredicate
  updatedAt: DateTimePredicate
}

input ContentTextGroupBy {
  first: Int
  having: Having
  last: Int
  query: ContentTextGroupByQuery!
  skip: Int
  sort: [GroupBySort!]
}

input ContentTextGroupByQuery {
  _group: [GroupIdentifiersGroupByField!]
  content: ContentGroupByQuery
  createdAt: [GroupByField!]
  createdBy: UserGroupByQuery
  id: [GroupByField!]
  text: [GroupByField!]
  updatedAt: [GroupByField!]
}

input ContentTextKeyFilter {
  id: ID
}

"""ContentTextListResponse output"""
type ContentTextListResponse {
  """List items count"""
  count: Int!

  """Aggregated items"""
  groups: [GroupByResponse!]!

  """List items"""
  items: [ContentText!]!
}

"""ContentTextManyResponse output"""
type ContentTextManyResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [ContentText!]!
}

"""No longer supported. Use `sort` instead."""
enum ContentTextOrderBy {
  createdAt_ASC
  createdAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  updatedAt_ASC
  updatedAt_DESC
}

"""ContentText subscription payload"""
type ContentTextPayload {
  mutation: MutationType!
  node: ContentText
  previousValues: ContentText
  updatedFields: [String]
}

input ContentTextRelationFilter {
  every: ContentTextFilter
  none: ContentTextFilter
  some: ContentTextFilter
}

input ContentTextSort {
  createdAt: SortOrder
  createdBy: UserSort
  deletedAt: SortOrder
  id: SortOrder
  text: SortOrder
  updatedAt: SortOrder
}

"""ContentText subscription filter"""
input ContentTextSubscriptionFilter {
  mutation_in: [MutationType]
  node: ContentTextFilter
  updatedFields: UpdatedFieldsFilter
}

"""ContentText update input"""
input ContentTextUpdateByFilterInput {
  text: [UpdateByFilterStringInput]
}

"""ContentText update input"""
input ContentTextUpdateInput {
  content: ContentTextContentUpdateRelationInput
  id: ID
  text: String
}

"""Content create input from contentText"""
input ContentText_ContentCreateInput {
  contentText: ContentContentTextRelationInput
  title: String = "Untitled"
  user: ContentUserRelationInput
}

"""Content update input from contentText"""
input ContentText_ContentUpdateInput {
  data: ContentUpdateInput!
  filter: ContentKeyFilter
}

input ContentText_PermissionFilter {
  AND: [ContentText_PermissionFilter!]
  OR: [ContentText_PermissionFilter!]
  _fullText: String
  content: Content_PermissionRelationFilter
  createdAt: DateTimePredicate
  createdBy: User_PermissionFilter
  deletedAt: IntPredicate
  id: IDPredicate
  text: StringPredicate
  updatedAt: DateTimePredicate
}

input ContentText_PermissionRelationFilter {
  every: ContentText_PermissionFilter
  none: ContentText_PermissionFilter
  some: ContentText_PermissionFilter
}

"""Content update input"""
input ContentUpdateByFilterInput {
  title: [UpdateByFilterStringInput]
}

"""Content update input"""
input ContentUpdateInput {
  contentText: ContentContentTextUpdateRelationInput
  id: ID
  title: String
  user: ContentUserUpdateRelationInput
}

"""Content relation input"""
input ContentUserManyRelationInput {
  connect: [UserKeyFilter!]
}

"""Content relation input"""
input ContentUserRelationInput {
  connect: [UserKeyFilter!]
  create: [GeneratedText_UserCreateInput]
}

"""Content relation input"""
input ContentUserUpdateRelationInput {
  connect: [UserKeyFilter!]
  create: [GeneratedText_UserCreateInput]
  disconnect: [UserKeyFilter!]
  reconnect: [UserKeyFilter!]
  update: [GeneratedText_UserUpdateInput]
}

"""ContentText create input from content"""
input Content_ContentTextCreateInput {
  content: ContentTextContentRelationInput
  text: String!
}

"""ContentText update input from content"""
input Content_ContentTextUpdateInput {
  data: ContentTextUpdateInput!
  filter: ContentTextKeyFilter
}

input Content_PermissionFilter {
  AND: [Content_PermissionFilter!]
  OR: [Content_PermissionFilter!]
  _fullText: String
  contentText: ContentText_PermissionRelationFilter
  createdAt: DateTimePredicate
  createdBy: User_PermissionFilter
  deletedAt: IntPredicate
  id: IDPredicate
  title: StringPredicate
  updatedAt: DateTimePredicate
  user: User_PermissionRelationFilter
}

input Content_PermissionRelationFilter {
  every: Content_PermissionFilter
  none: Content_PermissionFilter
  some: Content_PermissionFilter
}

"""Custom Table Field Type"""
type CustomTableField {
  computedMode: ComputedFieldMode
  defaultValue: String
  description: String
  displayName: String
  expression: String
  fieldType: FieldType
  fieldTypeAttributes: FieldTypeAttributes
  isList: Boolean!
  isRequired: Boolean!
  isUnique: Boolean
  name: String
}

"""
A date string, such as `2007-12-25`, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
"""
scalar Date

"""Date Field Attributes"""
type DateFieldTypeAttributes {
  format: String!
}

enum DatePartFunctionType {
  DATE
  DAY
  DAY_NAME
  DAY_OF_MONTH
  DAY_OF_WEEK
  DAY_OF_YEAR
  HOUR
  LAST_DAY
  MICROSECOND
  MINUTE
  MONTH
  MONTH_NAME
  QUARTER
  SECOND
  TIME
  WEEK
  WEEK_DAY
  WEEK_OF_YEAR
  YEAR
  YEAR_WEEK
}

input DatePredicateHaving {
  AND: [DatePredicateHaving!]
  OR: [DatePredicateHaving!]
  equals: Date
  gt: Date
  gte: Date
  in: [Date!]
  is_empty: Boolean
  is_not_empty: Boolean
  lt: Date
  lte: Date
  not_equals: Date
  not_in: [Date!]
}

input DateRelativePredicateType {
  op: RelativePredicateOpEnum
  unit: RelativePredicateUnitEnum
  value: String!
}

input DateRelativePredicates {
  gt: DateRelativePredicateType
  gte: DateRelativePredicateType
  lt: DateRelativePredicateType
  lte: DateRelativePredicateType
}

"""
A date-time string at UTC, such as `2007-12-25T16:15:30Z`, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
"""
scalar DateTime

input DateTimePredicate {
  equals: DateTime
  gt: DateTime
  gte: DateTime
  in: [DateTime!]
  is_empty: Boolean
  is_not_empty: Boolean
  lt: DateTime
  lte: DateTime
  not_equals: DateTime
  not_in: [DateTime!]
  relative: DateRelativePredicates
}

input DateTimePredicateHaving {
  AND: [DateTimePredicateHaving!]
  OR: [DateTimePredicateHaving!]
  equals: DateTime
  gt: DateTime
  gte: DateTime
  in: [DateTime!]
  is_empty: Boolean
  is_not_empty: Boolean
  lt: DateTime
  lte: DateTime
  not_equals: DateTime
  not_in: [DateTime!]
}

"""Date Type Format Enum"""
enum DateTypeFormatEnum {
  DATE
  DATETIME
}

"""DeployDataResponse"""
type DeployDataResponse {
  buildName: String!
  uploadBuildUrl: String!
  uploadMetaDataUrl: String!
}

enum DeployModeEnum {
  FULL
  FUNCTIONS
  MIGRATIONS
  ONLY_PLUGINS
  ONLY_PROJECT
}

"""DeployOptions"""
input DeployOptions {
  extensionNames: [String]
  mode: DeployModeEnum = ONLY_PROJECT
  pluginNames: [String]
}

enum DeployStatusEnum {
  compiling
  complete_error
  complete_success
  deploying
  initialize
  preparing
}

"""DeployStatusResult"""
type DeployStatusResult {
  message: String
  status: DeployStatusEnum!
}

"""DeployingBuildInput"""
input DeployingBuildInput {
  buildName: String!
  options: DeployOptions
}

type DeploymentABItemResponse {
  dateDeploy: DateTime
  statusDeploy: String
  urlDeploy: String
  userDeploy: SystemMemberAccountInfo
  versionDeploy: String
  versionFrontEnd: String
}

type EnvironmentBackupItem {
  name: String!
  size: Float!
}

type EnvironmentItem {
  id: ID!
  name: String!
}

"""EnvironmentSetupInput"""
input EnvironmentSetupInput {
  deleteLock: Boolean
  introspection: Boolean
}

type EnvironmentVariable {
  _description: String
  createdAt: DateTime
  createdBy: User
  deletedAt: Int
  id: ID
  name: String
  updatedAt: DateTime
  value: String
}

"""EnvironmentVariables create input"""
input EnvironmentVariableCreateInput {
  name: String!
  value: String!
}

"""EnvironmentVariables create many input"""
input EnvironmentVariableCreateManyInput {
  name: String!
  value: String!
}

"""EnvironmentVariables delete input"""
input EnvironmentVariableDeleteInput {
  force: Boolean
  id: ID
}

input EnvironmentVariableFilter {
  AND: [EnvironmentVariableFilter!]
  OR: [EnvironmentVariableFilter!]
  _fullText: String
  createdAt: DateTimePredicate
  createdBy: UserFilter
  deletedAt: IntPredicate
  id: IDPredicate
  name: StringPredicate
  updatedAt: DateTimePredicate
  value: StringPredicate
}

input EnvironmentVariableGroupBy {
  first: Int
  having: Having
  last: Int
  query: EnvironmentVariableGroupByQuery!
  skip: Int
  sort: [GroupBySort!]
}

input EnvironmentVariableGroupByQuery {
  _group: [GroupIdentifiersGroupByField!]
  createdAt: [GroupByField!]
  createdBy: UserGroupByQuery
  id: [GroupByField!]
  name: [GroupByField!]
  updatedAt: [GroupByField!]
  value: [GroupByField!]
}

input EnvironmentVariableKeyFilter {
  id: ID
  name: String
}

"""EnvironmentVariableListResponse output"""
type EnvironmentVariableListResponse {
  """List items count"""
  count: Int!

  """Aggregated items"""
  groups: [GroupByResponse!]!

  """List items"""
  items: [EnvironmentVariable!]!
}

"""EnvironmentVariableManyResponse output"""
type EnvironmentVariableManyResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [EnvironmentVariable!]!
}

"""No longer supported. Use `sort` instead."""
enum EnvironmentVariableOrderBy {
  createdAt_ASC
  createdAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  value_ASC
  value_DESC
}

"""EnvironmentVariables subscription payload"""
type EnvironmentVariablePayload {
  mutation: MutationType!
  node: EnvironmentVariable
  previousValues: EnvironmentVariable
  updatedFields: [String]
}

input EnvironmentVariableSort {
  createdAt: SortOrder
  createdBy: UserSort
  deletedAt: SortOrder
  id: SortOrder
  name: SortOrder
  updatedAt: SortOrder
  value: SortOrder
}

"""EnvironmentVariables subscription filter"""
input EnvironmentVariableSubscriptionFilter {
  mutation_in: [MutationType]
  node: EnvironmentVariableFilter
  updatedFields: UpdatedFieldsFilter
}

"""EnvironmentVariables update input"""
input EnvironmentVariableUpdateByFilterInput {
  name: [UpdateByFilterStringInput]
  value: [UpdateByFilterStringInput]
}

"""EnvironmentVariables update input"""
input EnvironmentVariableUpdateInput {
  id: ID
  name: String
  value: String
}

"""Facebook connection params"""
type FacebookOptions {
  app_id: String!
  app_secret: String!
  enabled: Boolean!
}

"""Facebook connection params input"""
input FacebookOptionsInput {
  app_id: String!
  app_secret: String!
  enabled: Boolean!
}

"""Field Data Features"""
type FieldDataFeatures {
  create: Boolean!
  sort: Boolean!
  update: Boolean!
}

"""Field Schema Features"""
type FieldSchemaFeatures {
  delete: Boolean!
  update: Boolean!
}

"""Field types"""
enum FieldType {
  DATE
  FILE
  GEO
  ID
  JSON
  MISSING_RELATION
  NUMBER
  ONE_WAY_RELATION
  RELATION
  SMART
  SWITCH
  TEXT
  UUID
}

"""Field Type Attributes"""
union FieldTypeAttributes = DateFieldTypeAttributes | FileFieldTypeAttributes | GeoFieldTypeAttributes | MissingRelationFieldTypeAttributes | NumberFieldTypeAttributes | SmartFieldTypeAttributes | SwitchFieldTypeAttributes | TextFieldTypeAttributes | UUIDFieldTypeAttributes

"""Field Type Attributes Input"""
input FieldTypeAttributesInput {
  autoIncrement: Boolean
  currency: String
  expiration: Int
  fieldSize: Int
  format: String
  isBigInt: Boolean
  listOptions: [String!]
  maxSize: Int
  maxValue: Float
  minValue: Float
  precision: Int
  srid: Int
  typeRestrictions: [String!]
}

type File {
  _description: String
  createdAt: DateTime
  createdBy: User
  deletedAt: Int

  """No longer supported. Use `downloadUrl` instead."""
  downloadStorageUrl: String
  downloadUrl: String

  """
  No longer supported. Use `system.fileUploadSignInfo.AwsSignInfoResponse.fields` instead.
  """
  fields: JSON
  fileId: String
  filename: String
  id: ID
  meta: JSON
  mods: JSON
  previewUrl: String
  provider: String
  public: Boolean
  settings_landingPageImage(after: String, before: String, filter: SettingFilter, first: Int, groupBy: SettingGroupBy, last: Int, orderBy: [SettingOrderBy], skip: Int, sort: [SettingSort!]): SettingListResponse
  settings_menuBarLogo(after: String, before: String, filter: SettingFilter, first: Int, groupBy: SettingGroupBy, last: Int, orderBy: [SettingOrderBy], skip: Int, sort: [SettingSort!]): SettingListResponse
  shareUrl: String
  updatedAt: DateTime

  """No longer supported"""
  uploadUrl: String

  """No longer supported"""
  uploaded: Boolean
  users_avatar(after: String, before: String, filter: UserFilter, first: Int, groupBy: UserGroupBy, last: Int, orderBy: [UserOrderBy], skip: Int, sort: [UserSort!]): UserListResponse
}

"""Files create input"""
input FileCreateInput {
  fileId: String
  filename: String
  meta: JSON
  mods: JSON
  public: Boolean = false
  users_avatar: FilesUsers_avatarRelationInput
}

"""Files create many input"""
input FileCreateManyInput {
  fileId: String
  filename: String
  meta: JSON
  mods: JSON
  public: Boolean = false
  users_avatar: FilesUsers_avatarManyRelationInput
}

"""Files delete input"""
input FileDeleteInput {
  force: Boolean
  id: ID
}

"""File Field Attributes"""
type FileFieldTypeAttributes {
  expiration: Int
  format: String!
  maxSize: Int
  showTitle: Boolean @deprecated(reason: "Field is deprecated")
  showUrl: Boolean @deprecated(reason: "Field is deprecated")
  typeRestrictions: [String!]
}

"""FileFieldsPermissions create input"""
input FileFieldsPermissions {
  createdAt: Boolean
  downloadUrl: Boolean
  fields: Boolean
  fileId: Boolean
  filename: Boolean
  meta: Boolean
  mods: Boolean
  provider: Boolean
  public: Boolean
  shareUrl: Boolean
  updatedAt: Boolean
  uploadUrl: Boolean
  uploaded: Boolean
}

input FileFilter {
  AND: [FileFilter!]
  OR: [FileFilter!]
  _fullText: String
  createdAt: DateTimePredicate
  createdBy: UserFilter
  deletedAt: IntPredicate
  downloadUrl: StringPredicate
  fileId: StringPredicate
  filename: StringPredicate
  id: IDPredicate
  provider: StringPredicate
  public: BoolPredicate
  settings_landingPageImage: SettingRelationFilter
  settings_menuBarLogo: SettingRelationFilter
  shareUrl: StringPredicate
  updatedAt: DateTimePredicate
  uploadUrl: StringPredicate
  uploaded: BoolPredicate
  users_avatar: UserRelationFilter
}

input FileGroupBy {
  first: Int
  having: Having
  last: Int
  query: FileGroupByQuery!
  skip: Int
  sort: [GroupBySort!]
}

input FileGroupByQuery {
  _group: [GroupIdentifiersGroupByField!]
  createdAt: [GroupByField!]
  createdBy: UserGroupByQuery
  downloadUrl: [GroupByField!]
  fields: [GroupByField!]
  fileId: [GroupByField!]
  filename: [GroupByField!]
  id: [GroupByField!]
  meta: [GroupByField!]
  mods: [GroupByField!]
  provider: [GroupByField!]
  public: [GroupByField!]
  settings_landingPageImage: SettingGroupByQuery
  settings_menuBarLogo: SettingGroupByQuery
  shareUrl: [GroupByField!]
  updatedAt: [GroupByField!]
  uploadUrl: [GroupByField!]
  uploaded: [GroupByField!]
  users_avatar: UserGroupByQuery
}

input FileKeyFilter {
  fileId: String
  id: ID
}

"""FileListResponse output"""
type FileListResponse {
  """List items count"""
  count: Int!

  """Aggregated items"""
  groups: [GroupByResponse!]!

  """List items"""
  items: [File!]!
}

"""FileManyResponse output"""
type FileManyResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [File!]!
}

"""No longer supported. Use `sort` instead."""
enum FileOrderBy {
  createdAt_ASC
  createdAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  downloadUrl_ASC
  downloadUrl_DESC
  fields_ASC
  fields_DESC
  fileId_ASC
  fileId_DESC
  filename_ASC
  filename_DESC
  id_ASC
  id_DESC
  meta_ASC
  meta_DESC
  mods_ASC
  mods_DESC
  provider_ASC
  provider_DESC
  public_ASC
  public_DESC
  shareUrl_ASC
  shareUrl_DESC
  updatedAt_ASC
  updatedAt_DESC
  uploadUrl_ASC
  uploadUrl_DESC
  uploaded_ASC
  uploaded_DESC
}

"""Files subscription payload"""
type FilePayload {
  mutation: MutationType!
  node: File
  previousValues: File
  updatedFields: [String]
}

input FileSort {
  createdAt: SortOrder
  createdBy: UserSort
  deletedAt: SortOrder
  downloadUrl: SortOrder
  fileId: SortOrder
  filename: SortOrder
  id: SortOrder
  provider: SortOrder
  public: SortOrder
  shareUrl: SortOrder
  updatedAt: SortOrder
  uploadUrl: SortOrder
  uploaded: SortOrder
}

type FileStackSignInfoResponse {
  apiKey: String!
  path: String!
  policy: String!
  signature: String!
}

"""Files subscription filter"""
input FileSubscriptionFilter {
  mutation_in: [MutationType]
  node: FileFilter
  updatedFields: UpdatedFieldsFilter
}

"""File Type Format Enum"""
enum FileTypeFormatEnum {
  FILE
  IMAGE
}

"""Files update input"""
input FileUpdateByFilterInput {
  downloadUrl: [UpdateByFilterStringInput]
  fields: [UpdateByFilterJsonInput]
  fileId: [UpdateByFilterStringInput]
  filename: [UpdateByFilterStringInput]
  meta: [UpdateByFilterJsonInput]
  mods: [UpdateByFilterJsonInput]
  provider: [UpdateByFilterStringInput]
  public: [UpdateByFilterBooleanSwitchInput]
  shareUrl: [UpdateByFilterStringInput]
  uploadUrl: [UpdateByFilterStringInput]
  uploaded: [UpdateByFilterBooleanSwitchInput]
}

"""Files update input"""
input FileUpdateInput {
  fileId: String
  filename: String
  id: ID
  meta: JSON
  mods: JSON
  public: Boolean
  users_avatar: FilesUsers_avatarUpdateRelationInput
}

type FileUploadInfoResponse {
  apiKey: String!
  path: String!
  policy: String!
  signature: String!
}

input File_PermissionFilter {
  AND: [File_PermissionFilter!]
  OR: [File_PermissionFilter!]
  _fullText: String
  createdAt: DateTimePredicate
  createdBy: User_PermissionFilter
  deletedAt: IntPredicate
  downloadUrl: StringPredicate
  fileId: StringPredicate
  filename: StringPredicate
  id: IDPredicate
  provider: StringPredicate
  public: BoolPredicate
  settings_landingPageImage: Setting_PermissionRelationFilter
  settings_menuBarLogo: Setting_PermissionRelationFilter
  shareUrl: StringPredicate
  updatedAt: DateTimePredicate
  uploadUrl: StringPredicate
  uploaded: BoolPredicate
  users_avatar: User_PermissionRelationFilter
}

"""Files relation input"""
input FilesUsers_avatarManyRelationInput {
  connect: [UserKeyFilter!]
}

"""Files relation input"""
input FilesUsers_avatarRelationInput {
  connect: [UserKeyFilter!]
  create: [Avatar_UserCreateInput]
}

"""Files relation input"""
input FilesUsers_avatarUpdateRelationInput {
  connect: [UserKeyFilter!]
  create: [Avatar_UserCreateInput]
  disconnect: [UserKeyFilter!]
  reconnect: [UserKeyFilter!]
  update: [Avatar_UserUpdateInput]
}

input FloatPredicateHaving {
  AND: [FloatPredicateHaving!]
  OR: [FloatPredicateHaving!]
  equals: Float
  gt: Float
  gte: Float
  in: [Float!]
  is_empty: Boolean
  is_not_empty: Boolean
  lt: Float
  lte: Float
  not_equals: Float
  not_in: [Float!]
}

type FrontendUtilizationABResponse {
  CDN: Boolean
  assets: Int
  customStates: Int
  functions: Int
  layouts: Int
  libraries: Int
  pages: Int
  requests: Int
  resources: Int
}

"""FunctionInfo"""
interface FunctionInfo {
  application: Application
  description: String
  functionType: FunctionType!
  name: String!
}

"""FunctionInfoFilter"""
input FunctionInfoFilter {
  description: String
  functionType: FunctionType
  name: String
}

"""FunctionInfoOrderBy"""
enum FunctionInfoOrderBy {
  description_ASC
  description_DESC
  functionType_ASC
  functionType_DESC
  name_ASC
  name_DESC
}

"""FunctionListResponse output"""
type FunctionListResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [FunctionInfo!]!
}

"""FunctionResolverInfo"""
type FunctionResolverInfo implements FunctionInfo {
  application: Application
  description: String
  functionType: FunctionType!
  gqlType: String!
  name: String!
}

"""FunctionTaskInfo"""
type FunctionTaskInfo implements FunctionInfo {
  application: Application
  description: String
  functionType: FunctionType!
  name: String!
  scheduleExpression: String
}

"""FunctionTriggerInfo"""
type FunctionTriggerInfo implements FunctionInfo {
  application: Application
  description: String
  functionType: FunctionType!
  name: String!
  operation: String!
  tableName: String!
  type: String!
}

"""FunctionType"""
enum FunctionType {
  resolver
  schedule
  task
  trigger
  webhook
}

"""FunctionWebhookInfo"""
type FunctionWebhookInfo implements FunctionInfo {
  application: Application
  description: String
  functionType: FunctionType!
  httpMethod: String!
  name: String!
  workspaceFullPath: String!
  workspaceRelativePath: String!
}

"""Users create input from generatedText"""
input GeneratedText_UserCreateInput {
  avatar: UsersAvatarRelationInput
  email: String!
  firstName: String
  generatedText: UsersGeneratedTextRelationInput
  lastName: String
  openApiKey: String
  promts: UsersPromtsRelationInput
  roles: UsersRolesRelationInput
  status: String = "inactive"
  timezone: String
}

"""Users update input from generatedText"""
input GeneratedText_UserUpdateInput {
  data: UserUpdateInput!
  filter: UserKeyFilter
}

"""Geo Field Attributes"""
type GeoFieldTypeAttributes {
  format: String!
  srid: Int
}

"""Github connection params"""
type GithubOptions {
  client_id: String!
  client_secret: String!
  enabled: Boolean!
}

"""Github connection params input"""
input GithubOptionsInput {
  client_id: String!
  client_secret: String!
  enabled: Boolean!
}

"""Google connection params"""
type GoogleOptions {
  client_id: String!
  client_secret: String!
  enabled: Boolean!
}

"""Google connection params input"""
input GoogleOptionsInput {
  client_id: String!
  client_secret: String!
  enabled: Boolean!
}

"""GraphQLCreateFileCustomInput"""
input GraphQLCreateFileCustomInput {
  fileId: String
  filename: String
  public: Boolean
}

"""GraphQLCreateFileItemInput"""
input GraphQLCreateFileItemInput {
  create: GraphQLCreateFileCustomInput
}

"""GraphQLFileItemResponse"""
type GraphQLFileItemResponse {
  downloadUrl: String
  id: String
}

input GroupByField {
  as: String
  fn: [GroupByFieldFunction]
}

input GroupByFieldFunction {
  abs: Boolean
  aggregate: AggregationFunctionType
  ascii: Boolean
  bitLength: Boolean
  ceil: Boolean
  charLength: Boolean
  crc32: Boolean
  datePart: DatePartFunctionType
  distinct: Boolean
  floor: Boolean
  hex: Boolean
  ifNull: String
  isNull: Boolean
  left: Int
  length: Boolean
  like: PatternFunctionArguments
  locate: LocateFunctionArguments
  lower: Boolean
  lpad: StringPadFunctionArguments
  ltrim: Boolean
  mod: Int
  notLike: PatternFunctionArguments
  nullIf: String
  replace: ReplaceFunctionArguments
  reverse: Boolean
  right: Int
  round: Int
  rpad: StringPadFunctionArguments
  rtrim: Boolean
  sign: Boolean
  substring: SubstringFunctionArguments
  trim: TrimFunctionArguments
  truncate: Int
  upper: Boolean
}

type GroupByResponse {
  ApiTokenGroup(after: String, before: String, filter: ApiTokenFilter, first: Int, groupBy: ApiTokenGroupBy, last: Int, orderBy: [ApiTokenOrderBy], skip: Int, sort: [ApiTokenSort!]): ApiTokenListResponse!
  AuthenticationProfileGroup(after: String, before: String, filter: AuthenticationProfileFilter, first: Int, groupBy: AuthenticationProfileGroupBy, last: Int, orderBy: [AuthenticationProfileOrderBy], skip: Int, sort: [AuthenticationProfileSort!]): AuthenticationProfileListResponse!
  BigInt: BigInt
  Boolean: Boolean
  ContentGroup(after: String, before: String, filter: ContentFilter, first: Int, groupBy: ContentGroupBy, last: Int, orderBy: [ContentOrderBy], skip: Int, sort: [ContentSort!]): ContentListResponse!
  ContentTextGroup(after: String, before: String, filter: ContentTextFilter, first: Int, groupBy: ContentTextGroupBy, last: Int, orderBy: [ContentTextOrderBy], skip: Int, sort: [ContentTextSort!]): ContentTextListResponse!
  Date: Date
  DateTime: DateTime
  EnvironmentVariableGroup(after: String, before: String, filter: EnvironmentVariableFilter, first: Int, groupBy: EnvironmentVariableGroupBy, last: Int, orderBy: [EnvironmentVariableOrderBy], skip: Int, sort: [EnvironmentVariableSort!]): EnvironmentVariableListResponse!
  FileGroup(after: String, before: String, filter: FileFilter, first: Int, groupBy: FileGroupBy, last: Int, orderBy: [FileOrderBy], skip: Int, sort: [FileSort!]): FileListResponse!
  Float: Float
  GroupIds: [ID!]
  ID: ID
  Int: Int
  JSON: JSON
  PromptGroup(after: String, before: String, filter: PromptFilter, first: Int, groupBy: PromptGroupBy, last: Int, orderBy: [PromptOrderBy], skip: Int, sort: [PromptSort!]): PromptListResponse!
  RoleGroup(after: String, before: String, filter: RoleFilter, first: Int, groupBy: RoleGroupBy, last: Int, orderBy: [RoleOrderBy], skip: Int, sort: [RoleSort!]): RoleListResponse!
  String: String
  UserGroup(after: String, before: String, filter: UserFilter, first: Int, groupBy: UserGroupBy, last: Int, orderBy: [UserOrderBy], skip: Int, sort: [UserSort!]): UserListResponse!
}

input GroupBySort {
  alias: String!
  direction: SortOrder!
}

input GroupIdentifiersGroupByField {
  as: String!
}

input Having {
  AND: [Having!]
  OR: [Having!]
  alias: String
  bigint: BigIntPredicateHaving
  bool: BoolPredicateHaving
  date: DatePredicateHaving
  datetime: DateTimePredicateHaving
  float: FloatPredicateHaving
  id: IDPredicateHaving
  int: IntPredicateHaving
  string: StringPredicateHaving
}

input IDPredicate {
  contains: ID
  ends_with: ID
  equals: ID
  gt: ID
  gte: ID
  in: [ID!]
  is_empty: Boolean
  is_not_empty: Boolean
  lt: ID
  lte: ID
  not_contains: ID
  not_ends_with: ID
  not_equals: ID
  not_in: [ID!]
  not_starts_with: ID
  starts_with: ID
}

input IDPredicateHaving {
  AND: [IDPredicateHaving!]
  OR: [IDPredicateHaving!]
  contains: ID
  ends_with: ID
  equals: ID
  gt: ID
  gte: ID
  in: [ID!]
  is_empty: Boolean
  is_not_empty: Boolean
  lt: ID
  lte: ID
  not_contains: ID
  not_ends_with: ID
  not_equals: ID
  not_in: [ID!]
  not_starts_with: ID
  starts_with: ID
}

"""ImportedTable"""
type ImportedTable {
  id: ID!
  name: String!
}

"""Inbox Events List Filter"""
input InboxEventsListFilter {
  isCompleted: IntPredicate
}

"""Table Create Index Input"""
input IndexCreateInput {
  columns: [TableIndexColumnInput!]!
  force: Boolean
  name: String
  tableId: ID!
  type: TableIndexType!
}

"""Table Delete Index Input"""
input IndexDeleteInput {
  id: ID!
}

"""Table Update Index Input"""
input IndexUpdateInput {
  columns: [TableIndexColumnInput!]
  force: Boolean
  id: ID!
  name: String
  type: TableIndexType
}

input IntPredicate {
  equals: Int
  gt: Int
  gte: Int
  in: [Int!]
  is_empty: Boolean
  is_not_empty: Boolean
  lt: Int
  lte: Int
  not_equals: Int
  not_in: [Int!]
}

input IntPredicateHaving {
  AND: [IntPredicateHaving!]
  OR: [IntPredicateHaving!]
  equals: Int
  gt: Int
  gte: Int
  in: [Int!]
  is_empty: Boolean
  is_not_empty: Boolean
  lt: Int
  lte: Int
  not_equals: Int
  not_in: [Int!]
}

type IntrospectionQueryResponse {
  url: String!
}

"""Invited By Name"""
type InvitedByName {
  email: String
  firstName: String
  lastName: String
  projectId: String
  projectName: String
  workspaceName: String
}

"""InvokeData"""
input InvokeData {
  functionName: String!
  inputArgs: String
}

"""InvokeFunctionResponse"""
type InvokeFunctionResponse {
  responseData: String!
}

"""
The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
"""
scalar JSON

input LocateFunctionArguments {
  pos: Int
  str: String!
}

"""LoginResponse"""
type LoginResponse {
  auth: Auth
  success: Boolean
  workspaces: [WorkspaceInfo!]
}

"""MissingRelation"""
type MissingRelation {
  table: String!
}

"""MissingRelation Field Attributes"""
type MissingRelationFieldTypeAttributes {
  missingTable: String!
}

type Mutation {
  apiTokenCreate(data: ApiTokenCreateInput!): ApiTokenResponse!
  apiTokenDelete(data: ApiTokenDeleteInput, filter: ApiTokenKeyFilter, force: Boolean): SuccessResponse
  apiTokenDeleteByFilter(filter: ApiTokenFilter!, force: Boolean): SuccessResponse
  apiTokenDestroy(filter: ApiTokenKeyFilter, force: Boolean): SuccessResponse
  apiTokenDestroyByFilter(filter: ApiTokenFilter!, force: Boolean): SuccessResponse
  apiTokenRestore(id: String!): ApiToken!
  apiTokenUpdate(data: ApiTokenUpdateInput!, destroyDetached: Boolean, filter: ApiTokenKeyFilter, force: Boolean): ApiToken!
  apiTokenUpdateByFilter(data: ApiTokenUpdateByFilterInput!, filter: ApiTokenFilter): ApiTokenManyResponse!
  applicationDelete(data: ApplicationDeleteMutationInput!): SuccessResponse @deprecated(reason: "No longer supported. Use `system.applicationDelete` instead.")
  applicationInstall(data: ApplicationInstallInput!): Application @deprecated(reason: "No longer supported. Use `system.applicationInstall` instead.")
  applicationUpdate(data: ApplicationUpdateInput!): Application @deprecated(reason: "No longer supported. Use `system.applicationUpdate` instead.")
  authenticationProfileCreate(data: AuthenticationProfileCreateInput!): AuthenticationProfile!
  authenticationProfileCreateMany(data: [AuthenticationProfileCreateManyInput]!): AuthenticationProfileManyResponse!
  authenticationProfileDelete(data: AuthenticationProfileDeleteInput, filter: AuthenticationProfileKeyFilter, force: Boolean): SuccessResponse
  authenticationProfileDeleteByFilter(filter: AuthenticationProfileFilter!, force: Boolean): SuccessResponse
  authenticationProfileDestroy(filter: AuthenticationProfileKeyFilter, force: Boolean): SuccessResponse
  authenticationProfileDestroyByFilter(filter: AuthenticationProfileFilter!, force: Boolean): SuccessResponse
  authenticationProfileRestore(id: String!): AuthenticationProfile!
  authenticationProfileUpdate(data: AuthenticationProfileUpdateInput!, destroyDetached: Boolean, filter: AuthenticationProfileKeyFilter, force: Boolean): AuthenticationProfile!
  authenticationProfileUpdateByFilter(data: AuthenticationProfileUpdateByFilterInput!, filter: AuthenticationProfileFilter): AuthenticationProfileManyResponse!
  authenticationSettingsUpdate(data: AuthenticationSettingUpdateInput!): AuthenticationSetting!
  billingPlanUpdate(data: BillingPlanUpdateMutationInput!): BillingCurrentPlanResponse @deprecated(reason: "No longer supported. Use `system.billingPlanUpdate` instead.")
  contentCreate(data: ContentCreateInput!): Content!
  contentCreateMany(data: [ContentCreateManyInput]!): ContentManyResponse!
  contentDelete(data: ContentDeleteInput, filter: ContentKeyFilter, force: Boolean): SuccessResponse
  contentDeleteByFilter(filter: ContentFilter!, force: Boolean): SuccessResponse
  contentDestroy(filter: ContentKeyFilter, force: Boolean): SuccessResponse
  contentDestroyByFilter(filter: ContentFilter!, force: Boolean): SuccessResponse
  contentRestore(id: String!): Content!
  contentTextCreate(data: ContentTextCreateInput!): ContentText!
  contentTextCreateMany(data: [ContentTextCreateManyInput]!): ContentTextManyResponse!
  contentTextDelete(data: ContentTextDeleteInput, filter: ContentTextKeyFilter, force: Boolean): SuccessResponse
  contentTextDeleteByFilter(filter: ContentTextFilter!, force: Boolean): SuccessResponse
  contentTextDestroy(filter: ContentTextKeyFilter, force: Boolean): SuccessResponse
  contentTextDestroyByFilter(filter: ContentTextFilter!, force: Boolean): SuccessResponse
  contentTextRestore(id: String!): ContentText!
  contentTextUpdate(data: ContentTextUpdateInput!, destroyDetached: Boolean, filter: ContentTextKeyFilter, force: Boolean): ContentText!
  contentTextUpdateByFilter(data: ContentTextUpdateByFilterInput!, filter: ContentTextFilter): ContentTextManyResponse!
  contentUpdate(data: ContentUpdateInput!, destroyDetached: Boolean, filter: ContentKeyFilter, force: Boolean): Content!
  contentUpdateByFilter(data: ContentUpdateByFilterInput!, filter: ContentFilter): ContentManyResponse!
  deploy(data: DeployingBuildInput): Boolean @deprecated(reason: "No longer supported. Use `system.deploy` instead.")
  environmentVariableCreate(data: EnvironmentVariableCreateInput!): EnvironmentVariable!
  environmentVariableCreateMany(data: [EnvironmentVariableCreateManyInput]!): EnvironmentVariableManyResponse!
  environmentVariableDelete(data: EnvironmentVariableDeleteInput, filter: EnvironmentVariableKeyFilter, force: Boolean): SuccessResponse
  environmentVariableDeleteByFilter(filter: EnvironmentVariableFilter!, force: Boolean): SuccessResponse
  environmentVariableDestroy(filter: EnvironmentVariableKeyFilter, force: Boolean): SuccessResponse
  environmentVariableDestroyByFilter(filter: EnvironmentVariableFilter!, force: Boolean): SuccessResponse
  environmentVariableRestore(id: String!): EnvironmentVariable!
  environmentVariableUpdate(data: EnvironmentVariableUpdateInput!, destroyDetached: Boolean, filter: EnvironmentVariableKeyFilter, force: Boolean): EnvironmentVariable!
  environmentVariableUpdateByFilter(data: EnvironmentVariableUpdateByFilterInput!, filter: EnvironmentVariableFilter): EnvironmentVariableManyResponse!
  fieldCreate(data: TableFieldCreateInput!): TableField! @deprecated(reason: "No longer supported. Use `system.fieldCreate` instead.")
  fieldDelete(data: TableFieldDeleteInput!): SuccessResponse! @deprecated(reason: "No longer supported. Use `system.fieldDelete` instead.")
  fieldUpdate(data: TableFieldUpdateInput!): TableField! @deprecated(reason: "No longer supported. Use `system.fieldUpdate` instead.")
  fieldUpdatePosition(data: TableFieldPositionUpdateInput!): SuccessResponse! @deprecated(reason: "No longer supported. Use `system.fieldUpdatePosition` instead.")
  fileCreate(data: FileCreateInput!): File!
  fileCreateMany(data: [FileCreateManyInput]!): FileManyResponse!
  fileDelete(data: FileDeleteInput, filter: FileKeyFilter, force: Boolean): SuccessResponse
  fileDeleteByFilter(filter: FileFilter!, force: Boolean): SuccessResponse
  fileDestroy(filter: FileKeyFilter, force: Boolean): SuccessResponse
  fileDestroyByFilter(filter: FileFilter!, force: Boolean): SuccessResponse
  fileRestore(id: String!): File!
  fileUpdate(data: FileUpdateInput!, destroyDetached: Boolean, filter: FileKeyFilter, force: Boolean): File!
  fileUpdateByFilter(data: FileUpdateByFilterInput!, filter: FileFilter): FileManyResponse!
  indexCreate(data: IndexCreateInput!): TableIndex!
  indexDelete(data: IndexDeleteInput!): SuccessResponse
  indexUpdate(data: IndexUpdateInput!): TableIndex!
  invoke(data: InvokeData): InvokeFunctionResponse @deprecated(reason: "No longer supported. Use `system.invoke` instead.")
  prepareDeploy: DeployDataResponse! @deprecated(reason: "No longer supported. Use `system.prepareDeploy` instead.")
  promptCreate(data: PromptCreateInput!): Prompt!
  promptCreateMany(data: [PromptCreateManyInput]!): PromptManyResponse!
  promptDelete(data: PromptDeleteInput, filter: PromptKeyFilter, force: Boolean): SuccessResponse
  promptDeleteByFilter(filter: PromptFilter!, force: Boolean): SuccessResponse
  promptDestroy(filter: PromptKeyFilter, force: Boolean): SuccessResponse
  promptDestroyByFilter(filter: PromptFilter!, force: Boolean): SuccessResponse
  promptRestore(id: String!): Prompt!
  promptUpdate(data: PromptUpdateInput!, destroyDetached: Boolean, filter: PromptKeyFilter, force: Boolean): Prompt!
  promptUpdateByFilter(data: PromptUpdateByFilterInput!, filter: PromptFilter): PromptManyResponse!
  roleCreate(data: RoleCreateInput!): Role!
  roleCreateMany(data: [RoleCreateManyInput]!): RoleManyResponse!
  roleDelete(data: RoleDeleteInput, filter: RoleKeyFilter, force: Boolean): SuccessResponse
  roleDeleteByFilter(filter: RoleFilter!, force: Boolean): SuccessResponse
  roleDestroy(filter: RoleKeyFilter, force: Boolean): SuccessResponse
  roleDestroyByFilter(filter: RoleFilter!, force: Boolean): SuccessResponse
  roleRestore(id: String!): Role!
  roleUpdate(data: RoleUpdateInput!, destroyDetached: Boolean, filter: RoleKeyFilter, force: Boolean): Role!
  roleUpdateByFilter(data: RoleUpdateByFilterInput!, filter: RoleFilter): RoleManyResponse!
  sendInvitationTo8base(inviteEmail: String!): SuccessResponse
  settingsUpdate(data: SettingUpdateInput!): Setting!
  system: SystemMutation
  tableCreate(data: TableCreateInput!): Table! @deprecated(reason: "No longer supported. Use `system.tableCreate` instead.")
  tableDelete(data: TableDeleteInput!): SuccessResponse! @deprecated(reason: "No longer supported. Use `system.tableDelete` instead.")
  tableUpdate(data: TableUpdateInput!): Table! @deprecated(reason: "No longer supported. Use `system.tableUpdate` instead.")
  userChangePassword(data: ChangePasswordInput!): SuccessResponse
  userCreate(data: UserCreateInput!): User!
  userCreateMany(data: [UserCreateManyInput]!): UserManyResponse!
  userDelete(data: UserDeleteInput, filter: UserKeyFilter, force: Boolean): SuccessResponse
  userDeleteByFilter(filter: UserFilter!, force: Boolean): SuccessResponse
  userDestroy(filter: UserKeyFilter, force: Boolean): SuccessResponse
  userDestroyByFilter(filter: UserFilter!, force: Boolean): SuccessResponse
  userLogin(data: UserLoginInput!): LoginResponse
  userPasswordForgot(data: PasswordForgotInput!): SuccessResponse
  userPasswordForgotConfirm(data: PasswordForgotConfirmInput!): SuccessResponse
  userRefreshToken(data: RefreshTokenInput!): Auth
  userRestore(id: String!): User!
  userSignUp(authProfileId: ID, user: UserCreateInput!): User! @deprecated(reason: "No longer supported. Use `userSignUpWithToken` instead.")
  userSignUpResend(data: SignUpResendInput!): SuccessResponse @deprecated(reason: "No longer supported. Use `userVerificationEmailResend` instead.")
  userSignUpWithPassword(authProfileId: ID, password: String!, user: UserCreateInput!): User!
  userSignUpWithToken(authProfileId: ID, user: UserCreateInput!): User!
  userUpdate(data: UserUpdateInput!, destroyDetached: Boolean, filter: UserKeyFilter, force: Boolean): User!
  userUpdateByFilter(data: UserUpdateByFilterInput!, filter: UserFilter): UserManyResponse!
  userVerificationEmailResend(authProfileId: ID, data: VerificationEmailResendInput!): SuccessResponse
  viewCreate(data: ViewCreateInput!): Table! @deprecated(reason: "No longer supported. Use `system.viewCreate` instead.")
  viewUpdate(data: ViewUpdateInput!): Table!
  workspaceCreate(data: WorkspaceCreateMutationInput!): WorkspaceCreateResponse @deprecated(reason: "No longer supported. Use `system.workspaceCreate` instead.")
  workspaceCreateAsync(data: WorkspaceCreateMutationInput!): WorkspaceCreateResponse @deprecated(reason: "No longer supported. Use `system.workspaceCreateAsync` instead.")
  workspaceDelete(data: WorkspaceDeleteMutationInput!): SuccessResponse
  workspaceLeave(force: Boolean): SuccessResponse @deprecated(reason: "No longer supported. Use `system.workspaceLeave` instead.")
  workspaceUpdate(data: WorkspaceUpdateMutationInput!): WorkspaceUpdateResponse @deprecated(reason: "No longer supported. Use `system.workspaceUpdate` instead.")
}

enum MutationType {
  create
  delete
  destroy
  update
}

enum NotificationStatusType {
  done
}

"""Number Field Attributes"""
type NumberFieldTypeAttributes {
  autoIncrement: Boolean
  currency: String
  format: String!
  isBigInt: Boolean
  maxValue: Float
  minValue: Float
  precision: Int
}

"""Number Type Format Enum"""
enum NumberTypeFormatEnum {
  CURRENCY
  FRACTION
  NUMBER
  PERCENTAGE
  SCIENTIFIC
}

type OrganizationUserInvitationResponse {
  invitationId: String!
}

"""PasswordForgotConfirmInput"""
input PasswordForgotConfirmInput {
  authProfileId: ID!
  code: String!
  email: String!
  newPassword: String!
}

"""PasswordForgotInput"""
input PasswordForgotInput {
  authProfileId: ID!
  email: String!
}

input PatternFunctionArguments {
  escape: String
  pattern: String!
}

type Permission {
  _description: String
  appId: String
  createdAt: DateTime
  createdBy: User
  permission: JSON
  resource: String
  resourceType: String
  role: Role
  updatedAt: DateTime
}

input PermissionFilter {
  AND: [PermissionFilter!]
  OR: [PermissionFilter!]
  _fullText: String
  appId: StringPredicate
  createdAt: DateTimePredicate
  createdBy: UserFilter
  deletedAt: IntPredicate
  resource: StringPredicate
  resourceType: StringPredicate
  role: RoleFilter
  updatedAt: DateTimePredicate
}

input PermissionGroupByQuery {
  _group: [GroupIdentifiersGroupByField!]
  appId: [GroupByField!]
  createdAt: [GroupByField!]
  createdBy: UserGroupByQuery
  permission: [GroupByField!]
  resource: [GroupByField!]
  resourceType: [GroupByField!]
  role: RoleGroupByQuery
  updatedAt: [GroupByField!]
}

"""Permission Filter"""
input PermissionInputFilter {
  action: String
  applicationName: String
  resource: String
  resourceType: PermissionResourceTypeEnum
}

"""PermissionListResponse output"""
type PermissionListResponse {
  """List items count"""
  count: Int!

  """Aggregated items"""
  groups: [GroupByResponse!]!

  """List items"""
  items: [Permission!]!
}

"""Permissions subscription payload"""
type PermissionPayload {
  mutation: MutationType!
  node: Permission
  previousValues: Permission
  updatedFields: [String]
}

input PermissionRelationFilter {
  every: PermissionFilter
  none: PermissionFilter
  some: PermissionFilter
}

enum PermissionResourceTypeEnum {
  custom
  data
}

"""Permissions subscription filter"""
input PermissionSubscriptionFilter {
  mutation_in: [MutationType]
  node: PermissionFilter
  updatedFields: UpdatedFieldsFilter
}

input Permission_PermissionFilter {
  AND: [Permission_PermissionFilter!]
  OR: [Permission_PermissionFilter!]
  _fullText: String
  appId: StringPredicate
  createdAt: DateTimePredicate
  createdBy: User_PermissionFilter
  deletedAt: IntPredicate
  resource: StringPredicate
  resourceType: StringPredicate
  role: Role_PermissionFilter
  updatedAt: DateTimePredicate
}

input Permission_PermissionRelationFilter {
  every: Permission_PermissionFilter
  none: Permission_PermissionFilter
  some: Permission_PermissionFilter
}

"""custom permissions input"""
input PermissionsCustom {
  data: PermissionsCustomData
  logic: PermissionsCustomLogic
  settings: PermissionsCustomSettings
  users: PermissionsCustomUsers
}

input PermissionsCustomData {
  schemaManagement: PermissionsCustomDataSchemaManagement
  viewerAccess: PermissionsCustomDataViewerAccess
}

input PermissionsCustomDataSchemaManagement {
  allow: Boolean!
}

input PermissionsCustomDataViewerAccess {
  allow: Boolean!
}

input PermissionsCustomLogic {
  deploy: PermissionsCustomLogicDeploy
  invoke: PermissionsCustomLogicInvoke
  logs: PermissionsCustomLogicLogs
  view: PermissionsCustomLogicView
}

input PermissionsCustomLogicDeploy {
  allow: Boolean!
}

input PermissionsCustomLogicInvoke {
  allow: Boolean!
}

input PermissionsCustomLogicLogs {
  allow: Boolean!
}

input PermissionsCustomLogicView {
  allow: Boolean!
}

input PermissionsCustomSettings {
  workspaceAdministration: PermissionsCustomSettingsWorkspaceAdministration
}

input PermissionsCustomSettingsWorkspaceAdministration {
  allow: Boolean!
}

input PermissionsCustomUsers {
  teamAdministration: PermissionsCustomUsersTeamAdministration
}

input PermissionsCustomUsersTeamAdministration {
  allow: Boolean!
}

"""Schema tables permissions input"""
input PermissionsData {
  Content: PermissionsDataContent
  ContentText: PermissionsDataContentText
  Files: PermissionsDataFiles
  Prompts: PermissionsDataPrompts
  Roles: PermissionsDataRoles
  Users: PermissionsDataUsers
}

input PermissionsDataContent {
  create: PermissionsDataContentCreate
  delete: PermissionsDataContentDelete
  destroy: PermissionsDataContentDestroy
  read: PermissionsDataContentRead
  update: PermissionsDataContentUpdate
}

input PermissionsDataContentCreate {
  allow: Boolean!
}

input PermissionsDataContentDelete {
  allow: Boolean!
  restore: Boolean
  review: Boolean
}

input PermissionsDataContentDestroy {
  allow: Boolean!
}

input PermissionsDataContentRead {
  allow: Boolean!
  fields: ContentFieldsPermissions
  filter: Content_PermissionFilter
}

input PermissionsDataContentText {
  create: PermissionsDataContentTextCreate
  delete: PermissionsDataContentTextDelete
  destroy: PermissionsDataContentTextDestroy
  read: PermissionsDataContentTextRead
  update: PermissionsDataContentTextUpdate
}

input PermissionsDataContentTextCreate {
  allow: Boolean!
}

input PermissionsDataContentTextDelete {
  allow: Boolean!
  restore: Boolean
  review: Boolean
}

input PermissionsDataContentTextDestroy {
  allow: Boolean!
}

input PermissionsDataContentTextRead {
  allow: Boolean!
  fields: ContentTextFieldsPermissions
  filter: ContentText_PermissionFilter
}

input PermissionsDataContentTextUpdate {
  allow: Boolean!
  fields: ContentTextFieldsPermissions
  filter: ContentText_PermissionFilter
}

input PermissionsDataContentUpdate {
  allow: Boolean!
  fields: ContentFieldsPermissions
  filter: Content_PermissionFilter
}

input PermissionsDataFiles {
  create: PermissionsDataFilesCreate
  delete: PermissionsDataFilesDelete
  destroy: PermissionsDataFilesDestroy
  read: PermissionsDataFilesRead
  update: PermissionsDataFilesUpdate
}

input PermissionsDataFilesCreate {
  allow: Boolean!
}

input PermissionsDataFilesDelete {
  allow: Boolean!
  restore: Boolean
  review: Boolean
}

input PermissionsDataFilesDestroy {
  allow: Boolean!
}

input PermissionsDataFilesRead {
  allow: Boolean!
  fields: FileFieldsPermissions
  filter: File_PermissionFilter
}

input PermissionsDataFilesUpdate {
  allow: Boolean!
  fields: FileFieldsPermissions
  filter: File_PermissionFilter
}

input PermissionsDataPrompts {
  create: PermissionsDataPromptsCreate
  delete: PermissionsDataPromptsDelete
  destroy: PermissionsDataPromptsDestroy
  read: PermissionsDataPromptsRead
  update: PermissionsDataPromptsUpdate
}

input PermissionsDataPromptsCreate {
  allow: Boolean!
}

input PermissionsDataPromptsDelete {
  allow: Boolean!
  restore: Boolean
  review: Boolean
}

input PermissionsDataPromptsDestroy {
  allow: Boolean!
}

input PermissionsDataPromptsRead {
  allow: Boolean!
  fields: PromptFieldsPermissions
  filter: Prompt_PermissionFilter
}

input PermissionsDataPromptsUpdate {
  allow: Boolean!
  fields: PromptFieldsPermissions
  filter: Prompt_PermissionFilter
}

input PermissionsDataRoles {
  create: PermissionsDataRolesCreate
  delete: PermissionsDataRolesDelete
  destroy: PermissionsDataRolesDestroy
  read: PermissionsDataRolesRead
  update: PermissionsDataRolesUpdate
}

input PermissionsDataRolesCreate {
  allow: Boolean!
}

input PermissionsDataRolesDelete {
  allow: Boolean!
  restore: Boolean
  review: Boolean
}

input PermissionsDataRolesDestroy {
  allow: Boolean!
}

input PermissionsDataRolesRead {
  allow: Boolean!
  fields: RoleFieldsPermissions
  filter: Role_PermissionFilter
}

input PermissionsDataRolesUpdate {
  allow: Boolean!
  fields: RoleFieldsPermissions
  filter: Role_PermissionFilter
}

input PermissionsDataUsers {
  create: PermissionsDataUsersCreate
  delete: PermissionsDataUsersDelete
  destroy: PermissionsDataUsersDestroy
  read: PermissionsDataUsersRead
  update: PermissionsDataUsersUpdate
}

input PermissionsDataUsersCreate {
  allow: Boolean!
}

input PermissionsDataUsersDelete {
  allow: Boolean!
  restore: Boolean
  review: Boolean
}

input PermissionsDataUsersDestroy {
  allow: Boolean!
}

input PermissionsDataUsersRead {
  allow: Boolean!
  fields: UserFieldsPermissions
  filter: User_PermissionFilter
}

input PermissionsDataUsersUpdate {
  allow: Boolean!
  fields: UserFieldsPermissions
  filter: User_PermissionFilter
}

"""PermissionsInput create input"""
input PermissionsInput {
  custom: PermissionsCustom
  data: PermissionsData
}

type ProjectItemWS {
  description: String
  id: ID!
  image: WorkspaceImage
  name: String!
  region: String
}

type Prompt {
  _description: String
  createdAt: DateTime
  createdBy: User
  deletedAt: Int
  id: ID
  prompt: String
  updatedAt: DateTime
  user: User
}

"""Prompts create input"""
input PromptCreateInput {
  prompt: String = "New prompt"
  user: PromptsUserRelationInput
}

"""Prompts create many input"""
input PromptCreateManyInput {
  prompt: String = "New prompt"
  user: PromptsUserManyRelationInput
}

"""Prompts delete input"""
input PromptDeleteInput {
  force: Boolean
  id: ID
}

"""PromptFieldsPermissions create input"""
input PromptFieldsPermissions {
  createdAt: Boolean
  prompt: Boolean
  updatedAt: Boolean
}

input PromptFilter {
  AND: [PromptFilter!]
  OR: [PromptFilter!]
  _fullText: String
  createdAt: DateTimePredicate
  createdBy: UserFilter
  deletedAt: IntPredicate
  id: IDPredicate
  prompt: StringPredicate
  updatedAt: DateTimePredicate
  user: UserFilter
}

input PromptGroupBy {
  first: Int
  having: Having
  last: Int
  query: PromptGroupByQuery!
  skip: Int
  sort: [GroupBySort!]
}

input PromptGroupByQuery {
  _group: [GroupIdentifiersGroupByField!]
  createdAt: [GroupByField!]
  createdBy: UserGroupByQuery
  id: [GroupByField!]
  prompt: [GroupByField!]
  updatedAt: [GroupByField!]
  user: UserGroupByQuery
}

input PromptKeyFilter {
  id: ID
}

"""PromptListResponse output"""
type PromptListResponse {
  """List items count"""
  count: Int!

  """Aggregated items"""
  groups: [GroupByResponse!]!

  """List items"""
  items: [Prompt!]!
}

"""PromptManyResponse output"""
type PromptManyResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [Prompt!]!
}

"""No longer supported. Use `sort` instead."""
enum PromptOrderBy {
  createdAt_ASC
  createdAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  id_ASC
  id_DESC
  prompt_ASC
  prompt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

"""Prompts subscription payload"""
type PromptPayload {
  mutation: MutationType!
  node: Prompt
  previousValues: Prompt
  updatedFields: [String]
}

input PromptSort {
  createdAt: SortOrder
  createdBy: UserSort
  deletedAt: SortOrder
  id: SortOrder
  prompt: SortOrder
  updatedAt: SortOrder
  user: UserSort
}

"""Prompts subscription filter"""
input PromptSubscriptionFilter {
  mutation_in: [MutationType]
  node: PromptFilter
  updatedFields: UpdatedFieldsFilter
}

"""Prompts update input"""
input PromptUpdateByFilterInput {
  prompt: [UpdateByFilterStringInput]
}

"""Prompts update input"""
input PromptUpdateInput {
  id: ID
  prompt: String
  user: PromptsUserUpdateRelationInput
}

input Prompt_PermissionFilter {
  AND: [Prompt_PermissionFilter!]
  OR: [Prompt_PermissionFilter!]
  _fullText: String
  createdAt: DateTimePredicate
  createdBy: User_PermissionFilter
  deletedAt: IntPredicate
  id: IDPredicate
  prompt: StringPredicate
  updatedAt: DateTimePredicate
  user: User_PermissionFilter
}

"""Prompts relation input"""
input PromptsUserManyRelationInput {
  connect: UserKeyFilter
}

"""Prompts relation input"""
input PromptsUserRelationInput {
  connect: UserKeyFilter
  create: Promts_UserCreateInput
}

"""Prompts relation input"""
input PromptsUserUpdateRelationInput {
  connect: UserKeyFilter
  create: Promts_UserCreateInput
  disconnect: UserKeyFilter
  reconnect: UserKeyFilter
  update: Promts_UserUpdateInput
}

"""Users create input from promts"""
input Promts_UserCreateInput {
  avatar: UsersAvatarRelationInput
  email: String!
  firstName: String
  generatedText: UsersGeneratedTextRelationInput
  lastName: String
  openApiKey: String
  promts: UsersPromtsRelationInput
  roles: UsersRolesRelationInput
  status: String = "inactive"
  timezone: String
}

"""Users update input from promts"""
input Promts_UserUpdateInput {
  avatar: UsersAvatarUpdateRelationInput
  email: String
  firstName: String
  generatedText: UsersGeneratedTextUpdateRelationInput
  lastName: String
  openApiKey: String
  promts: UsersPromtsUpdateRelationInput
  roles: UsersRolesUpdateRelationInput
  status: String
  timezone: String
}

type Query {
  apiToken(id: ID, name: String, withDeleted: Boolean): ApiToken
  apiTokensList(after: String, before: String, filter: ApiTokenFilter, first: Int, groupBy: ApiTokenGroupBy, last: Int, orderBy: [ApiTokenOrderBy], skip: Int, sort: [ApiTokenSort!], withDeleted: Boolean): ApiTokenListResponse!
  application(id: String!): Application @deprecated(reason: "No longer supported. Use `system.application` instead.")
  applicationsList: ApplicationListResponse @deprecated(reason: "No longer supported. Use `system.applicationsList` instead.")
  asyncSessionStatus(sessionId: String!): AsyncSessionStatusResponse @deprecated(reason: "No longer supported. Use `system.asyncSessionStatus` instead.")
  authenticationProfile(id: ID, name: String, withDeleted: Boolean): AuthenticationProfile
  authenticationProfilesList(after: String, before: String, filter: AuthenticationProfileFilter, first: Int, groupBy: AuthenticationProfileGroupBy, last: Int, orderBy: [AuthenticationProfileOrderBy], skip: Int, sort: [AuthenticationProfileSort!], withDeleted: Boolean): AuthenticationProfileListResponse!
  authenticationSettings: AuthenticationSetting
  billingCurrentPlan(organizationId: ID): BillingCurrentPlanResponse @deprecated(reason: "No longer supported. Use `system.billingCurrentPlan` instead.")
  billingDetails: BillingDetailsResponse @deprecated(reason: "No longer supported. Use `system.memberPaymentDetails, system.organizationPaymentDetails or system.workspacePaymentDetails` instead.")
  billingInvoicesList(after: ID, before: ID, by: BillingInvoicesListFilterType, limit: Int, projectId: ID): BillingInvoicesListResponse! @deprecated(reason: "No longer supported. Use `system.memberBillingHistory, system.organizationBillingHistory or system.workspaceBillingHistory` instead.")
  billingMetricUsageQuotasList(organizationId: ID, projectId: ID): BillingMetricUsageQuotasListResponse! @deprecated(reason: "No longer supported. Use `system.billingMetricUsageQuotasList` instead.")
  billingMetricUsagesList(filter: BillingMetricUsagesListFilter, organizationId: ID, projectId: ID): BillingMetricUsagesListResponse! @deprecated(reason: "No longer supported. Use `system.billingMetricUsagesList` instead.")
  companyName: String
  content(id: ID, withDeleted: Boolean): Content
  contentText(id: ID, withDeleted: Boolean): ContentText
  contentTextsList(after: String, before: String, filter: ContentTextFilter, first: Int, groupBy: ContentTextGroupBy, last: Int, orderBy: [ContentTextOrderBy], skip: Int, sort: [ContentTextSort!], withDeleted: Boolean): ContentTextListResponse!
  contentsList(after: String, before: String, filter: ContentFilter, first: Int, groupBy: ContentGroupBy, last: Int, orderBy: [ContentOrderBy], skip: Int, sort: [ContentSort!], withDeleted: Boolean): ContentListResponse!
  deployStatus(buildName: String!): DeployStatusResult! @deprecated(reason: "No longer supported. Use `system.deployStatus` instead.")
  environmentVariable(id: ID, name: String, withDeleted: Boolean): EnvironmentVariable
  environmentVariablesList(after: String, before: String, filter: EnvironmentVariableFilter, first: Int, groupBy: EnvironmentVariableGroupBy, last: Int, orderBy: [EnvironmentVariableOrderBy], skip: Int, sort: [EnvironmentVariableSort!], withDeleted: Boolean): EnvironmentVariableListResponse!
  file(fileId: String, id: ID, withDeleted: Boolean): File
  fileUploadInfo: FileUploadInfoResponse @deprecated(reason: "No longer supported. Use `fileUploadSignInfo` instead.")
  filesList(after: String, before: String, filter: FileFilter, first: Int, groupBy: FileGroupBy, last: Int, orderBy: [FileOrderBy], skip: Int, sort: [FileSort!], withDeleted: Boolean): FileListResponse!
  functionsList(applicationId: String, filter: FunctionInfoFilter, orderBy: [FunctionInfoOrderBy]): FunctionListResponse @deprecated(reason: "No longer supported. Use `system.functionsList` instead.")
  isAllowedCallbackURL(callbackURL: String!): isAllowedCallbackURLQueryResponse
  logs(applicationId: String, endTime: DateTime, functionName: String!, limit: Int, startTime: DateTime): [String] @deprecated(reason: "No longer supported. Use `system.logsList` instead.")
  prompt(id: ID, withDeleted: Boolean): Prompt
  promptsList(after: String, before: String, filter: PromptFilter, first: Int, groupBy: PromptGroupBy, last: Int, orderBy: [PromptOrderBy], skip: Int, sort: [PromptSort!], withDeleted: Boolean): PromptListResponse!
  role(id: ID, name: String, withDeleted: Boolean): Role
  rolesList(after: String, before: String, filter: RoleFilter, first: Int, groupBy: RoleGroupBy, last: Int, orderBy: [RoleOrderBy], skip: Int, sort: [RoleSort!], withDeleted: Boolean): RoleListResponse!
  settings: Setting
  system: SystemQuery
  table(id: ID, name: String): Table @deprecated(reason: "No longer supported. Use `system.table` instead.")
  tableField(id: ID!): TableField @deprecated(reason: "No longer supported. Use `system.tableField` instead.")
  tablesList(filter: TableListFilter): TableListResponse! @deprecated(reason: "No longer supported. Use `system.tablesList` instead.")
  user(email: String, id: ID, openApiKey: String, withDeleted: Boolean): User
  userBillingConfiguration(filterPlanProjects: Boolean, kind: String, organizationId: ID, region: String): UserBillingConfigurationResponse!
  userInvitationsList: UserInvitationList @deprecated(reason: "No longer supported. Use `system.userInvitationsList` instead.")
  usersList(after: String, before: String, filter: UserFilter, first: Int, groupBy: UserGroupBy, last: Int, orderBy: [UserOrderBy], skip: Int, sort: [UserSort!], withDeleted: Boolean): UserListResponse!
  viewDryRun(sql: String!): ViewDryRunOutput
  workspacesList: WorkspaceListResponse @deprecated(reason: "No longer supported. Use `system.workspacesList` instead.")
}

"""RefreshTokenInput"""
input RefreshTokenInput {
  authProfileId: ID
  email: String
  refreshToken: String!
}

"""Relation"""
type Relation {
  refField: TableField
  refFieldDisplayName: String
  refFieldIsList: Boolean
  refFieldIsRequired: Boolean
  refFieldName: String
  refTable: Table!
  relationFieldName: String
  relationTableName: String
}

"""Relation Create Input"""
input RelationCreateInput {
  refFieldDisplayName: String
  refFieldIsList: Boolean!
  refFieldIsRequired: Boolean!
  refFieldName: String
  refTableId: ID!
}

"""Relation Update Input"""
input RelationUpdateInput {
  refFieldDisplayName: String
  refFieldIsList: Boolean
  refFieldIsRequired: Boolean
  refFieldName: String
  refTableId: ID
}

"""Relative Date Predicate Operation Enum"""
enum RelativePredicateOpEnum {
  ADD
  SUB
}

"""Relative Date Predicate Unit Enum"""
enum RelativePredicateUnitEnum {
  DAY
  DAY_HOUR
  DAY_MICROSECOND
  DAY_MINUTE
  DAY_SECOND
  HOUR
  HOUR_MICROSECOND
  HOUR_MINUTE
  HOUR_SECOND
  MICROSECOND
  MINUTE
  MINUTE_MICROSECOND
  MINUTE_SECOND
  MONTH
  QUARTER
  SECOND
  SECOND_MICROSECOND
  WEEK
  YEAR
  YEAR_MONTH
}

input ReplaceFunctionArguments {
  from: String!
  to: String!
}

input ResizeImageDirectiveCropOptions {
  height: Int!
  offsetX: Int = 0
  offsetY: Int = 0
  width: Int!
}

input ResizeImageDirectiveFlipOptions {
  horizontally: Boolean
  vertically: Boolean
}

input ResizeImageDirectiveResizeOptions {
  height: Int
  width: Int
}

type Role {
  _description: String
  apiTokens(after: String, before: String, filter: ApiTokenFilter, first: Int, groupBy: ApiTokenGroupBy, last: Int, orderBy: [ApiTokenOrderBy], skip: Int, sort: [ApiTokenSort!]): ApiTokenListResponse
  authenticationProfiles(after: String, before: String, filter: AuthenticationProfileFilter, first: Int, groupBy: AuthenticationProfileGroupBy, last: Int, orderBy: [AuthenticationProfileOrderBy], skip: Int, sort: [AuthenticationProfileSort!]): AuthenticationProfileListResponse
  createdAt: DateTime
  createdBy: User
  deletedAt: Int
  description: String
  id: ID
  membersCount: Int!
  name: String
  permissions(filter: PermissionInputFilter): PermissionListResponse
  updatedAt: DateTime
  users(after: String, before: String, filter: UserFilter, first: Int, groupBy: UserGroupBy, last: Int, orderBy: [UserOrderBy], skip: Int, sort: [UserSort!]): UserListResponse
}

"""Roles create input"""
input RoleCreateInput {
  apiTokens: RolesApiTokensRelationInput
  authenticationProfiles: RolesAuthenticationProfilesRelationInput
  description: String
  name: String!
  permissions: PermissionsInput
  users: RolesUsersRelationInput
}

"""Roles create many input"""
input RoleCreateManyInput {
  apiTokens: RolesApiTokensManyRelationInput
  authenticationProfiles: RolesAuthenticationProfilesManyRelationInput
  description: String
  name: String!
  users: RolesUsersManyRelationInput
}

"""Roles delete input"""
input RoleDeleteInput {
  force: Boolean
  id: ID
}

"""RoleFieldsPermissions create input"""
input RoleFieldsPermissions {
  createdAt: Boolean
  description: Boolean
  name: Boolean
  updatedAt: Boolean
}

input RoleFilter {
  AND: [RoleFilter!]
  OR: [RoleFilter!]
  _fullText: String
  apiTokens: ApiTokenRelationFilter
  authenticationProfiles: AuthenticationProfileRelationFilter
  createdAt: DateTimePredicate
  createdBy: UserFilter
  deletedAt: IntPredicate
  description: StringPredicate
  id: IDPredicate
  name: StringPredicate
  permissions: PermissionRelationFilter
  updatedAt: DateTimePredicate
  users: UserRelationFilter
}

input RoleGroupBy {
  first: Int
  having: Having
  last: Int
  query: RoleGroupByQuery!
  skip: Int
  sort: [GroupBySort!]
}

input RoleGroupByQuery {
  _group: [GroupIdentifiersGroupByField!]
  apiTokens: ApiTokenGroupByQuery
  authenticationProfiles: AuthenticationProfileGroupByQuery
  createdAt: [GroupByField!]
  createdBy: UserGroupByQuery
  description: [GroupByField!]
  id: [GroupByField!]
  name: [GroupByField!]
  permissions: PermissionGroupByQuery
  updatedAt: [GroupByField!]
  users: UserGroupByQuery
}

input RoleKeyFilter {
  id: ID
  name: String
}

"""RoleListResponse output"""
type RoleListResponse {
  """List items count"""
  count: Int!

  """Aggregated items"""
  groups: [GroupByResponse!]!

  """List items"""
  items: [Role!]!
}

"""RoleManyResponse output"""
type RoleManyResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [Role!]!
}

"""No longer supported. Use `sort` instead."""
enum RoleOrderBy {
  createdAt_ASC
  createdAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  description_ASC
  description_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  systemType_ASC
  systemType_DESC
  updatedAt_ASC
  updatedAt_DESC
}

"""Roles subscription payload"""
type RolePayload {
  mutation: MutationType!
  node: Role
  previousValues: Role
  updatedFields: [String]
}

input RoleRelationFilter {
  every: RoleFilter
  none: RoleFilter
  some: RoleFilter
}

input RoleSort {
  createdAt: SortOrder
  createdBy: UserSort
  deletedAt: SortOrder
  description: SortOrder
  id: SortOrder
  name: SortOrder
  updatedAt: SortOrder
}

"""Roles subscription filter"""
input RoleSubscriptionFilter {
  mutation_in: [MutationType]
  node: RoleFilter
  updatedFields: UpdatedFieldsFilter
}

"""Roles update input"""
input RoleUpdateByFilterInput {
  description: [UpdateByFilterStringInput]
  name: [UpdateByFilterStringInput]
  systemType: [UpdateByFilterStringInput]
}

"""Roles update input"""
input RoleUpdateInput {
  apiTokens: RolesApiTokensUpdateRelationInput
  authenticationProfiles: RolesAuthenticationProfilesUpdateRelationInput
  description: String
  id: ID
  name: String
  permissions: PermissionsInput
  users: RolesUsersUpdateRelationInput
}

input Role_PermissionFilter {
  AND: [Role_PermissionFilter!]
  OR: [Role_PermissionFilter!]
  _fullText: String
  apiTokens: ApiToken_PermissionRelationFilter
  authenticationProfiles: AuthenticationProfile_PermissionRelationFilter
  createdAt: DateTimePredicate
  createdBy: User_PermissionFilter
  deletedAt: IntPredicate
  description: StringPredicate
  id: IDPredicate
  name: StringPredicate
  permissions: Permission_PermissionRelationFilter
  updatedAt: DateTimePredicate
  users: User_PermissionRelationFilter
}

input Role_PermissionRelationFilter {
  every: Role_PermissionFilter
  none: Role_PermissionFilter
  some: Role_PermissionFilter
}

"""Roles relation input"""
input RolesApiTokensManyRelationInput {
  connect: [ApiTokenKeyFilter!]
}

"""Roles relation input"""
input RolesApiTokensRelationInput {
  connect: [ApiTokenKeyFilter!]
}

"""Roles relation input"""
input RolesApiTokensUpdateRelationInput {
  connect: [ApiTokenKeyFilter!]
  disconnect: [ApiTokenKeyFilter!]
  reconnect: [ApiTokenKeyFilter!]
  update: [Roles_ApiTokenUpdateInput]
}

"""Roles relation input"""
input RolesAuthenticationProfilesManyRelationInput {
  connect: [AuthenticationProfileKeyFilter!]
}

"""Roles relation input"""
input RolesAuthenticationProfilesRelationInput {
  connect: [AuthenticationProfileKeyFilter!]
  create: [Roles_AuthenticationProfileCreateInput]
}

"""Roles relation input"""
input RolesAuthenticationProfilesUpdateRelationInput {
  connect: [AuthenticationProfileKeyFilter!]
  create: [Roles_AuthenticationProfileCreateInput]
  disconnect: [AuthenticationProfileKeyFilter!]
  reconnect: [AuthenticationProfileKeyFilter!]
  update: [Roles_AuthenticationProfileUpdateInput]
}

"""Roles relation input"""
input RolesUsersManyRelationInput {
  connect: [UserKeyFilter!]
}

"""Roles relation input"""
input RolesUsersRelationInput {
  connect: [UserKeyFilter!]
  create: [Roles_UserCreateInput]
}

"""Roles relation input"""
input RolesUsersUpdateRelationInput {
  connect: [UserKeyFilter!]
  create: [Roles_UserCreateInput]
  disconnect: [UserKeyFilter!]
  reconnect: [UserKeyFilter!]
  update: [Roles_UserUpdateInput]
}

"""ApiTokens update input from roles"""
input Roles_ApiTokenUpdateInput {
  data: ApiTokenUpdateInput!
  filter: ApiTokenKeyFilter
}

"""AuthenticationProfiles create input from roles"""
input Roles_AuthenticationProfileCreateInput {
  audiences: [String]
  clientId: String
  databaseName: String
  domain: String
  managementDomain: String
  name: String!
  roles: AuthenticationProfilesRolesRelationInput
  secret: String
  selfSignUpEmailDomains: [String]
  selfSignUpEnabled: Boolean = false
  type: String = "8BASE"
}

"""AuthenticationProfiles update input from roles"""
input Roles_AuthenticationProfileUpdateInput {
  data: AuthenticationProfileUpdateInput!
  filter: AuthenticationProfileKeyFilter
}

"""Users create input from roles"""
input Roles_UserCreateInput {
  avatar: UsersAvatarRelationInput
  email: String!
  firstName: String
  generatedText: UsersGeneratedTextRelationInput
  lastName: String
  openApiKey: String
  promts: UsersPromtsRelationInput
  roles: UsersRolesRelationInput
  status: String = "inactive"
  timezone: String
}

"""Users update input from roles"""
input Roles_UserUpdateInput {
  data: UserUpdateInput!
  filter: UserKeyFilter
}

"""Schema Origin"""
type SchemaOrigin {
  provider: String
  type: SchemaOriginType!
}

"""Schema Origin Type Enum"""
enum SchemaOriginType {
  LOCAL
  REMOTE
  VIEW
}

type Setting {
  _description: String
  bgColor: String
  buttonLinkColor: String
  containerColor: String
  createdAt: DateTime
  createdBy: User
  currency: String
  dateFormat: String
  landingPageImage: File
  language: String
  leftNavColor: String
  menuBarBGColor: String
  menuBarIconsColor: String
  menuBarLogo: File
  passwordMinLength: Int
  passwordRequireLowercase: Boolean
  passwordRequireNumbers: Boolean
  passwordRequireSpecial: Boolean
  passwordRequireUppercase: Boolean
  passwordUpdateInterval: Int
  rememberDevice: String
  timezone: String
  updatedAt: DateTime
  userInterfaceStyle: String
  vanityUrl: String
}

input SettingFilter {
  AND: [SettingFilter!]
  OR: [SettingFilter!]
  _fullText: String
  bgColor: StringPredicate
  buttonLinkColor: StringPredicate
  containerColor: StringPredicate
  createdAt: DateTimePredicate
  createdBy: UserFilter
  currency: StringPredicate
  dateFormat: StringPredicate
  deletedAt: IntPredicate
  landingPageImage: FileFilter
  language: StringPredicate
  leftNavColor: StringPredicate
  menuBarBGColor: StringPredicate
  menuBarIconsColor: StringPredicate
  menuBarLogo: FileFilter
  passwordMinLength: IntPredicate
  passwordRequireLowercase: BoolPredicate
  passwordRequireNumbers: BoolPredicate
  passwordRequireSpecial: BoolPredicate
  passwordRequireUppercase: BoolPredicate
  passwordUpdateInterval: IntPredicate
  rememberDevice: StringPredicate
  timezone: StringPredicate
  updatedAt: DateTimePredicate
  userInterfaceStyle: StringPredicate
  vanityUrl: StringPredicate
}

input SettingGroupBy {
  first: Int
  having: Having
  last: Int
  query: SettingGroupByQuery!
  skip: Int
  sort: [GroupBySort!]
}

input SettingGroupByQuery {
  _group: [GroupIdentifiersGroupByField!]
  bgColor: [GroupByField!]
  buttonLinkColor: [GroupByField!]
  containerColor: [GroupByField!]
  createdAt: [GroupByField!]
  createdBy: UserGroupByQuery
  currency: [GroupByField!]
  dateFormat: [GroupByField!]
  landingPageImage: FileGroupByQuery
  language: [GroupByField!]
  leftNavColor: [GroupByField!]
  menuBarBGColor: [GroupByField!]
  menuBarIconsColor: [GroupByField!]
  menuBarLogo: FileGroupByQuery
  passwordMinLength: [GroupByField!]
  passwordRequireLowercase: [GroupByField!]
  passwordRequireNumbers: [GroupByField!]
  passwordRequireSpecial: [GroupByField!]
  passwordRequireUppercase: [GroupByField!]
  passwordUpdateInterval: [GroupByField!]
  rememberDevice: [GroupByField!]
  timezone: [GroupByField!]
  updatedAt: [GroupByField!]
  userInterfaceStyle: [GroupByField!]
  vanityUrl: [GroupByField!]
}

"""SettingListResponse output"""
type SettingListResponse {
  """List items count"""
  count: Int!

  """Aggregated items"""
  groups: [GroupByResponse!]!

  """List items"""
  items: [Setting!]!
}

"""No longer supported. Use `sort` instead."""
enum SettingOrderBy {
  bgColor_ASC
  bgColor_DESC
  buttonLinkColor_ASC
  buttonLinkColor_DESC
  containerColor_ASC
  containerColor_DESC
  createdAt_ASC
  createdAt_DESC
  currency_ASC
  currency_DESC
  dateFormat_ASC
  dateFormat_DESC
  deletedAt_ASC
  deletedAt_DESC
  id_ASC
  id_DESC
  language_ASC
  language_DESC
  leftNavColor_ASC
  leftNavColor_DESC
  menuBarBGColor_ASC
  menuBarBGColor_DESC
  menuBarIconsColor_ASC
  menuBarIconsColor_DESC
  passwordMinLength_ASC
  passwordMinLength_DESC
  passwordRequireLowercase_ASC
  passwordRequireLowercase_DESC
  passwordRequireNumbers_ASC
  passwordRequireNumbers_DESC
  passwordRequireSpecial_ASC
  passwordRequireSpecial_DESC
  passwordRequireUppercase_ASC
  passwordRequireUppercase_DESC
  passwordUpdateInterval_ASC
  passwordUpdateInterval_DESC
  rememberDevice_ASC
  rememberDevice_DESC
  timezone_ASC
  timezone_DESC
  updatedAt_ASC
  updatedAt_DESC
  userInterfaceStyle_ASC
  userInterfaceStyle_DESC
  vanityUrl_ASC
  vanityUrl_DESC
}

"""Settings subscription payload"""
type SettingPayload {
  mutation: MutationType!
  node: Setting
  previousValues: Setting
  updatedFields: [String]
}

input SettingRelationFilter {
  every: SettingFilter
  none: SettingFilter
  some: SettingFilter
}

input SettingSort {
  bgColor: SortOrder
  buttonLinkColor: SortOrder
  containerColor: SortOrder
  createdAt: SortOrder
  createdBy: UserSort
  currency: SortOrder
  dateFormat: SortOrder
  deletedAt: SortOrder
  landingPageImage: FileSort
  language: SortOrder
  leftNavColor: SortOrder
  menuBarBGColor: SortOrder
  menuBarIconsColor: SortOrder
  menuBarLogo: FileSort
  passwordMinLength: SortOrder
  passwordRequireLowercase: SortOrder
  passwordRequireNumbers: SortOrder
  passwordRequireSpecial: SortOrder
  passwordRequireUppercase: SortOrder
  passwordUpdateInterval: SortOrder
  rememberDevice: SortOrder
  timezone: SortOrder
  updatedAt: SortOrder
  userInterfaceStyle: SortOrder
  vanityUrl: SortOrder
}

"""Settings subscription filter"""
input SettingSubscriptionFilter {
  mutation_in: [MutationType]
  node: SettingFilter
  updatedFields: UpdatedFieldsFilter
}

"""Settings update input"""
input SettingUpdateInput {
  bgColor: String
  buttonLinkColor: String
  containerColor: String
  currency: String
  dateFormat: String
  language: String
  leftNavColor: String
  menuBarBGColor: String
  menuBarIconsColor: String
  passwordMinLength: Int
  passwordRequireLowercase: Boolean
  passwordRequireNumbers: Boolean
  passwordRequireSpecial: Boolean
  passwordRequireUppercase: Boolean
  passwordUpdateInterval: Int
  rememberDevice: String
  timezone: String
  userInterfaceStyle: String
  vanityUrl: String
}

input Setting_PermissionFilter {
  AND: [Setting_PermissionFilter!]
  OR: [Setting_PermissionFilter!]
  _fullText: String
  bgColor: StringPredicate
  buttonLinkColor: StringPredicate
  containerColor: StringPredicate
  createdAt: DateTimePredicate
  createdBy: User_PermissionFilter
  currency: StringPredicate
  dateFormat: StringPredicate
  deletedAt: IntPredicate
  landingPageImage: File_PermissionFilter
  language: StringPredicate
  leftNavColor: StringPredicate
  menuBarBGColor: StringPredicate
  menuBarIconsColor: StringPredicate
  menuBarLogo: File_PermissionFilter
  passwordMinLength: IntPredicate
  passwordRequireLowercase: BoolPredicate
  passwordRequireNumbers: BoolPredicate
  passwordRequireSpecial: BoolPredicate
  passwordRequireUppercase: BoolPredicate
  passwordUpdateInterval: IntPredicate
  rememberDevice: StringPredicate
  timezone: StringPredicate
  updatedAt: DateTimePredicate
  userInterfaceStyle: StringPredicate
  vanityUrl: StringPredicate
}

input Setting_PermissionRelationFilter {
  every: Setting_PermissionFilter
  none: Setting_PermissionFilter
  some: Setting_PermissionFilter
}

"""SignUpResendInput"""
input SignUpResendInput {
  email: String!
}

"""Smart Field Attributes"""
type SmartFieldTypeAttributes {
  format: String!
  innerFields: [CustomTableField]
}

"""Smart Type Format Enum"""
enum SmartTypeFormatEnum {
  ADDRESS
  PHONE
}

"""SortOrder"""
enum SortOrder {
  ASC
  DESC
}

input StringPadFunctionArguments {
  len: Int!
  str: String!
}

input StringPredicate {
  contains: String
  ends_with: String
  equals: String
  in: [String!]
  is_empty: Boolean
  is_not_empty: Boolean
  not_contains: String
  not_ends_with: String
  not_equals: String
  not_in: [String!]
  not_starts_with: String
  starts_with: String
}

input StringPredicateHaving {
  AND: [StringPredicateHaving!]
  OR: [StringPredicateHaving!]
  contains: String
  ends_with: String
  equals: String
  in: [String!]
  is_empty: Boolean
  is_not_empty: Boolean
  not_contains: String
  not_ends_with: String
  not_equals: String
  not_in: [String!]
  not_starts_with: String
  starts_with: String
}

enum StringTrimMode {
  BOTH
  LEADING
  TRAILING
}

type Subscription {
  ApiTokens(filter: ApiTokenSubscriptionFilter): ApiTokenPayload
  AuthenticationProfiles(filter: AuthenticationProfileSubscriptionFilter): AuthenticationProfilePayload
  AuthenticationSettings(filter: AuthenticationSettingSubscriptionFilter): AuthenticationSettingPayload
  Content(filter: ContentSubscriptionFilter): ContentPayload
  ContentText(filter: ContentTextSubscriptionFilter): ContentTextPayload
  EnvironmentVariables(filter: EnvironmentVariableSubscriptionFilter): EnvironmentVariablePayload
  Files(filter: FileSubscriptionFilter): FilePayload
  Permissions(filter: PermissionSubscriptionFilter): PermissionPayload
  Prompts(filter: PromptSubscriptionFilter): PromptPayload
  Roles(filter: RoleSubscriptionFilter): RolePayload
  Settings(filter: SettingSubscriptionFilter): SettingPayload
  Users(filter: UserSubscriptionFilter): UserPayload
}

input SubstringFunctionArguments {
  len: Int
  pos: Int!
}

type SuccessResponse {
  success: Boolean
}

type SuccessWithMessageResponse {
  message: String
  success: Boolean
}

"""Switch Field Attributes"""
type SwitchFieldTypeAttributes {
  format: String!
  listOptions: [String]
}

"""Switch Type Format Enum"""
enum SwitchTypeFormatEnum {
  ACTIVE_INACTIVE
  CUSTOM
  HIGH_LOW
  ON_OFF
  TRUE_FALSE
  YES_NO
}

"""Application"""
type SystemApplication {
  appType: String!
  createdAt: DateTime!
  description: String
  displayName: String
  id: ID!
  name: String!
  status: SystemApplicationStatusEnum!
}

"""ApplicationDeleteMutationInput"""
input SystemApplicationDeleteMutationInput {
  force: Boolean
  id: String!
}

"""Application install input"""
input SystemApplicationInstallInput {
  appType: String!
  description: String
  displayName: String
  name: String!
  status: SystemApplicationStatusEnum = INACTIVE
}

"""SystemApplicationListResponse output"""
type SystemApplicationListResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [SystemApplication!]!
}

"""Application Status Enum"""
enum SystemApplicationStatusEnum {
  ACTIVE
  INACTIVE
}

"""Application update input"""
input SystemApplicationUpdateInput {
  description: String
  displayName: String
  id: String!
  name: String
  status: SystemApplicationStatusEnum
}

type SystemAsyncSessionStatusResponse {
  result: JSON
  status: String!
}

type SystemAuthProfile {
  id: String
  name: String
  type: String
}

type SystemAuthenticationInfo {
  authProfile: [SystemAuthProfile]
  environmentId: String
  environmentName: String
}

type SystemBackendUtilizationResponse {
  authProfiles: Int
  databaseRows: Int
  field: Int
  fileStorageSize: Int
  functions: Int
  roles: Int
  tables: Int
}

type SystemBillingCurrentPlanResponse {
  displayName: String
  id: ID
  name: String
  nextPlan: SystemBillingNextPlanResponse
  paymentDate: DateTime
  pdf: String
  price: Int
  status: SystemWorkspaceStatus
  trialEnd: DateTime
}

enum SystemBillingDetailsOrigin {
  member
  organization
  workspace
}

type SystemBillingDetailsResponse {
  brand: String
  expMonth: Int
  expYear: Int
  last4: String
  origin: SystemBillingDetailsOrigin!
}

type SystemBillingInvoiceItem {
  amountDue: Float
  amountPaid: Float
  amountRemaining: Float
  description: String
  endingBalance: Float
  id: ID!
  invoicePdf: String
  number: String
  organization: SystemBillingInvoiceItemOrganizationInfo
  paid: Boolean
  periodEnd: DateTime
  periodStart: DateTime
  plan: SystemBillingInvoiceItemPlanInfo
  project: SystemBillingInvoiceItemProjectInfo
  status: String
  total: Float
}

type SystemBillingInvoiceItemOrganizationInfo {
  id: ID
  name: String
}

type SystemBillingInvoiceItemPlanInfo {
  displayName: String
  id: ID
  name: String
}

type SystemBillingInvoiceItemProjectInfo {
  id: ID
  name: String
}

enum SystemBillingInvoicesListFilterType {
  CUSTOMER
  PROJECT
}

"""SystemBillingInvoicesListResponse output"""
type SystemBillingInvoicesListResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [SystemBillingInvoiceItem!]!
}

type SystemBillingLimitMetricItem {
  description: String
  displayName: String
  name: String
  showPriority: Int
  tooltip: String
  unit: String
}

type SystemBillingMetricOverageItem {
  value: Float
  warning: String
}

type SystemBillingMetricUsageItem {
  limitMetric: SystemBillingLimitMetricItem
  overage: SystemBillingMetricOverageItem
  value: Float
}

type SystemBillingMetricUsageQuotaItem {
  limitMetric: SystemBillingLimitMetricItem
  value: Float
}

"""SystemBillingMetricUsageQuotasListResponse output"""
type SystemBillingMetricUsageQuotasListResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [SystemBillingMetricUsageQuotaItem!]!
}

input SystemBillingMetricUsagesListFilter {
  entryDate: DateTimePredicate!
}

"""SystemBillingMetricUsagesListResponse output"""
type SystemBillingMetricUsagesListResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [SystemBillingMetricUsageItem!]!
}

type SystemBillingNextPlanResponse {
  displayName: String
  id: ID
  name: String
  pdf: String
  price: Int
}

type SystemBillingPlanBaseInfo {
  description: String
  displayName: String
  id: ID
  isCustom: Boolean
  isLegacy: Boolean
  limitMetrics: [SystemBillingPlanLimitMetricItem]
  name: String
  pdf: String
  price: Int
}

type SystemBillingPlanLimitMetricItem {
  displayName: String
  hardLimit: Float
  name: String
  overagePrice: Int
  softLimit: Float
}

"""BillingPlanUpdateMutationInput"""
input SystemBillingPlanUpdateMutationInput {
  planId: ID!
  projectID: ID!
}

enum SystemBranchEnvironmentMode {
  FULL
  SYSTEM
}

type SystemCacheEvictResponse {
  evicted: [String]!
}

"""Ci Commit Mode"""
enum SystemCiCommitMode {
  FULL
  ONLY_MIGRATIONS
  ONLY_PROJECT
}

"""Ci Status"""
type SystemCiStatusOutput {
  migrations: [String]
  status: String!
}

"""CloudLogs Entry"""
type SystemCloudLogsEntry {
  message: String
  timestamp: DateTime
}

"""Computed field mode"""
enum SystemComputedFieldMode {
  STORED
  VIRTUAL
}

"""Custom Table Field Type"""
type SystemCustomTableField {
  computedMode: SystemComputedFieldMode
  defaultValue: String
  description: String
  displayName: String
  expression: String
  fieldType: SystemFieldType
  fieldTypeAttributes: SystemFieldTypeAttributes
  isList: Boolean!
  isRequired: Boolean!
  isUnique: Boolean
  name: String
}

"""Date Field Attributes"""
type SystemDateFieldTypeAttributes {
  format: String!
}

"""Date Type Format Enum"""
enum SystemDateTypeFormatEnum {
  DATE
  DATETIME
}

"""DeployDataResponse"""
type SystemDeployDataResponse {
  buildName: String!
  uploadBuildUrl: String!
  uploadMetaDataUrl: String!
}

enum SystemDeployModeEnum {
  FULL
  FUNCTIONS
  MIGRATIONS
  ONLY_PLUGINS
  ONLY_PROJECT
}

"""DeployOptions"""
input SystemDeployOptions {
  extensionNames: [String]
  mode: SystemDeployModeEnum = ONLY_PROJECT
  pluginNames: [String]
}

enum SystemDeployStatusEnum {
  compiling
  complete_error
  complete_success
  deploying
  initialize
  preparing
}

"""SystemDeployStatusResult"""
type SystemDeployStatusResult {
  message: String
  status: SystemDeployStatusEnum!
}

"""DeployingBuildInput"""
input SystemDeployingBuildInput {
  buildName: String!
  options: SystemDeployOptions
}

type SystemDeploymentABItemResponse {
  dateDeploy: DateTime
  statusDeploy: String
  urlDeploy: String
  userDeploy: SystemMemberAccountInfo
  versionDeploy: String
  versionFrontEnd: String
}

type SystemDeploymentProjectItemResponse {
  dateDeploy: DateTime
  name: String
  statusDeploy: String
  urlDeploy: String
  versionDeploy: String
  versionFrontEnd: String
  workspaceId: ID
}

"""SystemDeploymentProjectListResponse output"""
type SystemDeploymentProjectListResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [SystemDeploymentProjectItemResponse!]!
}

"""SystemEnvironmentBackupListResponse output"""
type SystemEnvironmentBackupListResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [EnvironmentBackupItem!]!
}

type SystemEnvironmentMember {
  avatar: SystemEnvironmentMemberAvatar
  createdAt: DateTime
  email: String!
  firstName: String
  lastName: String
  permissions: SystemEnvironmentMemberPermissionsList
  registeredAt: DateTime
  roles: SystemEnvironmentMemberRolesList
  status: String!
}

type SystemEnvironmentMemberAvatar {
  downloadUrl: String
  id: String
}

input SystemEnvironmentMemberFilter {
  email: String
  workspaceId: String
}

type SystemEnvironmentMemberPermission {
  permission: JSON
  resource: String
  resourceType: String
}

type SystemEnvironmentMemberPermissionsList {
  count: Int!
  items: [SystemEnvironmentMemberPermission!]
}

type SystemEnvironmentMemberRole {
  id: String!
  name: String!
}

input SystemEnvironmentMemberRoleIdFilterPredicate {
  equals: ID
  not_equals: ID
}

type SystemEnvironmentMemberRolesList {
  count: Int!
  items: [SystemEnvironmentMemberRole!]
}

input SystemEnvironmentMemberStatusFilterPredicate {
  equals: String
  not_equals: String
}

input SystemEnvironmentMemberUpdateData {
  roles: [String]
}

input SystemEnvironmentMembersFilter {
  email: String!
}

input SystemEnvironmentMembersListFilter {
  email: String
  firstName: String
  lastName: String
  roleId: SystemEnvironmentMemberRoleIdFilterPredicate
  status: SystemEnvironmentMemberStatusFilterPredicate
  workspaceId: ID
}

"""SystemEnvironmentMembersListResponse output"""
type SystemEnvironmentMembersListResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [SystemEnvironmentMember!]!
}

input SystemEnvironmentMembersListSort {
  email: SortOrder
  firstName: SortOrder
  isOwner: SortOrder
  lastName: SortOrder
  status: SortOrder
}

type SystemEnvironmentProjectItem {
  fields: String
  functions: String
  id: ID!
  name: String!
  tables: String
  worksApiHost: String
  workspaceId: ID!
  workspaceName: String!
}

type SystemEnvironmentRoleBaseInfo {
  id: String!
  name: String!
}

type SystemEnvironmentRoleList {
  assignedRoles: [SystemEnvironmentRoleBaseInfo]
  environmentId: String!
  environmentName: String!
  exists: Boolean
  roles: [SystemEnvironmentRoleBaseInfo]
}

type SystemEnvironmentSettings {
  deleteLock: Boolean
  fileManagementProvider: SystemFileManagerProviderTypeEnum
  introspection: Boolean
}

"""SystemEnvironmentsListResponse output"""
type SystemEnvironmentsListResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [EnvironmentItem!]!
}

"""SystemEnvironmentsProjectListResponse output"""
type SystemEnvironmentsProjectListResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [SystemEnvironmentProjectItem!]!
}

"""Field Data Features"""
type SystemFieldDataFeatures {
  create: Boolean!
  sort: Boolean!
  update: Boolean!
}

"""Field Schema Features"""
type SystemFieldSchemaFeatures {
  delete: Boolean!
  update: Boolean!
}

"""Field types"""
enum SystemFieldType {
  DATE
  FILE
  GEO
  ID
  JSON
  MISSING_RELATION
  NUMBER
  ONE_WAY_RELATION
  RELATION
  SMART
  SWITCH
  TEXT
  UUID
}

"""Field Type Attributes"""
union SystemFieldTypeAttributes = SystemDateFieldTypeAttributes | SystemFileFieldTypeAttributes | SystemGeoFieldTypeAttributes | SystemMissingRelationFieldTypeAttributes | SystemNumberFieldTypeAttributes | SystemSmartFieldTypeAttributes | SystemSwitchFieldTypeAttributes | SystemTextFieldTypeAttributes | SystemUUIDFieldTypeAttributes

"""Field Type Attributes Input"""
input SystemFieldTypeAttributesInput {
  autoIncrement: Boolean
  currency: String
  expiration: Int
  fieldSize: Int
  format: String
  isBigInt: Boolean
  listOptions: [String!]
  maxSize: Int
  maxValue: Float
  minValue: Float
  precision: Int
  srid: Int
  typeRestrictions: [String!]
}

type SystemFileBaseInfo {
  downloadUrl: String
  id: String
}

"""File Field Attributes"""
type SystemFileFieldTypeAttributes {
  expiration: Int
  format: String!
  maxSize: Int
  showTitle: Boolean @deprecated(reason: "Field is deprecated")
  showUrl: Boolean @deprecated(reason: "Field is deprecated")
  typeRestrictions: [String!]
}

enum SystemFileManagerProviderTypeEnum {
  aws
  filestack
  uploadcare
}

"""File Type Format Enum"""
enum SystemFileTypeFormatEnum {
  FILE
  IMAGE
}

"""FileUploadByUrlInput"""
input SystemFileUploadByUrlInput {
  url: String!
}

"""FileUploadByUrlResponse"""
type SystemFileUploadByUrlResponse {
  fileId: String!
  meta: JSON!
}

union SystemFileUploadSignInfo = AwsSignInfoResponse | FileStackSignInfoResponse | UploadcareSignInfoResponse

type SystemFrontendUtilizationABResponse {
  CDN: Boolean
  assets: Int
  customStates: Int
  functions: Int
  layouts: Int
  libraries: Int
  pages: Int
  requests: Int
  resources: Int
}

type SystemFrontendUtilizationResponse {
  assets: Int
  customStates: Int
  functions: Int
  layouts: Int
  libraries: Int
  pages: Int
  requests: Int
  resources: Int
}

"""FunctionInfo"""
interface SystemFunctionInfo {
  application: SystemApplication
  description: String
  functionType: SystemFunctionType!
  name: String!
}

"""FunctionInfoFilter"""
input SystemFunctionInfoFilter {
  description: String
  functionType: SystemFunctionType
  name: String
}

"""FunctionInfoOrderBy"""
enum SystemFunctionInfoOrderBy {
  description_ASC
  description_DESC
  functionType_ASC
  functionType_DESC
  name_ASC
  name_DESC
}

"""SystemFunctionListResponse output"""
type SystemFunctionListResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [SystemFunctionInfo!]!
}

"""FunctionResolverInfo"""
type SystemFunctionResolverInfo implements SystemFunctionInfo {
  application: SystemApplication
  description: String
  functionType: SystemFunctionType!
  gqlType: String!
  name: String!
}

"""FunctionTaskInfo"""
type SystemFunctionTaskInfo implements SystemFunctionInfo {
  application: SystemApplication
  description: String
  functionType: SystemFunctionType!
  name: String!
  scheduleExpression: String
}

"""FunctionTriggerInfo"""
type SystemFunctionTriggerInfo implements SystemFunctionInfo {
  application: SystemApplication
  description: String
  functionType: SystemFunctionType!
  name: String!
  operation: String!
  tableName: String!
  type: String!
}

"""FunctionType"""
enum SystemFunctionType {
  resolver
  schedule
  task
  trigger
  webhook
}

"""FunctionWebhookInfo"""
type SystemFunctionWebhookInfo implements SystemFunctionInfo {
  application: SystemApplication
  description: String
  functionType: SystemFunctionType!
  httpMethod: String!
  name: String!
  workspaceFullPath: String!
  workspaceRelativePath: String!
}

"""Diff Environment Input"""
type SystemGenerateEnvironmentOutput {
  url: String
}

"""Geo Field Attributes"""
type SystemGeoFieldTypeAttributes {
  format: String!
  srid: Int
}

union SystemInboxEventDetailsUnion = SystemInboxEventEnvironmentInvitationDetails | SystemInboxEventNotificationDetailsType | SystemInboxEventOrganizationInvitationDetails

type SystemInboxEventEnvironmentInvitationDetails {
  environmentName: String
  invitedBy: SystemInboxEventInvitedBy
  project: SystemInboxEventProject
  status: SystemInboxEventStatusEnum
  uuid: String
  workspace: SystemInboxEventWorkspace
}

type SystemInboxEventInvitedBy {
  avatar: GraphQLFileItemResponse
  email: String
  firstName: String
  lastName: String
}

type SystemInboxEventItem {
  createdAt: DateTime!
  details: SystemInboxEventDetailsUnion
  id: ID!
  isCompleted: Boolean
  type: SystemInboxEventTypeEnum
}

type SystemInboxEventNotificationDetailsType {
  details: JSON
  kind: String
}

type SystemInboxEventOrganization {
  avatar: GraphQLFileItemResponse
  id: ID!
  name: String
}

type SystemInboxEventOrganizationInvitationDetails {
  invitedBy: SystemInboxEventInvitedBy
  organization: SystemInboxEventOrganization
  status: SystemInboxEventStatusEnum
  uuid: String
}

type SystemInboxEventProject {
  apiHost: String
  avatar: GraphQLFileItemResponse
  id: ID!
  kind: String
  name: String
}

enum SystemInboxEventStatusEnum {
  accepted
  declined
  sent
}

enum SystemInboxEventTypeEnum {
  EnvironmentInvitation
  Notification
  OrganizationInvitation
}

type SystemInboxEventWorkspace {
  apiHost: String
  avatar: GraphQLFileItemResponse
  id: ID!
  kind: String
  name: String
}

"""SystemInboxEventsListResponse output"""
type SystemInboxEventsListResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [SystemInboxEventItem!]!
}

"""Table Create Index Input"""
input SystemIndexCreateInput {
  columns: [SystemTableIndexColumnInput!]!
  force: Boolean
  name: String
  tableId: ID!
  type: TableIndexType!
}

"""Table Delete Index Input"""
input SystemIndexDeleteInput {
  id: ID!
}

"""Table Update Index Input"""
input SystemIndexUpdateInput {
  columns: [SystemTableIndexColumnInput!]
  force: Boolean
  id: ID!
  name: String
  type: TableIndexType
}

"""Invite members input"""
input SystemInviteMembersInput {
  recipients: [SystemInviteRecipientInput!]!
}

"""Invite recipient input"""
input SystemInviteRecipientInput {
  email: String!
  firstName: String
  lastName: String
  roles: [ID!]
}

"""Invited By Name"""
type SystemInvitedByName {
  email: String
  firstName: String
  lastName: String
  projectId: String
  projectName: String
  workspaceName: String
}

"""InvokeData"""
input SystemInvokeData {
  functionName: String!
  inputArgs: String
}

"""InvokeFunctionResponse"""
type SystemInvokeFunctionResponse {
  responseData: String!
}

"""LogsListFiltered Response"""
type SystemLogsListFilteredResponse {
  count: Int
  items: [SystemCloudLogsEntry]
  nextToken: String
}

"""
Member - list of workspaces you are member of
Owner - list of workspaces you are owner of
OrganizationUser - list of organizations you are part of
"""
type SystemMemberAccountDeleteDetails {
  member: [SystemOrganizationWorkspaceItem]
  organizationUser: [SystemOrganizationBaseItem]
  owner: [SystemOrganizationWorkspaceItem]
}

type SystemMemberAccountDeleteResponse {
  details: SystemMemberAccountDeleteDetails
  success: Boolean!
}

type SystemMemberAccountInfo {
  aboutMe: String
  addressLine1: String
  addressLine2: String
  avatar: GraphQLFileItemResponse
  city: String
  companyName: String
  country: String
  createdAt: DateTime
  email: String!
  firstName: String
  githubUsername: String
  intendedUse: String
  isDeveloper: Boolean
  lastName: String
  learningMode: Boolean
  linkedInUsername: String
  projectDescription: String
  role: String
  state: String
  timezone: String
  twitterUsername: String
  type: SystemUserType
  website: String
  zipCode: String
}

input SystemMemberAccountUpsertDataInput {
  aboutMe: String
  addressLine1: String
  addressLine2: String
  avatar: GraphQLCreateFileItemInput
  city: String
  companyName: String
  country: String
  firstName: String
  githubUsername: String
  intendedUse: String
  isDeveloper: Boolean
  lastName: String
  learningMode: Boolean
  linkedInUsername: String
  projectDescription: String
  role: String
  state: String
  timezone: String
  twitterUsername: String
  type: SystemUserType
  website: String
  zipCode: String
}

"""Member Invitation"""
type SystemMemberInvitation {
  accepted: Boolean
  acceptedOn: DateTime
  apiHost: String
  email: String
  firstName: String
  id: String
  invitedBy: SystemInvitedByName
  isRegistered: Boolean
  lastName: String
  resentOn: DateTime
}

"""Member invitation accept input"""
input SystemMemberInvitationAcceptInput {
  accepted: Boolean!
  id: String!
}

"""Member Invitation Accept Response"""
type SystemMemberInvitationAcceptResponse {
  success: Boolean!
}

"""Cancel members invitations input"""
input SystemMemberInvitationCancelInput {
  email: String!
}

"""Resend member invitation input"""
input SystemMemberInvitationResendInput {
  email: ID!
}

type SystemMemberInvitationsList {
  count: Int
  items: [SystemMemberInvitation]
}

"""MemberPaymentDetailsUpdateMutationInput"""
input SystemMemberPaymentDetailsUpdateMutationInput {
  cardToken: String
}

"""MissingRelation Field Attributes"""
type SystemMissingRelationFieldTypeAttributes {
  missingTable: String!
}

type SystemMutation {
  applicationDelete(data: SystemApplicationDeleteMutationInput!): SuccessResponse
  applicationInstall(data: SystemApplicationInstallInput!): SystemApplication
  applicationUpdate(data: SystemApplicationUpdateInput!): SystemApplication
  billingContextCacheEvict(keys: [String!]!, projectKeys: [String!]!): SystemCacheEvictResponse
  billingPlanUpdate(data: SystemBillingPlanUpdateMutationInput!): SystemBillingCurrentPlanResponse
  ciCommit(build: String, migrationNames: [String], mode: SystemCiCommitMode): AsyncSession
  ciInstall: SuccessResponse
  deploy(data: SystemDeployingBuildInput): Boolean
  environmentBackup(environmentName: String!): AsyncSession
  environmentBranch(force: Boolean, mode: SystemBranchEnvironmentMode, name: String!): AsyncSession
  environmentDelete(environmentName: String!): SuccessResponse
  environmentDeleteAsync(environmentName: String!): AsyncSession
  environmentMemberDelete(filter: SystemEnvironmentMembersFilter): SuccessResponse!
  environmentMemberUpdate(data: SystemEnvironmentMemberUpdateData, filter: SystemEnvironmentMembersFilter): SystemEnvironmentMember
  environmentRestore(backup: String!, environmentName: String!): AsyncSession
  environmentSetup(data: EnvironmentSetupInput): SuccessResponse
  fieldCreate(data: SystemTableFieldCreateInput!): SystemTableField!
  fieldDelete(data: SystemTableFieldDeleteInput!): SuccessResponse!
  fieldUpdate(data: SystemTableFieldUpdateInput!): SystemTableField!
  fieldUpdatePosition(data: SystemTableFieldPositionUpdateInput!): SuccessResponse!
  fileUploadByUrl(data: SystemFileUploadByUrlInput!): SystemFileUploadByUrlResponse!
  indexCreate(data: SystemIndexCreateInput!): SystemTableIndex!
  indexDelete(data: SystemIndexDeleteInput!): SuccessResponse
  indexUpdate(data: SystemIndexUpdateInput!): SystemTableIndex!
  inviteMembers(data: SystemInviteMembersInput!, force: Boolean): [SystemTeamInvitationDetails]!
  invoke(data: SystemInvokeData): SystemInvokeFunctionResponse
  memberAccountDelete: SystemMemberAccountDeleteResponse
  memberAccountUpsert(data: SystemMemberAccountUpsertDataInput): SystemMemberAccountInfo
  memberInvitationAccept(data: SystemMemberInvitationAcceptInput!): SystemMemberInvitationAcceptResponse!
  memberInvitationCancel(data: SystemMemberInvitationCancelInput!): SuccessResponse
  memberInvitationResend(data: SystemMemberInvitationResendInput!): SuccessResponse
  memberPaymentDetailsUpdate(data: SystemMemberPaymentDetailsUpdateMutationInput!): SystemPaymentDetailsResponse
  notificationUpdate(id: String!, status: NotificationStatusType!): SuccessResponse
  organizationInviteUser(email: String!, firstName: String, lastName: String, organizationId: ID!, projectRoles: [SystemOrganizationProjectWithEnvironmentRolesInput], role: String!): OrganizationUserInvitationResponse
  organizationInviteUserAccept(invitationId: String!): SuccessResponse
  organizationInviteUserCancel(invitationId: String!): SuccessResponse
  organizationPaymentDetailsUpdate(data: SystemOrganizationPaymentDetailsUpdateMutationInput!): SystemPaymentDetailsResponse
  organizationProjectUserRemove(email: String!, projectId: ID!): SuccessResponse
  organizationProjectUserShare(email: String!, environmentRoles: [SystemOrganizationProjectEnvironmentRolesInput], projectId: ID!): SuccessResponse
  organizationUpdate(description: String, id: String!, image: GraphQLCreateFileItemInput, name: String, type: SystemOrganizationTypeEnum): SystemOrganizationItem
  organizationUserRemove(email: String!, organizationId: String!): SuccessResponse
  organizationUserUpdate(email: String!, organizationId: ID!, role: String!): SystemOrganizationUserInfo
  prepareDeploy: SystemDeployDataResponse!
  projectCreate(data: SystemProjectCreateMutationInput!): AsyncSession
  projectDelete(projectId: ID!): AsyncSession
  projectLeave(projectId: ID!): SuccessResponse
  projectUpdate(data: SystemProjectUpdateMutationInput!): SystemProjectUpdateResponse
  rolePermissionsCacheEvict(keys: [String!]!): SystemCacheEvictResponse
  tableCreate(data: SystemTableCreateInput!): SystemTable!
  tableDelete(data: SystemTableDeleteInput!): SuccessResponse!
  tableUpdate(data: SystemTableUpdateInput!): SystemTable!
  viewCreate(data: SystemViewCreateInput!): SystemTable!
  viewUpdate(data: SystemViewUpdateInput!): SystemTable!
  workspaceCreate(data: SystemWorkspaceCreateMutationInput!): SystemWorkspaceCreateResponse
  workspaceCreateAsync(data: SystemWorkspaceCreateMutationInput!): SystemWorkspaceCreateResponse
  workspaceDelete(data: SystemWorkspaceDeleteMutationInput!): SuccessResponse
  workspaceLeave(force: Boolean): SuccessResponse
  workspaceUpdate(data: SystemWorkspaceUpdateMutationInput!): SystemWorkspaceUpdateResponse
}

"""Number Field Attributes"""
type SystemNumberFieldTypeAttributes {
  autoIncrement: Boolean
  currency: String
  format: String!
  isBigInt: Boolean
  maxValue: Float
  minValue: Float
  precision: Int
}

"""Number Type Format Enum"""
enum SystemNumberTypeFormatEnum {
  CURRENCY
  FRACTION
  NUMBER
  PERCENTAGE
  SCIENTIFIC
}

type SystemOrganizationBaseItem {
  description: String
  id: ID!
  image: SystemFileBaseInfo
  name: String!
  type: SystemOrganizationTypeEnum
}

type SystemOrganizationInvitation {
  accepted: Boolean
  email: String!
  emailFrom: String!
  firstName: String
  firstNameFrom: String
  id: ID!
  lastName: String
  lastNameFrom: String
  organization: SystemOrganizationBaseItem!
  role: String!
}

type SystemOrganizationItem {
  description: String
  id: ID!
  image: SystemOrganizationItemImage
  name: String!
  type: SystemOrganizationTypeEnum
  users: [SystemOrganizationUserInfo]
}

type SystemOrganizationItemImage {
  downloadUrl: String
  id: String
}

"""OrganizationPaymentDetailsUpdateMutationInput"""
input SystemOrganizationPaymentDetailsUpdateMutationInput {
  cardToken: String!
  organizationId: ID!
}

"""environmentId to add to with roles (array of ids)."""
input SystemOrganizationProjectEnvironmentRolesInput {
  environmentId: String!
  roles: [ID]
}

type SystemOrganizationProjectItem {
  description: String
  id: ID!
  image: SystemFileBaseInfo
  kind: String!
  name: String!
  organization: SystemOrganizationBaseItem
}

input SystemOrganizationProjectWithEnvironmentRolesInput {
  environmentRoles: [SystemOrganizationProjectEnvironmentRolesInput]
  projectId: ID!
}

enum SystemOrganizationTypeEnum {
  agency
  community
  company
  individual
}

type SystemOrganizationUserInfo {
  avatar: GraphQLFileItemResponse
  email: String!
  firstName: String
  id: String!
  lastName: String
  projects: [SystemOrganizationProjectItem]
  role: String!
  status: String!
}

type SystemOrganizationWorkspaceItem {
  apiHost: String
  description: String
  id: ID!
  image: SystemFileBaseInfo
  kind: String!
  name: String!
  organization: SystemOrganizationBaseItem
}

"""SystemOrganizationsListResponse output"""
type SystemOrganizationsListResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [SystemOrganizationBaseItem!]!
}

enum SystemPaymentDetailsOrigin {
  member
  organization
  workspace
}

enum SystemPaymentDetailsOriginProject {
  member
  organization
  workspace
}

type SystemPaymentDetailsProjectResponse {
  brand: String
  expMonth: Int
  expYear: Int
  last4: String
  origin: SystemPaymentDetailsOriginProject
}

type SystemPaymentDetailsResponse {
  brand: String
  expMonth: Int
  expYear: Int
  last4: String
  origin: SystemPaymentDetailsOrigin!
}

"""Diff Environment Input"""
type SystemPlanEnvironmentOutput {
  url: String
}

"""ProjectCreateMutationInput"""
input SystemProjectCreateMutationInput {
  authType: String
  billingPlanId: ID
  cardToken: String
  description: String
  image: GraphQLCreateFileItemInput
  kind: String
  name: String!
  organizationId: ID
}

type SystemProjectImage {
  downloadUrl: String
  id: String
}

type SystemProjectItemRespSingle {
  apiHost: String
  createdAt: DateTime
  description: String
  id: ID!
  image: SystemProjectImage
  kind: String
  lastAccess: DateTime
  name: String!
  nextPlan: SystemBillingNextPlanResponse
  organization: SystemOrganizationBaseItem
  owner: SystemMemberAccountInfo
  plan: SystemBillingCurrentPlanResponse
  region: String
  usersCount: Int
}

"""SystemProjectItemResponse output"""
type SystemProjectItemResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [SystemProjectItemRespSingle!]!
}

type SystemProjectItemWS {
  description: String
  id: ID!
  image: SystemWorkspaceImage
  name: String!
  region: String
}

type SystemProjectPlanResponse {
  overagesPrice: Float
  paymentDetail: SystemPaymentDetailsProjectResponse
  plan: SystemBillingCurrentPlanResponse
}

type SystemProjectQuotasResponse {
  metricUsages: SystemBillingMetricUsagesListResponse
  metricUsagesQuotas: SystemBillingMetricUsageQuotasListResponse
}

"""ProjectUpdateMutationInput"""
input SystemProjectUpdateMutationInput {
  description: String
  id: ID!
  image: GraphQLCreateFileItemInput
  name: String
}

type SystemProjectUpdateResponse {
  description: String
  id: ID
  image: GraphQLFileItemResponse
  name: String
}

type SystemProjectUserDetailsResponse {
  apiHost: String!
  authenticationInfo: [SystemAuthenticationInfo]
  backendUtilization: SystemBackendUtilizationResponse
  backendWorkspaces: SystemWorkspaceListResponse
  createdAt: DateTime
  deploymentsProject: SystemDeploymentProjectListResponse
  description: String
  environmentsProject: SystemEnvironmentsProjectListResponse
  frontendUtilization: SystemFrontendUtilizationResponse
  frontendWorkspaces: SystemWorkspaceListResponse
  id: ID!
  image: SystemProjectImage
  kind: String!
  lastAccess: DateTime
  metricUsages: SystemBillingMetricUsagesListResponse
  metricUsagesQuotas: SystemBillingMetricUsageQuotasListResponse
  name: String!
  nextPlan: SystemBillingNextPlanResponse
  organization: SystemOrganizationBaseItem
  overagesPrice: Float
  owner: SystemMemberAccountInfo
  paymentDetail: SystemPaymentDetailsProjectResponse
  plan: SystemBillingCurrentPlanResponse
  region: String
  teamMemberCount: Int
}

type SystemProjectUserResponse {
  myProjects: SystemProjectItemResponse!
  sharedProjects: SystemProjectItemResponse!
}

type SystemQuery {
  application(id: String!): SystemApplication
  applicationsList: SystemApplicationListResponse
  asyncSessionStatus(sessionId: String!): SystemAsyncSessionStatusResponse
  billingCurrentPlan(organizationId: ID): SystemBillingCurrentPlanResponse
  billingDetails: SystemBillingDetailsResponse @deprecated(reason: "No longer supported. Use `system.memberPaymentDetails, system.organizationPaymentDetails or system.workspacePaymentDetails` instead.")
  billingInvoicesList(after: ID, before: ID, by: SystemBillingInvoicesListFilterType, limit: Int, projectId: ID): SystemBillingInvoicesListResponse! @deprecated(reason: "No longer supported. Use `system.memberBillingHistory, system.organizationBillingHistory or system.workspaceBillingHistory` instead.")
  billingMetricUsageQuotasList(organizationId: ID, projectId: ID): SystemBillingMetricUsageQuotasListResponse!
  billingMetricUsagesList(filter: SystemBillingMetricUsagesListFilter, organizationId: ID, projectId: ID): SystemBillingMetricUsagesListResponse!
  ciGenerate(sourceEnvironmentId: String, tables: [String!], targetEnvironmentId: String): SystemGenerateEnvironmentOutput
  ciGenerateAsync(sourceEnvironmentId: String, tables: [String!], targetEnvironmentId: String): AsyncSession
  ciPlan(sourceEnvironmentId: String, tables: [String!], targetEnvironmentId: String): SystemPlanEnvironmentOutput @deprecated(reason: "No longer supported. Use `ciGenerate` instead.")
  ciStatus: SystemCiStatusOutput
  deployStatus(buildName: String!): SystemDeployStatusResult!
  environmentBackupsList(environmentName: String): SystemEnvironmentBackupListResponse
  environmentMember(filter: SystemEnvironmentMemberFilter): SystemEnvironmentMember
  environmentMembersList(environmentIds: [String], filter: SystemEnvironmentMembersListFilter, first: Int, skip: Int, sort: [SystemEnvironmentMembersListSort!]): SystemEnvironmentMembersListResponse
  environmentSettings: SystemEnvironmentSettings
  environmentsList(workspaceId: String): SystemEnvironmentsListResponse
  fileUploadSignInfo: SystemFileUploadSignInfo
  functionsList(applicationId: String, filter: SystemFunctionInfoFilter, orderBy: [SystemFunctionInfoOrderBy]): SystemFunctionListResponse
  getEnvironmentRoles(email: String, projectId: ID, workspaceId: String): [SystemEnvironmentRoleList]
  inboxEventsList(filter: InboxEventsListFilter, first: Int, skip: Int): SystemInboxEventsListResponse
  introspection: IntrospectionQueryResponse
  logs(applicationId: String, endTime: DateTime, functionName: String!, limit: Int, startTime: DateTime): [String] @deprecated(reason: "No longer supported. Use `system.logsList` instead.")
  logsList(applicationId: String, endTime: DateTime, functionName: String!, limit: Int, startTime: DateTime): [SystemCloudLogsEntry] @deprecated(reason: "No longer supported. Use `system.logsListFiltered` instead.")
  logsListFiltered(endTime: DateTime, filter: String, limit: Int, resource: String, startTime: DateTime, startToken: String): SystemLogsListFilteredResponse
  memberAccount: SystemMemberAccountInfo
  memberBillingHistory(first: Int, hideOrganizationInvoices: Boolean, skip: Int): SystemBillingInvoicesListResponse!
  memberInvitation(id: String!): SystemMemberInvitation
  memberInvitationsList: SystemMemberInvitationsList
  memberPaymentDetails: SystemPaymentDetailsResponse
  organizationBillingHistory(first: Int, hideWorkspaceInvoices: Boolean, organizationId: ID!, skip: Int): SystemBillingInvoicesListResponse!
  organizationById(organizationId: String!): SystemOrganizationItem
  organizationInvitationById(invitationId: String!): SystemOrganizationInvitation
  organizationPaymentDetails(organizationId: ID!): SystemPaymentDetailsResponse
  organizationsListByUser: SystemOrganizationsListResponse
  projectInfoDetails(projectId: ID!): SystemProjectUserDetailsResponse
  projectPlan(projectId: ID!): SystemProjectPlanResponse
  projectQuotas(projectId: ID!): SystemProjectQuotasResponse
  projectsUserListQuery(organizationId: ID): SystemProjectUserResponse
  table(id: ID, name: String): SystemTable
  tableField(id: ID!): SystemTableField
  tablesList(filter: SystemTableListFilter): SystemTableListResponse!
  userBillingConfiguration(filterPlanProjects: Boolean, kind: String, organizationId: ID, region: String): SystemUserBillingConfigurationResponse!
  userInvitationsList: SystemUserInvitationList
  viewDryRun(sql: String!): SystemViewDryRunOutput
  workspacePaymentDetails(projectId: ID): SystemPaymentDetailsResponse
  workspacesFrontendList: SystemWorkspaceListResponse
  workspacesList: SystemWorkspaceListResponse
}

"""Relation"""
type SystemRelation {
  refField: SystemTableField
  refFieldDisplayName: String
  refFieldIsList: Boolean
  refFieldIsRequired: Boolean
  refFieldName: String
  refTable: SystemTable!
  relationFieldName: String
  relationTableName: String
}

"""Relation Create Input"""
input SystemRelationCreateInput {
  refFieldDisplayName: String
  refFieldIsList: Boolean!
  refFieldIsRequired: Boolean!
  refFieldName: String
  refTableId: ID!
}

"""Relation Update Input"""
input SystemRelationUpdateInput {
  refFieldDisplayName: String
  refFieldIsList: Boolean
  refFieldIsRequired: Boolean
  refFieldName: String
  refTableId: ID
}

"""Schema Origin"""
type SystemSchemaOrigin {
  provider: String
  type: SystemSchemaOriginType!
}

"""Schema Origin Type Enum"""
enum SystemSchemaOriginType {
  LOCAL
  REMOTE
  VIEW
}

"""Smart Field Attributes"""
type SystemSmartFieldTypeAttributes {
  format: String!
  innerFields: [SystemCustomTableField]
}

"""Smart Type Format Enum"""
enum SystemSmartTypeFormatEnum {
  ADDRESS
  PHONE
}

"""Switch Field Attributes"""
type SystemSwitchFieldTypeAttributes {
  format: String!
  listOptions: [String]
}

"""Switch Type Format Enum"""
enum SystemSwitchTypeFormatEnum {
  ACTIVE_INACTIVE
  CUSTOM
  HIGH_LOW
  ON_OFF
  TRUE_FALSE
  YES_NO
}

"""Table"""
type SystemTable {
  application: SystemApplication
  attributes: SystemTableAttributes
  dataFeatures: SystemTableDataFeatures!
  description: String
  displayName: String
  fields: [SystemTableField!]
  fieldsForIndexing: [SystemTableField]
  id: ID!
  indexes: [SystemTableIndex!]
  isSystem: Boolean!
  name: String!
  origin: SystemSchemaOrigin!
  schemaFeatures: SystemTableSchemaFeatures!
}

"""Table Attributes"""
union SystemTableAttributes = SystemViewAttributes

"""Table Create Input"""
input SystemTableCreateInput {
  applicationId: String
  description: String
  displayName: String
  name: String!
}

"""Table Data Features"""
type SystemTableDataFeatures {
  create: Boolean!
  delete: Boolean!
  update: Boolean!
}

"""Table Delete Input"""
input SystemTableDeleteInput {
  id: ID!
}

"""TableField"""
type SystemTableField {
  computedMode: SystemComputedFieldMode
  dataFeatures: SystemFieldDataFeatures!
  defaultValue: String
  description: String
  displayName: String
  expression: String
  fieldType: SystemFieldType!
  fieldTypeAttributes: SystemFieldTypeAttributes
  id: ID!
  isList: Boolean!
  isMeta: Boolean!
  isRequired: Boolean!
  isSystem: Boolean!
  isUnique: Boolean
  name: String!
  origin: SystemSchemaOrigin!
  relation: SystemRelation
  schemaFeatures: SystemFieldSchemaFeatures!
  table: SystemTable!
}

"""Table Field Create Input"""
input SystemTableFieldCreateInput {
  computedMode: SystemComputedFieldMode
  defaultValue: String
  description: String
  displayName: String
  expression: String
  fieldType: SystemFieldType!
  fieldTypeAttributes: SystemFieldTypeAttributesInput
  force: Boolean
  initialValue: String
  isList: Boolean!
  isRequired: Boolean!
  isUnique: Boolean
  name: String!
  position: Int
  relation: SystemRelationCreateInput
  tableId: ID!
}

"""Table Field Delete Input"""
input SystemTableFieldDeleteInput {
  id: ID!
}

"""Table Field Position Update Input"""
input SystemTableFieldPositionUpdateInput {
  id: ID!
  newPosition: Int!
}

"""Table Field Update Input"""
input SystemTableFieldUpdateInput {
  computedMode: SystemComputedFieldMode
  defaultValue: String
  description: String
  displayName: String
  expression: String
  fieldType: SystemFieldType
  fieldTypeAttributes: SystemFieldTypeAttributesInput
  force: Boolean
  id: ID!
  initialValue: String
  isList: Boolean
  isRequired: Boolean
  isUnique: Boolean
  name: String
  position: Int
  relation: SystemRelationUpdateInput
}

"""Table Index"""
type SystemTableIndex {
  columns: [SystemTableIndexColumn!]
  id: ID!
  isSystem: Boolean!
  name: String
  table: SystemTable!
  type: String!
}

"""Table Index Column"""
type SystemTableIndexColumn {
  name: String!
}

"""Table Index Column Input"""
input SystemTableIndexColumnInput {
  name: String!
}

"""Table List Application Filter"""
input SystemTableListApplicationFilter {
  id: String
  name: String
}

"""Table List Filter"""
input SystemTableListFilter {
  applications: [SystemTableListApplicationFilter]
  onlyUserTables: Boolean
  tableNames: [String]
}

"""Table List Response"""
type SystemTableListResponse {
  count: Int
  items: [SystemTable]
}

"""Table Schema Create Features"""
type SystemTableSchemaCreateFeatures {
  DATE: Boolean!
  FILE: Boolean!
  GEO: Boolean!
  ID: Boolean!
  JSON: Boolean!
  MISSING_RELATION: Boolean!
  NUMBER: Boolean!
  ONE_WAY_RELATION: Boolean!
  RELATION: Boolean!
  SMART: Boolean!
  SWITCH: Boolean!
  TEXT: Boolean!
  UUID: Boolean!
}

"""Table Schema Features"""
type SystemTableSchemaFeatures {
  computedFields: Boolean!
  create: SystemTableSchemaCreateFeatures!
  update: SystemTableSchemaMetaFieldFeatures
}

"""Table Schema Meta Field Features"""
type SystemTableSchemaMetaFieldFeatures {
  displayName: Boolean!
  name: Boolean!
}

"""Table Update Input"""
input SystemTableUpdateInput {
  description: String
  displayName: String
  id: ID!
  name: String
}

"""Team Invitation Details"""
type SystemTeamInvitationDetails {
  accepted: Boolean
  acceptedOn: DateTime
  apiHost: String
  email: String
  firstName: String
  id: String
  invitedBy: SystemInvitedByName
  isRegistered: Boolean
  lastName: String
  resentOn: DateTime
}

"""Text Field Attributes"""
type SystemTextFieldTypeAttributes {
  fieldSize: Int
  format: String!
}

"""Text Type Format Enum"""
enum SystemTextTypeFormatEnum {
  EIN
  EMAIL
  HTML
  MARKDOWN
  NAME
  UNFORMATTED
}

"""UUID Field Attributes"""
type SystemUUIDFieldTypeAttributes {
  fieldSize: Int
}

type SystemUserBillingConfigurationResponse {
  availablePlans: [SystemBillingPlanBaseInfo!]!
  isCancelSubscriptionAvailable: Boolean! @deprecated(reason: "Flag is deprecated")
  isFreePlanAvailable: Boolean! @deprecated(reason: "Flag is deprecated")
}

"""User Invitation Details"""
type SystemUserInvitationDetails {
  accepted: Boolean
  acceptedOn: DateTime
  apiHost: String
  email: String
  firstName: String
  id: String
  invitedBy: SystemInvitedByName
  isRegistered: Boolean
  lastName: String
  resentOn: DateTime
}

"""User Invitation List"""
type SystemUserInvitationList {
  count: Int
  items: [SystemUserInvitationDetails]
}

"""User Type"""
enum SystemUserType {
  Agency
  Corporation
  MyOwn
  Team
}

"""View Attributes"""
type SystemViewAttributes {
  query: String
}

"""View Create Input"""
input SystemViewCreateInput {
  description: String
  displayName: String
  name: String!
  query: String!
}

"""Dry Run Response for previewing SQL Views"""
type SystemViewDryRunOutput {
  count: Int
  items: JSON
  timeMs: Int
}

"""View Update Input"""
input SystemViewUpdateInput {
  description: String
  displayName: String
  id: ID!
  name: String
  query: String
}

"""WorkspaceCreateMutationInput"""
input SystemWorkspaceCreateMutationInput {
  authType: String
  description: String
  image: GraphQLCreateFileItemInput
  kind: SystemWorkspaceKind
  name: String!
  organizationId: ID
  profileId: String
  projectId: ID
}

type SystemWorkspaceCreateResponse {
  description: String
  id: ID
  kind: String
  name: String
}

"""WorkspaceDeleteMutationInput"""
input SystemWorkspaceDeleteMutationInput {
  workspaceId: ID!
}

type SystemWorkspaceImage {
  downloadUrl: String
  id: String
}

type SystemWorkspaceItem {
  apiHost: String
  createdAt: DateTime
  description: String
  id: ID!
  image: SystemWorkspaceImage
  is8BaseAuthEnabled: Boolean
  isCiCdEnabled: Boolean
  isOwner: Boolean!
  kind: String
  lastAccess: DateTime
  lastDeployABInfo: SystemDeploymentABItemResponse
  name: String!
  nextPlan: SystemBillingNextPlanResponse
  organization: SystemOrganizationBaseItem
  owner: SystemMemberAccountInfo
  plan: SystemBillingCurrentPlanResponse
  project: SystemProjectItemWS
  region: String
  summaryABInfo: SystemFrontendUtilizationABResponse
  teamMemberCount: Int
  webSocket: String
}

"""Workspace Kind"""
enum SystemWorkspaceKind {
  frontend
  general
}

"""SystemWorkspaceListResponse output"""
type SystemWorkspaceListResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [SystemWorkspaceItem!]!
}

enum SystemWorkspaceStatus {
  active
  blocked
  canceled
  canceling
  pending
  suspended
}

"""WorkspaceUpdateMutationInput"""
input SystemWorkspaceUpdateMutationInput {
  description: String
  id: ID!
  image: GraphQLCreateFileItemInput
  name: String
}

type SystemWorkspaceUpdateResponse {
  description: String
  id: ID
  image: GraphQLFileItemResponse
  name: String
}

"""Table"""
type Table {
  application: Application
  attributes: TableAttributes
  dataFeatures: TableDataFeatures!
  description: String
  displayName: String
  fields: [TableField!]
  fieldsForIndexing: [TableField]
  id: ID!
  indexes: [TableIndex!]
  isSystem: Boolean!
  name: String!
  origin: SchemaOrigin!
  schemaFeatures: TableSchemaFeatures!
}

"""Table Attributes"""
union TableAttributes = ViewAttributes

"""Table Create Input"""
input TableCreateInput {
  applicationId: String
  description: String
  displayName: String
  name: String!
}

"""Table Data Features"""
type TableDataFeatures {
  create: Boolean!
  delete: Boolean!
  update: Boolean!
}

"""Table Delete Input"""
input TableDeleteInput {
  id: ID!
}

"""TableField"""
type TableField {
  computedMode: ComputedFieldMode
  dataFeatures: FieldDataFeatures!
  defaultValue: String
  description: String
  displayName: String
  expression: String
  fieldType: FieldType!
  fieldTypeAttributes: FieldTypeAttributes
  id: ID!
  isList: Boolean!
  isMeta: Boolean!
  isRequired: Boolean!
  isSystem: Boolean!
  isUnique: Boolean
  name: String!
  origin: SchemaOrigin!
  relation: Relation
  schemaFeatures: FieldSchemaFeatures!
  table: Table!
}

"""Table Field Create Input"""
input TableFieldCreateInput {
  computedMode: ComputedFieldMode
  defaultValue: String
  description: String
  displayName: String
  expression: String
  fieldType: FieldType!
  fieldTypeAttributes: FieldTypeAttributesInput
  force: Boolean
  initialValue: String
  isList: Boolean!
  isRequired: Boolean!
  isUnique: Boolean
  name: String!
  position: Int
  relation: RelationCreateInput
  tableId: ID!
}

"""Table Field Delete Input"""
input TableFieldDeleteInput {
  id: ID!
}

"""Table Field Position Update Input"""
input TableFieldPositionUpdateInput {
  id: ID!
  newPosition: Int!
}

"""Table Field Update Input"""
input TableFieldUpdateInput {
  computedMode: ComputedFieldMode
  defaultValue: String
  description: String
  displayName: String
  expression: String
  fieldType: FieldType
  fieldTypeAttributes: FieldTypeAttributesInput
  force: Boolean
  id: ID!
  initialValue: String
  isList: Boolean
  isRequired: Boolean
  isUnique: Boolean
  name: String
  position: Int
  relation: RelationUpdateInput
}

"""Table Index"""
type TableIndex {
  columns: [TableIndexColumn!]
  id: ID!
  isSystem: Boolean!
  name: String
  table: Table!
  type: String!
}

"""Table Index Column"""
type TableIndexColumn {
  name: String!
}

"""Table Index Column Input"""
input TableIndexColumnInput {
  name: String!
}

enum TableIndexType {
  INDEX
  UNIQUE
}

"""Table List Application Filter"""
input TableListApplicationFilter {
  id: String
  name: String
}

"""Table List Filter"""
input TableListFilter {
  applications: [TableListApplicationFilter]
  onlyUserTables: Boolean
  tableNames: [String]
}

"""Table List Response"""
type TableListResponse {
  count: Int
  items: [Table]
}

"""Table Schema Create Features"""
type TableSchemaCreateFeatures {
  DATE: Boolean!
  FILE: Boolean!
  GEO: Boolean!
  ID: Boolean!
  JSON: Boolean!
  MISSING_RELATION: Boolean!
  NUMBER: Boolean!
  ONE_WAY_RELATION: Boolean!
  RELATION: Boolean!
  SMART: Boolean!
  SWITCH: Boolean!
  TEXT: Boolean!
  UUID: Boolean!
}

"""Table Schema Features"""
type TableSchemaFeatures {
  computedFields: Boolean!
  create: TableSchemaCreateFeatures!
  update: TableSchemaMetaFieldFeatures
}

"""Table Schema Meta Field Features"""
type TableSchemaMetaFieldFeatures {
  displayName: Boolean!
  name: Boolean!
}

"""Table Update Input"""
input TableUpdateInput {
  description: String
  displayName: String
  id: ID!
  name: String
}

"""Text Field Attributes"""
type TextFieldTypeAttributes {
  fieldSize: Int
  format: String!
}

"""Text Type Format Enum"""
enum TextTypeFormatEnum {
  EIN
  EMAIL
  HTML
  MARKDOWN
  NAME
  UNFORMATTED
}

"""
A time string at UTC, such as `16:15:30Z`, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
"""
scalar Time

input TrimFunctionArguments {
  mode: StringTrimMode
  str: String!
}

"""UUID Field Attributes"""
type UUIDFieldTypeAttributes {
  fieldSize: Int
}

input UpdateByFilterBooleanSwitchInput {
  invert: Boolean
  set: Boolean
}

input UpdateByFilterJsonInput {
  set: JSON
}

input UpdateByFilterListStringInput {
  insert: UpdateByFilterListStringInsertOperationInput
  push: [String]
  remove: [Int]
  removeValue: String
  set: [String]
  swap: [Int]
  unshift: [String]
}

input UpdateByFilterListStringInsertOperationInput {
  start: Int!
  values: [String!]!
}

input UpdateByFilterStringInput {
  postfix: String
  prefix: String
  set: String
}

input UpdateByFilterStringSwitchInput {
  set: String
}

"""UpdatedFieldsFilter"""
input UpdatedFieldsFilter {
  contains: [String]
  every: [String]
}

type UploadcareSignInfoResponse {
  expire: String!
  publicKey: String!
  signature: String!
}

type User {
  _description: String
  avatar: File
  createdAt: DateTime
  createdBy: User
  deletedAt: Int
  email: String
  firstName: String
  generatedText(after: String, before: String, filter: ContentFilter, first: Int, groupBy: ContentGroupBy, last: Int, orderBy: [ContentOrderBy], skip: Int, sort: [ContentSort!]): ContentListResponse
  id: ID
  is8base: Boolean
  lastName: String
  openApiKey: String
  origin: String
  permissions(filter: PermissionInputFilter): UserPermissionList
  promts: Prompt
  roles(after: String, before: String, filter: RoleFilter, first: Int, groupBy: RoleGroupBy, last: Int, orderBy: [RoleOrderBy], skip: Int, sort: [RoleSort!]): RoleListResponse
  status: String
  timezone: String
  updatedAt: DateTime
}

type UserBillingConfigurationResponse {
  availablePlans: [BillingPlanBaseInfo!]!
  isCancelSubscriptionAvailable: Boolean! @deprecated(reason: "Flag is deprecated")
  isFreePlanAvailable: Boolean! @deprecated(reason: "Flag is deprecated")
}

"""Users create input"""
input UserCreateInput {
  avatar: UsersAvatarRelationInput
  email: String!
  firstName: String
  generatedText: UsersGeneratedTextRelationInput
  lastName: String
  openApiKey: String
  promts: UsersPromtsRelationInput
  roles: UsersRolesRelationInput
  status: String = "inactive"
  timezone: String
}

"""Users create many input"""
input UserCreateManyInput {
  avatar: UsersAvatarManyRelationInput
  email: String!
  firstName: String
  generatedText: UsersGeneratedTextManyRelationInput
  lastName: String
  openApiKey: String
  promts: UsersPromtsManyRelationInput
  roles: UsersRolesManyRelationInput
  status: String = "inactive"
  timezone: String
}

"""Users delete input"""
input UserDeleteInput {
  force: Boolean
  id: ID
}

"""UserFieldsPermissions create input"""
input UserFieldsPermissions {
  createdAt: Boolean
  email: Boolean
  firstName: Boolean
  is8base: Boolean
  lastName: Boolean
  openApiKey: Boolean
  origin: Boolean
  status: Boolean
  timezone: Boolean
  updatedAt: Boolean
}

input UserFilter {
  AND: [UserFilter!]
  OR: [UserFilter!]
  _fullText: String
  avatar: FileFilter
  createdAt: DateTimePredicate
  createdBy: UserFilter
  deletedAt: IntPredicate
  email: StringPredicate
  firstName: StringPredicate
  generatedText: ContentRelationFilter
  id: IDPredicate
  is8base: BoolPredicate
  is_self: Boolean
  lastName: StringPredicate
  not_self: Boolean
  openApiKey: StringPredicate
  origin: StringPredicate
  promts: PromptFilter
  roles: RoleRelationFilter
  status: StringPredicate
  timezone: StringPredicate
  updatedAt: DateTimePredicate
}

input UserGroupBy {
  first: Int
  having: Having
  last: Int
  query: UserGroupByQuery!
  skip: Int
  sort: [GroupBySort!]
}

input UserGroupByQuery {
  _group: [GroupIdentifiersGroupByField!]
  avatar: FileGroupByQuery
  createdAt: [GroupByField!]
  createdBy: UserGroupByQuery
  email: [GroupByField!]
  firstName: [GroupByField!]
  generatedText: ContentGroupByQuery
  id: [GroupByField!]
  is8base: [GroupByField!]
  lastName: [GroupByField!]
  openApiKey: [GroupByField!]
  origin: [GroupByField!]
  promts: PromptGroupByQuery
  roles: RoleGroupByQuery
  status: [GroupByField!]
  timezone: [GroupByField!]
  updatedAt: [GroupByField!]
}

"""User Invitation Details"""
type UserInvitationDetails {
  accepted: Boolean
  acceptedOn: DateTime
  apiHost: String
  email: String
  firstName: String
  id: String
  invitedBy: InvitedByName
  isRegistered: Boolean
  lastName: String
  resentOn: DateTime
}

"""User Invitation List"""
type UserInvitationList {
  count: Int
  items: [UserInvitationDetails]
}

input UserKeyFilter {
  email: String
  id: ID
  openApiKey: String
}

"""UserListResponse output"""
type UserListResponse {
  """List items count"""
  count: Int!

  """Aggregated items"""
  groups: [GroupByResponse!]!

  """List items"""
  items: [User!]!
}

"""UserLoginInput"""
input UserLoginInput {
  authProfileId: ID
  email: String!
  fromInvitation: String
  password: String!
}

"""UserManyResponse output"""
type UserManyResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [User!]!
}

"""No longer supported. Use `sort` instead."""
enum UserOrderBy {
  createdAt_ASC
  createdAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  email_ASC
  email_DESC
  firstName_ASC
  firstName_DESC
  id_ASC
  id_DESC
  is8base_ASC
  is8base_DESC
  isOwner_ASC
  isOwner_DESC
  lastName_ASC
  lastName_DESC
  openApiKey_ASC
  openApiKey_DESC
  origin_ASC
  origin_DESC
  status_ASC
  status_DESC
  timezone_ASC
  timezone_DESC
  updatedAt_ASC
  updatedAt_DESC
}

"""Users subscription payload"""
type UserPayload {
  mutation: MutationType!
  node: User
  previousValues: User
  updatedFields: [String]
}

"""User Permission"""
type UserPermission {
  permission: JSON
  resource: String
  resourceType: String
}

"""User Permission List"""
type UserPermissionList {
  count: Int!
  items: [UserPermission!]
}

input UserRelationFilter {
  every: UserFilter
  none: UserFilter
  some: UserFilter
}

input UserSort {
  avatar: FileSort
  createdAt: SortOrder
  createdBy: UserSort
  deletedAt: SortOrder
  email: SortOrder
  firstName: SortOrder
  id: SortOrder
  is8base: SortOrder
  lastName: SortOrder
  openApiKey: SortOrder
  origin: SortOrder
  promts: PromptSort
  status: SortOrder
  timezone: SortOrder
  updatedAt: SortOrder
}

"""Users subscription filter"""
input UserSubscriptionFilter {
  mutation_in: [MutationType]
  node: UserFilter
  updatedFields: UpdatedFieldsFilter
}

"""Users update input"""
input UserUpdateByFilterInput {
  email: [UpdateByFilterStringInput]
  firstName: [UpdateByFilterStringInput]
  is8base: [UpdateByFilterBooleanSwitchInput]
  isOwner: [UpdateByFilterBooleanSwitchInput]
  lastName: [UpdateByFilterStringInput]
  openApiKey: [UpdateByFilterStringInput]
  origin: [UpdateByFilterStringSwitchInput]
  status: [UpdateByFilterStringSwitchInput]
  timezone: [UpdateByFilterStringInput]
}

"""Users update input"""
input UserUpdateInput {
  avatar: UsersAvatarUpdateRelationInput
  email: String
  firstName: String
  generatedText: UsersGeneratedTextUpdateRelationInput
  id: ID
  lastName: String
  openApiKey: String
  promts: UsersPromtsUpdateRelationInput
  roles: UsersRolesUpdateRelationInput
  status: String
  timezone: String
}

"""Content create input from user"""
input User_ContentCreateInput {
  contentText: ContentContentTextRelationInput
  title: String = "Untitled"
  user: ContentUserRelationInput
}

"""Content update input from user"""
input User_ContentUpdateInput {
  data: ContentUpdateInput!
  filter: ContentKeyFilter
}

input User_PermissionFilter {
  AND: [User_PermissionFilter!]
  OR: [User_PermissionFilter!]
  _fullText: String
  avatar: File_PermissionFilter
  createdAt: DateTimePredicate
  createdBy: User_PermissionFilter
  deletedAt: IntPredicate
  email: StringPredicate
  firstName: StringPredicate
  generatedText: Content_PermissionRelationFilter
  id: IDPredicate
  is8base: BoolPredicate
  is_self: Boolean
  lastName: StringPredicate
  not_self: Boolean
  openApiKey: StringPredicate
  origin: StringPredicate
  promts: Prompt_PermissionFilter
  roles: Role_PermissionRelationFilter
  status: StringPredicate
  timezone: StringPredicate
  updatedAt: DateTimePredicate
}

input User_PermissionRelationFilter {
  every: User_PermissionFilter
  none: User_PermissionFilter
  some: User_PermissionFilter
}

"""Prompts create input from user"""
input User_PromptCreateInput {
  prompt: String = "New prompt"
  user: PromptsUserRelationInput
}

"""Prompts update input from user"""
input User_PromptUpdateInput {
  prompt: String
  user: PromptsUserUpdateRelationInput
}

"""Users relation input"""
input UsersAvatarManyRelationInput {
  connect: FileKeyFilter
}

"""Users relation input"""
input UsersAvatarRelationInput {
  connect: FileKeyFilter
  create: Users_avatar_FileCreateInput
}

"""Users relation input"""
input UsersAvatarUpdateRelationInput {
  connect: FileKeyFilter
  create: Users_avatar_FileCreateInput
  disconnect: FileKeyFilter
  reconnect: FileKeyFilter
  update: Users_avatar_FileUpdateInput
}

"""Users relation input"""
input UsersGeneratedTextManyRelationInput {
  connect: [ContentKeyFilter!]
}

"""Users relation input"""
input UsersGeneratedTextRelationInput {
  connect: [ContentKeyFilter!]
  create: [User_ContentCreateInput]
}

"""Users relation input"""
input UsersGeneratedTextUpdateRelationInput {
  connect: [ContentKeyFilter!]
  create: [User_ContentCreateInput]
  disconnect: [ContentKeyFilter!]
  reconnect: [ContentKeyFilter!]
  update: [User_ContentUpdateInput]
}

"""Users relation input"""
input UsersPromtsManyRelationInput {
  connect: PromptKeyFilter
}

"""Users relation input"""
input UsersPromtsRelationInput {
  connect: PromptKeyFilter
  create: User_PromptCreateInput
}

"""Users relation input"""
input UsersPromtsUpdateRelationInput {
  connect: PromptKeyFilter
  create: User_PromptCreateInput
  disconnect: PromptKeyFilter
  reconnect: PromptKeyFilter
  update: User_PromptUpdateInput
}

"""Users relation input"""
input UsersRolesManyRelationInput {
  connect: [RoleKeyFilter!]
}

"""Users relation input"""
input UsersRolesRelationInput {
  connect: [RoleKeyFilter!]
  create: [Users_RoleCreateInput]
}

"""Users relation input"""
input UsersRolesUpdateRelationInput {
  connect: [RoleKeyFilter!]
  create: [Users_RoleCreateInput]
  disconnect: [RoleKeyFilter!]
  reconnect: [RoleKeyFilter!]
  update: [Users_RoleUpdateInput]
}

"""Roles create input from users"""
input Users_RoleCreateInput {
  apiTokens: RolesApiTokensRelationInput
  authenticationProfiles: RolesAuthenticationProfilesRelationInput
  description: String
  name: String!
  permissions: PermissionsInput
  users: RolesUsersRelationInput
}

"""Roles update input from users"""
input Users_RoleUpdateInput {
  data: RoleUpdateInput!
  filter: RoleKeyFilter
}

"""Files create input from users_avatar"""
input Users_avatar_FileCreateInput {
  fileId: String
  filename: String
  meta: JSON
  mods: JSON
  public: Boolean = false
  users_avatar: FilesUsers_avatarRelationInput
}

"""Files update input from users_avatar"""
input Users_avatar_FileUpdateInput {
  fileId: String
  filename: String
  meta: JSON
  mods: JSON
  public: Boolean
  users_avatar: FilesUsers_avatarUpdateRelationInput
}

"""VerificationEmailResendInput"""
input VerificationEmailResendInput {
  email: String!
}

"""View Attributes"""
type ViewAttributes {
  query: String
}

"""View Create Input"""
input ViewCreateInput {
  description: String
  displayName: String
  name: String!
  query: String!
}

"""Dry Run Response for previewing SQL Views"""
type ViewDryRunOutput {
  count: Int
  items: JSON
  timeMs: Int
}

"""View Update Input"""
input ViewUpdateInput {
  description: String
  displayName: String
  id: ID!
  name: String
  query: String
}

"""WorkspaceCreateMutationInput"""
input WorkspaceCreateMutationInput {
  authType: String
  description: String
  image: GraphQLCreateFileItemInput
  kind: WorkspaceKind
  name: String!
  organizationId: ID
  profileId: String
  projectId: ID
}

type WorkspaceCreateResponse {
  description: String
  id: ID
  kind: String
  name: String
}

"""WorkspaceDeleteMutationInput"""
input WorkspaceDeleteMutationInput {
  workspaceId: ID!
}

type WorkspaceImage {
  downloadUrl: String
  id: String
}

"""LoginResponseWorkspace name and id"""
type WorkspaceInfo {
  name: String
  workspace: ID
}

type WorkspaceItem {
  apiHost: String
  createdAt: DateTime
  description: String
  id: ID!
  image: WorkspaceImage
  is8BaseAuthEnabled: Boolean
  isCiCdEnabled: Boolean
  isOwner: Boolean!
  kind: String
  lastAccess: DateTime
  lastDeployABInfo: DeploymentABItemResponse
  name: String!
  nextPlan: BillingNextPlanResponse
  organization: SystemOrganizationBaseItem
  owner: SystemMemberAccountInfo
  plan: BillingCurrentPlanResponse
  project: ProjectItemWS
  region: String
  summaryABInfo: FrontendUtilizationABResponse
  teamMemberCount: Int
  webSocket: String
}

"""Workspace Kind"""
enum WorkspaceKind {
  frontend
  general
}

"""WorkspaceListResponse output"""
type WorkspaceListResponse {
  """List items count"""
  count: Int!

  """List items"""
  items: [WorkspaceItem!]!
}

enum WorkspaceStatus {
  active
  blocked
  canceled
  canceling
  pending
  suspended
}

"""WorkspaceUpdateMutationInput"""
input WorkspaceUpdateMutationInput {
  description: String
  id: ID!
  image: GraphQLCreateFileItemInput
  name: String
}

type WorkspaceUpdateResponse {
  description: String
  id: ID
  image: GraphQLFileItemResponse
  name: String
}

type isAllowedCallbackURLQueryResponse {
  isEnabled: Boolean!
}