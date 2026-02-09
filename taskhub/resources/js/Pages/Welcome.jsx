import { useForm, router } from '@inertiajs/react';
import TaskItem from '@/Components/TaskItem';
import Stats from '@/Components/Stats';

export default function Welcome({ tasks = [] }) {
    // useForm para el formulario de añadir tarea
    const { data, setData, post, processing, reset } = useForm({
        title: '',
    });

    // Calcular estadísticas
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.is_completed).length;
    const progressPercentage = totalTasks > 0 
        ? Math.round((completedTasks / totalTasks) * 100) 
        : 0;

    // Añadir nueva tarea
    const addTask = (e) => {
        e.preventDefault();
        if (data.title.trim() === '') return;
        
        post('/tasks', {
            preserveScroll: true,
            onSuccess: () => reset('title'),
        });
    };

    // Manejar Enter en el input
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addTask(e);
        }
    };

    // Limpiar tareas completadas
    const clearCompleted = () => {
        router.delete('/tasks/clear-completed', {
            preserveScroll: true,
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-indigo-50 py-12 px-4">
            <div className="max-w-2xl mx-auto">
                
                {/* Título con icono */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 mb-2">
                        <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">
                            Lista de tareas pendientes
                        </h1>
                    </div>
                    <p className="text-slate-500">Organiza tu día de manera eficiente</p>
                </div>

                {/* Tarjeta principal */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8">
                    
                    {/* Estadísticas */}
                    <Stats 
                        total={totalTasks} 
                        completed={completedTasks} 
                        percentage={progressPercentage} 
                    />

                    {/* Input y botón añadir */}
                    <form onSubmit={addTask} className="flex gap-3 mb-6">
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Añadir nueva tarea"
                            className="flex-1 px-4 py-3 rounded-xl border border-slate-200 
                                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                                transition-all duration-200 text-slate-700 placeholder:text-slate-400"
                            disabled={processing}
                        />
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl
                                hover:bg-indigo-700 active:scale-95 transition-all duration-200
                                shadow-lg shadow-indigo-200 hover:shadow-indigo-300
                                disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {processing ? 'Añadiendo...' : 'Añadir'}
                        </button>
                    </form>

                    {/* Lista de tareas */}
                    {tasks.length === 0 ? (
                        <div className="text-center py-12 text-slate-400">
                            <svg className="w-16 h-16 mx-auto mb-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <p className="text-lg">No hay tareas pendientes</p>
                            <p className="text-sm">¡Añade tu primera tarea arriba!</p>
                        </div>
                    ) : (
                        <ul className="space-y-3 mb-6">
                            {tasks.map(task => (
                                <TaskItem
                                    key={task.id}
                                    task={task}
                                />
                            ))}
                        </ul>
                    )}

                    {/* Botón limpiar lista */}
                    {tasks.length > 0 && (
                        <div className="flex justify-center pt-4 border-t border-slate-100">
                            <button
                                onClick={clearCompleted}
                                className="px-5 py-2.5 text-slate-500 hover:text-red-600 
                                    hover:bg-red-50 rounded-lg transition-all duration-200 
                                    font-medium flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                Limpiar lista
                            </button>
                        </div>
                    )}
                </div>


            </div>
        </div>
    );
}