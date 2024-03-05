interface LogOptions {
  sameLine?: boolean;
}

type LogTypes = "log" | "warn" | "error";

const logFuncMap: Record<LogTypes, (...values: unknown[]) => void> = {
  log: console.log.bind(console),
  warn: console.warn.bind(console),
  error: console.error.bind(console),
};

class SimpleLogger {
  constructor(
    private prefix?: string,
    private forceDisable?: boolean,
    private logOptions?: LogOptions
  ) {}

  private _log(logType: LogTypes, ...values: unknown[]) {
    const func = logFuncMap[logType];

    if (this.forceDisable) {
      return;
    }

    if (this.logOptions?.sameLine) {
      func(`[${this.prefix}] - `, ...values);
    } else {
      for (const val of values) {
        func(`[${this.prefix}] - ${val}`);
      }
    }
  }

  log(...values: unknown[]) {
    this._log("log", ...values);
  }

  warn(...values: unknown[]) {
    this._log("warn", ...values);
  }

  error(...values: unknown[]) {
    this._log("error", ...values);
  }
}

export { SimpleLogger };
