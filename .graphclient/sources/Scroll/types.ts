// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ScrollTypes {
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
  S_BigDecimal: any;
  BigInt: any;
  S_Bytes: any;
  S_Int8: any;
};

export type S_Arena = {
  id: Scalars['ID'];
  name: Scalars['String'];
  uri: Scalars['String'];
  cost: Scalars['Int'];
  cooldown: Scalars['Int'];
  host?: Maybe<S_Player>;
  arenaResult: Array<S_ArenaResults>;
};


export type S_ArenaarenaResultArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_ArenaResults_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_ArenaResults_filter>;
};

export type S_ArenaResults = {
  id: Scalars['ID'];
  player: S_Player;
  arena: S_Arena;
  wins: Scalars['Int'];
  losses: Scalars['Int'];
};

export type S_ArenaResults_filter = {
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
  player_?: InputMaybe<S_Player_filter>;
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
  arena_?: InputMaybe<S_Arena_filter>;
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
  _change_block?: InputMaybe<S_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<S_ArenaResults_filter>>>;
  or?: InputMaybe<Array<InputMaybe<S_ArenaResults_filter>>>;
};

export type S_ArenaResults_orderBy =
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

export type S_Arena_filter = {
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
  host_?: InputMaybe<S_Player_filter>;
  arenaResult_?: InputMaybe<S_ArenaResults_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<S_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<S_Arena_filter>>>;
  or?: InputMaybe<Array<InputMaybe<S_Arena_filter>>>;
};

export type S_Arena_orderBy =
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

export type S_BasicCraft = {
  id: Scalars['ID'];
  slot: Scalars['String'];
  value: Scalars['Int'];
  cost: Scalars['Int'];
  oldName: Scalars['String'];
  newName: Scalars['String'];
  uri: Scalars['String'];
};

export type S_BasicCraft_filter = {
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
  _change_block?: InputMaybe<S_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<S_BasicCraft_filter>>>;
  or?: InputMaybe<Array<InputMaybe<S_BasicCraft_filter>>>;
};

export type S_BasicCraft_orderBy =
  | 'id'
  | 'slot'
  | 'value'
  | 'cost'
  | 'oldName'
  | 'newName'
  | 'uri';

export type S_BasicPotion = {
  id: Scalars['ID'];
  value: Scalars['Int'];
  cost: Scalars['Int'];
  type: Scalars['String'];
  name: Scalars['String'];
  uri: Scalars['String'];
  potionBalance: Array<S_BasicPotionBalance>;
};


export type S_BasicPotionpotionBalanceArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_BasicPotionBalance_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_BasicPotionBalance_filter>;
};

export type S_BasicPotionBalance = {
  id: Scalars['ID'];
  balance: Scalars['Int'];
  potion: S_BasicPotion;
  player: S_Player;
};

export type S_BasicPotionBalance_filter = {
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
  potion_?: InputMaybe<S_BasicPotion_filter>;
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
  player_?: InputMaybe<S_Player_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<S_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<S_BasicPotionBalance_filter>>>;
  or?: InputMaybe<Array<InputMaybe<S_BasicPotionBalance_filter>>>;
};

export type S_BasicPotionBalance_orderBy =
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

export type S_BasicPotion_filter = {
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
  potionBalance_?: InputMaybe<S_BasicPotionBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<S_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<S_BasicPotion_filter>>>;
  or?: InputMaybe<Array<InputMaybe<S_BasicPotion_filter>>>;
};

export type S_BasicPotion_orderBy =
  | 'id'
  | 'value'
  | 'cost'
  | 'type'
  | 'name'
  | 'uri'
  | 'potionBalance';

