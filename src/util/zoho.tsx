import Script from "next/script";
import React from "react";

export default function Zoho() {
  return (
    <Script
      type="text/javascript"
      id="zsiqchat"
      dangerouslySetInnerHTML={{
        __html: `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "siq928f5d16a17e1551fbf7405d836dd7a4f6edd1f50da7f818659ee864426b05c5", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zohopublic.in/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);`,
      }}
    />
  );
}




