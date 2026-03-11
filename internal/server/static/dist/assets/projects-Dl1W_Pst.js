import{k as P,u as l,d as p,e as j,t as y,i as c,g as u}from"./index-P4nSg7m-.js";import{u as i}from"./use-error-handler-r-BflFgU.js";import{p as A}from"./pagination-C7IrlftW.js";import{o as d,s as o,f,n as C,e as h}from"./schemas-p1YBaZih.js";import{d as m}from"./coerce-FXUa1JFf.js";const n=d({id:o(),createdAt:m(),updatedAt:m(),name:o(),description:o(),status:f(["active","archived"])}),E=d({node:n,cursor:o()}),v=d({edges:h(E),pageInfo:A,totalCount:C()}),F=d({name:o().min(1,"Project name is required"),description:o().optional()}),_=d({name:o().min(1,"Project name is required"),description:o().optional()});h(n);const S=`
  query GetProjects($first: Int, $after: Cursor, $orderBy: ProjectOrder, $where: ProjectWhereInput) {
    projects(first: $first, after: $after, orderBy: $orderBy, where: $where) {
      edges {
        node {
          id
          createdAt
          updatedAt
          name
          description
          status
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
`,T=`
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      id
      name
      description
      status
      createdAt
      updatedAt
    }
  }
`,$=`
  mutation UpdateProject($id: ID!, $input: UpdateProjectInput!) {
    updateProject(id: $id, input: $input) {
      id
      name
      description
      status
      createdAt
      updatedAt
    }
  }
`,q=`
  mutation UpdateProjectStatus($id: ID!, $status: ProjectStatus!) {
    updateProjectStatus(id: $id, status: $status) {
      id
      name
      description
      status
      createdAt
      updatedAt
    }
  }
`,Q=`
  query MyProjects {
    myProjects {
        id
        name
        description
        status
        createdAt
        updatedAt
    }
  }
`;function R(t={}){const{handleError:s}=i(),{t:r}=P(),e={...t,orderBy:t.orderBy||{field:"CREATED_AT",direction:"DESC"}};return l({queryKey:["projects",e],queryFn:async()=>{try{const a=await u(S,e);return v.parse(a?.projects)}catch(a){throw s(a,r("projects.errors.loadProjectsFailed")),a}}})}function O(){const{handleError:t}=i(),{t:s}=P();return l({queryKey:["myProjects"],queryFn:async()=>{try{const r=await u(Q);return!r||!r.myProjects?[]:r.myProjects.map(a=>n.parse(a))}catch(r){return t(r,s("projects.errors.loadMyProjectsFailed")),[]}}})}function M(){const t=p(),{handleError:s}=i();return j({mutationFn:async r=>{try{const e=await u(T,{input:r});return n.parse(e.createProject)}catch(e){throw s(e,c.t("projects.errors.createProjectFailed")),e}},onSuccess:()=>{t.invalidateQueries({queryKey:["projects"]}),t.invalidateQueries({queryKey:["myProjects"]}),y.success(c.t("common.success.projectCreated"))}})}function D(){const t=p(),{handleError:s}=i();return j({mutationFn:async({id:r,input:e})=>{try{const a=await u($,{id:r,input:e});return n.parse(a.updateProject)}catch(a){throw s(a,c.t("projects.errors.updateProjectFailed")),a}},onSuccess:()=>{t.invalidateQueries({queryKey:["projects"]}),t.invalidateQueries({queryKey:["project"]}),t.invalidateQueries({queryKey:["myProjects"]}),y.success(c.t("common.success.projectUpdated"))}})}function B(){const t=p(),{handleError:s}=i();return j({mutationFn:async r=>{try{const e=await u(q,{id:r,status:"archived"});return n.parse(e.updateProjectStatus)}catch(e){throw s(e,c.t("projects.errors.archiveProjectFailed")),e}},onSuccess:()=>{t.invalidateQueries({queryKey:["projects"]}),t.invalidateQueries({queryKey:["project"]}),t.invalidateQueries({queryKey:["myProjects"]}),y.success(c.t("common.success.projectArchived"))}})}function J(){const t=p(),{handleError:s}=i();return j({mutationFn:async r=>{try{const e=await u(q,{id:r,status:"active"});return n.parse(e.updateProjectStatus)}catch(e){throw s(e,c.t("projects.errors.activateProjectFailed")),e}},onSuccess:()=>{t.invalidateQueries({queryKey:["projects"]}),t.invalidateQueries({queryKey:["project"]}),t.invalidateQueries({queryKey:["myProjects"]}),y.success(c.t("common.success.projectActivated"))}})}export{M as a,D as b,F as c,_ as d,B as e,J as f,R as g,O as u};
