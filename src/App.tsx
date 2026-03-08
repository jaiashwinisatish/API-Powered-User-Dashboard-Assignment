import { useState, useEffect, useMemo } from 'react';
import { Users } from 'lucide-react';
import type { User } from './types/user';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';
import ThemeToggle from './components/ThemeToggle';
import UserCard from './components/UserCard';
import UserModal from './components/UserModal';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'company'>('name');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
             (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredAndSortedUsers = useMemo(() => {
    let result = [...users];

    if (searchQuery) {
      result = result.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    result.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        return a.company.name.localeCompare(b.company.name);
      }
    });

    return result;
  }, [users, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <header className="bg-white dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">User Dashboard</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Showing {filteredAndSortedUsers.length} {filteredAndSortedUsers.length === 1 ? 'User' : 'Users'}
                  {searchQuery && ` of "${searchQuery}"`}
                </p>
              </div>
            </div>
            <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <SortControls sortBy={sortBy} onSortChange={setSortBy} />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading && <LoadingSpinner />}

        {error && <ErrorMessage message={error} onRetry={fetchUsers} />}

        {!loading && !error && filteredAndSortedUsers.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <Users className="w-10 h-10 text-gray-400 dark:text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              No users found 🔍
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Try another search
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear search
              </button>
            )}
          </div>
        )}

        {!loading && !error && filteredAndSortedUsers.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedUsers.map(user => (
              <UserCard
                key={user.id}
                user={user}
                onClick={() => setSelectedUser(user)}
              />
            ))}
          </div>
        )}
      </main>

      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}

export default App;
