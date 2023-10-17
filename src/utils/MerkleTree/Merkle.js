import { ethers } from "ethers";
import { MerkleTree } from "merkletreejs";
import { addresses } from "./WhiteListAddresses";
const keccak256 = require("keccak256");
import { formatEther, keccak256 as keccak256v, parseEther } from "viem";

export const removeDuplicates = () => {
  let uniqueAddresses = [...new Set(addresses)];
  console.log({ uniqueAddresses });
  console.log("raw length", addresses.length);
  console.log("final lenght", uniqueAddresses.length);
  // let newAddresses = [];
  // for (let i = 0; i < v2.length; i++) {
  //   newAddresses.push(v2[i].owner);
  // }
  // console.log(newAddresses);
};

export const claimAirdrop = async (contract) => {
  try {
    // Convert the proof elements to hexadecimal strings
    const amount = 50;
    const tx = await contract.claimAirdrop(proof, amount);
    await tx.wait();
    console.log(tx);
  } catch (error) {
    console.error("Error calling contract method:", error);
  }
};
export const generateProof = async (address, diamond, treasureId) => {
  const leafNodes = addresses.map((addr) => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, {
    sortPairs: true,
  });
  const leaf = ethers.utils.keccak256(address);

  const proof = merkleTree.getHexProof(leaf);
  console.log(proof);
  const verification = await diamond.read.verifyPlayerDropWhitelist([
    proof,
    treasureId,
    address,
  ]);
  console.log(verification);
  if (!verification) {
    return false;
  } else {
    const status = await diamond.read.claimedStatus([treasureId, address]);
    if (status) {
      return false;
    }
    return proof;
  }
};
export const verifyWhitelist = async (contract, address) => {
  try {
    // Convert the proof elements to hexadecimal strings

    const isWhitelisted = await contract.verifyWhitelist(proof, address);
    console.log(isWhitelisted);
    return isWhitelisted;
  } catch (error) {
    console.error("Error calling contract method:", error);
  }
};

export const generateMerkleRoot = async (contract) => {
  const drop = await contract.read.getPlayerDrop([1]);
  console.log({ drop });
  console.log(contract);
  const leaves = addresses.map((address) => keccak256v(address));
  console.log(leaves);
  const merkleTree = new MerkleTree(leaves, keccak256v, {
    sortPairs: true,
  });
  console.log(merkleTree);
  const root = merkleTree.getHexRoot();
  console.log(root);
  await contract.write.createPlayerDrop([root, "Scroll", parseEther("0.1")]);
  console.log(root);
};
