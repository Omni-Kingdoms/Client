// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ArbitrumTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  A_BigDecimal: any;
  BigInt: any;
  A_Bytes: any;
  A_Int8: any;
};

export type A_AdvancedCraft = {
  id: Scalars['ID'];
  slot: Scalars['String'];
  value: Scalars['Int'];
  stat: Scalars['String'];
  treasure: A_TreasureInStore;
  oldName: Scalars['String'];
  newName: Scalars['String'];
  uri: Scalars['String'];
};

export type A_AdvancedCraft_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  slot?: InputMaybe<Scalars['String']>;
  slot_not?: InputMaybe<Scalars['String']>;
  slot_gt?: InputMaybe<Scalars['String']>;
  slot_lt?: InputMaybe<Scalars['String']>;
  slot_gte?: InputMaybe<Scalars['String']>;
  slot_lte?: InputMaybe<Scalars['String']>;
  slot_in?: InputMaybe<Array<Scalars['String']>>;
  slot_not_in?: InputMaybe<Array<Scalars['String']>>;
  slot_contains?: InputMaybe<Scalars['String']>;
  slot_contains_nocase?: InputMaybe<Scalars['String']>;
  slot_not_contains?: InputMaybe<Scalars['String']>;
  slot_not_contains_nocase?: InputMaybe<Scalars['String']>;
  slot_starts_with?: InputMaybe<Scalars['String']>;
  slot_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slot_not_starts_with?: InputMaybe<Scalars['String']>;
  slot_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slot_ends_with?: InputMaybe<Scalars['String']>;
  slot_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slot_not_ends_with?: InputMaybe<Scalars['String']>;
  slot_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Int']>;
  value_not?: InputMaybe<Scalars['Int']>;
  value_gt?: InputMaybe<Scalars['Int']>;
  value_lt?: InputMaybe<Scalars['Int']>;
  value_gte?: InputMaybe<Scalars['Int']>;
  value_lte?: InputMaybe<Scalars['Int']>;
  value_in?: InputMaybe<Array<Scalars['Int']>>;
  value_not_in?: InputMaybe<Array<Scalars['Int']>>;
  stat?: InputMaybe<Scalars['String']>;
  stat_not?: InputMaybe<Scalars['String']>;
  stat_gt?: InputMaybe<Scalars['String']>;
  stat_lt?: InputMaybe<Scalars['String']>;
  stat_gte?: InputMaybe<Scalars['String']>;
  stat_lte?: InputMaybe<Scalars['String']>;
  stat_in?: InputMaybe<Array<Scalars['String']>>;
  stat_not_in?: InputMaybe<Array<Scalars['String']>>;
  stat_contains?: InputMaybe<Scalars['String']>;
  stat_contains_nocase?: InputMaybe<Scalars['String']>;
  stat_not_contains?: InputMaybe<Scalars['String']>;
  stat_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stat_starts_with?: InputMaybe<Scalars['String']>;
  stat_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stat_not_starts_with?: InputMaybe<Scalars['String']>;
  stat_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stat_ends_with?: InputMaybe<Scalars['String']>;
  stat_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stat_not_ends_with?: InputMaybe<Scalars['String']>;
  stat_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  treasure?: InputMaybe<Scalars['String']>;
  treasure_not?: InputMaybe<Scalars['String']>;
  treasure_gt?: InputMaybe<Scalars['String']>;
  treasure_lt?: InputMaybe<Scalars['String']>;
  treasure_gte?: InputMaybe<Scalars['String']>;
  treasure_lte?: InputMaybe<Scalars['String']>;
  treasure_in?: InputMaybe<Array<Scalars['String']>>;
  treasure_not_in?: InputMaybe<Array<Scalars['String']>>;
  treasure_contains?: InputMaybe<Scalars['String']>;
  treasure_contains_nocase?: InputMaybe<Scalars['String']>;
  treasure_not_contains?: InputMaybe<Scalars['String']>;
  treasure_not_contains_nocase?: InputMaybe<Scalars['String']>;
  treasure_starts_with?: InputMaybe<Scalars['String']>;
  treasure_starts_with_nocase?: InputMaybe<Scalars['String']>;
  treasure_not_starts_with?: InputMaybe<Scalars['String']>;
  treasure_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  treasure_ends_with?: InputMaybe<Scalars['String']>;
  treasure_ends_with_nocase?: InputMaybe<Scalars['String']>;
  treasure_not_ends_with?: InputMaybe<Scalars['String']>;
  treasure_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  treasure_?: InputMaybe<A_TreasureInStore_filter>;
  oldName?: InputMaybe<Scalars['String']>;
  oldName_not?: InputMaybe<Scalars['String']>;
  oldName_gt?: InputMaybe<Scalars['String']>;
  oldName_lt?: InputMaybe<Scalars['String']>;
  oldName_gte?: InputMaybe<Scalars['String']>;
  oldName_lte?: InputMaybe<Scalars['String']>;
  oldName_in?: InputMaybe<Array<Scalars['String']>>;
  oldName_not_in?: InputMaybe<Array<Scalars['String']>>;
  oldName_contains?: InputMaybe<Scalars['String']>;
  oldName_contains_nocase?: InputMaybe<Scalars['String']>;
  oldName_not_contains?: InputMaybe<Scalars['String']>;
  oldName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  oldName_starts_with?: InputMaybe<Scalars['String']>;
  oldName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oldName_not_starts_with?: InputMaybe<Scalars['String']>;
  oldName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oldName_ends_with?: InputMaybe<Scalars['String']>;
  oldName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oldName_not_ends_with?: InputMaybe<Scalars['String']>;
  oldName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newName?: InputMaybe<Scalars['String']>;
  newName_not?: InputMaybe<Scalars['String']>;
  newName_gt?: InputMaybe<Scalars['String']>;
  newName_lt?: InputMaybe<Scalars['String']>;
  newName_gte?: InputMaybe<Scalars['String']>;
  newName_lte?: InputMaybe<Scalars['String']>;
  newName_in?: InputMaybe<Array<Scalars['String']>>;
  newName_not_in?: InputMaybe<Array<Scalars['String']>>;
  newName_contains?: InputMaybe<Scalars['String']>;
  newName_contains_nocase?: InputMaybe<Scalars['String']>;
  newName_not_contains?: InputMaybe<Scalars['String']>;
  newName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  newName_starts_with?: InputMaybe<Scalars['String']>;
  newName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newName_not_starts_with?: InputMaybe<Scalars['String']>;
  newName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newName_ends_with?: InputMaybe<Scalars['String']>;
  newName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newName_not_ends_with?: InputMaybe<Scalars['String']>;
  newName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<A_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<A_AdvancedCraft_filter>>>;
  or?: InputMaybe<Array<InputMaybe<A_AdvancedCraft_filter>>>;
};

export type A_AdvancedCraft_orderBy =
  | 'id'
  | 'slot'
  | 'value'
  | 'stat'
  | 'treasure'
  | 'treasure__id'
  | 'treasure__rank'
  | 'treasure__name'
  | 'treasure__uri'
  | 'oldName'
  | 'newName'
  | 'uri';

export type A_Arena = {
  id: Scalars['ID'];
  name: Scalars['String'];
  uri: Scalars['String'];
  cost: Scalars['Int'];
  cooldown: Scalars['Int'];
  host?: Maybe<A_Player>;
  arenaResult: Array<A_ArenaResults>;
};


export type A_ArenaarenaResultArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_ArenaResults_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_ArenaResults_filter>;
};

export type A_ArenaResults = {
  id: Scalars['ID'];
  player: A_Player;
  arena: A_Arena;
  wins: Scalars['Int'];
  losses: Scalars['Int'];
};

export type A_ArenaResults_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  player?: InputMaybe<Scalars['String']>;
  player_not?: InputMaybe<Scalars['String']>;
  player_gt?: InputMaybe<Scalars['String']>;
  player_lt?: InputMaybe<Scalars['String']>;
  player_gte?: InputMaybe<Scalars['String']>;
  player_lte?: InputMaybe<Scalars['String']>;
  player_in?: InputMaybe<Array<Scalars['String']>>;
  player_not_in?: InputMaybe<Array<Scalars['String']>>;
  player_contains?: InputMaybe<Scalars['String']>;
  player_contains_nocase?: InputMaybe<Scalars['String']>;
  player_not_contains?: InputMaybe<Scalars['String']>;
  player_not_contains_nocase?: InputMaybe<Scalars['String']>;
  player_starts_with?: InputMaybe<Scalars['String']>;
  player_starts_with_nocase?: InputMaybe<Scalars['String']>;
  player_not_starts_with?: InputMaybe<Scalars['String']>;
  player_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  player_ends_with?: InputMaybe<Scalars['String']>;
  player_ends_with_nocase?: InputMaybe<Scalars['String']>;
  player_not_ends_with?: InputMaybe<Scalars['String']>;
  player_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  player_?: InputMaybe<A_Player_filter>;
  arena?: InputMaybe<Scalars['String']>;
  arena_not?: InputMaybe<Scalars['String']>;
  arena_gt?: InputMaybe<Scalars['String']>;
  arena_lt?: InputMaybe<Scalars['String']>;
  arena_gte?: InputMaybe<Scalars['String']>;
  arena_lte?: InputMaybe<Scalars['String']>;
  arena_in?: InputMaybe<Array<Scalars['String']>>;
  arena_not_in?: InputMaybe<Array<Scalars['String']>>;
  arena_contains?: InputMaybe<Scalars['String']>;
  arena_contains_nocase?: InputMaybe<Scalars['String']>;
  arena_not_contains?: InputMaybe<Scalars['String']>;
  arena_not_contains_nocase?: InputMaybe<Scalars['String']>;
  arena_starts_with?: InputMaybe<Scalars['String']>;
  arena_starts_with_nocase?: InputMaybe<Scalars['String']>;
  arena_not_starts_with?: InputMaybe<Scalars['String']>;
  arena_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  arena_ends_with?: InputMaybe<Scalars['String']>;
  arena_ends_with_nocase?: InputMaybe<Scalars['String']>;
  arena_not_ends_with?: InputMaybe<Scalars['String']>;
  arena_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  arena_?: InputMaybe<A_Arena_filter>;
  wins?: InputMaybe<Scalars['Int']>;
  wins_not?: InputMaybe<Scalars['Int']>;
  wins_gt?: InputMaybe<Scalars['Int']>;
  wins_lt?: InputMaybe<Scalars['Int']>;
  wins_gte?: InputMaybe<Scalars['Int']>;
  wins_lte?: InputMaybe<Scalars['Int']>;
  wins_in?: InputMaybe<Array<Scalars['Int']>>;
  wins_not_in?: InputMaybe<Array<Scalars['Int']>>;
  losses?: InputMaybe<Scalars['Int']>;
  losses_not?: InputMaybe<Scalars['Int']>;
  losses_gt?: InputMaybe<Scalars['Int']>;
  losses_lt?: InputMaybe<Scalars['Int']>;
  losses_gte?: InputMaybe<Scalars['Int']>;
  losses_lte?: InputMaybe<Scalars['Int']>;
  losses_in?: InputMaybe<Array<Scalars['Int']>>;
  losses_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<A_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<A_ArenaResults_filter>>>;
  or?: InputMaybe<Array<InputMaybe<A_ArenaResults_filter>>>;
};

