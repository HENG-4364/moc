'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

// Define a type for the beforeinstallprompt event
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed', platform: string }>;
}

export function PWAInstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)

  useEffect(() => {
    // Check if prompt has been shown before
    const hasPromptBeenShown = localStorage.getItem('pwaPromptShown')
    
    // Detect iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    setIsIOS(isIOSDevice)

    // Handle PWA install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      if (!hasPromptBeenShown) {
        setShowPrompt(true)
      }
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    // Show iOS prompt if not shown before
    if (isIOSDevice && !hasPromptBeenShown) {
      setShowPrompt(true)
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstall = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        setShowPrompt(false)
      }
      setDeferredPrompt(null)
    }
    localStorage.setItem('pwaPromptShown', 'true')
  }

  const handleClose = () => {
    setShowPrompt(false)
    localStorage.setItem('pwaPromptShown', 'true')
  }

  if (!showPrompt) return null

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 z-50">
      <Card className="mx-auto max-w-md bg-white shadow-lg">
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {isIOS ? 'Install this app on your iPhone' : 'Install our app'}
              </h3>
              {isIOS ? (
                <div className="mt-2 space-y-3">
                  <p className="text-sm text-gray-600">
                    Install this application on your home screen for quick and easy access:
                  </p>
                  <ol className="text-sm text-gray-600 list-decimal pl-4 space-y-2">
                    <li>Tap the share button <span className="inline-block w-6 h-6 align-middle">⎙</span></li>
                    <li>Scroll down and tap &quot;Add to Home Screen&quot;</li>
                    <li>Tap &quot;Add&quot; to install it</li>
                  </ol>
                </div>
              ) : (
                <p className="mt-2 text-sm text-gray-600">
                  Install our app for quick and easy access when you&apos;re on the go.
                </p>
              )}
            </div>
            <button
              onClick={handleClose}
              className="ml-4 text-gray-400 hover:text-gray-500"
              aria-label="Close prompt"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          {!isIOS && (
            <div className="mt-4">
              <Button
                onClick={handleInstall}
                className="w-full"
              >
                Install App
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

