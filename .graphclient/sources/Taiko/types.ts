// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace TaikoTypes {
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
  T_BigDecimal: any;
  BigInt: any;
  T_Bytes: any;
};

export type T_Arena = {
  id: Scalars['ID'];
  name: Scalars['String'];
  uri: Scalars['String'];
  cost: Scalars['Int'];
  cooldown: Scalars['Int'];
  host?: Maybe<T_Player>;
  arenaResult: Array<T_ArenaResults>;
};


export type T_ArenaarenaResultArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_ArenaResults_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_ArenaResults_filter>;
};

export type T_ArenaResults = {
  id: Scalars['ID'];
  player: T_Player;
  arena: T_Arena;
  wins: Scalars['Int'];
  losses: Scalars['Int'];
};

export type T_ArenaResults_filter = {
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
  player_?: InputMaybe<T_Player_filter>;
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
  arena_?: InputMaybe<T_Arena_filter>;
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
  _change_block?: InputMaybe<T_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<T_ArenaResults_filter>>>;
  or?: InputMaybe<Array<InputMaybe<T_ArenaResults_filter>>>;
};

export type T_ArenaResults_orderBy =
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

export type T_Arena_filter = {
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
  host_?: InputMaybe<T_Player_filter>;
  arenaResult_?: InputMaybe<T_ArenaResults_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<T_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<T_Arena_filter>>>;
  or?: InputMaybe<Array<InputMaybe<T_Arena_filter>>>;
};

export type T_Arena_orderBy =
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

export type T_BasicCraft = {
  id: Scalars['ID'];
  slot: Scalars['String'];
  value: Scalars['Int'];
  cost: Scalars['Int'];
  oldName: Scalars['String'];
  newName: Scalars['String'];
  uri: Scalars['String'];
};

export type T_BasicCraft_filter = {
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
  _change_block?: InputMaybe<T_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<T_BasicCraft_filter>>>;
  or?: InputMaybe<Array<InputMaybe<T_BasicCraft_filter>>>;
};

export type T_BasicCraft_orderBy =
  | 'id'
  | 'slot'
  | 'value'
  | 'cost'
  | 'oldName'
  | 'newName'
  | 'uri';

export type T_BasicPotion = {
  id: Scalars['ID'];
  value: Scalars['Int'];
  cost: Scalars['Int'];
  type: Scalars['String'];
  name: Scalars['String'];
  uri: Scalars['String'];
  potionBalance: Array<T_BasicPotionBalance>;
};


export type T_BasicPotionpotionBalanceArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_BasicPotionBalance_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_BasicPotionBalance_filter>;
};

export type T_BasicPotionBalance = {
  id: Scalars['ID'];
  balance: Scalars['Int'];
  potion: T_BasicPotion;
  player: T_Player;
};

export type T_BasicPotionBalance_filter = {
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
  potion_?: InputMaybe<T_BasicPotion_filter>;
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
  player_?: InputMaybe<T_Player_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<T_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<T_BasicPotionBalance_filter>>>;
  or?: InputMaybe<Array<InputMaybe<T_BasicPotionBalance_filter>>>;
};

export type T_BasicPotionBalance_orderBy =
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

export type T_BasicPotion_filter = {
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
  potionBalance_?: InputMaybe<T_BasicPotionBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<T_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<T_BasicPotion_filter>>>;
  or?: InputMaybe<Array<InputMaybe<T_BasicPotion_filter>>>;
};

export type T_BasicPotion_orderBy =
  | 'id'
  | 'value'
  | 'cost'
  | 'type'
  | 'name'
  | 'uri'
  | 'potionBalance';

