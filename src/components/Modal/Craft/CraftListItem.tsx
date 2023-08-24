"use client";
import {
  S_BasicCrafts,
} from "@/lib/Queries";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export default function CraftListItem() {
  console.log(S_BasicCrafts);
  const { data } = useSuspenseQuery(S_BasicCrafts, {
    variables: { search: "Boots" },
  });
  console.log(data);
  if (data) {
    return (
      <>
        {(data as any)!.S_basicCrafts.map((item: any) => (
          <div key={item.id}>
            <p>New Name:{item.newName}</p>
            <p>Old Name:{item.oldName}</p>
            <p>Slot:{item.slot}</p>
            <p>Value:{item.value}</p>
          </div>
        ))}
      </>
    );
  } else {
    return <></>;
  }
}
