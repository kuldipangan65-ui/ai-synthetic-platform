'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { useState } from 'react';

// Thresholds sourced from Vercel Speed Insights "Metrics" docs.
// Each metric maps to [good <= value, needs-improvement <= value]. Above the
// second value is "poor". Values are in milliseconds except CLS (unitless).
type Rating = 'good' | 'needs-improvement' | 'poor';

const THRESHOLDS: Record<
  string,
  { good: number; poor: number; unit: 'ms' | 's' | ''; label: string }
> = {
  LCP: { good: 2500, poor: 4000, unit: 's', label: 'Largest Contentful Paint' },
  INP: { good: 200, poor: 500, unit: 'ms', label: 'Interaction to Next Paint' },
  CLS: { good: 0.1, poor: 0.25, unit: '', label: 'Cumulative Layout Shift' },
  FCP: { good: 1800, poor: 3000, unit: 's', label: 'First Contentful Paint' },
  TTFB: { good: 800, poor: 1800, unit: 'ms', label: 'Time to First Byte' },
};

const RATING_COLOR: Record<Rating, string> = {
  good: '#0cce6b',
  'needs-improvement': '#ffa400',
  poor: '#ff4e42',
};

const RATING_LABEL: Record<Rating, string> = {
  good: 'Good',
  'needs-improvement': 'Needs Improvement',
  poor: 'Poor',
};

const METRIC_ORDER = ['LCP', 'INP', 'CLS', 'FCP', 'TTFB'];

function rate(name: string, value: number): Rating {
  const t = THRESHOLDS[name];
  if (!t) return 'good';
  if (value <= t.good) return 'good';
  if (value <= t.poor) return 'needs-improvement';
  return 'poor';
}

function formatValue(name: string, value: number): string {
  const t = THRESHOLDS[name];
  if (!t) return String(Math.round(value));
  if (name === 'CLS') return value.toFixed(3);
  if (t.unit === 's') return `${(value / 1000).toFixed(2)}s`;
  return `${Math.round(value)}ms`;
}

type MetricState = { value: number; rating: Rating };

export function WebVitalsPanel() {
  const [metrics, setMetrics] = useState<Record<string, MetricState>>({});
  const [open, setOpen] = useState(true);

  useReportWebVitals((metric) => {
    if (!THRESHOLDS[metric.name]) return;
    setMetrics((prev) => ({
      ...prev,
      [metric.name]: {
        value: metric.value,
        rating: rate(metric.name, metric.value),
      },
    }));
  });

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 9999,
        fontFamily:
          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
      }}
    >
      {open ? (
        <section
          aria-label="Live Web Vitals"
          style={{
            width: 264,
            background: 'rgba(17, 17, 17, 0.92)',
            color: '#fafafa',
            borderRadius: 12,
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            backdropFilter: 'blur(8px)',
            overflow: 'hidden',
          }}
        >
          <header
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 12px',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 0.3 }}>
              Web Vitals
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Hide Web Vitals panel"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#a1a1a1',
                cursor: 'pointer',
                fontSize: 14,
                lineHeight: 1,
                padding: 2,
              }}
            >
              ×
            </button>
          </header>

          <ul style={{ listStyle: 'none', margin: 0, padding: '6px 0' }}>
            {METRIC_ORDER.map((name) => {
              const m = metrics[name];
              const color = m ? RATING_COLOR[m.rating] : '#555';
              return (
                <li
                  key={name}
                  title={THRESHOLDS[name].label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 8,
                    padding: '7px 12px',
                  }}
                >
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: 12,
                    }}
                  >
                    <span
                      aria-hidden
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: color,
                        flexShrink: 0,
                      }}
                    />
                    {name}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                    <span style={{ fontSize: 12, fontVariantNumeric: 'tabular-nums' }}>
                      {m ? formatValue(name, m.value) : '—'}
                    </span>
                    <span
                      style={{
                        fontSize: 9,
                        color,
                        minWidth: 92,
                        textAlign: 'right',
                      }}
                    >
                      {m ? RATING_LABEL[m.rating] : 'waiting'}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Show Web Vitals panel"
          style={{
            background: 'rgba(17, 17, 17, 0.92)',
            color: '#fafafa',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 999,
            padding: '8px 14px',
            fontSize: 12,
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}
        >
          Web Vitals
        </button>
      )}
    </div>
  );
}
