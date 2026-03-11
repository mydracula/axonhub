import{k as c,u as b,d as g,e as l,t as n,g as u}from"./index-P4nSg7m-.js";import{u as f}from"./use-error-handler-r-BflFgU.js";import{p as T}from"./pagination-C7IrlftW.js";import{o as s,f as i,s as t,b as S,n as v,e as C}from"./schemas-p1YBaZih.js";const y=s({bucketName:t(),endpoint:t().optional(),region:t(),accessKey:t().optional(),secretKey:t().optional(),pathStyle:S().optional()}),h=s({bucketName:t(),credential:t().optional()}),D=s({url:t(),username:t().optional(),password:t().optional(),insecure_skip_tls:S().optional(),path:t().optional()}),E=s({directory:t().optional().nullable(),s3:y.optional().nullable(),gcs:h.optional().nullable(),webdav:D.optional().nullable()}),d=s({id:t(),name:t(),description:t(),type:i(["database","fs","s3","gcs","webdav"]),primary:S(),status:i(["active","archived"]),settings:E,createdAt:t(),updatedAt:t()}),$=s({node:d}),I=s({edges:C($),pageInfo:T,totalCount:v()}),_=y.extend({accessKey:t().optional(),secretKey:t().optional()}),w=h.extend({credential:t().optional()}),m=s({directory:t().optional().nullable(),s3:_.optional().nullable(),gcs:w.optional().nullable(),webdav:D.optional().nullable()}),N=d.extend({settings:m}),q=s({name:t().min(1,"Name is required"),description:t().optional(),type:i(["database","fs","s3","gcs","webdav"]),settings:m}),U=s({name:t().min(1,"Name is required").optional(),description:t().optional(),settings:m.optional(),status:i(["active","archived"]).optional()}),k=`
  query DataStorages(
    $first: Int
    $after: Cursor
    $where: DataStorageWhereInput
    $orderBy: DataStorageOrder
  ) {
    dataStorages(
      first: $first
      after: $after
      where: $where
      orderBy: $orderBy
    ) {
      edges {
        node {
          id
          name
          description
          type
          primary
          status
          settings {
            directory
            s3 {
              bucketName
              endpoint
              region
              pathStyle
            }
            gcs {
              bucketName
            }
          }
          createdAt
          updatedAt
        }
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
`,K=`
  mutation CreateDataStorage($input: CreateDataStorageInput!) {
    createDataStorage(input: $input) {
      id
      name
      description
      type
      primary
      status
      settings {
        directory
        s3 {
          bucketName
          endpoint
          region
        }
        gcs {
          bucketName
        }
      }
      createdAt
      updatedAt
    }
  }
`,O=`
  mutation UpdateDataStorage($id: ID!, $input: UpdateDataStorageInput!) {
    updateDataStorage(id: $id, input: $input) {
      id
      name
      description
      type
      primary
      status
      settings {
        directory
        s3 {
          bucketName
          endpoint
          region
        }
        gcs {
          bucketName
        }
      }
      createdAt
      updatedAt
    }
  }
`,R=`
  mutation UpdateDataStorageStatus($id: ID!, $input: UpdateDataStorageInput!) {
    updateDataStorage(id: $id, input: $input) {
      id
      status
      updatedAt
    }
  }
`;function F(a){const{t:o}=c(),{handleError:e}=f();return b({queryKey:["dataStorages",a],queryFn:async()=>{try{const r=await u(k,a);return I.parse(r.dataStorages)}catch(r){throw e(r,o("dataStorages.errors.fetchData")),r}}})}function G(){const{t:a}=c(),o=g();return l({mutationFn:async e=>{const r=await u(R,{id:e,input:{status:"archived"}});return d.pick({id:!0,status:!0}).parse(r.updateDataStorage)},onSuccess:()=>{o.invalidateQueries({queryKey:["dataStorages"]}),n.success(a("dataStorages.messages.archiveSuccess"))},onError:e=>{n.error(a("dataStorages.messages.archiveError"))}})}function M(){const{t:a}=c(),o=g();return l({mutationFn:async e=>{const r=q.parse(e),p=await u(K,{input:r});return d.parse(p.createDataStorage)},onSuccess:()=>{o.invalidateQueries({queryKey:["dataStorages"]}),n.success(a("common.messages.success"))},onError:e=>{n.error(a("dataStorages.errors.createError"))}})}function B(){const{t:a}=c(),o=g();return l({mutationFn:async({id:e,input:r})=>{const p=U.parse(r),A=await u(O,{id:e,input:p});return N.parse(A.updateDataStorage)},onSuccess:()=>{o.invalidateQueries({queryKey:["dataStorages"]}),n.success(a("common.messages.success"))},onError:e=>{n.error(a("dataStorages.errors.updateError"))}})}export{B as a,G as b,F as c,M as u};
