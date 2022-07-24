function MusicPlayer() {
  return (
    <article className="w-full grid gap-2 pb-4 sticky bottom-0 bg-neutral-800">
      <progress
        className="relative w-full h-1 accent-green-600"
        value={32}
        max={100}
      ></progress>
      <div className="flex justify-evenly items-center">
        <div className="flex gap-4">
          <div>
            <span>01:30</span>/<span>03:30</span>
          </div>
          <p>Max</p>
        </div>
        <div>
          <span>1.0</span>
        </div>
      </div>
    </article>
  );
}

export { MusicPlayer };
