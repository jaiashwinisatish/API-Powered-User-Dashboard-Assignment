import { MapPin, Mail, Building2, Copy, Check } from 'lucide-react';
import type { User as UserType } from '../types/user';
import { useState } from 'react';

interface UserCardProps {
  user: UserType;
  onClick: () => void;
}

export default function UserCard({ user, onClick }: UserCardProps) {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(user.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0D47A1&color=fff&size=56`;

  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <img
            src={avatarUrl}
            alt={`${user.name} avatar`}
            className="w-14 h-14 rounded-full shadow-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 flex items-center justify-center text-white font-semibold text-lg shadow-lg hidden">
            {user.name.charAt(0)}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1 truncate">
            {user.name}
          </h3>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 group">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="truncate flex-1">{user.email}</span>
              <button
                onClick={handleCopyEmail}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                title="Copy email"
              >
                {emailCopied ? (
                  <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                ) : (
                  <Copy className="w-3 h-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Building2 className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{user.company.name}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{user.address.city}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
