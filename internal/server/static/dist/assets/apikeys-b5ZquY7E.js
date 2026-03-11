import{k as u,n as c,u as I,d as y,e as p,t as o,g as d}from"./index-P4nSg7m-.js";import{u as A}from"./use-error-handler-r-BflFgU.js";import{u as K}from"./useRequestPermissions-CyYJk3rB.js";import{a as m,b as h,c as f}from"./schema-DvKmenh7.js";function k(e){return`
    query GetApiKeys($first: Int, $after: Cursor, $orderBy: APIKeyOrder, $where: APIKeyWhereInput) {
      apiKeys(first: $first, after: $after, orderBy: $orderBy, where: $where) {
        edges {
          node {
            id
            createdAt
            updatedAt${e.canViewUsers?`
          user {
            id
            firstName
            lastName
          }`:""}
            key
            name
            type
            status
            scopes
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
  `}function D(e){return`
    query GetApiKey($id: ID!) {
      node(id: $id) {
        ... on APIKey {
        id
        createdAt
        updatedAt${e.canViewUsers?`
      user {
        id
        firstName
        lastName
      }`:""}
        key
        name
        type
        status
        scopes
        profiles {
          activeProfile
          profiles {
            name
            modelMappings { from to }
            channelIDs
            channelTags
            modelIDs
            loadBalanceStrategy
            quota {
              requests
              totalTokens
              cost
              period {
                type
                pastDuration { value unit }
                calendarDuration { unit }
              }
            }
          }
        }
      }
    }
}
  `}function E(e){return`
    mutation CreateAPIKey($input: CreateAPIKeyInput!) {
      createAPIKey(input: $input) {
        id
        createdAt
        updatedAt${e.canViewUsers?`
      user {
        id
        firstName
        lastName
      }`:""}
        key
        name
        type
        status
        scopes
      }
    }
  `}function b(e){return`
    mutation UpdateAPIKey($id: ID!, $input: UpdateAPIKeyInput!) {
      updateAPIKey(id: $id, input: $input) {
        id
        createdAt
        updatedAt${e.canViewUsers?`
      user {
        id
        firstName
        lastName
      }`:""}
        key
        name
        type
        status
        scopes
      }
    }
  `}const q=`
  mutation UpdateAPIKeyStatus($id: ID!, $status: APIKeyStatus!) {
    updateAPIKeyStatus(id: $id, status: $status) {
      id
      status
    }
  }
`,g=`
  mutation UpdateAPIKeyProfiles($id: ID!, $input: UpdateAPIKeyProfilesInput!) {
    updateAPIKeyProfiles(id: $id, input: $input) {
      id
      name
      status
      profiles {
        activeProfile
        profiles {
          name
          modelMappings {
            from
            to
          }
          channelIDs
          channelTags
          modelIDs
          loadBalanceStrategy
          quota {
            requests
            totalTokens
            cost
            period {
              type
              pastDuration { value unit }
              calendarDuration { unit }
            }
          }
        }
      }
    }
  }
`,U=`
  mutation BulkDisableAPIKeys($ids: [ID!]!) {
    bulkDisableAPIKeys(ids: $ids)
  }
`,$=`
  mutation BulkEnableAPIKeys($ids: [ID!]!) {
    bulkEnableAPIKeys(ids: $ids)
  }
`,v=`
  mutation BulkArchiveAPIKeys($ids: [ID!]!) {
    bulkArchiveAPIKeys(ids: $ids)
  }
`,S=`
  query APIKeyQuotaUsages($apiKeyId: ID!) {
    apiKeyQuotaUsages(apiKeyId: $apiKeyId) {
      profileName
      quota {
        requests
        totalTokens
        cost
        period {
          type
          pastDuration { value unit }
          calendarDuration { unit }
        }
      }
      window { start end }
      usage { requestCount totalTokens totalCost }
    }
  }
`;function C(e,r){const{t:n}=u(),{handleError:s}=A(),t=K(),a=c();return I({queryKey:["apiKeys",e,t,a],queryFn:async()=>{try{const i=k(t),P=await d(i,e,a?{"X-Project-ID":a}:void 0);return m.parse(P?.apiKeys)}catch(i){throw s(i,n("apikeys.errors.fetchData")),i}},enabled:!r?.disableAutoFetch&&!!a})}function F(e){const{t:r}=u(),{handleError:n}=A(),s=K(),t=c();return I({queryKey:["apiKey",e,s,t],queryFn:async()=>{try{const a=D(s),l=await d(a,{id:e},t?{"X-Project-ID":t}:void 0);return h.parse(l.node)}catch(a){throw n(a,r("apikeys.errors.fetchDetails")),a}},enabled:!!e})}function w(e,r){const{t:n}=u(),{handleError:s}=A(),t=c();return I({queryKey:["apiKeyQuotaUsages",e,t],queryFn:async()=>{try{const i=await d(S,{apiKeyId:e},t?{"X-Project-ID":t}:void 0);return f.array().parse(i.apiKeyQuotaUsages)}catch(a){throw s(a,n("apikeys.errors.fetchDetails")),a}},enabled:!!e&&(r?.enabled??!0),refetchInterval:r?.refetchInterval})}function B(){const{t:e}=u(),r=y(),n=K(),s=c();return p({mutationFn:t=>{const a=E(n),i={...t,projectID:t.projectID??(s||void 0)};return d(a,{input:i},s?{"X-Project-ID":s}:void 0)},onSuccess:()=>{r.invalidateQueries({queryKey:["apiKeys"]}),o.success(e("apikeys.messages.createSuccess"))},onError:t=>{o.error(e("apikeys.messages.createError"))}})}function N(){const{t:e}=u(),r=y(),n=K(),s=c();return p({mutationFn:({id:t,input:a})=>{const i=b(n);return d(i,{id:t,input:a},s?{"X-Project-ID":s}:void 0)},onSuccess:(t,a)=>{r.invalidateQueries({queryKey:["apiKeys"]}),r.invalidateQueries({queryKey:["apiKey",a.id]}),o.success(e("apikeys.messages.updateSuccess"))},onError:t=>{o.error(e("apikeys.messages.updateError"))}})}function M(){const{t:e}=u(),r=y(),n=c();return p({mutationFn:({id:s,status:t})=>d(q,{id:s,status:t},n?{"X-Project-ID":n}:void 0),onSuccess:(s,t)=>{r.invalidateQueries({queryKey:["apiKeys"]}),r.invalidateQueries({queryKey:["apiKey",t.id]});const a=s.updateAPIKeyStatus.status==="enabled"?e("apikeys.status.enabled"):s.updateAPIKeyStatus.status==="disabled"?e("apikeys.status.disabled"):e("apikeys.status.archived");o.success(e("apikeys.messages.statusUpdateSuccess",{status:a}))},onError:s=>{o.error(e("apikeys.messages.statusUpdateError"))}})}function X(){const{t:e}=u(),r=y(),n=c();return p({mutationFn:({id:s,input:t})=>d(g,{id:s,input:t},n?{"X-Project-ID":n}:void 0),onSuccess:(s,t)=>{r.invalidateQueries({queryKey:["apiKeys"]}),r.invalidateQueries({queryKey:["apiKey",t.id]}),o.success(e("apikeys.messages.profilesUpdateSuccess"))},onError:s=>{o.error(e("apikeys.messages.profilesUpdateError"))}})}function O(){const{t:e}=u(),r=y(),n=c();return p({mutationFn:async s=>(await d(U,{ids:s},n?{"X-Project-ID":n}:void 0)).bulkDisableAPIKeys,onSuccess:(s,t)=>{r.invalidateQueries({queryKey:["apiKeys"]}),o.success(e("apikeys.messages.bulkDisableSuccess",{count:t.length}))},onError:s=>{o.error(e("apikeys.messages.bulkDisableError"))}})}function Y(){const{t:e}=u(),r=y(),n=c();return p({mutationFn:async s=>(await d($,{ids:s},n?{"X-Project-ID":n}:void 0)).bulkEnableAPIKeys,onSuccess:(s,t)=>{r.invalidateQueries({queryKey:["apiKeys"]}),o.success(e("apikeys.messages.bulkEnableSuccess",{count:t.length}))},onError:s=>{o.error(e("apikeys.messages.bulkEnableError"))}})}function L(){const{t:e}=u(),r=y(),n=c();return p({mutationFn:async s=>(await d(v,{ids:s},n?{"X-Project-ID":n}:void 0)).bulkArchiveAPIKeys,onSuccess:(s,t)=>{r.invalidateQueries({queryKey:["apiKeys"]}),o.success(e("apikeys.messages.bulkArchiveSuccess",{count:t.length}))},onError:s=>{o.error(e("apikeys.messages.bulkArchiveError"))}})}export{M as a,L as b,O as c,Y as d,B as e,N as f,w as g,X as h,F as i,C as u};
