import{u as i,d as u,e as o,t as r,i as n,g as a,f as p}from"./index-P4nSg7m-.js";import{u as d}from"./use-error-handler-r-BflFgU.js";const m=`
  query SystemVersion {
    systemVersion {
      version
      commit
      buildTime
      goVersion
      platform
      uptime
    }
  }
`,S=`
  query CheckForUpdate {
    checkForUpdate {
      currentVersion
      latestVersion
      hasUpdate
      releaseUrl
    }
  }
`,g=`
  query BrandSettings {
    brandSettings {
      brandName
      brandLogo
    }
  }
`,E=`
  query StoragePolicy {
    storagePolicy {
      storeChunks
      storeRequestBody
      storeResponseBody
      cleanupOptions {
        resourceType
        enabled
        cleanupDays
      }
    }
  }
`,U=`
  mutation UpdateBrandSettings($input: UpdateBrandSettingsInput!) {
    updateBrandSettings(input: $input)
  }
`,T=`
  mutation UpdateStoragePolicy($input: UpdateStoragePolicyInput!) {
    updateStoragePolicy(input: $input)
  }
`,A=`
  query RetryPolicy {
    retryPolicy {
      maxChannelRetries
      maxSingleChannelRetries
      retryDelayMs
      loadBalancerStrategy
      enabled
      autoDisableChannel {
        enabled
        statuses {
          status
          times
        }
      }
    }
  }
`,_=`
  mutation UpdateRetryPolicy($input: UpdateRetryPolicyInput!) {
    updateRetryPolicy(input: $input)
  }
`,I=`
  query DefaultDataStorageID {
    defaultDataStorageID
  }
`,O=`
  mutation UpdateDefaultDataStorage($input: UpdateDefaultDataStorageInput!) {
    updateDefaultDataStorage(input: $input)
  }
`,C=`
  query OnboardingInfo {
    onboardingInfo {
      onboarded
      completedAt
      systemModelSetting {
        onboarded
        completedAt
      }
      autoDisableChannel {
        onboarded
        completedAt
      }
    }
  }
`,f=`
  mutation CompleteOnboarding($input: CompleteOnboardingInput!) {
    completeOnboarding(input: $input)
  }
`,q=`
  mutation CompleteSystemModelSettingOnboarding($input: CompleteSystemModelSettingOnboardingInput!) {
    completeSystemModelSettingOnboarding(input: $input)
  }
`,b=`
  mutation CompleteAutoDisableChannelOnboarding($input: CompleteAutoDisableChannelOnboardingInput!) {
    completeAutoDisableChannelOnboarding(input: $input)
  }
`,h=`
  mutation triggerGcCleanup {
    triggerGcCleanup
  }
`;function V(){const{handleError:t}=d();return i({queryKey:["brandSettings"],queryFn:async()=>{try{return(await a(g)).brandSettings}catch(e){throw t(e,n.t("common.errors.internalServerError")),e}}})}function j(){const{handleError:t}=d();return i({queryKey:["storagePolicy"],queryFn:async()=>{try{return(await a(E)).storagePolicy}catch(e){throw t(e,n.t("common.errors.internalServerError")),e}}})}function x(){const t=u();return o({mutationFn:async e=>(await a(U,{input:e})).updateBrandSettings,onSuccess:()=>{t.invalidateQueries({queryKey:["brandSettings"]}),r.success(n.t("common.success.systemUpdated"))},onError:()=>{r.error(n.t("common.errors.systemUpdateFailed"))}})}function H(){const t=u();return o({mutationFn:async e=>(await a(T,{input:e})).updateStoragePolicy,onSuccess:()=>{t.invalidateQueries({queryKey:["storagePolicy"]}),r.success(n.t("common.success.systemUpdated"))},onError:()=>{r.error(n.t("common.errors.systemUpdateFailed"))}})}function z(){return o({mutationFn:async()=>(await a(h)).triggerGcCleanup,onSuccess:()=>{r.success(n.t("system.storage.policy.runCleanupSuccess"))},onError:()=>{r.error(n.t("system.storage.policy.runCleanupError"))}})}function J(){const{handleError:t}=d();return i({queryKey:["retryPolicy"],queryFn:async()=>{try{return(await a(A)).retryPolicy}catch(e){throw t(e,n.t("common.errors.internalServerError")),e}}})}function W(){const t=u();return o({mutationFn:async e=>(await a(_,{input:e})).updateRetryPolicy,onSuccess:()=>{t.invalidateQueries({queryKey:["retryPolicy"]}),r.success(n.t("common.success.systemUpdated"))},onError:()=>{r.error(n.t("common.errors.systemUpdateFailed"))}})}function X(){const{handleError:t}=d();return i({queryKey:["defaultDataStorageID"],queryFn:async()=>{try{return(await a(I)).defaultDataStorageID}catch(e){throw t(e,n.t("common.errors.internalServerError")),e}}})}function Z(){const t=u();return o({mutationFn:async e=>(await a(O,{input:e})).updateDefaultDataStorage,onSuccess:()=>{t.invalidateQueries({queryKey:["defaultDataStorageID"]}),r.success(n.t("common.success.systemUpdated"))},onError:()=>{r.error(n.t("common.errors.systemUpdateFailed"))}})}function ee(){return i({queryKey:["onboardingInfo"],queryFn:async()=>{try{return(await a(C)).onboardingInfo}catch{return{onboarded:!0,completedAt:new Date().toISOString()}}}})}function te(){const t=u();return o({mutationFn:async e=>(await a(f,{input:e||{}})).completeOnboarding,onSuccess:()=>{t.invalidateQueries({queryKey:["onboardingInfo"]})},onError:()=>{r.error(n.t("common.errors.onboardingFailed"))}})}function ne(){const t=u();return o({mutationFn:async e=>(await a(q,{input:e||{}})).completeSystemModelSettingOnboarding,onSuccess:()=>{t.invalidateQueries({queryKey:["onboardingInfo"]})},onError:()=>{r.error(n.t("common.errors.onboardingFailed"))}})}function re(){const t=u();return o({mutationFn:async e=>(await a(b,{input:e||{}})).completeAutoDisableChannelOnboarding,onSuccess:()=>{t.invalidateQueries({queryKey:["onboardingInfo"]})},onError:()=>{r.error(n.t("common.errors.onboardingFailed"))}})}function ae(){return i({queryKey:["systemVersion"],queryFn:async()=>(await a(m)).systemVersion})}function se(){return i({queryKey:["checkForUpdate"],queryFn:async()=>(await a(S)).checkForUpdate,retry:!1,staleTime:3600*1e3})}const D=`
  query ModelSettings {
    systemModelSettings {
      fallbackToChannelsOnModelNotFound
      queryAllChannelModels
    }
  }
`,R=`
  mutation UpdateModelSettings($input: UpdateSystemModelSettingsInput!) {
    updateSystemModelSettings(input: $input)
  }
`,F=`
  query SystemChannelSettings {
    systemChannelSettings {
      probe {
        enabled
        frequency
      }
    }
  }
`,N=`
  mutation UpdateChannelSettings($input: UpdateSystemChannelSettingsInput!) {
    updateSystemChannelSettings(input: $input)
  }
`,B=`
  query SystemGeneralSettings {
    systemGeneralSettings {
      currencyCode
      timezone
    }
  }
`,M=`
  mutation UpdateSystemGeneralSettings($input: UpdateSystemGeneralSettingsInput!) {
    updateSystemGeneralSettings(input: $input)
  }
`,P=`
  query VideoStorageSettings {
    videoStorageSettings {
      enabled
      dataStorageID
      scanIntervalMinutes
      scanLimit
    }
  }
`,w=`
  mutation UpdateVideoStorageSettings($input: UpdateVideoStorageSettingsInput!) {
    updateVideoStorageSettings(input: $input)
  }
`;function oe(){const{handleError:t}=d();return i({queryKey:["modelSettings"],queryFn:async()=>{try{return(await a(D)).systemModelSettings}catch(e){throw t(e,n.t("common.errors.internalServerError")),e}}})}function ue(){const t=u();return o({mutationFn:async e=>(await a(R,{input:e})).updateSystemModelSettings,onSuccess:()=>{t.invalidateQueries({queryKey:["modelSettings"]}),r.success(n.t("common.success.systemUpdated"))},onError:()=>{r.error(n.t("common.errors.systemUpdateFailed"))}})}function ie(){const{handleError:t}=d();return i({queryKey:["channelSetting"],queryFn:async()=>{try{return(await a(F)).systemChannelSettings}catch(e){throw t(e,n.t("common.errors.internalServerError")),e}}})}function ce(){const t=u();return o({mutationFn:async e=>(await a(N,{input:e})).updateSystemChannelSettings,onSuccess:()=>{t.invalidateQueries({queryKey:["channelSetting"]}),t.invalidateQueries({queryKey:["channelProbeData"]}),r.success(n.t("common.success.systemUpdated"))},onError:()=>{r.error(n.t("common.errors.systemUpdateFailed"))}})}function de(){const{handleError:t}=d();return i({queryKey:["generalSettings"],queryFn:async()=>{try{return(await a(B)).systemGeneralSettings}catch(e){throw t(e,n.t("common.errors.internalServerError")),e}}})}function le(){const t=u();return o({mutationFn:async e=>(await a(M,{input:e})).updateSystemGeneralSettings,onSuccess:()=>{t.invalidateQueries({queryKey:["generalSettings"]}),r.success(n.t("common.success.systemUpdated"))},onError:()=>{r.error(n.t("common.errors.systemUpdateFailed"))}})}function ye(){const{handleError:t}=d();return i({queryKey:["videoStorageSettings"],queryFn:async()=>{try{return(await a(P)).videoStorageSettings}catch(e){throw t(e,n.t("common.errors.internalServerError")),e}}})}function pe(){const t=u();return o({mutationFn:async e=>(await a(w,{input:e})).updateVideoStorageSettings,onSuccess:()=>{t.invalidateQueries({queryKey:["videoStorageSettings"]}),r.success(n.t("common.success.systemUpdated"))},onError:()=>{r.error(n.t("common.errors.systemUpdateFailed"))}})}const G=`
  mutation Backup($input: BackupOptionsInput!) {
    backup(input: $input) {
      success
      data
      message
    }
  }
`,k=`
  mutation Restore($file: Upload!, $input: RestoreOptionsInput!) {
    restore(file: $file, input: $input) {
      success
      message
    }
  }
`;function me(){return o({mutationFn:async t=>(await a(G,{input:t})).backup,onSuccess:t=>{if(t.success&&t.data){const e=new Blob([t.data],{type:"application/json"}),s=URL.createObjectURL(e),c=document.createElement("a");c.href=s;const l=new Date().toISOString().replace(/[:.]/g,"-");c.download=`axonhub-backup-${l}.json`,document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(s),r.success(t.message||n.t("system.backup.success"))}else r.error(t.message||n.t("system.backup.failed"))},onError:()=>{r.error(n.t("system.backup.failed"))}})}function Se(){const t=u();return o({mutationFn:async({file:e,input:s})=>{const c=new FormData;c.append("operations",JSON.stringify({query:k,variables:{file:null,input:s}})),c.append("map",JSON.stringify({0:["variables.file"]})),c.append("0",e);const l=p(),y=await(await fetch("/admin/graphql",{method:"POST",headers:{Authorization:l?`Bearer ${l}`:""},body:c})).json();if(y.errors)throw new Error(y.errors[0].message);return y.data.restore},onSuccess:e=>{e.success?(t.invalidateQueries(),r.success(e.message||n.t("system.restore.success"))):r.error(e.message||n.t("system.restore.failed"))},onError:e=>{r.error(e.message||n.t("system.restore.failed"))}})}const v=`
  query AutoBackupSettings {
    autoBackupSettings {
      enabled
      frequency
      dataStorageID
      includeChannels
      includeModels
      includeAPIKeys
      includeModelPrices
      retentionDays
      lastBackupAt
      lastBackupError
    }
  }
`,K=`
  mutation UpdateAutoBackupSettings($input: UpdateAutoBackupSettingsInput!) {
    updateAutoBackupSettings(input: $input)
  }
`,$=`
  mutation TriggerAutoBackup {
    triggerAutoBackup {
      success
      message
    }
  }
`;function ge(){const{handleError:t}=d();return i({queryKey:["autoBackupSettings"],queryFn:async()=>{try{return(await a(v)).autoBackupSettings}catch(e){throw t(e,n.t("common.errors.internalServerError")),e}}})}function Ee(){const t=u();return o({mutationFn:async e=>(await a(K,{input:e})).updateAutoBackupSettings,onSuccess:()=>{t.invalidateQueries({queryKey:["autoBackupSettings"]}),r.success(n.t("common.success.systemUpdated"))},onError:()=>{r.error(n.t("common.errors.systemUpdateFailed"))}})}function Ue(){const t=u();return o({mutationFn:async()=>(await a($)).triggerAutoBackup,onSuccess:e=>{t.invalidateQueries({queryKey:["autoBackupSettings"]}),e.success?r.success(n.t("system.autoBackup.triggerSuccess")):r.error(e.message||n.t("system.autoBackup.triggerFailed"))},onError:()=>{r.error(n.t("system.autoBackup.triggerFailed"))}})}export{ue as A,ne as B,S as C,X as a,ae as b,se as c,V as d,x as e,le as f,J as g,W as h,j as i,H as j,z as k,ye as l,pe as m,Z as n,me as o,Se as p,ge as q,Ee as r,Ue as s,re as t,de as u,te as v,ee as w,ie as x,ce as y,oe as z};
