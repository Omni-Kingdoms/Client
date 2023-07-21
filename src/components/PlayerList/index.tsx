"use client";

export default function PlayerList({
  id,
  personal,
}: {
  id: BigInt;
  personal: boolean;
}) {
  console.log(id);
  return <>{Number(id)}</>;
}
