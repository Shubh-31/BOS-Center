"use client";

import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/cardContent";
import { Dialog } from "@/components/ui/CookieContainer/dialog";
import { DialogContent } from "@/components/ui/CookieContainer/dialogContent";
import { DialogDescription } from "@/components/ui/CookieContainer/dialogDescription";
import { DialogHeader } from "@/components/ui/CookieContainer/dialogHeader";
import { DialogTitle } from "@/components/ui/CookieContainer/dialogTitle";
import { Switch } from "@/components/ui/switch";
import React, { useEffect, useState } from "react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieDialogBox() {
  const [open, setOpen] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookiePrefs="));
    if (saved) {
      try {
        const prefs: CookiePreferences = JSON.parse(
          decodeURIComponent(saved.split("=")[1])
        );
        setPreferences(prefs);
        setOpen(false);
      } catch {
        setOpen(true);
      }
    } else {
      setOpen(true);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    document.cookie = `cookiePrefs=${encodeURIComponent(
      JSON.stringify(prefs)
    )}; path=/; max-age=${60 * 60 * 24 * 180}`; // 180 days
    setPreferences(prefs);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg w-full p-6">
        <DialogHeader>
          <DialogTitle>Cookie Preferences</DialogTitle>
          <DialogDescription>
            Manage your cookie settings below.
          </DialogDescription>
        </DialogHeader>
        <Card>
          <CardContent>
            <div className="flex items-center justify-between py-2">
              <label htmlFor="essential">Essential Cookies</label>
              <Switch id="essential" checked={preferences.essential} disabled />
            </div>
            <div className="flex items-center justify-between py-2">
              <label htmlFor="analytics">Analytics Cookies</label>
              <Switch
                id="analytics"
                checked={preferences.analytics}
                onCheckedChange={(val) =>
                  setPreferences({ ...preferences, analytics: val })
                }
              />
            </div>
            <div className="flex items-center justify-between py-2">
              <label htmlFor="marketing">Marketing Cookies</label>
              <Switch
                id="marketing"
                checked={preferences.marketing}
                onCheckedChange={(val) =>
                  setPreferences({ ...preferences, marketing: val })
                }
              />
            </div>
          </CardContent>
        </Card>
        <div className="mt-4 flex gap-3 justify-end">
          <button
            onClick={() => savePreferences(preferences)}
            className="px-4 py-2 bg-blue-300 text-white rounded-lg"
          >
            Save Preferences
          </button>
          <button
            onClick={() =>
              savePreferences({
                essential: true,
                analytics: true,
                marketing: true,
              })
            }
            className="px-4 py-2 bg-green-400 text-white rounded-lg"
          >
            Accept All
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
