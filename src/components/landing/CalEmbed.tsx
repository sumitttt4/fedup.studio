'use client';

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <div className="w-full max-w-[1000px] mx-auto rounded-2xl overflow-hidden border border-[#E7DED2]/50 bg-[#FDFBF7] shadow-sm">
      <Cal 
        namespace="30min"
        calLink="sumit-sharma/30min"
        style={{width:"100%",height:"100%",overflow:"scroll"}}
        config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}}
      />
    </div>
  );
}