export type A_ArenaResults_orderBy =
  | 'id'
  | 'player'
  | 'player__id'
  | 'player__Player_id'
  | 'player__name'
  | 'player__classes'
  | 'player__stats'
  | 'player__exp'
  | 'player__level'
  | 'player__strength'
  | 'player__magic'
  | 'player__agility'
  | 'player__defense'
  | 'player__currentHealth'
  | 'player__maxHealth'
  | 'player__currentMana'
  | 'player__maxMana'
  | 'player__totalWins'
  | 'player__totalLosses'
  | 'arena'
  | 'arena__id'
  | 'arena__name'
  | 'arena__uri'
  | 'arena__cost'
  | 'arena__cooldown'
  | 'wins'
  | 'losses';

export type A_Arena_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['Int']>;
  cost_not?: InputMaybe<Scalars['Int']>;
  cost_gt?: InputMaybe<Scalars['Int']>;
  cost_lt?: InputMaybe<Scalars['Int']>;
  cost_gte?: InputMaybe<Scalars['Int']>;
  cost_lte?: InputMaybe<Scalars['Int']>;
  cost_in?: InputMaybe<Array<Scalars['Int']>>;
  cost_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cooldown?: InputMaybe<Scalars['Int']>;
  cooldown_not?: InputMaybe<Scalars['Int']>;
  cooldown_gt?: InputMaybe<Scalars['Int']>;
  cooldown_lt?: InputMaybe<Scalars['Int']>;
  cooldown_gte?: InputMaybe<Scalars['Int']>;
  cooldown_lte?: InputMaybe<Scalars['Int']>;
  cooldown_in?: InputMaybe<Array<Scalars['Int']>>;
  cooldown_not_in?: InputMaybe<Array<Scalars['Int']>>;
  host?: InputMaybe<Scalars['String']>;
  host_not?: InputMaybe<Scalars['String']>;
  host_gt?: InputMaybe<Scalars['String']>;
  host_lt?: InputMaybe<Scalars['String']>;
  host_gte?: InputMaybe<Scalars['String']>;
  host_lte?: InputMaybe<Scalars['String']>;
  host_in?: InputMaybe<Array<Scalars['String']>>;
  host_not_in?: InputMaybe<Array<Scalars['String']>>;
  host_contains?: InputMaybe<Scalars['String']>;
  host_contains_nocase?: InputMaybe<Scalars['String']>;
  host_not_contains?: InputMaybe<Scalars['String']>;
  host_not_contains_nocase?: InputMaybe<Scalars['String']>;
  host_starts_with?: InputMaybe<Scalars['String']>;
  host_starts_with_nocase?: InputMaybe<Scalars['String']>;
  host_not_starts_with?: InputMaybe<Scalars['String']>;
  host_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  host_ends_with?: InputMaybe<Scalars['String']>;
  host_ends_with_nocase?: InputMaybe<Scalars['String']>;
  host_not_ends_with?: InputMaybe<Scalars['String']>;
  host_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  host_?: InputMaybe<A_Player_filter>;
  arenaResult_?: InputMaybe<A_ArenaResults_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<A_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<A_Arena_filter>>>;
  or?: InputMaybe<Array<InputMaybe<A_Arena_filter>>>;
};

export type A_Arena_orderBy =
  | 'id'
  | 'name'
  | 'uri'
  | 'cost'
  | 'cooldown'
  | 'host'
  | 'host__id'
  | 'host__Player_id'
  | 'host__name'
  | 'host__classes'
  | 'host__stats'
  | 'host__exp'
  | 'host__level'
  | 'host__strength'
  | 'host__magic'
  | 'host__agility'
  | 'host__defense'
  | 'host__currentHealth'
  | 'host__maxHealth'
  | 'host__currentMana'
  | 'host__maxMana'
  | 'host__totalWins'
  | 'host__totalLosses'
  | 'arenaResult';

export type A_BasicCraft = {
  id: Scalars['ID'];
  slot: Scalars['String'];
  value: Scalars['Int'];
  cost: Scalars['Int'];
  oldName: Scalars['String'];
  newName: Scalars['String'];
  uri: Scalars['String'];
};

export type A_BasicCraft_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  slot?: InputMaybe<Scalars['String']>;
  slot_not?: InputMaybe<Scalars['String']>;
  slot_gt?: InputMaybe<Scalars['String']>;
  slot_lt?: InputMaybe<Scalars['String']>;
  slot_gte?: InputMaybe<Scalars['String']>;
  slot_lte?: InputMaybe<Scalars['String']>;
  slot_in?: InputMaybe<Array<Scalars['String']>>;
  slot_not_in?: InputMaybe<Array<Scalars['String']>>;
  slot_contains?: InputMaybe<Scalars['String']>;
  slot_contains_nocase?: InputMaybe<Scalars['String']>;
  slot_not_contains?: InputMaybe<Scalars['String']>;
  slot_not_contains_nocase?: InputMaybe<Scalars['String']>;
  slot_starts_with?: InputMaybe<Scalars['String']>;
  slot_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slot_not_starts_with?: InputMaybe<Scalars['String']>;
  slot_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slot_ends_with?: InputMaybe<Scalars['String']>;
  slot_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slot_not_ends_with?: InputMaybe<Scalars['String']>;
  slot_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Int']>;
  value_not?: InputMaybe<Scalars['Int']>;
  value_gt?: InputMaybe<Scalars['Int']>;
  value_lt?: InputMaybe<Scalars['Int']>;
  value_gte?: InputMaybe<Scalars['Int']>;
  value_lte?: InputMaybe<Scalars['Int']>;
  value_in?: InputMaybe<Array<Scalars['Int']>>;
  value_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cost?: InputMaybe<Scalars['Int']>;
  cost_not?: InputMaybe<Scalars['Int']>;
  cost_gt?: InputMaybe<Scalars['Int']>;
  cost_lt?: InputMaybe<Scalars['Int']>;
  cost_gte?: InputMaybe<Scalars['Int']>;
  cost_lte?: InputMaybe<Scalars['Int']>;
  cost_in?: InputMaybe<Array<Scalars['Int']>>;
  cost_not_in?: InputMaybe<Array<Scalars['Int']>>;
  oldName?: InputMaybe<Scalars['String']>;
  oldName_not?: InputMaybe<Scalars['String']>;
  oldName_gt?: InputMaybe<Scalars['String']>;
  oldName_lt?: InputMaybe<Scalars['String']>;
  oldName_gte?: InputMaybe<Scalars['String']>;
  oldName_lte?: InputMaybe<Scalars['String']>;
  oldName_in?: InputMaybe<Array<Scalars['String']>>;
  oldName_not_in?: InputMaybe<Array<Scalars['String']>>;
  oldName_contains?: InputMaybe<Scalars['String']>;
  oldName_contains_nocase?: InputMaybe<Scalars['String']>;
  oldName_not_contains?: InputMaybe<Scalars['String']>;
  oldName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  oldName_starts_with?: InputMaybe<Scalars['String']>;
  oldName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oldName_not_starts_with?: InputMaybe<Scalars['String']>;
  oldName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oldName_ends_with?: InputMaybe<Scalars['String']>;
  oldName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oldName_not_ends_with?: InputMaybe<Scalars['String']>;
  oldName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newName?: InputMaybe<Scalars['String']>;
  newName_not?: InputMaybe<Scalars['String']>;
  newName_gt?: InputMaybe<Scalars['String']>;
  newName_lt?: InputMaybe<Scalars['String']>;
  newName_gte?: InputMaybe<Scalars['String']>;
  newName_lte?: InputMaybe<Scalars['String']>;
  newName_in?: InputMaybe<Array<Scalars['String']>>;
  newName_not_in?: InputMaybe<Array<Scalars['String']>>;
  newName_contains?: InputMaybe<Scalars['String']>;
  newName_contains_nocase?: InputMaybe<Scalars['String']>;
  newName_not_contains?: InputMaybe<Scalars['String']>;
  newName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  newName_starts_with?: InputMaybe<Scalars['String']>;
  newName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newName_not_starts_with?: InputMaybe<Scalars['String']>;
  newName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newName_ends_with?: InputMaybe<Scalars['String']>;
  newName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newName_not_ends_with?: InputMaybe<Scalars['String']>;
  newName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<A_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<A_BasicCraft_filter>>>;
  or?: InputMaybe<Array<InputMaybe<A_BasicCraft_filter>>>;
};

export type A_BasicCraft_orderBy =
  | 'id'
  | 'slot'
  | 'value'
  | 'cost'
  | 'oldName'
  | 'newName'
  | 'uri';

export type A_BasicPotion = {
  id: Scalars['ID'];
  value: Scalars['Int'];
  cost: Scalars['Int'];
  type: Scalars['String'];
  name: Scalars['String'];
  uri: Scalars['String'];
  potionBalance: Array<A_BasicPotionBalance>;
};


export type A_BasicPotionpotionBalanceArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_BasicPotionBalance_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_BasicPotionBalance_filter>;
};

export type A_BasicPotionBalance = {
  id: Scalars['ID'];
  balance: Scalars['Int'];
  potion: A_BasicPotion;
  player: A_Player;
};

export type A_BasicPotionBalance_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  balance?: InputMaybe<Scalars['Int']>;
  balance_not?: InputMaybe<Scalars['Int']>;
  balance_gt?: InputMaybe<Scalars['Int']>;
  balance_lt?: InputMaybe<Scalars['Int']>;
  balance_gte?: InputMaybe<Scalars['Int']>;
  balance_lte?: InputMaybe<Scalars['Int']>;
  balance_in?: InputMaybe<Array<Scalars['Int']>>;
  balance_not_in?: InputMaybe<Array<Scalars['Int']>>;
  potion?: InputMaybe<Scalars['String']>;
  potion_not?: InputMaybe<Scalars['String']>;
  potion_gt?: InputMaybe<Scalars['String']>;
  potion_lt?: InputMaybe<Scalars['String']>;
  potion_gte?: InputMaybe<Scalars['String']>;
  potion_lte?: InputMaybe<Scalars['String']>;
  potion_in?: InputMaybe<Array<Scalars['String']>>;
  potion_not_in?: InputMaybe<Array<Scalars['String']>>;
  potion_contains?: InputMaybe<Scalars['String']>;
  potion_contains_nocase?: InputMaybe<Scalars['String']>;
  potion_not_contains?: InputMaybe<Scalars['String']>;
  potion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  potion_starts_with?: InputMaybe<Scalars['String']>;
  potion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  potion_not_starts_with?: InputMaybe<Scalars['String']>;
  potion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  potion_ends_with?: InputMaybe<Scalars['String']>;
  potion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  potion_not_ends_with?: InputMaybe<Scalars['String']>;
  potion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  potion_?: InputMaybe<A_BasicPotion_filter>;
  player?: InputMaybe<Scalars['String']>;
  player_not?: InputMaybe<Scalars['String']>;
  player_gt?: InputMaybe<Scalars['String']>;
  player_lt?: InputMaybe<Scalars['String']>;
  player_gte?: InputMaybe<Scalars['String']>;
  player_lte?: InputMaybe<Scalars['String']>;
  player_in?: InputMaybe<Array<Scalars['String']>>;
  player_not_in?: InputMaybe<Array<Scalars['String']>>;
  player_contains?: InputMaybe<Scalars['String']>;
  player_contains_nocase?: InputMaybe<Scalars['String']>;
  player_not_contains?: InputMaybe<Scalars['String']>;
  player_not_contains_nocase?: InputMaybe<Scalars['String']>;
  player_starts_with?: InputMaybe<Scalars['String']>;
  player_starts_with_nocase?: InputMaybe<Scalars['String']>;
  player_not_starts_with?: InputMaybe<Scalars['String']>;
  player_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  player_ends_with?: InputMaybe<Scalars['String']>;
  player_ends_with_nocase?: InputMaybe<Scalars['String']>;
  player_not_ends_with?: InputMaybe<Scalars['String']>;
  player_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  player_?: InputMaybe<A_Player_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<A_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<A_BasicPotionBalance_filter>>>;
  or?: InputMaybe<Array<InputMaybe<A_BasicPotionBalance_filter>>>;
};

