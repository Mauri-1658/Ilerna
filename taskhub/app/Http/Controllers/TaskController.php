<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    /**
     * Display all tasks on the welcome page.
     */
    public function index()
    {
        $tasks = Task::orderBy('created_at', 'desc')->get();
        
        return Inertia::render('Welcome', [
            'tasks' => $tasks,
        ]);
    }

    /**
     * Store a new task.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
        ]);

        Task::create([
            'title' => $request->title,
            'is_completed' => false,
        ]);

        return back();
    }

    /**
     * Update an existing task.
     */
    public function update(Request $request, $id)
    {
        $task = Task::findOrFail($id);

        $request->validate([
            'title' => 'sometimes|string|max:255',
            'is_completed' => 'sometimes|boolean',
        ]);

        $task->update($request->only(['title', 'is_completed']));

        return back();
    }

    /**
     * Delete a task.
     */
    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        $task->delete();

        return back();
    }

    /**
     * Delete all completed tasks.
     */
    public function clearCompleted()
    {
        Task::where('is_completed', true)->delete();

        return back();
    }
}
