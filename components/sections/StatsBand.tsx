"use client";
import { useEffect, useState } from 'react';
const targets = [23,2.38,60,1000,21];
const labels = ['IN THE MARKETPLACE','REAL-TIME COVERAGE','SYNCHRONIZED','TERRITORIAL NETWORK','LIVING ORGANIZATION'];
export function StatsBand(){
  const [vals,setVals]=useState([0,0,0,0,0]);
  useEffect(()=>{let t=0;const id=setInterval(()=>{t+=0.05;setVals(targets.map((v)=>Math.min(v,Number((v*t).toFixed(v===2.38?2:0)))));if(t>=1)clearInterval(id)},100);return()=>clearInterval(id)},[]);
  return <section className="stats-band"><div className="grid gap-4 md:grid-cols-5">{vals.map((v,i)=><article key={labels[i]} className="card-surface p-5 text-center"><p className="eyebrow text-cyan">{labels[i]}</p><p className="font-mono text-5xl">{i===1?`${v.toFixed(2)}M`:v}</p></article>)}</div></section>
}