export type A_BasicPotionBalance_orderBy =
  | 'id'
  | 'balance'
  | 'potion'
  | 'potion__id'
  | 'potion__value'
  | 'potion__cost'
  | 'potion__type'
  | 'potion__name'
  | 'potion__uri'
  | 'player'
  | 'player__id'
  | 'player__Player_id'
  | 'player__name'
  | 'player__classes'
  | 'player__stats'
  | 'player__exp'
  | 'player__level'
  | 'player__strength'
  | 'player__magic'
  | 'player__agility'
  | 'player__defense'
  | 'player__currentHealth'
  | 'player__maxHealth'
  | 'player__currentMana'
  | 'player__maxMana'
  | 'player__totalWins'
  | 'player__totalLosses';

export type A_BasicPotion_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  value?: InputMaybe<Scalars['Int']>;
  value_not?: InputMaybe<Scalars['Int']>;
  value_gt?: InputMaybe<Scalars['Int']>;
  value_lt?: InputMaybe<Scalars['Int']>;
  value_gte?: InputMaybe<Scalars['Int']>;
  value_lte?: InputMaybe<Scalars['Int']>;
  value_in?: InputMaybe<Array<Scalars['Int']>>;
  value_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cost?: InputMaybe<Scalars['Int']>;
  cost_not?: InputMaybe<Scalars['Int']>;
  cost_gt?: InputMaybe<Scalars['Int']>;
  cost_lt?: InputMaybe<Scalars['Int']>;
  cost_gte?: InputMaybe<Scalars['Int']>;
  cost_lte?: InputMaybe<Scalars['Int']>;
  cost_in?: InputMaybe<Array<Scalars['Int']>>;
  cost_not_in?: InputMaybe<Array<Scalars['Int']>>;
  type?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_nocase?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  potionBalance_?: InputMaybe<A_BasicPotionBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<A_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<A_BasicPotion_filter>>>;
  or?: InputMaybe<Array<InputMaybe<A_BasicPotion_filter>>>;
};

export type A_BasicPotion_orderBy =
  | 'id'
  | 'value'
  | 'cost'
  | 'type'
  | 'name'
  | 'uri'
  | 'potionBalance';

export type A_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type A_Block_height = {
  hash?: InputMaybe<Scalars['A_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type A_EquipCount = {
  id: Scalars['ID'];
  count: Scalars['Int'];
};

export type A_EquipCount_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  count?: InputMaybe<Scalars['Int']>;
  count_not?: InputMaybe<Scalars['Int']>;
  count_gt?: InputMaybe<Scalars['Int']>;
  count_lt?: InputMaybe<Scalars['Int']>;
  count_gte?: InputMaybe<Scalars['Int']>;
  count_lte?: InputMaybe<Scalars['Int']>;
  count_in?: InputMaybe<Array<Scalars['Int']>>;
  count_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<A_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<A_EquipCount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<A_EquipCount_filter>>>;
};

export type A_EquipCount_orderBy =
  | 'id'
  | 'count';

export type A_Equipment = {
  id: Scalars['ID'];
  slot: Scalars['String'];
  rank: Scalars['Int'];
  value: Scalars['Int'];
  stat: Scalars['String'];
  player: A_Player;
  name: Scalars['String'];
  uri: Scalars['String'];
  isEquipped: Scalars['Boolean'];
};

export type A_EquipmentInStore = {
  id: Scalars['ID'];
  slot: Scalars['String'];
  value: Scalars['Int'];
  stat: Scalars['String'];
  cost: Scalars['Int'];
  name: Scalars['String'];
  uri: Scalars['String'];
};

export type A_EquipmentInStore_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  slot?: InputMaybe<Scalars['String']>;
  slot_not?: InputMaybe<Scalars['String']>;
  slot_gt?: InputMaybe<Scalars['String']>;
  slot_lt?: InputMaybe<Scalars['String']>;
  slot_gte?: InputMaybe<Scalars['String']>;
  slot_lte?: InputMaybe<Scalars['String']>;
  slot_in?: InputMaybe<Array<Scalars['String']>>;
  slot_not_in?: InputMaybe<Array<Scalars['String']>>;
  slot_contains?: InputMaybe<Scalars['String']>;
  slot_contains_nocase?: InputMaybe<Scalars['String']>;
  slot_not_contains?: InputMaybe<Scalars['String']>;
  slot_not_contains_nocase?: InputMaybe<Scalars['String']>;
  slot_starts_with?: InputMaybe<Scalars['String']>;
  slot_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slot_not_starts_with?: InputMaybe<Scalars['String']>;
  slot_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slot_ends_with?: InputMaybe<Scalars['String']>;
  slot_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slot_not_ends_with?: InputMaybe<Scalars['String']>;
  slot_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Int']>;
  value_not?: InputMaybe<Scalars['Int']>;
  value_gt?: InputMaybe<Scalars['Int']>;
  value_lt?: InputMaybe<Scalars['Int']>;
  value_gte?: InputMaybe<Scalars['Int']>;
  value_lte?: InputMaybe<Scalars['Int']>;
  value_in?: InputMaybe<Array<Scalars['Int']>>;
  value_not_in?: InputMaybe<Array<Scalars['Int']>>;
  stat?: InputMaybe<Scalars['String']>;
  stat_not?: InputMaybe<Scalars['String']>;
  stat_gt?: InputMaybe<Scalars['String']>;
  stat_lt?: InputMaybe<Scalars['String']>;
  stat_gte?: InputMaybe<Scalars['String']>;
  stat_lte?: InputMaybe<Scalars['String']>;
  stat_in?: InputMaybe<Array<Scalars['String']>>;
  stat_not_in?: InputMaybe<Array<Scalars['String']>>;
  stat_contains?: InputMaybe<Scalars['String']>;
  stat_contains_nocase?: InputMaybe<Scalars['String']>;
  stat_not_contains?: InputMaybe<Scalars['String']>;
  stat_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stat_starts_with?: InputMaybe<Scalars['String']>;
  stat_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stat_not_starts_with?: InputMaybe<Scalars['String']>;
  stat_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stat_ends_with?: InputMaybe<Scalars['String']>;
  stat_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stat_not_ends_with?: InputMaybe<Scalars['String']>;
  stat_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['Int']>;
  cost_not?: InputMaybe<Scalars['Int']>;
  cost_gt?: InputMaybe<Scalars['Int']>;
  cost_lt?: InputMaybe<Scalars['Int']>;
  cost_gte?: InputMaybe<Scalars['Int']>;
  cost_lte?: InputMaybe<Scalars['Int']>;
  cost_in?: InputMaybe<Array<Scalars['Int']>>;
  cost_not_in?: InputMaybe<Array<Scalars['Int']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<A_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<A_EquipmentInStore_filter>>>;
  or?: InputMaybe<Array<InputMaybe<A_EquipmentInStore_filter>>>;
};

export type A_EquipmentInStore_orderBy =
  | 'id'
  | 'slot'
  | 'value'
  | 'stat'
  | 'cost'
  | 'name'
  | 'uri';

export type A_Equipment_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  slot?: InputMaybe<Scalars['String']>;
  slot_not?: InputMaybe<Scalars['String']>;
  slot_gt?: InputMaybe<Scalars['String']>;
  slot_lt?: InputMaybe<Scalars['String']>;
  slot_gte?: InputMaybe<Scalars['String']>;
  slot_lte?: InputMaybe<Scalars['String']>;
  slot_in?: InputMaybe<Array<Scalars['String']>>;
  slot_not_in?: InputMaybe<Array<Scalars['String']>>;
  slot_contains?: InputMaybe<Scalars['String']>;
  slot_contains_nocase?: InputMaybe<Scalars['String']>;
  slot_not_contains?: InputMaybe<Scalars['String']>;
  slot_not_contains_nocase?: InputMaybe<Scalars['String']>;
  slot_starts_with?: InputMaybe<Scalars['String']>;
  slot_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slot_not_starts_with?: InputMaybe<Scalars['String']>;
  slot_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slot_ends_with?: InputMaybe<Scalars['String']>;
  slot_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slot_not_ends_with?: InputMaybe<Scalars['String']>;
  slot_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rank?: InputMaybe<Scalars['Int']>;
  rank_not?: InputMaybe<Scalars['Int']>;
  rank_gt?: InputMaybe<Scalars['Int']>;
  rank_lt?: InputMaybe<Scalars['Int']>;
  rank_gte?: InputMaybe<Scalars['Int']>;
  rank_lte?: InputMaybe<Scalars['Int']>;
  rank_in?: InputMaybe<Array<Scalars['Int']>>;
  rank_not_in?: InputMaybe<Array<Scalars['Int']>>;
  value?: InputMaybe<Scalars['Int']>;
  value_not?: InputMaybe<Scalars['Int']>;
  value_gt?: InputMaybe<Scalars['Int']>;
  value_lt?: InputMaybe<Scalars['Int']>;
  value_gte?: InputMaybe<Scalars['Int']>;
  value_lte?: InputMaybe<Scalars['Int']>;
  value_in?: InputMaybe<Array<Scalars['Int']>>;
  value_not_in?: InputMaybe<Array<Scalars['Int']>>;
  stat?: InputMaybe<Scalars['String']>;
  stat_not?: InputMaybe<Scalars['String']>;
  stat_gt?: InputMaybe<Scalars['String']>;
  stat_lt?: InputMaybe<Scalars['String']>;
  stat_gte?: InputMaybe<Scalars['String']>;
  stat_lte?: InputMaybe<Scalars['String']>;
  stat_in?: InputMaybe<Array<Scalars['String']>>;
  stat_not_in?: InputMaybe<Array<Scalars['String']>>;
  stat_contains?: InputMaybe<Scalars['String']>;
  stat_contains_nocase?: InputMaybe<Scalars['String']>;
  stat_not_contains?: InputMaybe<Scalars['String']>;
  stat_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stat_starts_with?: InputMaybe<Scalars['String']>;
  stat_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stat_not_starts_with?: InputMaybe<Scalars['String']>;
  stat_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stat_ends_with?: InputMaybe<Scalars['String']>;
  stat_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stat_not_ends_with?: InputMaybe<Scalars['String']>;
  stat_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  player?: InputMaybe<Scalars['String']>;
  player_not?: InputMaybe<Scalars['String']>;
  player_gt?: InputMaybe<Scalars['String']>;
  player_lt?: InputMaybe<Scalars['String']>;
  player_gte?: InputMaybe<Scalars['String']>;
  player_lte?: InputMaybe<Scalars['String']>;
  player_in?: InputMaybe<Array<Scalars['String']>>;
  player_not_in?: InputMaybe<Array<Scalars['String']>>;
  player_contains?: InputMaybe<Scalars['String']>;
  player_contains_nocase?: InputMaybe<Scalars['String']>;
  player_not_contains?: InputMaybe<Scalars['String']>;
  player_not_contains_nocase?: InputMaybe<Scalars['String']>;
  player_starts_with?: InputMaybe<Scalars['String']>;
  player_starts_with_nocase?: InputMaybe<Scalars['String']>;
  player_not_starts_with?: InputMaybe<Scalars['String']>;
  player_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  player_ends_with?: InputMaybe<Scalars['String']>;
  player_ends_with_nocase?: InputMaybe<Scalars['String']>;
  player_not_ends_with?: InputMaybe<Scalars['String']>;
  player_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  player_?: InputMaybe<A_Player_filter>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  isEquipped?: InputMaybe<Scalars['Boolean']>;
  isEquipped_not?: InputMaybe<Scalars['Boolean']>;
  isEquipped_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isEquipped_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<A_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<A_Equipment_filter>>>;
  or?: InputMaybe<Array<InputMaybe<A_Equipment_filter>>>;
};

