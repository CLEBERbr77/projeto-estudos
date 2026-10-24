import { useEffect, useState } from 'react';

/**
 * Modal para criar, editar e excluir eventos.
 *
 * Props:
 * - initial:  { id?, title, date, time }  (date = 'YYYY-MM-DD', time = 'HH:mm' ou '')
 * - onSave:   (dados) => void
 * - onDelete: (id) => void   (só aparece ao editar)
 * - onClose:  () => void
 */
export default function EventModal({ initial, onSave, onDelete, onClose }) {
    const [title, setTitle] = useState(initial.title ?? '');
    const [date, setDate] = useState(initial.date ?? '');
    const [time, setTime] = useState(initial.time ?? '');

    const isEditing = Boolean(initial.id);

    // fecha com Esc
    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);

    function handleSubmit(e) {
        e.preventDefault();
        const cleanTitle = title.trim();
        if (!cleanTitle || !date) return;
        onSave({ id: initial.id, title: cleanTitle, date, time });
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 p-4 sm:items-center"
            onMouseDown={(e) => e.target === e.currentTarget && onClose()}
        >
            <form
                role="dialog"
                aria-modal="true"
                aria-labelledby="event-modal-title"
                onSubmit={handleSubmit}
                className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl"
            >
                <h3 id="event-modal-title" className="mb-5 text-xl font-bold text-[#0A1F4D]">
                    {isEditing ? 'Editar evento' : 'Novo evento'}
                </h3>

                <label className="mb-4 block">
                    <span className="mb-1 block text-sm font-semibold text-slate-700">Título</span>
                    <input
                        autoFocus
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Ex.: prova de matemática"
                        className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-800 outline-none focus:border-[#3349D6] focus:ring-2 focus:ring-[#3349D6]/20"
                    />
                </label>

                <div className="mb-6 grid grid-cols-2 gap-3">
                    <label className="block">
                        <span className="mb-1 block text-sm font-semibold text-slate-700">Data</span>
                        <input
                            type="date"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm text-slate-800 outline-none focus:border-[#3349D6] focus:ring-2 focus:ring-[#3349D6]/20"
                        />
                    </label>
                    <label className="block">
                        <span className="mb-1 block text-sm font-semibold text-slate-700">
                            Hora <span className="font-normal text-slate-400">(opcional)</span>
                        </span>
                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm text-slate-800 outline-none focus:border-[#3349D6] focus:ring-2 focus:ring-[#3349D6]/20"
                        />
                    </label>
                </div>

                <div className="flex items-center gap-3">
                    {isEditing && (
                        <button
                            type="button"
                            onClick={() => onDelete(initial.id)}
                            className="h-11 rounded-xl px-4 text-sm font-semibold text-red-600 hover:bg-red-50"
                        >
                            Excluir
                        </button>
                    )}
                    <div className="ml-auto flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="h-11 rounded-xl px-4 text-sm font-semibold text-slate-600 hover:bg-slate-100"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="h-11 rounded-xl bg-[#0A1F4D] px-6 text-sm font-semibold text-white hover:bg-[#12306e]"
                        >
                            Salvar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}