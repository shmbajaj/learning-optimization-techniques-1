function Card({ info }) {
  return (
    <article className="grid grid-rows-2 pt-4 border-solid border-t-2 border-t-gray-500 ">
      <div
        className="bg-cover h-52 bg-no-repeat bg-gray-500 border-solid border-t-2 border-t-slate-300 border-b-8 border-black"
        style={{
          backgroundImage: `url(${info.download_url})`,
        }}
      ></div>
      <div className="px-4 py-2 grid gap-8 bg-zinc-900 ">
        <div>
          <span>{info.author}</span>
          <p className="break-all">{info.download_url}</p>
        </div>
        <div className="flex items-center gap-4">
          <span>{info.height}</span>
          <span>{info.width}</span>
        </div>
      </div>
    </article>
  );
}

export { Card };