export type A_Equipment_orderBy =
  | 'id'
  | 'slot'
  | 'rank'
  | 'value'
  | 'stat'
  | 'player'
  | 'player__id'
  | 'player__Player_id'
  | 'player__name'
  | 'player__classes'
  | 'player__stats'
  | 'player__exp'
  | 'player__level'
  | 'player__strength'
  | 'player__magic'
  | 'player__agility'
  | 'player__defense'
  | 'player__currentHealth'
  | 'player__maxHealth'
  | 'player__currentMana'
  | 'player__maxMana'
  | 'player__totalWins'
  | 'player__totalLosses'
  | 'name'
  | 'uri'
  | 'isEquipped';

export type A_Listing = {
  id: Scalars['ID'];
  price: Scalars['BigInt'];
  seller: Scalars['String'];
  timestamp: Scalars['BigInt'];
  player: A_Player;
};

export type A_Listing_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  price?: InputMaybe<Scalars['BigInt']>;
  price_not?: InputMaybe<Scalars['BigInt']>;
  price_gt?: InputMaybe<Scalars['BigInt']>;
  price_lt?: InputMaybe<Scalars['BigInt']>;
  price_gte?: InputMaybe<Scalars['BigInt']>;
  price_lte?: InputMaybe<Scalars['BigInt']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  seller?: InputMaybe<Scalars['String']>;
  seller_not?: InputMaybe<Scalars['String']>;
  seller_gt?: InputMaybe<Scalars['String']>;
  seller_lt?: InputMaybe<Scalars['String']>;
  seller_gte?: InputMaybe<Scalars['String']>;
  seller_lte?: InputMaybe<Scalars['String']>;
  seller_in?: InputMaybe<Array<Scalars['String']>>;
  seller_not_in?: InputMaybe<Array<Scalars['String']>>;
  seller_contains?: InputMaybe<Scalars['String']>;
  seller_contains_nocase?: InputMaybe<Scalars['String']>;
  seller_not_contains?: InputMaybe<Scalars['String']>;
  seller_not_contains_nocase?: InputMaybe<Scalars['String']>;
  seller_starts_with?: InputMaybe<Scalars['String']>;
  seller_starts_with_nocase?: InputMaybe<Scalars['String']>;
  seller_not_starts_with?: InputMaybe<Scalars['String']>;
  seller_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  seller_ends_with?: InputMaybe<Scalars['String']>;
  seller_ends_with_nocase?: InputMaybe<Scalars['String']>;
  seller_not_ends_with?: InputMaybe<Scalars['String']>;
  seller_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  player?: InputMaybe<Scalars['String']>;
  player_not?: InputMaybe<Scalars['String']>;
  player_gt?: InputMaybe<Scalars['String']>;
  player_lt?: InputMaybe<Scalars['String']>;
  player_gte?: InputMaybe<Scalars['String']>;
  player_lte?: InputMaybe<Scalars['String']>;
  player_in?: InputMaybe<Array<Scalars['String']>>;
  player_not_in?: InputMaybe<Array<Scalars['String']>>;
  player_contains?: InputMaybe<Scalars['String']>;
  player_contains_nocase?: InputMaybe<Scalars['String']>;
  player_not_contains?: InputMaybe<Scalars['String']>;
  player_not_contains_nocase?: InputMaybe<Scalars['String']>;
  player_starts_with?: InputMaybe<Scalars['String']>;
  player_starts_with_nocase?: InputMaybe<Scalars['String']>;
  player_not_starts_with?: InputMaybe<Scalars['String']>;
  player_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  player_ends_with?: InputMaybe<Scalars['String']>;
  player_ends_with_nocase?: InputMaybe<Scalars['String']>;
  player_not_ends_with?: InputMaybe<Scalars['String']>;
  player_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  player_?: InputMaybe<A_Player_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<A_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<A_Listing_filter>>>;
  or?: InputMaybe<Array<InputMaybe<A_Listing_filter>>>;
};

export type A_Listing_orderBy =
  | 'id'
  | 'price'
  | 'seller'
  | 'timestamp'
  | 'player'
  | 'player__id'
  | 'player__Player_id'
  | 'player__name'
  | 'player__classes'
  | 'player__stats'
  | 'player__exp'
  | 'player__level'
  | 'player__strength'
  | 'player__magic'
  | 'player__agility'
  | 'player__defense'
  | 'player__currentHealth'
  | 'player__maxHealth'
  | 'player__currentMana'
  | 'player__maxMana'
  | 'player__totalWins'
  | 'player__totalLosses';

export type A_MagicMonster = {
  id: Scalars['ID'];
  xpReward: Scalars['Int'];
  damage: Scalars['Int'];
  hp: Scalars['Int'];
  cooldown: Scalars['Int'];
  cost: Scalars['Int'];
  name: Scalars['String'];
  uri: Scalars['String'];
};

export type A_MagicMonster_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  xpReward?: InputMaybe<Scalars['Int']>;
  xpReward_not?: InputMaybe<Scalars['Int']>;
  xpReward_gt?: InputMaybe<Scalars['Int']>;
  xpReward_lt?: InputMaybe<Scalars['Int']>;
  xpReward_gte?: InputMaybe<Scalars['Int']>;
  xpReward_lte?: InputMaybe<Scalars['Int']>;
  xpReward_in?: InputMaybe<Array<Scalars['Int']>>;
  xpReward_not_in?: InputMaybe<Array<Scalars['Int']>>;
  damage?: InputMaybe<Scalars['Int']>;
  damage_not?: InputMaybe<Scalars['Int']>;
  damage_gt?: InputMaybe<Scalars['Int']>;
  damage_lt?: InputMaybe<Scalars['Int']>;
  damage_gte?: InputMaybe<Scalars['Int']>;
  damage_lte?: InputMaybe<Scalars['Int']>;
  damage_in?: InputMaybe<Array<Scalars['Int']>>;
  damage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hp?: InputMaybe<Scalars['Int']>;
  hp_not?: InputMaybe<Scalars['Int']>;
  hp_gt?: InputMaybe<Scalars['Int']>;
  hp_lt?: InputMaybe<Scalars['Int']>;
  hp_gte?: InputMaybe<Scalars['Int']>;
  hp_lte?: InputMaybe<Scalars['Int']>;
  hp_in?: InputMaybe<Array<Scalars['Int']>>;
  hp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cooldown?: InputMaybe<Scalars['Int']>;
  cooldown_not?: InputMaybe<Scalars['Int']>;
  cooldown_gt?: InputMaybe<Scalars['Int']>;
  cooldown_lt?: InputMaybe<Scalars['Int']>;
  cooldown_gte?: InputMaybe<Scalars['Int']>;
  cooldown_lte?: InputMaybe<Scalars['Int']>;
  cooldown_in?: InputMaybe<Array<Scalars['Int']>>;
  cooldown_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cost?: InputMaybe<Scalars['Int']>;
  cost_not?: InputMaybe<Scalars['Int']>;
  cost_gt?: InputMaybe<Scalars['Int']>;
  cost_lt?: InputMaybe<Scalars['Int']>;
  cost_gte?: InputMaybe<Scalars['Int']>;
  cost_lte?: InputMaybe<Scalars['Int']>;
  cost_in?: InputMaybe<Array<Scalars['Int']>>;
  cost_not_in?: InputMaybe<Array<Scalars['Int']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<A_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<A_MagicMonster_filter>>>;
  or?: InputMaybe<Array<InputMaybe<A_MagicMonster_filter>>>;
};

export type A_MagicMonster_orderBy =
  | 'id'
  | 'xpReward'
  | 'damage'
  | 'hp'
  | 'cooldown'
  | 'cost'
  | 'name'
  | 'uri';

export type A_Monster = {
  id: Scalars['ID'];
  xpReward: Scalars['Int'];
  damage: Scalars['Int'];
  hp: Scalars['Int'];
  cooldown: Scalars['Int'];
  name: Scalars['String'];
  uri: Scalars['String'];
};

