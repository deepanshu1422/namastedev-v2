declare const initSqlJs: (config: {
  locateFile: (file: string) => string;
}) => Promise<{
  Database: new (data?: Uint8Array) => Database;
}>;

interface Database {
  run(sql: string): void;
  exec(sql: string): Array<{
    columns: string[];
    values: any[][];
  }>;
  close(): void;
} 