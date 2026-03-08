import { ArrowUpDown } from 'lucide-react';

interface SortControlsProps {
  sortBy: 'name' | 'company';
  onSortChange: (sortBy: 'name' | 'company') => void;
}

export default function SortControls({ sortBy, onSortChange }: SortControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value as 'name' | 'company')}
        className="px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer"
      >
        <option value="name">Sort by Name</option>
        <option value="company">Sort by Company</option>
      </select>
    </div>
  );
}
