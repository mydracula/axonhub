import{k as y,j as e,W,B as j,X,r as p,ah as G,n as k,u as $,g as F}from"./index-P4nSg7m-.js";import{u as J,g as Y,a as Z,b as _,c as ee,d as te,T as ae,e as re,f as v,h as se,i as N,j as oe,k as ne,l as I}from"./table-skeleton-BGEaiffP.js";import{D as le,u as ce}from"./index-Ts1oijoA.js";import{S as ie}from"./server-side-pagination-DRyVoF6f.js";import{f as de}from"./react-icons.esm-DX8WPe_B.js";import{S as ue}from"./switch-DSmOnaoL.js";import{R as me}from"./refresh-cw-XacNYtG7.js";import{u as he}from"./use-pagination-search-Yvm5jr6Z.js";import{B as fe}from"./badge-Cz6dvCoR.js";import{D as h}from"./data-table-column-header-32lZVAA3.js";import{F as ge}from"./file-text-DwJwunm5.js";import{z as xe}from"./zh-CN-9Qd61XTW.js";import{e as pe,f as be}from"./format-BRYTh9k9.js";import{A as ye,m as je}from"./proxy-DyRO8jcH.js";import{u as P}from"./use-error-handler-r-BflFgU.js";import{p as we}from"./pagination-C7IrlftW.js";import{u as Ce,t as Se}from"./schema-DP2zWkPJ.js";import{o as b,s as f,n as R,e as ve}from"./schemas-p1YBaZih.js";import{d as D}from"./coerce-FXUa1JFf.js";function Te({table:r,dateRange:n,onDateRangeChange:l,threadIdFilter:s,onThreadIdFilterChange:o,onRefresh:t,showRefresh:a=!1,autoRefresh:c=!1,onAutoRefreshChange:g}){const{t:u}=y(),m=!!n?.from||!!n?.to,w=r.getState().columnFilters.length>0||m||!!s.trim();return e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex flex-1 items-center space-x-2",children:[e.jsx(W,{placeholder:u("threads.filters.filterThreadId"),value:s,onChange:C=>o(C.target.value),className:"h-8 w-[150px] lg:w-[250px]"}),e.jsx(le,{value:n,onChange:l}),m&&e.jsx(j,{variant:"ghost",onClick:()=>l?.(void 0),className:"h-8 px-2",size:"sm",children:e.jsx(X,{className:"h-4 w-4"})}),w&&e.jsxs(j,{variant:"ghost",onClick:()=>{r.resetColumnFilters(),l?.(void 0),o("")},className:"h-8 px-2 lg:px-3",children:[u("common.filters.reset"),e.jsx(de,{className:"ml-2 h-4 w-4"})]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[a&&g&&e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(ue,{checked:c,onCheckedChange:g,id:"auto-refresh-switch"}),e.jsx("label",{htmlFor:"auto-refresh-switch",className:"text-muted-foreground cursor-pointer text-sm",children:u("common.autoRefresh")})]}),a&&t&&e.jsxs(j,{variant:"outline",size:"sm",onClick:t,children:[e.jsx(me,{className:`mr-2 h-4 w-4 ${c?"animate-spin":""}`}),u("common.refresh")]})]})]})}function Ne(){const{t:r,i18n:n}=y(),l=n.language==="zh"?xe:pe,{navigateWithSearch:s}=he({defaultPageSize:20});return[{accessorKey:"id",header:({column:t})=>e.jsx(h,{column:t,title:r("common.columns.id")}),cell:({row:t})=>{const a=p.useCallback(()=>{s({to:"/project/threads/$threadId",params:{threadId:t.original.id}})},[t.original.id,s]);return e.jsxs("button",{onClick:a,className:"text-primary cursor-pointer font-mono text-xs hover:underline",children:["#",G(t.getValue("id"))]})},enableSorting:!0,enableHiding:!1},{accessorKey:"threadID",header:({column:t})=>e.jsx(h,{column:t,title:r("threads.columns.threadId")}),cell:({row:t})=>{const a=t.getValue("threadID");return e.jsx("div",{className:"max-w-64 truncate font-mono text-xs",title:a,children:a})},enableSorting:!1},{accessorKey:"firstUserQuery",header:({column:t})=>e.jsx(h,{column:t,title:r("threads.columns.firstUserQuery")}),cell:({row:t})=>{const a=t.getValue("firstUserQuery");return e.jsx("div",{className:"max-w-96 truncate text-xs",title:a||"",children:a||"-"})},enableSorting:!1},{id:"traceCount",header:({column:t})=>e.jsx(h,{column:t,title:r("threads.columns.traceCount")}),cell:({row:t})=>{const a=t.original.tracesSummary?.totalCount??0;return e.jsx(fe,{variant:"secondary",className:"font-mono text-xs",children:a})},enableSorting:!1},{accessorKey:"createdAt",header:({column:t})=>e.jsx(h,{column:t,title:r("common.columns.createdAt")}),cell:({row:t})=>{const a=new Date(t.getValue("createdAt"));return e.jsx("div",{className:"text-xs",children:be(a,"yyyy-MM-dd HH:mm:ss",{locale:l})})}},{id:"details",header:({column:t})=>e.jsx(h,{column:t,title:r("threads.columns.details")}),cell:({row:t})=>{const a=()=>{s({to:"/project/threads/$threadId",params:{threadId:t.original.id}})};return e.jsxs(j,{variant:"outline",size:"sm",onClick:a,children:[e.jsx(ge,{className:"mr-2 h-4 w-4"}),r("threads.actions.viewDetails")]})}}]}const Ie=je(v);function _e({data:r,loading:n,pageInfo:l,totalCount:s,pageSize:o,dateRange:t,threadIdFilter:a,onNextPage:c,onPreviousPage:g,onPageSizeChange:u,onDateRangeChange:m,onThreadIdFilterChange:w,onRefresh:C,showRefresh:q,autoRefresh:T=!1,onAutoRefreshChange:A}){const{t:V}=y(),S=Ne(),[B,Q]=p.useState([]),[U,H]=p.useState([]),[z,E]=p.useState({}),[K,L]=p.useState({}),O=ce(r,T,o),x=J({data:O,getRowId:d=>d.id,columns:S,state:{sorting:B,columnFilters:U,columnVisibility:z,rowSelection:K},enableRowSelection:!0,onRowSelectionChange:L,onSortingChange:Q,onColumnFiltersChange:H,onColumnVisibilityChange:E,getCoreRowModel:te(),getFilteredRowModel:ee(),getSortedRowModel:_(),getFacetedRowModel:Z(),getFacetedUniqueValues:Y(),manualPagination:!0,manualFiltering:!0});return e.jsxs("div",{className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(Te,{table:x,dateRange:t,onDateRangeChange:m,threadIdFilter:a,onThreadIdFilterChange:w,onRefresh:C,showRefresh:q,autoRefresh:T,onAutoRefreshChange:A}),e.jsx("div",{className:"shadow-soft relative mt-4 flex-1 overflow-auto overflow-x-hidden rounded-2xl border border-[var(--table-border)]",children:e.jsxs(ae,{"data-testid":"threads-table",className:"border-separate border-spacing-0 rounded-2xl bg-[var(--table-background)]",children:[e.jsx(re,{className:"sticky top-0 z-20 bg-[var(--table-header)] shadow-sm",children:x.getHeaderGroups().map(d=>e.jsx(v,{className:"group/row border-0",children:d.headers.map(i=>e.jsx(se,{colSpan:i.colSpan,className:`${i.column.columnDef.meta?.className??""} text-muted-foreground border-0 text-xs font-semibold tracking-wider uppercase`,children:i.isPlaceholder?null:N(i.column.columnDef.header,i.getContext())},i.id))},d.id))}),e.jsx(oe,{className:"space-y-1 !bg-[var(--table-background)] p-2",children:n?e.jsx(ne,{rows:o,columns:S.length}):x.getRowModel().rows?.length?e.jsx(ye,{initial:!1,mode:"popLayout",children:x.getRowModel().rows.map(d=>e.jsx(Ie,{"data-state":d.getIsSelected()&&"selected",initial:{opacity:0,y:-20,height:0},animate:{opacity:1,y:0,height:"auto"},exit:{opacity:0,height:0},transition:{type:"spring",stiffness:500,damping:30,mass:1,opacity:{duration:.2}},layout:!0,className:"group/row hover:bg-muted/50 data-[state=selected]:bg-muted",children:d.getVisibleCells().map(i=>e.jsx(I,{className:`${i.column.columnDef.meta?.className??""} border-b border-[var(--table-border)] py-3 group-last/row:border-0`,children:N(i.column.columnDef.cell,i.getContext())},i.id))},d.id))}):e.jsx(v,{className:"!bg-[var(--table-background)]",children:e.jsx(I,{colSpan:S.length,className:"h-24 !bg-[var(--table-background)] text-center",children:V("common.noData")})})})]})}),e.jsx("div",{className:"mt-4 flex-shrink-0",children:e.jsx(ie,{pageInfo:l,pageSize:o,dataLength:r.length,totalCount:s,selectedRows:x.getFilteredSelectedRowModel().rows.length,onNextPage:c,onPreviousPage:g,onPageSizeChange:u})})]})}const De=b({id:f(),name:f().nullable().optional()}).nullable().optional(),ke=b({totalCount:R().nullable().optional()}).nullable().optional(),M=b({id:f(),threadID:f(),createdAt:D(),updatedAt:D(),project:De,tracesSummary:ke,firstUserQuery:f().nullable().optional(),usageMetadata:Ce}),$e=b({edges:ve(b({node:M,cursor:f()})),pageInfo:we,totalCount:R()}),Fe=M.extend({tracesConnection:Se.optional()});function Pe(){return`
    query GetThreads(
      $first: Int
      $after: Cursor
      $orderBy: ThreadOrder
      $where: ThreadWhereInput
    ) {
      threads(first: $first, after: $after, orderBy: $orderBy, where: $where) {
        edges {
          node {
            id
            threadID
            createdAt
            updatedAt
            project {
              id
              name
            }
            tracesSummary: traces(first: 1) {
              totalCount
            }
            firstUserQuery
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
  `}function Re(){return`
    query GetThreadDetail(
      $id: ID!
      $tracesFirst: Int
      $tracesAfter: Cursor
      $traceOrderBy: TraceOrder
    ) {
      node(id: $id) {
        ... on Thread {
          id
          threadID
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
          tracesSummary: traces(first: 1) {
            totalCount
          }
          tracesConnection: traces(first: $tracesFirst, after: $tracesAfter, orderBy: $traceOrderBy) {
            edges {
              node {
                id
                traceID
                createdAt
                updatedAt
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
                firstUserQuery
                firstText
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
  `}function et(r){const{t:n}=y(),{handleError:l}=P(),s=k();return $({queryKey:["threads",r,s],queryFn:async()=>{try{const o=Pe(),t=s?{"X-Project-ID":s}:void 0,a={...r,where:{...r?.where,...s&&{projectID:s}}},c=await F(o,a,t);return $e.parse(c?.threads)}catch(o){throw l(o,n("threads.errors.fetchList")),o}},enabled:!0})}function tt({id:r,tracesFirst:n,tracesAfter:l,traceOrderBy:s}){const{t:o}=y(),{handleError:t}=P(),a=k();return $({queryKey:["thread-detail",r,n,l,s,a],queryFn:async()=>{try{const c=Re(),m=await F(c,{id:r,tracesFirst:n,tracesAfter:l,traceOrderBy:s},a?{"X-Project-ID":a}:void 0);if(!m?.node)throw new Error(o("threads.errors.notFound"));return Fe.parse(m.node)}catch(c){throw t(c,o("threads.errors.fetchDetail")),c}},enabled:!!r})}export{_e as T,tt as a,et as u};
