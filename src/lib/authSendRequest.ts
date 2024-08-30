export function html(params: { url: string; host: string; }) {
    const { url, host } = params

    return `
 <body style="background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:560px;margin:0 auto;padding:20px 0 48px">
      <tbody>
        <tr style="width:100%">
          <td><img alt="Linear" height="42" src="https://namastedev-clone.vercel.app/logo.png" style="display:block;outline:none;border:none;text-decoration:none;border-radius:21px;width:42px;height:42px" width="42" />
            <h1 style="font-size:24px;letter-spacing:-0.5px;line-height:1.3;font-weight:400;color:#484848;padding:17px 0 0">Your magic link for Sign In</h1>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:27px 0 27px">
              <tbody>
                <tr>
                  <td><a href="${url}" style="line-height:100%;text-decoration:none;display:block;max-width:100%;background-color:#134543;border-radius:3px;font-weight:600;color:#fff;font-size:15px;text-align:center;padding:11px 23px 11px 23px" target="_blank"><span><!--[if mso]><i style="mso-font-width:383.33333333333337%;mso-text-raise:16.5" hidden>&#8202;&#8202;&#8202;</i><![endif]--></span><span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:8.25px">Sign In to 30DC</span><span><!--[if mso]><i style="mso-font-width:383.33333333333337%" hidden>&#8202;&#8202;&#8202;&#8203;</i><![endif]--></span></a></td>
                </tr>
              </tbody>
            </table>
            <p style="font-size:15px;line-height:1.4;margin:0 0 15px;color:#3c4149">This link and code will only be valid for the next 45 minutes. If the link does not work, it means either it is expired or used before.</p>
            <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#dfe1e4;margin:42px 0 26px" /><a href="https://30dayscoding.com" style="color:#b4becc;text-decoration:none;font-size:14px" target="_blank">30dayscoding</a>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
  `
}

// Email Text body (fallback for email clients that don't render HTML, e.g. feature phones)
export function text({ url, host }: { url: string; host: string }) {
    return `Sign in to ${host}\n${url}\n\n`
}