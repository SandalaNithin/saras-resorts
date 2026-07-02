'use client';

import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '',
    eventType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', guests: '', eventType: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="guests">Number of Guests</Label>
          <Select
            value={form.guests}
            onValueChange={(v) => setForm({ ...form, guests: v })}
          >
            <SelectTrigger id="guests">
              <SelectValue placeholder="Select guests" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-2">1 - 2 Guests</SelectItem>
              <SelectItem value="3-5">3 - 5 Guests</SelectItem>
              <SelectItem value="6-10">6 - 10 Guests</SelectItem>
              <SelectItem value="10+">10+ Guests</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="eventType">Event Type</Label>
          <Select
            value={form.eventType}
            onValueChange={(v) => setForm({ ...form, eventType: v })}
          >
            <SelectTrigger id="eventType">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="stay">Room Stay</SelectItem>
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="corporate">Corporate Event</SelectItem>
              <SelectItem value="birthday">Birthday</SelectItem>
              <SelectItem value="family">Family Gathering</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your plans..."
          rows={5}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-800 px-8 py-4 text-sm font-semibold text-white shadow-soft transition-all hover:bg-forest-700 hover:shadow-soft-lg sm:w-auto"
      >
        <Send className="h-4 w-4" />
        Send Enquiry
      </button>

      <div
        className={cn(
          'flex items-center gap-3 rounded-2xl bg-forest-50 p-4 text-sm text-forest-800 transition-all duration-300',
          submitted ? 'opacity-100 translate-y-0' : 'pointer-events-none absolute opacity-0 translate-y-2'
        )}
      >
        <CheckCircle2 className="h-5 w-5 text-forest-600" />
        Thank you! Our team will get back to you within 24 hours.
      </div>
    </form>
  );
}
