import { useState, useRef, useEffect } from 'react';
import { router } from '@inertiajs/react';

export default function TaskItem({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(task.title);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing]);

    const handleSave = () => {
        setIsEditing(false);
        if (editValue.trim() === '') {
            setEditValue(task.title);
        } else if (editValue.trim() !== task.title) {
            router.put(`/tasks/${task.id}`, { title: editValue.trim() }, {
                preserveScroll: true,
            });
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSave();
        }
        if (e.key === 'Escape') {
            setEditValue(task.title);
            setIsEditing(false);
        }
    };

    const handleToggle = () => {
        router.put(`/tasks/${task.id}`, { is_completed: !task.is_completed }, {
            preserveScroll: true,
        });
    };

    const handleDelete = () => {
        router.delete(`/tasks/${task.id}`, {
            preserveScroll: true,
        });
    };

    return (
        <li className={`
            group flex items-center gap-3 p-4 rounded-xl border transition-all duration-200
            ${task.is_completed 
                ? 'bg-slate-50 border-slate-200' 
                : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md'
            }
        `}>
            {/* Checkbox */}
            <label className="relative flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    checked={task.is_completed}
                    onChange={handleToggle}
                    className="peer sr-only"
                />
                <div className={`
                    w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200
                    ${task.is_completed 
                        ? 'bg-emerald-500 border-emerald-500' 
                        : 'border-slate-300 hover:border-indigo-400'
                    }
                `}>
                    {task.is_completed && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                </div>
            </label>

            {/* Título de la tarea */}
            {isEditing ? (
                <input
                    ref={inputRef}
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={handleSave}
                    onKeyDown={handleKeyDown}
                    className="flex-1 px-3 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                />
            ) : (
                <span
                    onClick={() => setIsEditing(true)}
                    className={`
                        flex-1 cursor-pointer py-2 px-1 rounded transition-colors
                        ${task.is_completed 
                            ? 'text-slate-400 line-through' 
                            : 'text-slate-700 hover:text-indigo-600'
                        }
                    `}
                >
                    {task.title}
                </span>
            )}

            {/* Botón eliminar */}
            <button
                onClick={handleDelete}
                className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
                title="Eliminar tarea"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </li>
    );
}
