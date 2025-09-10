'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, AlertCircle, Loader2 } from 'lucide-react';

const NewsletterSubscription = ({ 
  title = "Get Notified of New Articles",
  description = "Be the first to know when we publish new insights and perspectives",
  buttonText = "Subscribe for Updates",
  className = ""
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    if (!isValidEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you! You will be notified when we publish new articles.');
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const resetStatus = () => {
    if (status === 'error') {
      setStatus('idle');
      setMessage('');
    }
  };

  return (
    <div className={`bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto ${className}`}>
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
          <Mail className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              resetStatus();
            }}
            placeholder="Enter your email address"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
              status === 'error' 
                ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                : 'border-slate-300 focus:border-blue-500 focus:ring-blue-200'
            }`}
            disabled={status === 'loading' || status === 'success'}
          />
        </div>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center space-x-2 text-sm ${
              status === 'success' ? 'text-green-700' : 'text-red-600'
            }`}
          >
            {status === 'success' ? (
              <Check className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            <span>{message}</span>
          </motion.div>
        )}

        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
            status === 'success'
              ? 'bg-green-600 text-white cursor-default'
              : status === 'loading'
              ? 'bg-blue-400 text-white cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
          }`}
        >
          {status === 'loading' ? (
            <div className="flex items-center justify-center space-x-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Subscribing...</span>
            </div>
          ) : status === 'success' ? (
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-4 h-4" />
              <span>Subscribed!</span>
            </div>
          ) : (
            buttonText
          )}
        </button>
      </form>

      <p className="text-xs text-slate-500 text-center mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterSubscription;