export type T_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type T_Block_height = {
  hash?: InputMaybe<Scalars['T_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type T_EquipCount = {
  id: Scalars['ID'];
  count: Scalars['Int'];
};

export type T_EquipCount_filter = {
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
  _change_block?: InputMaybe<T_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<T_EquipCount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<T_EquipCount_filter>>>;
};

export type T_EquipCount_orderBy =
  | 'id'
  | 'count';

export type T_Equipment = {
  id: Scalars['ID'];
  slot: Scalars['String'];
  rank: Scalars['Int'];
  value: Scalars['Int'];
  stat: Scalars['String'];
  player: T_Player;
  name: Scalars['String'];
  uri: Scalars['String'];
  isEquipped: Scalars['Boolean'];
};

export type T_EquipmentInStore = {
  id: Scalars['ID'];
  slot: Scalars['String'];
  value: Scalars['Int'];
  stat: Scalars['String'];
  cost: Scalars['Int'];
  name: Scalars['String'];
  uri: Scalars['String'];
};

export type T_EquipmentInStore_filter = {
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
  _change_block?: InputMaybe<T_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<T_EquipmentInStore_filter>>>;
  or?: InputMaybe<Array<InputMaybe<T_EquipmentInStore_filter>>>;
};

export type T_EquipmentInStore_orderBy =
  | 'id'
  | 'slot'
  | 'value'
  | 'stat'
  | 'cost'
  | 'name'
  | 'uri';

export type T_Equipment_filter = {
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
  player_?: InputMaybe<T_Player_filter>;
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
  _change_block?: InputMaybe<T_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<T_Equipment_filter>>>;
  or?: InputMaybe<Array<InputMaybe<T_Equipment_filter>>>;
};

export type T_Equipment_orderBy =
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

export type T_Listing = {
  id: Scalars['ID'];
  price: Scalars['BigInt'];
  seller: Scalars['String'];
  timestamp: Scalars['BigInt'];
  player: T_Player;
};

export type T_Listing_filter = {
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
  player_?: InputMaybe<T_Player_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<T_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<T_Listing_filter>>>;
  or?: InputMaybe<Array<InputMaybe<T_Listing_filter>>>;
};

export type T_Listing_orderBy =
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

export type T_MagicMonster = {
  id: Scalars['ID'];
  xpReward: Scalars['Int'];
  damage: Scalars['Int'];
  hp: Scalars['Int'];
  cooldown: Scalars['Int'];
  cost: Scalars['Int'];
  name: Scalars['String'];
  uri: Scalars['String'];
};

export type T_MagicMonster_filter = {
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
  _change_block?: InputMaybe<T_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<T_MagicMonster_filter>>>;
  or?: InputMaybe<Array<InputMaybe<T_MagicMonster_filter>>>;
};

export type T_MagicMonster_orderBy =
  | 'id'
  | 'xpReward'
  | 'damage'
  | 'hp'
  | 'cooldown'
  | 'cost'
  | 'name'
  | 'uri';

export type T_Monster = {
  id: Scalars['ID'];
  xpReward: Scalars['Int'];
  damage: Scalars['Int'];
  hp: Scalars['Int'];
  cooldown: Scalars['Int'];
  name: Scalars['String'];
  uri: Scalars['String'];
};

export type T_Monster_filter = {
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
  _change_block?: InputMaybe<T_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<T_Monster_filter>>>;
  or?: InputMaybe<Array<InputMaybe<T_Monster_filter>>>;
};

export type T_Monster_orderBy =
  | 'id'
  | 'xpReward'
  | 'damage'
  | 'hp'
  | 'cooldown'
  | 'name'
  | 'uri';

/** Defines the order direction, either ascending or descending */
export type T_OrderDirection =
  | 'asc'
  | 'desc';

export type T_Player = {
  id: Scalars['ID'];
  Player_id: Scalars['BigInt'];
  user: T_User;
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
  potionBalance: Array<T_BasicPotionBalance>;
  equipment: Array<T_Equipment>;
  arenaResult: Array<T_ArenaResults>;
};


export type T_PlayerpotionBalanceArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_BasicPotionBalance_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_BasicPotionBalance_filter>;
};


