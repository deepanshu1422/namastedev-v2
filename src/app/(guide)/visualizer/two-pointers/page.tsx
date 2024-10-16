"use client"
import Link from "next/link"
import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TwoPointerVisualizer() {
  const [array, setArray] = useState([1, 8, 3, 6, 5, 4, 7, 2, 9])
  const [leftPointer, setLeftPointer] = useState(0)
  const [rightPointer, setRightPointer] = useState(array.length - 1)
  const [operation, setOperation] = useState('twoSum')
  const [target, setTarget] = useState(10)
  const [result, setResult] = useState('')

  useEffect(() => {
    performOperation()
  }, [leftPointer, rightPointer, operation, target, array])

  const movePointer = (pointer: 'left' | 'right', direction: 'left' | 'right') => {
    if (pointer === 'left') {
      if (direction === 'left' && leftPointer > 0) {
        setLeftPointer(leftPointer - 1)
      } else if (direction === 'right' && leftPointer < rightPointer - 1) {
        setLeftPointer(leftPointer + 1)
      }
    } else {
      if (direction === 'left' && rightPointer > leftPointer + 1) {
        setRightPointer(rightPointer - 1)
      } else if (direction === 'right' && rightPointer < array.length - 1) {
        setRightPointer(rightPointer + 1)
      }
    }
  }

  const performOperation = () => {
    switch (operation) {
      case 'twoSum':
        const sum = array[leftPointer] + array[rightPointer]
        setResult(`Sum: ${sum} ${sum === target ? '(Target found!)' : ''}`)
        break
      case 'isPalindrome':
        const isPalindrome = array.slice(leftPointer, rightPointer + 1).join('') ===
          array.slice(leftPointer, rightPointer + 1).reverse().join('')
        setResult(`Is Palindrome: ${isPalindrome}`)
        break
      case 'removeDuplicates':
        const uniqueElements = new Set(array.slice(leftPointer, rightPointer + 1))
        setResult(`Unique elements: ${uniqueElements.size}`)
        break
    }
  }

  return (
      <div className="p-6 max-w-4xl mx-auto">
      <Link href="/visualizer">
        <Button variant="outline" className="mb-4">
          ← Back to Visualizations
        </Button>
      </Link>
      <h1 className="text-2xl font-bold mb-4">Two Pointer Technique Visualizer</h1>
      
      <div className="mb-4">
        <Label htmlFor="array-input">Array (comma-separated):</Label>
        <Input
          id="array-input"
          value={array.join(',')}
          onChange={(e) => {
            const newArray = e.target.value.split(',').map(Number)
            setArray(newArray)
            setRightPointer(newArray.length - 1)
          }}
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
            <SelectItem value="twoSum">Two Sum</SelectItem>
            <SelectItem value="isPalindrome">Is Palindrome</SelectItem>
            <SelectItem value="removeDuplicates">Remove Duplicates</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {operation === 'twoSum' && (
        <div className="mb-4">
          <Label htmlFor="target">Target Sum:</Label>
          <Input
            id="target"
            type="number"
            value={target}
            onChange={(e) => setTarget(Number(e.target.value))}
            className="mt-1"
          />
        </div>
      )}
      
      <div className="flex justify-center space-x-2 mb-4">
        <Button onClick={() => movePointer('left', 'left')} disabled={leftPointer === 0}>
          ← Move Left Pointer
        </Button>
        <Button onClick={() => movePointer('left', 'right')} disabled={leftPointer >= rightPointer - 1}>
          Move Left Pointer →
        </Button>
        <Button onClick={() => movePointer('right', 'left')} disabled={rightPointer <= leftPointer + 1}>
          ← Move Right Pointer
        </Button>
        <Button onClick={() => movePointer('right', 'right')} disabled={rightPointer === array.length - 1}>
          Move Right Pointer →
        </Button>
      </div>
      
      <div className="flex flex-wrap justify-center mb-4">
        {array.map((num, index) => (
          <div
            key={index}
            className={`w-12 h-12 flex items-center justify-center border border-gray-300 m-1 ${
              index === leftPointer
                ? 'bg-blue-200 border-blue-500'
                : index === rightPointer
                ? 'bg-green-200 border-green-500'
                : ''
            }`}
          >
            {num}
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-lg font-semibold">
          {result}
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