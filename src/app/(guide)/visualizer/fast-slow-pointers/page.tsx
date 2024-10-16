"use client"
import Link from "next/link"

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function FastSlowPointerVisualizer() {
  const [sequence, setSequence] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  const [slowPointer, setSlowPointer] = useState(0)
  const [fastPointer, setFastPointer] = useState(0)
  const [operation, setOperation] = useState('cycleDetection')
  const [hasCycle, setHasCycle] = useState(false)
  const [cycleStart, setCycleStart] = useState(6)
  const [result, setResult] = useState('')
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (isRunning) {
      const timer = setTimeout(movePointers, 1000)
      return () => clearTimeout(timer)
    }
  }, [isRunning, slowPointer, fastPointer])

  useEffect(() => {
    resetPointers()
  }, [operation, sequence, hasCycle, cycleStart])

  const resetPointers = () => {
    setSlowPointer(0)
    setFastPointer(0)
    setResult('')
    setIsRunning(false)
  }

  const movePointers = () => {
    let newSlow = (slowPointer + 1) % sequence.length
    let newFast = (fastPointer + 2) % sequence.length

    if (hasCycle) {
      if (newSlow >= cycleStart) newSlow = cycleStart + (newSlow - cycleStart) % (sequence.length - cycleStart)
      if (newFast >= cycleStart) newFast = cycleStart + (newFast - cycleStart) % (sequence.length - cycleStart)
    }

    setSlowPointer(newSlow)
    setFastPointer(newFast)

    performOperation(newSlow, newFast)
  }

  const performOperation = (slow: number, fast: number) => {
    switch (operation) {
      case 'cycleDetection':
        if (slow === fast && slow !== 0) {
          setResult('Cycle detected!')
          setIsRunning(false)
        } else if (!hasCycle && fast === sequence.length - 1) {
          setResult('No cycle detected')
          setIsRunning(false)
        }
        break
      case 'middleOfList':
        if (fast === sequence.length - 1 || fast === sequence.length - 2) {
          setResult(`Middle element: ${sequence[slow]}`)
          setIsRunning(false)
        }
        break
    }
  }

  const toggleRunning = () => {
    setIsRunning(!isRunning)
    if (!isRunning) {
      setResult('')
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <Link href="/visualizer">
        <Button variant="outline" className="mb-4">
          ← Back to Visualizations
        </Button>
      </Link>
      <h1 className="text-2xl font-bold mb-4">Fast and Slow Pointer Technique Visualizer</h1>

      <div className="mb-4">
        <Label htmlFor="sequence-input">Sequence (comma-separated):</Label>
        <Input
          id="sequence-input"
          value={sequence.join(',')}
          onChange={(e) => setSequence(e.target.value.split(',').map(Number))}
          className="mt-1"
        />
      </div>

      <div className="mb-4">
        <Label htmlFor="operation">Operation:</Label>
        <Select value={operation} onValueChange={setOperation}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select operation" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cycleDetection">Cycle Detection</SelectItem>
            <SelectItem value="middleOfList">Middle of List</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <Switch
          id="cycle-switch"
          checked={hasCycle}
          onCheckedChange={setHasCycle}
        />
        <Label htmlFor="cycle-switch">Has Cycle</Label>
      </div>

      {hasCycle && (
        <div className="mb-4">
          <Label htmlFor="cycle-start">Cycle Start Index:</Label>
          <Input
            id="cycle-start"
            type="number"
            value={cycleStart}
            onChange={(e) => setCycleStart(Math.min(Math.max(0, Number(e.target.value)), sequence.length - 1))}
            min={0}
            max={sequence.length - 1}
            className="mt-1"
          />
        </div>
      )}

      <div className="flex justify-center space-x-2 mb-4">
        <Button onClick={toggleRunning}>
          {isRunning ? 'Pause' : 'Start'}
        </Button>
        <Button onClick={resetPointers}>Reset</Button>
      </div>

      <div className="flex flex-wrap justify-center mb-4">
        {sequence.map((num, index) => (
          <div
            key={index}
            className={`w-12 h-12 flex items-center justify-center border border-gray-300 m-1 ${index === slowPointer && index === fastPointer
                ? 'bg-purple-600 border-purple-500'
                : index === slowPointer
                  ? 'bg-blue-600 border-blue-500'
                  : index === fastPointer
                    ? 'bg-green-600 border-green-500'
                    : ''
              }`}
          >
            {num}
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-lg font-semibold">
          {result || `Slow: ${sequence[slowPointer]}, Fast: ${sequence[fastPointer]}`}
        </p>
      </div>

      <p className="mb-4 border-2 border-gray-300 p-4 text-center my-10">
        Check out our <a
          href="https://30dayscoding.com/bundle/complete-package-all-course-bundle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-700 underline ml-1"
        >
          upskilling courses
        </a>. Any bugs? Give <a
          href="https://forms.gle/X5bgfQbhcAPNaZaB8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-700 underline ml-1"
        > feedback
        </a>
      </p>
    </div>
  )
}