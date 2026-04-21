type Props={videoUrl?:string;videoSrc?:string;poster?:string;title:string};
export function ProductVideo({videoUrl,videoSrc,poster,title}:Props){
  if(videoUrl){return <iframe title={title} src={videoUrl} className="h-full min-h-[360px] w-full rounded-2xl border border-navy-edge" allow="autoplay; fullscreen" />}
  if(videoSrc){return <video className="h-full min-h-[360px] w-full rounded-2xl border border-navy-edge" controls muted loop poster={poster} src={videoSrc} />}
  return <div className="video-placeholder"><div className="play-ring">▶</div><p>{title}</p></div>
}