export type S_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type S_Block_height = {
  hash?: InputMaybe<Scalars['S_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type S_EquipCount = {
  id: Scalars['ID'];
  count: Scalars['Int'];
};

export type S_EquipCount_filter = {
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
  _change_block?: InputMaybe<S_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<S_EquipCount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<S_EquipCount_filter>>>;
};

export type S_EquipCount_orderBy =
  | 'id'
  | 'count';

export type S_Equipment = {
  id: Scalars['ID'];
  slot: Scalars['String'];
  rank: Scalars['Int'];
  value: Scalars['Int'];
  stat: Scalars['String'];
  player: S_Player;
  name: Scalars['String'];
  uri: Scalars['String'];
  isEquipped: Scalars['Boolean'];
};

export type S_EquipmentInStore = {
  id: Scalars['ID'];
  slot: Scalars['String'];
  value: Scalars['Int'];
  stat: Scalars['String'];
  cost: Scalars['Int'];
  name: Scalars['String'];
  uri: Scalars['String'];
};

export type S_EquipmentInStore_filter = {
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
  _change_block?: InputMaybe<S_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<S_EquipmentInStore_filter>>>;
  or?: InputMaybe<Array<InputMaybe<S_EquipmentInStore_filter>>>;
};

export type S_EquipmentInStore_orderBy =
  | 'id'
  | 'slot'
  | 'value'
  | 'stat'
  | 'cost'
  | 'name'
  | 'uri';

export type S_Equipment_filter = {
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
  player_?: InputMaybe<S_Player_filter>;
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
  _change_block?: InputMaybe<S_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<S_Equipment_filter>>>;
  or?: InputMaybe<Array<InputMaybe<S_Equipment_filter>>>;
};

export type S_Equipment_orderBy =
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

export type S_Listing = {
  id: Scalars['ID'];
  price: Scalars['BigInt'];
  seller: Scalars['String'];
  timestamp: Scalars['BigInt'];
  player: S_Player;
};

export type S_Listing_filter = {
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
  player_?: InputMaybe<S_Player_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<S_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<S_Listing_filter>>>;
  or?: InputMaybe<Array<InputMaybe<S_Listing_filter>>>;
};

export type S_Listing_orderBy =
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

export type S_MagicMonster = {
  id: Scalars['ID'];
  xpReward: Scalars['Int'];
  damage: Scalars['Int'];
  hp: Scalars['Int'];
  cooldown: Scalars['Int'];
  cost: Scalars['Int'];
  name: Scalars['String'];
  uri: Scalars['String'];
};

export type S_MagicMonster_filter = {
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
  _change_block?: InputMaybe<S_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<S_MagicMonster_filter>>>;
  or?: InputMaybe<Array<InputMaybe<S_MagicMonster_filter>>>;
};

export type S_MagicMonster_orderBy =
  | 'id'
  | 'xpReward'
  | 'damage'
  | 'hp'
  | 'cooldown'
  | 'cost'
  | 'name'
  | 'uri';

export type S_Monster = {
  id: Scalars['ID'];
  xpReward: Scalars['Int'];
  damage: Scalars['Int'];
  hp: Scalars['Int'];
  cooldown: Scalars['Int'];
  name: Scalars['String'];
  uri: Scalars['String'];
};

export type S_Monster_filter = {
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
  _change_block?: InputMaybe<S_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<S_Monster_filter>>>;
  or?: InputMaybe<Array<InputMaybe<S_Monster_filter>>>;
};

export type S_Monster_orderBy =
  | 'id'
  | 'xpReward'
  | 'damage'
  | 'hp'
  | 'cooldown'
  | 'name'
  | 'uri';

/** Defines the order direction, either ascending or descending */
export type S_OrderDirection =
  | 'asc'
  | 'desc';

export type S_Player = {
  id: Scalars['ID'];
  Player_id: Scalars['BigInt'];
  user: S_User;
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
  potionBalance: Array<S_BasicPotionBalance>;
  equipment: Array<S_Equipment>;
  arenaResult: Array<S_ArenaResults>;
};


export type S_PlayerpotionBalanceArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_BasicPotionBalance_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_BasicPotionBalance_filter>;
};


