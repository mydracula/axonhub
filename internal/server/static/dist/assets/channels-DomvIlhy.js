import{k as c,u as C,d as m,e as h,t as o,g as u}from"./index-P4nSg7m-.js";import{p as D}from"./pagination-C7IrlftW.js";import{u as I}from"./use-error-handler-r-BflFgU.js";import{o as r,n as p,e as l,s,b as g,f,u as L,h as O,i as S}from"./schemas-p1YBaZih.js";f(["openai/chat_completions","openai/responses","openai/image_generation","openai/image_edit","openai/image_variation","openai/embeddings","anthropic/messages","gemini/contents","aisdk/text","aisdk/datastream","jina/rerank","jina/embeddings"]);const E=f(["openai","openai_responses","codex","anthropic","anthropic_aws","anthropic_gcp","gemini_openai","gemini","gemini_vertex","deepseek","deepseek_anthropic","deepinfra","doubao","doubao_anthropic","moonshot","moonshot_anthropic","zhipu","zai","zhipu_anthropic","zai_anthropic","vercel","anthropic_fake","openai_fake","openrouter","xiaomi","xai","ppio","siliconflow","volcengine","longcat","longcat_anthropic","minimax","minimax_anthropic","aihubmix","burncloud","modelscope","bailian","jina","github","github_copilot","claudecode","antigravity","cerebras","nanogpt"]),T=f(["enabled","disabled","archived"]),R=f(["unlimited","require","forbid"]),M=r({stream:R.optional()}),$=r({from:s(),to:s()});r({key:s().min(1,"Header key is required"),value:s()});const P=r({op:f(["set","delete","rename","copy"]),path:s().optional(),from:s().optional(),to:s().optional(),value:O().optional(),condition:s().optional()}),w=f(["disabled","environment","url"]),F=r({type:w,url:s().optional(),username:s().optional(),password:s().optional()}),Q=r({forceArrayInstructions:g().optional(),forceArrayInputs:g().optional(),replaceDeveloperRoleWithSystem:g().optional()}),B=r({timestamp:p(),totalRequestCount:p(),successRequestCount:p(),avgTokensPerSecond:p().optional().nullable(),avgTimeToFirstTokenMs:p().optional().nullable()});r({channelID:s(),points:l(B)});const _=r({extraModelPrefix:s().optional(),modelMappings:l($).nullable(),autoTrimedModelPrefixes:l(s()).optional().nullable(),hideOriginalModels:g().optional(),hideMappedModels:g().optional(),bodyOverrideOperations:l(P).optional(),headerOverrideOperations:l(P).optional(),proxy:F.optional().nullable(),transformOptions:Q.optional()}),K=r({requestModel:s(),actualModel:s(),source:s()}),x=r({apiKey:s().optional().nullable(),apiKeys:l(s()).optional().nullable(),oauth:r({accessToken:s().optional().nullable(),refreshToken:s().optional().nullable(),clientID:s().optional().nullable(),accountID:s().optional().nullable(),expiresAt:s().optional().nullable(),tokenType:s().optional().nullable(),scopes:l(s()).optional().nullable()}).optional().nullable(),gcp:r({region:s(),projectID:s(),jsonData:s()}).optional().nullable()}),H=r({key:s(),disabledAt:s(),errorCode:p(),reason:s().optional().nullable()}),A=r({id:s(),createdAt:s(),updatedAt:s(),type:E,baseURL:s(),name:s(),status:T,policies:M.optional().nullable(),credentials:x.optional().nullable(),disabledAPIKeys:l(H).optional().nullable(),supportedModels:l(s()),autoSyncSupportedModels:g().default(!1),autoSyncModelPattern:s().optional().default(""),manualModels:l(s()).optional().default([]).nullable(),tags:l(s()).optional().default([]).nullable(),defaultTestModel:s(),settings:_.optional().nullable(),orderingWeight:p().optional().default(0),errorMessage:s().optional().nullable(),remark:s().optional().nullable(),allModelEntries:l(K).optional()}),j=f(["flat_fee","usage_per_unit","usage_tiered"]),W=f(["prompt_tokens","completion_tokens","prompt_cached_tokens","prompt_write_cached_tokens"]),Y=r({upTo:p().nullable().optional(),pricePerUnit:S([s(),p()])}),G=r({tiers:l(Y)}),q=r({mode:j,flatFee:S([s(),p()]).nullable().optional(),usagePerUnit:S([s(),p()]).nullable().optional(),usageTiered:G.nullable().optional()}),V=r({variantCode:f(["five_min","one_hour"]),pricing:q}),z=r({itemCode:W,pricing:q,promptWriteCacheVariants:l(V).nullable().optional()}),N=r({items:l(z)}),k=r({id:s(),modelID:s(),price:N});r({modelId:s(),price:N});function v(n,a,e){if(!a)return;const t=n==="github_copilot";if(t&&!a.trim().startsWith("{")){e.addIssue({code:"custom",message:"channels.dialogs.oauth.errors.copilotCredentialsInvalid",path:["credentials","apiKey"]});return}if(!a.trim().startsWith("{"))return;const i={code:"custom",message:"channels.dialogs.oauth.errors.credentialsInvalid",path:["credentials","apiKey"]};let d;try{d=JSON.parse(a)}catch{e.addIssue(i);return}r({access_token:s().min(1),refresh_token:t?s().optional():s().min(1)}).safeParse(d).success||e.addIssue(i)}const Le=r({type:E,baseURL:L("Please enter a valid URL"),name:s().min(1,"Name is required"),policies:M.optional(),supportedModels:l(s()).min(0,"At least one supported model is required"),autoSyncSupportedModels:g().optional().default(!1),autoSyncModelPattern:s().optional().default(""),manualModels:l(s()).optional().nullable(),tags:l(s()).optional().default([]),defaultTestModel:s().min(1,"Please select a default test model"),remark:s().optional(),orderingWeight:p().int().optional(),settings:_.optional(),credentials:r({apiKey:s().optional(),apiKeys:l(s()).optional().default([]),gcp:r({region:s().optional(),projectID:s().optional(),jsonData:s().optional()}).optional()})}).superRefine((n,a)=>{const e=n.type==="codex"||n.type==="claudecode"||n.type==="antigravity"||n.type==="github_copilot",t=n.credentials.apiKey&&n.credentials.apiKey.trim().length>0,i=n.credentials.apiKeys&&n.credentials.apiKeys.some(d=>d.trim().length>0);if(n.type==="github_copilot"&&!t&&a.addIssue({code:"custom",message:"channels.dialogs.oauth.errors.copilotCredentialsRequired",path:["credentials","apiKey"]}),!t&&!i&&n.type!=="anthropic_aws"&&n.type!=="anthropic_gcp"&&a.addIssue({code:"custom",message:"At least one API Key is required",path:["credentials","apiKeys"]}),e&&t&&v(n.type,n.credentials.apiKey,a),n.type==="anthropic_gcp"){const d=n.credentials?.gcp;d?.region||a.addIssue({code:"custom",message:"GCP Region is required",path:["credentials","gcp","region"]}),d?.projectID||a.addIssue({code:"custom",message:"GCP Project ID is required",path:["credentials","gcp","projectID"]}),d?.jsonData||a.addIssue({code:"custom",message:"GCP Service Account JSON is required",path:["credentials","gcp","jsonData"]})}}),Oe=r({type:E.optional(),baseURL:s().url("Please enter a valid URL").optional(),name:s().min(1,"Name is required").optional(),policies:M.optional(),supportedModels:l(s()).min(1,"At least one supported model is required").optional(),autoSyncSupportedModels:g().optional(),autoSyncModelPattern:s().optional(),manualModels:l(s()).optional().nullable(),tags:l(s()).optional(),defaultTestModel:s().min(1,"Please select a default test model").optional(),settings:_.optional(),errorMessage:s().optional().nullable(),remark:s().optional().nullable(),credentials:r({apiKey:s().optional(),apiKeys:l(s()).optional(),gcp:r({region:s().optional(),projectID:s().optional(),jsonData:s().optional()}).optional()}).optional(),orderingWeight:p().optional()}).superRefine((n,a)=>{const e=n.type,t=n.credentials?.apiKey&&n.credentials.apiKey.trim().length>0,i=e==="codex"||e==="claudecode"||e==="antigravity"||e==="github_copilot";let d=e;if(!d&&t){const y=a.parent;y&&typeof y=="object"&&"type"in y&&(d=y.type)}const b=t&&n.credentials?.apiKey?.trim().startsWith("{");if(i||d==="github_copilot"||b){if(b&&!d){try{JSON.parse(n.credentials.apiKey).access_token||a.addIssue({code:"custom",message:"channels.dialogs.oauth.errors.copilotCredentialsInvalid",path:["credentials","apiKey"]})}catch{a.addIssue({code:"custom",message:"channels.dialogs.oauth.errors.copilotCredentialsInvalid",path:["credentials","apiKey"]})}return}v(d,n.credentials?.apiKey,a)}if(n.type==="anthropic_gcp"&&n.credentials){const y=n.credentials.gcp;y?.region||a.addIssue({code:"custom",message:"GCP Region is required",path:["credentials","gcp","region"]}),y?.projectID||a.addIssue({code:"custom",message:"GCP Project ID is required",path:["credentials","gcp","projectID"]}),y?.jsonData||a.addIssue({code:"custom",message:"GCP Service Account JSON is required",path:["credentials","gcp","jsonData"]})}}),J=r({edges:l(r({node:A,cursor:s()})),pageInfo:D,totalCount:p()}),X=r({type:E,name:s().min(1,"Name is required"),baseURL:s().url("Please enter a valid URL").min(1,"Base URL is required"),apiKey:s().min(1,"API Key is required"),supportedModels:l(s()).min(1,"At least one supported model is required"),defaultTestModel:s().min(1,"Please select a default test model")});r({channels:l(X).min(1,"At least one channel is required")});const Z=r({success:g(),created:p(),failed:p(),errors:l(s()).optional().nullable(),channels:l(A).nullable()}),Re=r({text:s().min(1,"Please enter data to import")}),ee=r({id:s(),name:s(),type:E,status:T,baseURL:s(),orderingWeight:p(),tags:l(s()).optional().default([]).nullable(),supportedModels:l(s()).optional().default([]).nullable(),allModelEntries:l(K).optional()}),ne=r({edges:l(r({node:ee})),totalCount:p()});r({channels:l(r({id:s(),orderingWeight:p()})).min(1,"At least one channel is required")});const ae=r({success:g(),updated:p(),channels:l(A)}),se=`
  query QueryChannelNames($input: QueryChannelInput!) {
    queryChannels(input: $input) {
      edges {
        node {
          name
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`,te=r({edges:l(r({node:r({name:s()}),cursor:s()})),pageInfo:D.pick({hasNextPage:!0,endCursor:!0})}),re=`
  mutation CreateChannel($input: CreateChannelInput!) {
    createChannel(input: $input) {
      id
      type
      createdAt
      updatedAt
      type
      baseURL
      name
      status
      policies {
        stream
      }
      supportedModels
      autoSyncSupportedModels
      autoSyncModelPattern
      manualModels
      tags
      defaultTestModel
        settings {
          extraModelPrefix
          modelMappings {
            from
            to
          }
          autoTrimedModelPrefixes
          hideOriginalModels
          hideMappedModels
          proxy {
            type
            url
            username
            password
          }
          transformOptions {
            forceArrayInstructions
            forceArrayInputs
            replaceDeveloperRoleWithSystem
          }
        }
      orderingWeight
      remark
    }
  }
`,U=`
  mutation UpdateChannel($id: ID!, $input: UpdateChannelInput!) {
    updateChannel(id: $id, input: $input) {
      id
      type
      createdAt
      updatedAt
      baseURL
      name
      status
      policies {
        stream
      }
      supportedModels
      autoSyncSupportedModels
      autoSyncModelPattern
      manualModels
      tags
      defaultTestModel
        settings {
          extraModelPrefix
          modelMappings {
            from
            to
          }
          autoTrimedModelPrefixes
          hideOriginalModels
          hideMappedModels
          proxy {
            type
            url
            username
            password
          }
          transformOptions {
            forceArrayInstructions
            forceArrayInputs
            replaceDeveloperRoleWithSystem
          }
        }
      orderingWeight
      errorMessage
      remark
    }
  }
`,oe=`
  mutation UpdateChannelStatus($id: ID!, $status: ChannelStatus!) {
    updateChannelStatus(id: $id, status: $status) {
      id
      status
    }
  }
`,le=`
  mutation BulkArchiveChannels($ids: [ID!]!) {
    bulkArchiveChannels(ids: $ids)
  }
`,ie=`
  mutation BulkDisableChannels($ids: [ID!]!) {
    bulkDisableChannels(ids: $ids)
  }
`,ce=`
  mutation BulkEnableChannels($ids: [ID!]!) {
    bulkEnableChannels(ids: $ids)
  }
`,ue=`
  mutation DeleteChannel($id: ID!) {
    deleteChannel(id: $id)
  }
`,de=`
  mutation BulkDeleteChannels($ids: [ID!]!) {
    bulkDeleteChannels(ids: $ids)
  }
`,pe=`
  mutation TestChannel($input: TestChannelInput!) {
    testChannel(input: $input) {
      latency
      success
      error
      message
    }
  }
`,he=`
  mutation BulkImportChannels($input: BulkImportChannelsInput!) {
    bulkImportChannels(input: $input) {
      success
      created
      failed
      errors
      channels {
        id
        createdAt
        updatedAt
        type
        baseURL
        name
        status
          supportedModels
        autoSyncSupportedModels
        autoSyncModelPattern
        manualModels
        tags
        defaultTestModel
        settings {
          extraModelPrefix
          modelMappings {
            from
            to
          }
          autoTrimedModelPrefixes
          hideOriginalModels
          hideMappedModels
          transformOptions {
            forceArrayInstructions
            forceArrayInputs
            replaceDeveloperRoleWithSystem
          }
        }
      }
    }
  }
`,me=`
  mutation EnableChannelAPIKey($channelID: ID!, $key: String!) {
    enableChannelAPIKey(channelID: $channelID, key: $key)
  }
`,ye=`
  mutation EnableAllChannelAPIKeys($channelID: ID!) {
    enableAllChannelAPIKeys(channelID: $channelID)
  }
`,ge=`
  mutation EnableSelectedChannelAPIKeys($channelID: ID!, $keys: [String!]!) {
    enableSelectedChannelAPIKeys(channelID: $channelID, keys: $keys)
  }
`,Ce=`
  mutation DeleteDisabledChannelAPIKeys($channelID: ID!, $keys: [String!]!) {
    deleteDisabledChannelAPIKeys(channelID: $channelID, keys: $keys) {
      success
      message
    }
  }
`,Ie=`
  query GetChannelDisabledAPIKeys($id: ID!) {
    node(id: $id) {
      ... on Channel {
        id
        disabledAPIKeys {
          key
          disabledAt
          errorCode
          reason
        }
      }
    }
  }
`,fe=`
  query GetChannelModelPrices($id: ID!) {
    node(id: $id) {
    ... on Channel {
      id
      channelModelPrices {
        id
        modelID
        price {
          items {
            itemCode
            pricing {
              mode
              flatFee
              usagePerUnit
              usageTiered {
                tiers {
                  upTo
                  pricePerUnit
                }
              }
            }
            promptWriteCacheVariants {
              variantCode
              pricing {
                mode
                flatFee
                usagePerUnit
                usageTiered {
                  tiers {
                    upTo
                    pricePerUnit
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`,be=`
  mutation SaveChannelModelPrices($channelId: ID!, $input: [SaveChannelModelPriceInput!]!) {
    saveChannelModelPrices(channelId: $channelId, input: $input) {
      id
      modelID
      price {
        items {
          itemCode
          pricing {
            mode
            flatFee
            usagePerUnit
            usageTiered {
              tiers {
                upTo
                pricePerUnit
              }
            }
          }
          promptWriteCacheVariants {
            variantCode
            pricing {
              mode
              flatFee
              usagePerUnit
              usageTiered {
                tiers {
                  upTo
                  pricePerUnit
                }
              }
            }
          }
        }
      }
    }
  }
`,Ae=`
  mutation BulkUpdateChannelOrdering($input: BulkUpdateChannelOrderingInput!) {
    bulkUpdateChannelOrdering(input: $input) {
      success
      updated
      channels {
        id
        createdAt
        updatedAt
        type
        baseURL
        name
        status
        supportedModels
        autoSyncSupportedModels
        manualModels
        defaultTestModel
        orderingWeight
        settings {
          extraModelPrefix
          modelMappings {
            from
            to
          }
          autoTrimedModelPrefixes
          hideOriginalModels
          hideMappedModels
          transformOptions {
            forceArrayInstructions
            forceArrayInputs
            replaceDeveloperRoleWithSystem
          }
        }
      }
    }
  }
`,Ee=`
  query GetAllChannels {
    channels(
      first: 1000,
      orderBy: { field: ORDERING_WEIGHT, direction: DESC }
      where: { statusIn: [enabled, disabled] }
    ) {
      totalCount
      edges {
        node {
          id
          name
          type
          status
          policies {
            stream
          }
          baseURL
          orderingWeight
          tags
          supportedModels
          autoSyncSupportedModels
          manualModels
          allModelEntries {
            requestModel
            actualModel
            source
          }
        }
      }
    }
  }
`,Se=`
  query FetchModels($input: FetchModelsInput!) {
    fetchModels(input: $input) {
      models {
        id
      }
      error
    }
  }
`,Me=`
  query CountChannelsByType($input: CountChannelsByTypeInput!) {
    countChannelsByType(input: $input) {
      type
      count
    }
  }
`,_e=`
  query AllChannelTags {
    allChannelTags
  }
`,Pe=`
  query QueryChannels($input: QueryChannelInput!) {
    queryChannels(input: $input) {
      edges {
        node {
          id
          createdAt
          updatedAt
          type
          baseURL
          name
          status
          policies {
            stream
          }
          credentials {
            apiKey
            apiKeys
            gcp {
              region
              projectID
              jsonData
            }
          }
          supportedModels
          autoSyncSupportedModels
          autoSyncModelPattern
          manualModels
          tags
          defaultTestModel
          settings {
            extraModelPrefix
            modelMappings {
              from
              to
            }
            autoTrimedModelPrefixes
            hideOriginalModels
            hideMappedModels
            bodyOverrideOperations {
              op
              path
              from
              to
              value
              condition
            }
            headerOverrideOperations {
              op
              path
              from
              to
              value
              condition
            }
            proxy {
              type
              url
              username
              password
            }
            transformOptions {
              forceArrayInstructions
              forceArrayInputs
              replaceDeveloperRoleWithSystem
            }
          }
          orderingWeight
          errorMessage
          remark
          disabledAPIKeys {
            key
            disabledAt
            errorCode
            reason
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
`;function $e(n){const{handleError:a}=I(),{t:e}=c();return C({queryKey:["channelModelPrices",n],queryFn:async()=>{try{return((await u(fe,{id:n})).node?.channelModelPrices||[]).map(d=>k.parse(d))}catch(t){throw a(t,e("channels.errors.fetchPrices")),t}},enabled:!!n})}function we(){const n=m(),{t:a}=c();return h({mutationFn:async({channelId:e,input:t})=>(await u(be,{channelId:e,input:t})).saveChannelModelPrices.map(d=>k.parse(d)),onSuccess:(e,t)=>{n.invalidateQueries({queryKey:["channelModelPrices",t.channelId]}),o.success(a("channels.messages.savePricesSuccess"))},onError:e=>{o.error(a("channels.messages.savePricesError",{error:e.message}))}})}function Fe(n,a){const{handleError:e}=I(),{t}=c();return C({enabled:!a?.disableAutoFetch,queryKey:["channels",n?.where,n?.orderBy?.field,n?.orderBy?.direction,n?.hasTag,n?.model,n?.first,n?.last,n?.after,n?.before],queryFn:async()=>{try{const i=await u(Pe,{input:n});return J.parse(i?.queryChannels)}catch(i){throw e(i,t("channels.errors.fetchList")),i}}})}function Qe(n){const{handleError:a}=I(),{t:e}=c();return C({enabled:n?.enabled??!0,queryKey:["channels","names"],queryFn:async()=>{try{const t=[];let i;for(;;){const d=await u(se,{input:{first:200,after:i,where:{statusIn:["enabled","disabled","archived"]}}}),b=te.parse(d?.queryChannels);if(t.push(...b.edges.map(y=>y.node.name)),!b.pageInfo.hasNextPage||!b.pageInfo.endCursor)break;i=b.pageInfo.endCursor}return t}catch(t){throw a(t,e("channels.errors.fetchNames")),t}},staleTime:300*1e3})}function Be(){const n=m(),{t:a}=c();return h({mutationFn:async e=>{const t=await u(re,{input:e});return A.parse(t.createChannel)},onSuccess:()=>{n.invalidateQueries({queryKey:["channels"]}),o.success(a("channels.messages.createSuccess"))},onError:e=>{o.error(a("channels.messages.createError",{error:e.message}))}})}function xe(){const n=m(),{t:a}=c();return h({mutationFn:async({id:e,input:t})=>{const i=await u(U,{id:e,input:t});return A.parse(i.updateChannel)},onSuccess:e=>{n.invalidateQueries({queryKey:["channels"]}),n.invalidateQueries({queryKey:["channel",e.id]}),o.success(a("channels.messages.updateSuccess"))},onError:e=>{o.error(a("channels.messages.updateError",{error:e.message}))}})}function He(){const n=m(),{t:a}=c();return h({mutationFn:async({id:e})=>{const t=await u(U,{id:e,input:{clearErrorMessage:!0}});return A.parse(t.updateChannel)},onSuccess:e=>{n.invalidateQueries({queryKey:["channels"]}),n.invalidateQueries({queryKey:["channel",e.id]}),n.invalidateQueries({queryKey:["errorChannelsCount"]}),o.success(a("channels.messages.errorResolvedSuccess"))},onError:e=>{o.error(a("channels.messages.errorResolvedError",{error:e.message}))}})}function je(){const n=m(),{t:a}=c();return h({mutationFn:async({id:e,status:t})=>(await u(oe,{id:e,status:t})).updateChannelStatus,onSuccess:(e,t)=>{n.invalidateQueries({queryKey:["channels"]});const i=t.status==="enabled"?a("channels.status.enabled"):t.status==="archived"?a("channels.status.archived"):a("channels.status.disabled"),d=t.status==="archived"?"channels.messages.archiveSuccess":"channels.messages.statusUpdateSuccess";o.success(t.status==="archived"?a(d):a(d,{status:i}))},onError:(e,t)=>{const i=t.status==="archived"?"channels.messages.archiveError":"channels.messages.statusUpdateError";o.error(a(i,{error:e.message}))}})}function We(){const n=m(),{t:a}=c();return h({mutationFn:async e=>(await u(le,{ids:e})).bulkArchiveChannels,onSuccess:(e,t)=>{n.invalidateQueries({queryKey:["channels"]}),o.success(a("channels.messages.bulkArchiveSuccess",{count:t.length}))},onError:e=>{o.error(a("channels.messages.bulkArchiveError",{error:e.message}))}})}function Ye(){const n=m(),{t:a}=c();return h({mutationFn:async e=>(await u(ie,{ids:e})).bulkDisableChannels,onSuccess:(e,t)=>{n.invalidateQueries({queryKey:["channels"]}),o.success(a("channels.messages.bulkDisableSuccess",{count:t.length}))},onError:e=>{o.error(a("channels.messages.bulkDisableError",{error:e.message}))}})}function Ge(){const n=m(),{t:a}=c();return h({mutationFn:async e=>(await u(ce,{ids:e})).bulkEnableChannels,onSuccess:(e,t)=>{n.invalidateQueries({queryKey:["channels"]}),o.success(a("channels.messages.bulkEnableSuccess",{count:t.length}))},onError:e=>{o.error(a("channels.messages.bulkEnableError",{error:e.message}))}})}function Ve(){const n=m(),{t:a}=c();return h({mutationFn:async e=>(await u(ue,{id:e})).deleteChannel,onSuccess:()=>{n.invalidateQueries({queryKey:["channels"]}),o.success(a("channels.messages.deleteSuccess"))},onError:e=>{o.error(a("channels.messages.deleteError",{error:e.message}))}})}function ze(){const n=m(),{t:a}=c();return h({mutationFn:async e=>(await u(de,{ids:e})).bulkDeleteChannels,onSuccess:(e,t)=>{n.invalidateQueries({queryKey:["channels"]}),o.success(a("channels.messages.bulkDeleteSuccess",{count:t.length}))},onError:e=>{o.error(a("channels.messages.bulkDeleteError",{error:e.message}))}})}function Je(){const{t:n}=c();return h({mutationFn:async({channelID:a,modelID:e,proxy:t})=>(await u(pe,{input:{channelID:a,modelID:e,proxy:t}})).testChannel,onSuccess:a=>{if(a.success)o.success(n("channels.messages.testSuccess",{latency:a.latency.toFixed(2)}));else{const e=a.error||n("channels.messages.testUnknownError");o.error(n("channels.messages.testError",{error:e}))}},onError:a=>{o.error(n("channels.messages.testError",{error:a.message}))}})}function Xe(){const n=m(),{t:a}=c();return h({mutationFn:async e=>{const t=await u(he,{input:e});return Z.parse(t.bulkImportChannels)},onSuccess:e=>{n.invalidateQueries({queryKey:["channels"]}),e.success?o.success(a("channels.messages.bulkImportSuccess",{created:e.created})):o.error(a("channels.messages.bulkImportPartialError",{created:e.created,failed:e.failed}))},onError:e=>{o.error(a("channels.messages.bulkImportError",{error:e.message}))}})}function Ze(n){const{handleError:a}=I(),{t:e}=c();return C({queryKey:["allChannelsForOrdering"],queryFn:async()=>{try{const t=await u(Ee);return ne.parse(t?.channels)}catch(t){throw a(t,e("channels.errors.fetchOrdering")),t}},enabled:n?.enabled!==!1})}function en(){const n=m(),{t:a}=c();return h({mutationFn:async e=>{const t=await u(Ae,{input:e});return ae.parse(t.bulkUpdateChannelOrdering)},onSuccess:e=>{n.invalidateQueries({queryKey:["channels"]}),n.invalidateQueries({queryKey:["allChannelsForOrdering"]}),o.success(a("channels.messages.orderingUpdateSuccess",{updated:e.updated}))},onError:e=>{o.error(a("channels.messages.orderingUpdateError",{error:e.message}))}})}const De=`
  mutation SyncChannelModels($channelID: ID!, $pattern: String) {
    syncChannelModels(channelID: $channelID, pattern: $pattern) {
      channelID
      supportedModels
    }
  }
`,Te=r({channelID:s(),supportedModels:l(s())});function nn(){const n=m(),{t:a}=c();return h({mutationFn:async e=>{const t=await u(De,e);return Te.parse(t.syncChannelModels)},onSuccess:()=>{n.invalidateQueries({queryKey:["channels"]}),o.success(a("channels.messages.syncModelsSuccess"))},onError:e=>{o.error(a("channels.messages.syncModelsError",{error:e.message}))}})}function an(){const{t:n}=c();return h({mutationFn:async a=>(await u(Se,{input:a})).fetchModels,onSuccess:a=>{if(a.error)o.error(n("channels.messages.fetchModelsError",{error:a.error}));else{const e=a.models.length;e>100?o.success(n("channels.messages.fetchModelsSuccessLarge",{count:e})):o.success(n("channels.messages.fetchModelsSuccess",{count:e}))}},onError:a=>{o.error(n("channels.messages.fetchModelsError",{error:a.message}))}})}function sn(n){const{handleError:a}=I(),{t:e}=c();return C({queryKey:["channelTypes",n],queryFn:async()=>{try{const t={};return n&&n.length>0&&(t.statusIn=n),(await u(Me,{input:t})).countChannelsByType||[]}catch(t){throw a(t,e("channels.errors.fetchTypes")),t}},staleTime:300*1e3})}const Ke=`
  query GetErrorChannelsCount {
    channels(
      first: 1,
      where: { errorMessageNotNil: true }
    ) {
      totalCount
    }
  }
`;function tn(){const{handleError:n}=I(),{t:a}=c();return C({queryKey:["errorChannelsCount"],queryFn:async()=>{try{return(await u(Ke)).channels.totalCount}catch(e){throw n(e,a("channels.errors.fetchList")),e}},staleTime:300*1e3})}function rn(){const{handleError:n}=I(),{t:a}=c();return C({queryKey:["allChannelTags"],queryFn:async()=>{try{return(await u(_e)).allChannelTags||[]}catch(e){throw n(e,a("channels.errors.fetchTags")),e}},staleTime:300*1e3})}const qe=`
  query GetChannelProbeData($input: GetChannelProbeDataInput!) {
    channelProbeData(input: $input) {
      channelID
      points {
        timestamp
        totalRequestCount
        successRequestCount
        avgTokensPerSecond
        avgTimeToFirstTokenMs
      }
    }
  }
`;function on(n,a){const{handleError:e}=I(),{t}=c();return C({queryKey:["channelProbeData",n],queryFn:async()=>{try{return(await u(qe,{input:{channelIDs:n}})).channelProbeData||[]}catch(i){return e(i,t("channels.errors.fetchProbeData")),[]}},enabled:n.length>0&&a?.enabled!==!1,staleTime:60*1e3})}function ln(n,a){const{handleError:e}=I(),{t}=c();return C({queryKey:["channelDisabledAPIKeys",n],queryFn:async()=>{try{return(await u(Ie,{id:n})).node?.disabledAPIKeys||[]}catch(i){return e(i,t("channels.errors.fetchDisabledAPIKeys")),[]}},enabled:!!n&&a?.enabled!==!1})}function cn(){const n=m(),{t:a}=c();return h({mutationFn:async({channelID:e,key:t})=>(await u(me,{channelID:e,key:t})).enableChannelAPIKey,onSuccess:(e,t)=>{n.invalidateQueries({queryKey:["channelDisabledAPIKeys",t.channelID]}),n.invalidateQueries({queryKey:["channels"]}),o.success(a("channels.messages.enableAPIKeySuccess"))},onError:e=>{o.error(a("channels.messages.enableAPIKeyError",{error:e.message}))}})}function un(){const n=m(),{t:a}=c();return h({mutationFn:async({channelID:e})=>(await u(ye,{channelID:e})).enableAllChannelAPIKeys,onSuccess:(e,t)=>{n.invalidateQueries({queryKey:["channelDisabledAPIKeys",t.channelID]}),n.invalidateQueries({queryKey:["channels"]}),o.success(a("channels.messages.enableAllAPIKeysSuccess"))},onError:e=>{o.error(a("channels.messages.enableAllAPIKeysError",{error:e.message}))}})}function dn(){const n=m(),{t:a}=c();return h({mutationFn:async({channelID:e,keys:t})=>(await u(ge,{channelID:e,keys:t})).enableSelectedChannelAPIKeys,onSuccess:(e,t)=>{n.invalidateQueries({queryKey:["channelDisabledAPIKeys",t.channelID]}),n.invalidateQueries({queryKey:["channels"]}),o.success(a("channels.messages.enableSelectedAPIKeysSuccess"))},onError:e=>{o.error(a("channels.messages.enableSelectedAPIKeysError",{error:e.message}))}})}function pn(){const n=m(),{t:a}=c();return h({mutationFn:async({channelID:e,keys:t})=>(await u(Ce,{channelID:e,keys:t})).deleteDisabledChannelAPIKeys,onSuccess:(e,t)=>{n.invalidateQueries({queryKey:["channelDisabledAPIKeys",t.channelID]}),n.invalidateQueries({queryKey:["channels"]}),e.message==="ONE_KEY_PRESERVED"?o.success(a("channels.messages.deleteDisabledAPIKeysPreserved")):o.success(a("channels.messages.deleteDisabledAPIKeysSuccess"))},onError:e=>{o.error(a("channels.messages.deleteDisabledAPIKeysError",{error:e.message}))}})}export{en as A,Ve as B,cn as C,un as D,dn as E,pn as F,He as G,$e as H,we as I,Ze as a,je as b,A as c,Je as d,xe as e,rn as f,sn as g,tn as h,on as i,Be as j,an as k,nn as l,Qe as m,Oe as n,Le as o,ln as p,P as q,We as r,ze as s,Ye as t,Fe as u,Ge as v,Xe as w,Re as x,E as y,X as z};
