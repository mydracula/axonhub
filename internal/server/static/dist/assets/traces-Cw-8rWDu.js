import{k as c,n as d,u,g as i}from"./index-P4nSg7m-.js";import{u as h}from"./use-error-handler-r-BflFgU.js";import{t as y,a as T}from"./schema-DP2zWkPJ.js";function f(){return`
    query GetTraces(
      $first: Int
      $after: Cursor
      $orderBy: TraceOrder
      $where: TraceWhereInput
    ) {
      traces(first: $first, after: $after, orderBy: $orderBy, where: $where) {
        edges {
          node {
            id
            traceID
            firstUserQuery
            createdAt
            updatedAt
            thread {
              id
              threadID
            }
            requests(where: { status: completed }) {
              totalCount
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
  `}function p(){return`query GetTraceWithSegments($id: ID!) {
      node(id: $id) {
        ... on Trace {
          id
          traceID
          createdAt
          updatedAt
          usageMetadata {
            totalInputTokens
            totalOutputTokens
            totalTokens
            totalCost
            totalCachedTokens
            totalCachedWriteTokens
          }
          project {
            id
            name
          }
          thread {
            id
            threadID
          }
          requests(where: { status: completed }) {
            totalCount
          }
          rawRootSegment
        }
      }
    }
  `}function q(t){const{handleError:o}=h(),{t:s}=c(),e=d();return u({queryKey:["traces",t,e],queryFn:async()=>{try{const r=f(),n=e?{"X-Project-ID":e}:void 0,a={...t,where:{...t?.where,...e&&{projectID:e}}},l=await i(r,a,n);return y.parse(l?.traces)}catch(r){throw o(r,s("traces.errors.loadTracesFailed")),r}},enabled:!0})}function g(t){const{handleError:o}=h(),{t:s}=c(),e=d();return u({queryKey:["trace-with-segments",t,e],queryFn:async()=>{try{const r=p(),a=await i(r,{id:t},e?{"X-Project-ID":e}:void 0);if(!a.node)throw new Error("Trace not found");return T.parse(a.node)}catch(r){throw o(r,s("traces.errors.loadTraceDetailFailed")),r}},enabled:!!t})}export{q as a,g as u};