export type T_PlayerequipmentArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_Equipment_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_Equipment_filter>;
};


export type T_PlayerarenaResultArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_ArenaResults_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_ArenaResults_filter>;
};

export type T_Player_filter = {
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
  user_?: InputMaybe<T_User_filter>;
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
  potionBalance_?: InputMaybe<T_BasicPotionBalance_filter>;
  equipment_?: InputMaybe<T_Equipment_filter>;
  arenaResult_?: InputMaybe<T_ArenaResults_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<T_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<T_Player_filter>>>;
  or?: InputMaybe<Array<InputMaybe<T_Player_filter>>>;
};

export type T_Player_orderBy =
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
  T_user?: Maybe<T_User>;
  T_users: Array<T_User>;
  T_player?: Maybe<T_Player>;
  T_players: Array<T_Player>;
  T_equipment?: Maybe<T_Equipment>;
  T_equipments: Array<T_Equipment>;
  T_equipmentInStore?: Maybe<T_EquipmentInStore>;
  T_equipmentInStores: Array<T_EquipmentInStore>;
  T_basicCraft?: Maybe<T_BasicCraft>;
  T_basicCrafts: Array<T_BasicCraft>;
  T_equipCount?: Maybe<T_EquipCount>;
  T_equipCounts: Array<T_EquipCount>;
  T_monster?: Maybe<T_Monster>;
  T_monsters: Array<T_Monster>;
  T_magicMonster?: Maybe<T_MagicMonster>;
  T_magicMonsters: Array<T_MagicMonster>;
  T_basicPotion?: Maybe<T_BasicPotion>;
  T_basicPotions: Array<T_BasicPotion>;
  T_basicPotionBalance?: Maybe<T_BasicPotionBalance>;
  T_basicPotionBalances: Array<T_BasicPotionBalance>;
  T_arena?: Maybe<T_Arena>;
  T_arenas: Array<T_Arena>;
  T_arenaResults: Array<T_ArenaResults>;
  T_sale?: Maybe<T_Sale>;
  T_sales: Array<T_Sale>;
  T_listing?: Maybe<T_Listing>;
  T_listings: Array<T_Listing>;
  /** Access to subgraph metadata */
  T__meta?: Maybe<T__Meta_>;
};


export type QueryT_userArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_usersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_User_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_User_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_playerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_playersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_Player_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_Player_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_equipmentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_equipmentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_Equipment_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_Equipment_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_equipmentInStoreArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_equipmentInStoresArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_EquipmentInStore_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_EquipmentInStore_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_basicCraftArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_basicCraftsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_BasicCraft_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_BasicCraft_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_equipCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_equipCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_EquipCount_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_EquipCount_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_monsterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_monstersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_Monster_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_Monster_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_magicMonsterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_magicMonstersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_MagicMonster_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_MagicMonster_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_basicPotionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_basicPotionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_BasicPotion_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_BasicPotion_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_basicPotionBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_basicPotionBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_BasicPotionBalance_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_BasicPotionBalance_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_arenaArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_arenasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_Arena_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_Arena_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_arenaResultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_ArenaResults_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_ArenaResults_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_saleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_salesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_Sale_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_Sale_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_listingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT_listingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_Listing_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_Listing_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryT__metaArgs = {
  block?: InputMaybe<T_Block_height>;
};

export type T_Sale = {
  id: Scalars['ID'];
  price: Scalars['BigInt'];
  player: T_Player;
  seller: Scalars['String'];
  buyer: Scalars['String'];
  timestamp: Scalars['BigInt'];
  txHash: Scalars['String'];
};

export type T_Sale_filter = {
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
  player_?: InputMaybe<T_Player_filter>;
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
  _change_block?: InputMaybe<T_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<T_Sale_filter>>>;
  or?: InputMaybe<Array<InputMaybe<T_Sale_filter>>>;
};

