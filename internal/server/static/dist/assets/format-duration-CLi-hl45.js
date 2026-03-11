function r(e){return!Number.isFinite(e)||e<=0?"0ms":e<1?`${e.toFixed(3)}ms`:e<1e3?`${e.toFixed(0)}ms`:e<6e4?`${(e/1e3).toFixed(1)}s`:`${(e/6e4).toFixed(1)}m`}export{r as f};
