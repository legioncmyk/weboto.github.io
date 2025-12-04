#!/usr/bin/env python3
# sql_example.py - contoh parameterized query (safe)
import sqlite3

def setup(conn):
    conn.execute("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, name TEXT)")
    conn.execute("INSERT INTO users(name) VALUES (?)", ("Alice",))
    conn.commit()

def unsafe_search(conn, name):
    # DONT use this in production - vulnerable to injection if used with other backends
    sql = f"SELECT id, name FROM users WHERE name = '{name}'"
    print("Unsafe SQL:", sql)
    return conn.execute(sql).fetchall()

def safe_search(conn, name):
    # Parameterized query - safe
    return conn.execute("SELECT id, name FROM users WHERE name = ?", (name,)).fetchall()

if __name__ == "__main__":
    conn = sqlite3.connect(":memory:")
    setup(conn)
    print("Safe:", safe_search(conn, "Alice"))
    print("Unsafe (same result):", unsafe_search(conn, "Alice"))
