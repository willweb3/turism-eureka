'use client';

import React, { useState } from 'react';
import { Input, MessageInput, SearchInput } from '@/design-system/components/inputs';
import { StateShowcase, InputPlayground, AnatomyDiagram } from '../components/inputs';
import { CodeBlock } from '../components/CodeBlock';
import { Badge } from '../components/Badge';
import { Mail, Lock, User, Phone, Search as SearchIcon, Eye, EyeOff, Check, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type ActiveTab = 'text-input' | 'message-input' | 'search-input';

/**
 * InputsDemo Component
 *
 * Complete demonstration of input components with states, examples, and playground
 */
export function InputsDemo() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('text-input');

  return (
    <section id="inputs" className="mb-16 scroll-mt-16">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Input Components
          </h2>
          <Badge variant="teal">Components</Badge>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          Form input components with multiple states, validation, and accessibility features.
          Built following Azoreon Design System specifications.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">3</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">Components</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Input types</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">8</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">States</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Visual states</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">WCAG AA</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">Accessible</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Compliant</div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-1">100%</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">Keyboard Nav</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Supported</div>
        </div>
      </div>

      {/* Overview */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Overview</h3>
        <div className="space-y-4 text-gray-600 dark:text-gray-400">
          <p>
            Input components are the foundation of forms and user interaction. They collect user data,
            provide feedback, and guide users through validation states.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Text Input</h4>
              <p className="text-sm">
                Single-line text input for short data like names, emails, passwords.
                Supports icons and validation states.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Message Input</h4>
              <p className="text-sm">
                Multi-line textarea for longer content like messages, comments, descriptions.
                Resizable with character counter.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Search Input</h4>
              <p className="text-sm">
                Specialized pill-shaped search with integrated button.
                Optimized for search experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex gap-8">
            <button
              onClick={() => setActiveTab('text-input')}
              className={cn(
                'pb-4 px-1 border-b-2 font-medium text-sm transition-colors',
                activeTab === 'text-input'
                  ? 'border-teal-500 text-teal-600 dark:text-teal-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              )}
            >
              Text Input
            </button>
            <button
              onClick={() => setActiveTab('message-input')}
              className={cn(
                'pb-4 px-1 border-b-2 font-medium text-sm transition-colors',
                activeTab === 'message-input'
                  ? 'border-teal-500 text-teal-600 dark:text-teal-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              )}
            >
              Message Input
            </button>
            <button
              onClick={() => setActiveTab('search-input')}
              className={cn(
                'pb-4 px-1 border-b-2 font-medium text-sm transition-colors',
                activeTab === 'search-input'
                  ? 'border-teal-500 text-teal-600 dark:text-teal-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              )}
            >
              Search Input
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'text-input' && <TextInputSection />}
      {activeTab === 'message-input' && <MessageInputSection />}
      {activeTab === 'search-input' && <SearchInputSection />}
    </section>
  );
}

/**
 * Text Input Section
 */
function TextInputSection() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-12">
      {/* Anatomy */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Anatomy</h3>
        <AnatomyDiagram />
      </div>

      {/* States */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">States</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Input component supports multiple visual states for different interaction phases.
        </p>
        <StateShowcase />
      </div>

      {/* Interactive Playground */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Interactive Playground
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Experiment with different input configurations and see the generated code.
        </p>
        <InputPlayground />
      </div>

      {/* Examples */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Examples</h3>

        <div className="space-y-8">
          {/* Email Input */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Email Input
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="you@example.com"
                  leftIcon={<Mail size={20} />}
                  helperText="We'll never share your email"
                />
              </div>
              <CodeBlock
                code={`<Input
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  leftIcon={<Mail size={20} />}
  helperText="We'll never share your email"
/>`}
                language="tsx"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Password Input with Toggle
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={password}
                  onChange={setPassword}
                  leftIcon={<Lock size={20} />}
                  rightIcon={
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="pointer-events-auto"
                      type="button"
                    >
                      {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                    </button>
                  }
                />
              </div>
              <CodeBlock
                code={`const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);

<Input
  label="Password"
  type={showPassword ? 'text' : 'password'}
  value={password}
  onChange={setPassword}
  leftIcon={<Lock size={20} />}
  rightIcon={
    <button onClick={() => setShowPassword(!showPassword)}>
      {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
    </button>
  }
/>`}
                language="tsx"
              />
            </div>
          </div>

          {/* Phone Input */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Phone Input
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  leftIcon={<Phone size={20} />}
                />
              </div>
              <CodeBlock
                code={`<Input
  label="Phone Number"
  type="tel"
  placeholder="+1 (555) 000-0000"
  leftIcon={<Phone size={20} />}
/>`}
                language="tsx"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form Example */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Complete Form Example
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <form className="space-y-6 max-w-md">
            <Input
              label="Full Name"
              placeholder="John Doe"
              leftIcon={<User size={20} />}
              required
            />
            <Input
              label="Email"
              type="email"
              placeholder="john@example.com"
              leftIcon={<Mail size={20} />}
              required
            />
            <Input
              label="Phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              leftIcon={<Phone size={20} />}
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              leftIcon={<Lock size={20} />}
              required
            />
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Best Practices */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Best Practices
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Do's */}
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Check className="text-green-600" size={20} />
              <h4 className="font-semibold text-green-900 dark:text-green-100">Do</h4>
            </div>
            <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
              <li>✓ Use clear, descriptive labels</li>
              <li>✓ Provide helpful placeholder examples</li>
              <li>✓ Show validation errors after blur</li>
              <li>✓ Use appropriate input types</li>
              <li>✓ Make required fields clear</li>
              <li>✓ Support keyboard navigation</li>
              <li>✓ Provide helper text for guidance</li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="text-red-600" size={20} />
              <h4 className="font-semibold text-red-900 dark:text-red-100">Don't</h4>
            </div>
            <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
              <li>✗ Use placeholder as label</li>
              <li>✗ Validate on every keystroke</li>
              <li>✗ Hide important info in tooltips</li>
              <li>✗ Make fields unnecessarily required</li>
              <li>✗ Use vague error messages</li>
              <li>✗ Disable paste in password fields</li>
              <li>✗ Use custom validation without feedback</li>
            </ul>
          </div>
        </div>
      </div>

      {/* API Reference */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          API Reference
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold">Prop</th>
                  <th className="text-left py-3 px-4 font-semibold">Type</th>
                  <th className="text-left py-3 px-4 font-semibold">Default</th>
                  <th className="text-left py-3 px-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">label</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Input label text</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">placeholder</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Placeholder text</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">value</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Input value</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">onChange</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">(value: string) =&gt; void</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Change handler</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">leftIcon</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">ReactNode</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Left icon (20x20px)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">rightIcon</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">ReactNode</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Right icon (24x24px)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">state</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">'default' | 'error' | 'success' | 'disabled'</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">'default'</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Input state</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">helperText</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Helper text below input</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">disabled</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">boolean</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Disabled state</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">required</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">boolean</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Required field</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">type</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">'text' | 'email' | 'password' | 'number' | 'tel' | 'url'</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">'text'</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Input type</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Message Input Section
 */
function MessageInputSection() {
  const [message, setMessage] = useState('');

  return (
    <div className="space-y-12">
      {/* Description */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Message Input (Textarea)
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Multi-line text input for longer content like messages, comments, and descriptions.
          Features 12px border radius and resizable behavior.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-900 dark:text-white">Border Radius:</span>
            <span className="ml-2 text-gray-600 dark:text-gray-400">12px</span>
          </div>
          <div>
            <span className="font-medium text-gray-900 dark:text-white">Min Height:</span>
            <span className="ml-2 text-gray-600 dark:text-gray-400">106px</span>
          </div>
          <div>
            <span className="font-medium text-gray-900 dark:text-white">Resizable:</span>
            <span className="ml-2 text-gray-600 dark:text-gray-400">Vertical</span>
          </div>
        </div>
      </div>

      {/* States */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">States</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <Badge variant="neutral" className="mb-4">Placeholder</Badge>
            <MessageInput
              label="Message"
              placeholder="Enter your message..."
            />
            <div className="mt-4 text-xs space-y-1">
              <div>
                <span className="font-medium">Border:</span> 1px #BFC3C9
              </div>
              <div>
                <span className="font-medium">Text:</span> #777777
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <Badge variant="neutral" className="mb-4">Filled</Badge>
            <MessageInput
              label="Message"
              value="This is a sample message with some text content."
            />
            <div className="mt-4 text-xs space-y-1">
              <div>
                <span className="font-medium">Border:</span> 1px #BFC3C9
              </div>
              <div>
                <span className="font-medium">Text:</span> #11212D
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <Badge variant="red" className="mb-4">Error</Badge>
            <MessageInput
              label="Message"
              value="Invalid content"
              state="error"
              helperText="Message is too short"
            />
            <div className="mt-4 text-xs space-y-1">
              <div>
                <span className="font-medium">Border:</span> 1px #DC2626
              </div>
              <div>
                <span className="font-medium">Text:</span> #DC2626
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Examples */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Examples</h3>

        <div className="space-y-8">
          {/* Basic Message */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Basic Message Input
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <MessageInput
                  label="Your Message"
                  placeholder="Tell us what you think..."
                  rows={4}
                />
              </div>
              <CodeBlock
                code={`<MessageInput
  label="Your Message"
  placeholder="Tell us what you think..."
  rows={4}
/>`}
                language="tsx"
              />
            </div>
          </div>

          {/* With Character Counter */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              With Character Counter
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <MessageInput
                  label="Description"
                  placeholder="Enter description (max 500 characters)"
                  value={message}
                  onChange={setMessage}
                  maxLength={500}
                  showCounter
                  rows={5}
                />
              </div>
              <CodeBlock
                code={`<MessageInput
  label="Description"
  placeholder="Enter description..."
  value={message}
  onChange={setMessage}
  maxLength={500}
  showCounter
  rows={5}
/>`}
                language="tsx"
              />
            </div>
          </div>

          {/* Comment Box */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Comment Box
            </h4>
            <MessageInput
              label="Leave a Comment"
              placeholder="Share your thoughts..."
              helperText="Comments are publicly visible"
              rows={3}
            />
            <button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Post Comment
            </button>
          </div>
        </div>
      </div>

      {/* API Reference */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          API Reference
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold">Prop</th>
                  <th className="text-left py-3 px-4 font-semibold">Type</th>
                  <th className="text-left py-3 px-4 font-semibold">Default</th>
                  <th className="text-left py-3 px-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">rows</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">number</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">4</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Number of visible rows</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">maxLength</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">number</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Maximum character length</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">showCounter</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">boolean</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Show character counter</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">resize</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">'none' | 'vertical' | 'horizontal' | 'both'</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">'vertical'</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Resize behavior</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">state</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">'default' | 'error'</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">'default'</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Input state</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Search Input Section
 */
function SearchInputSection() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value: string) => {
    console.log('Searching for:', value);
  };

  return (
    <div className="space-y-12">
      {/* Description */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Search Input
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Specialized pill-shaped search input with integrated search button.
          Optimized for search experiences with rounded-full shape.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-900 dark:text-white">Shape:</span>
            <span className="ml-2 text-gray-600 dark:text-gray-400">Pill (rounded-full)</span>
          </div>
          <div>
            <span className="font-medium text-gray-900 dark:text-white">Button:</span>
            <span className="ml-2 text-gray-600 dark:text-gray-400">Integrated circular</span>
          </div>
          <div>
            <span className="font-medium text-gray-900 dark:text-white">Background:</span>
            <span className="ml-2 text-gray-600 dark:text-gray-400">#FFFFFF (White)</span>
          </div>
        </div>
      </div>

      {/* States */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">States</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F2F6F8] border border-[#777777] rounded-lg p-8">
            <Badge variant="neutral" className="mb-4">Placeholder</Badge>
            <div className="flex justify-center">
              <SearchInput placeholder="Search..." />
            </div>
            <div className="mt-6 text-xs space-y-1">
              <div>
                <span className="font-medium">Container:</span> White, no border
              </div>
              <div>
                <span className="font-medium">Text:</span> #777777 (Grey-500)
              </div>
              <div>
                <span className="font-medium">Button:</span> #3CA997 (Teal-400)
              </div>
            </div>
          </div>

          <div className="bg-[#F2F6F8] border border-[#777777] rounded-lg p-8">
            <Badge variant="neutral" className="mb-4">Filled</Badge>
            <div className="flex justify-center">
              <SearchInput value="sample search" placeholder="Search..." />
            </div>
            <div className="mt-6 text-xs space-y-1">
              <div>
                <span className="font-medium">Container:</span> White, 1px grey border
              </div>
              <div>
                <span className="font-medium">Text:</span> #11212D (Blue-500)
              </div>
              <div>
                <span className="font-medium">Button:</span> #3CA997 (Teal-400)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Examples */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Examples</h3>

        <div className="space-y-8">
          {/* Basic Search */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Basic Search
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#F2F6F8] border border-[#777777] rounded-lg p-8 flex justify-center">
                <SearchInput
                  placeholder="Search products..."
                  onSearch={handleSearch}
                />
              </div>
              <CodeBlock
                code={`<SearchInput
  placeholder="Search products..."
  onSearch={handleSearch}
/>`}
                language="tsx"
              />
            </div>
          </div>

          {/* Controlled Search */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Controlled Search
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#F2F6F8] border border-[#777777] rounded-lg p-8 flex justify-center">
                <SearchInput
                  value={searchValue}
                  onChange={setSearchValue}
                  onSearch={handleSearch}
                  placeholder="Search..."
                />
              </div>
              <CodeBlock
                code={`const [searchValue, setSearchValue] = useState('');

<SearchInput
  value={searchValue}
  onChange={setSearchValue}
  onSearch={handleSearch}
  placeholder="Search..."
/>`}
                language="tsx"
              />
            </div>
            {searchValue && (
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Current search: <span className="font-medium">{searchValue}</span>
              </div>
            )}
          </div>

          {/* Header Search */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Header Search Example
            </h4>
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold">Azoreon</div>
                <SearchInput placeholder="Search marketplace..." />
                <div className="flex gap-4 text-sm">
                  <button>Products</button>
                  <button>Providers</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* API Reference */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          API Reference
        </h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold">Prop</th>
                  <th className="text-left py-3 px-4 font-semibold">Type</th>
                  <th className="text-left py-3 px-4 font-semibold">Default</th>
                  <th className="text-left py-3 px-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">placeholder</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">'Search'</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Placeholder text</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">value</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Search value</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">onChange</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">(value: string) =&gt; void</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Change handler</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">onSearch</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">(value: string) =&gt; void</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Search button click handler</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">buttonLabel</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Button label (instead of icon)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">disabled</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">boolean</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Disabled state</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
