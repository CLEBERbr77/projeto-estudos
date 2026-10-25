import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    if (countdownStarted && eventDate) {
      const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = new Date(eventDate).getTime();
        let remainingTime = eventTime - currentTime;

        if (remainingTime <= 0) {
          remainingTime = 0;
          clearInterval(countdownInterval);
          alert("Countdown complete!");
        }

        setTimeRemaining(remainingTime);
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [countdownStarted, eventDate]);

  useEffect(() => {
    if (countdownStarted) {
      document.title = eventName;
    }
  }, [countdownStarted, eventName]);

  const handleSetCountdown = () => {
    setCountdownStarted(true);
    localStorage.setItem("eventDate", eventDate);
    localStorage.setItem("eventName", eventName);
  };

  const handleStopCountdown = () => {
    setCountdownStarted(false);
    setTimeRemaining(0);
  };

  const handleResetCountdown = () => {
    setCountdownStarted(false);
    setEventDate("");
    setEventName("");
    setTimeRemaining(0);
    localStorage.removeItem("eventDate");
    localStorage.removeItem("eventName");
  };

  const formatDate = (date) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    const units = [
      { label: "days", value: days },
      { label: "hours", value: hours },
      { label: "minutes", value: minutes },
      { label: "seconds", value: seconds },
    ];

    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4" aria-live="polite">
        {units.map(({ label, value }) => (
          <div
            key={label}
            className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
          >
            <div className="text-3xl font-bold tabular-nums text-indigo-600 sm:text-4xl">
              {value.toString().padStart(2, "0")}
            </div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
              {label}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="mx-auto w-full max-w-2xl rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-lg shadow-slate-200/60 sm:p-8 " >
      <header className="mb-8 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          SESSÃO DE ESTUDO
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          {countdownStarted ? eventName : "Study Timer"}
        </h2>
        {countdownStarted && (
          <p className="mt-2 text-sm text-slate-500">{formatDate(eventDate)}</p>
        )}
      </header>

      {!countdownStarted ? (
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleSetCountdown();
          }}
        >
          <div>
            <label htmlFor="title" className="mb-2 block text-sm font-medium text-slate-700">
              Objetivo de estudo 
            </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="ex.: Revisar notas de biologia"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />
          </div>

          <div>
            <label htmlFor="date-picker" className="mb-2 block text-sm font-medium text-slate-700">
              Focar até (data e hora)
            </label>
          <input
            id="date-picker"
            name="date-picker"
            type="datetime-local"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            Iniciar estudos
          </button>
        </form>
      ) : (
        <div className="space-y-7">
          {formatTime(timeRemaining)}
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleStopCountdown}
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-200"
            >
              Pausa
            </button>
            <button
              type="button"
              onClick={handleResetCountdown}
              className="rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-300"
            >
              FIM DA SESSÃO
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CountdownTimer;