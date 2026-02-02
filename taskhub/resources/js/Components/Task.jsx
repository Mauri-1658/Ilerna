import { useState, useRef, useEffect } from 'react';

export default function Task({ task, onToggle, onEdit }) {
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
        // Si el campo está vacío, restaurar el título original
        if (editValue.trim() === '') {
            setEditValue(task.title);
        } else {
            onEdit(task.id, editValue.trim());
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

    return (
        <li className={`
            group flex items-center gap-3 p-4 rounded-xl border transition-all duration-200
            ${task.completed 
                ? 'bg-slate-50 border-slate-200' 
                : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md'
            }
        `}>
            {/* Checkbox */}
            <label className="relative flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                    className="peer sr-only"
                />
                <div className={`
                    w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200
                    ${task.completed 
                        ? 'bg-emerald-500 border-emerald-500' 
                        : 'border-slate-300 hover:border-indigo-400'
                    }
                `}>
                    {task.completed && (
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
                        ${task.completed 
                            ? 'text-slate-400 line-through' 
                            : 'text-slate-700 hover:text-indigo-600'
                        }
                    `}
                >
                    {task.title}
                </span>
            )}
        </li>
    );
}
