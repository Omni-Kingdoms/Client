"use client";

import { useAccount } from "wagmi";
import Character from "@/components/CharacterVaronve";
import { ConnectWallet } from "@/components/Shared/ConnectWallet";
import { isWrongNetworkChain } from "@/utils/chainvalidator";
import { contractStore } from "@/store/contractStore";
import { generateProof } from "@/utils/VaronveMarkleTree/VaronveMerkle";
import { useEffect, useState } from "react";

export default function Mint() {
  const { address, chain } = useAccount();
  const [proof, setProof] = useState<false | string[]>(false);

  const contract = contractStore((state) => state.diamond);

  useEffect(() => {
    const generate = async () => {
      setProof(await generateProof(address, contract, 2, chain?.id));
    };
    generate();
  }, []);
  if (chain?.id !== 534352) {
    return (
      <div className="relative min-h-[86.1vh] bg-connect min-w-full flex flex-col items-center justify-center">
        {!address ? (
          <h2 className="font-bold text-black m-4">Connect to play!</h2>
        ) : (
          <h2 className="font-bold text-black m-4">
            Wrong network, please reconnect.
          </h2>
        )}
        <ConnectWallet />
      </div>
    );
  } else if (!proof) {
    return (
      <div className="relative min-h-[86.1vh] bg-connect min-w-full flex flex-col items-center justify-center">
        <h2 className="font-bold text-black m-4">
          Address not whitelisted or alread claimed.
        </h2>
      </div>
    );
  } else {
    return <Character proof={proof} />;
  }
}
