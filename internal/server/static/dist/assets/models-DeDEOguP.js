import{e as u,g as e}from"./index-P4nSg7m-.js";const s=`
  query Models($input: QueryModelsInput!) {
    queryModels(input: $input) {
      id
      status
    }
  }
`;function o(){return u({mutationFn:async(t={})=>(await e(s,{input:t})).queryModels})}export{o as u};
