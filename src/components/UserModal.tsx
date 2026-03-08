import { X, Phone, Globe, MapPin, Mail, Building2, Copy, Check } from 'lucide-react';
import type { User } from '../types/user';
import { useEffect, useState } from 'react';

interface UserModalProps {
  user: User;
  onClose: () => void;
}

export default function UserModal({ user, onClose }: UserModalProps) {
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(user.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0D47A1&color=fff&size=80`;

  return (
    <div
      className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center p-4 z-50 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold text-white">User Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
            <div className="relative">
              <img
                src={avatarUrl}
                alt={`${user.name} avatar`}
                className="w-20 h-20 rounded-full shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 flex items-center justify-center text-white font-bold text-2xl shadow-lg hidden">
                {user.name.charAt(0)}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{user.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">@{user.username}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoItem 
                icon={<Mail />} 
                label="Email" 
                value={user.email}
                actionButton={
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
                }
              />
              <InfoItem icon={<Phone />} label="Phone" value={user.phone} />
              <InfoItem icon={<Globe />} label="Website" value={user.website} />
              <InfoItem icon={<Building2 />} label="Company" value={user.company.name} />
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Address</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {user.address.suite}, {user.address.street}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {user.address.city}, {user.address.zipcode}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Company Info</p>
                  <p className="text-gray-600 dark:text-gray-400 italic">"{user.company.catchPhrase}"</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{user.company.bs}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  actionButton?: React.ReactNode;
}

function InfoItem({ icon, label, value, actionButton }: InfoItemProps) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
      <div className="text-blue-600 dark:text-blue-400 mt-0.5">{icon}</div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
        <div className="flex items-center gap-2">
          <p className="text-gray-900 dark:text-gray-100 font-medium truncate">{value}</p>
          {actionButton}
        </div>
      </div>
    </div>
  );
}
