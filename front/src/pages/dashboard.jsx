import { useState } from 'react';
import Navbar from '../components/Navbar/navbar';
import Header from '../components/Header/header';
import Calendar from '../pages/calendar';
import Timer from '../components/timer';

/* ------------------------------------------------------------------ */
/* To-Do List                                                          */
/* ------------------------------------------------------------------ */
function TodoList() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    function addTodo(e) {
        e.preventDefault();
        const value = text.trim();
        if (!value) return;
        setTodos((list) => [...list, { id: Date.now(), text: value, done: false, starred: false }]);
        setText('');
    }

    const update = (id, patch) =>
        setTodos((list) => list.map((t) => (t.id === id ? { ...t, ...patch } : t)));
    const remove = (id) => setTodos((list) => list.filter((t) => t.id !== id));

    return (
        <section className="rounded-[28px] bg-white px-6 py-8 shadow-[0_10px_40px_rgba(15,23,42,0.08)] sm:px-10">
            <h2 className="mb-5 text-3xl font-bold text-[#0A1F4D]">To-Do List</h2>

            {todos.length === 0 && (
                <p className="rounded-xl border border-dashed border-slate-200 py-8 text-center text-sm text-slate-500">
                    Nenhuma tarefa ainda. Adicione a primeira abaixo.
                </p>
            )}

            <ul className="flex flex-col gap-5">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className={`flex h-19 items-center gap-5 rounded-xl border px-7 transition-colors ${
                            todo.done
                                ? 'border-[#3349D6] bg-[#3349D6] text-white'
                                : 'border-slate-200 bg-slate-50/60 text-slate-800'
                        }`}
                    >
                        <button
                            type="button"
                            role="checkbox"
                            aria-checked={todo.done}
                            aria-label={`Marcar "${todo.text}" como concluída`}
                            onClick={() => update(todo.id, { done: !todo.done })}
                            className={`grid h-7 w-7 shrink-0 place-items-center rounded-md border ${
                                todo.done ? 'border-white/80 bg-transparent' : 'border-slate-200 bg-white'
                            }`}
                        >
                            {todo.done && (
                                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </button>

                        <span className="flex-1 truncate text-base font-semibold">{todo.text}</span>

                        {todo.done ? (
                            <button
                                type="button"
                                onClick={() => remove(todo.id)}
                                aria-label={`Excluir "${todo.text}"`}
                                className="grid h-8 w-14 place-items-center rounded-lg bg-white/25 text-white hover:bg-white/35"
                            >
                                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                                    <path d="M4 6h12M8 6V4h4v2M6 6l1 10h6l1-10M9 9v4M11 9v4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        ) : (
                            <div className="flex items-center gap-5">
                                <button
                                    type="button"
                                    onClick={() => update(todo.id, { starred: !todo.starred })}
                                    aria-label="Favoritar"
                                    aria-pressed={todo.starred}
                                    className={todo.starred ? 'text-amber-400' : 'text-slate-400 hover:text-amber-400'}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-6 w-6"
                                        fill={todo.starred ? 'currentColor' : 'none'}
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => remove(todo.id)}
                                    aria-label={`Excluir "${todo.text}"`}
                                    className="grid h-7 w-7 place-items-center rounded-full border border-slate-300 text-slate-400 hover:border-red-300 hover:text-red-400"
                                >
                                    <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>

            <form onSubmit={addTodo} className="mt-6 flex gap-3">
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Adicionar tarefa"
                    className="h-12 flex-1 rounded-xl border border-slate-200 bg-white px-5 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#3349D6] focus:ring-2 focus:ring-[#3349D6]/20"
                />
                <button
                    type="submit"
                    className="h-12 rounded-xl bg-[#3349D6] px-6 text-sm font-semibold text-white hover:bg-[#2a3dbb]"
                >
                    Adicionar
                </button>
            </form>
        </section>
    );
}

export default function Dashboard() {
    // preencha com os dados do usuário logado: { name, role, avatar }
    // enquanto não houver nome, o Header mostra "Usuário"
    const user = {};

    return (
        <div className="flex min-h-screen bg-white font-['Nunito',sans-serif]">
            <Navbar />

            <div className="flex min-w-0 flex-1 flex-col">
                <Header user={user} />

                <main className="flex-1 bg-[#F4F6FA] px-6 py-8 md:px-12">
                    <h1 className="mb-6 text-4xl font-bold text-[#0A1F4D]">Visão Geral</h1>

                    <div className="grid gap-6 xl:grid-cols-[1.05fr_1fr]">
                        <Calendar />
                        <Timer />
                    </div>

                    <div className="mt-6">
                        <TodoList />
                    </div>
                </main>
            </div>
        </div>
    );
}