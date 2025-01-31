"use client"
import { BehaviourContext } from '@/context/BehaviourContext';
import { useContext } from 'react';
export default function useBehaviour() {
  const context = useContext(BehaviourContext);
  if (!context) {
    throw new Error('useBehaviour must be used within a BehaviourProvider');
  }
  return context;
}