export type S_PlayerequipmentArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_Equipment_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_Equipment_filter>;
};


export type S_PlayerarenaResultArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_ArenaResults_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_ArenaResults_filter>;
};

export type S_Player_filter = {
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
  user_?: InputMaybe<S_User_filter>;
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
  potionBalance_?: InputMaybe<S_BasicPotionBalance_filter>;
  equipment_?: InputMaybe<S_Equipment_filter>;
  arenaResult_?: InputMaybe<S_ArenaResults_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<S_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<S_Player_filter>>>;
  or?: InputMaybe<Array<InputMaybe<S_Player_filter>>>;
};

export type S_Player_orderBy =
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
  | 'arenaResult';

export type Query = {
  S_user?: Maybe<S_User>;
  S_users: Array<S_User>;
  S_player?: Maybe<S_Player>;
  S_players: Array<S_Player>;
  S_equipment?: Maybe<S_Equipment>;
  S_equipments: Array<S_Equipment>;
  S_equipmentInStore?: Maybe<S_EquipmentInStore>;
  S_equipmentInStores: Array<S_EquipmentInStore>;
  S_basicCraft?: Maybe<S_BasicCraft>;
  S_basicCrafts: Array<S_BasicCraft>;
  S_equipCount?: Maybe<S_EquipCount>;
  S_equipCounts: Array<S_EquipCount>;
  S_monster?: Maybe<S_Monster>;
  S_monsters: Array<S_Monster>;
  S_magicMonster?: Maybe<S_MagicMonster>;
  S_magicMonsters: Array<S_MagicMonster>;
  S_basicPotion?: Maybe<S_BasicPotion>;
  S_basicPotions: Array<S_BasicPotion>;
  S_basicPotionBalance?: Maybe<S_BasicPotionBalance>;
  S_basicPotionBalances: Array<S_BasicPotionBalance>;
  S_arena?: Maybe<S_Arena>;
  S_arenas: Array<S_Arena>;
  S_arenaResults: Array<S_ArenaResults>;
  S_sale?: Maybe<S_Sale>;
  S_sales: Array<S_Sale>;
  S_listing?: Maybe<S_Listing>;
  S_listings: Array<S_Listing>;
  /** Access to subgraph metadata */
  S__meta?: Maybe<S__Meta_>;
};


export type QueryS_userArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_usersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_User_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_User_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_playerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_playersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_Player_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_Player_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_equipmentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_equipmentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_Equipment_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_Equipment_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_equipmentInStoreArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_equipmentInStoresArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_EquipmentInStore_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_EquipmentInStore_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_basicCraftArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_basicCraftsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_BasicCraft_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_BasicCraft_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_equipCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_equipCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_EquipCount_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_EquipCount_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_monsterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_monstersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_Monster_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_Monster_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_magicMonsterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_magicMonstersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_MagicMonster_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_MagicMonster_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_basicPotionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_basicPotionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_BasicPotion_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_BasicPotion_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_basicPotionBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_basicPotionBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_BasicPotionBalance_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_BasicPotionBalance_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_arenaArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_arenasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_Arena_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_Arena_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_arenaResultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_ArenaResults_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_ArenaResults_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_saleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_salesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_Sale_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_Sale_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_listingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS_listingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_Listing_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_Listing_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryS__metaArgs = {
  block?: InputMaybe<S_Block_height>;
};

export type S_Sale = {
  id: Scalars['ID'];
  price: Scalars['BigInt'];
  player: S_Player;
  seller: Scalars['String'];
  buyer: Scalars['String'];
  timestamp: Scalars['BigInt'];
  txHash: Scalars['String'];
};

export type S_Sale_filter = {
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
  player_?: InputMaybe<S_Player_filter>;
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
  _change_block?: InputMaybe<S_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<S_Sale_filter>>>;
  or?: InputMaybe<Array<InputMaybe<S_Sale_filter>>>;
};

