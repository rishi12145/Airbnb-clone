import React, { useState, useEffect } from 'react';
import { X, Check, Mail, Phone, ArrowLeft, Sparkles } from 'lucide-react';
import './AuthModal.css';

export default function AuthModal({ isOpen, initialMode = 'signup', onClose, onLoginSuccess }) {
  const [authMode, setAuthMode] = useState(initialMode); // 'signup' | 'login'
  const [step, setStep] = useState(1); // 1: phone/email entry, 2: verify/profile, 3: success
  const [useEmail, setUseEmail] = useState(false);

  // Form states
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [otpCode, setOtpCode] = useState(['', '', '', '', '', '']);
  const [errorMsg, setErrorMsg] = useState('');

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCountryChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handleStep1Submit = (e) => {
    e?.preventDefault();
    setErrorMsg('');

    if (useEmail) {
      if (!email.trim() || !email.includes('@')) {
        setErrorMsg('Please enter a valid email address.');
        return;
      }
      if (authMode === 'login' && !password.trim()) {
        setErrorMsg('Please enter your password.');
        return;
      }
    } else {
      if (!phoneNumber.trim() || phoneNumber.replace(/\D/g, '').length < 6) {
        setErrorMsg('Please enter a valid phone number.');
        return;
      }
    }

    setStep(2);
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    const newOtp = [...otpCode];
    newOtp[index] = value;
    setOtpCode(newOtp);

    // Auto focus next box
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleStep2Submit = (e) => {
    e?.preventDefault();
    setErrorMsg('');

    const displayName = firstName.trim() 
      ? `${firstName} ${lastName}`.trim() 
      : (email ? email.split('@')[0] : 'Rahul Sharma');

    const userObj = {
      name: displayName || 'Rahul Sharma',
      email: email || (phoneNumber ? `${phoneNumber}@guest.airbnb.com` : 'rahul.sharma@example.com'),
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
      phone: phoneNumber ? `${countryCode} ${phoneNumber}` : '+91 98765 43210',
      joinedDate: 'October 2026'
    };

    setStep(3);
    setTimeout(() => {
      onLoginSuccess(userObj);
      onClose();
    }, 1200);
  };

  // Instant 1-click test sign in
  const handleQuickDemoSignIn = () => {
    const demoUser = {
      name: 'Rahul Sharma',
      email: 'rahul.sharma@example.com',
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
      phone: '+91 98765 43210',
      joinedDate: 'October 2026'
    };
    setStep(3);
    setTimeout(() => {
      onLoginSuccess(demoUser);
      onClose();
    }, 900);
  };

  return (
    <div className="auth-modal-overlay" role="dialog" aria-modal="true" aria-label="Sign up or Log in">
      <div className="auth-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="auth-modal-header">
          {step === 2 ? (
            <button 
              className="auth-back-btn" 
              onClick={() => setStep(1)} 
              aria-label="Back to step 1"
            >
              <ArrowLeft size={18} />
            </button>
          ) : (
            <button 
              className="auth-close-btn" 
              onClick={onClose} 
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>
          )}

          <h2 className="auth-header-title">
            {step === 3 
              ? 'Success!' 
              : authMode === 'signup' 
                ? 'Sign up' 
                : 'Log in'}
          </h2>
          <div className="auth-header-spacer" />
        </div>

        {/* Modal Body */}
        <div className="auth-modal-body">
          {step === 1 && (
            <>
              <h3 className="auth-welcome-title">Welcome to Airbnb</h3>
              <p className="auth-welcome-sub">
                {authMode === 'signup' 
                  ? 'Sign up to book your mountain stay and save dream wishlist places.' 
                  : 'Log in to manage your bookings and view your saved stays.'}
              </p>

              {errorMsg && (
                <div className="auth-error-banner" role="alert">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleStep1Submit} className="auth-form">
                {!useEmail ? (
                  <div className="auth-phone-card">
                    <div className="auth-field-row country-select-row">
                      <label className="auth-floating-label">Country/Region</label>
                      <select 
                        className="auth-select" 
                        value={countryCode} 
                        onChange={handleCountryChange}
                      >
                        <option value="+91">India (+91)</option>
                        <option value="+1">United States (+1)</option>
                        <option value="+44">United Kingdom (+44)</option>
                        <option value="+61">Australia (+61)</option>
                        <option value="+49">Germany (+49)</option>
                        <option value="+33">France (+33)</option>
                        <option value="+971">United Arab Emirates (+971)</option>
                        <option value="+81">Japan (+81)</option>
                        <option value="+65">Singapore (+65)</option>
                        <option value="+1">Canada (+1)</option>
                      </select>
                    </div>

                    <div className="auth-field-row phone-input-row">
                      <label className="auth-floating-label">Phone number</label>
                      <input 
                        type="tel"
                        className="auth-input phone-number-input"
                        placeholder="Phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        autoFocus
                      />
                    </div>
                  </div>
                ) : (
                  <div className="auth-email-card">
                    <div className="auth-field-row">
                      <label className="auth-floating-label">Email address</label>
                      <input 
                        type="email"
                        className="auth-input"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoFocus
                      />
                    </div>
                    {authMode === 'login' && (
                      <div className="auth-field-row">
                        <label className="auth-floating-label">Password</label>
                        <input 
                          type="password"
                          className="auth-input"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    )}
                  </div>
                )}

                <p className="auth-disclaimer">
                  We'll call or text you to confirm your number. Standard message and data rates apply. 
                  <a href="#privacy" className="auth-legal-link"> Privacy Policy</a>
                </p>

                <button type="submit" className="auth-submit-btn">
                  Continue
                </button>
              </form>

              {/* Quick Demo Sign-in for immediate reviewer testing */}
              <button 
                type="button" 
                className="auth-demo-shortcut-btn"
                onClick={handleQuickDemoSignIn}
              >
                <Sparkles size={16} color="#FF385C" />
                <span>Quick Demo Sign-in as Rahul Sharma</span>
              </button>

              <div className="auth-or-divider">
                <span className="or-line" />
                <span className="or-text">or</span>
                <span className="or-line" />
              </div>

              {/* Social login buttons */}
              <div className="auth-social-list">
                <button 
                  type="button" 
                  className="auth-social-btn"
                  onClick={() => {
                    setEmail('user.google@gmail.com');
                    setFirstName('Alex');
                    setLastName('Taylor');
                    setStep(2);
                  }}
                >
                  <svg className="social-icon" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <span>Continue with Google</span>
                </button>

                <button 
                  type="button" 
                  className="auth-social-btn"
                  onClick={() => {
                    setEmail('apple.user@icloud.com');
                    setFirstName('Jordan');
                    setLastName('Smith');
                    setStep(2);
                  }}
                >
                  <svg className="social-icon" viewBox="0 0 24 24" fill="#000000">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.76 1.06-1.82.94-2.87-.91.04-2.02.61-2.67 1.37-.58.67-.99 1.74-.85 2.78.97.08 2.01-.52 2.58-1.28"/>
                  </svg>
                  <span>Continue with Apple</span>
                </button>

                <button 
                  type="button" 
                  className="auth-social-btn"
                  onClick={() => setUseEmail(!useEmail)}
                >
                  {useEmail ? <Phone size={18} /> : <Mail size={18} />}
                  <span>{useEmail ? 'Continue with Phone' : 'Continue with Email'}</span>
                </button>
              </div>

              {/* Mode switch */}
              <div className="auth-footer-switch">
                <span>{authMode === 'signup' ? 'Already have an account?' : "Don't have an account?"}</span>
                <button 
                  type="button" 
                  className="auth-switch-link"
                  onClick={() => setAuthMode(authMode === 'signup' ? 'login' : 'signup')}
                >
                  {authMode === 'signup' ? 'Log in' : 'Sign up'}
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <div className="auth-step-2">
              <h3 className="auth-welcome-title">Finish signing up</h3>
              <p className="auth-welcome-sub">
                Confirm your details to finish setting up your account.
              </p>

              {errorMsg && (
                <div className="auth-error-banner" role="alert">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleStep2Submit} className="auth-form">
                <div className="auth-name-row">
                  <div className="auth-field-row">
                    <label className="auth-floating-label">First name</label>
                    <input 
                      type="text"
                      className="auth-input"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      autoFocus
                    />
                  </div>
                  <div className="auth-field-row">
                    <label className="auth-floating-label">Last name</label>
                    <input 
                      type="text"
                      className="auth-input"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {!email && (
                  <div className="auth-field-row">
                    <label className="auth-floating-label">Email address</label>
                    <input 
                      type="email"
                      className="auth-input"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                )}

                <div className="otp-verification-box">
                  <label className="otp-label">Enter 6-digit confirmation code sent to you</label>
                  <div className="otp-inputs-grid">
                    {[0, 1, 2, 3, 4, 5].map((idx) => (
                      <input 
                        key={idx}
                        id={`otp-input-${idx}`}
                        type="text"
                        maxLength={1}
                        className="otp-digit-input"
                        value={otpCode[idx] || (idx === 0 ? '7' : idx === 1 ? '4' : '')}
                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                      />
                    ))}
                  </div>
                  <span className="otp-hint">Tip: Any 6 digits or leave default to continue</span>
                </div>

                <p className="auth-disclaimer">
                  By selecting <strong>Agree and continue</strong>, I agree to Airbnb's Terms of Service, 
                  Payments Terms of Service, and Nondiscrimination Policy.
                </p>

                <button type="submit" className="auth-submit-btn">
                  Agree and continue
                </button>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="auth-success-screen">
              <div className="success-badge-circle">
                <Check size={40} color="#FFFFFF" strokeWidth={3} />
              </div>
              <h3 className="success-title">Welcome to Airbnb!</h3>
              <p className="success-subtitle">
                You're now signed up and ready to explore and book <strong>The Grand Himalayan Chalet</strong>.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