export type A_Monster_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  xpReward?: InputMaybe<Scalars['Int']>;
  xpReward_not?: InputMaybe<Scalars['Int']>;
  xpReward_gt?: InputMaybe<Scalars['Int']>;
  xpReward_lt?: InputMaybe<Scalars['Int']>;
  xpReward_gte?: InputMaybe<Scalars['Int']>;
  xpReward_lte?: InputMaybe<Scalars['Int']>;
  xpReward_in?: InputMaybe<Array<Scalars['Int']>>;
  xpReward_not_in?: InputMaybe<Array<Scalars['Int']>>;
  damage?: InputMaybe<Scalars['Int']>;
  damage_not?: InputMaybe<Scalars['Int']>;
  damage_gt?: InputMaybe<Scalars['Int']>;
  damage_lt?: InputMaybe<Scalars['Int']>;
  damage_gte?: InputMaybe<Scalars['Int']>;
  damage_lte?: InputMaybe<Scalars['Int']>;
  damage_in?: InputMaybe<Array<Scalars['Int']>>;
  damage_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hp?: InputMaybe<Scalars['Int']>;
  hp_not?: InputMaybe<Scalars['Int']>;
  hp_gt?: InputMaybe<Scalars['Int']>;
  hp_lt?: InputMaybe<Scalars['Int']>;
  hp_gte?: InputMaybe<Scalars['Int']>;
  hp_lte?: InputMaybe<Scalars['Int']>;
  hp_in?: InputMaybe<Array<Scalars['Int']>>;
  hp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cooldown?: InputMaybe<Scalars['Int']>;
  cooldown_not?: InputMaybe<Scalars['Int']>;
  cooldown_gt?: InputMaybe<Scalars['Int']>;
  cooldown_lt?: InputMaybe<Scalars['Int']>;
  cooldown_gte?: InputMaybe<Scalars['Int']>;
  cooldown_lte?: InputMaybe<Scalars['Int']>;
  cooldown_in?: InputMaybe<Array<Scalars['Int']>>;
  cooldown_not_in?: InputMaybe<Array<Scalars['Int']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<A_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<A_Monster_filter>>>;
  or?: InputMaybe<Array<InputMaybe<A_Monster_filter>>>;
};

export type A_Monster_orderBy =
  | 'id'
  | 'xpReward'
  | 'damage'
  | 'hp'
  | 'cooldown'
  | 'name'
  | 'uri';

/** Defines the order direction, either ascending or descending */
export type A_OrderDirection =
  | 'asc'
  | 'desc';

export type A_Player = {
  id: Scalars['ID'];
  Player_id: Scalars['BigInt'];
  user: A_User;
  name: Scalars['String'];
  classes: Scalars['String'];
  stats: Scalars['String'];
  exp: Scalars['Int'];
  level: Scalars['Int'];
  strength: Scalars['Int'];
  magic: Scalars['Int'];
  agility: Scalars['Int'];
  defense: Scalars['Int'];
  currentHealth: Scalars['Int'];
  maxHealth: Scalars['Int'];
  currentMana: Scalars['Int'];
  maxMana: Scalars['Int'];
  totalWins: Scalars['Int'];
  totalLosses: Scalars['Int'];
  potionBalance: Array<A_BasicPotionBalance>;
  equipment: Array<A_Equipment>;
  treasure: Array<A_Treasure>;
  arenaResult: Array<A_ArenaResults>;
};


export type A_PlayerpotionBalanceArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_BasicPotionBalance_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_BasicPotionBalance_filter>;
};


export type A_PlayerequipmentArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_Equipment_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_Equipment_filter>;
};


export type A_PlayertreasureArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_Treasure_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_Treasure_filter>;
};


export type A_PlayerarenaResultArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_ArenaResults_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_ArenaResults_filter>;
};

export type A_Player_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  Player_id?: InputMaybe<Scalars['BigInt']>;
  Player_id_not?: InputMaybe<Scalars['BigInt']>;
  Player_id_gt?: InputMaybe<Scalars['BigInt']>;
  Player_id_lt?: InputMaybe<Scalars['BigInt']>;
  Player_id_gte?: InputMaybe<Scalars['BigInt']>;
  Player_id_lte?: InputMaybe<Scalars['BigInt']>;
  Player_id_in?: InputMaybe<Array<Scalars['BigInt']>>;
  Player_id_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<A_User_filter>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  classes?: InputMaybe<Scalars['String']>;
  classes_not?: InputMaybe<Scalars['String']>;
  classes_gt?: InputMaybe<Scalars['String']>;
  classes_lt?: InputMaybe<Scalars['String']>;
  classes_gte?: InputMaybe<Scalars['String']>;
  classes_lte?: InputMaybe<Scalars['String']>;
  classes_in?: InputMaybe<Array<Scalars['String']>>;
  classes_not_in?: InputMaybe<Array<Scalars['String']>>;
  classes_contains?: InputMaybe<Scalars['String']>;
  classes_contains_nocase?: InputMaybe<Scalars['String']>;
  classes_not_contains?: InputMaybe<Scalars['String']>;
  classes_not_contains_nocase?: InputMaybe<Scalars['String']>;
  classes_starts_with?: InputMaybe<Scalars['String']>;
  classes_starts_with_nocase?: InputMaybe<Scalars['String']>;
  classes_not_starts_with?: InputMaybe<Scalars['String']>;
  classes_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  classes_ends_with?: InputMaybe<Scalars['String']>;
  classes_ends_with_nocase?: InputMaybe<Scalars['String']>;
  classes_not_ends_with?: InputMaybe<Scalars['String']>;
  classes_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stats?: InputMaybe<Scalars['String']>;
  stats_not?: InputMaybe<Scalars['String']>;
  stats_gt?: InputMaybe<Scalars['String']>;
  stats_lt?: InputMaybe<Scalars['String']>;
  stats_gte?: InputMaybe<Scalars['String']>;
  stats_lte?: InputMaybe<Scalars['String']>;
  stats_in?: InputMaybe<Array<Scalars['String']>>;
  stats_not_in?: InputMaybe<Array<Scalars['String']>>;
  stats_contains?: InputMaybe<Scalars['String']>;
  stats_contains_nocase?: InputMaybe<Scalars['String']>;
  stats_not_contains?: InputMaybe<Scalars['String']>;
  stats_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stats_starts_with?: InputMaybe<Scalars['String']>;
  stats_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stats_not_starts_with?: InputMaybe<Scalars['String']>;
  stats_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stats_ends_with?: InputMaybe<Scalars['String']>;
  stats_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stats_not_ends_with?: InputMaybe<Scalars['String']>;
  stats_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  exp?: InputMaybe<Scalars['Int']>;
  exp_not?: InputMaybe<Scalars['Int']>;
  exp_gt?: InputMaybe<Scalars['Int']>;
  exp_lt?: InputMaybe<Scalars['Int']>;
  exp_gte?: InputMaybe<Scalars['Int']>;
  exp_lte?: InputMaybe<Scalars['Int']>;
  exp_in?: InputMaybe<Array<Scalars['Int']>>;
  exp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  level?: InputMaybe<Scalars['Int']>;
  level_not?: InputMaybe<Scalars['Int']>;
  level_gt?: InputMaybe<Scalars['Int']>;
  level_lt?: InputMaybe<Scalars['Int']>;
  level_gte?: InputMaybe<Scalars['Int']>;
  level_lte?: InputMaybe<Scalars['Int']>;
  level_in?: InputMaybe<Array<Scalars['Int']>>;
  level_not_in?: InputMaybe<Array<Scalars['Int']>>;
  strength?: InputMaybe<Scalars['Int']>;
  strength_not?: InputMaybe<Scalars['Int']>;
  strength_gt?: InputMaybe<Scalars['Int']>;
  strength_lt?: InputMaybe<Scalars['Int']>;
  strength_gte?: InputMaybe<Scalars['Int']>;
  strength_lte?: InputMaybe<Scalars['Int']>;
  strength_in?: InputMaybe<Array<Scalars['Int']>>;
  strength_not_in?: InputMaybe<Array<Scalars['Int']>>;
  magic?: InputMaybe<Scalars['Int']>;
  magic_not?: InputMaybe<Scalars['Int']>;
  magic_gt?: InputMaybe<Scalars['Int']>;
  magic_lt?: InputMaybe<Scalars['Int']>;
  magic_gte?: InputMaybe<Scalars['Int']>;
  magic_lte?: InputMaybe<Scalars['Int']>;
  magic_in?: InputMaybe<Array<Scalars['Int']>>;
  magic_not_in?: InputMaybe<Array<Scalars['Int']>>;
  agility?: InputMaybe<Scalars['Int']>;
  agility_not?: InputMaybe<Scalars['Int']>;
  agility_gt?: InputMaybe<Scalars['Int']>;
  agility_lt?: InputMaybe<Scalars['Int']>;
  agility_gte?: InputMaybe<Scalars['Int']>;
  agility_lte?: InputMaybe<Scalars['Int']>;
  agility_in?: InputMaybe<Array<Scalars['Int']>>;
  agility_not_in?: InputMaybe<Array<Scalars['Int']>>;
  defense?: InputMaybe<Scalars['Int']>;
  defense_not?: InputMaybe<Scalars['Int']>;
  defense_gt?: InputMaybe<Scalars['Int']>;
  defense_lt?: InputMaybe<Scalars['Int']>;
  defense_gte?: InputMaybe<Scalars['Int']>;
  defense_lte?: InputMaybe<Scalars['Int']>;
  defense_in?: InputMaybe<Array<Scalars['Int']>>;
  defense_not_in?: InputMaybe<Array<Scalars['Int']>>;
  currentHealth?: InputMaybe<Scalars['Int']>;
  currentHealth_not?: InputMaybe<Scalars['Int']>;
  currentHealth_gt?: InputMaybe<Scalars['Int']>;
  currentHealth_lt?: InputMaybe<Scalars['Int']>;
  currentHealth_gte?: InputMaybe<Scalars['Int']>;
  currentHealth_lte?: InputMaybe<Scalars['Int']>;
  currentHealth_in?: InputMaybe<Array<Scalars['Int']>>;
  currentHealth_not_in?: InputMaybe<Array<Scalars['Int']>>;
  maxHealth?: InputMaybe<Scalars['Int']>;
  maxHealth_not?: InputMaybe<Scalars['Int']>;
  maxHealth_gt?: InputMaybe<Scalars['Int']>;
  maxHealth_lt?: InputMaybe<Scalars['Int']>;
  maxHealth_gte?: InputMaybe<Scalars['Int']>;
  maxHealth_lte?: InputMaybe<Scalars['Int']>;
  maxHealth_in?: InputMaybe<Array<Scalars['Int']>>;
  maxHealth_not_in?: InputMaybe<Array<Scalars['Int']>>;
  currentMana?: InputMaybe<Scalars['Int']>;
  currentMana_not?: InputMaybe<Scalars['Int']>;
  currentMana_gt?: InputMaybe<Scalars['Int']>;
  currentMana_lt?: InputMaybe<Scalars['Int']>;
  currentMana_gte?: InputMaybe<Scalars['Int']>;
  currentMana_lte?: InputMaybe<Scalars['Int']>;
  currentMana_in?: InputMaybe<Array<Scalars['Int']>>;
  currentMana_not_in?: InputMaybe<Array<Scalars['Int']>>;
  maxMana?: InputMaybe<Scalars['Int']>;
  maxMana_not?: InputMaybe<Scalars['Int']>;
  maxMana_gt?: InputMaybe<Scalars['Int']>;
  maxMana_lt?: InputMaybe<Scalars['Int']>;
  maxMana_gte?: InputMaybe<Scalars['Int']>;
  maxMana_lte?: InputMaybe<Scalars['Int']>;
  maxMana_in?: InputMaybe<Array<Scalars['Int']>>;
  maxMana_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalWins?: InputMaybe<Scalars['Int']>;
  totalWins_not?: InputMaybe<Scalars['Int']>;
  totalWins_gt?: InputMaybe<Scalars['Int']>;
  totalWins_lt?: InputMaybe<Scalars['Int']>;
  totalWins_gte?: InputMaybe<Scalars['Int']>;
  totalWins_lte?: InputMaybe<Scalars['Int']>;
  totalWins_in?: InputMaybe<Array<Scalars['Int']>>;
  totalWins_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalLosses?: InputMaybe<Scalars['Int']>;
  totalLosses_not?: InputMaybe<Scalars['Int']>;
  totalLosses_gt?: InputMaybe<Scalars['Int']>;
  totalLosses_lt?: InputMaybe<Scalars['Int']>;
  totalLosses_gte?: InputMaybe<Scalars['Int']>;
  totalLosses_lte?: InputMaybe<Scalars['Int']>;
  totalLosses_in?: InputMaybe<Array<Scalars['Int']>>;
  totalLosses_not_in?: InputMaybe<Array<Scalars['Int']>>;
  potionBalance_?: InputMaybe<A_BasicPotionBalance_filter>;
  equipment_?: InputMaybe<A_Equipment_filter>;
  treasure_?: InputMaybe<A_Treasure_filter>;
  arenaResult_?: InputMaybe<A_ArenaResults_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<A_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<A_Player_filter>>>;
  or?: InputMaybe<Array<InputMaybe<A_Player_filter>>>;
};

