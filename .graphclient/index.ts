// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import PrefixTransform from "@graphql-mesh/transform-prefix";
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { TaikoTypes } from './sources/Taiko/types';
import type { ScrollTypes } from './sources/Scroll/types';
import type { ArbitrumTypes } from './sources/Arbitrum/types';
import * as importedModule$0 from "./sources/Taiko/introspectionSchema";
import * as importedModule$1 from "./sources/Scroll/introspectionSchema";
import * as importedModule$2 from "./sources/Arbitrum/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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
  S_BigDecimal: any;
  S_Bytes: any;
  S_Int8: any;
  A_BigDecimal: any;
  A_Bytes: any;
  A_Int8: any;
};

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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  T_Arena: ResolverTypeWrapper<T_Arena>;
  T_ArenaResults: ResolverTypeWrapper<T_ArenaResults>;
  T_ArenaResults_filter: T_ArenaResults_filter;
  T_ArenaResults_orderBy: T_ArenaResults_orderBy;
  T_Arena_filter: T_Arena_filter;
  T_Arena_orderBy: T_Arena_orderBy;
  T_BasicCraft: ResolverTypeWrapper<T_BasicCraft>;
  T_BasicCraft_filter: T_BasicCraft_filter;
  T_BasicCraft_orderBy: T_BasicCraft_orderBy;
  T_BasicPotion: ResolverTypeWrapper<T_BasicPotion>;
  T_BasicPotionBalance: ResolverTypeWrapper<T_BasicPotionBalance>;
  T_BasicPotionBalance_filter: T_BasicPotionBalance_filter;
  T_BasicPotionBalance_orderBy: T_BasicPotionBalance_orderBy;
  T_BasicPotion_filter: T_BasicPotion_filter;
  T_BasicPotion_orderBy: T_BasicPotion_orderBy;
  T_BigDecimal: ResolverTypeWrapper<Scalars['T_BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  T_BlockChangedFilter: T_BlockChangedFilter;
  T_Block_height: T_Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  T_Bytes: ResolverTypeWrapper<Scalars['T_Bytes']>;
  T_EquipCount: ResolverTypeWrapper<T_EquipCount>;
  T_EquipCount_filter: T_EquipCount_filter;
  T_EquipCount_orderBy: T_EquipCount_orderBy;
  T_Equipment: ResolverTypeWrapper<T_Equipment>;
  T_EquipmentInStore: ResolverTypeWrapper<T_EquipmentInStore>;
  T_EquipmentInStore_filter: T_EquipmentInStore_filter;
  T_EquipmentInStore_orderBy: T_EquipmentInStore_orderBy;
  T_Equipment_filter: T_Equipment_filter;
  T_Equipment_orderBy: T_Equipment_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  T_Listing: ResolverTypeWrapper<T_Listing>;
  T_Listing_filter: T_Listing_filter;
  T_Listing_orderBy: T_Listing_orderBy;
  T_MagicMonster: ResolverTypeWrapper<T_MagicMonster>;
  T_MagicMonster_filter: T_MagicMonster_filter;
  T_MagicMonster_orderBy: T_MagicMonster_orderBy;
  T_Monster: ResolverTypeWrapper<T_Monster>;
  T_Monster_filter: T_Monster_filter;
  T_Monster_orderBy: T_Monster_orderBy;
  T_OrderDirection: T_OrderDirection;
  T_Player: ResolverTypeWrapper<T_Player>;
  T_Player_filter: T_Player_filter;
  T_Player_orderBy: T_Player_orderBy;
  T_Sale: ResolverTypeWrapper<T_Sale>;
  T_Sale_filter: T_Sale_filter;
  T_Sale_orderBy: T_Sale_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  T_User: ResolverTypeWrapper<T_User>;
  T_User_filter: T_User_filter;
  T_User_orderBy: T_User_orderBy;
  T__Block_: ResolverTypeWrapper<T__Block_>;
  T__Meta_: ResolverTypeWrapper<T__Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
  S_Arena: ResolverTypeWrapper<S_Arena>;
  S_ArenaResults: ResolverTypeWrapper<S_ArenaResults>;
  S_ArenaResults_filter: S_ArenaResults_filter;
  S_ArenaResults_orderBy: S_ArenaResults_orderBy;
  S_Arena_filter: S_Arena_filter;
  S_Arena_orderBy: S_Arena_orderBy;
  S_BasicCraft: ResolverTypeWrapper<S_BasicCraft>;
  S_BasicCraft_filter: S_BasicCraft_filter;
  S_BasicCraft_orderBy: S_BasicCraft_orderBy;
  S_BasicPotion: ResolverTypeWrapper<S_BasicPotion>;
  S_BasicPotionBalance: ResolverTypeWrapper<S_BasicPotionBalance>;
  S_BasicPotionBalance_filter: S_BasicPotionBalance_filter;
  S_BasicPotionBalance_orderBy: S_BasicPotionBalance_orderBy;
  S_BasicPotion_filter: S_BasicPotion_filter;
  S_BasicPotion_orderBy: S_BasicPotion_orderBy;
  S_BigDecimal: ResolverTypeWrapper<Scalars['S_BigDecimal']>;
  S_BlockChangedFilter: S_BlockChangedFilter;
  S_Block_height: S_Block_height;
  S_Bytes: ResolverTypeWrapper<Scalars['S_Bytes']>;
  S_EquipCount: ResolverTypeWrapper<S_EquipCount>;
  S_EquipCount_filter: S_EquipCount_filter;
  S_EquipCount_orderBy: S_EquipCount_orderBy;
  S_Equipment: ResolverTypeWrapper<S_Equipment>;
  S_EquipmentInStore: ResolverTypeWrapper<S_EquipmentInStore>;
  S_EquipmentInStore_filter: S_EquipmentInStore_filter;
  S_EquipmentInStore_orderBy: S_EquipmentInStore_orderBy;
  S_Equipment_filter: S_Equipment_filter;
  S_Equipment_orderBy: S_Equipment_orderBy;
  S_Int8: ResolverTypeWrapper<Scalars['S_Int8']>;
  S_Listing: ResolverTypeWrapper<S_Listing>;
  S_Listing_filter: S_Listing_filter;
  S_Listing_orderBy: S_Listing_orderBy;
  S_MagicMonster: ResolverTypeWrapper<S_MagicMonster>;
  S_MagicMonster_filter: S_MagicMonster_filter;
  S_MagicMonster_orderBy: S_MagicMonster_orderBy;
  S_Monster: ResolverTypeWrapper<S_Monster>;
  S_Monster_filter: S_Monster_filter;
  S_Monster_orderBy: S_Monster_orderBy;
  S_OrderDirection: S_OrderDirection;
  S_Player: ResolverTypeWrapper<S_Player>;
  S_Player_filter: S_Player_filter;
  S_Player_orderBy: S_Player_orderBy;
  S_Sale: ResolverTypeWrapper<S_Sale>;
  S_Sale_filter: S_Sale_filter;
  S_Sale_orderBy: S_Sale_orderBy;
  S_User: ResolverTypeWrapper<S_User>;
  S_User_filter: S_User_filter;
  S_User_orderBy: S_User_orderBy;
  S__Block_: ResolverTypeWrapper<S__Block_>;
  S__Meta_: ResolverTypeWrapper<S__Meta_>;
  A_AdvancedCraft: ResolverTypeWrapper<A_AdvancedCraft>;
  A_AdvancedCraft_filter: A_AdvancedCraft_filter;
  A_AdvancedCraft_orderBy: A_AdvancedCraft_orderBy;
  A_Arena: ResolverTypeWrapper<A_Arena>;
  A_ArenaResults: ResolverTypeWrapper<A_ArenaResults>;
  A_ArenaResults_filter: A_ArenaResults_filter;
  A_ArenaResults_orderBy: A_ArenaResults_orderBy;
  A_Arena_filter: A_Arena_filter;
  A_Arena_orderBy: A_Arena_orderBy;
  A_BasicCraft: ResolverTypeWrapper<A_BasicCraft>;
  A_BasicCraft_filter: A_BasicCraft_filter;
  A_BasicCraft_orderBy: A_BasicCraft_orderBy;
  A_BasicPotion: ResolverTypeWrapper<A_BasicPotion>;
  A_BasicPotionBalance: ResolverTypeWrapper<A_BasicPotionBalance>;
  A_BasicPotionBalance_filter: A_BasicPotionBalance_filter;
  A_BasicPotionBalance_orderBy: A_BasicPotionBalance_orderBy;
  A_BasicPotion_filter: A_BasicPotion_filter;
  A_BasicPotion_orderBy: A_BasicPotion_orderBy;
  A_BigDecimal: ResolverTypeWrapper<Scalars['A_BigDecimal']>;
  A_BlockChangedFilter: A_BlockChangedFilter;
  A_Block_height: A_Block_height;
  A_Bytes: ResolverTypeWrapper<Scalars['A_Bytes']>;
  A_EquipCount: ResolverTypeWrapper<A_EquipCount>;
  A_EquipCount_filter: A_EquipCount_filter;
  A_EquipCount_orderBy: A_EquipCount_orderBy;
  A_Equipment: ResolverTypeWrapper<A_Equipment>;
  A_EquipmentInStore: ResolverTypeWrapper<A_EquipmentInStore>;
  A_EquipmentInStore_filter: A_EquipmentInStore_filter;
  A_EquipmentInStore_orderBy: A_EquipmentInStore_orderBy;
  A_Equipment_filter: A_Equipment_filter;
  A_Equipment_orderBy: A_Equipment_orderBy;
  A_Int8: ResolverTypeWrapper<Scalars['A_Int8']>;
  A_Listing: ResolverTypeWrapper<A_Listing>;
  A_Listing_filter: A_Listing_filter;
  A_Listing_orderBy: A_Listing_orderBy;
  A_MagicMonster: ResolverTypeWrapper<A_MagicMonster>;
  A_MagicMonster_filter: A_MagicMonster_filter;
  A_MagicMonster_orderBy: A_MagicMonster_orderBy;
  A_Monster: ResolverTypeWrapper<A_Monster>;
  A_Monster_filter: A_Monster_filter;
  A_Monster_orderBy: A_Monster_orderBy;
  A_OrderDirection: A_OrderDirection;
  A_Player: ResolverTypeWrapper<A_Player>;
  A_Player_filter: A_Player_filter;
  A_Player_orderBy: A_Player_orderBy;
  A_Sale: ResolverTypeWrapper<A_Sale>;
  A_Sale_filter: A_Sale_filter;
  A_Sale_orderBy: A_Sale_orderBy;
  A_Treasure: ResolverTypeWrapper<A_Treasure>;
  A_TreasureCount: ResolverTypeWrapper<A_TreasureCount>;
  A_TreasureCount_filter: A_TreasureCount_filter;
  A_TreasureCount_orderBy: A_TreasureCount_orderBy;
  A_TreasureInStore: ResolverTypeWrapper<A_TreasureInStore>;
  A_TreasureInStore_filter: A_TreasureInStore_filter;
  A_TreasureInStore_orderBy: A_TreasureInStore_orderBy;
  A_Treasure_filter: A_Treasure_filter;
  A_Treasure_orderBy: A_Treasure_orderBy;
  A_User: ResolverTypeWrapper<A_User>;
  A_User_filter: A_User_filter;
  A_User_orderBy: A_User_orderBy;
  A__Block_: ResolverTypeWrapper<A__Block_>;
  A__Meta_: ResolverTypeWrapper<A__Meta_>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  T_Arena: T_Arena;
  T_ArenaResults: T_ArenaResults;
  T_ArenaResults_filter: T_ArenaResults_filter;
  T_Arena_filter: T_Arena_filter;
  T_BasicCraft: T_BasicCraft;
  T_BasicCraft_filter: T_BasicCraft_filter;
  T_BasicPotion: T_BasicPotion;
  T_BasicPotionBalance: T_BasicPotionBalance;
  T_BasicPotionBalance_filter: T_BasicPotionBalance_filter;
  T_BasicPotion_filter: T_BasicPotion_filter;
  T_BigDecimal: Scalars['T_BigDecimal'];
  BigInt: Scalars['BigInt'];
  T_BlockChangedFilter: T_BlockChangedFilter;
  T_Block_height: T_Block_height;
  Boolean: Scalars['Boolean'];
  T_Bytes: Scalars['T_Bytes'];
  T_EquipCount: T_EquipCount;
  T_EquipCount_filter: T_EquipCount_filter;
  T_Equipment: T_Equipment;
  T_EquipmentInStore: T_EquipmentInStore;
  T_EquipmentInStore_filter: T_EquipmentInStore_filter;
  T_Equipment_filter: T_Equipment_filter;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  T_Listing: T_Listing;
  T_Listing_filter: T_Listing_filter;
  T_MagicMonster: T_MagicMonster;
  T_MagicMonster_filter: T_MagicMonster_filter;
  T_Monster: T_Monster;
  T_Monster_filter: T_Monster_filter;
  T_Player: T_Player;
  T_Player_filter: T_Player_filter;
  T_Sale: T_Sale;
  T_Sale_filter: T_Sale_filter;
  String: Scalars['String'];
  T_User: T_User;
  T_User_filter: T_User_filter;
  T__Block_: T__Block_;
  T__Meta_: T__Meta_;
  S_Arena: S_Arena;
  S_ArenaResults: S_ArenaResults;
  S_ArenaResults_filter: S_ArenaResults_filter;
  S_Arena_filter: S_Arena_filter;
  S_BasicCraft: S_BasicCraft;
  S_BasicCraft_filter: S_BasicCraft_filter;
  S_BasicPotion: S_BasicPotion;
  S_BasicPotionBalance: S_BasicPotionBalance;
  S_BasicPotionBalance_filter: S_BasicPotionBalance_filter;
  S_BasicPotion_filter: S_BasicPotion_filter;
  S_BigDecimal: Scalars['S_BigDecimal'];
  S_BlockChangedFilter: S_BlockChangedFilter;
  S_Block_height: S_Block_height;
  S_Bytes: Scalars['S_Bytes'];
  S_EquipCount: S_EquipCount;
  S_EquipCount_filter: S_EquipCount_filter;
  S_Equipment: S_Equipment;
  S_EquipmentInStore: S_EquipmentInStore;
  S_EquipmentInStore_filter: S_EquipmentInStore_filter;
  S_Equipment_filter: S_Equipment_filter;
  S_Int8: Scalars['S_Int8'];
  S_Listing: S_Listing;
  S_Listing_filter: S_Listing_filter;
  S_MagicMonster: S_MagicMonster;
  S_MagicMonster_filter: S_MagicMonster_filter;
  S_Monster: S_Monster;
  S_Monster_filter: S_Monster_filter;
  S_Player: S_Player;
  S_Player_filter: S_Player_filter;
  S_Sale: S_Sale;
  S_Sale_filter: S_Sale_filter;
  S_User: S_User;
  S_User_filter: S_User_filter;
  S__Block_: S__Block_;
  S__Meta_: S__Meta_;
  A_AdvancedCraft: A_AdvancedCraft;
  A_AdvancedCraft_filter: A_AdvancedCraft_filter;
  A_Arena: A_Arena;
  A_ArenaResults: A_ArenaResults;
  A_ArenaResults_filter: A_ArenaResults_filter;
  A_Arena_filter: A_Arena_filter;
  A_BasicCraft: A_BasicCraft;
  A_BasicCraft_filter: A_BasicCraft_filter;
  A_BasicPotion: A_BasicPotion;
  A_BasicPotionBalance: A_BasicPotionBalance;
  A_BasicPotionBalance_filter: A_BasicPotionBalance_filter;
  A_BasicPotion_filter: A_BasicPotion_filter;
  A_BigDecimal: Scalars['A_BigDecimal'];
  A_BlockChangedFilter: A_BlockChangedFilter;
  A_Block_height: A_Block_height;
  A_Bytes: Scalars['A_Bytes'];
  A_EquipCount: A_EquipCount;
  A_EquipCount_filter: A_EquipCount_filter;
  A_Equipment: A_Equipment;
  A_EquipmentInStore: A_EquipmentInStore;
  A_EquipmentInStore_filter: A_EquipmentInStore_filter;
  A_Equipment_filter: A_Equipment_filter;
  A_Int8: Scalars['A_Int8'];
  A_Listing: A_Listing;
  A_Listing_filter: A_Listing_filter;
  A_MagicMonster: A_MagicMonster;
  A_MagicMonster_filter: A_MagicMonster_filter;
  A_Monster: A_Monster;
  A_Monster_filter: A_Monster_filter;
  A_Player: A_Player;
  A_Player_filter: A_Player_filter;
  A_Sale: A_Sale;
  A_Sale_filter: A_Sale_filter;
  A_Treasure: A_Treasure;
  A_TreasureCount: A_TreasureCount;
  A_TreasureCount_filter: A_TreasureCount_filter;
  A_TreasureInStore: A_TreasureInStore;
  A_TreasureInStore_filter: A_TreasureInStore_filter;
  A_Treasure_filter: A_Treasure_filter;
  A_User: A_User;
  A_User_filter: A_User_filter;
  A__Block_: A__Block_;
  A__Meta_: A__Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  T_user?: Resolver<Maybe<ResolversTypes['T_User']>, ParentType, ContextType, RequireFields<QueryT_userArgs, 'id' | 'subgraphError'>>;
  T_users?: Resolver<Array<ResolversTypes['T_User']>, ParentType, ContextType, RequireFields<QueryT_usersArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_player?: Resolver<Maybe<ResolversTypes['T_Player']>, ParentType, ContextType, RequireFields<QueryT_playerArgs, 'id' | 'subgraphError'>>;
  T_players?: Resolver<Array<ResolversTypes['T_Player']>, ParentType, ContextType, RequireFields<QueryT_playersArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_equipment?: Resolver<Maybe<ResolversTypes['T_Equipment']>, ParentType, ContextType, RequireFields<QueryT_equipmentArgs, 'id' | 'subgraphError'>>;
  T_equipments?: Resolver<Array<ResolversTypes['T_Equipment']>, ParentType, ContextType, RequireFields<QueryT_equipmentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_equipmentInStore?: Resolver<Maybe<ResolversTypes['T_EquipmentInStore']>, ParentType, ContextType, RequireFields<QueryT_equipmentInStoreArgs, 'id' | 'subgraphError'>>;
  T_equipmentInStores?: Resolver<Array<ResolversTypes['T_EquipmentInStore']>, ParentType, ContextType, RequireFields<QueryT_equipmentInStoresArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_basicCraft?: Resolver<Maybe<ResolversTypes['T_BasicCraft']>, ParentType, ContextType, RequireFields<QueryT_basicCraftArgs, 'id' | 'subgraphError'>>;
  T_basicCrafts?: Resolver<Array<ResolversTypes['T_BasicCraft']>, ParentType, ContextType, RequireFields<QueryT_basicCraftsArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_equipCount?: Resolver<Maybe<ResolversTypes['T_EquipCount']>, ParentType, ContextType, RequireFields<QueryT_equipCountArgs, 'id' | 'subgraphError'>>;
  T_equipCounts?: Resolver<Array<ResolversTypes['T_EquipCount']>, ParentType, ContextType, RequireFields<QueryT_equipCountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_monster?: Resolver<Maybe<ResolversTypes['T_Monster']>, ParentType, ContextType, RequireFields<QueryT_monsterArgs, 'id' | 'subgraphError'>>;
  T_monsters?: Resolver<Array<ResolversTypes['T_Monster']>, ParentType, ContextType, RequireFields<QueryT_monstersArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_magicMonster?: Resolver<Maybe<ResolversTypes['T_MagicMonster']>, ParentType, ContextType, RequireFields<QueryT_magicMonsterArgs, 'id' | 'subgraphError'>>;
  T_magicMonsters?: Resolver<Array<ResolversTypes['T_MagicMonster']>, ParentType, ContextType, RequireFields<QueryT_magicMonstersArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_basicPotion?: Resolver<Maybe<ResolversTypes['T_BasicPotion']>, ParentType, ContextType, RequireFields<QueryT_basicPotionArgs, 'id' | 'subgraphError'>>;
  T_basicPotions?: Resolver<Array<ResolversTypes['T_BasicPotion']>, ParentType, ContextType, RequireFields<QueryT_basicPotionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_basicPotionBalance?: Resolver<Maybe<ResolversTypes['T_BasicPotionBalance']>, ParentType, ContextType, RequireFields<QueryT_basicPotionBalanceArgs, 'id' | 'subgraphError'>>;
  T_basicPotionBalances?: Resolver<Array<ResolversTypes['T_BasicPotionBalance']>, ParentType, ContextType, RequireFields<QueryT_basicPotionBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_arena?: Resolver<Maybe<ResolversTypes['T_Arena']>, ParentType, ContextType, RequireFields<QueryT_arenaArgs, 'id' | 'subgraphError'>>;
  T_arenas?: Resolver<Array<ResolversTypes['T_Arena']>, ParentType, ContextType, RequireFields<QueryT_arenasArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_arenaResults?: Resolver<Array<ResolversTypes['T_ArenaResults']>, ParentType, ContextType, RequireFields<QueryT_arenaResultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_sale?: Resolver<Maybe<ResolversTypes['T_Sale']>, ParentType, ContextType, RequireFields<QueryT_saleArgs, 'id' | 'subgraphError'>>;
  T_sales?: Resolver<Array<ResolversTypes['T_Sale']>, ParentType, ContextType, RequireFields<QueryT_salesArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_listing?: Resolver<Maybe<ResolversTypes['T_Listing']>, ParentType, ContextType, RequireFields<QueryT_listingArgs, 'id' | 'subgraphError'>>;
  T_listings?: Resolver<Array<ResolversTypes['T_Listing']>, ParentType, ContextType, RequireFields<QueryT_listingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  T__meta?: Resolver<Maybe<ResolversTypes['T__Meta_']>, ParentType, ContextType, Partial<QueryT__metaArgs>>;
  S_user?: Resolver<Maybe<ResolversTypes['S_User']>, ParentType, ContextType, RequireFields<QueryS_userArgs, 'id' | 'subgraphError'>>;
  S_users?: Resolver<Array<ResolversTypes['S_User']>, ParentType, ContextType, RequireFields<QueryS_usersArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_player?: Resolver<Maybe<ResolversTypes['S_Player']>, ParentType, ContextType, RequireFields<QueryS_playerArgs, 'id' | 'subgraphError'>>;
  S_players?: Resolver<Array<ResolversTypes['S_Player']>, ParentType, ContextType, RequireFields<QueryS_playersArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_equipment?: Resolver<Maybe<ResolversTypes['S_Equipment']>, ParentType, ContextType, RequireFields<QueryS_equipmentArgs, 'id' | 'subgraphError'>>;
  S_equipments?: Resolver<Array<ResolversTypes['S_Equipment']>, ParentType, ContextType, RequireFields<QueryS_equipmentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_equipmentInStore?: Resolver<Maybe<ResolversTypes['S_EquipmentInStore']>, ParentType, ContextType, RequireFields<QueryS_equipmentInStoreArgs, 'id' | 'subgraphError'>>;
  S_equipmentInStores?: Resolver<Array<ResolversTypes['S_EquipmentInStore']>, ParentType, ContextType, RequireFields<QueryS_equipmentInStoresArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_basicCraft?: Resolver<Maybe<ResolversTypes['S_BasicCraft']>, ParentType, ContextType, RequireFields<QueryS_basicCraftArgs, 'id' | 'subgraphError'>>;
  S_basicCrafts?: Resolver<Array<ResolversTypes['S_BasicCraft']>, ParentType, ContextType, RequireFields<QueryS_basicCraftsArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_equipCount?: Resolver<Maybe<ResolversTypes['S_EquipCount']>, ParentType, ContextType, RequireFields<QueryS_equipCountArgs, 'id' | 'subgraphError'>>;
  S_equipCounts?: Resolver<Array<ResolversTypes['S_EquipCount']>, ParentType, ContextType, RequireFields<QueryS_equipCountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_monster?: Resolver<Maybe<ResolversTypes['S_Monster']>, ParentType, ContextType, RequireFields<QueryS_monsterArgs, 'id' | 'subgraphError'>>;
  S_monsters?: Resolver<Array<ResolversTypes['S_Monster']>, ParentType, ContextType, RequireFields<QueryS_monstersArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_magicMonster?: Resolver<Maybe<ResolversTypes['S_MagicMonster']>, ParentType, ContextType, RequireFields<QueryS_magicMonsterArgs, 'id' | 'subgraphError'>>;
  S_magicMonsters?: Resolver<Array<ResolversTypes['S_MagicMonster']>, ParentType, ContextType, RequireFields<QueryS_magicMonstersArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_basicPotion?: Resolver<Maybe<ResolversTypes['S_BasicPotion']>, ParentType, ContextType, RequireFields<QueryS_basicPotionArgs, 'id' | 'subgraphError'>>;
  S_basicPotions?: Resolver<Array<ResolversTypes['S_BasicPotion']>, ParentType, ContextType, RequireFields<QueryS_basicPotionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_basicPotionBalance?: Resolver<Maybe<ResolversTypes['S_BasicPotionBalance']>, ParentType, ContextType, RequireFields<QueryS_basicPotionBalanceArgs, 'id' | 'subgraphError'>>;
  S_basicPotionBalances?: Resolver<Array<ResolversTypes['S_BasicPotionBalance']>, ParentType, ContextType, RequireFields<QueryS_basicPotionBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_arena?: Resolver<Maybe<ResolversTypes['S_Arena']>, ParentType, ContextType, RequireFields<QueryS_arenaArgs, 'id' | 'subgraphError'>>;
  S_arenas?: Resolver<Array<ResolversTypes['S_Arena']>, ParentType, ContextType, RequireFields<QueryS_arenasArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_arenaResults?: Resolver<Array<ResolversTypes['S_ArenaResults']>, ParentType, ContextType, RequireFields<QueryS_arenaResultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_sale?: Resolver<Maybe<ResolversTypes['S_Sale']>, ParentType, ContextType, RequireFields<QueryS_saleArgs, 'id' | 'subgraphError'>>;
  S_sales?: Resolver<Array<ResolversTypes['S_Sale']>, ParentType, ContextType, RequireFields<QueryS_salesArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_listing?: Resolver<Maybe<ResolversTypes['S_Listing']>, ParentType, ContextType, RequireFields<QueryS_listingArgs, 'id' | 'subgraphError'>>;
  S_listings?: Resolver<Array<ResolversTypes['S_Listing']>, ParentType, ContextType, RequireFields<QueryS_listingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  S__meta?: Resolver<Maybe<ResolversTypes['S__Meta_']>, ParentType, ContextType, Partial<QueryS__metaArgs>>;
  A_user?: Resolver<Maybe<ResolversTypes['A_User']>, ParentType, ContextType, RequireFields<QueryA_userArgs, 'id' | 'subgraphError'>>;
  A_users?: Resolver<Array<ResolversTypes['A_User']>, ParentType, ContextType, RequireFields<QueryA_usersArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_player?: Resolver<Maybe<ResolversTypes['A_Player']>, ParentType, ContextType, RequireFields<QueryA_playerArgs, 'id' | 'subgraphError'>>;
  A_players?: Resolver<Array<ResolversTypes['A_Player']>, ParentType, ContextType, RequireFields<QueryA_playersArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_equipment?: Resolver<Maybe<ResolversTypes['A_Equipment']>, ParentType, ContextType, RequireFields<QueryA_equipmentArgs, 'id' | 'subgraphError'>>;
  A_equipments?: Resolver<Array<ResolversTypes['A_Equipment']>, ParentType, ContextType, RequireFields<QueryA_equipmentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_equipmentInStore?: Resolver<Maybe<ResolversTypes['A_EquipmentInStore']>, ParentType, ContextType, RequireFields<QueryA_equipmentInStoreArgs, 'id' | 'subgraphError'>>;
  A_equipmentInStores?: Resolver<Array<ResolversTypes['A_EquipmentInStore']>, ParentType, ContextType, RequireFields<QueryA_equipmentInStoresArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_treasure?: Resolver<Maybe<ResolversTypes['A_Treasure']>, ParentType, ContextType, RequireFields<QueryA_treasureArgs, 'id' | 'subgraphError'>>;
  A_treasures?: Resolver<Array<ResolversTypes['A_Treasure']>, ParentType, ContextType, RequireFields<QueryA_treasuresArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_treasureInStore?: Resolver<Maybe<ResolversTypes['A_TreasureInStore']>, ParentType, ContextType, RequireFields<QueryA_treasureInStoreArgs, 'id' | 'subgraphError'>>;
  A_treasureInStores?: Resolver<Array<ResolversTypes['A_TreasureInStore']>, ParentType, ContextType, RequireFields<QueryA_treasureInStoresArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_basicCraft?: Resolver<Maybe<ResolversTypes['A_BasicCraft']>, ParentType, ContextType, RequireFields<QueryA_basicCraftArgs, 'id' | 'subgraphError'>>;
  A_basicCrafts?: Resolver<Array<ResolversTypes['A_BasicCraft']>, ParentType, ContextType, RequireFields<QueryA_basicCraftsArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_advancedCraft?: Resolver<Maybe<ResolversTypes['A_AdvancedCraft']>, ParentType, ContextType, RequireFields<QueryA_advancedCraftArgs, 'id' | 'subgraphError'>>;
  A_advancedCrafts?: Resolver<Array<ResolversTypes['A_AdvancedCraft']>, ParentType, ContextType, RequireFields<QueryA_advancedCraftsArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_equipCount?: Resolver<Maybe<ResolversTypes['A_EquipCount']>, ParentType, ContextType, RequireFields<QueryA_equipCountArgs, 'id' | 'subgraphError'>>;
  A_equipCounts?: Resolver<Array<ResolversTypes['A_EquipCount']>, ParentType, ContextType, RequireFields<QueryA_equipCountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_treasureCount?: Resolver<Maybe<ResolversTypes['A_TreasureCount']>, ParentType, ContextType, RequireFields<QueryA_treasureCountArgs, 'id' | 'subgraphError'>>;
  A_treasureCounts?: Resolver<Array<ResolversTypes['A_TreasureCount']>, ParentType, ContextType, RequireFields<QueryA_treasureCountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_monster?: Resolver<Maybe<ResolversTypes['A_Monster']>, ParentType, ContextType, RequireFields<QueryA_monsterArgs, 'id' | 'subgraphError'>>;
  A_monsters?: Resolver<Array<ResolversTypes['A_Monster']>, ParentType, ContextType, RequireFields<QueryA_monstersArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_magicMonster?: Resolver<Maybe<ResolversTypes['A_MagicMonster']>, ParentType, ContextType, RequireFields<QueryA_magicMonsterArgs, 'id' | 'subgraphError'>>;
  A_magicMonsters?: Resolver<Array<ResolversTypes['A_MagicMonster']>, ParentType, ContextType, RequireFields<QueryA_magicMonstersArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_basicPotion?: Resolver<Maybe<ResolversTypes['A_BasicPotion']>, ParentType, ContextType, RequireFields<QueryA_basicPotionArgs, 'id' | 'subgraphError'>>;
  A_basicPotions?: Resolver<Array<ResolversTypes['A_BasicPotion']>, ParentType, ContextType, RequireFields<QueryA_basicPotionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_basicPotionBalance?: Resolver<Maybe<ResolversTypes['A_BasicPotionBalance']>, ParentType, ContextType, RequireFields<QueryA_basicPotionBalanceArgs, 'id' | 'subgraphError'>>;
  A_basicPotionBalances?: Resolver<Array<ResolversTypes['A_BasicPotionBalance']>, ParentType, ContextType, RequireFields<QueryA_basicPotionBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_arena?: Resolver<Maybe<ResolversTypes['A_Arena']>, ParentType, ContextType, RequireFields<QueryA_arenaArgs, 'id' | 'subgraphError'>>;
  A_arenas?: Resolver<Array<ResolversTypes['A_Arena']>, ParentType, ContextType, RequireFields<QueryA_arenasArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_arenaResults?: Resolver<Array<ResolversTypes['A_ArenaResults']>, ParentType, ContextType, RequireFields<QueryA_arenaResultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_sale?: Resolver<Maybe<ResolversTypes['A_Sale']>, ParentType, ContextType, RequireFields<QueryA_saleArgs, 'id' | 'subgraphError'>>;
  A_sales?: Resolver<Array<ResolversTypes['A_Sale']>, ParentType, ContextType, RequireFields<QueryA_salesArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_listing?: Resolver<Maybe<ResolversTypes['A_Listing']>, ParentType, ContextType, RequireFields<QueryA_listingArgs, 'id' | 'subgraphError'>>;
  A_listings?: Resolver<Array<ResolversTypes['A_Listing']>, ParentType, ContextType, RequireFields<QueryA_listingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  A__meta?: Resolver<Maybe<ResolversTypes['A__Meta_']>, ParentType, ContextType, Partial<QueryA__metaArgs>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  T_user?: SubscriptionResolver<Maybe<ResolversTypes['T_User']>, "T_user", ParentType, ContextType, RequireFields<SubscriptionT_userArgs, 'id' | 'subgraphError'>>;
  T_users?: SubscriptionResolver<Array<ResolversTypes['T_User']>, "T_users", ParentType, ContextType, RequireFields<SubscriptionT_usersArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_player?: SubscriptionResolver<Maybe<ResolversTypes['T_Player']>, "T_player", ParentType, ContextType, RequireFields<SubscriptionT_playerArgs, 'id' | 'subgraphError'>>;
  T_players?: SubscriptionResolver<Array<ResolversTypes['T_Player']>, "T_players", ParentType, ContextType, RequireFields<SubscriptionT_playersArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_equipment?: SubscriptionResolver<Maybe<ResolversTypes['T_Equipment']>, "T_equipment", ParentType, ContextType, RequireFields<SubscriptionT_equipmentArgs, 'id' | 'subgraphError'>>;
  T_equipments?: SubscriptionResolver<Array<ResolversTypes['T_Equipment']>, "T_equipments", ParentType, ContextType, RequireFields<SubscriptionT_equipmentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_equipmentInStore?: SubscriptionResolver<Maybe<ResolversTypes['T_EquipmentInStore']>, "T_equipmentInStore", ParentType, ContextType, RequireFields<SubscriptionT_equipmentInStoreArgs, 'id' | 'subgraphError'>>;
  T_equipmentInStores?: SubscriptionResolver<Array<ResolversTypes['T_EquipmentInStore']>, "T_equipmentInStores", ParentType, ContextType, RequireFields<SubscriptionT_equipmentInStoresArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_basicCraft?: SubscriptionResolver<Maybe<ResolversTypes['T_BasicCraft']>, "T_basicCraft", ParentType, ContextType, RequireFields<SubscriptionT_basicCraftArgs, 'id' | 'subgraphError'>>;
  T_basicCrafts?: SubscriptionResolver<Array<ResolversTypes['T_BasicCraft']>, "T_basicCrafts", ParentType, ContextType, RequireFields<SubscriptionT_basicCraftsArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_equipCount?: SubscriptionResolver<Maybe<ResolversTypes['T_EquipCount']>, "T_equipCount", ParentType, ContextType, RequireFields<SubscriptionT_equipCountArgs, 'id' | 'subgraphError'>>;
  T_equipCounts?: SubscriptionResolver<Array<ResolversTypes['T_EquipCount']>, "T_equipCounts", ParentType, ContextType, RequireFields<SubscriptionT_equipCountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_monster?: SubscriptionResolver<Maybe<ResolversTypes['T_Monster']>, "T_monster", ParentType, ContextType, RequireFields<SubscriptionT_monsterArgs, 'id' | 'subgraphError'>>;
  T_monsters?: SubscriptionResolver<Array<ResolversTypes['T_Monster']>, "T_monsters", ParentType, ContextType, RequireFields<SubscriptionT_monstersArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_magicMonster?: SubscriptionResolver<Maybe<ResolversTypes['T_MagicMonster']>, "T_magicMonster", ParentType, ContextType, RequireFields<SubscriptionT_magicMonsterArgs, 'id' | 'subgraphError'>>;
  T_magicMonsters?: SubscriptionResolver<Array<ResolversTypes['T_MagicMonster']>, "T_magicMonsters", ParentType, ContextType, RequireFields<SubscriptionT_magicMonstersArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_basicPotion?: SubscriptionResolver<Maybe<ResolversTypes['T_BasicPotion']>, "T_basicPotion", ParentType, ContextType, RequireFields<SubscriptionT_basicPotionArgs, 'id' | 'subgraphError'>>;
  T_basicPotions?: SubscriptionResolver<Array<ResolversTypes['T_BasicPotion']>, "T_basicPotions", ParentType, ContextType, RequireFields<SubscriptionT_basicPotionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_basicPotionBalance?: SubscriptionResolver<Maybe<ResolversTypes['T_BasicPotionBalance']>, "T_basicPotionBalance", ParentType, ContextType, RequireFields<SubscriptionT_basicPotionBalanceArgs, 'id' | 'subgraphError'>>;
  T_basicPotionBalances?: SubscriptionResolver<Array<ResolversTypes['T_BasicPotionBalance']>, "T_basicPotionBalances", ParentType, ContextType, RequireFields<SubscriptionT_basicPotionBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_arena?: SubscriptionResolver<Maybe<ResolversTypes['T_Arena']>, "T_arena", ParentType, ContextType, RequireFields<SubscriptionT_arenaArgs, 'id' | 'subgraphError'>>;
  T_arenas?: SubscriptionResolver<Array<ResolversTypes['T_Arena']>, "T_arenas", ParentType, ContextType, RequireFields<SubscriptionT_arenasArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_arenaResults?: SubscriptionResolver<Array<ResolversTypes['T_ArenaResults']>, "T_arenaResults", ParentType, ContextType, RequireFields<SubscriptionT_arenaResultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_sale?: SubscriptionResolver<Maybe<ResolversTypes['T_Sale']>, "T_sale", ParentType, ContextType, RequireFields<SubscriptionT_saleArgs, 'id' | 'subgraphError'>>;
  T_sales?: SubscriptionResolver<Array<ResolversTypes['T_Sale']>, "T_sales", ParentType, ContextType, RequireFields<SubscriptionT_salesArgs, 'skip' | 'first' | 'subgraphError'>>;
  T_listing?: SubscriptionResolver<Maybe<ResolversTypes['T_Listing']>, "T_listing", ParentType, ContextType, RequireFields<SubscriptionT_listingArgs, 'id' | 'subgraphError'>>;
  T_listings?: SubscriptionResolver<Array<ResolversTypes['T_Listing']>, "T_listings", ParentType, ContextType, RequireFields<SubscriptionT_listingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  T__meta?: SubscriptionResolver<Maybe<ResolversTypes['T__Meta_']>, "T__meta", ParentType, ContextType, Partial<SubscriptionT__metaArgs>>;
  S_user?: SubscriptionResolver<Maybe<ResolversTypes['S_User']>, "S_user", ParentType, ContextType, RequireFields<SubscriptionS_userArgs, 'id' | 'subgraphError'>>;
  S_users?: SubscriptionResolver<Array<ResolversTypes['S_User']>, "S_users", ParentType, ContextType, RequireFields<SubscriptionS_usersArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_player?: SubscriptionResolver<Maybe<ResolversTypes['S_Player']>, "S_player", ParentType, ContextType, RequireFields<SubscriptionS_playerArgs, 'id' | 'subgraphError'>>;
  S_players?: SubscriptionResolver<Array<ResolversTypes['S_Player']>, "S_players", ParentType, ContextType, RequireFields<SubscriptionS_playersArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_equipment?: SubscriptionResolver<Maybe<ResolversTypes['S_Equipment']>, "S_equipment", ParentType, ContextType, RequireFields<SubscriptionS_equipmentArgs, 'id' | 'subgraphError'>>;
  S_equipments?: SubscriptionResolver<Array<ResolversTypes['S_Equipment']>, "S_equipments", ParentType, ContextType, RequireFields<SubscriptionS_equipmentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_equipmentInStore?: SubscriptionResolver<Maybe<ResolversTypes['S_EquipmentInStore']>, "S_equipmentInStore", ParentType, ContextType, RequireFields<SubscriptionS_equipmentInStoreArgs, 'id' | 'subgraphError'>>;
  S_equipmentInStores?: SubscriptionResolver<Array<ResolversTypes['S_EquipmentInStore']>, "S_equipmentInStores", ParentType, ContextType, RequireFields<SubscriptionS_equipmentInStoresArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_basicCraft?: SubscriptionResolver<Maybe<ResolversTypes['S_BasicCraft']>, "S_basicCraft", ParentType, ContextType, RequireFields<SubscriptionS_basicCraftArgs, 'id' | 'subgraphError'>>;
  S_basicCrafts?: SubscriptionResolver<Array<ResolversTypes['S_BasicCraft']>, "S_basicCrafts", ParentType, ContextType, RequireFields<SubscriptionS_basicCraftsArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_equipCount?: SubscriptionResolver<Maybe<ResolversTypes['S_EquipCount']>, "S_equipCount", ParentType, ContextType, RequireFields<SubscriptionS_equipCountArgs, 'id' | 'subgraphError'>>;
  S_equipCounts?: SubscriptionResolver<Array<ResolversTypes['S_EquipCount']>, "S_equipCounts", ParentType, ContextType, RequireFields<SubscriptionS_equipCountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_monster?: SubscriptionResolver<Maybe<ResolversTypes['S_Monster']>, "S_monster", ParentType, ContextType, RequireFields<SubscriptionS_monsterArgs, 'id' | 'subgraphError'>>;
  S_monsters?: SubscriptionResolver<Array<ResolversTypes['S_Monster']>, "S_monsters", ParentType, ContextType, RequireFields<SubscriptionS_monstersArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_magicMonster?: SubscriptionResolver<Maybe<ResolversTypes['S_MagicMonster']>, "S_magicMonster", ParentType, ContextType, RequireFields<SubscriptionS_magicMonsterArgs, 'id' | 'subgraphError'>>;
  S_magicMonsters?: SubscriptionResolver<Array<ResolversTypes['S_MagicMonster']>, "S_magicMonsters", ParentType, ContextType, RequireFields<SubscriptionS_magicMonstersArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_basicPotion?: SubscriptionResolver<Maybe<ResolversTypes['S_BasicPotion']>, "S_basicPotion", ParentType, ContextType, RequireFields<SubscriptionS_basicPotionArgs, 'id' | 'subgraphError'>>;
  S_basicPotions?: SubscriptionResolver<Array<ResolversTypes['S_BasicPotion']>, "S_basicPotions", ParentType, ContextType, RequireFields<SubscriptionS_basicPotionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_basicPotionBalance?: SubscriptionResolver<Maybe<ResolversTypes['S_BasicPotionBalance']>, "S_basicPotionBalance", ParentType, ContextType, RequireFields<SubscriptionS_basicPotionBalanceArgs, 'id' | 'subgraphError'>>;
  S_basicPotionBalances?: SubscriptionResolver<Array<ResolversTypes['S_BasicPotionBalance']>, "S_basicPotionBalances", ParentType, ContextType, RequireFields<SubscriptionS_basicPotionBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_arena?: SubscriptionResolver<Maybe<ResolversTypes['S_Arena']>, "S_arena", ParentType, ContextType, RequireFields<SubscriptionS_arenaArgs, 'id' | 'subgraphError'>>;
  S_arenas?: SubscriptionResolver<Array<ResolversTypes['S_Arena']>, "S_arenas", ParentType, ContextType, RequireFields<SubscriptionS_arenasArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_arenaResults?: SubscriptionResolver<Array<ResolversTypes['S_ArenaResults']>, "S_arenaResults", ParentType, ContextType, RequireFields<SubscriptionS_arenaResultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_sale?: SubscriptionResolver<Maybe<ResolversTypes['S_Sale']>, "S_sale", ParentType, ContextType, RequireFields<SubscriptionS_saleArgs, 'id' | 'subgraphError'>>;
  S_sales?: SubscriptionResolver<Array<ResolversTypes['S_Sale']>, "S_sales", ParentType, ContextType, RequireFields<SubscriptionS_salesArgs, 'skip' | 'first' | 'subgraphError'>>;
  S_listing?: SubscriptionResolver<Maybe<ResolversTypes['S_Listing']>, "S_listing", ParentType, ContextType, RequireFields<SubscriptionS_listingArgs, 'id' | 'subgraphError'>>;
  S_listings?: SubscriptionResolver<Array<ResolversTypes['S_Listing']>, "S_listings", ParentType, ContextType, RequireFields<SubscriptionS_listingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  S__meta?: SubscriptionResolver<Maybe<ResolversTypes['S__Meta_']>, "S__meta", ParentType, ContextType, Partial<SubscriptionS__metaArgs>>;
  A_user?: SubscriptionResolver<Maybe<ResolversTypes['A_User']>, "A_user", ParentType, ContextType, RequireFields<SubscriptionA_userArgs, 'id' | 'subgraphError'>>;
  A_users?: SubscriptionResolver<Array<ResolversTypes['A_User']>, "A_users", ParentType, ContextType, RequireFields<SubscriptionA_usersArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_player?: SubscriptionResolver<Maybe<ResolversTypes['A_Player']>, "A_player", ParentType, ContextType, RequireFields<SubscriptionA_playerArgs, 'id' | 'subgraphError'>>;
  A_players?: SubscriptionResolver<Array<ResolversTypes['A_Player']>, "A_players", ParentType, ContextType, RequireFields<SubscriptionA_playersArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_equipment?: SubscriptionResolver<Maybe<ResolversTypes['A_Equipment']>, "A_equipment", ParentType, ContextType, RequireFields<SubscriptionA_equipmentArgs, 'id' | 'subgraphError'>>;
  A_equipments?: SubscriptionResolver<Array<ResolversTypes['A_Equipment']>, "A_equipments", ParentType, ContextType, RequireFields<SubscriptionA_equipmentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_equipmentInStore?: SubscriptionResolver<Maybe<ResolversTypes['A_EquipmentInStore']>, "A_equipmentInStore", ParentType, ContextType, RequireFields<SubscriptionA_equipmentInStoreArgs, 'id' | 'subgraphError'>>;
  A_equipmentInStores?: SubscriptionResolver<Array<ResolversTypes['A_EquipmentInStore']>, "A_equipmentInStores", ParentType, ContextType, RequireFields<SubscriptionA_equipmentInStoresArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_treasure?: SubscriptionResolver<Maybe<ResolversTypes['A_Treasure']>, "A_treasure", ParentType, ContextType, RequireFields<SubscriptionA_treasureArgs, 'id' | 'subgraphError'>>;
  A_treasures?: SubscriptionResolver<Array<ResolversTypes['A_Treasure']>, "A_treasures", ParentType, ContextType, RequireFields<SubscriptionA_treasuresArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_treasureInStore?: SubscriptionResolver<Maybe<ResolversTypes['A_TreasureInStore']>, "A_treasureInStore", ParentType, ContextType, RequireFields<SubscriptionA_treasureInStoreArgs, 'id' | 'subgraphError'>>;
  A_treasureInStores?: SubscriptionResolver<Array<ResolversTypes['A_TreasureInStore']>, "A_treasureInStores", ParentType, ContextType, RequireFields<SubscriptionA_treasureInStoresArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_basicCraft?: SubscriptionResolver<Maybe<ResolversTypes['A_BasicCraft']>, "A_basicCraft", ParentType, ContextType, RequireFields<SubscriptionA_basicCraftArgs, 'id' | 'subgraphError'>>;
  A_basicCrafts?: SubscriptionResolver<Array<ResolversTypes['A_BasicCraft']>, "A_basicCrafts", ParentType, ContextType, RequireFields<SubscriptionA_basicCraftsArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_advancedCraft?: SubscriptionResolver<Maybe<ResolversTypes['A_AdvancedCraft']>, "A_advancedCraft", ParentType, ContextType, RequireFields<SubscriptionA_advancedCraftArgs, 'id' | 'subgraphError'>>;
  A_advancedCrafts?: SubscriptionResolver<Array<ResolversTypes['A_AdvancedCraft']>, "A_advancedCrafts", ParentType, ContextType, RequireFields<SubscriptionA_advancedCraftsArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_equipCount?: SubscriptionResolver<Maybe<ResolversTypes['A_EquipCount']>, "A_equipCount", ParentType, ContextType, RequireFields<SubscriptionA_equipCountArgs, 'id' | 'subgraphError'>>;
  A_equipCounts?: SubscriptionResolver<Array<ResolversTypes['A_EquipCount']>, "A_equipCounts", ParentType, ContextType, RequireFields<SubscriptionA_equipCountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_treasureCount?: SubscriptionResolver<Maybe<ResolversTypes['A_TreasureCount']>, "A_treasureCount", ParentType, ContextType, RequireFields<SubscriptionA_treasureCountArgs, 'id' | 'subgraphError'>>;
  A_treasureCounts?: SubscriptionResolver<Array<ResolversTypes['A_TreasureCount']>, "A_treasureCounts", ParentType, ContextType, RequireFields<SubscriptionA_treasureCountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_monster?: SubscriptionResolver<Maybe<ResolversTypes['A_Monster']>, "A_monster", ParentType, ContextType, RequireFields<SubscriptionA_monsterArgs, 'id' | 'subgraphError'>>;
  A_monsters?: SubscriptionResolver<Array<ResolversTypes['A_Monster']>, "A_monsters", ParentType, ContextType, RequireFields<SubscriptionA_monstersArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_magicMonster?: SubscriptionResolver<Maybe<ResolversTypes['A_MagicMonster']>, "A_magicMonster", ParentType, ContextType, RequireFields<SubscriptionA_magicMonsterArgs, 'id' | 'subgraphError'>>;
  A_magicMonsters?: SubscriptionResolver<Array<ResolversTypes['A_MagicMonster']>, "A_magicMonsters", ParentType, ContextType, RequireFields<SubscriptionA_magicMonstersArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_basicPotion?: SubscriptionResolver<Maybe<ResolversTypes['A_BasicPotion']>, "A_basicPotion", ParentType, ContextType, RequireFields<SubscriptionA_basicPotionArgs, 'id' | 'subgraphError'>>;
  A_basicPotions?: SubscriptionResolver<Array<ResolversTypes['A_BasicPotion']>, "A_basicPotions", ParentType, ContextType, RequireFields<SubscriptionA_basicPotionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_basicPotionBalance?: SubscriptionResolver<Maybe<ResolversTypes['A_BasicPotionBalance']>, "A_basicPotionBalance", ParentType, ContextType, RequireFields<SubscriptionA_basicPotionBalanceArgs, 'id' | 'subgraphError'>>;
  A_basicPotionBalances?: SubscriptionResolver<Array<ResolversTypes['A_BasicPotionBalance']>, "A_basicPotionBalances", ParentType, ContextType, RequireFields<SubscriptionA_basicPotionBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_arena?: SubscriptionResolver<Maybe<ResolversTypes['A_Arena']>, "A_arena", ParentType, ContextType, RequireFields<SubscriptionA_arenaArgs, 'id' | 'subgraphError'>>;
  A_arenas?: SubscriptionResolver<Array<ResolversTypes['A_Arena']>, "A_arenas", ParentType, ContextType, RequireFields<SubscriptionA_arenasArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_arenaResults?: SubscriptionResolver<Array<ResolversTypes['A_ArenaResults']>, "A_arenaResults", ParentType, ContextType, RequireFields<SubscriptionA_arenaResultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_sale?: SubscriptionResolver<Maybe<ResolversTypes['A_Sale']>, "A_sale", ParentType, ContextType, RequireFields<SubscriptionA_saleArgs, 'id' | 'subgraphError'>>;
  A_sales?: SubscriptionResolver<Array<ResolversTypes['A_Sale']>, "A_sales", ParentType, ContextType, RequireFields<SubscriptionA_salesArgs, 'skip' | 'first' | 'subgraphError'>>;
  A_listing?: SubscriptionResolver<Maybe<ResolversTypes['A_Listing']>, "A_listing", ParentType, ContextType, RequireFields<SubscriptionA_listingArgs, 'id' | 'subgraphError'>>;
  A_listings?: SubscriptionResolver<Array<ResolversTypes['A_Listing']>, "A_listings", ParentType, ContextType, RequireFields<SubscriptionA_listingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  A__meta?: SubscriptionResolver<Maybe<ResolversTypes['A__Meta_']>, "A__meta", ParentType, ContextType, Partial<SubscriptionA__metaArgs>>;
}>;