export type S_Sale_orderBy =
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
  S_user?: Maybe<S_User>;
  S_users: Array<S_User>;
  S_player?: Maybe<S_Player>;
  S_players: Array<S_Player>;
  S_equipment?: Maybe<S_Equipment>;
  S_equipments: Array<S_Equipment>;
  S_equipmentInStore?: Maybe<S_EquipmentInStore>;
  S_equipmentInStores: Array<S_EquipmentInStore>;
  S_basicCraft?: Maybe<S_BasicCraft>;
  S_basicCrafts: Array<S_BasicCraft>;
  S_equipCount?: Maybe<S_EquipCount>;
  S_equipCounts: Array<S_EquipCount>;
  S_monster?: Maybe<S_Monster>;
  S_monsters: Array<S_Monster>;
  S_magicMonster?: Maybe<S_MagicMonster>;
  S_magicMonsters: Array<S_MagicMonster>;
  S_basicPotion?: Maybe<S_BasicPotion>;
  S_basicPotions: Array<S_BasicPotion>;
  S_basicPotionBalance?: Maybe<S_BasicPotionBalance>;
  S_basicPotionBalances: Array<S_BasicPotionBalance>;
  S_arena?: Maybe<S_Arena>;
  S_arenas: Array<S_Arena>;
  S_arenaResults: Array<S_ArenaResults>;
  S_sale?: Maybe<S_Sale>;
  S_sales: Array<S_Sale>;
  S_listing?: Maybe<S_Listing>;
  S_listings: Array<S_Listing>;
  /** Access to subgraph metadata */
  S__meta?: Maybe<S__Meta_>;
};


export type SubscriptionS_userArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_usersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_User_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_User_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_playerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_playersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_Player_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_Player_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_equipmentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_equipmentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_Equipment_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_Equipment_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_equipmentInStoreArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_equipmentInStoresArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_EquipmentInStore_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_EquipmentInStore_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_basicCraftArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_basicCraftsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_BasicCraft_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_BasicCraft_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_equipCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_equipCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_EquipCount_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_EquipCount_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_monsterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_monstersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_Monster_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_Monster_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_magicMonsterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_magicMonstersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_MagicMonster_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_MagicMonster_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_basicPotionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_basicPotionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_BasicPotion_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_BasicPotion_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_basicPotionBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_basicPotionBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_BasicPotionBalance_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_BasicPotionBalance_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_arenaArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_arenasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_Arena_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_Arena_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_arenaResultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_ArenaResults_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_ArenaResults_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_saleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_salesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_Sale_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_Sale_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_listingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS_listingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_Listing_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_Listing_filter>;
  block?: InputMaybe<S_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionS__metaArgs = {
  block?: InputMaybe<S_Block_height>;
};

export type S_User = {
  id: Scalars['ID'];
  gold: Scalars['Int'];
  gem: Scalars['Int'];
  players: Array<S_Player>;
};


export type S_UserplayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<S_Player_orderBy>;
  orderDirection?: InputMaybe<S_OrderDirection>;
  where?: InputMaybe<S_Player_filter>;
};

export type S_User_filter = {
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
  players_?: InputMaybe<S_Player_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<S_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<S_User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<S_User_filter>>>;
};

export type S_User_orderBy =
  | 'id'
  | 'gold'
  | 'gem'
  | 'players';