export type T_Sale_orderBy =
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
  T_user?: Maybe<T_User>;
  T_users: Array<T_User>;
  T_player?: Maybe<T_Player>;
  T_players: Array<T_Player>;
  T_equipment?: Maybe<T_Equipment>;
  T_equipments: Array<T_Equipment>;
  T_equipmentInStore?: Maybe<T_EquipmentInStore>;
  T_equipmentInStores: Array<T_EquipmentInStore>;
  T_basicCraft?: Maybe<T_BasicCraft>;
  T_basicCrafts: Array<T_BasicCraft>;
  T_equipCount?: Maybe<T_EquipCount>;
  T_equipCounts: Array<T_EquipCount>;
  T_monster?: Maybe<T_Monster>;
  T_monsters: Array<T_Monster>;
  T_magicMonster?: Maybe<T_MagicMonster>;
  T_magicMonsters: Array<T_MagicMonster>;
  T_basicPotion?: Maybe<T_BasicPotion>;
  T_basicPotions: Array<T_BasicPotion>;
  T_basicPotionBalance?: Maybe<T_BasicPotionBalance>;
  T_basicPotionBalances: Array<T_BasicPotionBalance>;
  T_arena?: Maybe<T_Arena>;
  T_arenas: Array<T_Arena>;
  T_arenaResults: Array<T_ArenaResults>;
  T_sale?: Maybe<T_Sale>;
  T_sales: Array<T_Sale>;
  T_listing?: Maybe<T_Listing>;
  T_listings: Array<T_Listing>;
  /** Access to subgraph metadata */
  T__meta?: Maybe<T__Meta_>;
};


export type SubscriptionT_userArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_usersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_User_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_User_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_playerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_playersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_Player_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_Player_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_equipmentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_equipmentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_Equipment_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_Equipment_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_equipmentInStoreArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_equipmentInStoresArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_EquipmentInStore_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_EquipmentInStore_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_basicCraftArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_basicCraftsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_BasicCraft_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_BasicCraft_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_equipCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_equipCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_EquipCount_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_EquipCount_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_monsterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_monstersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_Monster_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_Monster_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_magicMonsterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_magicMonstersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_MagicMonster_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_MagicMonster_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_basicPotionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_basicPotionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_BasicPotion_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_BasicPotion_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_basicPotionBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_basicPotionBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_BasicPotionBalance_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_BasicPotionBalance_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_arenaArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_arenasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_Arena_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_Arena_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_arenaResultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_ArenaResults_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_ArenaResults_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_saleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_salesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_Sale_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_Sale_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_listingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT_listingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_Listing_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_Listing_filter>;
  block?: InputMaybe<T_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionT__metaArgs = {
  block?: InputMaybe<T_Block_height>;
};

export type T_User = {
  id: Scalars['ID'];
  gold: Scalars['Int'];
  gem: Scalars['Int'];
  players: Array<T_Player>;
};


export type T_UserplayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<T_Player_orderBy>;
  orderDirection?: InputMaybe<T_OrderDirection>;
  where?: InputMaybe<T_Player_filter>;
};

export type T_User_filter = {
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
  players_?: InputMaybe<T_Player_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<T_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<T_User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<T_User_filter>>>;
};

export type T_User_orderBy =
  | 'id'
  | 'gold'
  | 'gem'
  | 'players';