export type T_ArenaResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['T_Arena'] = ResolversParentTypes['T_Arena']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cooldown?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  host?: Resolver<Maybe<ResolversTypes['T_Player']>, ParentType, ContextType>;
  arenaResult?: Resolver<Array<ResolversTypes['T_ArenaResults']>, ParentType, ContextType, RequireFields<T_ArenaarenaResultArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type T_ArenaResultsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['T_ArenaResults'] = ResolversParentTypes['T_ArenaResults']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  player?: Resolver<ResolversTypes['T_Player'], ParentType, ContextType>;
  arena?: Resolver<ResolversTypes['T_Arena'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  losses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type T_BasicCraftResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['T_BasicCraft'] = ResolversParentTypes['T_BasicCraft']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  oldName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  newName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type T_BasicPotionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['T_BasicPotion'] = ResolversParentTypes['T_BasicPotion']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  potionBalance?: Resolver<Array<ResolversTypes['T_BasicPotionBalance']>, ParentType, ContextType, RequireFields<T_BasicPotionpotionBalanceArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type T_BasicPotionBalanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['T_BasicPotionBalance'] = ResolversParentTypes['T_BasicPotionBalance']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  potion?: Resolver<ResolversTypes['T_BasicPotion'], ParentType, ContextType>;
  player?: Resolver<ResolversTypes['T_Player'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface T_BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['T_BigDecimal'], any> {
  name: 'T_BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface T_BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['T_Bytes'], any> {
  name: 'T_Bytes';
}

export type T_EquipCountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['T_EquipCount'] = ResolversParentTypes['T_EquipCount']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type T_EquipmentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['T_Equipment'] = ResolversParentTypes['T_Equipment']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stat?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  player?: Resolver<ResolversTypes['T_Player'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isEquipped?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type T_EquipmentInStoreResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['T_EquipmentInStore'] = ResolversParentTypes['T_EquipmentInStore']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stat?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type T_ListingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['T_Listing'] = ResolversParentTypes['T_Listing']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  seller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  player?: Resolver<ResolversTypes['T_Player'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type T_MagicMonsterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['T_MagicMonster'] = ResolversParentTypes['T_MagicMonster']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  xpReward?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  damage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cooldown?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type T_MonsterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['T_Monster'] = ResolversParentTypes['T_Monster']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  xpReward?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  damage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cooldown?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type T_PlayerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['T_Player'] = ResolversParentTypes['T_Player']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  Player_id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['T_User'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  classes?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stats?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  strength?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  magic?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  agility?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  defense?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  currentHealth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maxHealth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  currentMana?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maxMana?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalWins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalLosses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  potionBalance?: Resolver<Array<ResolversTypes['T_BasicPotionBalance']>, ParentType, ContextType, RequireFields<T_PlayerpotionBalanceArgs, 'skip' | 'first'>>;
  equipment?: Resolver<Array<ResolversTypes['T_Equipment']>, ParentType, ContextType, RequireFields<T_PlayerequipmentArgs, 'skip' | 'first'>>;
  arenaResult?: Resolver<Array<ResolversTypes['T_ArenaResults']>, ParentType, ContextType, RequireFields<T_PlayerarenaResultArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type T_SaleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['T_Sale'] = ResolversParentTypes['T_Sale']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  player?: Resolver<ResolversTypes['T_Player'], ParentType, ContextType>;
  seller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  buyer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type T_UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['T_User'] = ResolversParentTypes['T_User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  gold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gem?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  players?: Resolver<Array<ResolversTypes['T_Player']>, ParentType, ContextType, RequireFields<T_UserplayersArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type T__Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['T__Block_'] = ResolversParentTypes['T__Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['T_Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type T__Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['T__Meta_'] = ResolversParentTypes['T__Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['T__Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type S_ArenaResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['S_Arena'] = ResolversParentTypes['S_Arena']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cooldown?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  host?: Resolver<Maybe<ResolversTypes['S_Player']>, ParentType, ContextType>;
  arenaResult?: Resolver<Array<ResolversTypes['S_ArenaResults']>, ParentType, ContextType, RequireFields<S_ArenaarenaResultArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type S_ArenaResultsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['S_ArenaResults'] = ResolversParentTypes['S_ArenaResults']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  player?: Resolver<ResolversTypes['S_Player'], ParentType, ContextType>;
  arena?: Resolver<ResolversTypes['S_Arena'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  losses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type S_BasicCraftResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['S_BasicCraft'] = ResolversParentTypes['S_BasicCraft']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  oldName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  newName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type S_BasicPotionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['S_BasicPotion'] = ResolversParentTypes['S_BasicPotion']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  potionBalance?: Resolver<Array<ResolversTypes['S_BasicPotionBalance']>, ParentType, ContextType, RequireFields<S_BasicPotionpotionBalanceArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type S_BasicPotionBalanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['S_BasicPotionBalance'] = ResolversParentTypes['S_BasicPotionBalance']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  potion?: Resolver<ResolversTypes['S_BasicPotion'], ParentType, ContextType>;
  player?: Resolver<ResolversTypes['S_Player'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface S_BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['S_BigDecimal'], any> {
  name: 'S_BigDecimal';
}

export interface S_BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['S_Bytes'], any> {
  name: 'S_Bytes';
}

export type S_EquipCountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['S_EquipCount'] = ResolversParentTypes['S_EquipCount']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type S_EquipmentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['S_Equipment'] = ResolversParentTypes['S_Equipment']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stat?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  player?: Resolver<ResolversTypes['S_Player'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isEquipped?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type S_EquipmentInStoreResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['S_EquipmentInStore'] = ResolversParentTypes['S_EquipmentInStore']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stat?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface S_Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['S_Int8'], any> {
  name: 'S_Int8';
}

export type S_ListingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['S_Listing'] = ResolversParentTypes['S_Listing']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  seller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  player?: Resolver<ResolversTypes['S_Player'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type S_MagicMonsterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['S_MagicMonster'] = ResolversParentTypes['S_MagicMonster']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  xpReward?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  damage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cooldown?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type S_MonsterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['S_Monster'] = ResolversParentTypes['S_Monster']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  xpReward?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  damage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cooldown?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type S_PlayerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['S_Player'] = ResolversParentTypes['S_Player']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  Player_id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['S_User'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  classes?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stats?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  strength?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  magic?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  agility?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  defense?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  currentHealth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maxHealth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  currentMana?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maxMana?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalWins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalLosses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  potionBalance?: Resolver<Array<ResolversTypes['S_BasicPotionBalance']>, ParentType, ContextType, RequireFields<S_PlayerpotionBalanceArgs, 'skip' | 'first'>>;
  equipment?: Resolver<Array<ResolversTypes['S_Equipment']>, ParentType, ContextType, RequireFields<S_PlayerequipmentArgs, 'skip' | 'first'>>;
  arenaResult?: Resolver<Array<ResolversTypes['S_ArenaResults']>, ParentType, ContextType, RequireFields<S_PlayerarenaResultArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type S_SaleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['S_Sale'] = ResolversParentTypes['S_Sale']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  player?: Resolver<ResolversTypes['S_Player'], ParentType, ContextType>;
  seller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  buyer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type S_UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['S_User'] = ResolversParentTypes['S_User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  gold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gem?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  players?: Resolver<Array<ResolversTypes['S_Player']>, ParentType, ContextType, RequireFields<S_UserplayersArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type S__Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['S__Block_'] = ResolversParentTypes['S__Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['S_Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type S__Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['S__Meta_'] = ResolversParentTypes['S__Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['S__Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type A_AdvancedCraftResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['A_AdvancedCraft'] = ResolversParentTypes['A_AdvancedCraft']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stat?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  treasure?: Resolver<ResolversTypes['A_TreasureInStore'], ParentType, ContextType>;
  oldName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  newName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type A_ArenaResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['A_Arena'] = ResolversParentTypes['A_Arena']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cooldown?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  host?: Resolver<Maybe<ResolversTypes['A_Player']>, ParentType, ContextType>;
  arenaResult?: Resolver<Array<ResolversTypes['A_ArenaResults']>, ParentType, ContextType, RequireFields<A_ArenaarenaResultArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type A_ArenaResultsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['A_ArenaResults'] = ResolversParentTypes['A_ArenaResults']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  player?: Resolver<ResolversTypes['A_Player'], ParentType, ContextType>;
  arena?: Resolver<ResolversTypes['A_Arena'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  losses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type A_BasicCraftResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['A_BasicCraft'] = ResolversParentTypes['A_BasicCraft']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  oldName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  newName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type A_BasicPotionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['A_BasicPotion'] = ResolversParentTypes['A_BasicPotion']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  potionBalance?: Resolver<Array<ResolversTypes['A_BasicPotionBalance']>, ParentType, ContextType, RequireFields<A_BasicPotionpotionBalanceArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type A_BasicPotionBalanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['A_BasicPotionBalance'] = ResolversParentTypes['A_BasicPotionBalance']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  potion?: Resolver<ResolversTypes['A_BasicPotion'], ParentType, ContextType>;
  player?: Resolver<ResolversTypes['A_Player'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface A_BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['A_BigDecimal'], any> {
  name: 'A_BigDecimal';
}

export interface A_BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['A_Bytes'], any> {
  name: 'A_Bytes';
}

export type A_EquipCountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['A_EquipCount'] = ResolversParentTypes['A_EquipCount']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type A_EquipmentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['A_Equipment'] = ResolversParentTypes['A_Equipment']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stat?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  player?: Resolver<ResolversTypes['A_Player'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isEquipped?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type A_EquipmentInStoreResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['A_EquipmentInStore'] = ResolversParentTypes['A_EquipmentInStore']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stat?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface A_Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['A_Int8'], any> {
  name: 'A_Int8';
}

export type A_ListingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['A_Listing'] = ResolversParentTypes['A_Listing']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  seller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  player?: Resolver<ResolversTypes['A_Player'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type A_MagicMonsterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['A_MagicMonster'] = ResolversParentTypes['A_MagicMonster']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  xpReward?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  damage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cooldown?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type A_MonsterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['A_Monster'] = ResolversParentTypes['A_Monster']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  xpReward?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  damage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cooldown?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type A_PlayerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['A_Player'] = ResolversParentTypes['A_Player']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  Player_id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['A_User'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  classes?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stats?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  strength?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  magic?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  agility?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  defense?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  currentHealth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maxHealth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  currentMana?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maxMana?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalWins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalLosses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  potionBalance?: Resolver<Array<ResolversTypes['A_BasicPotionBalance']>, ParentType, ContextType, RequireFields<A_PlayerpotionBalanceArgs, 'skip' | 'first'>>;
  equipment?: Resolver<Array<ResolversTypes['A_Equipment']>, ParentType, ContextType, RequireFields<A_PlayerequipmentArgs, 'skip' | 'first'>>;
  treasure?: Resolver<Array<ResolversTypes['A_Treasure']>, ParentType, ContextType, RequireFields<A_PlayertreasureArgs, 'skip' | 'first'>>;
  arenaResult?: Resolver<Array<ResolversTypes['A_ArenaResults']>, ParentType, ContextType, RequireFields<A_PlayerarenaResultArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type A_SaleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['A_Sale'] = ResolversParentTypes['A_Sale']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  player?: Resolver<ResolversTypes['A_Player'], ParentType, ContextType>;
  seller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  buyer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type A_TreasureResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['A_Treasure'] = ResolversParentTypes['A_Treasure']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  treasureInStore?: Resolver<ResolversTypes['A_TreasureInStore'], ParentType, ContextType>;
  player?: Resolver<ResolversTypes['A_Player'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type A_TreasureCountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['A_TreasureCount'] = ResolversParentTypes['A_TreasureCount']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type A_TreasureInStoreResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['A_TreasureInStore'] = ResolversParentTypes['A_TreasureInStore']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type A_UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['A_User'] = ResolversParentTypes['A_User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  gold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gem?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  players?: Resolver<Array<ResolversTypes['A_Player']>, ParentType, ContextType, RequireFields<A_UserplayersArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type A__Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['A__Block_'] = ResolversParentTypes['A__Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['A_Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type A__Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['A__Meta_'] = ResolversParentTypes['A__Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['A__Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  T_Arena?: T_ArenaResolvers<ContextType>;
  T_ArenaResults?: T_ArenaResultsResolvers<ContextType>;
  T_BasicCraft?: T_BasicCraftResolvers<ContextType>;
  T_BasicPotion?: T_BasicPotionResolvers<ContextType>;
  T_BasicPotionBalance?: T_BasicPotionBalanceResolvers<ContextType>;
  T_BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  T_Bytes?: GraphQLScalarType;
  T_EquipCount?: T_EquipCountResolvers<ContextType>;
  T_Equipment?: T_EquipmentResolvers<ContextType>;
  T_EquipmentInStore?: T_EquipmentInStoreResolvers<ContextType>;
  T_Listing?: T_ListingResolvers<ContextType>;
  T_MagicMonster?: T_MagicMonsterResolvers<ContextType>;
  T_Monster?: T_MonsterResolvers<ContextType>;
  T_Player?: T_PlayerResolvers<ContextType>;
  T_Sale?: T_SaleResolvers<ContextType>;
  T_User?: T_UserResolvers<ContextType>;
  T__Block_?: T__Block_Resolvers<ContextType>;
  T__Meta_?: T__Meta_Resolvers<ContextType>;
  S_Arena?: S_ArenaResolvers<ContextType>;
  S_ArenaResults?: S_ArenaResultsResolvers<ContextType>;
  S_BasicCraft?: S_BasicCraftResolvers<ContextType>;
  S_BasicPotion?: S_BasicPotionResolvers<ContextType>;
  S_BasicPotionBalance?: S_BasicPotionBalanceResolvers<ContextType>;
  S_BigDecimal?: GraphQLScalarType;
  S_Bytes?: GraphQLScalarType;
  S_EquipCount?: S_EquipCountResolvers<ContextType>;
  S_Equipment?: S_EquipmentResolvers<ContextType>;
  S_EquipmentInStore?: S_EquipmentInStoreResolvers<ContextType>;
  S_Int8?: GraphQLScalarType;
  S_Listing?: S_ListingResolvers<ContextType>;
  S_MagicMonster?: S_MagicMonsterResolvers<ContextType>;
  S_Monster?: S_MonsterResolvers<ContextType>;
  S_Player?: S_PlayerResolvers<ContextType>;
  S_Sale?: S_SaleResolvers<ContextType>;
  S_User?: S_UserResolvers<ContextType>;
  S__Block_?: S__Block_Resolvers<ContextType>;
  S__Meta_?: S__Meta_Resolvers<ContextType>;
  A_AdvancedCraft?: A_AdvancedCraftResolvers<ContextType>;
  A_Arena?: A_ArenaResolvers<ContextType>;
  A_ArenaResults?: A_ArenaResultsResolvers<ContextType>;
  A_BasicCraft?: A_BasicCraftResolvers<ContextType>;
  A_BasicPotion?: A_BasicPotionResolvers<ContextType>;
  A_BasicPotionBalance?: A_BasicPotionBalanceResolvers<ContextType>;
  A_BigDecimal?: GraphQLScalarType;
  A_Bytes?: GraphQLScalarType;
  A_EquipCount?: A_EquipCountResolvers<ContextType>;
  A_Equipment?: A_EquipmentResolvers<ContextType>;
  A_EquipmentInStore?: A_EquipmentInStoreResolvers<ContextType>;
  A_Int8?: GraphQLScalarType;
  A_Listing?: A_ListingResolvers<ContextType>;
  A_MagicMonster?: A_MagicMonsterResolvers<ContextType>;
  A_Monster?: A_MonsterResolvers<ContextType>;
  A_Player?: A_PlayerResolvers<ContextType>;
  A_Sale?: A_SaleResolvers<ContextType>;
  A_Treasure?: A_TreasureResolvers<ContextType>;
  A_TreasureCount?: A_TreasureCountResolvers<ContextType>;
  A_TreasureInStore?: A_TreasureInStoreResolvers<ContextType>;
  A_User?: A_UserResolvers<ContextType>;
  A__Block_?: A__Block_Resolvers<ContextType>;
  A__Meta_?: A__Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = TaikoTypes.Context & ScrollTypes.Context & ArbitrumTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/Taiko/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    case ".graphclient/sources/Scroll/introspectionSchema":
      return Promise.resolve(importedModule$1) as T;
    
    case ".graphclient/sources/Arbitrum/introspectionSchema":
      return Promise.resolve(importedModule$2) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const scrollTransforms = [];
const taikoTransforms = [];
const arbitrumTransforms = [];
const additionalTypeDefs = [] as any[];
const scrollHandler = new GraphqlHandler({
              name: "Scroll",
              config: {"endpoint":"https://api.studio.thegraph.com/query/18216/omnikingdoms-scrollsepolia/version/latest"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Scroll"),
              logger: logger.child("Scroll"),
              importFn,
            });
const taikoHandler = new GraphqlHandler({
              name: "Taiko",
              config: {"endpoint":"http://43.153.91.121:8000/subgraphs/name/OmniKingdoms/okp"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Taiko"),
              logger: logger.child("Taiko"),
              importFn,
            });
const arbitrumHandler = new GraphqlHandler({
              name: "Arbitrum",
              config: {"endpoint":"https://api.studio.thegraph.com/query/18216/arboktest/version/latest"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Arbitrum"),
              logger: logger.child("Arbitrum"),
              importFn,
            });
scrollTransforms[0] = new PrefixTransform({
                  apiName: "Scroll",
                  config: {"value":"S_","includeRootOperations":true,"ignore":["_SubgraphErrorPolicy_"]},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
taikoTransforms[0] = new PrefixTransform({
                  apiName: "Taiko",
                  config: {"value":"T_","includeRootOperations":true,"ignore":["_SubgraphErrorPolicy_"]},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
arbitrumTransforms[0] = new PrefixTransform({
                  apiName: "Arbitrum",
                  config: {"value":"A_","includeRootOperations":true,"ignore":["_SubgraphErrorPolicy_"]},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
sources[0] = {
          name: 'Scroll',
          handler: scrollHandler,
          transforms: scrollTransforms
        }
sources[1] = {
          name: 'Taiko',
          handler: taikoHandler,
          transforms: taikoTransforms
        }
sources[2] = {
          name: 'Arbitrum',
          handler: arbitrumHandler,
          transforms: arbitrumTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));