export type A_Player_orderBy =
  | 'id'
  | 'Player_id'
  | 'user'
  | 'user__id'
  | 'user__gold'
  | 'user__gem'
  | 'name'
  | 'classes'
  | 'stats'
  | 'exp'
  | 'level'
  | 'strength'
  | 'magic'
  | 'agility'
  | 'defense'
  | 'currentHealth'
  | 'maxHealth'
  | 'currentMana'
  | 'maxMana'
  | 'totalWins'
  | 'totalLosses'
  | 'potionBalance'
  | 'equipment'
  | 'treasure'
  | 'arenaResult';

export type Query = {
  A_user?: Maybe<A_User>;
  A_users: Array<A_User>;
  A_player?: Maybe<A_Player>;
  A_players: Array<A_Player>;
  A_equipment?: Maybe<A_Equipment>;
  A_equipments: Array<A_Equipment>;
  A_equipmentInStore?: Maybe<A_EquipmentInStore>;
  A_equipmentInStores: Array<A_EquipmentInStore>;
  A_treasure?: Maybe<A_Treasure>;
  A_treasures: Array<A_Treasure>;
  A_treasureInStore?: Maybe<A_TreasureInStore>;
  A_treasureInStores: Array<A_TreasureInStore>;
  A_basicCraft?: Maybe<A_BasicCraft>;
  A_basicCrafts: Array<A_BasicCraft>;
  A_advancedCraft?: Maybe<A_AdvancedCraft>;
  A_advancedCrafts: Array<A_AdvancedCraft>;
  A_equipCount?: Maybe<A_EquipCount>;
  A_equipCounts: Array<A_EquipCount>;
  A_treasureCount?: Maybe<A_TreasureCount>;
  A_treasureCounts: Array<A_TreasureCount>;
  A_monster?: Maybe<A_Monster>;
  A_monsters: Array<A_Monster>;
  A_magicMonster?: Maybe<A_MagicMonster>;
  A_magicMonsters: Array<A_MagicMonster>;
  A_basicPotion?: Maybe<A_BasicPotion>;
  A_basicPotions: Array<A_BasicPotion>;
  A_basicPotionBalance?: Maybe<A_BasicPotionBalance>;
  A_basicPotionBalances: Array<A_BasicPotionBalance>;
  A_arena?: Maybe<A_Arena>;
  A_arenas: Array<A_Arena>;
  A_arenaResults: Array<A_ArenaResults>;
  A_sale?: Maybe<A_Sale>;
  A_sales: Array<A_Sale>;
  A_listing?: Maybe<A_Listing>;
  A_listings: Array<A_Listing>;
  /** Access to subgraph metadata */
  A__meta?: Maybe<A__Meta_>;
};


export type QueryA_userArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_usersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_User_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_User_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_playerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_playersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_Player_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_Player_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_equipmentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_equipmentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_Equipment_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_Equipment_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_equipmentInStoreArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_equipmentInStoresArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_EquipmentInStore_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_EquipmentInStore_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_treasureArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_treasuresArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_Treasure_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_Treasure_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_treasureInStoreArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_treasureInStoresArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_TreasureInStore_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_TreasureInStore_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_basicCraftArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_basicCraftsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_BasicCraft_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_BasicCraft_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_advancedCraftArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_advancedCraftsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_AdvancedCraft_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_AdvancedCraft_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_equipCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_equipCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_EquipCount_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_EquipCount_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_treasureCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_treasureCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_TreasureCount_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_TreasureCount_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_monsterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_monstersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_Monster_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_Monster_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_magicMonsterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_magicMonstersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_MagicMonster_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_MagicMonster_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_basicPotionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_basicPotionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_BasicPotion_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_BasicPotion_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_basicPotionBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_basicPotionBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_BasicPotionBalance_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_BasicPotionBalance_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_arenaArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_arenasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_Arena_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_Arena_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_arenaResultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_ArenaResults_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_ArenaResults_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_saleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_salesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_Sale_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_Sale_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_listingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA_listingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_Listing_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_Listing_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryA__metaArgs = {
  block?: InputMaybe<A_Block_height>;
};

export type A_Sale = {
  id: Scalars['ID'];
  price: Scalars['BigInt'];
  player: A_Player;
  seller: Scalars['String'];
  buyer: Scalars['String'];
  timestamp: Scalars['BigInt'];
  txHash: Scalars['String'];
};

export type A_Sale_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  price?: InputMaybe<Scalars['BigInt']>;
  price_not?: InputMaybe<Scalars['BigInt']>;
  price_gt?: InputMaybe<Scalars['BigInt']>;
  price_lt?: InputMaybe<Scalars['BigInt']>;
  price_gte?: InputMaybe<Scalars['BigInt']>;
  price_lte?: InputMaybe<Scalars['BigInt']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  player?: InputMaybe<Scalars['String']>;
  player_not?: InputMaybe<Scalars['String']>;
  player_gt?: InputMaybe<Scalars['String']>;
  player_lt?: InputMaybe<Scalars['String']>;
  player_gte?: InputMaybe<Scalars['String']>;
  player_lte?: InputMaybe<Scalars['String']>;
  player_in?: InputMaybe<Array<Scalars['String']>>;
  player_not_in?: InputMaybe<Array<Scalars['String']>>;
  player_contains?: InputMaybe<Scalars['String']>;
  player_contains_nocase?: InputMaybe<Scalars['String']>;
  player_not_contains?: InputMaybe<Scalars['String']>;
  player_not_contains_nocase?: InputMaybe<Scalars['String']>;
  player_starts_with?: InputMaybe<Scalars['String']>;
  player_starts_with_nocase?: InputMaybe<Scalars['String']>;
  player_not_starts_with?: InputMaybe<Scalars['String']>;
  player_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  player_ends_with?: InputMaybe<Scalars['String']>;
  player_ends_with_nocase?: InputMaybe<Scalars['String']>;
  player_not_ends_with?: InputMaybe<Scalars['String']>;
  player_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  player_?: InputMaybe<A_Player_filter>;
  seller?: InputMaybe<Scalars['String']>;
  seller_not?: InputMaybe<Scalars['String']>;
  seller_gt?: InputMaybe<Scalars['String']>;
  seller_lt?: InputMaybe<Scalars['String']>;
  seller_gte?: InputMaybe<Scalars['String']>;
  seller_lte?: InputMaybe<Scalars['String']>;
  seller_in?: InputMaybe<Array<Scalars['String']>>;
  seller_not_in?: InputMaybe<Array<Scalars['String']>>;
  seller_contains?: InputMaybe<Scalars['String']>;
  seller_contains_nocase?: InputMaybe<Scalars['String']>;
  seller_not_contains?: InputMaybe<Scalars['String']>;
  seller_not_contains_nocase?: InputMaybe<Scalars['String']>;
  seller_starts_with?: InputMaybe<Scalars['String']>;
  seller_starts_with_nocase?: InputMaybe<Scalars['String']>;
  seller_not_starts_with?: InputMaybe<Scalars['String']>;
  seller_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  seller_ends_with?: InputMaybe<Scalars['String']>;
  seller_ends_with_nocase?: InputMaybe<Scalars['String']>;
  seller_not_ends_with?: InputMaybe<Scalars['String']>;
  seller_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  buyer?: InputMaybe<Scalars['String']>;
  buyer_not?: InputMaybe<Scalars['String']>;
  buyer_gt?: InputMaybe<Scalars['String']>;
  buyer_lt?: InputMaybe<Scalars['String']>;
  buyer_gte?: InputMaybe<Scalars['String']>;
  buyer_lte?: InputMaybe<Scalars['String']>;
  buyer_in?: InputMaybe<Array<Scalars['String']>>;
  buyer_not_in?: InputMaybe<Array<Scalars['String']>>;
  buyer_contains?: InputMaybe<Scalars['String']>;
  buyer_contains_nocase?: InputMaybe<Scalars['String']>;
  buyer_not_contains?: InputMaybe<Scalars['String']>;
  buyer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  buyer_starts_with?: InputMaybe<Scalars['String']>;
  buyer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  buyer_not_starts_with?: InputMaybe<Scalars['String']>;
  buyer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  buyer_ends_with?: InputMaybe<Scalars['String']>;
  buyer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  buyer_not_ends_with?: InputMaybe<Scalars['String']>;
  buyer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txHash?: InputMaybe<Scalars['String']>;
  txHash_not?: InputMaybe<Scalars['String']>;
  txHash_gt?: InputMaybe<Scalars['String']>;
  txHash_lt?: InputMaybe<Scalars['String']>;
  txHash_gte?: InputMaybe<Scalars['String']>;
  txHash_lte?: InputMaybe<Scalars['String']>;
  txHash_in?: InputMaybe<Array<Scalars['String']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  txHash_contains?: InputMaybe<Scalars['String']>;
  txHash_contains_nocase?: InputMaybe<Scalars['String']>;
  txHash_not_contains?: InputMaybe<Scalars['String']>;
  txHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  txHash_starts_with?: InputMaybe<Scalars['String']>;
  txHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']>;
  txHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash_ends_with?: InputMaybe<Scalars['String']>;
  txHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']>;
  txHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<A_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<A_Sale_filter>>>;
  or?: InputMaybe<Array<InputMaybe<A_Sale_filter>>>;
};

export type A_Sale_orderBy =
  | 'id'
  | 'price'
  | 'player'
  | 'player__id'
  | 'player__Player_id'
  | 'player__name'
  | 'player__classes'
  | 'player__stats'
  | 'player__exp'
  | 'player__level'
  | 'player__strength'
  | 'player__magic'
  | 'player__agility'
  | 'player__defense'
  | 'player__currentHealth'
  | 'player__maxHealth'
  | 'player__currentMana'
  | 'player__maxMana'
  | 'player__totalWins'
  | 'player__totalLosses'
  | 'seller'
  | 'buyer'
  | 'timestamp'
  | 'txHash';

