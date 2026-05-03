import { FileCode2, Paintbrush, MonitorSmartphone, LayoutTemplate, Layers, ShoppingBag } from 'lucide-react';

export const TEMPLATES = [
  {
    id: 't1',
    title: 'Agentic Command Center',
    category: 'Enterprise',
    description: 'Dark-themed console for managing autonomous agents, featuring realtime status chips and log streams.',
    icon: LayoutTemplate,
    color: 'bg-cohere-navy',
  },
  {
    id: 't2',
    title: 'Minimal Editorial Blog',
    category: 'Publishing',
    description: 'Off-white canvas with elegant serif typography, generous whitespace, and pastel gradients.',
    icon: Paintbrush,
    color: 'bg-canvas-soft',
  },
  {
    id: 't3',
    title: 'Fintech Dashboard',
    category: 'Dashboard',
    description: 'High-density data views, monospaced tech labels, and strict geometric layouts over soft stone.',
    icon: Layers,
    color: 'bg-cohere-soft-stone',
  },
  {
    id: 't4',
    title: 'Voice AI Playground',
    category: 'Interactive',
    description: 'Rounded media cards, waveform visualizers, and pill CTAs for audio model testing.',
    icon: FileCode2,
    color: 'bg-canvas-white',
  },
  {
    id: 't5',
    title: 'SaaS Marketing Site',
    category: 'Landing Page',
    description: 'Split hero compositions, capability cards, and deep green feature bands to build trust.',
    icon: MonitorSmartphone,
    color: 'bg-cohere-green',
  },
  {
    id: 't6',
    title: 'Clean E-Commerce',
    category: 'Commerce',
    description: 'Minimalist product grids, floating cart interactions, and smooth checkout flows.',
    icon: ShoppingBag,
    color: 'bg-orb-rose',
  }
];
