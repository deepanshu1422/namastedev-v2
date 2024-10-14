"use client"
import Link from "next/link"

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

type Node = {
  value: number
  next: number
}

export default function LinkedListCycleDetector() {
  const [nodes, setNodes] = useState<Node[]>([
    { value: 1, next: 1 },
    { value: 2, next: 2 },
    { value: 3, next: 3 },
    { value: 4, next: 4 },
    { value: 5, next: 0 },
  ])
  const [slowPointer, setSlowPointer] = useState(0)
  const [fastPointer, setFastPointer] = useState(0)
  const [hasCycle, setHasCycle] = useState(true)
  const [isRunning, setIsRunning] = useState(false)
  const [result, setResult] = useState('')

  useEffect(() => {
    if (isRunning) {
      const timer = setTimeout(movePointers, 1000)
      return () => clearTimeout(timer)
    }
  }, [isRunning, slowPointer, fastPointer])

  const movePointers = () => {
    const newSlow = nodes[slowPointer].next
    const newFast = nodes[nodes[fastPointer].next].next

    setSlowPointer(newSlow)
    setFastPointer(newFast)

    if (newSlow === newFast) {
      setResult('Cycle detected!')
      setIsRunning(false)
    } else if (!hasCycle && (newFast === nodes.length - 1 || nodes[newFast].next === nodes.length - 1)) {
      setResult('No cycle detected')
      setIsRunning(false)
    }
  }

  const resetPointers = () => {
    setSlowPointer(0)
    setFastPointer(0)
    setResult('')
    setIsRunning(false)
  }

  const toggleRunning = () => {
    setIsRunning(!isRunning)
    if (!isRunning) {
      setResult('')
    }
  }

  const updateNodeNext = (index: number, nextValue: number) => {
    const updatedNodes = [...nodes]
    updatedNodes[index].next = nextValue
    setNodes(updatedNodes)
  }

  const toggleCycle = () => {
    const newHasCycle = !hasCycle
    setHasCycle(newHasCycle)
    const lastIndex = nodes.length - 1
    updateNodeNext(lastIndex, newHasCycle ? 0 : lastIndex)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
    <Link href="/visualizer">
      <Button variant="outline" className="mb-4">
        ← Back to Visualizations
      </Button>
    </Link>
      <h1 className="text-2xl font-bold mb-4">Linked List Cycle Detector</h1>
      
      <div className="flex items-center space-x-2 mb-4">
        <Switch
          id="cycle-switch"
          checked={hasCycle}
          onCheckedChange={toggleCycle}
        />
        <Label htmlFor="cycle-switch">Has Cycle</Label>
      </div>
      
      <div className="flex justify-center space-x-2 mb-4">
        <Button onClick={toggleRunning}>
          {isRunning ? 'Pause' : 'Start'}
        </Button>
        <Button onClick={resetPointers}>Reset</Button>
      </div>
      
      <div className="flex flex-wrap justify-center mb-4">
        {nodes.map((node, index) => (
          <div key={index} className="flex flex-col items-center m-2">
            <div
              className={`w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full ${
                index === slowPointer && index === fastPointer
                  ? 'bg-purple-600 border-purple-500'
                  : index === slowPointer
                  ? 'bg-blue-600 border-blue-500'
                  : index === fastPointer
                  ? 'bg-green-600 border-green-500'
                  : ''
              }`}
            >
              {node.value}
            </div>
            <div className="mt-2">
              <Label htmlFor={`next-${index}`} className="sr-only">Next node for {node.value}</Label>
              <Input
                id={`next-${index}`}
                type="number"
                value={node.next}
                onChange={(e) => updateNodeNext(index, Math.min(Math.max(0, Number(e.target.value)), nodes.length - 1))}
                min={0}
                max={nodes.length - 1}
                className="w-16 text-center"
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mb-4">
        {nodes.map((node, index) => (
          <div key={`arrow-${index}`} className="flex items-center">
            <div className="w-12 h-0 border-t-2 border-gray-400"></div>
            {index < nodes.length - 1 && (
              <div className="w-4 h-4 border-t-2 border-r-2 border-gray-400 transform rotate-45 translate-x-1"></div>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-lg font-semibold">
          {result || `Slow: ${nodes[slowPointer].value}, Fast: ${nodes[fastPointer].value}`}
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