export type T__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['T_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type T__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: T__Block_;
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
  T_user: InContextSdkMethod<Query['T_user'], QueryT_userArgs, MeshContext>,
  /** null **/
  T_users: InContextSdkMethod<Query['T_users'], QueryT_usersArgs, MeshContext>,
  /** null **/
  T_player: InContextSdkMethod<Query['T_player'], QueryT_playerArgs, MeshContext>,
  /** null **/
  T_players: InContextSdkMethod<Query['T_players'], QueryT_playersArgs, MeshContext>,
  /** null **/
  T_equipment: InContextSdkMethod<Query['T_equipment'], QueryT_equipmentArgs, MeshContext>,
  /** null **/
  T_equipments: InContextSdkMethod<Query['T_equipments'], QueryT_equipmentsArgs, MeshContext>,
  /** null **/
  T_equipmentInStore: InContextSdkMethod<Query['T_equipmentInStore'], QueryT_equipmentInStoreArgs, MeshContext>,
  /** null **/
  T_equipmentInStores: InContextSdkMethod<Query['T_equipmentInStores'], QueryT_equipmentInStoresArgs, MeshContext>,
  /** null **/
  T_basicCraft: InContextSdkMethod<Query['T_basicCraft'], QueryT_basicCraftArgs, MeshContext>,
  /** null **/
  T_basicCrafts: InContextSdkMethod<Query['T_basicCrafts'], QueryT_basicCraftsArgs, MeshContext>,
  /** null **/
  T_equipCount: InContextSdkMethod<Query['T_equipCount'], QueryT_equipCountArgs, MeshContext>,
  /** null **/
  T_equipCounts: InContextSdkMethod<Query['T_equipCounts'], QueryT_equipCountsArgs, MeshContext>,
  /** null **/
  T_monster: InContextSdkMethod<Query['T_monster'], QueryT_monsterArgs, MeshContext>,
  /** null **/
  T_monsters: InContextSdkMethod<Query['T_monsters'], QueryT_monstersArgs, MeshContext>,
  /** null **/
  T_magicMonster: InContextSdkMethod<Query['T_magicMonster'], QueryT_magicMonsterArgs, MeshContext>,
  /** null **/
  T_magicMonsters: InContextSdkMethod<Query['T_magicMonsters'], QueryT_magicMonstersArgs, MeshContext>,
  /** null **/
  T_basicPotion: InContextSdkMethod<Query['T_basicPotion'], QueryT_basicPotionArgs, MeshContext>,
  /** null **/
  T_basicPotions: InContextSdkMethod<Query['T_basicPotions'], QueryT_basicPotionsArgs, MeshContext>,
  /** null **/
  T_basicPotionBalance: InContextSdkMethod<Query['T_basicPotionBalance'], QueryT_basicPotionBalanceArgs, MeshContext>,
  /** null **/
  T_basicPotionBalances: InContextSdkMethod<Query['T_basicPotionBalances'], QueryT_basicPotionBalancesArgs, MeshContext>,
  /** null **/
  T_arena: InContextSdkMethod<Query['T_arena'], QueryT_arenaArgs, MeshContext>,
  /** null **/
  T_arenas: InContextSdkMethod<Query['T_arenas'], QueryT_arenasArgs, MeshContext>,
  /** null **/
  T_arenaResults: InContextSdkMethod<Query['T_arenaResults'], QueryT_arenaResultsArgs, MeshContext>,
  /** null **/
  T_sale: InContextSdkMethod<Query['T_sale'], QueryT_saleArgs, MeshContext>,
  /** null **/
  T_sales: InContextSdkMethod<Query['T_sales'], QueryT_salesArgs, MeshContext>,
  /** null **/
  T_listing: InContextSdkMethod<Query['T_listing'], QueryT_listingArgs, MeshContext>,
  /** null **/
  T_listings: InContextSdkMethod<Query['T_listings'], QueryT_listingsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  T__meta: InContextSdkMethod<Query['T__meta'], QueryT__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  T_user: InContextSdkMethod<Subscription['T_user'], SubscriptionT_userArgs, MeshContext>,
  /** null **/
  T_users: InContextSdkMethod<Subscription['T_users'], SubscriptionT_usersArgs, MeshContext>,
  /** null **/
  T_player: InContextSdkMethod<Subscription['T_player'], SubscriptionT_playerArgs, MeshContext>,
  /** null **/
  T_players: InContextSdkMethod<Subscription['T_players'], SubscriptionT_playersArgs, MeshContext>,
  /** null **/
  T_equipment: InContextSdkMethod<Subscription['T_equipment'], SubscriptionT_equipmentArgs, MeshContext>,
  /** null **/
  T_equipments: InContextSdkMethod<Subscription['T_equipments'], SubscriptionT_equipmentsArgs, MeshContext>,
  /** null **/
  T_equipmentInStore: InContextSdkMethod<Subscription['T_equipmentInStore'], SubscriptionT_equipmentInStoreArgs, MeshContext>,
  /** null **/
  T_equipmentInStores: InContextSdkMethod<Subscription['T_equipmentInStores'], SubscriptionT_equipmentInStoresArgs, MeshContext>,
  /** null **/
  T_basicCraft: InContextSdkMethod<Subscription['T_basicCraft'], SubscriptionT_basicCraftArgs, MeshContext>,
  /** null **/
  T_basicCrafts: InContextSdkMethod<Subscription['T_basicCrafts'], SubscriptionT_basicCraftsArgs, MeshContext>,
  /** null **/
  T_equipCount: InContextSdkMethod<Subscription['T_equipCount'], SubscriptionT_equipCountArgs, MeshContext>,
  /** null **/
  T_equipCounts: InContextSdkMethod<Subscription['T_equipCounts'], SubscriptionT_equipCountsArgs, MeshContext>,
  /** null **/
  T_monster: InContextSdkMethod<Subscription['T_monster'], SubscriptionT_monsterArgs, MeshContext>,
  /** null **/
  T_monsters: InContextSdkMethod<Subscription['T_monsters'], SubscriptionT_monstersArgs, MeshContext>,
  /** null **/
  T_magicMonster: InContextSdkMethod<Subscription['T_magicMonster'], SubscriptionT_magicMonsterArgs, MeshContext>,
  /** null **/
  T_magicMonsters: InContextSdkMethod<Subscription['T_magicMonsters'], SubscriptionT_magicMonstersArgs, MeshContext>,
  /** null **/
  T_basicPotion: InContextSdkMethod<Subscription['T_basicPotion'], SubscriptionT_basicPotionArgs, MeshContext>,
  /** null **/
  T_basicPotions: InContextSdkMethod<Subscription['T_basicPotions'], SubscriptionT_basicPotionsArgs, MeshContext>,
  /** null **/
  T_basicPotionBalance: InContextSdkMethod<Subscription['T_basicPotionBalance'], SubscriptionT_basicPotionBalanceArgs, MeshContext>,
  /** null **/
  T_basicPotionBalances: InContextSdkMethod<Subscription['T_basicPotionBalances'], SubscriptionT_basicPotionBalancesArgs, MeshContext>,
  /** null **/
  T_arena: InContextSdkMethod<Subscription['T_arena'], SubscriptionT_arenaArgs, MeshContext>,
  /** null **/
  T_arenas: InContextSdkMethod<Subscription['T_arenas'], SubscriptionT_arenasArgs, MeshContext>,
  /** null **/
  T_arenaResults: InContextSdkMethod<Subscription['T_arenaResults'], SubscriptionT_arenaResultsArgs, MeshContext>,
  /** null **/
  T_sale: InContextSdkMethod<Subscription['T_sale'], SubscriptionT_saleArgs, MeshContext>,
  /** null **/
  T_sales: InContextSdkMethod<Subscription['T_sales'], SubscriptionT_salesArgs, MeshContext>,
  /** null **/
  T_listing: InContextSdkMethod<Subscription['T_listing'], SubscriptionT_listingArgs, MeshContext>,
  /** null **/
  T_listings: InContextSdkMethod<Subscription['T_listings'], SubscriptionT_listingsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  T__meta: InContextSdkMethod<Subscription['T__meta'], SubscriptionT__metaArgs, MeshContext>
  };

  export type Context = {
      ["Taiko"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
