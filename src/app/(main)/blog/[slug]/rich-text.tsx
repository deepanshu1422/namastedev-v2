import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Document } from "@contentful/rich-text-types";

export const RichText = ({ document }: { document: Document }) => {
  // const document: Document = {
  //   nodeType: "document",
  //   data: {},
  //   content: [
  //     {
  //       nodeType: "paragraph",
  //       data: {},
  //       content: [
  //         {
  //           nodeType: "text",
  //           value:
  //             "So your backend has a few API routes that need protectin’ and some user’s that need authorizin’. Much like myself at one point, you’re probably wondering how this can be achieved. Thankfully, we have JSON Web Tokens (JWT) (among other things) for that. ",
  //           marks: [],
  //           data: {},
  //         },
  //       ],
  //     },
  //     {
  //       nodeType: "paragraph",
  //       data: {},
  //       content: [
  //         {
  //           nodeType: "text",
  //           value:
  //             "What exactly is JWT? No better way to explain it than direct from the JWT website: ",
  //           marks: [],
  //           data: {},
  //         },
  //       ],
  //     },
  //     {
  //       nodeType: "blockquote",
  //       data: {},
  //       content: [
  //         {
  //           nodeType: "paragraph",
  //           data: {},
  //           content: [
  //             {
  //               nodeType: "text",
  //               value: "JSON Web Token (JWT) is an open standard (",
  //               marks: [
  //                 {
  //                   type: "italic",
  //                 },
  //               ],
  //               data: {},
  //             },
  //             {
  //               nodeType: "hyperlink",
  //               data: {
  //                 uri: "https://tools.ietf.org/html/rfc7519",
  //               },
  //               content: [
  //                 {
  //                   nodeType: "text",
  //                   value: "RFC 7519",
  //                   marks: [],
  //                   data: {},
  //                 },
  //               ],
  //             },
  //             {
  //               nodeType: "text",
  //               value:
  //                 ") that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the ",
  //               marks: [
  //                 {
  //                   type: "italic",
  //                 },
  //               ],
  //               data: {},
  //             },
  //             {
  //               nodeType: "text",
  //               value: "HMAC",
  //               marks: [
  //                 {
  //                   type: "italic",
  //                 },
  //                 {
  //                   type: "bold",
  //                 },
  //               ],
  //               data: {},
  //             },
  //             {
  //               nodeType: "text",
  //               value: " algorithm) or a public/private key pair using ",
  //               marks: [
  //                 {
  //                   type: "italic",
  //                 },
  //               ],
  //               data: {},
  //             },
  //             {
  //               nodeType: "text",
  //               value: "RSA",
  //               marks: [
  //                 {
  //                   type: "italic",
  //                 },
  //                 {
  //                   type: "bold",
  //                 },
  //               ],
  //               data: {},
  //             },
  //             {
  //               nodeType: "text",
  //               value: " or ",
  //               marks: [
  //                 {
  //                   type: "italic",
  //                 },
  //               ],
  //               data: {},
  //             },
  //             {
  //               nodeType: "text",
  //               value: "ECDSA",
  //               marks: [
  //                 {
  //                   type: "italic",
  //                 },
  //                 {
  //                   type: "bold",
  //                 },
  //               ],
  //               data: {},
  //             },
  //             {
  //               nodeType: "text",
  //               value: ".",
  //               marks: [
  //                 {
  //                   type: "italic",
  //                 },
  //               ],
  //               data: {},
  //             },
  //             {
  //               nodeType: "text",
  //               value: " ",
  //               marks: [],
  //               data: {},
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       nodeType: "paragraph",
  //       data: {},
  //       content: [
  //         {
  //           nodeType: "text",
  //           value:
  //             "Arguably one of the largest use cases for JWT is authorization. We can generate a JWT token in the backend that is specific to a user, pass this JWT token to the frontend, and then our frontend can send this token alongside requests to access protected API routes.",
  //           marks: [],
  //           data: {},
  //         },
  //       ],
  //     },
  //     {
  //       nodeType: "paragraph",
  //       data: {},
  //       content: [
  //         {
  //           nodeType: "text",
  //           value:
  //             "JWT tokens can be given an expiration time. They can also be generated with no expiration, however I believe it’s best practice to make sure your tokens have an expiration and renew at certain intervals. This will mitigate the threat of one single token being stolen and used to access routes over-and-over again.",
  //           marks: [],
  //           data: {},
  //         },
  //       ],
  //     },
  //     {
  //       nodeType: "paragraph",
  //       data: {},
  //       content: [
  //         {
  //           nodeType: "text",
  //           value:
  //             "Let’s touch on the security of JWT tokens for a few more moments. When a JWT token is generated, there is a secret that is used to generate the token. Only the server should know this secret. If someone were to modify the data contained in the JWT, the server would fail to decode it. This means the server can trust any JWT that it can decode and verify. A hacker could also intercept network traffic between server and client to get the JWT token (much like they would with cookies). This can be prevented by always sending the token back and forth over HTTPS. It is mandatory that HTTPS should be used with JWT.",
  //           marks: [],
  //           data: {},
  //         },
  //       ],
  //     },
  //     {
  //       nodeType: "paragraph",
  //       data: {},
  //       content: [
  //         {
  //           nodeType: "text",
  //           value:
  //             "I would definitely recommend reading more in-depth in regards to the security of JWT tokens. This is very important, especially if your application contains sensitive data.",
  //           marks: [
  //             {
  //               type: "italic",
  //             },
  //           ],
  //           data: {},
  //         },
  //       ],
  //     },
  //   ],
  // };

  return documentToHtmlString(document);
};
