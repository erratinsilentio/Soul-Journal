export default function Home() {
  return (
    <main className="z-0 min-h-screen min-w-full p-10">
      <section className="min-h-screen rounded-xl bg-opacity-50 bg-gradient-to-b from-zinc-800 via-zinc-800 to-zinc-900 p-16 shadow-2xl shadow-black">
        <p className="mb-6 text-3xl text-zinc-200">Daily note</p>
        <p className="py-6 text-2xl text-zinc-200">🪬 Meditation:</p>
        <textarea
          className="textarea-bordered textarea min-w-full py-5"
          placeholder="meditation..."
        ></textarea>
        <p className="py-6 text-2xl text-zinc-200">🌙 Dreams:</p>
        <textarea
          className="textarea-bordered textarea min-w-full py-5"
          placeholder="dreams..."
        ></textarea>
        <p className="py-6 text-2xl text-zinc-200">🏆 Exercise:</p>
        <textarea
          className="textarea-bordered textarea min-w-full py-5"
          placeholder="exercise..."
        ></textarea>
        <p className="py-6 text-2xl text-zinc-200">🌞 Awake:</p>
        <textarea
          className="textarea-bordered textarea min-w-full py-5"
          placeholder="your day..."
        ></textarea>
        <p className="py-6 text-2xl text-zinc-200">👁️ Goals:</p>
        <select className="select-bordered select w-full max-w-xs py-5">
          <option disabled selected>
            Who shot first?
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <p className="py-6 text-2xl text-zinc-200">🌱 I Appreciate...</p>
        <textarea
          className="textarea-bordered textarea min-w-full py-5"
          placeholder="little things..."
        ></textarea>
        <p className="py-6 text-2xl text-zinc-200">🎭 I Forgive...</p>
        <textarea
          className="textarea-bordered textarea min-w-full py-5"
          placeholder="myself / someone..."
        ></textarea>
        <p className="py-6 text-2xl text-zinc-200">🖤 I Love...</p>
        <textarea
          className="textarea-bordered textarea mb-6 min-w-full py-5"
          placeholder="myself / someone / something for..."
        ></textarea>
        <button className="btn-wide btn bg-zinc-800">Save</button>{" "}
      </section>
    </main>
  );
}
