"use client"
import Link from "next/link"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SlidingWindowVisualizer() {
  const [array, setArray] = useState([1, 3, -1, -3, 5, 3, 6, 7])
  const [windowSize, setWindowSize] = useState(3)
  const [startIndex, setStartIndex] = useState(0)
  const [operation, setOperation] = useState('max')

  const moveWindow = (direction: 'forward' | 'backward') => {
    if (direction === 'forward' && startIndex + windowSize < array.length) {
      setStartIndex(startIndex + 1)
    } else if (direction === 'backward' && startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
  }

  const performOperation = () => {
    const window = array.slice(startIndex, startIndex + windowSize)
    switch (operation) {
      case 'max':
        return Math.max(...window)
      case 'min':
        return Math.min(...window)
      case 'sum':
        return window.reduce((a, b) => a + b, 0)
      case 'avg':
        return (window.reduce((a, b) => a + b, 0) / window.length).toFixed(2)
      default:
        return 'N/A'
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      
      <Link href="/visualizer">
        <Button variant="outline" className="mb-4">
          ← Back to Visualizations
        </Button>
      </Link>
      <h1 className="text-2xl font-bold mb-4">Sliding Window Visualizer</h1>
      
      <div className="mb-4">
        <Label htmlFor="array-input">Array (comma-separated):</Label>
        <Input
          id="array-input"
          value={array.join(',')}
          onChange={(e) => setArray(e.target.value.split(',').map(Number))}
          className="mt-1"
        />
      </div>
      
      <div className="mb-4">
        <Label htmlFor="window-size">Window Size:</Label>
        <Input
          id="window-size"
          type="number"
          value={windowSize}
          onChange={(e) => setWindowSize(Number(e.target.value))}
          min={1}
          max={array.length}
          className="mt-1"
        />
      </div>
      
      <div className="mb-4">
        <Label htmlFor="operation">Operation:</Label>
        <select
          id="operation"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          className="mt-1 block w-full text-red-500 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="max">Max</option>
          <option value="min">Min</option>
          <option value="sum">Sum</option>
          <option value="avg">Average</option>
        </select>
      </div>
      
      <div className="flex justify-center space-x-2 mb-4">
        <Button onClick={() => moveWindow('backward')} disabled={startIndex === 0}>
          ← Move Backward
        </Button>
        <Button onClick={() => moveWindow('forward')} disabled={startIndex + windowSize >= array.length}>
          Move Forward →
        </Button>
      </div>
      
      <div className="flex flex-wrap justify-center mb-4">
        {array.map((num, index) => (
          <div
            key={index}
            className={`w-12 h-12 flex items-center justify-center border border-gray-300 m-1 ${
              index >= startIndex && index < startIndex + windowSize
                ? 'bg-blue-500 border-blue-500'
                : ''
            }`}
          >
            {num}
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-lg font-semibold">
          Current Window {operation}: {performOperation()}
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