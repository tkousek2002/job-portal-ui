// Claude Code status line: model name + context usage progress bar.
// Reads session JSON from stdin and prints a single line.
let raw = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => (raw += chunk));
process.stdin.on('end', () => {
  let data = {};
  try {
    data = JSON.parse(raw);
  } catch {
    // fall through with defaults
  }

  const BAR_WIDTH = 10;
  const model = (data.model && data.model.display_name) || 'Claude';
  const used = data.context_window && data.context_window.used_percentage;
  const pct = Math.max(0, Math.min(100, Math.round(Number(used) || 0)));
  const filled = Math.round((pct / 100) * BAR_WIDTH);
  const bar = '█'.repeat(filled) + '░'.repeat(BAR_WIDTH - filled);

  const color = pct >= 80 ? '\x1b[31m' : pct >= 50 ? '\x1b[33m' : '\x1b[32m';
  const reset = '\x1b[0m';

  process.stdout.write(`[${model}] ${color}${bar}${reset} ${pct}%`);
});
