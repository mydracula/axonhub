import{b as B,k,n as T,u as S,g as I,r as q,j as s,aE as O,aF as W,aG as z,aH as G,B as D}from"./index-P4nSg7m-.js";import{u as L}from"./use-error-handler-r-BflFgU.js";import{u as $}from"./useRequestPermissions-CyYJk3rB.js";import{p as C}from"./pagination-C7IrlftW.js";import{b as U}from"./schema-DvKmenh7.js";import{c as v}from"./channels-DomvIlhy.js";import{o as d,e as m,n,s as i,f as j,b as R,h as g}from"./schemas-p1YBaZih.js";import{d as b}from"./coerce-FXUa1JFf.js";import{T as X,a as A,b as E,c as F}from"./tooltip-DDIs6W_v.js";import{C as N}from"./check-CNW96W_D.js";import{C as Q}from"./copy-D3Pv56UD.js";import{C as J}from"./config_channels-B0hZv-T_.js";/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["line",{x1:"12",x2:"18",y1:"12",y2:"18",key:"1rg63v"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Z=B("copy-x",Y);/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],te=B("terminal",ee),Te=e=>{switch(e){case"completed":return"bg-green-100 text-green-800";case"failed":return"bg-red-100 text-red-800";case"pending":return"bg-yellow-100 text-yellow-800";case"processing":return"bg-blue-100 text-blue-800";default:return"bg-gray-100 text-gray-800"}},oe=j(["api","playground","test"]),se=d({itemCode:i(),quantity:n(),subtotal:n()}),P=d({id:i(),createdAt:b(),updatedAt:b(),requestID:i(),channel:v.partial().nullable().optional(),modelID:i(),promptTokens:n(),completionTokens:n(),totalTokens:n(),promptAudioTokens:n().nullable().optional(),promptCachedTokens:n().nullable().optional(),promptWriteCachedTokens:n().nullable().optional(),completionAudioTokens:n().nullable().optional(),completionReasoningTokens:n().nullable().optional(),completionAcceptedPredictionTokens:n().nullable().optional(),completionRejectedPredictionTokens:n().nullable().optional(),source:oe,format:i(),totalCost:n().nullable().optional(),costItems:m(se).nullable().optional()}),ne=d({node:P,cursor:i()}),Se=d({edges:m(ne),pageInfo:C,totalCount:n()});m(P);const ae=j(["pending","processing","completed","failed","canceled"]),re=j(["api","playground","test"]),ie=j(["pending","processing","completed","failed","canceled"]),_=d({id:i(),createdAt:b(),updatedAt:b(),channel:v.partial().nullable().optional(),modelID:i(),requestHeaders:g().nullable().optional(),requestBody:g(),responseBody:g().nullable(),responseChunks:m(g()).nullable(),errorMessage:i().nullable(),status:ie,format:i().optional(),metricsLatencyMs:n().nullable().optional(),metricsFirstTokenLatencyMs:n().nullable().optional()}),K=d({id:i(),createdAt:b(),updatedAt:b(),apiKey:U.partial().nullable().optional(),channel:v.partial().nullable().optional(),source:re,modelID:i(),contentSaved:R().optional(),contentStorageKey:i().nullable().optional(),requestHeaders:g().nullable().optional(),requestBody:g().nullable().optional(),responseBody:g().nullable().optional(),responseChunks:m(g()).nullable().optional(),status:ae,format:i().optional(),clientIP:i().nullable().optional(),stream:R().nullable(),metricsLatencyMs:n().nullable().optional(),metricsFirstTokenLatencyMs:n().nullable().optional(),executions:d({edges:m(d({node:_.partial().nullable().optional(),cursor:i()})),pageInfo:C,totalCount:n()}).optional(),usageLogs:d({edges:m(d({node:P.partial().nullable().optional(),cursor:i().optional()})).optional(),pageInfo:C.optional()}).optional().nullable()}),M=d({edges:m(d({node:K,cursor:i()})),pageInfo:C,totalCount:n()}),le=d({edges:m(d({node:_,cursor:i()})),pageInfo:C,totalCount:n()});function H(e){const o=e.canViewApiKeys?`
          apiKey {
            id
            name
          }`:"",t=e.canViewChannels?`
                channel {
                  id
                  name
                }`:"";return`
    query GetRequests(
      $first: Int
      $after: Cursor
      $last: Int
      $before: Cursor
      $orderBy: RequestOrder
      $where: RequestWhereInput
    ) {
      requests(first: $first, after: $after, last: $last, before: $before, orderBy: $orderBy, where: $where) {
        edges {
          node {
            id
            createdAt
            updatedAt${o}${t}
            source
            modelID
            stream
            status
            clientIP
            metricsLatencyMs
            metricsFirstTokenLatencyMs
            executions(first: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
              edges {
                node {
                  modelID
                  status
                  channel {
                    id
                    name
                  }
                }
                cursor
              }
              pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
              }
              totalCount
            }
            usageLogs(first: 1) {
              edges {
                node {
                  id
                  promptTokens
                  completionTokens
                  totalTokens
                  promptCachedTokens
                  promptWriteCachedTokens
                  totalCost
                }
              }
            }
          }
          cursor
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        totalCount
      }
    }
  `}function ce(e){const o=e.canViewApiKeys?`
          apiKey {
            id
            name
        }`:"",t=e.canViewChannels?`
          channel {
            id
            name
          }`:"";return`
    query GetRequestDetail($id: ID!) {
      node(id: $id) {
        ... on Request {
          id
          createdAt
          updatedAt${o}${t}
          source
          modelID
          stream
          clientIP
          projectID
          dataStorageID
          contentSaved
          contentStorageKey
          requestHeaders
          requestBody
          responseBody
          responseChunks
          status
          format
          usageLogs(first: 1) {
            edges {
              node {
                  id
                  promptTokens
                  completionTokens
                  totalTokens
                  promptCachedTokens
                  promptWriteCachedTokens
                  totalCost
                }
            }
          }
        }
      }
    }
  `}function ue(e){return`
    query GetRequestExecutions(
      $requestID: ID!
      $first: Int
      $after: Cursor
      $orderBy: RequestExecutionOrder
      $where: RequestExecutionWhereInput
    ) {
      node(id: $requestID) {
        ... on Request {
          executions(first: $first, after: $after, orderBy: $orderBy, where: $where) {
            edges {
              node {
                id
                createdAt
                updatedAt
                requestID${e.canViewChannels?`
              channel {
                  id
                  name
                  type
                  baseURL
              }`:""}
                modelID
                projectID
                dataStorageID
                requestHeaders
                requestBody
                responseBody
                responseChunks
                errorMessage
                status
                format
                stream
                metricsFirstTokenLatencyMs
              }
              cursor
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
            totalCount
          }
        }
      }
    }
  `}function $e(e){const{handleError:o}=L(),{t}=k(),a=$(),r=T();return S({queryKey:["requests",e,a,r],queryFn:async()=>{try{const l=H(a),p=r?{"X-Project-ID":r}:void 0,u={...e,where:{...e?.where,...r&&{projectID:r}}},h=await I(l,u,p);return M.parse(h?.requests)}catch(l){throw o(l,t("requests.errors.loadRequestsFailed")),l}},enabled:!0})}function ve(e){const{handleError:o}=L(),{t}=k(),a=$(),r=T();return S({queryKey:["request",e,a,r],queryFn:async()=>{try{const l=ce(a),u=await I(l,{id:e},r?{"X-Project-ID":r}:void 0);if(!u.node)throw new Error("Request not found");return K.parse(u.node)}catch(l){throw o(l,t("requests.errors.loadRequestDetailFailed")),l}},enabled:!!e})}async function Pe(e){const o=H(e.permissions),t=e.direction==="older"?{first:e.pageSize,after:e.cursor}:{last:e.pageSize,before:e.cursor},a={...e.where};e.projectId&&(a.projectID=e.projectId);const r=e.projectId?{"X-Project-ID":e.projectId}:void 0,l=await I(o,{...t,where:Object.keys(a).length>0?a:void 0,orderBy:{field:"CREATED_AT",direction:"DESC"}},r),p=M.parse(l?.requests);return{requests:p.edges.map(u=>u.node),pageInfo:p.pageInfo}}function De(e,o){const t=$(),a=T();return S({queryKey:["request-executions",e,o,t,a],queryFn:async()=>{const r=ue(t),l=a?{"X-Project-ID":a}:void 0,p={requestID:e,...o},u=await I(r,p,l);return le.parse(u?.node?.executions)},enabled:!!e})}function Re({open:e,onOpenChange:o,curlCommand:t,title:a}){const{t:r}=k(),[l,p]=q.useState(!1),[u,h]=q.useState(!1),x=q.useCallback(async()=>{try{await navigator.clipboard.writeText(t),p(!0),setTimeout(()=>p(!1),2e3)}catch(c){console.error("Failed to copy:",c)}},[t]),y=q.useCallback(async()=>{try{let c=t.replace(/"stream":\s*(true|false),?\s*/g,"");c=c.replace(/,\s*}/g,"}"),c=c.replace(/{\s*,/g,"{"),await navigator.clipboard.writeText(c),h(!0),setTimeout(()=>h(!1),2e3)}catch(c){console.error("Failed to copy non-stream curl:",c)}},[t]);return s.jsx(O,{open:e,onOpenChange:o,children:s.jsxs(W,{className:"flex max-h-[80vh] flex-col sm:max-w-3xl",children:[s.jsx(z,{children:s.jsxs(G,{className:"flex items-center gap-2",children:[s.jsx(te,{className:"h-5 w-5"}),a||r("requests.dialogs.curlPreview.title"),s.jsxs(X,{children:[s.jsxs(A,{children:[s.jsx(E,{asChild:!0,children:s.jsx(D,{variant:"ghost",size:"icon",className:"h-8 w-8",onClick:x,children:l?s.jsx(N,{className:"h-4 w-4 text-green-500"}):s.jsx(Q,{className:"h-4 w-4"})})}),s.jsx(F,{children:s.jsx("p",{children:r("requests.actions.copy")})})]}),s.jsxs(A,{children:[s.jsx(E,{asChild:!0,children:s.jsx(D,{variant:"ghost",size:"icon",className:"h-8 w-8",onClick:y,children:u?s.jsx(N,{className:"h-4 w-4 text-green-500"}):s.jsx(Z,{className:"h-4 w-4"})})}),s.jsx(F,{children:s.jsx("p",{children:r("requests.dialogs.curlPreview.copyNonStream")})})]})]})]})}),s.jsx("div",{className:"bg-muted/30 flex-1 overflow-auto rounded-lg border p-4",children:s.jsx("pre",{className:"whitespace-pre-wrap break-all font-mono text-sm",children:t})})]})})}const de={"openai/chat_completions":"/v1/chat/completions","openai/responses":"/v1/responses","openai/image_generation":"/v1/images/generations","openai/image_edit":"/v1/images/edits","openai/image_variation":"/v1/images/variations","openai/embeddings":"/v1/embeddings","anthropic/messages":"/v1/messages","gemini/contents":"/v1beta/models/{model}:generateContent","aisdk/text":"/api/chat","aisdk/datastream":"/api/datastream","jina/rerank":"/v1/rerank","jina/embeddings":"/jina/v1/embeddings"};function pe(e,o){if(!e)return"/v1/chat/completions";let t=de[e]||"/v1/chat/completions";return e==="gemini/contents"&&o?.model&&(t=t.replace("{model}",o.model)),t}function me(e){if(e)return J[e]?.apiFormat}function V(e){const{headers:o,body:t,baseUrl:a,apiFormat:r,channelType:l}=e,p=r||me(l),u=pe(p,t);let h;if(a){const y=a.replace(/\/+$/,"");let c=u;for(let f=1;f<=u.length;f++){const w=u.substring(0,f);y.endsWith(w)&&(c=u.substring(f))}h=`${y}${c}`}else h=`${typeof window<"u"?window.location.origin:""}${u}`;const x=[`curl '${h}'`];if(o&&typeof o=="object"){const y=["content-length","host","connection","accept-encoding","transfer-encoding"];Object.entries(o).forEach(([c,f])=>{if(!y.includes(c.toLowerCase())&&f){const w=String(f).replace(/'/g,"'\\''");x.push(`  -H '${c}: ${w}'`)}})}if(t){const c=(typeof t=="string"?t:JSON.stringify(t)).replace(/'/g,"'\\''");x.push(`  -d '${c}'`)}return x.join(` \\
`)}function Ae(e,o,t){return V({headers:e,body:o,apiFormat:t||"openai/chat_completions"})}function Ee(e,o,t,a){return V({headers:e,body:o,baseUrl:t?.baseURL,channelType:t?.type,apiFormat:a})}export{Re as C,te as T,ve as a,De as b,Ee as c,Te as d,$e as e,Pe as f,Ae as g,Se as u};