export type S__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['S_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type S__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: S__Block_;
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
  S_user: InContextSdkMethod<Query['S_user'], QueryS_userArgs, MeshContext>,
  /** null **/
  S_users: InContextSdkMethod<Query['S_users'], QueryS_usersArgs, MeshContext>,
  /** null **/
  S_player: InContextSdkMethod<Query['S_player'], QueryS_playerArgs, MeshContext>,
  /** null **/
  S_players: InContextSdkMethod<Query['S_players'], QueryS_playersArgs, MeshContext>,
  /** null **/
  S_equipment: InContextSdkMethod<Query['S_equipment'], QueryS_equipmentArgs, MeshContext>,
  /** null **/
  S_equipments: InContextSdkMethod<Query['S_equipments'], QueryS_equipmentsArgs, MeshContext>,
  /** null **/
  S_equipmentInStore: InContextSdkMethod<Query['S_equipmentInStore'], QueryS_equipmentInStoreArgs, MeshContext>,
  /** null **/
  S_equipmentInStores: InContextSdkMethod<Query['S_equipmentInStores'], QueryS_equipmentInStoresArgs, MeshContext>,
  /** null **/
  S_basicCraft: InContextSdkMethod<Query['S_basicCraft'], QueryS_basicCraftArgs, MeshContext>,
  /** null **/
  S_basicCrafts: InContextSdkMethod<Query['S_basicCrafts'], QueryS_basicCraftsArgs, MeshContext>,
  /** null **/
  S_equipCount: InContextSdkMethod<Query['S_equipCount'], QueryS_equipCountArgs, MeshContext>,
  /** null **/
  S_equipCounts: InContextSdkMethod<Query['S_equipCounts'], QueryS_equipCountsArgs, MeshContext>,
  /** null **/
  S_monster: InContextSdkMethod<Query['S_monster'], QueryS_monsterArgs, MeshContext>,
  /** null **/
  S_monsters: InContextSdkMethod<Query['S_monsters'], QueryS_monstersArgs, MeshContext>,
  /** null **/
  S_magicMonster: InContextSdkMethod<Query['S_magicMonster'], QueryS_magicMonsterArgs, MeshContext>,
  /** null **/
  S_magicMonsters: InContextSdkMethod<Query['S_magicMonsters'], QueryS_magicMonstersArgs, MeshContext>,
  /** null **/
  S_basicPotion: InContextSdkMethod<Query['S_basicPotion'], QueryS_basicPotionArgs, MeshContext>,
  /** null **/
  S_basicPotions: InContextSdkMethod<Query['S_basicPotions'], QueryS_basicPotionsArgs, MeshContext>,
  /** null **/
  S_basicPotionBalance: InContextSdkMethod<Query['S_basicPotionBalance'], QueryS_basicPotionBalanceArgs, MeshContext>,
  /** null **/
  S_basicPotionBalances: InContextSdkMethod<Query['S_basicPotionBalances'], QueryS_basicPotionBalancesArgs, MeshContext>,
  /** null **/
  S_arena: InContextSdkMethod<Query['S_arena'], QueryS_arenaArgs, MeshContext>,
  /** null **/
  S_arenas: InContextSdkMethod<Query['S_arenas'], QueryS_arenasArgs, MeshContext>,
  /** null **/
  S_arenaResults: InContextSdkMethod<Query['S_arenaResults'], QueryS_arenaResultsArgs, MeshContext>,
  /** null **/
  S_sale: InContextSdkMethod<Query['S_sale'], QueryS_saleArgs, MeshContext>,
  /** null **/
  S_sales: InContextSdkMethod<Query['S_sales'], QueryS_salesArgs, MeshContext>,
  /** null **/
  S_listing: InContextSdkMethod<Query['S_listing'], QueryS_listingArgs, MeshContext>,
  /** null **/
  S_listings: InContextSdkMethod<Query['S_listings'], QueryS_listingsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  S__meta: InContextSdkMethod<Query['S__meta'], QueryS__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  S_user: InContextSdkMethod<Subscription['S_user'], SubscriptionS_userArgs, MeshContext>,
  /** null **/
  S_users: InContextSdkMethod<Subscription['S_users'], SubscriptionS_usersArgs, MeshContext>,
  /** null **/
  S_player: InContextSdkMethod<Subscription['S_player'], SubscriptionS_playerArgs, MeshContext>,
  /** null **/
  S_players: InContextSdkMethod<Subscription['S_players'], SubscriptionS_playersArgs, MeshContext>,
  /** null **/
  S_equipment: InContextSdkMethod<Subscription['S_equipment'], SubscriptionS_equipmentArgs, MeshContext>,
  /** null **/
  S_equipments: InContextSdkMethod<Subscription['S_equipments'], SubscriptionS_equipmentsArgs, MeshContext>,
  /** null **/
  S_equipmentInStore: InContextSdkMethod<Subscription['S_equipmentInStore'], SubscriptionS_equipmentInStoreArgs, MeshContext>,
  /** null **/
  S_equipmentInStores: InContextSdkMethod<Subscription['S_equipmentInStores'], SubscriptionS_equipmentInStoresArgs, MeshContext>,
  /** null **/
  S_basicCraft: InContextSdkMethod<Subscription['S_basicCraft'], SubscriptionS_basicCraftArgs, MeshContext>,
  /** null **/
  S_basicCrafts: InContextSdkMethod<Subscription['S_basicCrafts'], SubscriptionS_basicCraftsArgs, MeshContext>,
  /** null **/
  S_equipCount: InContextSdkMethod<Subscription['S_equipCount'], SubscriptionS_equipCountArgs, MeshContext>,
  /** null **/
  S_equipCounts: InContextSdkMethod<Subscription['S_equipCounts'], SubscriptionS_equipCountsArgs, MeshContext>,
  /** null **/
  S_monster: InContextSdkMethod<Subscription['S_monster'], SubscriptionS_monsterArgs, MeshContext>,
  /** null **/
  S_monsters: InContextSdkMethod<Subscription['S_monsters'], SubscriptionS_monstersArgs, MeshContext>,
  /** null **/
  S_magicMonster: InContextSdkMethod<Subscription['S_magicMonster'], SubscriptionS_magicMonsterArgs, MeshContext>,
  /** null **/
  S_magicMonsters: InContextSdkMethod<Subscription['S_magicMonsters'], SubscriptionS_magicMonstersArgs, MeshContext>,
  /** null **/
  S_basicPotion: InContextSdkMethod<Subscription['S_basicPotion'], SubscriptionS_basicPotionArgs, MeshContext>,
  /** null **/
  S_basicPotions: InContextSdkMethod<Subscription['S_basicPotions'], SubscriptionS_basicPotionsArgs, MeshContext>,
  /** null **/
  S_basicPotionBalance: InContextSdkMethod<Subscription['S_basicPotionBalance'], SubscriptionS_basicPotionBalanceArgs, MeshContext>,
  /** null **/
  S_basicPotionBalances: InContextSdkMethod<Subscription['S_basicPotionBalances'], SubscriptionS_basicPotionBalancesArgs, MeshContext>,
  /** null **/
  S_arena: InContextSdkMethod<Subscription['S_arena'], SubscriptionS_arenaArgs, MeshContext>,
  /** null **/
  S_arenas: InContextSdkMethod<Subscription['S_arenas'], SubscriptionS_arenasArgs, MeshContext>,
  /** null **/
  S_arenaResults: InContextSdkMethod<Subscription['S_arenaResults'], SubscriptionS_arenaResultsArgs, MeshContext>,
  /** null **/
  S_sale: InContextSdkMethod<Subscription['S_sale'], SubscriptionS_saleArgs, MeshContext>,
  /** null **/
  S_sales: InContextSdkMethod<Subscription['S_sales'], SubscriptionS_salesArgs, MeshContext>,
  /** null **/
  S_listing: InContextSdkMethod<Subscription['S_listing'], SubscriptionS_listingArgs, MeshContext>,
  /** null **/
  S_listings: InContextSdkMethod<Subscription['S_listings'], SubscriptionS_listingsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  S__meta: InContextSdkMethod<Subscription['S__meta'], SubscriptionS__metaArgs, MeshContext>
  };

  export type Context = {
      ["Scroll"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