export type Subscription = {
  A_user?: Maybe<A_User>;
  A_users: Array<A_User>;
  A_player?: Maybe<A_Player>;
  A_players: Array<A_Player>;
  A_equipment?: Maybe<A_Equipment>;
  A_equipments: Array<A_Equipment>;
  A_equipmentInStore?: Maybe<A_EquipmentInStore>;
  A_equipmentInStores: Array<A_EquipmentInStore>;
  A_treasure?: Maybe<A_Treasure>;
  A_treasures: Array<A_Treasure>;
  A_treasureInStore?: Maybe<A_TreasureInStore>;
  A_treasureInStores: Array<A_TreasureInStore>;
  A_basicCraft?: Maybe<A_BasicCraft>;
  A_basicCrafts: Array<A_BasicCraft>;
  A_advancedCraft?: Maybe<A_AdvancedCraft>;
  A_advancedCrafts: Array<A_AdvancedCraft>;
  A_equipCount?: Maybe<A_EquipCount>;
  A_equipCounts: Array<A_EquipCount>;
  A_treasureCount?: Maybe<A_TreasureCount>;
  A_treasureCounts: Array<A_TreasureCount>;
  A_monster?: Maybe<A_Monster>;
  A_monsters: Array<A_Monster>;
  A_magicMonster?: Maybe<A_MagicMonster>;
  A_magicMonsters: Array<A_MagicMonster>;
  A_basicPotion?: Maybe<A_BasicPotion>;
  A_basicPotions: Array<A_BasicPotion>;
  A_basicPotionBalance?: Maybe<A_BasicPotionBalance>;
  A_basicPotionBalances: Array<A_BasicPotionBalance>;
  A_arena?: Maybe<A_Arena>;
  A_arenas: Array<A_Arena>;
  A_arenaResults: Array<A_ArenaResults>;
  A_sale?: Maybe<A_Sale>;
  A_sales: Array<A_Sale>;
  A_listing?: Maybe<A_Listing>;
  A_listings: Array<A_Listing>;
  /** Access to subgraph metadata */
  A__meta?: Maybe<A__Meta_>;
};


export type SubscriptionA_userArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_usersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_User_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_User_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_playerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_playersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_Player_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_Player_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_equipmentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_equipmentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_Equipment_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_Equipment_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_equipmentInStoreArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_equipmentInStoresArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_EquipmentInStore_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_EquipmentInStore_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_treasureArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_treasuresArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_Treasure_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_Treasure_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_treasureInStoreArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_treasureInStoresArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_TreasureInStore_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_TreasureInStore_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_basicCraftArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_basicCraftsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_BasicCraft_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_BasicCraft_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_advancedCraftArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_advancedCraftsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_AdvancedCraft_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_AdvancedCraft_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_equipCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_equipCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_EquipCount_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_EquipCount_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_treasureCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_treasureCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_TreasureCount_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_TreasureCount_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_monsterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_monstersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_Monster_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_Monster_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_magicMonsterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_magicMonstersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_MagicMonster_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_MagicMonster_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_basicPotionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_basicPotionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_BasicPotion_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_BasicPotion_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_basicPotionBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_basicPotionBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_BasicPotionBalance_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_BasicPotionBalance_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_arenaArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_arenasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_Arena_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_Arena_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_arenaResultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_ArenaResults_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_ArenaResults_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_saleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_salesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_Sale_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_Sale_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_listingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA_listingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_Listing_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_Listing_filter>;
  block?: InputMaybe<A_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionA__metaArgs = {
  block?: InputMaybe<A_Block_height>;
};

export type A_Treasure = {
  id: Scalars['ID'];
  treasureInStore: A_TreasureInStore;
  player: A_Player;
  rank: Scalars['Int'];
  name: Scalars['String'];
  uri: Scalars['String'];
};

export type A_TreasureCount = {
  id: Scalars['ID'];
  count: Scalars['Int'];
};

export type A_TreasureCount_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  count?: InputMaybe<Scalars['Int']>;
  count_not?: InputMaybe<Scalars['Int']>;
  count_gt?: InputMaybe<Scalars['Int']>;
  count_lt?: InputMaybe<Scalars['Int']>;
  count_gte?: InputMaybe<Scalars['Int']>;
  count_lte?: InputMaybe<Scalars['Int']>;
  count_in?: InputMaybe<Array<Scalars['Int']>>;
  count_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<A_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<A_TreasureCount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<A_TreasureCount_filter>>>;
};

export type A_TreasureCount_orderBy =
  | 'id'
  | 'count';

export type A_TreasureInStore = {
  id: Scalars['ID'];
  rank: Scalars['Int'];
  name: Scalars['String'];
  uri: Scalars['String'];
};

export type A_TreasureInStore_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rank?: InputMaybe<Scalars['Int']>;
  rank_not?: InputMaybe<Scalars['Int']>;
  rank_gt?: InputMaybe<Scalars['Int']>;
  rank_lt?: InputMaybe<Scalars['Int']>;
  rank_gte?: InputMaybe<Scalars['Int']>;
  rank_lte?: InputMaybe<Scalars['Int']>;
  rank_in?: InputMaybe<Array<Scalars['Int']>>;
  rank_not_in?: InputMaybe<Array<Scalars['Int']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<A_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<A_TreasureInStore_filter>>>;
  or?: InputMaybe<Array<InputMaybe<A_TreasureInStore_filter>>>;
};

export type A_TreasureInStore_orderBy =
  | 'id'
  | 'rank'
  | 'name'
  | 'uri';

export type A_Treasure_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  treasureInStore?: InputMaybe<Scalars['String']>;
  treasureInStore_not?: InputMaybe<Scalars['String']>;
  treasureInStore_gt?: InputMaybe<Scalars['String']>;
  treasureInStore_lt?: InputMaybe<Scalars['String']>;
  treasureInStore_gte?: InputMaybe<Scalars['String']>;
  treasureInStore_lte?: InputMaybe<Scalars['String']>;
  treasureInStore_in?: InputMaybe<Array<Scalars['String']>>;
  treasureInStore_not_in?: InputMaybe<Array<Scalars['String']>>;
  treasureInStore_contains?: InputMaybe<Scalars['String']>;
  treasureInStore_contains_nocase?: InputMaybe<Scalars['String']>;
  treasureInStore_not_contains?: InputMaybe<Scalars['String']>;
  treasureInStore_not_contains_nocase?: InputMaybe<Scalars['String']>;
  treasureInStore_starts_with?: InputMaybe<Scalars['String']>;
  treasureInStore_starts_with_nocase?: InputMaybe<Scalars['String']>;
  treasureInStore_not_starts_with?: InputMaybe<Scalars['String']>;
  treasureInStore_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  treasureInStore_ends_with?: InputMaybe<Scalars['String']>;
  treasureInStore_ends_with_nocase?: InputMaybe<Scalars['String']>;
  treasureInStore_not_ends_with?: InputMaybe<Scalars['String']>;
  treasureInStore_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  treasureInStore_?: InputMaybe<A_TreasureInStore_filter>;
  player?: InputMaybe<Scalars['String']>;
  player_not?: InputMaybe<Scalars['String']>;
  player_gt?: InputMaybe<Scalars['String']>;
  player_lt?: InputMaybe<Scalars['String']>;
  player_gte?: InputMaybe<Scalars['String']>;
  player_lte?: InputMaybe<Scalars['String']>;
  player_in?: InputMaybe<Array<Scalars['String']>>;
  player_not_in?: InputMaybe<Array<Scalars['String']>>;
  player_contains?: InputMaybe<Scalars['String']>;
  player_contains_nocase?: InputMaybe<Scalars['String']>;
  player_not_contains?: InputMaybe<Scalars['String']>;
  player_not_contains_nocase?: InputMaybe<Scalars['String']>;
  player_starts_with?: InputMaybe<Scalars['String']>;
  player_starts_with_nocase?: InputMaybe<Scalars['String']>;
  player_not_starts_with?: InputMaybe<Scalars['String']>;
  player_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  player_ends_with?: InputMaybe<Scalars['String']>;
  player_ends_with_nocase?: InputMaybe<Scalars['String']>;
  player_not_ends_with?: InputMaybe<Scalars['String']>;
  player_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  player_?: InputMaybe<A_Player_filter>;
  rank?: InputMaybe<Scalars['Int']>;
  rank_not?: InputMaybe<Scalars['Int']>;
  rank_gt?: InputMaybe<Scalars['Int']>;
  rank_lt?: InputMaybe<Scalars['Int']>;
  rank_gte?: InputMaybe<Scalars['Int']>;
  rank_lte?: InputMaybe<Scalars['Int']>;
  rank_in?: InputMaybe<Array<Scalars['Int']>>;
  rank_not_in?: InputMaybe<Array<Scalars['Int']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<A_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<A_Treasure_filter>>>;
  or?: InputMaybe<Array<InputMaybe<A_Treasure_filter>>>;
};

export type A_Treasure_orderBy =
  | 'id'
  | 'treasureInStore'
  | 'treasureInStore__id'
  | 'treasureInStore__rank'
  | 'treasureInStore__name'
  | 'treasureInStore__uri'
  | 'player'
  | 'player__id'
  | 'player__Player_id'
  | 'player__name'
  | 'player__classes'
  | 'player__stats'
  | 'player__exp'
  | 'player__level'
  | 'player__strength'
  | 'player__magic'
  | 'player__agility'
  | 'player__defense'
  | 'player__currentHealth'
  | 'player__maxHealth'
  | 'player__currentMana'
  | 'player__maxMana'
  | 'player__totalWins'
  | 'player__totalLosses'
  | 'rank'
  | 'name'
  | 'uri';

export type A_User = {
  id: Scalars['ID'];
  gold: Scalars['Int'];
  gem: Scalars['Int'];
  players: Array<A_Player>;
};


export type A_UserplayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<A_Player_orderBy>;
  orderDirection?: InputMaybe<A_OrderDirection>;
  where?: InputMaybe<A_Player_filter>;
};

export type A_User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  gold?: InputMaybe<Scalars['Int']>;
  gold_not?: InputMaybe<Scalars['Int']>;
  gold_gt?: InputMaybe<Scalars['Int']>;
  gold_lt?: InputMaybe<Scalars['Int']>;
  gold_gte?: InputMaybe<Scalars['Int']>;
  gold_lte?: InputMaybe<Scalars['Int']>;
  gold_in?: InputMaybe<Array<Scalars['Int']>>;
  gold_not_in?: InputMaybe<Array<Scalars['Int']>>;
  gem?: InputMaybe<Scalars['Int']>;
  gem_not?: InputMaybe<Scalars['Int']>;
  gem_gt?: InputMaybe<Scalars['Int']>;
  gem_lt?: InputMaybe<Scalars['Int']>;
  gem_gte?: InputMaybe<Scalars['Int']>;
  gem_lte?: InputMaybe<Scalars['Int']>;
  gem_in?: InputMaybe<Array<Scalars['Int']>>;
  gem_not_in?: InputMaybe<Array<Scalars['Int']>>;
  players_?: InputMaybe<A_Player_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<A_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<A_User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<A_User_filter>>>;
};

