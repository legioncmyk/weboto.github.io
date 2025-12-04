#!/usr/bin/env python3
# http_headers.py
import requests
import sys

def fetch_headers(url):
    r = requests.head(url, allow_redirects=True, timeout=10)
    return r.headers

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python http_headers.py https://example.com")
        sys.exit(1)
    headers = fetch_headers(sys.argv[1])
    for k, v in headers.items():
        print(f"{k}: {v}")
