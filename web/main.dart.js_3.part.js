((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_3",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={aUF:function aUF(){},hk:function hk(){},anz:function anz(){},Hc:function Hc(){},auh:function auh(){},
bEL(d,e){var x,w
if(d===e)return!0
x=J.a5(e)
if(d.length!==x.gu(e))return!1
for(w=0;w<d.length;++w)if(!A.bF4(d[w],x.cN(e,w)))return!1
return!0},
bF4(d,e){var x
if(d==null?e==null:d===e)return!0
x=d==null?null:B.cL(y.e)
if(x!=(e==null?null:J.Z(e)))return!1
else return!1},
baw(d,e){var x,w,v,u={}
u.a=d
u.b=e
if(y.B.b(e)){C.b.aJ(A.beO(J.Vc(e),new A.b3H(),y.b),new A.b3I(u))
return u.a}x=y.g.b(e)?u.b=A.beO(e,new A.b3J(),y.b):e
if(y.F.b(x)){for(x=J.aL(x);x.C();){w=x.ga1(x)
v=u.a
u.a=(v^A.baw(v,w))>>>0}return(u.a^J.aF(u.b))>>>0}d=u.a=d+J.L(x)&536870911
d=u.a=d+((d&524287)<<10)&536870911
return d^d>>>6},
bEV(d,e){return d.k(0)+"("+new B.a7(e,new A.b6q(),B.a0(e).h("a7<1,h>")).dH(0,", ")+")"},
b3H:function b3H(){},
b3I:function b3I(d){this.a=d},
b3J:function b3J(){},
b6q:function b6q(){},
rb:function rb(){},
d3:function d3(){},
any:function any(d){this.a=d},
anx:function anx(d){this.a=d},
anw:function anw(d){this.a=d},
nk:function nk(){},
G6:function G6(d,e,f,g,h){var _=this
_.f=d
_.c=e
_.d=f
_.a=g
_.$ti=h},
zo:function zo(){},
P1:function P1(d){var _=this
_.e=_.d=$
_.c=_.a=null
_.$ti=d},
aQU:function aQU(d){this.a=d},
aQV:function aQV(d){this.a=d},
aQT:function aQT(d,e){this.a=d
this.b=e},
bcH(d,e,f,g,h,i){return new A.zp(e,d,g,f,e,null,h.h("@<0>").bi(i).h("zp<1,2>"))},
zp:function zp(d,e,f,g,h,i,j){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.c=h
_.a=i
_.$ti=j},
vi:function vi(){},
P2:function P2(d){var _=this
_.r=null
_.x=_.w=$
_.c=_.a=null
_.$ti=d},
aQX:function aQX(d){this.a=d},
aQW:function aQW(d){this.a=d},
bqn(d,e){var x,w,v,u=!1
try{w=B.ts(d,u,e)
return w}catch(v){w=B.aD(v)
if(w instanceof B.L0){x=w
if(x.a!==B.cL(e))throw v
throw B.f(B.ma("        BlocProvider.of() called with a context that does not contain a "+B.cL(e).k(0)+".\n        No ancestor could be found starting from the context that was passed to BlocProvider.of<"+B.cL(e).k(0)+">().\n\n        This can happen if the context you used comes from a widget above the BlocProvider.\n\n        The context used was: "+d.k(0)+"\n        "))}else throw v}},
bqm(d,e){var x=e.gBn(),w=new B.dR(x,B.l(x).h("dR<1>")).lS(new A.anB(d))
return w.gadE(w)},
G7:function G7(d,e,f,g,h){var _=this
_.e=d
_.r=e
_.c=f
_.a=g
_.$ti=h},
anC:function anC(d){this.a=d},
anB:function anB(d){this.a=d},
b17:function b17(d){this.a=d},
tV:function tV(){},
CD:function CD(){},
a58:function a58(d,e,f,g){var _=this
_.afL$=d
_.ok=e
_.p1=!1
_.c=_.b=_.a=_.ay=null
_.d=$
_.e=f
_.r=_.f=null
_.w=g
_.z=_.y=null
_.Q=!1
_.as=!0
_.at=!1},
aht:function aht(){},
bgF(d,e,f,g){var x,w,v,u,t=B.bg4(d,f)
try{v=t
if(v==null)u=null
else{v=v.gqZ()
u=v.gl(v)}x=u
if(!f.b(x)){v=B.b9r(B.cL(f),B.q(d.gbv()))
throw B.f(v)}w=e.$1(x)
if(t!=null)d.Gf(y.m.a(t),new A.aJk(f,d,e,w))
else d.aG(f.h("hD<0?>"))
return w}finally{}},
aJk:function aJk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
beO(d,e,f){var x=B.W(d,!0,f)
C.b.e6(x,e)
return x}},D
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[16],A)
D=c[20]
A.aUF.prototype={}
A.hk.prototype={
gBn(){var x=this.b
if(x===$){x!==$&&B.ay()
x=this.b=new B.iu(null,null,B.l(this).h("iu<hk.0>"))}return x},
Vk(d){var x,w,v,u,t=this
try{if((t.gBn().c&4)!==0){v=B.G("Cannot emit new states after calling close")
throw B.f(v)}if(d.j(0,t.c)&&t.d)return
t.c=d
t.gBn().A(0,t.c)
t.d=!0}catch(u){x=B.aD(u)
w=B.b7(u)
throw u}},
b2(d){var x=0,w=B.Q(y.v),v=this
var $async$b2=B.R(function(e,f){if(e===1)return B.N(f,w)
while(true)switch(x){case 0:x=2
return B.X(v.gBn().b2(0),$async$b2)
case 2:return B.O(null,w)}})
return B.P($async$b2,w)},
$ilt:1}
A.anz.prototype={}
A.Hc.prototype={}
A.auh.prototype={
j(d,e){var x
if(e==null)return!1
if(this!==e)x=e instanceof A.rb&&B.q(this)===B.q(e)&&A.bEL(this.goU(),e.goU())
else x=!0
return x},
gB(d){var x=B.hV(B.q(this)),w=C.b.rZ(this.goU(),0,A.bDF()),v=w+((w&67108863)<<3)&536870911
v^=v>>>11
return(x^v+((v&16383)<<15)&536870911)>>>0},
k(d){var x=$.beg
if(x==null){$.beg=!1
x=!1}if(x)return A.bEV(B.q(this),this.goU())
return B.q(this).k(0)}}
A.rb.prototype={}
A.d3.prototype={
R(d){var x=this,w=B.l(x),v=new A.G6(new A.anw(x),null,new A.anx(x),null,w.h("G6<d3.0,d3.1>"))
return new A.G7(v,new A.any(x),v,null,w.h("G7<d3.0>"))},
U_(d,e){}}
A.nk.prototype={
Aa(d,e){},
Vk(d){if(this.y)return
B.kT(d.k(0))
this.aoG(d)},
LO(){}}
A.G6.prototype={
xz(d,e){return this.f.$2(d,e)}}
A.zo.prototype={
ao(){return new A.P1(this.$ti.h("P1<1,2>"))}}
A.P1.prototype={
aU(){var x,w=this
w.bh()
w.a.toString
x=w.c
x.toString
x=B.ts(x,!1,w.$ti.c)
w.d=x
w.e=x.c},
bd(d){var x,w,v=this
v.bG(d)
x=v.c
x.toString
w=B.ts(x,!1,v.$ti.c)
v.a.toString
if(!J.c(w,w)){v.d=w
v.e=w.c}},
cA(){var x,w,v=this
v.ec()
v.a.toString
x=v.c
x.toString
w=B.ts(x,!1,v.$ti.c)
x=v.d
x===$&&B.a()
if(x!==w){v.d=w
v.e=w.c}},
R(d){var x,w,v,u,t,s,r=this
r.a.toString
x=r.$ti
w=x.c
A.bgF(d,new A.aQU(r),w,y.e)
v=r.d
v===$&&B.a()
u=r.a
t=u.d
s=r.e
s===$&&B.a()
return A.bcH(v,u.xz(d,s),t,new A.aQV(r),w,x.y[1])}}
A.zp.prototype={}
A.vi.prototype={
ao(){return new A.P2(this.$ti.h("P2<1,2>"))}}
A.P2.prototype={
aU(){var x,w=this
w.bh()
x=w.a.f
if(x==null){x=w.c
x.toString
x=B.ts(x,!1,w.$ti.c)}w.w=x
w.x=x.c
w.OQ()},
bd(d){var x,w,v,u=this
u.bG(d)
x=d.f
if(x==null){w=u.c
w.toString
x=B.ts(w,!1,u.$ti.c)}v=u.a.f
if(v==null)v=x
if(!J.c(x,v)){if(u.r!=null){u.OR()
u.w=v
u.x=v.c}u.OQ()}},
cA(){var x,w,v=this
v.ec()
x=v.a.f
if(x==null){w=v.c
w.toString
x=B.ts(w,!1,v.$ti.c)}w=v.w
w===$&&B.a()
if(w!==x){if(v.r!=null){v.OR()
v.w=x
v.x=x.c}v.OQ()}},
Ch(d,e){if(this.a.f==null)A.bgF(d,new A.aQX(this),this.$ti.c,y.e)
return e},
m(){this.OR()
this.b6()},
OQ(){var x=this.w
x===$&&B.a()
x=x.gBn()
this.r=new B.dR(x,B.l(x).h("dR<1>")).lS(new A.aQW(this))},
OR(){var x=this.r
if(x!=null)x.bw(0)
this.r=null}}
A.G7.prototype={
Ch(d,e){var x=B.btA(null,e,this.r,new A.anC(this),null,!0,A.bCS(),this.$ti.c)
return x}}
A.tV.prototype={
e0(d){var x=new A.a58(null,this.ao(),this,C.az)
x.geN(0).c=x
x.geN(0).a=this
return x}}
A.CD.prototype={
R(d){return this.Ch(d,this.a.c)}}
A.a58.prototype={
gbv(){return y.i.a(B.bc.prototype.gbv.call(this))},
geN(d){return y.A.a(B.fP.prototype.geN.call(this,0))},
j2(){return this.arx()}}
A.aht.prototype={
hk(d,e){this.O4(d,e)},
dj(){this.arw()
this.nX(new A.b17(this))}}
var z=a.updateTypes(["~(M,F?)","k(k,F?)","~()(B3<lt<@>?>,lt<@>)"])
A.b3H.prototype={
$2(d,e){return J.L(d)-J.L(e)},
$S:291}
A.b3I.prototype={
$1(d){var x=this.a,w=x.a,v=x.b
v.toString
x.a=(w^A.baw(w,[d,J.ac(y.B.a(v),d)]))>>>0},
$S:14}
A.b3J.prototype={
$2(d,e){return J.L(d)-J.L(e)},
$S:291}
A.b6q.prototype={
$1(d){return J.dn(d)},
$S:205}
A.any.prototype={
$1(d){var x=this.a
return x.d=x.m4(d)},
$S(){return B.l(this.a).h("d3.0(M)")}}
A.anx.prototype={
$2(d,e){return d.goU()!==e.goU()},
$S(){return B.l(this.a).h("z(d3.1,d3.1)")}}
A.anw.prototype={
$2(d,e){var x=this.a,w=B.l(x),v=w.h("d3.0"),u=A.bqn(d,v),t=x.gadh()
return A.bcH(null,x.mt(d,u,e),null,t,v,w.h("d3.1"))},
$S(){return B.l(this.a).h("zp<d3.0,d3.1>(M,d3.1)")}}
A.aQU.prototype={
$1(d){var x=this.a.d
x===$&&B.a()
return x===d},
$S(){return this.a.$ti.h("z(1)")}}
A.aQV.prototype={
$2(d,e){var x=this.a
return x.a9(new A.aQT(x,e))},
$S(){return this.a.$ti.h("~(M,2)")}}
A.aQT.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.aQX.prototype={
$1(d){var x=this.a.w
x===$&&B.a()
return x===d},
$S(){return this.a.$ti.h("z(1)")}}
A.aQW.prototype={
$1(d){var x,w=this.a,v=w.a.w
if(v==null)v=null
else{x=w.x
x===$&&B.a()
x=v.$2(x,d)
v=x}if(v==null?!0:v){v=w.a
v.toString
x=w.c
x.toString
v.r.$2(x,d)}w.x=d},
$S(){return this.a.$ti.h("~(2)")}}
A.anC.prototype={
$2(d,e){var x
if(!e.y){x=e.Q
if(x!=null)x.bw(0)
e.LO()}e.y=!0
return e.aoF(0)},
$S(){return this.a.$ti.h("~(M,1)")}}
A.anB.prototype={
$1(d){return this.a.ahQ()},
$S:24}
A.b17.prototype={
$1(d){return!1},
$S:41}
A.aJk.prototype={
$1(d){var x=this,w=x.a
if(!w.b(d))throw B.f(B.b9r(B.cL(w),B.q(x.b.gbv())))
return!D.a2g.j6(x.c.$1(d),x.d)},
$S(){return this.a.h("z(0?)")}};(function aliases(){var x=A.hk.prototype
x.aoG=x.Vk
x.aoF=x.b2
x=A.nk.prototype
x.ZY=x.LO})();(function installTearOffs(){var x=a._static_2,w=a._instance_2u
x(A,"bDF","baw",1)
w(A.d3.prototype,"gadh","U_",0)
x(A,"bCS","bqm",2)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(B.F,[A.anz,A.hk,A.auh])
v(A.aUF,A.anz)
v(A.Hc,A.hk)
w(B.js,[A.b3H,A.b3J,A.anx,A.anw,A.aQV,A.anC])
w(B.fX,[A.b3I,A.b6q,A.any,A.aQU,A.aQX,A.aQW,A.anB,A.b17,A.aJk])
v(A.rb,A.auh)
v(A.d3,B.ab)
v(A.nk,A.Hc)
w(B.a1,[A.zo,A.tV])
v(A.G6,A.zo)
w(B.a2,[A.P1,A.CD])
v(A.aQT,B.lZ)
v(A.vi,A.tV)
v(A.zp,A.vi)
v(A.P2,A.CD)
v(A.G7,B.mF)
v(A.aht,B.fP)
v(A.a58,A.aht)
x(A.aht,B.a59)})()
B.k4(b.typeUniverse,JSON.parse('{"hk":{"lt":["1"]},"Hc":{"hk":["1"],"lt":["1"]},"d3":{"ab":[],"e":[]},"nk":{"hk":["1"],"lt":["1"]},"zo":{"a1":[],"e":[]},"G6":{"zo":["1","2"],"a1":[],"e":[]},"P1":{"a2":["zo<1,2>"]},"zp":{"vi":["1","2"],"tV":[],"a1":[],"e":[]},"vi":{"tV":[],"a1":[],"e":[]},"P2":{"CD":["vi<1,2>"],"a2":["vi<1,2>"]},"G7":{"mF":[],"ab":[],"e":[]},"tV":{"a1":[],"e":[]},"CD":{"a2":["1"]},"a58":{"fP":[],"bc":[],"M":[]}}'))
B.ajl(b.typeUniverse,JSON.parse('{"lt":1,"Hc":1,"nk":1}'))
var y={m:B.a4("hQ"),F:B.a4("r<@>"),B:B.a4("aO<@,@>"),g:B.a4("cc<@>"),A:B.a4("CD<tV>"),i:B.a4("tV"),e:B.a4("z"),b:B.a4("@"),v:B.a4("~")};(function constants(){D.jB=new A.aUF()
D.a2g=new B.HC(!1)})();(function staticFields(){$.beg=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bGK","UP",()=>new B.F())})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_3",e:"endPart",h:b})})($__dart_deferred_initializers__,"Frh8UetPe6SnEnsI6aBHg28Fxk8=");