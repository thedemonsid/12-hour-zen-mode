'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function CreateZenPageComponent() {
  const [tasks, setTasks] = useState<string[]>([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()])
      setNewTask('')
    }
  }

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-2">Create Your Zen Session</h1>
        <p className="text-center text-gray-400 mb-8">
          Set your focus goals, jot down a pre-plan, and prepare for a distraction-free 12 hours.
        </p>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-blue-500">Session Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="zen-title" className="text-gray-300">Zen Title</Label>
              <Input
                id="zen-title"
                placeholder="Enter your session title"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zen-description" className="text-gray-300">Zen Description</Label>
              <Textarea
                id="zen-description"
                placeholder="Briefly describe your session goals"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="mt-8 bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-blue-500">Pre-Zen Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Use markdown to outline your session plan..."
                className="min-h-[200px] bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="mt-8 bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-blue-500">Tasks List</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2 mb-4">
                <Input
                  placeholder="Add a new task"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
                <Button onClick={addTask} className="bg-blue-600 hover:bg-blue-700 text-white">Add</Button>
              </div>
              <ul className="space-y-2">
                {tasks.map((task, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-between bg-gray-700 p-2 rounded"
                  >
                    <span>{task}</span>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeTask(index)}
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      Remove
                    </Button>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Start Zen Session
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}