export type A_User_orderBy =
  | 'id'
  | 'gold'
  | 'gem'
  | 'players';

export type A__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['A_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type A__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: A__Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  A_user: InContextSdkMethod<Query['A_user'], QueryA_userArgs, MeshContext>,
  /** null **/
  A_users: InContextSdkMethod<Query['A_users'], QueryA_usersArgs, MeshContext>,
  /** null **/
  A_player: InContextSdkMethod<Query['A_player'], QueryA_playerArgs, MeshContext>,
  /** null **/
  A_players: InContextSdkMethod<Query['A_players'], QueryA_playersArgs, MeshContext>,
  /** null **/
  A_equipment: InContextSdkMethod<Query['A_equipment'], QueryA_equipmentArgs, MeshContext>,
  /** null **/
  A_equipments: InContextSdkMethod<Query['A_equipments'], QueryA_equipmentsArgs, MeshContext>,
  /** null **/
  A_equipmentInStore: InContextSdkMethod<Query['A_equipmentInStore'], QueryA_equipmentInStoreArgs, MeshContext>,
  /** null **/
  A_equipmentInStores: InContextSdkMethod<Query['A_equipmentInStores'], QueryA_equipmentInStoresArgs, MeshContext>,
  /** null **/
  A_treasure: InContextSdkMethod<Query['A_treasure'], QueryA_treasureArgs, MeshContext>,
  /** null **/
  A_treasures: InContextSdkMethod<Query['A_treasures'], QueryA_treasuresArgs, MeshContext>,
  /** null **/
  A_treasureInStore: InContextSdkMethod<Query['A_treasureInStore'], QueryA_treasureInStoreArgs, MeshContext>,
  /** null **/
  A_treasureInStores: InContextSdkMethod<Query['A_treasureInStores'], QueryA_treasureInStoresArgs, MeshContext>,
  /** null **/
  A_basicCraft: InContextSdkMethod<Query['A_basicCraft'], QueryA_basicCraftArgs, MeshContext>,
  /** null **/
  A_basicCrafts: InContextSdkMethod<Query['A_basicCrafts'], QueryA_basicCraftsArgs, MeshContext>,
  /** null **/
  A_advancedCraft: InContextSdkMethod<Query['A_advancedCraft'], QueryA_advancedCraftArgs, MeshContext>,
  /** null **/
  A_advancedCrafts: InContextSdkMethod<Query['A_advancedCrafts'], QueryA_advancedCraftsArgs, MeshContext>,
  /** null **/
  A_equipCount: InContextSdkMethod<Query['A_equipCount'], QueryA_equipCountArgs, MeshContext>,
  /** null **/
  A_equipCounts: InContextSdkMethod<Query['A_equipCounts'], QueryA_equipCountsArgs, MeshContext>,
  /** null **/
  A_treasureCount: InContextSdkMethod<Query['A_treasureCount'], QueryA_treasureCountArgs, MeshContext>,
  /** null **/
  A_treasureCounts: InContextSdkMethod<Query['A_treasureCounts'], QueryA_treasureCountsArgs, MeshContext>,
  /** null **/
  A_monster: InContextSdkMethod<Query['A_monster'], QueryA_monsterArgs, MeshContext>,
  /** null **/
  A_monsters: InContextSdkMethod<Query['A_monsters'], QueryA_monstersArgs, MeshContext>,
  /** null **/
  A_magicMonster: InContextSdkMethod<Query['A_magicMonster'], QueryA_magicMonsterArgs, MeshContext>,
  /** null **/
  A_magicMonsters: InContextSdkMethod<Query['A_magicMonsters'], QueryA_magicMonstersArgs, MeshContext>,
  /** null **/
  A_basicPotion: InContextSdkMethod<Query['A_basicPotion'], QueryA_basicPotionArgs, MeshContext>,
  /** null **/
  A_basicPotions: InContextSdkMethod<Query['A_basicPotions'], QueryA_basicPotionsArgs, MeshContext>,
  /** null **/
  A_basicPotionBalance: InContextSdkMethod<Query['A_basicPotionBalance'], QueryA_basicPotionBalanceArgs, MeshContext>,
  /** null **/
  A_basicPotionBalances: InContextSdkMethod<Query['A_basicPotionBalances'], QueryA_basicPotionBalancesArgs, MeshContext>,
  /** null **/
  A_arena: InContextSdkMethod<Query['A_arena'], QueryA_arenaArgs, MeshContext>,
  /** null **/
  A_arenas: InContextSdkMethod<Query['A_arenas'], QueryA_arenasArgs, MeshContext>,
  /** null **/
  A_arenaResults: InContextSdkMethod<Query['A_arenaResults'], QueryA_arenaResultsArgs, MeshContext>,
  /** null **/
  A_sale: InContextSdkMethod<Query['A_sale'], QueryA_saleArgs, MeshContext>,
  /** null **/
  A_sales: InContextSdkMethod<Query['A_sales'], QueryA_salesArgs, MeshContext>,
  /** null **/
  A_listing: InContextSdkMethod<Query['A_listing'], QueryA_listingArgs, MeshContext>,
  /** null **/
  A_listings: InContextSdkMethod<Query['A_listings'], QueryA_listingsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  A__meta: InContextSdkMethod<Query['A__meta'], QueryA__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  A_user: InContextSdkMethod<Subscription['A_user'], SubscriptionA_userArgs, MeshContext>,
  /** null **/
  A_users: InContextSdkMethod<Subscription['A_users'], SubscriptionA_usersArgs, MeshContext>,
  /** null **/
  A_player: InContextSdkMethod<Subscription['A_player'], SubscriptionA_playerArgs, MeshContext>,
  /** null **/
  A_players: InContextSdkMethod<Subscription['A_players'], SubscriptionA_playersArgs, MeshContext>,
  /** null **/
  A_equipment: InContextSdkMethod<Subscription['A_equipment'], SubscriptionA_equipmentArgs, MeshContext>,
  /** null **/
  A_equipments: InContextSdkMethod<Subscription['A_equipments'], SubscriptionA_equipmentsArgs, MeshContext>,
  /** null **/
  A_equipmentInStore: InContextSdkMethod<Subscription['A_equipmentInStore'], SubscriptionA_equipmentInStoreArgs, MeshContext>,
  /** null **/
  A_equipmentInStores: InContextSdkMethod<Subscription['A_equipmentInStores'], SubscriptionA_equipmentInStoresArgs, MeshContext>,
  /** null **/
  A_treasure: InContextSdkMethod<Subscription['A_treasure'], SubscriptionA_treasureArgs, MeshContext>,
  /** null **/
  A_treasures: InContextSdkMethod<Subscription['A_treasures'], SubscriptionA_treasuresArgs, MeshContext>,
  /** null **/
  A_treasureInStore: InContextSdkMethod<Subscription['A_treasureInStore'], SubscriptionA_treasureInStoreArgs, MeshContext>,
  /** null **/
  A_treasureInStores: InContextSdkMethod<Subscription['A_treasureInStores'], SubscriptionA_treasureInStoresArgs, MeshContext>,
  /** null **/
  A_basicCraft: InContextSdkMethod<Subscription['A_basicCraft'], SubscriptionA_basicCraftArgs, MeshContext>,
  /** null **/
  A_basicCrafts: InContextSdkMethod<Subscription['A_basicCrafts'], SubscriptionA_basicCraftsArgs, MeshContext>,
  /** null **/
  A_advancedCraft: InContextSdkMethod<Subscription['A_advancedCraft'], SubscriptionA_advancedCraftArgs, MeshContext>,
  /** null **/
  A_advancedCrafts: InContextSdkMethod<Subscription['A_advancedCrafts'], SubscriptionA_advancedCraftsArgs, MeshContext>,
  /** null **/
  A_equipCount: InContextSdkMethod<Subscription['A_equipCount'], SubscriptionA_equipCountArgs, MeshContext>,
  /** null **/
  A_equipCounts: InContextSdkMethod<Subscription['A_equipCounts'], SubscriptionA_equipCountsArgs, MeshContext>,
  /** null **/
  A_treasureCount: InContextSdkMethod<Subscription['A_treasureCount'], SubscriptionA_treasureCountArgs, MeshContext>,
  /** null **/
  A_treasureCounts: InContextSdkMethod<Subscription['A_treasureCounts'], SubscriptionA_treasureCountsArgs, MeshContext>,
  /** null **/
  A_monster: InContextSdkMethod<Subscription['A_monster'], SubscriptionA_monsterArgs, MeshContext>,
  /** null **/
  A_monsters: InContextSdkMethod<Subscription['A_monsters'], SubscriptionA_monstersArgs, MeshContext>,
  /** null **/
  A_magicMonster: InContextSdkMethod<Subscription['A_magicMonster'], SubscriptionA_magicMonsterArgs, MeshContext>,
  /** null **/
  A_magicMonsters: InContextSdkMethod<Subscription['A_magicMonsters'], SubscriptionA_magicMonstersArgs, MeshContext>,
  /** null **/
  A_basicPotion: InContextSdkMethod<Subscription['A_basicPotion'], SubscriptionA_basicPotionArgs, MeshContext>,
  /** null **/
  A_basicPotions: InContextSdkMethod<Subscription['A_basicPotions'], SubscriptionA_basicPotionsArgs, MeshContext>,
  /** null **/
  A_basicPotionBalance: InContextSdkMethod<Subscription['A_basicPotionBalance'], SubscriptionA_basicPotionBalanceArgs, MeshContext>,
  /** null **/
  A_basicPotionBalances: InContextSdkMethod<Subscription['A_basicPotionBalances'], SubscriptionA_basicPotionBalancesArgs, MeshContext>,
  /** null **/
  A_arena: InContextSdkMethod<Subscription['A_arena'], SubscriptionA_arenaArgs, MeshContext>,
  /** null **/
  A_arenas: InContextSdkMethod<Subscription['A_arenas'], SubscriptionA_arenasArgs, MeshContext>,
  /** null **/
  A_arenaResults: InContextSdkMethod<Subscription['A_arenaResults'], SubscriptionA_arenaResultsArgs, MeshContext>,
  /** null **/
  A_sale: InContextSdkMethod<Subscription['A_sale'], SubscriptionA_saleArgs, MeshContext>,
  /** null **/
  A_sales: InContextSdkMethod<Subscription['A_sales'], SubscriptionA_salesArgs, MeshContext>,
  /** null **/
  A_listing: InContextSdkMethod<Subscription['A_listing'], SubscriptionA_listingArgs, MeshContext>,
  /** null **/
  A_listings: InContextSdkMethod<Subscription['A_listings'], SubscriptionA_listingsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  A__meta: InContextSdkMethod<Subscription['A__meta'], SubscriptionA__metaArgs, MeshContext>
  };

  export type Context = {
      ["Arbitrum"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
