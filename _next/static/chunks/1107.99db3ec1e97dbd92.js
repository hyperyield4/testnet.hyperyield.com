"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1107],{91107:function(e,n,i){i.d(n,{TOKEN_PROGRAM_ID:function(){return k}}),(r=o||(o={}))[r.InitializeMint=0]="InitializeMint",r[r.InitializeAccount=1]="InitializeAccount",r[r.InitializeMultisig=2]="InitializeMultisig",r[r.Transfer=3]="Transfer",r[r.Approve=4]="Approve",r[r.Revoke=5]="Revoke",r[r.SetAuthority=6]="SetAuthority",r[r.MintTo=7]="MintTo",r[r.Burn=8]="Burn",r[r.CloseAccount=9]="CloseAccount",r[r.FreezeAccount=10]="FreezeAccount",r[r.ThawAccount=11]="ThawAccount",r[r.TransferChecked=12]="TransferChecked",r[r.ApproveChecked=13]="ApproveChecked",r[r.MintToChecked=14]="MintToChecked",r[r.BurnChecked=15]="BurnChecked",r[r.InitializeAccount2=16]="InitializeAccount2",r[r.SyncNative=17]="SyncNative",r[r.InitializeAccount3=18]="InitializeAccount3",r[r.InitializeMultisig2=19]="InitializeMultisig2",r[r.InitializeMint2=20]="InitializeMint2";var t,u,r,o,c,s,a=i(39386),f=i(40475);let l=e=>({decode:e.decode.bind(e),encode:e.encode.bind(e)});var d=i(48764).Buffer;let A=e=>n=>{let i=(0,a.Ik)(e,n),{encode:t,decode:u}=l(i);return i.decode=(e,n)=>{let i=u(e,n);return(0,f.oU)(d.from(i))},i.encode=(n,i,u)=>t((0,f.k$)(n,e),i,u),i},z=e=>n=>{let i=(0,a.Ik)(e,n),{encode:t,decode:u}=l(i);return i.decode=(e,n)=>{let i=u(e,n);return(0,f.Q5)(d.from(i))},i.encode=(n,i,u)=>t((0,f.zP)(n,e),i,u),i},h=A(8);z(8),A(16),z(16),A(24),z(24),A(32),z(32),new(i(70794)).Z("1e+18");let _=e=>{let n=(0,a.u8)(e),{encode:i,decode:t}=l(n);return n.decode=(e,n)=>!!t(e,n),n.encode=(e,n,t)=>i(Number(e),n,t),n};var m=i(59917);let B=e=>{let n=(0,a.Ik)(32,e),{encode:i,decode:t}=l(n);return n.decode=(e,n)=>{let i=t(e,n);return new m.PublicKey(i)},n.encode=(e,n,t)=>i(e.toBuffer(),n,t),n},k=new m.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");new m.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),new m.PublicKey("So11111111111111111111111111111111111111112"),i(48764).Buffer,(0,a.n_)([(0,a.u8)("instruction"),(0,a.u8)("decimals"),B("mintAuthority"),(0,a.u8)("freezeAuthorityOption"),B("freezeAuthority")]),i(48764).Buffer,(0,a.n_)([(0,a.u8)("instruction")]),i(48764).Buffer,(0,a.n_)([(0,a.u8)("instruction"),(0,a.u8)("m")]),i(48764).Buffer,(0,a.n_)([(0,a.u8)("instruction"),h("amount")]),i(48764).Buffer,(0,a.n_)([(0,a.u8)("instruction"),h("amount")]),i(48764).Buffer,(0,a.n_)([(0,a.u8)("instruction")]),i(48764).Buffer,(t=c||(c={}))[t.MintTokens=0]="MintTokens",t[t.FreezeAccount=1]="FreezeAccount",t[t.AccountOwner=2]="AccountOwner",t[t.CloseAccount=3]="CloseAccount",(0,a.n_)([(0,a.u8)("instruction"),(0,a.u8)("authorityType"),(0,a.u8)("newAuthorityOption"),B("newAuthority")]),i(48764).Buffer,(0,a.n_)([(0,a.u8)("instruction"),h("amount")]),i(48764).Buffer,(0,a.n_)([(0,a.u8)("instruction"),h("amount")]),i(48764).Buffer,(0,a.n_)([(0,a.u8)("instruction")]),i(48764).Buffer,(0,a.n_)([(0,a.u8)("instruction")]),i(48764).Buffer,(0,a.n_)([(0,a.u8)("instruction")]),i(48764).Buffer,(0,a.n_)([(0,a.u8)("instruction"),h("amount"),(0,a.u8)("decimals")]),i(48764).Buffer,(0,a.n_)([(0,a.u8)("instruction"),h("amount"),(0,a.u8)("decimals")]),i(48764).Buffer,(0,a.n_)([(0,a.u8)("instruction"),h("amount"),(0,a.u8)("decimals")]),i(48764).Buffer,(0,a.n_)([(0,a.u8)("instruction"),h("amount"),(0,a.u8)("decimals")]),i(48764).Buffer,(0,a.n_)([(0,a.u8)("instruction")]),i(48764).Buffer,(u=s||(s={}))[u.Uninitialized=0]="Uninitialized",u[u.Initialized=1]="Initialized",u[u.Frozen=2]="Frozen",(0,a.n_)([B("mint"),B("owner"),h("amount"),(0,a.Jq)("delegateOption"),B("delegate"),(0,a.u8)("state"),(0,a.Jq)("isNativeOption"),h("isNative"),h("delegatedAmount"),(0,a.Jq)("closeAuthorityOption"),B("closeAuthority")]).span,(0,a.n_)([(0,a.Jq)("mintAuthorityOption"),B("mintAuthority"),h("supply"),(0,a.u8)("decimals"),_("isInitialized"),(0,a.Jq)("freezeAuthorityOption"),B("freezeAuthority")]).span,(0,a.n_)([(0,a.u8)("m"),(0,a.u8)("n"),_("isInitialized"),B("signer1"),B("signer2"),B("signer3"),B("signer4"),B("signer5"),B("signer6"),B("signer7"),B("signer8"),B("signer9"),B("signer10"),B("signer11")]).span}}]);